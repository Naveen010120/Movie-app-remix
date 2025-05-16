import { useFetcher } from "@remix-run/react"
import { json } from "@remix-run/react";
import { FeedBack } from "../Component/Feedback";
import { useEffect, useRef } from "react";

export const action=async({request})=>{
    let form=await request.formData();
    let name=form.get('name');
    let email=form.get('email');
    let rating=form.get('rating');
    let describe=form.get('describe');
    return json({name,email,rating,describe})
}

export default function FeedBackFrom(){
    let fetcher=useFetcher();
    let ref=useRef();
    useEffect(()=>{
  if(fetcher.state=='idle' && fetcher.data){
    ref.current.reset();
  }
    },[fetcher])
       
    return(
        <>
        <h2 className="text-xl font-semibold text-blue-800 mb-4">🙌 User Feedback Received</h2>
        <FeedBack fetcher={fetcher} className="my-10"/>
        <h1 className="m-3 text-2xl font-bold text-black underline font-serif ">Add Your FeedBack:</h1>
      <div className="max-w-md mx-auto p-6 bg-white rounded-2xl shadow-md flex justify-center w-screen shadow-slate-600 ">
  <fetcher.Form method="post" className="flex flex-col gap-4" action="/feedback" ref={ref} >
    <label htmlFor="name" className="text-sm font-semibold text-gray-700">Name:</label>
    <input 
      type="text" 
      name="name" 
      placeholder="Username" 
      required 
      className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
    />

    <label htmlFor="email" className="text-sm font-semibold text-gray-700">Email:</label>
    <input 
      type="text" 
      name="email" 
      placeholder="Email" 
      required 
      className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
    />

    <label htmlFor="options" className="text-sm font-semibold text-gray-700">Rating ⭐:</label>
    <select 
      name="rating" 
      id="options" 
      className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
    >
      <option value="Good">Good</option>
      <option value="Average">Average</option>
      <option value="Excellent">Excellent</option>
      <option value="Bad">Bad</option>
    </select>

    <label htmlFor="desc" className="text-sm font-semibold text-gray-700">Describe:</label>
    <textarea 
      name="describe" 
      id="desc" 
      rows="4" 
      className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
    ></textarea>

    <button
      type="submit" 
      value="Submit" 
      
      className="mt-4 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
    >submit</button>
  </fetcher.Form>
</div>

        </>
    )
}