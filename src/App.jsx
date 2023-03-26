import gsap from "gsap";
import "./App.css";
import { FirstSection } from "./FirstSection";
import { Navbar } from "./Navbar";
import { NoticeSection } from "./NoticeSection";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLayoutEffect, useRef } from "react";
import { FeatureSection } from "./FeatureSection";

gsap.registerPlugin(ScrollTrigger);

const VideoAndTitle = ({ videoName, title }) => {
  return (
    <div className="relative flex flex-col items-center">
      <div className="relative bg-white rounded-lg mx-10 my-8 p-5  border-gray-500 border-2">
        <h4 className="absolute -top-8 left-0 w-fit text-2xl text-bold px-3 capitalize bg-slate-400 text-white rounded-md">
          {title}
        </h4>

        <video
          className=" min-w-[320px] w-[550px]  max-w-[85vw] "
          muted
          autoPlay
          loop
        >
          <source src={videoName} type="video/mp4" />
        </video>
      </div>
    </div>
  );
};

function App() {
  const containerRef = useRef(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
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
        x: -1900,
        duration: 10,
        scrollTrigger: {
          start: "60% 60%",
          end: "+=2000",
          trigger: ".section-two",
          scrub: 1,
          // markers: true,
          pin: true,
        },
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      className="top bg-slate-100 w-screen pb-12 overflow-x-hidden"
    >
      <Navbar />
      <FirstSection />
      <FeatureSection />
      <NoticeSection />
      <section
        id="credit-section"
        className="section-four w-screen mt-10 text-black min-h-[5vh] "
      >
        <div className="w-full h-full flex justify-center">
          <h4 className="text-xl">
            Built by rakakroma
            <a
              href="https://github.com/rakakroma/steal-the-word"
              className="text-xl"
            >
              <img
                className="inline-block w-6 h-6 mx-2 hover:drop-shadow-[0_0_20px_rgba(0,0,0,0.7)]"
                src="github-mark.svg"
                alt="github logo"
              />
            </a>
          </h4>
        </div>
      </section>
    </div>
  );
}

export default App;
