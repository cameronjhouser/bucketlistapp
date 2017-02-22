import React, { Component } from 'react';
// import {Table} from 'react-bootstrap';
import NavBarHeader from './Nav';
import Video from './video/video';
import BandList from './containers/BandList';
import Signin from './auth/signin';
// import IdeaList from './containers/IdeaList';


	export default class App extends Component {
		render() {
			return (
				<div>
					<NavBarHeader />
					{this.props.children}
					<Video />
					
				</div>
				);
		}
	}
