import React from 'react'
import Layout from '../../components/layout'
import screenshot from '../../assets/images/selenita.png'
import html5 from '../../assets/images/tools/html5.png'
import css3 from '../../assets/images/tools/css3.png'
import javascript from '../../assets/images/tools/javascript.png'
import sass from '../../assets/images/tools/sass.png'
import bootstrap from '../../assets/images/tools/bootstrap.png'

const Selenita = () => {
  return (
    <Layout>
      <div id="main" className="Project">
        <h2 className="Project__Title noselect">Selenita</h2>
        <span className="Project__Button noselect">
          <a href="https://selenita.ar" target="__blank">
            Live Demo
          </a>
        </span>
        <span className="Project__Button noselect">
          <a href="https://github.com/agusannacondia/selenita" target="__blank">
            View on GitHub
          </a>
        </span>
        <div className="Project__Body">
          <img
            src={screenshot}
            className="Project__Image"
            alt="Selenita screenshot"
          ></img>
          <p className="Project__Description">
            Website made for the Nails by Selenita startup. It was layout with
            HTML5, styled with Sass and also added effects made in JavaScript. I
            also use some components of Bootstrap. For responsive design, I used
            both CSS Grid and Flexbox. The site was optimized to the maximum and
            also has a special treatment in SEO, to reach a better position.
          </p>
          <div className="Project__Tools">
            <img src={html5} className="Project__Tool" alt="HTML5"></img>
            <img src={css3} className="Project__Tool" alt="CSS3"></img>
            <img
              src={javascript}
              className="Project__Tool"
              alt="Javascript"
            ></img>
            <img src={sass} className="Project__Tool" alt="SASS"></img>
            <img
              src={bootstrap}
              className="Project__Tool"
              alt="Bootstrap"
            ></img>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Selenita
