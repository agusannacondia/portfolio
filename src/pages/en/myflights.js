import React from 'react'
import Layout from '../../components/layout'
import screenshot from '../../assets/images/myflights.png'
import html5 from '../../assets/images/tools/html5.png'
import css3 from '../../assets/images/tools/css3.png'
import javascript from '../../assets/images/tools/javascript.png'
import sass from '../../assets/images/tools/sass.png'
import react from '../../assets/images/tools/react.png'
import reactbootstrap from '../../assets/images/tools/reactbootstrap.png'

const MyFlights = () => (
  <Layout>
    <div id="main" className="Project">
      <h2 className="Project__Title noselect">My Flights</h2>
      <span className="Project__Button noselect">
        <a href="https://myflights.annacondia.ar" target="__blank">
          Live Demo
        </a>
      </span>
      <span className="Project__Button noselect">
        <a href="https://github.com/agusannacondia/myflights" target="__blank">
          View on GitHub
        </a>
      </span>
      <div className="Project__Body">
        <img
          src={screenshot}
          className="Project__Image"
          alt="My Flights screenshot"
        ></img>
        <p className="Project__Description">
          Website that allows you to check flights, accommodations and packages.
          To carry out this search, I consume the API of cities and flights from
          SkyScanner, and an hotels API from ApiDojo.
        </p>
        <div className="Project__Tools">
          <img src={html5} className="Project__Tool" alt="HTML5"></img>
          <img src={css3} className="Project__Tool" alt="CSS3"></img>
          <img
            src={javascript}
            className="Project__Tool"
            alt="JavaScript"
          ></img>
          <img src={sass} className="Project__Tool" alt="SASS"></img>
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

export default MyFlights
