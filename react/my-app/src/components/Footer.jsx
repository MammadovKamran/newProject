import React from "react";
import fb from "../images/FB.svg";
import insta from "../images/Instagram.svg";
import youtube from "../images/youtube.svg";
const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-margin">
        <div className="f-contactMe">
          <div>
            <h5>Ünvan</h5>
            <p>Bakı şəhəri. Nərimanov rayonu <br /> Nəcəf Nərimanov küç. 5C</p>
          </div>
          <div>
            <h5>Telefon</h5>
            <p>+99412 000 00 00 </p>
            <p>+99450 000 00 00</p>
          </div>
          <div>
            <h5>Email Poçt</h5>
            <p>sales@goldencrown.az</p>
          </div>
          <div className="social-icons">
            <img src={fb} alt="" />
            <img src={insta} alt="" />
            <img src={youtube} alt="" />
          </div>
        </div>
        <div className="footer-bottom-text">
          <p>Golden Crown - Bütün hüquqlar qorunur 2021</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
