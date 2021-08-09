import React from "react"
import Header from "../Header"
import Main from "../Main"
import Footer from "../Footer"
import infoGMI from "../../info/GMI.json"
import info from "../../info/TG.json"
import Context from "../../context.js"

import "./styles.css"

function App() {
  return (
    <Context.Provider value={info} >
    <Header/>
    <Main/>
    <Footer/>
    </Context.Provider>
  );
}

export default App;
