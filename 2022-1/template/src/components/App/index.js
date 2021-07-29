import React from "react"
import Header from "../Header"
import Main from "../Main"
import Footer from "../Footer"
import infoGMI from "../../info/GMI.json"
import info from "../../info/TG.json"

import "./styles.css"

function App() {
  return (
    <>
    <Header coursename={info.coursename}/>
    <Main name={info.name} coursename={info.coursename} group={info.group} syllabus={info.syllabus} classroomcode={info.classroom.code} classroominvitation={info.classroom.invitation} meetlink={info.meetlink} courselinkpageweb={info.courselinkpageweb} bibliography={info.bibliography} teacherassistant={info.teacherassistant.name} teacherassistantplace={info.teacherassistant.place} teacherassistantemail={info.teacherassistant.email}/>
    <Footer/>
    </>
  );
}

export default App;
