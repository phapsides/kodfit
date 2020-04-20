import React from "react";
import "./SwitchButtons.css";

export default function SwitchButtons({ text, onClick }) {
  return (
    <div className="SwitchButtons">
      <button className="toggleQuery" onClick={onClick}>
        Find your nearest {text}
      </button>
    </div>
  );
}
