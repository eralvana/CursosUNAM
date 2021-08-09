import { Link, animateScroll as scroll } from "react-scroll";

import "./styles.css"

function Nav() {
  const offset = -210
  return (
    <nav>
      <ul className="background-0">
        <li><Link to="Presentation" smooth activeClass="active-0" spy offset={offset}>Inicio</Link></li>
        <li><Link to="Description" smooth activeClass="active-0" spy offset={offset}>Descripción</Link></li>
        <li><Link to="Syllabus" smooth activeClass="active-0" spy offset={offset}>Temario</Link></li>
        <li><Link to="Methodology" smooth activeClass="active-0" spy offset={offset}>Metodología</Link></li>
        <li><Link to="Evaluation" smooth activeClass="active-0" spy offset={offset}>Evaluación</Link></li>
        <li><Link to="Bibliography" smooth activeClass="active-0" spy offset={offset}>Bibliografía</Link></li>
        <li><Link to="Contact" smooth activeClass="active-0" spy offset={offset}>Contacto</Link></li>
      </ul>
    </nav>
  );
}

export default Nav;
