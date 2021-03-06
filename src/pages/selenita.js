import React from 'react'
import Layout from '../components/layout'
import screenshot from '../assets/images/selenita.png'
import html5 from '../assets/images/tools/html5.png'
import css3 from '../assets/images/tools/css3.png'
import javascript from '../assets/images/tools/javascript.png'
import sass from '../assets/images/tools/sass.png'
import bootstrap from '../assets/images/tools/bootstrap.png'

const Selenita = () => {
  return (
    <Layout>
      <div id="main" className="Project">
        <h2 className="Project__Title noselect">Selenita</h2>
        <span className="Project__Button noselect">
          <a href="https://selenita.ar" target="__blank">
            Live Demo
          </a>
        </span>
        <span className="Project__Button noselect">
          <a href="https://github.com/agusannacondia/selenita" target="__blank">
            View on GitHub
          </a>
        </span>
        <div className="Project__Body">
          <img
            src={screenshot}
            className="Project__Image"
            alt="Selenita project"
          ></img>
          <p className="Project__Description">
            Sitio web hecho para el emprendimiento Nails by Selenita. Fue
            maquetado con HTML5, estilado con Sass y además se agregaron efectos
            realizados en JavaScript. También uso algunos componentes de
            Bootstrap. Para el diseño responsive, usé tanto CSS Grid como
            Flexbox. El sitio fue optimizado al máximo y además tiene un
            especial tratamiento en el SEO, para otorgarle un mejor
            posicionamiento.
          </p>
          <div className="Project__Tools">
            <img src={html5} className="Project__Tool" alt="HTML5"></img>
            <img src={css3} className="Project__Tool" alt="CSS3"></img>
            <img
              src={javascript}
              className="Project__Tool"
              alt="Javascript"
            ></img>
            <img src={sass} className="Project__Tool" alt="SASS"></img>
            <img
              src={bootstrap}
              className="Project__Tool"
              alt="Bootstrap"
            ></img>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Selenita
