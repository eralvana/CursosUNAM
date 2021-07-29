import "./styles.css"

function Description(props) {
  return (
    <section id="Description" className="background-3">
      <div>
        <h2>Descripción del curso</h2>
      </div>
      <div>
          Es un curso formal de {props.name} que busca desarrollar en el estudiante el gusto por las matemáticas.
      </div>
      <div>
        Se intenta desarrollar en el estudiante la abstracción, la intuición y la buena escritura de las matemáticas; se busca enfatizar en la comprensión de conceptos y definiciones, en la demostración de proposiciones y teoremas, así como en sus diversas aplicaciones.
      </div>
    </section>
  );
}

export default Description;
