import React from 'react';

export default function GalleryButtons({
  handleLoadMoreClick,
  startSlideshow,
  stopSlideshow,
  slideshowRunning
}) {
  return (
    <div className="gallery-actions">
      <button onClick={handleLoadMoreClick}>
        Load More Images
      </button>
      <button onClick={startSlideshow} hidden={slideshowRunning}>Start</button>
      <button onClick={stopSlideshow} hidden={!slideshowRunning}>Stop</button>
    </div>
  )
}