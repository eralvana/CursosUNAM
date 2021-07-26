function Bibliography(props) {
  return (
    <section id="Bibliography">
      <div>
        <h2>Bibliografía</h2>
      </div>
      <div>
        <ul>
          <li dangerouslySetInnerHTML={{__html: props.bibliography[0]}}></li>
          <li dangerouslySetInnerHTML={{__html: props.bibliography[1]}}></li>
          <li dangerouslySetInnerHTML={{__html: props.bibliography[2]}}></li>
          <li dangerouslySetInnerHTML={{__html: props.bibliography[3]}}></li>
          <li dangerouslySetInnerHTML={{__html: props.bibliography[4]}}></li>
          <li dangerouslySetInnerHTML={{__html: props.bibliography[5]}}></li>
        </ul>
      </div>
    </section>
  );
}

export default Bibliography;
