import "./styles.css"

function Syllabus(props) {
  return (
    <section id="Syllabus" className="background-2">
      <div>
        <h2>Temario</h2>
      </div>
      <div>
        <ol>
        {
          props.syllabus.map((e,i) => <li key={i}>{e}.</li>)
        }
        </ol>
      </div>
    </section>
  );
}

export default Syllabus;
