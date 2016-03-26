import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as GalleryActions from './actions';

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
        <div className="gallery-image">
          <img src={selectedImage} alt="selected image"/>
        </div>
        <div className="image-scroller">
          {images.map((image, index) =>
            <img key={index} src={image} onClick={() => this.handleThumbClick(image)}/>
          )}
        </div>
        <div className="gallery-actions">
          <button onClick={this.handleLoadMoreClick.bind(this)}>Load More Images</button>
        </div>
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