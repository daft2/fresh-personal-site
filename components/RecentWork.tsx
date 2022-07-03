/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";
import PortfolioCard from "../components/PortfolioCard.tsx";

interface Portfolio {
  id: string;
  title: string;
  description: string;
  thumbnail: {
    url: string;
  };
  link: string;
}

const RecentWork = ({ data }: { data: Portfolio[] | null }) => {
  return (
    <div
      id="works"
      className={tw`flex py-4 px-8 lg:px-40 flex-col bg-theme-dark`}
    >
      <h1 className={tw`py-8 font-semibold text-2xl font-serif`}>
        My Recent Work
      </h1>
      {data?.map((portfolio) => (
        <div key={portfolio.id} className={tw`my-2`}>
          <PortfolioCard data={portfolio} />
        </div>
      ))}
    </div>
  );
};

export default RecentWork;
