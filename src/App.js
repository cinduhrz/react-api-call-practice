import {useState, useEffect} from "react"
// useEffect notes
// use this hook whenever you don't want a function to run on EVERY RENDER
// can specify function to run on load, update, or dismount
// syntax: useEffect(() => {}, []) <-- callback, array
  // YOU NEED ARRAY otherwise it will LOOP INFINITELY
  // if you just want callback to run once, keep array empty
import './App.css';
import Form from './components/Form';
import MovieDisplay from './components/MovieDisplay';

function App() {

  // declare API key
  const apiKey = "feb5ef42"

  // declare our state, use hook useState
  // null is falsey, which will be useful for a conditional later
  const [movie, setMovie] = useState(null)

  // function to get movie (this will be passed to form component)
  const getMovie = async (searchTerm) => {
    
    // if user submits nothing (falsey), render about time to the screen. otherwise, render the searchTerm. this is so that the screen doesn't render blank
    const userSearchInput = searchTerm ? searchTerm : "About Time"

    // make api call and get back response
    const response = await fetch(`http://www.omdbapi.com/?apikey=${apiKey}&t=${userSearchInput}`)
    // convert response into a js object
    const data = await response.json()
    // update the movie state
    setMovie(data)
  }

  console.log("log in the body of the component")
  useEffect(() => {
    // this log only happens the first time, once, bc this function runs only once
    console.log("log in the useEffect")
    // get an arbitrary movie to fill screen on initial component load (not necessarily whole page, but the specific component that useEffect is called in)
    getMovie("About Time")
  }, [])

  return (<>
      <Form movieSearch={getMovie}/>
      <MovieDisplay movie={movie}/>
  </>);
}

export default App;
