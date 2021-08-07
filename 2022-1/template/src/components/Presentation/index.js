import "./styles.css"

function Presentation(props) {
  return (
    <section id="Presentation" className="background-1">
      <div class="descriptionpresentation">
        El sitio oficial del curso de {props.coursename} (Grupo {props.group}) de la Facultad de Ciencias de la UNAM en el ciclo 2022-1.
      </div>
      <img src={`/${props.index}.gif`} width="50%" height="50%" class="descriptionimage"/>
    </section>
  );
}

export default Presentation;
