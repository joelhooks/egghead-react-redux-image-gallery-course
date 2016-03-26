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
  handleThumbClick(selectedImage) {
    const {selectImage} = this.props;
    selectImage(selectedImage);
  }
  render() {
    const {images, selectedImage} = this.props;
    return (
      <div className="image-gallery">
        <GalleryImage selectedImage={selectedImage} />
        <GalleryThumbs images={images} 
                       handleThumbClick={this.handleThumbClick.bind(this)} />
        <GalleryButtons handleLoadMoreClick={this.handleLoadMoreClick.bind(this)} />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    images: state.images,
    selectedImage: state.selectedImage,
    currentPage: state.currentPage
  }
};

const mapActionCreators = (dispatch) => {
  return bindActionCreators(GalleryActions, dispatch)
};

export default connect(mapStateToProps, mapActionCreators)(Gallery);