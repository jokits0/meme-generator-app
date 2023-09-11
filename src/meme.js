/**
 * Final version of the meme app,
 * Fetch data from an Api `https://api.imgflip.com/get_memes`
 *
 */
import React from "react";
import "./styles.css";

export function Meme() {
  //using state to change and rerender the img and text
  const [allMemes, setAllMemes] = React.useState([]);

  React.useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then((res) => res.json())
      .then((data) => setAllMemes(data.data.memes));
  }, []);

  const [meme, setMeme] = React.useState({
    url: "",
    name: "",
    topText: "",
    bottomText: "",
  });

  function generateMeme() {
    const randomIndex = Math.floor(Math.random() * (allMemes.length - 1));
    const { url, name } = allMemes[randomIndex];
    setMeme(() => ({ url, name }));
  }

  function handleChange(event) {
    event.preventDefault();
    const { name, value } = event.target;
    console.log(name, value);
    setMeme((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }

  return (
    <main className="meme-container">
      <nav>
        <div className="logo-container">
          <img
            src="https://www.pikpng.com/pngl/b/403-4033629_sad-crying-cat-meme-have-nothing-to-live.png"
            alt="logo"
          />
          <p>Meme Generator</p>
        </div>
        <span>React Course Project 3</span>
      </nav>

      <div className="text-input">
        <input
          type="text"
          placeholder="Top text"
          name="topText"
          onChange={handleChange}
          value={meme.topText}
        />

        <input
          type="text"
          placeholder="Bottom text"
          name="bottomText"
          onChange={handleChange}
          value={meme.bottomText}
        />
      </div>

      <button className="get-meme-btn" onClick={generateMeme}>
        generate new meme
      </button>

      <h1 className="title">
        <a href={meme.url} target="_blank" rel="noreferrer">
          {meme.name}
        </a>
      </h1>

      <div className="img-container">
        <p className="top-text">{meme.topText}</p>
        <p className="bot-text">{meme.bottomText}</p>
        <img src={meme.url} alt="" className="img-meme" />
      </div>
    </main>
  );
}
