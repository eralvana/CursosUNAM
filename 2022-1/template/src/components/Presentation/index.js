import Context from "../../context.js"
import { useContext } from 'react';

import "./styles.css"

function Presentation() {
  const value = useContext(Context);
  return (
    <section id="Presentation" className="background-1">
      <img src={`/${value.index}.gif`} width="50%" height="50%" class="descriptionimage"/>
      <div class="descriptionpresentation">
        El sitio oficial del curso de {value.coursename} (Grupo {value.group}) de la Facultad de Ciencias de la UNAM en el ciclo 2022-1.
      </div>
    </section>
  );
}

export default Presentation;
