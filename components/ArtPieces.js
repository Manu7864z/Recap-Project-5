import useSWR from "swr";
import Image from "next/image";

const URL = `https://example-apis.vercel.app/api/art`;

export default function ArtPieces({ pieces }) {
  const fetcher = (url) => fetch(url).then((response) => response.json());
  const { data, error } = useSWR(URL, fetcher);

  if (error) return <div>Failed to load</div>;
  if (!data) return <div>Loading...</div>;
  console.log(data);

  return (
    <div>
      <ul>
        {data?.map((piece) => (
          <li key={piece.slug}>
            <h3>{piece.artist}</h3>
            <p>{piece.name}</p>
            {/* <img src={piece.imageSource} alt={piece.name} /> */}
            <Image
              src={piece.imageSource}
              alt={piece.name}
              height={600}
              width={600}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
