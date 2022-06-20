import { useState } from "react";

const useToggle = (val) => {
  const [status, setStatus] = useState(val);

  const toggle = () => setStatus((prev) => !prev);

  return {
    status,
    toggle,
  };
};

export default useToggle;
