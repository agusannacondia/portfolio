import React from 'react'
import Layout from '../../components/layout'
import screenshot from '../../assets/images/portfolio.png'
import html5 from '../../assets/images/tools/html5.png'
import css3 from '../../assets/images/tools/css3.png'
import javascript from '../../assets/images/tools/javascript.png'
import sass from '../../assets/images/tools/sass.png'
import gatsby from '../../assets/images/tools/gatsby.png'
import react from '../../assets/images/tools/react.png'

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
        <img
          src={screenshot}
          className="Project__Image"
          alt="My portfolio screenshot"
        ></img>
        <p className="Project__Description">
          My personal portfolio. It was made with Gatsby, a React framework to
          generate static websites that are server-side rendered (SSR), for
          which they are faster and allow the use of SEO. For the styles I used
          the CSS preprocessor Sass.
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
          <img src={react} className="Project__Tool" alt="React"></img>
          <img src={gatsby} className="Project__Tool" alt="Gatsby"></img>
        </div>
      </div>
    </div>
  </Layout>
)

export default Portfolio
