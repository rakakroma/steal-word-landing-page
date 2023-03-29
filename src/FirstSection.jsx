import { useTranslation } from "react-i18next";

const AppHeading = () => {
  const { t } = useTranslation();
  return (
    <div>
      <div className="relative z-30 ">
        <h2 className="heading-ad-tag absolute -left-6 -rotate-3 top-[-20px] z-40 text-md lg:text-lg font-bold bg-red-400 text-white px-1 w-fit whitespace-nowrap">
          {t("100-free")}
        </h2>
        <h1 className="heading-main-title text-3xl xs:text-4xl lg:text-5xl xl:text-6xl font-bold bg-black lg:bg-transparent  text-gray-200 w-fit px-3 ">
          <div className="heading-main-title-text">Steal the Word!</div>
        </h1>
        <div className="heading-content z-30">
          <h2 className="heading-summary text-xl sm:text-2xl font-bold  bg-black lg:bg-transparent  text-white w-fit px-3 mb-2">
            {t("a-chrome-extension")}
          </h2>
          <h2 className="heading-detail-1 text-sm xs:text-lg sm:text-xl xl:text-2xl font-bold bg-white text-black w-fit px-3">
            {t("highlight-or-or-annotate-or-or-collect")}
          </h2>
          <h2 className="heading-detail-2 text-sm xs:text-lg sm:text-xl xl:text-2xl font-bold bg-white text-black w-fit px-3">
            {t("any-words-in-any-web-pages")}
          </h2>
        </div>
        <div className="heading-install-button mt-5">
          <a
            href="https://chrome.google.com/webstore/detail/steal-the-word/lolkalfaocfklgolbfblhdblhdppoaoa"
            className="group/chrome hover:bg-red-500 text-xl lg:text-3xl  bg-red-600 text-white p-3 block w-fit rounded-lg"
          >
            {t("Install")}
            <img
              className="inline-block w-4 sm:w-6 group-hover/chrome:w-8 mx-2 transition-all"
              src="https://upload.wikimedia.org/wikipedia/commons/0/0c/Google_Chrome_Web_Store_icon_2022.svg"
            />
            →
          </a>
        </div>
      </div>
    </div>
  );
};

const AppHeadingSm = () => {
  return (
    <div className="app-headings-sm">
      <AppHeading />
    </div>
  );
};
const AppHeadingLg = () => {
  return (
    <div className="app-headings-lg">
      <AppHeading />
    </div>
  );
};

export const FirstSection = () => {
  return (
    <section className="section-one flex relative h-[100vh] justify-center w-screen mb-12">
      {/* <svg
        className="absolute fill-gray-700 -bottom-[550px] left-0 right-0 my-0 z-0 mx-auto w-[750px] opacity-70 "
        viewBox="0 0 200 200"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="50%" cy="50%" r="100" />
      </svg> */}

      <div className="w-full h-full min-h-[400px] max-w-[600px]">
        <div className="relative z-10 w-full flex lg:block justify-center">
          <img
            className="app-img mt-16 z-20"
            width="550px"
            src="transparent-thief2.png"
          />
          <div className="lg:hidden absolute z-20 bottom-[-10px] left-14 ">
            <AppHeadingSm />
          </div>
        </div>
      </div>
      <div className="relative flex items-center">
        <div className="hidden lg:block mr-3">
          <AppHeadingLg />
        </div>
      </div>
    </section>
  );
};
