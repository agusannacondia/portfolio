import React from 'react'
import Layout from '../components/layout'
import screenshot from '../assets/images/selenita.png'
import html5 from '../assets/images/tools/html5.png'
import css3 from '../assets/images/tools/css3.png'
import javascript from '../assets/images/tools/javascript.png'
import bootstrap from '../assets/images/tools/bootstrap.png'

const CuantoSale = () => (
  <Layout>
    <div id="main" className="Project">
      <h2 className="Project__Title noselect">Cuanto sale</h2>
      <span className="Project__Button noselect">
        <a href="https://cuantosale.annacondia.ar" target="__blank">
          Live Demo
        </a>
      </span>
      <span className="Project__Button noselect">
        <a href="https://github.com/agusannacondia/cuantosale" target="__blank">
          View on GitHub
        </a>
      </span>
      <div className="Project__Body">
        <img src={screenshot} className="Project__Image"></img>
        <p className="Project__Description">
          Fue de mis primeros proyectos como desarrollador frontend. Es simple:
          una web para saber el precio promedio de distintas cosas. Para
          resolverlo, consulto la API de MercadoLibre y hago un promedio de los
          resultados obtenidos. Esta hecha con HTML, CSS, Javascript y un template de Bootstrap.
        </p>
        <div className="Project__Tools">
          <img src={html5} className="Project__Tool"></img>
          <img src={css3} className="Project__Tool"></img>
          <img src={javascript} className="Project__Tool"></img>
          <img src={bootstrap} className="Project__Tool"></img>
        </div>
      </div>
    </div>
  </Layout>
)

export default CuantoSale;

