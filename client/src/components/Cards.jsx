import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
// import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
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

  //   const reorder = (list, startIndex, endIndex) => {
  //     const result = Array.from(list);
  //     const [removed] = result.splice(startIndex, 1);
  //     result.insert(endIndex, removed);
  //     return result;
  //   };

//   const onDragEnd = (result) => {
//     // Check if the drag was successful
//     if (!result.destination) return;

//     // Get the old and new indexes of the dragged card
//     const oldIndex = result.source.index;
//     const newIndex = result.destination.index;

//     // Check if the card was moved within the same list
//     if (result.source.droppableId === result.destination.droppableId) {
//       // Reorder the cards locally using a copy of the state
//       const newCards = [...cards];
//       const [removed] = newCards.splice(oldIndex, 1);
//       newCards.splice(newIndex, 0, removed);
//       setCards(newCards);
//     } else {
//       // Handle card movement between different lists (future implementation)
//       console.warn("Moving cards between lists not implemented yet.");
//     }
//   };
  //   const Grid = (cards) => {
  //     return (
  //       <DragDropContext onDragEnd={onDragEnd}>
  //         <Droppable droppableId="droppable">
  //           {(provided) => (
  //             <div {...provided.droppableProps} ref={provided.innerRef}>
  //               {cards.map((card, index) => (
  //                 <Draggable key={card.id} draggableId={card.id} index={index}>
  //                   {(provided) => (
  //                     <div ref={provided.innerRef} {...provided.draggableProps}>
  //                       <div
  //                         {...provided.dragHandleProps}
  //                         style={{ cursor: "grab" }}
  //                       >
  //                         {'/* Content for the drag handle */'}
  //                       </div>
  //                       <Card key={card.id} onUpdate={handleUpdate} card={card} />
  //                     </div>
  //                   )}
  //                 </Draggable>
  //               ))}
  //               {provided.placeholder}
  //               <button className="add-btn" onClick={addCard}>
  //                 +
  //               </button>
  //             </div>
  //           )}
  //         </Droppable>
  //       </DragDropContext>
  //     );
  //   };
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
