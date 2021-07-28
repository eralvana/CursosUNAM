import React from "react"
import Header from "./Header"
import Main from "./Main"
import Footer from "./Footer"

const URL = "https://gist.githubusercontent.com/eralvana/629d22d4169ba1366cbae4f0cc9f7e8f/raw/c9dd6ccf7dbec13b4e58aa19a11b846b15c5fa6f/gistfile1.txt"

function App() {
	const [info,Setinfo] = React.useState({})
	React.useEffect(function(){
	fetch(URL).then(r => r.json()).then(console.log)
	})
  return (
    <>
    <Header coursename={info.coursename}/>
    <Main name={info.name} coursename={info.coursename} group={info.group} syllabus={info.syllabus} classroomcode={info.classroomcode} classroominvitation={info.classroominvitation} meetlink={info.meetlink} courselinkpageweb={info.courselinkpageweb} bibliography={info.bibliography} teacherassistant={info.teacherassistant} teacherassistantplace={info.teacherassistantplace} teacherassistantemail={info.teacherassistantemail}/>
    <Footer/>
    </>
  );
}

export default App;
