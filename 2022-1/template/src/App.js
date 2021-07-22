import Header from "./Header"
import Main from "./Main"
import Footer from "./Footer"

function App() {
  const info = {
    title : "Geometría Moderna I"
  }
  return (
    <>
    <Header title={info.title}/>
    <Main/>
    <Footer/>
    </>
  );
}

export default App;
