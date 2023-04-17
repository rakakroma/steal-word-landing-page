import { ChevronDoubleDownIcon } from "@heroicons/react/20/solid";

export const ScrollDownButton = () => {
  return (
    <div
      className={`scroll-button fixed left-0 right-0 bottom-0 mx-auto z-50 text-gray-300 w-[120px] mb-3 text-center`}
    >
      <span className="text-xl">Scroll Down</span>
      <ChevronDoubleDownIcon className="scroll-down-icon w-[25px] h-[25px] left-0 right-0 mx-auto" />
    </div>
  );
};
