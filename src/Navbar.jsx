import gsap from "gsap";
import { useLayoutEffect, useRef } from "react";
import { MyDropdown } from "./MyDropdown";
import { useTranslation } from "react-i18next";

export const Navbar = () => {
  const { t } = useTranslation();
  const navBarRef = useRef(null);
  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from(".navbar", {
        opacity: 0,
        // x: -100,
        duration: 1,
        delay: 1,
      });
    }, navBarRef);
    return () => ctx.revert();
  }, []);

  return (
    <div
      className="fixed top-0 w-screen z-50 flex justify-center"
      ref={navBarRef}
    >
      <nav className="navbar py-2 max-w-lg flex justify-center space-x-2 sm:space-x-4 rounded-md mt-2 bg-slate-200 bg-opacity-60 hover:bg-opacity-100">
        <MyDropdown />
        {[
          ["#top", "nav-top", "Top"],
          ["#features-target", "nav-features", "Features"],
          ["#notice-section", "nav-notice", "Notice"],
        ].map(([target, theClassName, text]) => {
          return (
            <a
              key={text}
              href={target}
              className={
                theClassName +
                " " +
                "font-bold rounded-lg text-md xs:text-xl flex justify-center px-3 text-black hover:bg-slate-300 active:bg-orange-200"
              }
            >
              {t(text)}
            </a>
          );
        })}
        {/* <a
          href="https://github.com/rakakroma/steal-the-word"
          className="text-2xl flex justify-center"
        >
          <img
            className="inline-block w-6 h-6 mx-2 hover:drop-shadow-[0_0_20px_rgba(0,0,0,0.7)]"
            src="github-mark.svg"
            alt="github logo"
          />
        </a> */}
      </nav>
    </div>
  );
};
