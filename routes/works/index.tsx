/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";
import Navbar from "../../components/Navbar.tsx";
import MobileNav from "../../components/MobileNav.tsx";
import Footer from "../../components/Footer.tsx";
import {
  gql,
  GraphQLClient,
} from "https://deno.land/x/graphql_request@v4.1.0/mod.ts";
import { Handlers, PageProps } from "$fresh/server.ts";

interface Portfolio {
  id: string;
  title: string;
  description: string;
  thumbnail: {
    url: string;
  };
  link: string;
}

const query = gql`
  query {
    allPortfolios {
      id
      title
      description
      thumbnail {
        url
      }
      link
    }
  }
`;

export const handler: Handlers<Portfolio[] | null> = {
  async GET(_, ctx) {
    const API_KEY = await Deno.env.get("DATOCMS_API_KEY");
    const endpoint = "https://graphql.datocms.com";
    const client = new GraphQLClient(endpoint, {
      headers: {
        "content-type": "application/json",
        authorization: "Bearer " + API_KEY,
      },
    });

    const res = await client.request(query);

    if (res.status === 404) {
      return ctx.render(null);
    }
    const data: Portfolio[] = await res.allPortfolios;
    return ctx.render(data);
  },
};

export default function Works({ data }: PageProps<Portfolio[] | null>) {
  return (
    <div>
      <MobileNav />
      <div className={tw`px-8 lg:px-40 bg-theme-light`}>
        <Navbar />
      </div>
      <div className={tw`px-8 lg:px-40 h-screen bg-theme-dark`}>
        <h1 className={tw`py-4 font-semibold text-3xl font-serif`}>
          Work Portfolio
        </h1>
        <div
          className={tw`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-4 gap-4`}
        >
          {data?.map((portfolio) => (
            <div
              key={portfolio.id}
              className={tw`flex flex-col justify-around bg-white p-5 rounded-xl shadow-lg`}
            >
              <img className={tw`rounded-lg`} src={portfolio.thumbnail.url} />
              <h1 className={tw`font-semibold`}>{portfolio.title}</h1>
              <h1 className={tw`text-sm`}>{portfolio.description}</h1>
              <a
                href={portfolio.link}
                target="_blank"
                className={tw`text-blue-800 hover:text-blue-500 font-semibold`}
              >
                View Site
              </a>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}
