/*
Agregar traductor de ES a EN
Agregar una pagina por cada proyecto con imagenes que expliquen como se hizo y los logos de las cosas usadas y link
*/
import full_selenita from '../../../assets/images/fulls/selenita.jpg'
import full_portfolio from '../../../assets/images/fulls/portfolio.jpg'
import full_cuantosale from '../../../assets/images/fulls/cuantosale.jpg'
import full_crushinquiz from '../../../assets/images/fulls/crushinquiz.jpg'
import full_myflights from '../../../assets/images/fulls/myflights.jpg'
import full_mylocations from '../../../assets/images/fulls/mylocations.jpg'
import full_myplaylist from '../../../assets/images/fulls/myplaylist.jpg'
import full_followme from '../../../assets/images/fulls/followme.jpg'
import full_mytasks from '../../../assets/images/fulls/mytasks.jpg'
import full_glosh from '../../../assets/images/fulls/glosh.jpg'
import full_cotizador from '../../../assets/images/fulls/cotizador.jpg'
import full_presupuestos from '../../../assets/images/fulls/presupuestos.jpg'
import full_citas from '../../../assets/images/fulls/citas.jpg'

const colors = {
  angular: {
    color1: '#e23237',
    color2: '#F9B3B4'
  },
  bootstrap: {
    color1: '#563d7c',
    color2: '#563d7c'
  },
  css3: {
    color1: '#264de5',
    color2: '#6E82CF'
  },
  express: {
    color1: '#363636',
    color2: '#817E7E'
  },
  gatsby: {
    color1: '#74309d',
    color2: '#74309d'
  },
  html5: {
    color1: '#ff4e1d',
    color2: '#ff4e1d'
  },
  javascript: {
    color1: '#eaca32',
    color2: '#eaca32'
  },
  mongodb: {
    color1: '#4f9545',
    color2: '#74BB6B'
  },
  nodejs: {
    color1: '#00ac3b',
    color2: '#44C971'
  },
  react: {
    color1: '#61dbfc',
    color2: '#61dbfc'
  },
  reactbootstrap: {
    color1: '#41e0fd',
    color2: '#4FA7B7'
  },
  sass: {
    color1: '#e23237',
    color2: '#9C484C'
  },
}

