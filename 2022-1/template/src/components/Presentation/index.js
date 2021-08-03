import "./styles.css"

function Presentation(props) {
  return (
    <section id="Presentation" className="background-1">
      <div>
        <h1>{props.coursename}</h1>
      </div>
      <div>
        El sitio oficial del curso de {props.coursename} (Grupo {props.group}) de la Facultad de Ciencias de la UNAM en el ciclo 2022-1.
      </div>
      <img src={`/${props.index}.svg`}/>
    </section>
  );
}

export default Presentation;
