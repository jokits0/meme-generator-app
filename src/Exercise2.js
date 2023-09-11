import React from "react";

export function Exercise2() {
  const [count, setCount] = React.useState(1);
  const [starwarsData, setStarwarsData] = React.useState({});

  React.useEffect(() => {
    fetch(`https://swapi.dev/api/people/${count}`)
      .then((res) => res.json())
      .then((data) => setStarwarsData(data));
  }, [count]); //useEffect will re render 5 iterations

  function handleClick() {
    setCount((prevState) => ++prevState);
  }
  const [myMemes, setMemes] = React.useState([]);

  React.useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then((res) => res.json())
      .then((data) => setMemes(data.data.memes));
  }, []);
  const { url } = myMemes[Math.floor(Math.random() * myMemes.length)];
  console.log(url);
  return (
    <div>
      <h1>The count is {count}</h1>
      <button onClick={handleClick}>Get New Character</button>
      <pre>{JSON.stringify(starwarsData, null, 2)}</pre>
      <img src={url} alt="" />
    </div>
  );
}
