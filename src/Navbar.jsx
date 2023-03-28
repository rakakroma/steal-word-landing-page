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
    <div className="fixed top-0 w-screen z-50 flex justify-end" ref={navBarRef}>
      <nav className="navbar p-2 max-w-lg flex justify-center space-x-0 xs:space-x-2 sm:space-x-4  bg-opacity-60">
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
                "font-bold rounded-lg text-md  md:text-xl flex justify-center px-3 text-white hover:bg-slate-800 active:bg-orange-200"
              }
            >
              {t(text)}
            </a>
          );
        })}
      </nav>
    </div>
  );
};
