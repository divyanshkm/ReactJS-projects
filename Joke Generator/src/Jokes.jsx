import { useEffect, useState } from "react";

function Jokes() {
  const [joke, setJoke] = useState();
  const callapi = () =>
    fetch("https://v2.jokeapi.dev/joke/Any?type=single")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setJoke(data.joke);
      });
  useEffect(() => {
    callapi();
  }, []);
  return (
    <>
      <p>Joke: {joke}</p>
      <br></br>
      <button onClick={() => callapi()}>New Joke</button>
    </>
  );
}

export default Jokes;
