import Header from "./Header"
import Main from "./Main"
import Footer from "./Footer"

function App() {
  const info = {
    name : "Geometría",
    coursename : "Geometría Moderna I",
    group: "4091",
    syllabus: "Prueba (requiere código HTML)",
    classroomcode: "CÓDIGO CLASSROOM",
    classroominvitation: "ENLACE INVITACIÓN CLASSROOM",
    meetlink: "ENLACE MEET",
    courselinkpageweb: "http://www.fciencias.unam.mx/docencia/horarios/presentacion/326923",
    bibliography: "Prueba Bibliografía (requiere código HTML)",
    teacherassistant: "Sandra Cecilia Pérez Valles",
    teacherassistantplace: "Facultad de Ciencias, UNAM",
    teacherassistantemail: "sandycecilia97@ciencias.unam.mx",//REVISAR MAILTO
  }
  return (
    <>
    <Header coursename={info.coursename}/>
    <Main name={info.name} coursename={info.coursename} group={info.group} syllabus={info.syllabus} classroomcode={info.classroomcode} classroominvitation={info.classroominvitation} meetlink={info.meetlink} courselinkpageweb={info.courselinkpageweb} bibliography={info.bibliography} teacherassistant={info.teacherassistant} teacherassistantplace={info.teacherassistantplace} teacherassistantemail={info.teacherassistantemail}/>
    <Footer/>
    </>
  );
}

export default App;
