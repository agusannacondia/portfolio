import React from 'react'
import Layout from '../../components/layout'
import screenshot from '../../assets/images/followme.png'
import html5 from '../../assets/images/tools/html5.png'
import css3 from '../../assets/images/tools/css3.png'
import javascript from '../../assets/images/tools/javascript.png'
import express from '../../assets/images/tools/express.png'
import mongodb from '../../assets/images/tools/mongodb.png'
import nodejs from '../../assets/images/tools/nodejs.png'
import react from '../../assets/images/tools/react.png'

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
          Social network similar to Instagram. It was made with React. The
          backend is done with NodeJS, Express and the data persists in MongoDB.
          The frontend is React and pure CSS. To control the state of the
          application I use React API context. It was deployed on Netlify.
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
