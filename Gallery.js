import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as GalleryActions from './actions';

const API_KEY = 'a46a979f39c49975dbdd23b378e6d3d5';
const API_ENDPOINT = `https://api.flickr.com/services/rest/?method=flickr.interestingness.getList&api_key=${API_KEY}&format=json&nojsoncallback=1&per_page=5`;

const fetchImages = () => {
  return fetch(API_ENDPOINT).then((response) => {
    return response.json().then((json) => {
      return json.photos.photo.map(
        ({farm, server, id, secret}) => `https://farm${farm}.staticflickr.com/${server}/${id}_${secret}.jpg`
      )
    })
  })
};

class Gallery extends Component {
  componentDidMount() {
    const {selectImage, imagesLoaded} = this.props;

    fetchImages().then((images) => {
      imagesLoaded(images);
      selectImage(images[0]);
    })
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