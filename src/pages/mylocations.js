import React from 'react'
import Layout from '../components/layout'
import screenshot from '../assets/images/mylocations.png'
import html5 from '../assets/images/tools/html5.png'
import css3 from '../assets/images/tools/css3.png'
import javascript from '../assets/images/tools/javascript.png'
import react from '../assets/images/tools/react.png'
import reactbootstrap from '../assets/images/tools/reactbootstrap.png'

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
        <img src={screenshot} className="Project__Image"></img>
        <p className="Project__Description">
          Aplicación Web hecha con React que permite agregar y visualizar
          distintas ubicaciones en un mapa. Para el mapa usa la API de{' '}
          <strong>
            <a
              href="https://cloud.google.com/maps-platform?hl=es"
              target="__blank"
            >
              Google Maps Platform
            </a>
          </strong>
          . Además, usa efectos de{' '}
          <strong>
            <a
              href="https://daniel-lundin.github.io/react-dom-confetti/"
              target="__blank"
            >
              React DOM Confetti
            </a>
          </strong>
          , componentes de{' '}
          <strong>
            <a href="https://react-bootstrap.github.io/" target="__blank">
              React Bootstrap
            </a>
          </strong>{' '}
          y permite elementos arrastrables con{' '}
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
          <img src={html5} className="Project__Tool"></img>
          <img src={css3} className="Project__Tool"></img>
          <img src={javascript} className="Project__Tool"></img>
          <img src={react} className="Project__Tool"></img>
          <img src={reactbootstrap} className="Project__Tool"></img>
        </div>
      </div>
    </div>
  </Layout>
)

export default MyLocations
