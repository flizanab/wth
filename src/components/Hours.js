// Placeholder to host a component
import React from 'react';

const Hours = () => {
  const today = new Date();
  const day = today.getDay();
  let hours;

  if (day >= 1 && day <= 5) {
    // Lunes a viernes
    hours = "9:00 AM - 8:00 PM";
  } else {
    // Sábados y domingos
    hours = "10:00 AM - 4:00 PM";
  }

  return (
    <div>
      <p>Horario de atención hoy: {hours}</p>
    </div>
  );
};

export default Hours;
