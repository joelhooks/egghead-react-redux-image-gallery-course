import React from 'react';

export default function GalleryImage({selectedImage}) {
  return (
    <div className="gallery-image">
      <img src={selectedImage} alt="selected image"/>
    </div>  
  )
}