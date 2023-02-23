import Image from "next/image";
import Link from "next/link";
import FavoriteButton from "./FavoriteButton";
import { useState, useEffect } from "react";

export default function ArtPieces({
  data,
  error,
  onToggleFavorite,
  artPiecesInfo,
}) {
  const [isFavorite, setIsFavorite] = useState(false);
  const info = artPiecesInfo.find((element) => element.slug === slug);
  useEffect(() => {
    if (info) {
      setIsFavorite(info.isFavorite);
    }
  }, [info]);
  if (error) return <div>Failed to load</div>;
  if (!data) return <div>Loading...</div>;

  return (
    <div>
      <ul>
        {data.map((piece) => (
          <li key={piece.slug}>
            <h3>{piece.artist}</h3>
            <p>{piece.name}</p>

            <Image
              src={piece.imageSource}
              alt={piece.name}
              height={600}
              width={600}
            />
            <Link href={`/pieces/${piece.slug}`}>More Information</Link>
            <FavoriteButton
              isFavorite={true}
              onToggleFavorite={onToggleFavorite}
            ></FavoriteButton>
          </li>
        ))}
      </ul>
    </div>
  );
}
