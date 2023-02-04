import React from "react";
import PropTypes from "prop-types";

import "./cards.css";

function Card({ title, imageSource, url, btntext, text }) {
  return (
    <div className="card text-center bg-dark animate__animated animate__fadeInUp ">
      <div className="overflow1">
        <img src={imageSource} alt="logo" className="card-img-top"/>
      </div>
      <div className="card-body text-light">
        <h4 className="card-title">
          {title ? title : "aweonao conchesumadre olvido el titulo"}
        </h4>
        <p className="card-text text-secondary"> {text ? text:'Esta wea fue echa gracias a un video de Fast code, fue un copy past visual y funcional pero messiver para entender el funcionamiento de react, TY FAST WEB'}
          
        </p>
        <a
          href={url}
          className="btn btn-outline-secondary rounded-0"
          target="_blank"
          without
          rel="noreferrer"
        >
          {btntext}
        </a>
      </div>
    </div>
  );
}

Card.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string,
  imageSource: PropTypes.string,
};
export default Card;
