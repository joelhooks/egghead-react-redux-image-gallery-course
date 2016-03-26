import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as GalleryActions from './actions';

class Gallery extends Component {
  componentDidMount() {
    const {selectImage, imagesLoaded} = this.props;
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
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    images: state.images,
    selectedImage: state.selectedImage
  }
};

const mapActionCreators = (dispatch) => {
  return bindActionCreators(GalleryActions, dispatch)
};

export default connect(mapStateToProps, mapActionCreators)(Gallery);