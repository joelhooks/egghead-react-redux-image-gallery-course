import React from 'react';

export default function GalleryThumbs({images, handleThumbClick}) {
  return (
    <div className="image-scroller">
      {images.map((image, index) =>
        <img key={index}
             src={image}
             onClick={() => handleThumbClick(image)}/>
      )}
    </div>
  )
}