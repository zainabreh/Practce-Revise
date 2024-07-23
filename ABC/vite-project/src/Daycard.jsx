import React from "react";

const Daycard = ({ day, icon }) => {
  return (
    <div className="daycard">
      <div className="dayhead">
        <h3>{day}</h3>
      </div>
      <hr className="HR" />
      <div className="weatherdayicon">
        <img src={icon} alt="weather-icon" />
      </div>
      <div className="tempHead">
        <h1 className="daytemp">25.3&deg;C</h1>
      </div>
    </div>
  );
};

export default Daycard;