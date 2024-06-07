import React from "react";
import { FaShoppingBasket } from "react-icons/fa";
import { useSelector } from "react-redux";

const Navbar = () => {
  const { quentity } = useSelector((store) => store.cart);
  console.log(useSelector((state) => state.cart));
  return (
    <nav>
      <div className="navBar">
        <h3>Kurslarım Uygulaması</h3>
        <div className="navDiv">
          <div className="itemsDiv">
            <p>{quentity}</p>
          </div>
          <FaShoppingBasket className="itemsIcon" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
