import React from "react";
import "./Sidebaroption.css";
function Sidebaroption({ Icon, title, count, selected }) {
  return (
    <div className={`sidebaroption ${selected && "sidebaroption__active"}`}>
      <Icon />
      <h3>{title}</h3>
      <p>{count}</p>
    </div>
  );
}

export default Sidebaroption;
