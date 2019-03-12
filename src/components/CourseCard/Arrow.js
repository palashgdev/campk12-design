import React from "react";
import "./Arrow.css";

function Arrow({ icon, className, onClick, style }) {
  return (
    <div style={{ ...style }} onClick={onClick} className={className}>
      <div className={"arrow-container"}>
        <img src={icon} alt={'icon'} />
      </div>
    </div>
  )
};

export default Arrow;