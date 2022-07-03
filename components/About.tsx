/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";

const About = () => {
  return (
    <div
      id="about"
      class={tw`px-8 lg:px-40 bg-theme-light flex justify-between`}
    >
      <div className={tw`w-[32rem]`}>
        <h1 className={tw`py-8 font-semibold text-2xl font-serif`}>
          {"A Little Bit About Me"}
        </h1>
        <p className={tw`text-md`}>
          {
            "I am Daffa (Daft) from Malang, Indonesia. Currently working in Tinkerlust as Junior Software Engineer. I have ~2years of professional working experience, and I also have experience in participating some IT Competition. Right now, I'm mostly working on Frontend stuff both in Work or Personal Project. Besides coding, I like to read some comics, watch youtube videos, listening to music, and go out with friends."
          }
        </p>
        <button
          className={tw`border mb-12 mt-4 px-4 py-2 rounded-lg text-white border-2 border-theme-blue bg-theme-blue hover:bg-white hover:text-theme-blue font-semibold`}
        >
          {"Download My Resume"}
        </button>
      </div>
      <div className={tw`hidden md:flex`}>
        <img src="/softeng.png" className={tw`h-96 self-center`} />
      </div>
    </div>
  );
};

export default About;
