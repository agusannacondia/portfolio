import React from 'react'
import Layout from '../components/layout'
import screenshot from '../assets/images/followme.png'
import html5 from '../assets/images/tools/html5.png'
import css3 from '../assets/images/tools/css3.png'
import javascript from '../assets/images/tools/javascript.png'
import express from '../assets/images/tools/express.png'
import mongodb from '../assets/images/tools/mongodb.png'
import nodejs from '../assets/images/tools/nodejs.png'
import react from '../assets/images/tools/react.png'

const FollowMe = () => (
  <Layout>
    <div id="main" className="Project">
      <h2 className="Project__Title noselect">FollowMe</h2>
      <span className="Project__Button noselect">
        <a href="https://followme.annacondia.ar" target="__blank">
          Live Demo
        </a>
      </span>
      <span className="Project__Button noselect">
        <a href="https://github.com/agusannacondia/followme" target="__blank">
          View on GitHub
        </a>
      </span>
      <div className="Project__Body">
        <img
          src={screenshot}
          className="Project__Image"
          alt="FollowMe screenshot"
        ></img>
        <p className="Project__Description">
          Red social similar a Instagram hecha con React. El backend esta hecho
          con NodeJS, Express y los datos persisten en MongoDB. El frontend es
          React y CSS puro. Para controlar el estado de la aplicacion uso React
          API Context. Esta deployado en Netlify.
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

export default FollowMe
