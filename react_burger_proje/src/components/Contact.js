import React from "react";
import Banner from "../image/banner.png";
import "../style/Contact.css";

function Contact() {
  return (
    <>
      <div className="contact">
        <div
          className="leftSide"
          style={{ backgroundImage: `url(${Banner})` }}
        ></div>
        <div className="rightSide">
          <h1>Bizimle İletişime Geçin</h1>
          <form>
            <label>Ad Soyad</label>
            <input
              type="text"
              name="name"
              placeholder="Lütfen Adınızı ve Soyadınızı Giriniz..."
            />
            <label>Email</label>
            <input
              type="email"
              name="email"
              placeholder="Lütfen Email Adresinizi Giriniz..."
            />
            <label>Email</label>
            <textarea
              rows="6"
              name="message"
              placeholder="Lütfen Mesajınızı Giriniz..."
            ></textarea>
          </form>
        </div>
      </div>
    </>
  );
}

export default Contact;
