import React, { useEffect } from 'react'
import Helmet from 'react-helmet'

import Gallery from '../../components/Gallery'
import Layout from '../../components/layout'

import { DEFAULT_IMAGES_EN } from '../../components/Gallery/constants/defaultImages_en'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

import { Link } from 'gatsby'

const App = () => {
  const siteTitle = 'Agustin Annacondia'
  const siteDescription = 'Descripcion'

  useEffect(() => {
    localStorage.setItem('language', 'en')
  }, [])

  return (
    <Layout>
      <Helmet>
        <title>{siteTitle}</title>
        <meta name="description" content={siteDescription} />
      </Helmet>

      <div id="main">
        <div className="language-link">
          <Link to="/">
            <p>Ver en español</p>
            <FontAwesomeIcon icon={faArrowRight} />
          </Link>
        </div>
        <section id="one">
          <header className="major">
            <h2>About me</h2>
          </header>
          <p>
            Since I was a child I was passionate about solving problems,
            participating in different Mathematical Olympiads. Thanks to that,
            to me passion for computing and my curiosity to discover how things
            work is that I decided to study Engineering in Computing.
            <br />
            <br />
            Today at 23 years old I am training in the web development area,
            mainly front-end, which caught my attention. Meanwhile, I'm
            finishing my studies and work as a full-stack developer in an
            insurance company.
            <br />
            <br />I would like to work on several projects that help me to
            improve my skills, because I consider that the best way to learn is
            through experience.
          </p>
        </section>

        <section id="two">
          <h2>Skills</h2>
          <p>
            <span role="img" aria-label="white circle emoji">
              &#9898;
            </span>{' '}
            Front-End Development with{' '}
            <strong>HTML5, CSS3, JavaScript, Angular and ReactJS.</strong>
            <br />
            <span role="img" aria-label="white circle emoji">
              &#9898;
            </span>{' '}
            <strong>ReactJS:</strong> React Core. Custom Hooks. Redux and
            Context. Styled Components and CSS Modules. Consuming APIs using
            fetch and <strong>Axios</strong>. Unit testing with{' '}
            <strong>Jest</strong>. React frameworks like <strong>NextJS</strong>{' '}
            and <strong>Gatsby</strong>.
            <br />
            <span role="img" aria-label="white circle emoji">
              &#9898;
            </span>{' '}
            CSS preprocessors: <strong>SASS</strong> y <strong>LESS</strong>.
            <br />
            <span role="img" aria-label="white circle emoji">
              &#9898;
            </span>{' '}
            CSS frameworks: <strong>Bootstrap</strong>,{' '}
            <strong>Tailwind</strong> and <strong>Bulma</strong>.
            <br />
            <span role="img" aria-label="black circle emoji">
              &#9899;
            </span>{' '}
            Back-End Development: <strong>NodeJS</strong> and{' '}
            <strong>C#</strong>, database connections, auth methods.
            <br />
            <span role="img" aria-label="black circle emoji">
              &#9899;
            </span>{' '}
            Creation of REST and GraphQL APIs for my personal projects with MERN
            Stack
            <br />
            <span role="img" aria-label="black circle emoji">
              &#9899;
            </span>{' '}
            Experience managing <strong>(SQL)</strong> and{' '}
            <strong>(No-SQL)</strong> databases.
            <br />
            <span role="img" aria-label="blue circle emoji">
              &#128309;
            </span>{' '}
            Command line. Version control systems: Git/GitHub, TFS.
            <br />
            <span role="img" aria-label="blue circle emoji">
              &#128309;
            </span>{' '}
            Linux and Shell scripts using Bash and Powershell.
            <br />
            <span role="img" aria-label="blue circle emoji">
              &#128309;
            </span>{' '}
            Agile and traditional project management.
            <br />
            <span role="img" aria-label="blue circle emoji">
              &#128309;
            </span>{' '}
            Design and architectural patterns.
            <br />
          </p>
        </section>

        <section id="three">
          <h2>Professional Experience</h2>
          <p>
            I work as a Software Developer in{' '}
            <strong>
              <a
                href="https://www.boston.com.ar/"
                target="_blank"
                rel="noreferrer"
              >
                Boston Seguros
              </a>
            </strong>{' '}
            since april 2019. In the projects that I participated, I created new
            modules for the website (made in ASP.NET MVC) and I took care of
            carrying out the maintenance of some existing. In them I applied my
            knowledge of HTML, CSS, JavaScript, jQuery and C#.
            <br />
            <br />I also had to create and maintain Windows services, Web
            Services, consume external APIs and Web Services, work with the
            system database (SQL), both in development and production
            environment.
          </p>
        </section>

        <section id="four">
          <h2>Education</h2>
          <p>
            - Software Development Technician -{' '}
            <strong>
              <a
                href="https://www.unlam.edu.ar/"
                target="_blank"
                rel="noreferrer"
              >
                UNLaM.
              </a>
            </strong>
            <br />- Software Engineering (4° año en curso) -{' '}
            <strong>
              <a
                href="https://www.unlam.edu.ar/"
                target="_blank"
                rel="noreferrer"
              >
                UNLaM.
              </a>
            </strong>
            <br />- Front-End Development Career (en curso) -{' '}
            <strong>
              <a
                href="https://www.coderhouse.com/"
                target="_blank"
                rel="noreferrer"
              >
                CoderHouse.
              </a>
            </strong>
            <br />- First Certificate in English B2 -{' '}
            <strong>Cambridge English</strong>
          </p>
        </section>

        <section id="five">
          <h2>Projects</h2>
          <Gallery images={DEFAULT_IMAGES_EN} />
        </section>

        <section id="six">
          <h2>Contact</h2>
          <div className="row">
            <div className="4u 12u$(small)">
              <ul className="labeled-icons">
                <li>
                  <h3 className="icon fa-home">
                    <span className="label">Address</span>
                  </h3>
                  Buenos Aires, Argentina
                </li>
                <li>
                  <a href="http://wa.link/ik2e70">
                    <h3 className="icon fa-mobile">
                      <span className="label">Phone</span>
                    </h3>
                    +54 11 6649-7148
                  </a>
                </li>
                <li>
                  <h3 className="icon fa-envelope-o">
                    <span className="label">Email</span>
                  </h3>
                  <a href="mailto:agustinannacondia@gmail.com">
                    agustinannacondia@gmail.com
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  )
}

export default App
