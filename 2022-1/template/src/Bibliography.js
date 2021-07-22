function Bibliography(props) {
  return (
    <section id="Bibliography">
      <div>
        <h2>Bibliografía</h2>
      </div>
      <div dangerouslySetInnerHTML={{__html: props.bibliography}}>
      </div>
    </section>
  );
}

export default Bibliography;
