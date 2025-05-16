import { useContext } from "react"
import {UseCart} from '../UseContext/cartCount'
export default function CartItems(){
    const {carts,setCarts}=useContext(UseCart);


    return(
        <> 
        {
            carts.length==0? <div className="flex w-screen text-center justify-center my-3 items-center">

                <p className="text-2xl text-center font-bold text-gray-500  ">No Items added to Cart Yet !</p>
            </div> 
            :  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
            {carts?.map(item => (
              <div
                key={item.id}
                className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 shadow-gray-950 w-[400px] h-[600px] mx-auto"    
              >
                <img
                  src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`}
                  alt={item.title}
                  className="w-full h-96 object-cover "
                />
      
                <div className="p-4 flex flex-col justify-between h-40">
                  <div>
                      <div className="flex justify-between my-2">
      
                    <h2 className="font-bold text-lg text-gray-800 truncate">{item.title}</h2>
                    <p className="text-yellow-500 mt-1v font-extrabold text-xl">{item.vote_average.toFixed(2)} ⭐</p>
                      </div>
                    <p className="py-3 text-lg "><b className="uppercase">release</b>:{item.release_date}</p>
                    <p className="py-2 text-lg"><b className="uppercase">votes</b>:{item.vote_count}</p>
                    <p className="py-2 text-lg"><b className="uppercase">popularity</b>:{item.popularity.toFixed(1)}</p>
                  </div>
      
                </div>
              </div>
            ))}
          </div>
        }
       
        </>
    )
}