export const DEFAULT_IMAGES = [
  {
    id: '1',
    source: full_selenita,
    name: 'selenita',
    caption: 'Selenita',
    description: 'Sitio web del emprendimiento Nails by Selenita.',
    tools: [
      {
        name: 'HTML5',
        color: colors.html5
      },
      {
        name: 'CSS3',
        color: colors.css3
      },
      {
        name: 'JAVASCRIPT',
        color: colors.javascript
      },
      {
        name: 'SASS',
        color: colors.sass
      },
      {
        name: 'BOOTSTRAP',
        color: colors.bootstrap
      },
    ]
  },
  {
    id: '2',
    source: full_myflights,
    name: 'myflights',
    caption: 'My Flights',
    description: 'Sitio para consultar vuelos, hospedajes y paquetes turísticos.',
    tools: [
      {
        name: 'HTML5',
        color: colors.html5
      },
      {
        name: 'CSS3',
        color: colors.css3
      },
      {
        name: 'JAVASCRIPT',
        color: colors.javascript
      },
      {
        name: 'SASS',
        color: colors.sass
      },
      {
        name: 'REACT',
        color: colors.react
      },
      {
        name: 'REACT-BOOTSTRAP',
        color: colors.reactbootstrap
      },
    ]
  },
  {
    id: '3',
    source: full_mylocations,
    name: 'mylocations',
    caption: 'My Locations',
    description: 'Aplicación para guardar ubicaciones en un mapa.',
    tools: [
      {
        name: 'HTML5',
        color: colors.html5
      },
      {
        name: 'CSS3',
        color: colors.css3
      },
      {
        name: 'JAVASCRIPT',
        color: colors.javascript
      },
      {
        name: 'REACT',
        color: colors.react
      },
      {
        name: 'REACT-BOOTSTRAP',
        color: colors.reactbootstrap
      },
    ]
  },
  {
    id: '4',
    source: full_myplaylist,
    name: 'myplaylist',
    caption: 'My Playlist',
    description: 'Aplicación para crear tu propia playlist de YouTube de una forma mas divertida.',
    tools: [
      {
        name: 'HTML5',
        color: colors.html5
      },
      {
        name: 'CSS3',
        color: colors.css3
      },
      {
        name: 'JAVASCRIPT',
        color: colors.javascript
      },
      {
        name: 'REACT',
        color: colors.react
      },
      {
        name: 'REACT-BOOTSTRAP',
        color: colors.reactbootstrap
      },
    ]
  },
  {
    id: '5',
    source: full_followme,
    name: 'followme',
    caption: 'FollowMe',
    description: 'Red social para compartir fotografías con otros usuarios.',
    tools: [
      {
        name: 'HTML5',
        color: colors.html5
      },
      {
        name: 'CSS3',
        color: colors.css3
      },
      {
        name: 'JAVASCRIPT',
        color: colors.javascript
      },
      {
        name: 'MONGODB',
        color: colors.mongodb
      },
      {
        name: 'EXPRESS',
        color: colors.express
      },
      {
        name: 'REACT',
        color: colors.react
      },
      {
        name: 'NODEJS',
        color: colors.nodejs
      },
    ]
  },
  {
    id: '6',
    source: full_portfolio,
    name: 'portfolio',
    caption: 'Portfolio',
    description: 'Mi portfolio personal.',
    tools: [
      {
        name: 'HTML5',
        color: colors.html5
      },
      {
        name: 'CSS3',
        color: colors.css3
      },
      {
        name: 'JAVASCRIPT',
        color: colors.javascript
      },
      {
        name: 'SASS',
        color: colors.sass
      },
      {
        name: 'REACT',
        color: colors.react
      },
      {
        name: 'GATSBY',
        color: colors.gatsby
      },
    ]
  },
  {
    id: '7',
    source: full_mytasks,
    name: 'mytasks',
    caption: 'My Tasks',
    description: 'Sitio para organizar tareas y proyectos.',
    tools: [
      {
        name: 'HTML5',
        color: colors.html5
      },
      {
        name: 'CSS3',
        color: colors.css3
      },
      {
        name: 'JAVASCRIPT',
        color: colors.javascript
      },
      {
        name: 'MONGODB',
        color: colors.mongodb
      },
      {
        name: 'EXPRESS',
        color: colors.express
      },
      {
        name: 'REACT',
        color: colors.react
      },
      {
        name: 'NODEJS',
        color: colors.nodejs
      },
    ]
  },
  {
    id: '8',
    source: full_glosh,
    name: 'glosh',
    caption: 'Glosh',
    description: 'Sitio para escuchar musica, con albums y playlists.',
    tools: [
      {
        name: 'HTML5',
        color: colors.html5
      },
      {
        name: 'CSS3',
        color: colors.css3
      },
      {
        name: 'JAVASCRIPT',
        color: colors.javascript
      },
      {
        name: 'MONGODB',
        color: colors.mongodb
      },
      {
        name: 'EXPRESS',
        color: colors.express
      },
      {
        name: 'ANGULAR',
        color: colors.angular
      },
      {
        name: 'NODEJS',
        color: colors.nodejs
      },
    ]
  },
  {
    id: '9',
    source: full_cuantosale,
    name: 'cuantosale',
    caption: 'Cuanto sale',
    description: 'Sitio que permite registrar y administrar citas.',
    tools: [
      {
        name: 'HTML5',
        color: colors.html5
      },
      {
        name: 'CSS3',
        color: colors.css3
      },
      {
        name: 'JAVASCRIPT',
        color: colors.javascript
      },
      {
        name: 'BOOTSTRAP',
        color: colors.bootstrap
      },
    ]
  },
  {
    id: '10',
    source: full_crushinquiz,
    name: 'crushinquiz',
    caption: 'Crushin Quiz',
    description: 'Juego de preguntas y respuestas de fútbol.',
    tools: [
      {
        name: 'HTML5',
        color: colors.html5
      },
      {
        name: 'CSS3',
        color: colors.css3
      },
      {
        name: 'JAVASCRIPT',
        color: colors.javascript
      },
      {
        name: 'BOOTSTRAP',
        color: colors.bootstrap
      },
      {
        name: 'MONGODB',
        color: colors.mongodb
      },
      {
        name: 'EXPRESS',
        color: colors.express
      },
      {
        name: 'ANGULAR',
        color: colors.angular
      },
      {
        name: 'NODEJS',
        color: colors.nodejs
      },
    ]
  },
  {
    id: '11',
    source: full_cotizador,
    name: 'cotizador',
    caption: 'Cotizador',
    description: 'Sitio que emula la cotizacion del seguro de tu auto.',
    tools: [
      {
        name: 'HTML5',
        color: colors.html5
      },
      {
        name: 'CSS3',
        color: colors.css3
      },
      {
        name: 'JAVASCRIPT',
        color: colors.javascript
      },
      {
        name: 'REACT',
        color: colors.react
      },
    ]
  },
  {
    id: '12',
    source: full_presupuestos,
    name: 'presupuestos',
    caption: 'Presupuestos',
    description: 'Sitio que permite crear presupuestos y organizar gastos.',
    tools: [
      {
        name: 'HTML5',
        color: colors.html5
      },
      {
        name: 'CSS3',
        color: colors.css3
      },
      {
        name: 'JAVASCRIPT',
        color: colors.javascript
      },
      {
        name: 'REACT',
        color: colors.react
      },
    ]
  },
  {
    id: '13',
    source: full_citas,
    name: 'citas',
    caption: 'Citas',
    description: 'Sitio que permite registrar y administrar citas.',
    tools: [
      {
        name: 'HTML5',
        color: colors.html5
      },
      {
        name: 'CSS3',
        color: colors.css3
      },
      {
        name: 'JAVASCRIPT',
        color: colors.javascript
      },
      {
        name: 'REACT',
        color: colors.react
      },
    ]
  }
]