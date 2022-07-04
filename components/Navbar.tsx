/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";

const Navbar = () => {
  return (
    <div
      className={tw`hidden sm:flex flex-row gap-4 justify-center items-center font-semibold py-2`}
    >
      <a
        href="/"
        className={tw`text-gray-800 hover:bg-yellow-500 hover:bg-opacity-25 rounded px-4 py-2 `}
      >
        Home
      </a>
      <a
        href="/works"
        className={tw`text-gray-800 hover:bg-yellow-500 hover:bg-opacity-25 rounded px-4 py-2 `}
      >
        Works
      </a>
      <a
        href="#about"
        className={tw`text-gray-800 hover:bg-yellow-500 hover:bg-opacity-25 rounded px-4 py-2 `}
      >
        About
      </a>
    </div>
  );
};

export default Navbar;
