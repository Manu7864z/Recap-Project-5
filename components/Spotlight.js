import Image from "next/image";


export default function Spotlight({ data }) {
  const random = Math.floor(Math.random() * data?.length);
  const randomPiece = data?.[random];

  return (
    <div>
      <h1>{randomPiece?.artist}</h1>
      <Image
        src={randomPiece?.imageSource}
        alt={randomPiece?.name}
        height={600}
        width={600}
      />
    </div>
  );
}
  /* console.log(randomPiece); */
