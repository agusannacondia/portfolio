import React from 'react'
import Layout from '../components/layout'
import screenshot from '../assets/images/myflights.png'
import html5 from '../assets/images/tools/html5.png'
import css3 from '../assets/images/tools/css3.png'
import javascript from '../assets/images/tools/javascript.png'
import sass from '../assets/images/tools/sass.png'
import react from '../assets/images/tools/react.png'
import reactbootstrap from '../assets/images/tools/reactbootstrap.png'

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
        <img src={screenshot} className="Project__Image"></img>
        <p className="Project__Description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi lacus
          nulla, auctor a massa consequat, interdum aliquet mi. Interdum et
          malesuada fames ac ante ipsum primis in faucibus. Nam vel accumsan
          nisi. Vivamus vulputate erat sit amet elit blandit, eget euismod nisl
          viverra. Maecenas non neque eget justo condimentum malesuada vel id
          mi. Pellentesque pellentesque congue metus at vestibulum. Fusce sit
          amet turpis felis. Nunc dictum, sem ut gravida congue, quam libero
          semper orci, ut gravida tellus metus vel urna. Donec facilisis
          pharetra diam eget volutpat. Ut placerat egestas nulla, ut faucibus
          mauris suscipit a. Nam sit amet nisl nec magna ultrices venenatis nec
          tincidunt est. Integer a ex elit.
        </p>
        <div className="Project__Tools">
          <img src={html5} className="Project__Tool"></img>
          <img src={css3} className="Project__Tool"></img>
          <img src={javascript} className="Project__Tool"></img>
          <img src={sass} className="Project__Tool"></img>
          <img src={react} className="Project__Tool"></img>
          <img src={reactbootstrap} className="Project__Tool"></img>
        </div>
      </div>
    </div>
  </Layout>
)

export default MyFlights
