import React, { Component } from 'react';
// import {Table} from 'react-bootstrap';
import NavBarHeader from './Nav';
import Video from './video/video';
// import BandList from './containers/BandList';


// import ListItem from './list/new-list-item';<ListItem />
// import IdeaList from './containers/IdeaList';


	export default class App extends Component {
		render() {
			return (
				<div>
					<NavBarHeader />
					<Video />
					{this.props.children}

				</div>
				);
		}
	}
