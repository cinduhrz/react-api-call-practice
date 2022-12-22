function MovieDisplay({movie}){

    const loaded = () => (
        <>
            {/* movie?.Title syntax: if movie is falsey(null), don't bother accessing the property after "?" */}
            <h1>{movie?.Title}</h1>
            <h2>{movie?.Genre}</h2>
            <h2>{movie?.Year}</h2>
            <img src={movie?.Poster} alt={movie?.Title}/>
        </>
    )

    const loading = () => <p>No Movie to Display</p>

    // if movie has loaded, invoke loaded(). if not, invoke loading().
    // use ternary operator --> expression ? true : false
    return movie ? loaded() : loading()
}

export default MovieDisplay