function Presentation(props) {
  return (
    <section id="Presentation">
      <div>
        <h1>{props.coursename}</h1>
      </div>
      <div>
      <p>
        El sitio oficial del curso de {props.coursename} (Grupo {props.group}) de la Facultad de Ciencias de la UNAM en el ciclo 2022-1.
      </p>
      </div>
    </section>
  );
}

export default Presentation;
