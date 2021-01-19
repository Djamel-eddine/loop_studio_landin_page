import React from "react";

function CreationsCard({ url, text }) {
  return (
    <div
      style={{
        backgroundImage: { url },
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <h1>{text}</h1>
    </div>
  );
}

export default CreationsCard;
