// CardDefault.jsx
import React from "react";
import "./Card.css";

export default function CardDefault({ title, description, image }) {
  return (
    <div className="card">
      <div className="card-header">
        <img src={image} alt={title} />
      </div>
      <div className="card-body">
        <h5>{title}</h5>
        <p>{description}</p>
      </div>
      <div className="card-footer">
        <button>Read More</button>
      </div>
    </div>
  );
}
