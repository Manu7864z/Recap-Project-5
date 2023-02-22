import ArtPieces from "../components/ArtPieces"
import Link from "next/link"



export default function Pieces({data, error}){
    return(
        <>
          <ArtPieces data={data} error={error} /> 
          <Link href="/">Spotlight</Link>
        </>
    )
}