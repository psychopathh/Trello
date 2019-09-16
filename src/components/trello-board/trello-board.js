import React,{ Component } from 'react';
import './trello-board.css';
import CreateItem from '../create-item';
import BoardList from '../board-list';
import { withRouter } from "react-router";

class TrelloBoard extends Component {

	render() {
    const {deleteBoard,createBoard} = this.props;

		return(
			<div className="wrap">
				<CreateItem createBoard={createBoard}/>
        <BoardList deleteBoard={deleteBoard} />
			</div>
		)
	}
};

export default withRouter(TrelloBoard);