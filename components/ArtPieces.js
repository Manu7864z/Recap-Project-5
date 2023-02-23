import Image from "next/image";
import Link from "next/link";

export default function ArtPieces({ data, error }) {
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
            <Link href={`/pieces/${piece.slug}`}>blub</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
