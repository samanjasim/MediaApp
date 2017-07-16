import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {searchMediaAction, selectImageAction, selectVideoAction} from '../actions/mediaActions.js';
import {flickrImages, shutterStockVideos} from '../Api/api.js';
import PhotoPage from '../components/PhotoPage.jsx';
import VideoPage from '../components/VideoPage.jsx';

// MediaGalleryPage Component 
class MediaGelleryPage extends Component {
    constructor(props) {
        super(props);
        this.handleSearch = this.handleSearch.bind(this);
        this.handleSelectImage = this.handleSelectImage.bind(this);
        this.handleSelectVideo = this.handleSelectVideo.bind(this);
    } // constructor

    componentDidMount() {
        //console.log('compoenentDidMount MediaGalleryPage');
        this.props.searchMediaAction('rain');
    } // componentDidMount


    handleSelectImage(selectedImage) {
        console.log('in handle selected images= ', selectedImage);
        this.props.selectImageAction(selectedImage);
    }

    handleSelectVideo(selectedVideo) {
        this.props.selectVideoAction(selectedVideo);
    }

    handleSearch(event) {
        event.preventDefault();
        if(this.query !== null) {
            this.prop.searchMediaAction(this.query.value);
            this.query.value = '';
        }
    }

    render() {
        // TODO: render videos and Images here
        const {images, selectedImage, videos, selectedVideo} = this.props;
        return(
            <div className="container-fluid">
                {images && selectedImage ? <div>
                    {console.log('in MediaGallery selected image= ', selectedImage)}
                    <input 
                        type="text"
                        ref= {ref => (this.query = ref)} 
                    />
                    <input 
                        type="submit"
                        className="btn btn-primary"
                        value="Search Library"
                        onClick={this.handleSearch}
                    />
                    <div className="row">
                        <PhotoPage
                            images={images} 
                            selectedImage={selectedImage}
                            onHandleSelectImage={this.handleSelectImage}
                        />
                        <VideoPage 
                            videos={videos}
                            selectedVideo={selectedVideo}
                            onHandleSelectVideo={this.handleSelectVideo}
                        />
                    </div>
                </div> : 'loading ....'}
            </div>
        );
    } // render
} //MediaGalleryPage Component

// bind state to the container
function mapStateToProps({images, videos}) {
    console.log('images= ', images);
    console.log('videos= ', videos);
    return {
        images: images[0],
        selectedImage: images.selectedImage,
        videos: videos[0],
        selectedVideo: videos.selectedVideo
    }
} // mapStateToProp

// bind the actioncreator to the container
function matchDispatchToProps(dispatch) {
    return bindActionCreators({searchMediaAction: searchMediaAction, selectImageAction: selectImageAction, selectVideoAction: selectVideoAction}, dispatch);
} // matchDispatchToProps



export default connect(mapStateToProps, matchDispatchToProps)(MediaGelleryPage);