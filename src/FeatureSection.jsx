import { useTranslation } from "react-i18next";

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
  const { t } = useTranslation();
  return (
    <section className="section-two flex justify-center w-screen min-h-[50vh]">
      <div id="features-target" className="-translate-y-32"></div>
      <div className="w-full   bg-[url('https://source.unsplash.com/q_w9HHCznYE')]   bg-cover bg-bottom bg-fixed">
        <h3
          id="features-section"
          className="text-5xl font-bold w-fit px-3 m-10 relative text-white"
        >
          {t("Features")}
          <svg
            className="absolute fill-gray-200 -bottom-6 -left-4 z-10 w-[100px] opacity-20"
            viewBox="0 0 200 200"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="50%" cy="50%" r="100" />
          </svg>
        </h3>
        <div className="video-part flex">
          <VideoAndTitle
            videoName={"video1.mp4"}
            title={t("show-annotation")}
          />
          <VideoAndTitle videoName={"video2.mp4"} title={t("add-new-word")} />
          <VideoAndTitle
            videoName={"video3.mp4"}
            title={t("rating-tagging-editing")}
          />
          <VideoAndTitle
            videoName={"video4.mp4"}
            title={t("manage-word-collection")}
          />
        </div>
      </div>
    </section>
  );
};
