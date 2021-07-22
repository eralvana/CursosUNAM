function Contact(props) {
  return (
    <section id="Contact">
      <div>
        <h2>Contacto</h2>
      </div>
      <div>
        <ul>
          <li>Ernesto Vázquez
            <ul>
              <li>Aula 1 (Nuevo Edificio) del Instituto de Matemáticas - <a href="mailto:ernestociencias@yahoo.com.mx">ernestociencias@yahoo.com.mx</a></li>
            </ul>
          </li>
          <li>{props.teacherassistant}
            <ul>
              <li>{props.teacherassistantplace} - <a href={props.teacherassistantemailto}>{props.teacherassistantemail}</a></li>
            </ul>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Contact;
