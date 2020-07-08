import React from "react";

const Time = () => {
  const date = new Date();
  let hours = date.getHours();
  let minutes = date.getMinutes();

  let timeOfDay = "Night";

  if (hours <= 12 && hours < 17) {
    timeOfDay = "Good Morning";
  } else {
    timeOfDay = "Good Evening";
  }

  return (
    <div>
      <h1>
        {hours}:{minutes}
      </h1>
      <h1>{timeOfDay}</h1>
    </div>
  );
};

export default Time;
