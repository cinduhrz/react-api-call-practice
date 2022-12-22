import {useState} from "react"
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
    // make api call and get back response
    const response = await fetch(`http://www.omdbapi.com/?apikey=${apiKey}&t=${searchTerm}`)
    // convert response into a js object
    const data = await response.json()
    // update the movie state
    setMovie(data)
  }

  return (<>
      <Form/>
      <MovieDisplay/>
  </>);
}

export default App;
