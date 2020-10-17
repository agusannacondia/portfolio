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
            <h2>Sobre mí</h2>
          </header>
          <p>
            Desde chico me apasioné por la resolución de problemas, participando
            en distintas Olimpíadas de Matemática. Gracias a eso, a mi pasión
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
            aún mas mis habilidades, ya que considero que la mejor forma de
            aprender es mediante la experiencia.
          </p>
        </section>

        <section id="two">
          <h2>Conocimientos</h2>
          <p>
            <span role="img" aria-label="white circle emoji">
              &#9898;
            </span>{' '}
            Desarrollo Front-End con{' '}
            <strong>HTML5, CSS3, JavaScript, Angular y ReactJS.</strong>
            <br />
            <span role="img" aria-label="white circle emoji">
              &#9898;
            </span>{' '}
            <strong>ReactJS:</strong> React Core. Custom Hooks. Redux y API
            Context. Styled Components. Consumo de API's REST con fetch y{' '}
            <strong>Axios</strong>. Unit testing con <strong>Jest</strong>.
            <br />
            <span role="img" aria-label="white circle emoji">
              &#9898;
            </span>{' '}
            Manejo de preprocesadores de CSS: <strong>SASS</strong> y{' '}
            <strong>LESS</strong>.
            <br />
            <span role="img" aria-label="white circle emoji">
              &#9898;
            </span>{' '}
            Uso de frameworkss CSS como <strong>Bootstrap</strong>,{' '}
            <strong>Tailwind</strong> y <strong>Bulma</strong>.
            <br />
            <span role="img" aria-label="black circle emoji">
              &#9899;
            </span>{' '}
            Desarrollo Back-End con <strong>NodeJS</strong> y{' '}
            <strong>C#</strong>. Conexiones con base de datos, formas de
            autenticación.
            <br />
            <span role="img" aria-label="black circle emoji">
              &#9899;
            </span>{' '}
            Creación de API's REST para proyectos personales hechos con el MERN
            Stack
            <br />
            <span role="img" aria-label="black circle emoji">
              &#9899;
            </span>{' '}
            Experiencia en bases de datos relacionales{' '}
            <strong>(SQL Server)</strong> y no relacionales{' '}
            <strong>(MongoDB).</strong>
            <br />
            <span role="img" aria-label="blue circle emoji">
              &#128309;
            </span>{' '}
            Manejo de terminal de comandos. Uso de controlador de versiones
            Git/GitHub, asi como también TFS.
            <br />
            <span role="img" aria-label="blue circle emoji">
              &#128309;
            </span>{' '}
            Manejo de Linux, Shell scripts: Bash, Powershell.
            <br />
            <span role="img" aria-label="blue circle emoji">
              &#128309;
            </span>{' '}
            Conocimiento de metodologías de trabajo, tanto ágiles como
            tradicionales.
            <br />
            <span role="img" aria-label="blue circle emoji">
              &#128309;
            </span>{' '}
            Conocimiento de patrones de diseño y arquitectura, buenas prácticas,
            conceptos relacionados a OOP.
            <br />
          </p>
        </section>

        <section id="three">
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
            desde abril de 2019. En los proyectos que participé, creé nuevos
            módulos para la web (hechos en ASP.NET MVC) y me encargué de llevar
            el mantenimiento de otros ya existentes. En los mismos apliqué mis
            conocimientos de HTML, CSS, JavaScript, jQuery y C#.
            <br />
            <br />
            También debí crear y mantener servicios de Windows, Web Services,
            consumir APIs y Web Services externos, interactuar con Web Services
            de AFIP, trabajar con la base de datos del sistema (SQL), tanto en
            entorno de desarrollo como de producción.
          </p>
        </section>

        <section id="four">
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

        <section id="five">
          <h2>Proyectos</h2>
          <Gallery images={DEFAULT_IMAGES} />
        </section>

        <section id="six">
          <h2>Contacto</h2>
          <div className="row">
            {/* <div className="8u 12u$(small)">
              <form
                name="Contacto"
                method="POST"
                action="#"
                data-netlify="true"
                data-netlify-recaptcha="true"
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
                <input type="hidden" name="form-name" value="Contacto" />
                <ul className="actions" style={{ marginTop: 30 }}>
                  <li>
                    <input type="submit" value="Enviar" />
                  </li>
                </ul>
                <div data-netlify-recaptcha="true"></div>
              </form>
            </div> */}
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
