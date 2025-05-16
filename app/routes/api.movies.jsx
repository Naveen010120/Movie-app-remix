
let MovieApi='3fb7153d4c7b951f8de89b3afe29e7e6'

export const loader = async ({request}) => {
  let url=new URL(request.url);
  let count=url.searchParams.get('page')
    let res=await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${MovieApi}&page=${count}`);
    let movies=await res.json()
  
    return new Response(JSON.stringify({ movies }), {
      headers: { "Content-Type": "application/json" },
    });
  };
  