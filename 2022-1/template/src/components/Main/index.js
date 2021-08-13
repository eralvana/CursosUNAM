import Presentation from "../Presentation"
import Description from "../Description"
import Syllabus from "../Syllabus"
import Methodology from "../Methodology"
import Evaluation from "../Evaluation"
import Bibliography from "../Bibliography"
import Contact from "../Contact"

import "./styles.css"

function Main() {
  return (
    <main>
      <Presentation/>
      <Description/>
      <Syllabus/>
      <Methodology/>
      <Evaluation/>
      <Bibliography/>
      <Contact/>
    </main>
  );
}

export default Main;
