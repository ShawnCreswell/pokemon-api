import logo from "./logo.svg";
import "./lux.css";
import axios from "axios";
import React from "react";

function App() {
  const [pokemon, setPokemon] = React.useState([]);
  const [buttonClicked, setButtonClicked] = React.useState(false);

  React.useEffect(() => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0")
      .then((response) => {
        setPokemon(response.data.results);
      });
  }, []);

  const handleToggle = () => {
    setButtonClicked(!buttonClicked);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <div className="card">
            <div className="card-header bg-dark">
              <h1 className="text-center text-success">Pokemon</h1>
            </div>
            <div className="text-center">
              <button className="btn btn-primary mt-3" onClick={handleToggle}>Fetch Pokemon</button>
              <div className="card-body">
                {buttonClicked &&
                  pokemon.map((poke, index) => {
                    return <div key={index}>{poke.name}</div>;
                  })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
