import React, {Component} from 'react';
import { connect } from 'react-redux';


class Gallery extends Component {
  componentDidMount() {
    console.log(this.props);
    const {images, dispatch} = this.props;

    dispatch({
      type: 'SELECT_IMAGE',
      selectedImage: images[0]
    })
  }
  handleThumbClick(selectedImage) {
    const {dispatch} = this.props;

    dispatch({
      type: 'SELECT_IMAGE',
      selectedImage
    })
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

export default connect(mapStateToProps)(Gallery);