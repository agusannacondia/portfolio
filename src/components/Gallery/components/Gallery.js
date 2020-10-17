import React, { useState } from 'react'
import PropTypes from 'prop-types'
import GalleryItem from './GalleryItem'

const Gallery = ({ images }) => {
  return (
    <div className="Gallery">
      {images && (<div className="row">
        {images.map((obj, i) => {
        return (<GalleryItem
          id={obj.id}
          name={obj.name}
          source={obj.source}
          caption={obj.caption}
          description={obj.description}
          tools={obj.tools}
        />); 
        })}
        </div>
      )}
    </div>
  )
}

Gallery.displayName = 'Gallery'
Gallery.propTypes = {
  images: PropTypes.array,
}

export default Gallery
