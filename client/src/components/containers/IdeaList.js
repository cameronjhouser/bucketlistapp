import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Table } from 'react-bootstrap';

class IdeaList extends Component{
	renderList(){
		return this.props.ideaList.map((ideaList) => {
			return (
				<li key={ideaList.name} className="list-group-item">{ideaList.name}</li>,
				<li key={ideaList.catigory} className="list-group-item">{ideaList.catigory}</li>,
				<li key={ideaList.finishby} className="list-group-item">{ideaList.finishby}</li>
				);
		});
	}

	render(){
		return (
			<ul className="list-group col-sm-4">
				{this.renderList()}
			</ul>
			);
	}
}

// takes app state as arg.
// whatever gets returned will show up as props inside of band list

function mapStateToProps(state){
	return{
		ideaList: state.ideaList 
	};
}

export default connect(mapStateToProps)(IdeaList);