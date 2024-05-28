import React from "react";

function MenuItem(name, image, content, price) {
  return (
    <>
      <div className="manuItem">
        <div style={{ backgroundImage: `url(${image})` }}></div>
        <h1 style={{ marginBottom: "10px" }}>{name}</h1>
        <h6 style={{ margitonTop: "0px" }}>{content}</h6>
        <p>
          <i style={{ color: "red" }}>{price} TL</i>
        </p>
      </div>
    </>
  );
}

export default MenuItem;
