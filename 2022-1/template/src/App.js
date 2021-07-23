import Header from "./Header"
import Main from "./Main"
import Footer from "./Footer"

function App() {
  const info = {
    name : "Geometría",
    coursename : "Geometría Moderna I",
    group: "4091",
    syllabus: "<p>  <ol>  <li>Introducción</li> <ul>  <li>Segmentos de línea dirigidos</li> <li>Relaciones entre segmentos de líneas dirigidos</li> <li>Razón de partición de un segmento de línea</li> <li>Ángulos dirigidos</li>  <li>Correspondencia uno a uno</li>  <li>Puntos al infinito</li> <li>Hileras y haces</li>  </ul>  <li>Congruencia</li> <ul>  <li>Criterios de congruencia</li> <li>Teoremas de congruencia</li>  </ul> <li>Semejanza de triángulos</li> <ul>  <li>Teorema de Thales</li>  <li>Criterios de semejanza</li> <li>Teorema de Pitágoras y su recíproco</li>  <li>Puntos y rectas importantes sobre el triángulo</li> <li>Ángulos en la circunferencia</li> </ul> <li>Semejanza de polígonos</li>  <ul>  <li>Figuras homotéticas</li>  <li>Simetría con respecto a un punto</li> <li>Líneas antiparalelas</li> <li>Cuadriláteros cíclicos</li> <li>Teorema de Ptolomeo</li>  <li>Circunferencias homotéticas</li>  <li>Puntos homólogos y antihomólogos</li> <li>Circunferencia de Apolonio</li> </ul> <li>Teorema de Ceva y Teorema de Menelao</li>  <li>Teorema de Desargues</li>  <ul>  <li>Figuras en perspectiva</li> </ul> <li>Puntos y rectas armónicos</li> </ol> </p>"
  ,
    classroomcode: "CÓDIGO CLASSROOM",
    classroominvitation: "ENLACE INVITACIÓN CLASSROOM",
    meetlink: "ENLACE MEET",
    courselinkpageweb: "http://www.fciencias.unam.mx/docencia/horarios/presentacion/326923",
    bibliography: "<p>  <ul>  <li>Shively, L. (1977) <em>Introducción a la geometría moderna</em>. México: CECSA.</li> <li>Coxeter, H., Greitzer, S. (1967) <em>Geometry revisited</em>. New Math. Library, MAA.</li>  <li>Eves, H. (1985) <em>Estudio de las Geometrías</em>. UTHEA.</li> <li>Bulajich, R. & Goméz, J.A. (2002) <em>Geometría, Cuadernos de las Olimpiadas de Matemáticas</em>. México: IMATE-UNAM.</li>  <li>Cárdenas, S. (2013) <em>Notas de geometría</em>. México: Prensas de ciencias.</li> <li>Lucio, G., San Agustín, R., Martínez de la Escalera, N. (2001) <em>Un poco de geometría</em>. México: Vínculos Matemáticos # 155, Notas de clase. Facultad de Ciencias, UNAM.</li></ul> </p>",
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
