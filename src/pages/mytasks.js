import React from 'react'
import Layout from '../components/layout'
import screenshot from '../assets/images/mytasks.png'
import html5 from '../assets/images/tools/html5.png'
import css3 from '../assets/images/tools/css3.png'
import javascript from '../assets/images/tools/javascript.png'
import sass from '../assets/images/tools/sass.png'
import bootstrap from '../assets/images/tools/bootstrap.png'

import angular from '../assets/images/tools/angular.png'
import express from '../assets/images/tools/express.png'
import gatsby from '../assets/images/tools/gatsby.png'
import mongodb from '../assets/images/tools/mongodb.png'
import nodejs from '../assets/images/tools/nodejs.png'
import react from '../assets/images/tools/react.png'
import reactbootstrap from '../assets/images/tools/reactbootstrap.png'

const MyTasks = () => (
  <Layout>
    <div id="main" className="Project">
      <h2 className="Project__Title noselect">My Tasks</h2>
      <span className="Project__Button noselect">
        <a href="https://mytasks.annacondia.ar" target="__blank">
          Live Demo
        </a>
      </span>
      <span className="Project__Button noselect">
        <a href="https://github.com/agusannacondia/mytasks" target="__blank">
          View on GitHub
        </a>
      </span>
      <div className="Project__Body">
        <img src={screenshot} className="Project__Image"></img>
        <p className="Project__Description">
          Sitio web hecho para el emprendimiento Nails by Selenita. Fue
          maquetado con HTML5, estilado con Sass y además se agregaron efectos
          realizados en Javascript. Tambien uso algunos componentes de
          Bootstrap. Para el diseño responsive, usé tanto CSS Grid como Flexbox.
          El sitio fue optimizado al máximo y además tiene un especial
          tratamiento en el SEO para un mejor posicionamiento.
        </p>
        <div className="Project__Tools">
          <img src={html5} className="Project__Tool"></img>
          <img src={css3} className="Project__Tool"></img>
          <img src={javascript} className="Project__Tool"></img>
          <img src={mongodb} className="Project__Tool"></img>
          <img src={express} className="Project__Tool"></img>
          <img src={react} className="Project__Tool"></img>
          <img src={nodejs} className="Project__Tool"></img>
        </div>
      </div>
    </div>
  </Layout>
)

export default MyTasks
