import React from "react";
import Card from "../../assets/card.jpg";

function MusicCard() {
  return (
    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g5">
        <div className="col my-3">
      <div className="card text-bg-dark">
        <img src={Card} className="card-img blur" alt="..." />
        <div className="card-img-overlay d-flex justify-content-center align-items-center">
          <h2 className="">Card Title</h2>
        </div>
      </div>
        </div>
    </div>
  );
}
export default MusicCard
