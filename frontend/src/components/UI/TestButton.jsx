import React from "react";
import { Link } from "react-router-dom";

const TestButton = ({ to, label, className = "" }) => (
  <Link to={to} className={`button ${className}`.trim()}>
    {label}
  </Link>
);

export default TestButton;
