import React from 'react'
import Layout from '../../components/layout'
import screenshot from '../../assets/images/mylocations.png'
import html5 from '../../assets/images/tools/html5.png'
import css3 from '../../assets/images/tools/css3.png'
import javascript from '../../assets/images/tools/javascript.png'
import react from '../../assets/images/tools/react.png'
import reactbootstrap from '../../assets/images/tools/reactbootstrap.png'

const MyLocations = () => (
  <Layout>
    <div id="main" className="Project">
      <h2 className="Project__Title noselect">My Locations</h2>
      <span className="Project__Button noselect">
        <a href="https://mylocations.annacondia.ar" target="__blank">
          Live Demo
        </a>
      </span>
      <span className="Project__Button noselect">
        <a
          href="https://github.com/agusannacondia/mylocations"
          target="__blank"
        >
          View on GitHub
        </a>
      </span>
      <div className="Project__Body">
        <img
          src={screenshot}
          className="Project__Image"
          alt="My locations screenshot"
        ></img>
        <p className="Project__Description">
          Web application made with React that allows adding and viewing
          different locations on a map. For the map I use the{' '}
          <strong>
            <a
              href="https://cloud.google.com/maps-platform?hl=es"
              target="__blank"
            >
              Google Maps Platform
            </a>
          </strong>{' '}
          API. Additionally, it uses{' '}
          <strong>
            <a
              href="https://daniel-lundin.github.io/react-dom-confetti/"
              target="__blank"
            >
              React DOM Confetti
            </a>
          </strong>{' '}
          effects,{' '}
          <strong>
            <a href="https://react-bootstrap.github.io/" target="__blank">
              React Bootstrap
            </a>
          </strong>{' '}
          components and allows draggable elements with{' '}
          <strong>
            <a
              href="https://www.npmjs.com/package/react-draggable"
              target="__blank"
            >
              React Draggable
            </a>
          </strong>
          .
        </p>
        <div className="Project__Tools">
          <img src={html5} className="Project__Tool" alt="HTML5"></img>
          <img src={css3} className="Project__Tool" alt="CSS3"></img>
          <img
            src={javascript}
            className="Project__Tool"
            alt="JavaScript"
          ></img>
          <img src={react} className="Project__Tool" alt="React"></img>
          <img
            src={reactbootstrap}
            className="Project__Tool"
            alt="React Bootstrap"
          ></img>
        </div>
      </div>
    </div>
  </Layout>
)

export default MyLocations
