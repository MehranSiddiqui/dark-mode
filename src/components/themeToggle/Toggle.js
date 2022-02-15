import React from "react";
import "./toggle.css";
const Toggle = (props) => {
  return (
    <>
      <input
        type="checkbox"
        id={`react-switch`}
        className="react-switch-checkbox"
        onChange={props.onChange}
        checked={props.checked}
      />
      <label className="react-switch-label" htmlFor={`react-switch`}>
        <span className="react-switch-button"></span>
      </label>
    </>
  );
};

export default Toggle;
