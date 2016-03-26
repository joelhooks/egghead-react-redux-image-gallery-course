import React, {Component} from 'react';


export default class Gallery extends Component {
  componentDidMount() {
    const {subscribe, dispatch, getState} = this.props.store;

    subscribe(() => {
      this.setState({
        selectedImage: getState().selectedImage
      })
    });

    dispatch({
      type: 'SELECT_IMAGE',
      selectedImage: getState().images[0]
    })
  }
  handleThumbClick(selectedImage) {
    const {dispatch} = this.props.store;

    dispatch({
      type: 'SELECT_IMAGE',
      selectedImage
    })
  }
  render() {
    const {images, selectedImage} = this.props.store.getState();
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