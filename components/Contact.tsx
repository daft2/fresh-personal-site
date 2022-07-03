/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";

const Contact = () => {
  return (
    <div className={tw`px-8 lg:px-40 bg-theme-dark`}>
      <div className={tw`max-w-[48rem]`}>
        <h1
          className={tw`text-3xl md:text-4xl lg:text-5xl font-semibold font-serif py-12`}
        >
          {
            "Let's work together and make everything super cool and super useful."
          }
        </h1>
      </div>
      <div className={tw`flex justify-between py-8`}>
        <div>
          <button
            className={tw`border my-4 px-4 py-2 text-sm md:text-md lg:text-lg rounded-lg border-2 border-theme-blue hover:bg-white hover:text-theme-blue font-semibold`}
          >
            Contact Me
          </button>
        </div>
        <div className={tw`flex flex-row gap-4 justify-center items-end`}>
          <a href="https://github.com/daft2" target="_blank">
            <img
              width={25}
              height={25}
              alt="Github"
              src="/github-square-brands.svg"
            />
          </a>
          <a
            href="https://www.linkedin.com/in/muhammad-daffa-s/"
            target="_blank"
            className={tw`hover:fill-blue-500`}
          >
            <img
              width={25}
              height={25}
              alt="LinkedIn"
              src="/linkedin-brands.svg"
            />
          </a>
          <a href="https://www.hackerrank.com/daftdevs" target="_blank">
            <img
              width={25}
              height={25}
              alt="HackerRank"
              src="/hackerrank-brands.svg"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
