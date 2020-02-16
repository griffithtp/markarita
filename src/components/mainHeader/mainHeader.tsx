import React from "react";
import "./MainHeader.scss";

export default function(props: any) {
  return (
    <div className="MainHeader">
      <div className="MainHeader__content">{props.children}</div>
      <div className="MainHeader__profile">
        <i className="fas fa-user"></i>
      </div>
    </div>
  );
}
