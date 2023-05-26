import React from "react";
import "./cars.scss";
function index({ text, src }) {
  const mystyle = {
    backgroundImage: `url(
      "${src}"
    )`,
  };

  return (
    <article className="Ccard Ccard--2 w-64">
      <div className="Ccard__info-hover"></div>
      <div className="Ccard__img" style={mystyle}></div>
      <a href="#" className="Ccard_link">
        <div className="Ccard__img--hover" style={mystyle}></div>
      </a>
      <div className="Ccard__info bg-neutral-900">
        <h3 className="Ccard__title">{text}</h3>
      </div>
    </article>
  );
}

export default index;
// .Ccard--2 .Ccard__img, .Ccard--2 .Ccard__img--hover
