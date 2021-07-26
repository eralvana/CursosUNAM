import Header from "./Header"
import Main from "./Main"
import Footer from "./Footer"

function App() {
  const info = {
    name : "Geometría",
    coursename : "Geometría Moderna I",
    group: "4091",
    syllabus: ["Introducción","Congruencia","Semejanza de triángulos","Semejanza de polígonos","Teorema de Ceva y Teorema de Menelao","Teorema de Desargues","Puntos y rectas armónicos"],
    classroomcode: "CÓDIGO CLASSROOM",
    classroominvitation: "ENLACE INVITACIÓN CLASSROOM",
    meetlink: "ENLACE MEET",
    courselinkpageweb: "http://www.fciencias.unam.mx/docencia/horarios/presentacion/326923",
    bibliography: ["Shively, L. (1977). <em>Introducción a la geometría moderna</em>. México: CECSA.","Coxeter, H. & Greitzer, S. (1967). <em>Geometry revisited</em>. New Math. Library, MAA.", "Eves, H. (1985). <em>Estudio de las Geometrías</em>. UTHEA.","Bulajich, R. & Goméz, J.A. (2002). <em>Geometría, Cuadernos de las Olimpiadas de Matemáticas</em>. México: IMATE-UNAM.", "Cárdenas, S. (2013). <em>Notas de geometría</em>. México: Prensas de Ciencias.", "Lucio, G., San Agustín, R. & Martínez de la Escalera, N. (2001). <em>Un poco de geometría</em>. México: Vínculos Matemáticos # 155, Notas de clase. Facultad de Ciencias, UNAM."],
    teacherassistant: "Sandra Cecilia Pérez Valles",
    teacherassistantplace: "Facultad de Ciencias, UNAM",
    teacherassistantemail: "sandycecilia97@ciencias.unam.mx",
  }
  return (
    <>
    <Header coursename={info.coursename}/>
    <Main name={info.name} coursename={info.coursename} group={info.group} syllabus={info.syllabus} classroomcode={info.classroomcode} classroominvitation={info.classroominvitation} meetlink={info.meetlink} courselinkpageweb={info.courselinkpageweb} bibliography={info.bibliography} teacherassistant={info.teacherassistant} teacherassistantplace={info.teacherassistantplace} teacherassistantemail={info.teacherassistantemail}/>
    <Footer/>
    </>
  );
}

export default App;
