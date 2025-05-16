import { useEffect, useState } from "react"

export function FeedBack({fetcher}){
    console.log(fetcher)
    let [data,setData]=useState([]);
    useEffect(()=>{

        if(fetcher.data){
            setData(prev=> [...prev,fetcher.data])
        }
    },[fetcher.data])
    // console.log(data)
    return(
        <>
        <div className="flex flex-wrap">

        
      {data.length>0 && (
       data.map((review,index)=>(

  <div className="mt-6 max-w-md mx-auto p-6 bg-gradient-to-br from-blue-50 via-white to-blue-100 rounded-2xl shadow-lg border border-blue-200" key={index}>
    
    <div className="space-y-2 text-gray-800">
      <p><span className="font-semibold text-gray-700">👤 Name:</span> {review.name}</p>
      <p><span className="font-semibold text-gray-700">📧 Email:</span> {review.email}</p>
      <p><span className="font-semibold text-gray-700">⭐ Rating:</span> <span className="text-yellow-600 font-bold">{review.rating}</span></p>
      <p><span className="font-semibold text-gray-700">📝 Feedback:</span><br/> 
         <span className="block mt-1 pl-2 italic text-gray-600 border-l-4 border-blue-400 bg-blue-50 py-2 px-3 rounded-md">
           {review.describe}
         </span>
      </p>
    </div>
  </div>
       ))
)}
</div>
        </>
    )
}