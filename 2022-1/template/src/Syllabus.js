function Syllabus(props) {
  return (
    <section id="Syllabus">
      <div>
        <h2>Temario</h2>
      </div>
      <div>
        {props.syllabus}
      </div>
    </section>
  );
}

export default Syllabus;
