import React from "react";
import { Link } from "react-router-dom";

export const diaryEntries = [
  {
    photo: "https://via.placeholder.com/300",
    title: "Month 1-2",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In libero sem, cursus et dolor ac, tempor faucibus lorem. Integer euismod aliquet fermentum. Cras commodo tellus quis iaculis interdum. Maecenas rutrum, sem a accumsan semper, nibh ligula ornare mauris, vel venenatis magna est eu ex.",
    alt: "",
    path: "/months-1-2",
    buttonText: "Read more about my first months of exchange ➜"
  },
  {
    photo: "https://via.placeholder.com/300",
    title: "Month 3-4",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In libero sem, cursus et dolor ac, tempor faucibus lorem. Integer euismod aliquet fermentum. Cras commodo tellus quis iaculis interdum. Maecenas rutrum, sem a accumsan semper, nibh ligula ornare mauris, vel venenatis magna est eu ex.",
    alt: "",
    path: "/months-3-4",
    buttonText: "Read more about half way point of exchange ➜"
  },{
    photo: "https://via.placeholder.com/300",
    title: "Month 5-6",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In libero sem, cursus et dolor ac, tempor faucibus lorem. Integer euismod aliquet fermentum. Cras commodo tellus quis iaculis interdum. Maecenas rutrum, sem a accumsan semper, nibh ligula ornare mauris, vel venenatis magna est eu ex.",
    alt: "",
    path: "/months-5-6",
    buttonText: "Read more last months of exchange ➜"
  }
]

function Card({photo, title, text, alt, buttonText, path}) {
  return (
    <div className="card">
      <Link to={path}>
      <img src={photo} alt={alt} />
      <div className="card-text">
        <h3 className="card-title">{title}</h3>
        <p>{text}</p>
        <button className="read-more-button">{buttonText}</button>
      </div>
      </Link>
    </div>
  );
}

export default Card;