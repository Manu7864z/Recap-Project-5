import Link from "next/link";

export default function Navigation() {
  return (
    <footer>
      <button>
        <Link href="/">Spotlight</Link>
      </button>
      <button>
        <Link href="/pieces/pieces">Pieces</Link>
      </button>
      <button>
        <Link href="/">Favourites</Link>
      </button>
    </footer>
  );
}
