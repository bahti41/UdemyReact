import React from "react";
import { useDispatch, useSelector } from "react-redux";
import CourseItem from "./CourseItem";
import { clearCart } from "../controll/cartSlice";

const CourseList = () => {
  const dispatch = useDispatch();

  const { cartItems, quentity, total } = useSelector((store) => store.cart);

  return (
    <>
      {quentity < 1 ? (
        <section className="cart">
          <header>
            <h2>Sepetiniz</h2>
            <h4>Bomboşş ??</h4>
          </header>
        </section>
      ) : (
        <section className="cart">
          <header>
            <h2>Sepetiniz</h2>
          </header>
          <div>
            {cartItems.map((item) => {
              return <CourseItem key={item.id} {...item} />;
            })}
          </div>
          <footer>
            <hr />
            <div>
              <h4>
                Toplam Tutar <span>{total} TL</span>
              </h4>
            </div>
            <button
              className="cartClearButton"
              onClick={() => dispatch(clearCart())}
            >
              Temizle
            </button>
          </footer>
        </section>
      )}
    </>
  );
};

export default CourseList;
