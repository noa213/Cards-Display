import React from "react";

const Colors = (props) => {
  const colors = [
    // "#f4cf9f",
    // "#9ff4d1",
    // "#ba9ff4",
    // "#f49fd9",
    "#F2B2BB",
    "#A9CCE3",
    "#F2E394",
    "#A8E4A0",
    "#DDA0DD",
  ];

  const changeColor = (color) => {
    props.onUpdate(color);
  };

  return (
    <div className="colors">
      {colors.map((color) => (
        <button
          key={color}
          style={{ backgroundColor: color, padding: "10px" }}
          className="color-btn"
          onClick={() => changeColor(color)}
        />
      ))}
    </div>
  );
};

export default Colors;
