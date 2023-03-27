import React from "react";

const MenuCard = () => {
  return (
    <>
      <div className="card-container">
        <div className="card">
          <div className="card-body">
            <span className="card-number card-circle subtle">1</span>
            <span className="card-author subtle">Breakfast</span>
            <h2 className="card-title">Waiwai</h2>
            <span className="card-description subtle">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
              aspernatur debitis vel pariatur
            </span>
            <span className="card-read">Read</span>
            <div>
              {/* <img src={image} alt="images" className="card-media" /> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MenuCard;
