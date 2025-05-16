import { useFetcher } from "@remix-run/react"
import { useEffect } from "react";
import {CategoryCards} from "../Component/CategoryCards";

export default function CategoryMovies(){
    const buttonFetcher=useFetcher();
    const displayFetcher=useFetcher();
   useEffect(()=>{
  buttonFetcher.load('/api/genrebutton')
   },[])
   const handleClick=(id)=>{
    console.log(id)
    displayFetcher.load(`/api/category?with_genres=${id}`)
   }
   console.log(buttonFetcher)
    return(
        <>
       
        {
            buttonFetcher.state=='loading'&& <div className="">Loading...</div>
        }
        <div className="flex flex-wrap gap-6 justify-center">

        {
            buttonFetcher.data?.results?.genres.map(btn=>(
                <div key={btn.id} className="">
                    <button className="p-4 font-bold rounded-lg bg-green-300 text-white" onClick={()=>handleClick(btn.id)}>{btn.name}</button>
                </div>
            ))
        }
        </div>
        <CategoryCards displayFetcher={displayFetcher}/>
        </>
    )
}