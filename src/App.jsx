import gsap from "gsap";
import "./App.css";
import { FirstSection } from "./FirstSection";
import { Navbar } from "./Navbar";
import { NoticeSection } from "./NoticeSection";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { FeatureSection } from "./FeatureSection";
import { isSafari } from "react-device-detect";

gsap.registerPlugin(ScrollTrigger);

function App() {
  const containerRef = useRef(null);
  const videoPartRef = useRef(null);
  const currentWidth = Math.max(
    document.documentElement.clientWidth || 0,
    window.innerWidth || 0
  );

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from(".gradient-blob", {
        opacity: 0,
        scale: 0.4,
        rotate: 45,
        duration: 3,
        ease: "power3",
      });
      gsap
        .timeline()
        .from(".app-img", {
          opacity: 0,
          delay: 0.5,
          duration: 2.5,
          ease: "power3",
        })
        .from(
          ".heading-main-title",
          {
            x: 50,
            opacity: 0,
          },
          "-=2"
        )
        .from(".heading-content", { opacity: 0 }, "-=1.2")
        .from(".heading-install-button", { opacity: 0 }, "-=0.6")
        .from(".heading-ad-tag", { opacity: 0 });

      gsap.to(".video-part", {
        x: -(videoPartRef.current.scrollWidth - currentWidth),
        //this did not detect the window's width change automatically
        scrollTrigger: {
          start: "60% 60%",
          end: `+=${videoPartRef.current.scrollWidth - currentWidth}`,
          trigger: ".section-two",
          scrub: 1,
          // markers: true,
          pin: true,
        },
      });

      gsap.fromTo(
        ".gradient-blob",
        { bottom: "38%" },
        {
          bottom: "10%",
          scale: 1.3,
          scrollTrigger: {
            start: "50% bottom",
            end: "50% top",
            scrub: 1,
            // markers: true,
          },
        }
      );
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      className="top   bg-[#141c18]
       w-screen pb-12 overflow-x-hidden"
    >
      <img
        src={isSafari ? "gradient-blob-safari.svg" : "gradient-blob.svg"}
        className="gradient-blob fixed  left-0 right-0 my-0 z-0 mx-auto w-[450px] opacity-90"
      />

      <Navbar />
      <FirstSection />
      <FeatureSection ref={videoPartRef} />
      <NoticeSection />
      <section
        id="credit-section"
        className="section-four w-screen mt-10 text-black min-h-[5vh] relative z-10"
      >
        <div className="w-full h-full flex justify-center">
          <h4 className="text-xl text-white">
            built by rakakroma
            <a
              href="https://github.com/rakakroma/steal-the-word"
              className="text-xl"
            >
              <img
                className=" inline-block w-6 h-6 mx-2 hover:drop-shadow-[0_0_20px_rgba(0,0,0,0.7)]"
                src="github-mark-white.svg"
                alt="github"
              />
            </a>
          </h4>
        </div>
      </section>
    </div>
  );
}

export default App;
