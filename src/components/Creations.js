import React from "react";
import Card from "./CreationsCard";

function Creations() {
  function clicked(e) {
    e.preventDefault();
  }

  const cardsList = [
    { url: "./images/desktop/image-deep-earth.jpg", text: "deep earth" },
    { url: "./images/desktop/image-night-arcade.jpg", text: "night arcade" },
    { url: "./images/desktop/image-soccer-team.jpg", text: "soccer team vr" },
    { url: "./images/desktop/image-grid.jpg", text: "the grid" },
    { url: "./images/desktop/image-from-above.jpg", text: "from up above vr" },
    {
      url: "./images/desktop/image-pocket-borealis.jpg",
      text: "packet borealis",
    },
    { url: "./images/desktop/image-curiosity.jpg", text: "the curiosity" },
    { url: "./images/desktop/image-fisheye.jpg", text: "make it fisheye" },
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
