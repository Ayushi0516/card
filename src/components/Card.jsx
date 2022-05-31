import React from "react"
// import "./card.css";
import data from "../data.json"
import Card2 from "./Card2";

let myDate = Date();
myDate = myDate.split(" ");

let dateArray = [];
dateArray.push(myDate[2]);
dateArray.push(myDate[1]);
dateArray.push(myDate[3]);
let showDate = dateArray.join(" ");



const Card= () => {

return (
  <div >
  {data.map((cardDetails) => (
    <Card2
      key={cardDetails.id}
      showDate={showDate}
      cardDetails={cardDetails}
    />
  ))}
</div>
)
}
export default Card;