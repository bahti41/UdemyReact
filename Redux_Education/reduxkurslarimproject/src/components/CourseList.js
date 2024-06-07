import React from "react";
import { useSelector } from "react-redux";
import CourseItem from "./CourseItem";

const CourseList = () => {
  const { cartItem, quentity, total } = useSelector((store) => store.cart);
  return (
    <>
      {quentity < 1 ? (
        <section>
          <header>
            <h2>Sepetiniz</h2>
            <h4>Bomboşş ??</h4>
          </header>
        </section>
      ) : (
        <section>
          <header>
            <h2>Sepetiniz</h2>
          </header>
          <div>
            {cartItem.map((item, index) => {
              return <CourseItem key={index} {...item} />;
            })}
          </div>
          <footer>
            <hr />
            <div>
              <h4>
                Toplam Tutar <span>{total} TL</span>
              </h4>
            </div>
            <button>Temizle</button>
          </footer>
        </section>
      )}
    </>
  );
};

export default CourseList;
