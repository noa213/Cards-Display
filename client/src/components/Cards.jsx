import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import Card from "./Card";

const Cards = () => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    getCards();
  }, []);

  const getCards = async () => {
    const response = await axios.get("http://localhost:5000/cards");
    setCards(response.data);
  };

  const addCard = async () => {
    const response = await axios.post("http://localhost:5000/cards", {
      text: "text",
      color: "#808080",
    });
    setCards(response.data);
  };

  const handleUpdate = (newData) => {
    setCards(newData);
  };

  return (
    <div>
      <h1>CARDS</h1>
      <div className="card-container">
        {/* {Grid(cards)} */}
        {cards.map((card) => (
          <Card key={card.id} onUpdate={handleUpdate} card={card} />
        ))}
        <div className="add-btn-container">
          <button className="add-btn" onClick={addCard}>
            +
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cards;
