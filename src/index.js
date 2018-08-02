import React from "react";
import ReactDOM from "react-dom";
import {Provider} from "mobx-react";
import store from './Store/Store';
import Battlefield from "./components/Battlefield";

const Index = () => {
  return <Battlefield></Battlefield>;
};

ReactDOM.render(<Provider {...{store}}><Index /></Provider>, document.getElementById("index"));