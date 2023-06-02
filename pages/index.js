import { TinaMarkdown } from "tinacms/dist/rich-text";
import { tinaField, useTina } from "tinacms/dist/react";
import { client } from "../tina/__generated__/client";

export default function Home(props) {
  // data passes though in production mode and data is updated to the sidebar data in edit-mode
  const { data } = useTina({
    query: props.query,
    variables: props.variables,
    data: props.data,
  });

  return (
      <div data-tina-field={tinaField(data.page, "body")}>
         <nav>
          <a href="/">{data.page.navTitle1}</a>
          <a href="#us">{data.page.navTitle2}</a>
          <a href="/admin">{data.page.navTitle3}</a>
        </nav>
        <div className="home">
          <h1>{data.page.title}</h1>
          <div id="us" class="images">
             <img src={data.page.image1}></img>
             <img src={data.page.image2}></img>
              <img src={data.page.image3}></img>
             <img src={data.page.image4}></img>
          </div>
          <TinaMarkdown content={data.page.body} />
        </div>
        <footer>
          <p>{data.page.footer}</p>
        </footer>
      </div>
  );
}

export const getStaticProps = async () => {
  const { data, query, variables } = await client.queries.page({
    relativePath: "home.mdx",
  });

  return {
    props: {
      data,
      query,
      variables,
      //myOtherProp: 'some-other-data',
    },
  };
};
