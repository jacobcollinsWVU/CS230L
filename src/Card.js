import React from 'react';

const Card = () => {
  return (
    <div className="row">
      <div className="col-md-4">
        <div className="card bg-primary text-white">
          <div className="card-body">
            <h5 className="card-title">Card 01</h5>
            <hr />
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of this card's content.</p>
          </div>
        </div>
      </div>
      <div className="col-md-4">
        <div className="card bg-danger text-white">
          <div className="card-body">
            <h5 className="card-title">Card 02</h5>
            <hr />
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of this card's content.</p>
          </div>
        </div>
      </div>
      <div className="col-md-4">
        <div className="card bg-success text-white">
          <div className="card-body">
            <h5 className="card-title">Card 03</h5>
            <hr />
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of this card's content.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
