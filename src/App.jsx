import gsap from "gsap";
import "./App.css";
// import { FeatureSection } from "./FeatureSection";
import { FirstSection } from "./FirstSection";
import { Navbar } from "./Navbar";
import { NoticeSection } from "./NoticeSection";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLayoutEffect, useRef } from "react";

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
  const featureTitleRef = useRef(null);

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
        scrollTrigger: {
          start: "60% 60%",
          end: "60% 10%",
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
      <section className="section-two flex justify-center w-screen">
        <div id="features-target" className="-translate-y-32"></div>
        <div
          className="w-full       bg-[url('https://source.unsplash.com/q_w9HHCznYE')]       bg-cover bg-bottom
      bg-fixed 

"
        >
          <h3
            ref={featureTitleRef}
            id="features-section"
            className="text-5xl font-bold w-fit px-3 m-10 relative "
          >
            Features
            <svg
              className="absolute fill-gray-200 -bottom-6 -left-4 z-10 w-[100px] opacity-20"
              viewBox="0 0 200 200"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="50%" cy="50%" r="100" />
            </svg>
          </h3>
          <div className="video-part flex">
            <VideoAndTitle videoName={"video1.mp4"} title="show annotation" />
            <VideoAndTitle videoName={"video2.mp4"} title="add new word" />
            <VideoAndTitle
              videoName={"video3.mp4"}
              title="rating, tagging, editing"
            />
            <VideoAndTitle
              videoName={"video4.mp4"}
              title="manage word collection"
            />
          </div>
        </div>
      </section>

      <NoticeSection />
    </div>
  );
}

export default App;
