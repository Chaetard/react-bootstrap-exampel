import React, { useState, useEffect } from "react";
import getRandomJoke from "./getRandomJoke";
import "./jokes.css";
import chuck from "../assets/chuck.jpg";

const Jokes = () => {
  const [joke, setJoke] = useState("");

  useEffect(() => {
    const fetchJoke = async () => {
      const joke = await getRandomJoke();
      setJoke(joke);
    };
    fetchJoke();
  }, []);

  const handleRefreshClick = async () => {
    const joke = await getRandomJoke();
    setJoke(joke);
  };

  return (
    <div className="elchiste overflow1  justify-content-center align-items-center">
      <a
        href="https://en.wikipedia.org/wiki/Chuck_Norris"
        target="_blank"
        without
        rel="noreferrer"
      >
        <img className="img-fluid mx-auto d-block" src={chuck} alt="logo" />
      </a>

      <div>{joke}</div>

      <button 
        onClick={handleRefreshClick}
        variant="primary"
        className="btn btn-primary btnc"
      >
        Refresh
      </button>
    </div>
  );
};

export default Jokes;
