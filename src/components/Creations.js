import React from "react";
import Card from "./CreationsCard";

function Creations() {
  function clicked(e) {
    e.preventDefault();
  }

  const cardsList = [
    { url: "#", text: "deep earth" },
    { url: "#", text: "deep earth" },
    { url: "#", text: "deep earth" },
    { url: "#", text: "deep earth" },
    { url: "#", text: "deep earth" },
    { url: "#", text: "deep earth" },
    { url: "#", text: "deep earth" },
    { url: "#", text: "deep earth" },
  ];

  return (
    <div>
      <header className="creations-header">
        <h1>our creations</h1>
        <button onClick={clicked}>see all</button>
      </header>
      {cardsList.map((item) => {
        const { url, text } = item;
        return <Card url={url} text={text} />;
      })}
    </div>
  );
}

export default Creations;
