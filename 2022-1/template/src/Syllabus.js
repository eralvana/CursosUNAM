function Syllabus(props) {
  return (
    <section id="Syllabus">
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
