function Syllabus(props) {
  return (
    <section id="Syllabus">
      <div>
        <h2>Temario</h2>
      </div>
      <div dangerouslySetInnerHTML={{__html: props.syllabus}}>
      </div>
    </section>
  );
}

export default Syllabus;
