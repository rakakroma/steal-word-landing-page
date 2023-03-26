import { ExclamationTriangleIcon } from "@heroicons/react/20/solid";
import { useTranslation } from "react-i18next";

export const NoticeSection = () => {
  const { t } = useTranslation();

  return (
    <section
      id="notice-section"
      className="section-three w-screen mt-10 text-black"
    >
      <div className="w-full">
        <h3 className="text-5xl font-bold w-fit px-3 m-10 relative">
          {t("Notice")}
          <svg
            className="absolute fill-green-200 -bottom-6 -left-4 z-10 w-[100px] opacity-40"
            viewBox="0 0 200 200"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="50%" cy="50%" r="100" />
          </svg>
        </h3>
      </div>
      <div className="flex justify-center">
        <div className="bg-white rounded-lg mx-5 max-w-[650px] p-4 shadow-lg flex">
          <h3>
            <ExclamationTriangleIcon className=" w-10 text-red-600" />
          </h3>
          <div>
            <h3 className="text-2xl font-bold ">{t("short-notice")}</h3>
            <div className="text-xl max-w-2xl">
              {t("long-notice")}
              <br />
              {t("find-known-issues-1st")}{" "}
              <a
                className="font-bold text-blue-600 hover:text-red-300"
                href="https://github.com/rakakroma/steal-the-word/issues"
              >
                <i>Issues section →</i>
              </a>
              {t("find-known-issues-2nd")}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
