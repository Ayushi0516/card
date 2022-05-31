import React from "react";
import Date from "./Date";
import Icon from "./Icon";

const Card2 = ({ showDate, cardDetails }) => {
  let id = "yellow";
  if (cardDetails.heading === "Apple Gift Payment") {
    id = "grey";
  }

  return (
    <div className="card" id={id} key={cardDetails.id}>
      <Date showDate={showDate} cardDetails={cardDetails} />

      <button className="studyBtn">{cardDetails.button}</button>

      <h1 className="heading">{cardDetails.heading}</h1>

      <Icon cardDetails={cardDetails} />
    </div>
  );
};

export default Card2;