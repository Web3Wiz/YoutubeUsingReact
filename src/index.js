import _ from 'lodash';
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

const API_KEY = 'AIzaSyBV9p21yBQRW1rArPr1U-lnj_7aNnFo0X8';

class App extends Component {

    constructor(props){
        super(props);
        this.state = {videos:[], selectedVideo:null};

        this.SearchVideos('blockchain');
    }
    
    SearchVideos(searched_term){

        YTSearch({key: API_KEY, term: searched_term}, (videos) => {
            console.log(videos);
            this.setState({videos:videos, selectedVideo:videos[0]});
        });

    }
    render(){

        const searchVideos = _.debounce( (search_term) => {this.SearchVideos (search_term)} , 300);

        return(    
                <div>
                    <SearchBar onSearchVideos={searchVideos} />
                    <VideoDetail video={this.state.selectedVideo} />
                    <VideoList onVideoSelect={selectedVideo => this.setState({selectedVideo})} videos={this.state.videos} />
                </div>
        );
    }

}

ReactDOM.render(<App />, document.querySelector('.container'));