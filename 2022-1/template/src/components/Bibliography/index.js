import "./styles.css"

function Bibliography(props) {
  return (
    <section id="Bibliography" className="background-3">
      <div>
        <h2>Bibliografía</h2>
      </div>
      <div>
        <ul>
        {
        props.bibliography.map(function(e,i){
        return (
        <li key={i}>{e.author} ({e.year}). <em>{e.title}</em>. {e.printer}.</li>
        )
        })
        }
        </ul>
      </div>
    </section>
  );
}

export default Bibliography;
