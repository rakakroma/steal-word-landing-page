import { useEffect, useRef, useState } from "react";

const debounce = (fn, t = 250) => {
  let timeout = null;
  return (...args) => {
    if (timeout) clearTimeout(timeout);
    timeout = setTimeout(() => {
      fn(...args);
    }, t);
  };
};

export const useResize = () => {
  const [countedWidth, setCountedWidth] = useState(1000);

  const videoPartRef = useRef(null);

  useEffect(() => {
    const resizeHandler = (e) => {
      const currentWidth = Math.max(
        document.documentElement.clientWidth || 0,
        window.innerWidth || 0
      );
      const newCountedWidth = videoPartRef?.current?.scrollWidth - currentWidth;
      setCountedWidth(newCountedWidth);
      console.log(newCountedWidth);
    };
    resizeHandler();
    const debouncedHandler = debounce(resizeHandler);
    window.addEventListener("resize", debouncedHandler);
    return () => {
      window.removeEventListener("resize", debouncedHandler);
    };
  }, []);

  return { videoPartRef, countedWidth };
};
