import Nav from "../Nav"

import "./styles.css"

function Header(props) {
  return (
    <header className="background-0">
      <h1>{props.coursename}</h1>
      <Nav/>
    </header>
  );
}

export default Header;
