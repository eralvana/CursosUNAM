import Presentation from "../Presentation"
import Description from "../Description"
import Syllabus from "../Syllabus"
import Methodology from "../Methodology"
import Evaluation from "../Evaluation"
import Bibliography from "../Bibliography"
import Contact from "../Contact"

import "./styles.css"

function Main(props) {
  return (
    <main>
      <Presentation coursename={props.coursename} group={props.group}/>
      <Description name={props.name}/>
      <Syllabus syllabus={props.syllabus}/>
      <Methodology classroomcode={props.classroomcode} classroominvitation={props.classroominvitation} meetlink={props.meetlink} courselinkpageweb={props.courselinkpageweb}/>
      <Evaluation/>
      <Bibliography bibliography={props.bibliography}/>
      <Contact teacherassistant={props.teacherassistant} teacherassistantplace={props.teacherassistantplace} teacherassistantemail={props.teacherassistantemail}/>
    </main>
  );
}

export default Main;
