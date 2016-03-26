import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as GalleryActions from './actions';

import GalleryImage from './GalleryImage';
import GalleryThumbs from './GalleryThumbs';
import GalleryButtons from './GalleryButtons';

class Gallery extends Component {
  componentDidMount() {
    const {loadImages} = this.props;
    loadImages();
  }
  handleLoadMoreClick() {
    const {loadNextPage, currentPage} = this.props;
    loadNextPage(currentPage);
  }
  render() {
    const {
      images, 
      selectedImage, 
      selectImage,
      startSlideshow,
      stopSlideshow,
      slideshowRunning
    } = this.props;
    
    return (
      <div className="image-gallery">
        <GalleryImage selectedImage={selectedImage} />
        <GalleryThumbs images={images}
                       selectImage={selectImage} />
        <GalleryButtons handleLoadMoreClick={this.handleLoadMoreClick.bind(this)}
                        startSlideshow={startSlideshow}
                        stopSlideshow={stopSlideshow}
                        slideshowRunning={slideshowRunning}
        />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    images: state.images,
    selectedImage: state.selectedImage,
    currentPage: state.currentPage,
    slideshowRunning: state.slideshowRunning
  }
};

const mapActionCreators = (dispatch) => {
  return bindActionCreators(GalleryActions, dispatch)
};

export default connect(mapStateToProps, mapActionCreators)(Gallery);