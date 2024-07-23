import React from "react";

const Hourcard = ({ temp, icon, time }) => {
  return (
    <div className="hourcard">
      <div className="hourhead">
        <p>{time}</p>
      </div>
      <hr className="HR" />
      <div className="weatherhouricon">
        <img src={icon} alt="weather-icon" />
      </div>
      <div className="tempHead">
        <h1 className="hourtemp">{temp}&deg;C</h1>
      </div>
    </div>
  );
};

export default Hourcard;