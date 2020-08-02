import React from 'react'
import Helmet from 'react-helmet'

import Gallery from '../components/Gallery'
import Layout from '../components/layout'

import { DEFAULT_IMAGES } from '../components/Gallery/constants/defaultImages'

const HomeIndex = () => {
  const siteTitle = 'Agustin Annacondia'
  const siteDescription = 'Descripcion'

  return (
    <Layout>
      <Helmet>
        <title>{siteTitle}</title>
        <meta name="description" content={siteDescription} />
      </Helmet>

      <div id="main">
        <section id="one">
          <header className="major">
            <h2>Sobre mi</h2>
          </header>
          <p>
            Desde chico me apasioné por la resolución de problemas, participando
            en distintas Olimpiadas de Matematica. Gracias a eso, a mi pasión
            por la computación y a mi curiosidad por descubrir como funcionan
            las cosas es que decidí estudiar Ingeniería en Informática.
            <br />
            <br />
            Hoy con 23 años me encuentro capacitandome en el área de desarrollo
            web, principalmente front-end, la cual me llama mucho la atención.
            Mientras tanto, finalizo mis estudios y trabajo como desarrollador
            en una empresa de seguros.
            <br />
            <br />
            Me gustaría trabajar en diversos proyectos que me ayuden a mejorar
            aún mas mis habilidades, ya que considero que la
            mejor forma de aprender es mediante la experiencia.
          </p>
        </section>

        <section id="two">
          <h2>Conocimientos</h2>
          <p>
          <span role="img" aria-label="white circle emoji">&#9898;</span> Desarrollo Front-End con{' '}
            <strong>HTML, CSS, JavaScript, Angular y ReactJS.</strong>
            <br />
            <span role="img" aria-label="white circle emoji">&#9898;</span> <strong>ReactJS:</strong> React Core. Hooks. Redux y API Context. Styled
            Components. Consumo de API's REST con fetch y Axios. Unit testing
            con Jest.
            <br />
            <span role="img" aria-label="black circle emoji">&#9899;</span> Desarrollo Back-End con <strong>NodeJS y C#.</strong>
            <br />
            <span role="img" aria-label="black circle emoji">&#9899;</span> Experiencia en bases de datos relacionales{' '}
            <strong>(SQL Server)</strong> y no relacionales{' '}
            <strong>(MongoDB).</strong>
            <br />
            <span role="img" aria-label="blue circle emoji">&#128309;</span> Manejo de terminal de comandos. Uso de controlador de versiones Git/GitHub. 
          </p>
        </section>

        <section id="three">
          <h2>Proyectos</h2>
          <Gallery images={DEFAULT_IMAGES} />
        </section>

        <section id="four">
          <h2>Experiencia</h2>
          <p>
            Trabajo como desarrollador de software en{' '}
            <strong>
              <a
                href="https://www.boston.com.ar/"
                target="_blank"
                rel="noreferrer"
              >
                Boston Seguros
              </a>
            </strong>{' '}
            desde abril de 2019. En los proyectos que me tocó participar, tuve que crear nuevos modulos para la web (hechos en ASP.NET MVC) asi como tambien mantener algunos ya existentes. En los mismos tuve que aplicar mis conocimientos de HTML, CSS, JavaScript y C#.
            <br/>
            <br/>
            Tambien tuve que crear y mantener servicios de Windows, Web Services, consumir APIs y Web Services externos, interactuar con Web Services de AFIP y trabajar con la base de datos del sistema, tanto en entorno de desarrollo como de producción.
          </p>
        </section>

        <section id="five">
          <h2>Estudios</h2>
          <p>
            - Técnico Universitario en Desarrollo de Software -{' '}
            <strong>
              <a
                href="https://www.unlam.edu.ar/"
                target="_blank"
                rel="noreferrer"
              >
                UNLaM.
              </a>
            </strong>
            <br />- Ingeniería en Informática (4° año en curso) -{' '}
            <strong>
              <a
                href="https://www.unlam.edu.ar/"
                target="_blank"
                rel="noreferrer"
              >
                UNLaM.
              </a>
            </strong>
            <br />- Carrera de Desarrollo Front-End (en curso) -{' '}
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
          <Gallery />
        </section>

        <section id="six">
          <h2>Contacto</h2>
          <div className="row">
            <div className="8u 12u$(small)">
              <form
                name="contact"
                method="post"
                action="#"
                data-netlify="true"
                data-netlify-honeypot="botfield"
              >
                <div className="row uniform 50%">
                  <div className="6u 12u$(xsmall)">
                    <input
                      type="text"
                      name="name"
                      id="name"
                      placeholder="Nombre"
                    />
                  </div>
                  <div className="6u 12u$(xsmall)">
                    <input
                      type="email"
                      name="email"
                      id="email"
                      placeholder="Email"
                    />
                  </div>
                  <div className="12u">
                    <textarea
                      name="message"
                      id="message"
                      placeholder="Mensaje"
                      rows="4"
                    ></textarea>
                  </div>
                </div>
                <input type="hidden" name="form'name" value="contact" />
                <ul className="actions" style={{ marginTop: 30 }}>
                  <li>
                    <input type="submit" value="Enviar" />
                  </li>
                </ul>
              </form>
            </div>
            <div className="4u 12u$(small)">
              <ul className="labeled-icons">
                <li>
                  <h3 className="icon fa-home">
                    <span className="label">Direccion</span>
                  </h3>
                  Buenos Aires, Argentina
                </li>
                <li>
                  <a href="http://wa.link/ik2e70">
                    <h3 className="icon fa-mobile">
                      <span className="label">Telefono</span>
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

export default HomeIndex
