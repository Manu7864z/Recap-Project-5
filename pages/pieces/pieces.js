import ArtPieces from "../../components/ArtPieces";

export default function Pieces({ data, error, artPiecesInfo }) {
  return (
    <>
      <ArtPieces
        data={data}
        error={error}
        artPiecesInfo={artPiecesInfo}
        onToggleFavorite={onToggleFavorite}
      />
    </>
  );
}
