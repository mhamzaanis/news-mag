import React from "react";
import defaultImg from "../assets/default.jpg";


const NewsItem = ({ title, description, src, url }) => {
  return (
    <div className="card bg-dark text-light mb-3 d-inline-block my-3 mx-3 px-2 py-2" style={{ maxWidth: "345px" }}>
  <img 
    src={src} 
    onError={(e) => (e.target.src = defaultImg)}
    style={{ height: "200px", objectFit: "cover", paddingLeft: "3px", paddingRight: "3px" }} 
    className="card-img-top" 
    alt={title} 
  />
  <div className="card-body d-flex flex-column">
    <h5 className="card-title">{title ? title.slice(0, 50) + "..." : "No Title"}</h5>
    <p className="card-text flex-grow-1">
      {description ? description.slice(0, 90) + "..." : "No description available"}
    </p>
    <a href={url} className="btn btn-primary mt-auto align-self-end">
      Read more
    </a>
  </div>
</div>

  );
};

export default NewsItem;
