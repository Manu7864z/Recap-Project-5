import Spotlight from "../components/Spotlight";
import Link from "next/link";
import Navigation from "../components/Navigation";

export default function SpotlightPage({ data }) {
  return (
    <div>
      <Spotlight data={data} />
      <Link href="/pieces/pieces">zu den Bildern</Link>
    </div>
  );
}
