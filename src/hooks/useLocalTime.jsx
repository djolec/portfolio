import { useState, useEffect } from "react";

const useLocalTime = () => {
  const [localTime, setLocalTime] = useState("");

  useEffect(() => {
    const options = {
      timeZone: "Europe/Belgrade",
      hour12: false,
      hour: "2-digit",
      minute: "2-digit",
    };

    const currentTime = new Date();
    setLocalTime(currentTime.toLocaleTimeString("en-US", options));

    const interval = setInterval(() => {
      const now = new Date();

      const timeString = now.toLocaleTimeString("en-US", options);
      setLocalTime(timeString);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  return localTime;
};

export default useLocalTime;
