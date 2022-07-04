/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";

const Footer = (): h.JSX.Element => {
  return (
    <div
      className={tw`flex flex-col bg-theme-light py-4 justify-center items-center`}
    >
      <span className={tw`text-sm`}>
        {"Made Using Fresh and Twind (TailwindCSS)."}
      </span>
      <div>
        <a href="https://github.com/daft2/fresh-personal-site/blob/master/LICENSE">
          <span
            className={tw`text-sm underline-offset-1 underline hover:text-gray-600`}
          >
            {"Copyright (c) 2022 Daft"}
          </span>
        </a>
      </div>
    </div>
  );
};

export default Footer;
