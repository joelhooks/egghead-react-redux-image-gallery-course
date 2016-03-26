import React from 'react';

export default function GalleryButtons({
  handleLoadMoreClick
}) {
  return (
    <div className="gallery-actions">
      <button onClick={handleLoadMoreClick}>
        Load More Images
      </button>
    </div>
  )
}