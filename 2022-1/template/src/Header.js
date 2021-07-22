import Nav from "./Nav"

function Header(props) {
  return (
    <header>
      <h1>{props.coursename}</h1>
      <Nav/>
    </header>
  );
}

export default Header;
