import { useEffect, useState } from "react";

const useDebounce = <T,>(value: T, delay: number = 500) => {
  const [debouncedValue, setDevouncedValue] = useState<T>(value);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setDevouncedValue(value);
    }, delay);

    return () => clearTimeout(timeout);
  }, [value, delay]);
  return debouncedValue;
};

export default useDebounce;
