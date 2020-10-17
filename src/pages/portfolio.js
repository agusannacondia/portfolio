import React from 'react'
import Layout from '../components/layout'
import screenshot from '../assets/images/portfolio.png'
import html5 from '../assets/images/tools/html5.png'
import css3 from '../assets/images/tools/css3.png'
import javascript from '../assets/images/tools/javascript.png'
import sass from '../assets/images/tools/sass.png'
import gatsby from '../assets/images/tools/gatsby.png'
import react from '../assets/images/tools/react.png'

const Portfolio = () => (
  <Layout>
    <div id="main" className="Project">
      <h2 className="Project__Title noselect">Portfolio</h2>
      <span className="Project__Button noselect">
        <a href="https://annacondia.ar" target="__blank">
          Live Demo
        </a>
      </span>
      <span className="Project__Button noselect">
        <a href="https://github.com/agusannacondia/portfolio" target="__blank">
          View on GitHub
        </a>
      </span>
      <div className="Project__Body">
        <img src={screenshot} className="Project__Image"></img>
        <p className="Project__Description">
          Mi portfolio personal. Fue hecho con Gatsby, un framework basado en
          React para generar sitios web estáticos que se renderizan del lado del servidor (SSR),
          por lo cual son mas rápidos y permiten usar SEO. Para los estilos usé el preprocesador de CSS Sass.
        </p>
        <div className="Project__Tools">
          <img src={html5} className="Project__Tool"></img>
          <img src={css3} className="Project__Tool"></img>
          <img src={javascript} className="Project__Tool"></img>
          <img src={sass} className="Project__Tool"></img>
          <img src={react} className="Project__Tool"></img>
          <img src={gatsby} className="Project__Tool"></img>
        </div>
      </div>
    </div>
  </Layout>
)

export default Portfolio
