let MovieApi='3fb7153d4c7b951f8de89b3afe29e7e6'
export const loader=async({request})=>{
    const url=new URL(request.url);
    const id=url.searchParams.get('with_genres')
    let res=await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${MovieApi}&with_genres=${id}`);
    let results=await res.json();
    return new Response(JSON.stringify({results}),{
        headers:{
            'Content-Type':'application/json'
        }
    })
}