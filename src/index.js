import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App";
import { Exercise } from "./Exercise";
import { Exercise2 } from "./Exercise2";
import { Form } from "./Form";
import { Meme } from "./meme";

const root = ReactDOM.createRoot(document.querySelector("#root"));

//root.render(<App />);
//root.render(<Exercise />);
//root.render(<Exercise2 />);
//root.render(<Form />);
root.render(<Meme />);
