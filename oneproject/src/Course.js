import React from "react";

// props kullanım şekilleri
// 1
const Course = ({ image, title, description }) => {
  // 2
  // const title = props
  // const description = props
  // 3
  // const {title,description} = props

  return (
    <>
      <div className="card">
        <div className="card-image">
          <figure className="image is-4by3">
            <img src={image} alt="Filmler" />
          </figure>
        </div>
        <div className="card-content">
          <div className="media-content">
            <p className="title is-4">{title}</p>
          </div>
        </div>

        <div className="content">{description}</div>
      </div>
      {/* <img src={image} alt="" />
      <div>{title}</div>
      <div>{description}</div> */}
    </>
  );
};

export default Course;
