import ArtPieces from "../../components/ArtPieces";

export default function Pieces({ data, error }) {
  return (
    <>
      <ArtPieces data={data} error={error} />
    </>
  );
}
