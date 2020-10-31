import React from 'react'
import Layout from '../components/layout'

const MyPlaylist = () => (
  <Layout>
    <div id="main" className="Project">
      <h2 className="Project__Title noselect">My Playlist</h2>
      <span className="Project__Button noselect">
        <a href="https://myplaylist.annacondia.ar" target="__blank">
          Live Demo
        </a>
      </span>
      <span className="Project__Button noselect">
        <a
          href="https://github.com/agusannacondia/youtubelist"
          target="__blank"
        >
          View on GitHub
        </a>
      </span>
      <div className="Project__Body">
        <p className="Project__Description">Sitio en construcción.</p>
      </div>
    </div>
  </Layout>
)

export default MyPlaylist
