/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";
import Navbar from "../components/Navbar.tsx";
import Hero from "../components/Hero.tsx";
import RecentWork from "../components/RecentWork.tsx";
import About from "../components/About.tsx";
import Contact from "../components/Contact.tsx";
import MobileNav from "../components/MobileNav.tsx";
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
    allPortfolios(first: "3") {
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

export default function Home({ data }: PageProps<Portfolio[] | null>) {
  return (
    <div>
      <MobileNav />
      <div className={tw`px-8 lg:px-40 bg-theme-light`}>
        <Navbar />
        <Hero />
      </div>
      <RecentWork data={data} />
      <About />
      <Contact />
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
    </div>
  );
}
