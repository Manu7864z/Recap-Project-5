import Link from "next/link"

export default function Navigation(){
    return(
        <footer>
            <button><Link href="/">Home</Link></button>
            <button><Link href="/">All</Link></button>
            <button><Link href="/">Favourites</Link></button>
        </footer>
    )
}

