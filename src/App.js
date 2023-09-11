/**
 *  This is the version one, which fetch data from a file 'Data.js'
 *
 */

import React from "react";
import { myMemes } from "./data/Data";
import "./styles.css";

export function App() {
  const [myImg, setMyImg] = React.useState(getMeme);
  const [myTitle, setMyTitle] = React.useState();
  const [text, setText] = React.useState({ topText: "", botText: "" });

  function getMeme() {
    const { memes } = myMemes.data;
    const randomIndex = Math.floor(Math.random() * (memes.length - 1));
    const { url, name } = memes[randomIndex];
    return { url, name };
  }
  function handleChange(event) {
    const { value, name } = event.target;
    setText((prevState) => ({ ...prevState, [name]: value }));
  }

  const generateMeme = () => {
    const runFunc = getMeme();
    setMyImg(runFunc.url);
    setMyTitle(runFunc.name);
  };

  return (
    <main className="meme-container">
      <div className="logo-container">
        <img
          src="https://www.pikpng.com/pngl/b/403-4033629_sad-crying-cat-meme-have-nothing-to-live.png"
          alt="logo"
        />
        <p>Meme Generator</p>
      </div>
      <div className="text-input">
        <input
          type="text"
          placeholder="Top text"
          name="topText"
          onChange={handleChange}
          value={text.topText}
        />
        <input
          type="text"
          placeholder="Bottom text"
          name="botText"
          onChange={handleChange}
          value={text.botText}
        />
      </div>
      <button className="get-meme-btn" onClick={generateMeme}>
        generate new meme
      </button>

      <h1 className="title">
        <a href={myImg} target="_blank" rel="noreferrer">
          {myTitle}
        </a>
      </h1>
      <div className="img-container">
        <p className="top-text">{text.topText}</p>
        <p className="bot-text">{text.botText}</p>
        <img src={myImg} alt="" className="img-meme" />
      </div>
    </main>
  );
}
