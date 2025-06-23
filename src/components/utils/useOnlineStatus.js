import { useState, useEffect } from "react";

const useOnlineStatus = () => {
  const [onlineStatus, setonlineStatus] = useState(false);

  useEffect(() => {
    window.addEventListener("online", () => {
      setonlineStatus(true);
    });
    window.addEventListener("offline", () => {
      setonlineStatus(false);
    });
  }, []);
  
  return onlineStatus;
};

export default useOnlineStatus;
