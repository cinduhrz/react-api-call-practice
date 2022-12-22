import {useState} from "react" // need state for controlled form


function Form(props){

    // state for the form
    const [formData, setFormData] = useState({searchTerm: ""})

    // handleChange to sync formData and the form inputs
    // any function run on onClick, onSubmit, onChange ALWAYS recieves EVENT OBJECT!!
    const handleChange = (event) => {
        // update the form data w the change in form
        setFormData({...formData, [event.target.name]: event.target.value})
    }

    // function to submit form
    const handleSubmit = (event) => {
        // prevent refresh
        event.preventDefault()
        // get the data
        props.movieSearch(formData.searchTerm)
        // clear form by resetting
        setFormData({searchTerm: ""})
    }

    return (<>
        <form onSubmit={handleSubmit}>
            <input type="text" name="searchTerm" value={formData.searchTerm} onChange={handleChange}/>
            <input type="submit" value="submit"/>
        </form>
    </>)
}

export default Form