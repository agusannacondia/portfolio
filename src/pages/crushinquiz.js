import React from 'react'
import Layout from '../components/layout'
import screenshot from '../assets/images/selenita.png'
import html5 from '../assets/images/tools/html5.png'
import css3 from '../assets/images/tools/css3.png'
import javascript from '../assets/images/tools/javascript.png'
import bootstrap from '../assets/images/tools/bootstrap.png'
import angular from '../assets/images/tools/angular.png'
import express from '../assets/images/tools/express.png'
import mongodb from '../assets/images/tools/mongodb.png'
import nodejs from '../assets/images/tools/nodejs.png'

const CrushinQuiz = () => (
  <Layout>
    <div id="main" className="Project">
      <h2 className="Project__Title noselect">Crushin Quiz</h2>
      <span className="Project__Button noselect">
        <a href="https://crushinquiz.annacondia.ar" target="__blank">
          Live Demo
        </a>
      </span>
      <span className="Project__Button noselect">
        <a href="https://github.com/agusannacondia/crushinquiz" target="__blank">
          View on GitHub
        </a>
      </span>
      <div className="Project__Body">
        <img src={screenshot} className="Project__Image"></img>
        <p className="Project__Description">
          Es uno de mis primeros proyectos, un juego con preguntas de fútbol. El
          backend es simple, esta hecho con NodeJS y deployado en Heroku, y las preguntas se encuentran
          alojadas en MongoBD. Para el frontend usé Angular y algunos componentes de Bootstrap, y esta deployado en Netlify.
        </p>
        <div className="Project__Tools">
          <img src={html5} className="Project__Tool"></img>
          <img src={css3} className="Project__Tool"></img>
          <img src={javascript} className="Project__Tool"></img>
          <img src={bootstrap} className="Project__Tool"></img>
          <img src={mongodb} className="Project__Tool"></img>
          <img src={express} className="Project__Tool"></img>
          <img src={angular} className="Project__Tool"></img>
          <img src={nodejs} className="Project__Tool"></img>
        </div>
      </div>
    </div>
  </Layout>
)

export default CrushinQuiz
