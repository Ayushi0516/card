import React from "react";

const Date = ({ showDate, cardDetails }) => {
  return (
    <div className="dateIcon">
      <p>{showDate}</p>
      <img src={cardDetails.image} />
    </div>
  );
};

export default Date;