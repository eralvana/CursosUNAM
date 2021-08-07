import "./styles.css"

function Syllabus(props) {
  return (
    <section id="Syllabus" className="background-2">
      <div>
        <h1>Temario</h1>
      </div>
      <div class="syllabus">
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
