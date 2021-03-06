import React from 'react';

export default function GalleryThumbs({images, selectImage}) {
  return (
    <div className="image-scroller">
      {images.map((image, index) =>
        <img key={index}
             src={image}
             onClick={() => selectImage(image)}/>
      )}
    </div>
  )
}