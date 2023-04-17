import gsap from "gsap";
import "./App.css";
import { FirstSection } from "./FirstSection";
import { Navbar } from "./Navbar";
import { NoticeSection } from "./NoticeSection";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLayoutEffect, useRef } from "react";
import { FeatureSection } from "./FeatureSection";
import { isSafari } from "react-device-detect";
import { ScrollDownButton } from "./ScrollDownButton";
import { useResize } from "./useResize";
gsap.registerPlugin(ScrollTrigger);

function App() {
  const { videoPartRef, countedWidth } = useResize();

  const containerRef = useRef(null);
  // const videoPartRef = useRef(null);
  // const currentWidth = Math.max(
  //   document.documentElement.clientWidth || 0,
  //   window.innerWidth || 0
  // );

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.fromTo(
        ".gradient-blob",
        {
          opacity: 0,
          scale: 0.3,
          rotate: 45,
          x: 0,
          y: 0,
        },
        {
          x: 0,
          y: "150%",
          rotate: 120,
          scale: 0.5,
          opacity: 0.5,
          duration: 3,
          ease: "power3",
        }
      );
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

      gsap.fromTo(
        ".scroll-down-icon",
        {
          opacity: 0.3,
          y: -10,
        },
        { opacity: 1, y: 0, repeat: -1, ease: "power3", duration: 2 }
      );

      gsap.to(".video-part", {
        x: -countedWidth,
        //this did not detect the window's width change automatically
        scrollTrigger: {
          start: "60% 60%",
          end: `+=${countedWidth}`,
          trigger: ".section-two",
          scrub: 1,
          // markers: true,
          pin: true,
        },
      });

      gsap.fromTo(
        ".gradient-blob",
        { x: 0, y: "150%", rotate: 120, scale: 0.5, opacity: 0.5 },
        {
          x: 0,
          y: "50%",
          rotate: 180,
          scale: 1.3,
          opacity: 1,
          scrollTrigger: {
            start: "10% center",
            end: "35% center",
            toggleActions: "restart none none reverse",
            // scrub: 1,
            trigger: ".section-two",
            // markers: true,
          },
        }
      );
      gsap.fromTo(
        ".gradient-blob",
        { y: "50%", scale: 1.3, rotate: 180 },
        {
          y: "70%",
          scale: 1.8,
          rotate: 260,
          scrollTrigger: {
            start: "10% center",
            end: "35% center",
            toggleActions: "restart none none reverse",
            scrub: 1,
            trigger: ".section-three",
            // markers: true,
          },
        }
      );

      gsap.to(".scroll-button", {
        scrollTrigger: {
          start: "10% bottom",
          trigger: "#credit-section",
          toggleClass: { targets: ".scroll-button", className: "hide" },
          // markers: true,
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, [countedWidth]);

  return (
    <div
      ref={containerRef}
      className="top   bg-[#141c18]
       w-screen pb-12 overflow-x-hidden"
    >
      <img
        src={isSafari ? "gradient-blob-safari.svg" : "gradient-blob.svg"}
        className="gradient-blob fixed left-0 right-0 my-0 z-0 mx-auto w-[450px] opacity-90 will-change-transform"
      />
      <ScrollDownButton />
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
