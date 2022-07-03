/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";

const Hero = () => {
  return (
    <div id="home" className={tw`flex flex-col lg:flex-row justify-between`}>
      <div
        className={tw`flex flex-col gap-4 justify-center items-start flex-1 max-w-2xl py-8`}
      >
        <div>
          <span
            className={tw`text-md md:text-lg lg:text-xl font-semibold bg-yellow-500 bg-opacity-25 rounded-lg p-2`}
          >
            {"👋 Hello"}
          </span>
        </div>
        <div>
          <h1
            className={tw`text-3xl md:text-4xl lg:text-5xl font-semibold font-serif leading-snug`}
          >
            {"I'm Daft, A Software Engineer and Frontend Enthusiast"}
          </h1>
        </div>
        <div className={tw`flex gap-4`}>
          <button
            className={tw`border px-4 py-2 text-sm md:text-md lg:text-lg rounded-lg text-white border-2 border-theme-blue bg-theme-blue hover:bg-white hover:text-theme-blue font-semibold`}
          >
            View My Work
          </button>
        </div>
      </div>
      <div className={tw`hidden lg:flex justify-center items-center`}>
        <img src={"/character.png"} className={tw`h-96`} />
      </div>
    </div>
  );
};

export default Hero;
