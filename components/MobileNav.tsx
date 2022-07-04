/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";

const MobileNav = () => {
  return (
    <div
      className={tw`bg-yellow-600 px-2 fixed bottom-10 justify-around items-center flex inset-x-0 mx-5 rounded-lg border-theme-light border sm:hidden`}
    >
      <a
        href="/"
        className={tw`text-white hover:bg-yellow-500 hover:bg-opacity-25 rounded px-4 py-2 `}
      >
        Home
      </a>
      <a
        href="/works"
        className={tw`text-white hover:bg-yellow-500 hover:bg-opacity-25 rounded px-4 py-2 `}
      >
        Works
      </a>
      <a
        href="#about"
        className={tw`text-white hover:bg-yellow-500 hover:bg-opacity-25 rounded px-4 py-2 `}
      >
        About
      </a>
    </div>
  );
};

export default MobileNav;
