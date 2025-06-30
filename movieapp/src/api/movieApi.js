let API_KEY=`c09b447a57dd066ce1bb67e5cfe849d7`
let baseUrl='https://api.themoviedb.org/3'

// function for fetching the Data from an TMDB API

const fetchMovies=async(type="popular")=>{
     let movies=await fetch(`${baseUrl}/movie/${type}?api_key=${API_KEY}`)
     let mdata=await movies.json()
     console.log(mdata.results)
    return mdata.results
}

export default fetchMovies 