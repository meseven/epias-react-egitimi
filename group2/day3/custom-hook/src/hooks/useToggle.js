import { useState } from "react";

const useToggle = (status) => {
  const [isVisible, setIsVisible] = useState(status);

  const toggle = () => setIsVisible((prev) => !prev);

  return {
    data: isVisible,
    toggle,
  };
};

export default useToggle;
