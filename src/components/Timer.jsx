import { useEffect, useState } from "react";

export default function Timer({ setTimeOut, questionNumber, stopTimer }) {
  const [timer, setTimer] = useState(30);

  useEffect(() => {
    if (timer === 0 || stopTimer) {
      setTimeOut(true);
      return;
    }
    const interval = setInterval(() => {
      setTimer((prev) => prev - 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [timer, setTimeOut, stopTimer]);

  useEffect(() => {
    setTimer(30);
  }, [questionNumber]);

  return timer;
}
