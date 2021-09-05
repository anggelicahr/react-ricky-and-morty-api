import React, { Fragment, useEffect, useState } from "react";
import './App.css';

// Components
import Navbar from "./components/Navbar";
import Characters from "./components/Characters";
import Pagination from "./components/Pagination";

function App() {

  const [characters, setCharacters] = useState([]);
  const [info, setInfo] = useState({});

  const firstURL = "https://rickandmortyapi.com/api/character";

  const fetchCharacters = (url) => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setCharacters(data.results);
        setInfo(data.info);
      })
      .catch(error => console.log(error))
  }

  const onPrevious = () => {
    fetchCharacters(info.prev);
  }

  const onNext = () => {
    fetchCharacters(info.next);

  }

  useEffect(() => {
    fetchCharacters(firstURL);
  }, [])

  return (
    <Fragment>
      <Navbar brand="Rick and Morty API" />
      <div className="container mt-4">
        <Pagination prev={info.prev} next={info.next} onPrevious={onPrevious} onNext={onNext} />
      </div>
      <div className="container">
        <br></br>
        <Characters characters={characters} />
      </div>
      <div className="container mt-4">
        <Pagination prev={info.prev} next={info.next} onPrevious={onPrevious} onNext={onNext} />
      </div>
    </Fragment>
  );
}

export default App;
