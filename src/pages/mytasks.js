import React from 'react'
import Layout from '../components/layout'
import screenshot from '../assets/images/mytasks.png'
import html5 from '../assets/images/tools/html5.png'
import css3 from '../assets/images/tools/css3.png'
import javascript from '../assets/images/tools/javascript.png'

import express from '../assets/images/tools/express.png'
import mongodb from '../assets/images/tools/mongodb.png'
import nodejs from '../assets/images/tools/nodejs.png'
import react from '../assets/images/tools/react.png'

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
        <img
          src={screenshot}
          className="Project__Image"
          alt="My Tasks screenshot"
        ></img>
        <p className="Project__Description">
          Aplicación para organizar tareas y proyectos. Esta hecha con React, el
          back-end en NodeJS y el deploy en Netlify. Las tareas y proyetcos
          quedan guardadas en una base de datos no SQL, con MongoDB.
        </p>
        <div className="Project__Tools">
          <img src={html5} className="Project__Tool" alt="HTML5"></img>
          <img src={css3} className="Project__Tool" alt="CSS3"></img>
          <img
            src={javascript}
            className="Project__Tool"
            alt="JavaScript"
          ></img>
          <img src={mongodb} className="Project__Tool" alt="MongoDB"></img>
          <img src={express} className="Project__Tool" alt="Express"></img>
          <img src={react} className="Project__Tool" alt="React"></img>
          <img src={nodejs} className="Project__Tool" alt="NodeJS"></img>
        </div>
      </div>
    </div>
  </Layout>
)

export default MyTasks
