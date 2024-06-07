import React from "react";
import { FaChevronUp, FaChevronDown } from "react-icons/fa6";

const CourseItem = ({ id, title, price, img, quantity }) => {
  return (
    <>
      <div>
        <img src={img} alt="Kurslar" />
        <div>
          <h4>{title}</h4>
          <h4>{price}</h4>
          <div>
            <button>
              <FaChevronUp />
            </button>
            <p>{quantity}</p>
            <button>
              <FaChevronDown />
            </button>
          </div>
        </div>
        <button>Sil</button>
      </div>
    </>
  );
};

export default CourseItem;
