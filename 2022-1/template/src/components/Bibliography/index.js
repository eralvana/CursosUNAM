import "./styles.css"

function Bibliography(props) {
  return (
    <section id="Bibliography" className="background-3">
      <div>
        <h1>Bibliografía</h1>
      </div>
      <div class="center">
        <ul class="bibliography">
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
