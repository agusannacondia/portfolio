import React from 'react'
import Layout from '../../components/layout'
import screenshot from '../../assets/images/cuantosale.png'
import html5 from '../../assets/images/tools/html5.png'
import css3 from '../../assets/images/tools/css3.png'
import javascript from '../../assets/images/tools/javascript.png'
import bootstrap from '../../assets/images/tools/bootstrap.png'

const CuantoSale = () => (
  <Layout>
    <div id="main" className="Project">
      <h2 className="Project__Title noselect">¿Cuánto sale?</h2>
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
        <img
          src={screenshot}
          className="Project__Image"
          alt="Cuanto sale screenshot"
        ></img>
        <p className="Project__Description">
          It was one of my first projects as a frontend developer. It is simple:
          a website to know the average price of different things. To solve it,
          I use the MercadoLibre API and I average the results obtained. It is
          made with HTML, CSS, Javascript and a Bootstrap template.
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
        </div>
      </div>
    </div>
  </Layout>
)

export default CuantoSale
