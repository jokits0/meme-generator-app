import React from "react";
import memesData from "../data/Data";
import { prettyFormat } from "@testing-library/react";

function getMeme() {
  const memes = memesData.data.memes;
  const random = Math.floor(Math.random() * (memes.length - 1));

  return memes[random].url;
}

export function MainContent() {
  let topText = "";
  let bottomText = "";
  const [meme, setMeme] = React.useState({
    topText,
    bottomText,
    getMeme: getMeme(),
  });

  function generateMemeImg() {
    setMeme((prevState) => {
      return { ...prevState, getMeme: getMeme() };
    });
    console.log(meme);
  }

  return (
    <div className="meme-container">
      <div className="input-container">
        <input type="text" placeholder="shut up" className="first-input" />
        <input type="text" placeholder="shut up" className="second-input" />
      </div>
      <button className="get-meme-btn" onClick={generateMemeImg}>
        Get a new meme image
        <img
          src="https://www.pngall.com/wp-content/uploads/2018/05/Files-High-Quality-PNG.png"
          alt=""
        />
      </button>
      <div className="meme-img-container">
        <img src={meme.getMeme} alt="" className="meme-img" />
        <p className="first-input-overlay">{meme.topText}</p>
        <p className="second-input-overlay">{meme.bottomText}</p>
      </div>
    </div>
  );
}
