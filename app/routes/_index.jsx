import {Link, Outlet, useFetcher } from "@remix-run/react"

import {  Loader } from "lucide-react";
import { useContext, useEffect, useState } from "react";
import { UseCart } from "../UseContext/cartCount";
import { UserSearch } from "../UseContext/UserSearch";

export default function IndexPage() {
  const fetcher = useFetcher();
 const {carts,setCarts}=useContext(UseCart);
 const {search,setSearch}=useContext(UserSearch)
 const [filterData,setFilterData]=useState([]);
 const [count,setCount]=useState(1)
  useEffect(() => {
    fetcher.load(`/api/movies?page=${count}`)
    
  }, [count])
  useEffect(()=>{
 if(fetcher.data?.movies){
 const searching=fetcher.data?.movies?.results.filter(movie=>movie.title.toLowerCase().includes(search.toLowerCase()));
 console.log(searching)
 setFilterData(searching)
 }
  },[search,fetcher.data])
  
  const handleClick=(item)=>{
    alert(`${carts.length+1} is added to cart`)
  setCarts(prev=>[...prev,item])
  }
  // console.log(carts)
  const handleView=(movie)=>{
    localStorage.setItem('MovieDetails',JSON.stringify(movie));

  }
  const handleIncrement=()=>{
    setCount(prev=>prev+1)
  }
  const handleDecrement=()=>{
    setCount(prev=>prev-1)
  }
 console.log(fetcher.data)
 console.log(count)

  return (
    <>
      {
  fetcher.state === 'loading' ? (
    <div className="flex h-screen justify-center items-center font-extrabold text-xl text-gray-400">
      Loading...
    </div>
  ) : (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
      {filterData.length>0?filterData.map((item)=> (
        <div
          key={item.id}
          className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 shadow-gray-950"
        >
          <img
            src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`}
            alt={item.title}
            className="w-full h-72 object-cover"
          />

          <div className="p-4 flex flex-col justify-between h-40">
            <div>
              <h2 className="font-bold text-lg text-gray-800 truncate">{item.title}</h2>
              <p className="text-yellow-500 mt-1">{item.vote_average} ⭐</p>
            </div>

            <div className="mt-4 flex gap-2">
              <button className="flex-1 bg-blue-500 text-white py-1 px-2 rounded hover:bg-blue-600 text-sm" onClick={()=>handleClick(item)}>
                Add to Cart
              </button>
              <Link  to={`/details/${item.id}`} className="flex-1 bg-gray-200 text-gray-800 py-1 px-2 rounded hover:bg-gray-300 text-sm" onClick={()=>handleView(item)}>
                View More
              </Link>
            </div>
          </div>
        </div>
      )
    )
      
      :<div className="text-2xl font-bold text-gray-500">
        
        no data found
        </div>}
    </div>
  )
}
<div className={`flex justify-around mx-16 items-center ${search?'hidden':'block'}`}>
<button onClick={handleDecrement} className={`rounded-lg text-xl font-bold text-white   bg-slate-500 p-4 ${count==1? 'cursor-not-allowed':'cursor-pointer'}`} disabled={count==1}>Prev</button>
<p className="text-xl font-bold text-gray-500">Page:{count}</p>
<button onClick={handleIncrement} className="rounded-lg text-xl font-bold text-white cursor-pointer  bg-slate-500 p-4">Next</button>

</div>
  <Outlet />
            </>
          )
}