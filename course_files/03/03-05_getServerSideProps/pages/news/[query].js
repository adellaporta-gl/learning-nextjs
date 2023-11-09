import Layout from "../../components/Layout"
import { search } from "../api"

export default function News({ results }) {
  var index = 0;
  return (
    <Layout>
      <h1>Search</h1>
      <ul>
        {results.map(result =>
          <li key={++index}>
            <h3>{result.title}</h3>
            <p>URL: {result.url}</p>
            <p>URI: {result.uri}</p>
          </li>)}

      </ul>
    </Layout>
  )
}

// to register for a new New York Times API KEY, visit : 
const API_KEY = "QeZOCb5H3u4LEF76mCdFjtYzf2R1cjPK"
export async function getServerSideProps({ params }) {
  console.log("*** params", params);
  console.log("*** params.query", params.query);
  const URL = `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=education&api-key=${API_KEY}`;
  // The value of the `props` key will be
  //  passed to the `Home` component
  const results = await search(URL);
  console.log("*** results", results);
  return {
    props: {
      results: results
    }
  }
}