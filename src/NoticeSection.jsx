export const NoticeSection = () => {
  return (
    <section id="notice-section" className="section-three w-screen mt-10">
      <div className="w-full">
        <h3 className="text-5xl font-bold w-fit px-3 m-10 relative">
          Notice
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
        <div className="bg-white rounded-lg mx-5 max-w-[650px] p-4 shadow-lg">
          <h3 className="text-3xl font-bold mb-3 ">
            ⚠This extension is still unstable.
          </h3>
          <div className="text-xl max-w-2xl">
            It sometimes break the page layout, or even break the whole page
            down, or result in unintended output.
            <br />
            To Prevent this, you can disable this extension in certain sites
            when you find it does not work well.
            <br />
            Find known issues or report new issue in{" "}
            <a
              className="font-bold text-blue-600 hover:text-red-300"
              href="https://github.com/rakakroma/steal-the-word/issues"
            >
              <i>ISSUES section →</i>
            </a>
            .
          </div>
        </div>
      </div>
    </section>
  );
};
