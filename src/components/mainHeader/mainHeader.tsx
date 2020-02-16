import React from "react";
import "./MainHeader.scss";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faCoffee } from "@fortawesome/free-solid-svg-icons";

export default function(props: any) {
  return (
    <div className="MainHeader">
      <div className="MainHeader__content">{props.children}</div>
      <div className="MainHeader__profile">
        profile
        {/* <FontAwesomeIcon icon={faCoffee} /> */}
      </div>
    </div>
  );
}
