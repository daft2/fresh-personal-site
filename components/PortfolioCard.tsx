/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";

interface Portfolio {
  id: string;
  title: string;
  description: string;
  thumbnail: {
    url: string;
  };
  link: string;
}

const PortfolioCard = ({ data }: { data: Portfolio | undefined }) => {
  return (
    <div
      className={tw`bg-card-theme rounded-lg font-sans flex flex-col lg:flex-row justify-around items-center lg:items-start`}
    >
      <div
        className={tw`flex flex-col lg:w-1/4 w-full p-4 lg:p-0 justify-center my-auto gap-4`}
      >
        <div>
          <h1 className={tw`text-xl font-semibold`}>{data?.title}</h1>
          <h1 className={tw`text-md `}>{data?.description}</h1>
        </div>
        <a
          href={data?.link}
          target="_blank"
          className={tw`text-blue-800 font-semibold`}
        >
          Demo Live Site
        </a>
      </div>
      <div className={tw`xs:w-52 sm:w-80 md:w-96 lg:w-96 p-4`}>
        <img src={data?.thumbnail.url} className={tw`rounded-xl`} />
      </div>
    </div>
  );
};

export default PortfolioCard;
