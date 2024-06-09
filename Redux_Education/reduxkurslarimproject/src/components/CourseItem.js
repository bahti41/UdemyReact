import React from "react";
import { FaChevronUp, FaChevronDown } from "react-icons/fa6";
import { useDispatch } from "react-redux";
import { removeItem, increase, decrease } from "../controll/cartSlice";

const CourseItem = ({ id, title, price, img, quantity }) => {
  const dispatch = useDispatch();

  return (
    <>
      <div className="cartItem">
        <img src={img} alt="kurslarım" />
        <div className="cartInfo">
          <h4>{title}</h4>
          <h4>{price}</h4>
          <div>
            <button
              className="cartQuantityButton"
              onClick={() => {
                dispatch(increase(id));
              }}
            >
              <FaChevronUp />
            </button>
            <p className="cartQuantity">{quantity}</p>
            <button
              className="cartQuantityButton"
              onClick={() => {
                dispatch(decrease(id));
              }}
            >
              <FaChevronDown />
            </button>
          </div>
          <button
            className="cartDeleteButton"
            onClick={() => {
              dispatch(removeItem(id));
            }}
          >
            Sil
          </button>
        </div>
      </div>
    </>
  );
};

export default CourseItem;
