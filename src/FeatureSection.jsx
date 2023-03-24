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

export const FeatureSection = () => {
  return (
    <section className="section-two flex justify-center w-screen">
      <div id="features-target" className="-translate-y-60"></div>
      <div className="w-full">
        <h3
          id="features-section"
          className="text-5xl font-bold w-fit px-3 m-10"
        >
          Features
        </h3>
        <div className="video-part flex ">
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
  );
};
