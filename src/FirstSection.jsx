import { useTranslation } from "react-i18next";

const AppHeading = () => {
  const { t } = useTranslation();
  return (
    <div>
      <div className="relative z-30 ">
        <h2 className="heading-ad-tag absolute top-[-20px] text-lg lg:text-xl font-bold bg-red-400 text-white w-fit px-3">
          {t("100-free")}
        </h2>
        <h1 className="heading-main-title  -rotate-3 text-3xl xs:text-4xl lg:text-5xl xl:text-6xl font-bold bg-gray-300 text-gray-700 w-fit px-3 mb-5">
          <div className="heading-main-title-text">Steal the Word!</div>
        </h1>
        <div className="heading-content z-30">
          <h2 className="heading-summary text-xl sm:text-2xl font-bold  bg-black text-white w-fit px-3">
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
              className="inline-block w-6 sm:w-8 group-hover/chrome:w-12 mx-2 transition-all"
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
    <section className="section-one flex relative h-full justify-center w-screen mb-12">
      <div className="w-full h-full min-h-[400px] max-w-[600px]">
        <div className="relative z-10 w-full flex lg:block justify-center">
          <img
            className="app-img mt-16"
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
