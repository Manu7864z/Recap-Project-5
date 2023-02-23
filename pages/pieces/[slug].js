import Link from "next/link";
import { useRouter } from "next/router";

import Image from "next/image";

export default function Piece({ data }) {
  const router = useRouter();
  const { slug } = router.query;

  const currentPiece = data.find((piece) => piece.slug === slug);

  if (!currentPiece) {
    return null;
  }

  const { imageSource, title, artist, year, genre } = currentPiece;

  return (
    <>
      <h1>
        {title} <small>{year}</small>
      </h1>
      <h2>{artist}</h2>
      <Image src={imageSource} width={600} height={600} alt={title} />
      <p>{genre}</p>
      <Link href="/pieces/pieces">Back to pieces</Link>
    </>
  );
}
