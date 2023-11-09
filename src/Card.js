import React from 'react';

const Card = () => {
  // Get the current date and time
  const currentDate = new Date();
  const lastUpdated = currentDate.toLocaleString();

  return (
    <div>
      <h2 style={{ fontSize: '3em', paddingTop: '20px', paddingBottom: '20px' }}>Card Components</h2>
      <div className="row">
        <div className="col-md-4">
          <div className="card bg-primary text-white">
            <div className="card-body">
              <h5 className="card-title">Card 01</h5>
              <hr />
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of this card's content.</p>
              <p className="card-updated">Last Updated: {lastUpdated}</p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card bg-danger text-white">
            <div className="card-body">
              <h5 className="card-title">Card 02</h5>
              <hr />
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of this card's content.</p>
              <p className="card-updated">Last Updated: {lastUpdated}</p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card bg-success text-white">
            <div className="card-body">
              <h5 className="card-title">Card 03</h5>
              <hr />
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of this card's content.</p>
              <p className="card-updated">Last Updated: {lastUpdated}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
