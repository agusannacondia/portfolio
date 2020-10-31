import React from 'react'
import Layout from '../../components/layout'
import screenshot from '../../assets/images/crushinquiz.png'
import html5 from '../../assets/images/tools/html5.png'
import css3 from '../../assets/images/tools/css3.png'
import javascript from '../../assets/images/tools/javascript.png'
import bootstrap from '../../assets/images/tools/bootstrap.png'
import angular from '../../assets/images/tools/angular.png'
import express from '../../assets/images/tools/express.png'
import mongodb from '../../assets/images/tools/mongodb.png'
import nodejs from '../../assets/images/tools/nodejs.png'

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
        <a
          href="https://github.com/agusannacondia/crushinquiz"
          target="__blank"
        >
          View on GitHub
        </a>
      </span>
      <div className="Project__Body">
        <img
          src={screenshot}
          className="Project__Image"
          alt="Crushin Quiz screenshot"
        ></img>
        <p className="Project__Description">
          It is one of my first projects: a game with soccer questions. The
          backend is simple, it is made with NodeJS and deployed in Heroku, and
          the questions are found hosted on MongoBD. For the frontend I used
          Angular and some Bootstrap components, and it is deployed in Netlify.
        </p>
        <div className="Project__Tools">
          <img src={html5} className="Project__Tool" alt="HTML5"></img>
          <img src={css3} className="Project__Tool" alt="CSS3"></img>
          <img
            src={javascript}
            className="Project__Tool"
            alt="JavaScript"
          ></img>
          <img src={bootstrap} className="Project__Tool" alt="Bootstrap"></img>
          <img src={mongodb} className="Project__Tool" alt="MongoDB"></img>
          <img src={express} className="Project__Tool" alt="Express"></img>
          <img src={angular} className="Project__Tool" alt="Angular"></img>
          <img src={nodejs} className="Project__Tool" alt="NodeJS"></img>
        </div>
      </div>
    </div>
  </Layout>
)

export default CrushinQuiz
