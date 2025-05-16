import { useParams } from "@remix-run/react"
import { useEffect, useState } from "react";

export default function MovieDetails(){
 const {id}=useParams();
 let [data,setData]=useState(null)
 useEffect(()=>{

     const getData=JSON.parse(localStorage.getItem('MovieDetails'))
     setData(getData)
 },[])
 console.log(data)
    return(
        <>
      {
  data === null ? (
    <p className="text-center text-xl font-semibold my-8">Loading...</p>
  ) : (
    <div className="max-w-2xl mx-52 p-4 bg-white rounded-lg shadow-md shadow-slate-600">
      <div className="mb-4">
        <img
          src={`https://image.tmdb.org/t/p/w500/${data.backdrop_path}`}
          alt={data.title}
          className="w-full rounded-lg"
        />
      </div>

      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold">{data.original_title}</h2>
          <span className="text-yellow-500 font-medium text-lg">
            ⭐ {data.vote_average.toFixed(2)}
          </span>
        </div>

        <p className="text-gray-700">{data.overview}</p>

        <div className="overflow-x-auto">
          <table className="w-full border border-gray-300 mt-4">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-4 py-2 border">Release Date</th>
                <th className="px-4 py-2 border">Popularity</th>
                <th className="px-4 py-2 border">Votes</th>
                <th className="px-4 py-2 border">Original Lang</th>
              </tr>
            </thead>
            <tbody>
              <tr className="text-center">
                <td className="px-4 py-2 border">{data.release_date}</td>
                <td className="px-4 py-2 border">{data.popularity}</td>
                <td className="px-4 py-2 border">{data.vote_count}</td>
                <td className="px-4 py-2 border uppercase">{data.original_language}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}


        </>
    )
}