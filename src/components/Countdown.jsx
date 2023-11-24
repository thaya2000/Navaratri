import React, { useEffect, useState } from "react";
import "./Countdown.css";

const Countdown = () => {
  const [timerDays, setTimerDays] = useState("00");
  const [timerHours, setTimerHours] = useState("00");
  const [timerMinutes, setTimerMinutes] = useState("00");
  const [timerSeconds, setTimerSeconds] = useState("00");

  const timeUnit = (value, unit) => (
    <section className="timer-Design">
      <p>{value}</p>
      <small>{unit}</small>
    </section>
  );

  const formatTime = (time) => (time < 10 ? `0${time}` : time.toString());

  const startTimer = () => {
    const countdownDate = new Date("November 24, 2023 18:00:00").getTime();
    const updateTimer = () => {
      const now = new Date().getTime();
      const distance = countdownDate - now;

      if (distance > 0) {
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        setTimerDays(formatTime(days));
        setTimerHours(formatTime(hours));
        setTimerMinutes(formatTime(minutes));
        setTimerSeconds(formatTime(seconds));

        // Schedule the next update
        setTimeout(updateTimer, 1000);
      }
    };

    // Start the timer
    updateTimer();
  };

  useEffect(() => {
    startTimer();
  }, []); // No need to return anything from useEffect

  return (
    <section className="timer-container">
      <section className="timer">
        {timeUnit(timerDays, "Days")}
        {timeUnit(timerHours, "Hours")}
        {timeUnit(timerMinutes, "Minutes")}
        {timeUnit(timerSeconds, "Seconds")}
      </section>
    </section>
  );
};

export default Countdown;
