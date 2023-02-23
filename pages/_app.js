import GlobalStyle from "../styles";
import useSWR from "swr";
import Layout from "../components/Layout";
/* import { useState } from "react"; */

const URL = `https://example-apis.vercel.app/api/art`;
/* const [artPiecesInfo,setArtPiecesInfo] = useState(true); */


export default function App({ Component, pageProps }) {
  const fetcher = (url) => fetch(url).then((response) => response.json());
  const { data, error } = useSWR(URL, fetcher);
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} data={data} error={error} />
      <Layout />
    </>
  );
}
