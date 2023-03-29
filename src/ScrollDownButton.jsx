import { useEffect, useState } from "react";
import { ChevronDoubleDownIcon } from "@heroicons/react/20/solid";

export const ScrollDownButton = () => {
  const [isHidden, setIsHidden] = useState(false);

  const toggleHidden = () => {
    const isAtBottom =
      document.documentElement.scrollHeight -
        document.documentElement.clientHeight -
        window.pageYOffset <=
      15;
    isAtBottom ? setIsHidden(true) : setIsHidden(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleHidden);
    return () => window.removeEventListener("scroll", toggleHidden);
  }, []);

  return (
    <div
      className={`scroll-button ${
        isHidden ? "hidden" : ""
      } fixed left-0 right-0 bottom-0 mx-auto z-50 text-gray-300 w-[120px] mb-3 text-center`}
    >
      <span className="text-xl">Scroll Down</span>
      <ChevronDoubleDownIcon className="scroll-down-icon w-[25px] h-[25px] left-0 right-0 mx-auto" />
    </div>
  );
};
