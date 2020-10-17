import React from 'react'
import PropTypes from 'prop-types'

const GalleryItem = ({ id, source, name, caption, description, tools }) => {
  return (
    <article key={id} className="Gallery__Item">
      <div>
        <h3><a href={name}>{caption}</a></h3>
        {tools && tools.length > 0 && (
          <div className="Gallery__Item__Tools">
            {tools.map((tool, index) => (
              <p
                key={index}
                className="Gallery__Item__Tool"
                style={{
                  backgroundColor: tool.color.color1,
                  backgroundImage: `linear-gradient(160deg, ${tool.color.color1} 0%, ${tool.color.color2} 100%)`,
                }}
              >
                {tool.name}
              </p>
            ))}
          </div>
        )}
        <p>{description}</p>
      </div>
      <img src={source} alt={caption}/>
    </article>
  )
}

GalleryItem.displayName = 'GalleryItem'
GalleryItem.propTypes = {
  id: PropTypes.string.isRequired,
  source: PropTypes.string.isRequired,
  thumbnail: PropTypes.string.isRequired,
  caption: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  position: PropTypes.string.isRequired,
  toggleLightbox: PropTypes.func.isRequired,
}

export default GalleryItem
