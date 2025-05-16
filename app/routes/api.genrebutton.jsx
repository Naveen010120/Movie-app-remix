let MovieApi='3fb7153d4c7b951f8de89b3afe29e7e6';
export const loader=async()=>{
let res=await fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=${MovieApi}`);
let results=await res.json();
return new Response(JSON.stringify({results}),{
    headers:{
        'Content-Type':'application/json'
    }
})
}