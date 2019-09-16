import React,{ Component } from 'react';
import './list-board.css';
import CreateList from '../create-list';
import ItemsList from '../items-list';
import { withRouter } from "react-router";

class ListBoard extends Component {
	render() {
    const {createList, deleteList, itemId, createValue} = this.props;
		return(
			<div className="wrap">
        <ItemsList deleteList={deleteList} createValue={createValue}/>
				<CreateList createList={createList} itemId={itemId}/>
			</div>
		)
	}
};

export default withRouter(ListBoard);