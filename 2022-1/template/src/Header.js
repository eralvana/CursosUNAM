import Nav from "./Nav"

function Header(props) {
  // Título del curso
  // (XXX = Geometría Moderna I o Teoría de Gráficas)
  return (
    <header>
      <h1>{props.title}</h1>
      <Nav/>
    </header>
  );
}

export default Header;
