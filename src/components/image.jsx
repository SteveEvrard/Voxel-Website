import React from "react";

export const Image = ({ title, link, smallImage, inProgress }) => {
  return (
    <div className="portfolio-item">
      {
      inProgress ? 
        <div className="hover-bg">
          {" "}
          <div className="hover-text">
            <h4>{title}</h4>
            <h4>Coming soon!</h4>
          </div>
          <img src={smallImage} className="img-responsive" alt={title} />{" "}{" "}
        </div> :
        <div className="hover-bg">
        {" "}
        <a href={link} title={title} data-lightbox-gallery="gallery1" target="_blank" rel="noreferrer">
          <div className="hover-text">
            <h4>{title}</h4>
          </div>
          <img src={smallImage} className="img-responsive" alt={title} />{" "}
        </a>{" "}
      </div>        
      }
    </div>
  );
};
