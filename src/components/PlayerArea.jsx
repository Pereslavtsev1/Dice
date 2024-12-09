const PlayerArea = ({ number, score, reversed }) => {
  return (
    <>
      <div
        className={`area relative ${reversed ? "rotate-180 transform" : ""}`}
      >
        <div className="playerArea border-main bg-secondary relative flex h-14 w-64 items-center justify-center rounded-lg border-4 border-solid">
          <h1
            className={`text-1xl ${reversed ? "rotate-180 transform" : ""} font-bold`}
          >
            Player {number}
          </h1>

          <div
            className={`circle-overlay border-main bg-secondary absolute right-[-20px] top-[50%] flex h-16 w-16 translate-y-[-50%] items-center justify-center rounded-full border-4 border-solid`}
          >
            <h1
              className={`text-sm ${reversed ? "rotate-180 transform" : ""} font-bold`}
            >
              {score}
            </h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default PlayerArea;
