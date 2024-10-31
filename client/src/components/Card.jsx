import axios from "axios";
import React from "react";
import { useState } from "react";
import Colors from "./Colors";

const Card = (props) => {
  const card = props.card;
  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState(card.text);
  const [isEditingColor, setIsEditingColor] = useState(false);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const changeColor = () => {
    setIsEditingColor(true);
  };

  const updateText = async () => {
    const response = await axios.put(`http://localhost:5000/cards/${card.id}`, {
      text: editedText,
      color: card.color,
    });
    props.onUpdate(response.data);
    setIsEditing(false);
  };

  const updateColor = async (newColor) => {
    const response = await axios.put(`http://localhost:5000/cards/${card.id}`, {
      text: card.text,
      color: newColor,
    });
    props.onUpdate(response.data);
    setIsEditingColor(false);
  };

  const deleteCard = async () => {
    const response = await axios.delete(
      `http://localhost:5000/cards/${card.id}`
    );
    props.onUpdate(response.data);
  };

  return (
    <div
      className="card"
      style={{ backgroundColor: card.color, padding: "10px" }}
    >
      <div></div>
      {isEditing ? (
        <input
          type="text"
          value={editedText}
          onChange={(e) => setEditedText(e.target.value)}
          onBlur={updateText}
        />
      ) : (
        <div onClick={handleEditClick}>{card.text}</div>
      )}
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
      />
      {isEditingColor ? (
        <Colors onUpdate={updateColor} />
      ) : (
        <div className="btns">
          {}
          <div className="circle">
            <button className="color-btn" onClick={changeColor}></button>
          </div>
          <button className="delete-btn" onClick={deleteCard}>
            <i className="fas fa-trash"></i>
          </button>
        </div>
      )}
    </div>
  );
};

export default Card;
