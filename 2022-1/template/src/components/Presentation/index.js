import Context from "../../context.js"
import { useContext } from 'react';
import imgGMI from "../../img/GMI.gif"
import imgTG from "../../img/TG.gif"

import "./styles.css"

function Presentation() {
  const value = useContext(Context);
  let img;
  if (value.index == "GMI"){
    img = imgGMI
  } else {
    img = imgTG
  }
  return (
    <section id="Presentation" className="background-1">
      <img src={img} width="50%" height="50%" className="descriptionimage" alt=""/>
      <div className="descriptionpresentation">
        El sitio oficial del curso de {value.coursename} (Grupo {value.group}) de la Facultad de Ciencias de la UNAM en el ciclo 2022-1.
      </div>
    </section>
  );
}

export default Presentation;
