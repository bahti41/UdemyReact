import React from "react";
import "./App.css";
import Course from "./Course";
import Anglur from "./images/d1.jpg";
import Web from "./images/d2.jpg";
import Bootsrap from "./images/d3.jpg";
import FrondEnd from "./images/d4.jpg";
import "bulma/css/bulma.css";

const App = () => {
  return (
    <>
      <div className="app">
        <section className="hero is-link">
          <div className="hero-body">
            <p className="title">Kurslarım</p>
          </div>
        </section>
        <div className="container">
          <section className="section">
            <div className="columns">
              <div className="column">
                <Course
                  image={Anglur}
                  title="Anglur"
                  description="loremasclaslkcnkasncjaskjbckbaskjbcbasjcasascascasc"
                />
              </div>
              <div className="column">
                <Course
                  image={Web}
                  title="Web API"
                  description="loremasclaslkcnkasncjaskjbckbaskjbcbasjcasascascasc"
                />
              </div>
              <div className="column">
                <Course
                  image={Bootsrap}
                  title="Bootsrap"
                  description="loremasclaslkcnkasncjaskjbckbaskjbcbasjcasascascasc"
                />
              </div>
              <div className="column">
                <Course
                  image={FrondEnd}
                  title="FrondEnd"
                  description="loremasclaslkcnkasncjaskjbckbaskjbcbasjcasascascasc"
                />
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default App;
