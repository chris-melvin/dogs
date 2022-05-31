import React, { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import breedlist from "./Breed.json";
import Layout from "./Layout";
import dog from "./images/eastwood-138.png";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [breeds, setBreeds] = useState([]);
  const [dogs, setDogs] = useState([]);
  const [breed, setBreed] = useState("collie");
  useEffect(() => {
    setBreeds(breedlist);
    const getImages = async () => {
      try {
        const res = await axios.get(
          `https://dog.ceo/api/breed/${breed}/images`
        );
        setDogs(res.data.message);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    getImages();
  }, [breed]);

  console.log(breeds);
  return (
    <Layout>
      <div className="App">
        <form className="form-control">
          <span>
            <h2>Select a Breed</h2>
          </span>
          <select
            className="select-class"
            onChange={(e) => setBreed(e.target.value)}
          >
            <option className="option-class" value={"collie"}>
              collie
            </option>
            {breeds.map((d, i) => (
              <option className="option-class" key={i} value={d}>
                {d}
              </option>
            ))}
          </select>
        </form>
        {isLoading ? (
          <div className="loader-container">
            <img src={dog} alt="dog sitting" className="image-loader" />
          </div>
        ) : (
          <div id="photos" className="container">
            {dogs.slice(0, 25).map((d, i) => (
              <img src={d} key={i} alt="dog" className="image" />
            ))}
          </div>
        )}
      </div>
    </Layout>
  );
}

export default App;
