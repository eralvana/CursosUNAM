import Context from "../../context.js"
import { useContext } from 'react';

import "./styles.css"

function Methodology() {
  const value = useContext(Context);
  return (
    <section id="Methodology" className="background-1">
      <div>
        <h1>Metodología del curso</h1>
      </div>
      <div className="methodology">
      <div className="center">
        El curso se desarrollará completamente en la modalidad a distancia en <b><i>Classroom</i></b> (el código de la clase es <b>{value.classroom.code}</b> y <b><a href={value.classroom.invitation} target="_blank" rel="noreferrer">aquí</a></b> está la invitación) y se dividirá en dos partes:
      </div>
      <ol>
        <li>
          Se pubicará semanalmente el material que contendrá los temas que serán evaluados de manera mensual.
        </li>
        <li>
          Se realizarán video-reuniones, los días <b>martes, miércoles y jueves</b> a través de <b><i>Meet</i></b> (<b><a href={value.meetlink} target="_blank" rel="noreferrer">aquí</a></b> el enlace de la reunión) en el horario indicado en la <b><a href={value.courselinkpageweb} target="_blank" rel="noreferrer">página de la facultad</a></b>, en las que se expondrán los temas tratados en el material que se publique.
        </li>
      </ol>
      <div className="center">
        <b>Nota:</b> Es recomendable inscribirse al curso con una cuenta <b>@ciencias.unam.mx</b>. De no lograr inscribirse al curso o entrar a la video-reunión, ponerse en contacto con los profesores por correo electrónico para dar solución al problema.
      </div>
      <div className="center">
        No hay lista de asistencia a las video-reuniones. Asistirá quien desee participar y estar atento a la exposición.
      </div>
      <div className="center">
        No es requisito asistir a las video-reuniones para tener derecho a presentar evaluación (parcial y final).
      </div>
      </div>
    </section>
  );
}

export default Methodology;
