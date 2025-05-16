import { Link } from "@remix-run/react";

export  function CategoryCards({displayFetcher}) {
//    console.log(displayFetcher);
  return (
    <>
   
    
    <div className="text-3xl text-center font-extrabold mt-5 text-gray-400">Movies Based on Category</div>
    {
        displayFetcher.state=='loading'&& <div>Loading...</div>
    }
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">

    {
        displayFetcher.data?.results?.results.map(movie=>(
         <div
                  key={movie.id}
                  className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 shadow-gray-950 w-min-16"
                >
                  <img
                    src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                    alt={movie.title}
                    className="w-full h-72 object-cover"
                  />
        
                  <div className="p-4 flex flex-col justify-between h-40">
                    <div>
                      <h2 className="font-bold text-lg text-gray-800 truncate">{movie.title}</h2>
                      <p className="text-yellow-500 mt-1">{movie.vote_average} ⭐</p>
                    </div>
                  </div>
                </div>
       ))
    }
           </div>
    </>
  )
}
