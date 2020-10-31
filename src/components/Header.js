import React, { useEffect, useState } from 'react'

import Footer from './Footer'
import avatar from '../assets/images/avatar.jpg'

import { Link } from 'gatsby'

const Header = () => {
  const [language, setLanguage] = useState('')

  useEffect(() => {
    const changeLanguage = () => {
      var lang = localStorage.getItem('language')
      if (!lang) {
        setLanguage('es')
      } else {
        setLanguage(lang)
      }
    }
    changeLanguage()
  })

  return (
    <header id="header">
      <div className="inner">
        <Link
          to={language === '' || language === 'es' ? '/' : '/en'}
          className="image avatar"
        >
          <img src={avatar} alt="" />
        </Link>
        <h1>
          <strong>Agustin Annacondia</strong>,
          {language === '' || language === 'es'
            ? ' desarrollador de software y estudiante de Ingeniería en Informática.'
            : ' software developer and Software Engineering student.'}
        </h1>
      </div>
      <Footer />
    </header>
  )
}

export default Header
