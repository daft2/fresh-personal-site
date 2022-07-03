/** @jsx h */
import { h } from "preact";
import { Handlers, PageProps } from "$fresh/server.ts";
import { tw } from "twind";
import {
  gql,
  GraphQLClient,
} from "https://deno.land/x/graphql_request@v4.1.0/mod.ts";
import { config } from "https://deno.land/x/dotenv@v3.2.0/mod.ts";

interface Portfolio {
  id: string;
  title: string;
  description: string;
  thumbnail: {
    url: string;
  };
  link: string;
}

const env = config();

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
    const endpoint = "https://graphql.datocms.com";
    const client = new GraphQLClient(endpoint, {
      headers: {
        "content-type": "application/json",
        authorization: "Bearer " + env.DATOCMS_API_KEY,
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

const Page = ({ data }: PageProps<Portfolio[] | null>) => {
  return (
    <div>
      {data?.map((item: Portfolio) => (
        <div key={item.id}>
          <h1>{item.title}</h1>
        </div>
      ))}
    </div>
  );
};

export default Page;
