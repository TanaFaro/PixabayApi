import axios from 'axios';
import { useState } from 'react';
import './App.css';
import Images from './Images';


const App = () => {
  const [query, setQuery] = useState('');
  const [images, setImages] = useState([]);

  const handleSearch = (e) => {
  const URL_API = `https://pixabay.com/api/?key=${process.env.REACT_APP_PIXABAY_KEY}&q=${query}&per_page=10`;
    e.preventDefault();
    axios.get(URL_API)
      .then(resp => {
        setImages(resp.data.hits);
        console.log(resp.data.hits);
      })
      .catch(error => console.log(error));
  }

  const handleChange = (e) => {
    setQuery(e.target.value);
  }

  return (
    <div className="App">
      <h1>PIXABAY API</h1>
      <form onSubmit= {handleSearch}>
        <input 
          type="text"
          placeholder="Find your imagen..."
          className="form-control"
          name="searchText"
          autoComplete="off"
          onChange={handleChange}
        />
        <button
            type="submit"
            className="btn m-3 btn-block btn-inline-primary"
        > Search...
        </button>
      </form>
      
      <div className="images-container">
        {
              images.map( image => (
                <Images image={image} key={image.id}/>
              ))
          }
      </div>
    </div>
  );
}

export default App;

