import Layout from "../../components/Layout"
export default function News({ results }) {
  var index = 0;
  return (
    <Layout>
      <h1>Top Stories</h1>
      {results.map(result => <li key={++index}><a href={result.url} target="_blank">{result.title}</a></li>)}
    </Layout>)
}

const API_KEY = "QeZOCb5H3u4LEF76mCdFjtYzf2R1cjPK"
export async function getStaticProps() {
  // The value of the `props` key will be
  //  passed to the `Home` component
  const URL = `https://api.nytimes.com/svc/topstories/v2/home.json?api-key=${API_KEY}`;
  const rawData = await fetch(URL);
  const jsonData = await rawData.json();
  console.log("jsonData", jsonData);

  return {
    props: { results: jsonData.results }
  }
}