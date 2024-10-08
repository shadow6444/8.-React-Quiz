import { useEffect, useRef, useState } from "react";
import "./Timer.css";

const Timer = ({ onTimeOut, onSkip, skipMessageTimer }) => {
  const [remainingTime, setRemainingTime] = useState(10000);
  const timeOutHandler = useRef(false);

  useEffect(() => {
    setRemainingTime(10000);
  }, [onSkip]);

  useEffect(() => {
    timeOutHandler.current = false;
    const time = setInterval(() => {
      setRemainingTime((prevTime) => {
        if (prevTime < 1000) {
          clearInterval(time);
          if (!timeOutHandler.current) {
            timeOutHandler.current = true;
            setTimeout(() => {
              onTimeOut();
              skipMessageTimer();
            }, 0);
          }
          return 10000;
        }
        return prevTime - 1000;
      });
    }, 1000);

    return () => {
      clearInterval(time);
    };
  }, [onTimeOut]);

  return (
    <div className="quiz-timer-img">
      <img src="/time.svg" alt="timer Clock" />
      <p>{remainingTime / 1000}</p>
    </div>
  );
};

export default Timer;
