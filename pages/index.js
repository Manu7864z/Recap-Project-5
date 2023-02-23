import Spotlight from "../components/Spotlight";
import Link from "next/link";
import FavoriteButton from "../components/FavoriteButton";

export default function SpotlightPage({ data }) {
  return (
    <div>
      <Spotlight data={data} />
      <Link href="/pieces/pieces">zu den Bildern</Link>
      <FavoriteButton />
    </div>
  );
}
