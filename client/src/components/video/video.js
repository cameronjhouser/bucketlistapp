import _ from 'lodash';
import React, { Component } from 'react';
import ReactDom from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './search-bar';
import VideoDetail from './video-detail';

const API_KEY = 'AIzaSyBNv8J5dusn7t4i64ujgFVrWTno21Zj_pk';

class Video extends Component {
	constructor(props) {
		super(props);
		this.state = {
			video: [],
			selectVideo: null
		},
		this.videoSearch('bucketlist');
	}
	videoSearch(term) {
		YTSearch({key: API_KEY, term: term}, (videos) => {
			this.setState({
				videos: videos,
				selectVideo: videos[0]
			});
		});
	}
	render() {
		const videoSearch = _.debounce((term) =>{ this.videoSearch(term) }, 300);
		return (
			<div>
				<SearchBar onSearchTermChange={videoSearch} />
			</div>
			);
	}
}
export default Video;