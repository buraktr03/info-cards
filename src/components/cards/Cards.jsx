import React from "react";
import Card from "./Card";
import data from "../../helper/data.js";


const Cards = () => {
  return (
    <div className="row">
      {data.map((item) => (
        <div key={item.id} className="col-lg-4 col-md-6 col-sm-12">
          <Card {...item} />
        </div>
      ))}
    </div>
  );
};

export default Cards;
