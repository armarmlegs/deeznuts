import React from "react";
import { Link } from "react-router-dom";
import './button.css'

const STYLES = ["btn--primary", "btn--outline"];
const SIZES = ["btn--medium", "btn--large"];

const Button = ({ children, type, onClick, buttonStyle, buttonSize }) => {
  const checkButtonStyle = STYLES.includes(buttonStyle)
    ? buttonStyle
    : STYLES[0];
  const checkButtonSizes = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];
  return (
    <div>
      <Link to="/signUp" className="btn-mobile">
        <button className={`btn ${checkButtonStyle} ${checkButtonSizes}`} onClick={onClick} type={type}>
          {children}
        </button>
      </Link>
    </div>
  );
};

export default Button;
