function Syllabus(props) {
  return (
    <section id="Syllabus">
      <div>
        <h2>Temario</h2>
      </div>
      <div>
        <p>
          <ol>
            <li>{props.syllabus[0]}</li>
            <li>{props.syllabus[1]}</li>
            <li>{props.syllabus[2]}</li>
            <li>{props.syllabus[3]}</li>
            <li>{props.syllabus[4]}</li>
            <li>{props.syllabus[5]}</li>
            <li>{props.syllabus[6]}</li>
          </ol>
        </p>
      </div>
    </section>
  );
}

export default Syllabus;
