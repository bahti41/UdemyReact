import React from "react";

const Course = ({ id, content, title, price, removeOneCourse }) => {
  const submitDeleted = () => {
    removeOneCourse(id);
  };
  return (
    <div>
      <div className="card-title-price">
        <h2 className="card-title">{title}</h2>
        <h4 className="card-price">{price}TL</h4>
      </div>
      <button className="cardDeleteBtn" onClick={submitDeleted}>
        Sil
      </button>
    </div>
  );
};

export default Course;
