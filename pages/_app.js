import GlobalStyle from "../styles";
import useSWR from "swr";
import Layout from "../components/Layout";
import { useState } from "react";
/* import { useImmerLocalStorageState } from "../Utils/useImmerLocalStorageState"; */

const URL = `https://example-apis.vercel.app/api/art`;

export default function App({ Component, pageProps }) {
  const [artPiecesInfo, setArtPiecesInfo] = useState([]);
  const fetcher = (url) => fetch(url).then((response) => response.json());

  const { data, error } = useSWR(URL, fetcher);

  function handleToggleFavorite(slug) {
    console.log(slug);
    setArtPiecesInfo((prevArtPieceInfo) => {
      const info = prevArtPieceInfo.find((element) => element.slug === slug);
      if (info) {
        console.log(info);
        return prevArtPieceInfo.map((info) =>
          info.slug === slug
            ? { slug: info.slug, isFavorite: !info.isFavorite }
            : info
        );
      }
      return [...prevArtPieceInfo, { slug: slug, isFavorite: false }];
    });
  }

  /*  const [artPiecesInfo, updateArtPiecesInfo] = useImmerLocalStorageState(
    "art-pieces-info",
    { defaultValue: [] }
  );
  updateArtPiecesInfo((draft) => {
    const toggle = draft.find(({ slug }) => slug === data?.slug);

    data?.slug === !data?.slug;
  }); */

  return (
    <>
      <GlobalStyle />
      <Component
        {...pageProps}
        data={data}
        error={error}
        artPiecesInfo={artPiecesInfo}
        onToggleFavorite={handleToggleFavorite}
      />
      <Layout />
    </>
  );
}
