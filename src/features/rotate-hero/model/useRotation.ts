import { useEffect, useState } from "react";

export function useRotation({ total, ms }: { total: number; ms: number }) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setCurrent((c) => (c + 1) % total);
    }, ms);
    return () => clearInterval(id);
  }, [total, ms]);

  return current;
}
