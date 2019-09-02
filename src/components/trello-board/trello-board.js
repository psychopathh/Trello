import React,{ Component } from 'react';
import './trello-board.css';
import CreateItem from '../create-item';
import BoardList from '../board-list';

class TrelloBoard extends Component {

	render() {
    const {createBoard} = this.props;

		return(
			<div className="wrap">
				<CreateItem createBoard={createBoard}/>
        <BoardList />
			</div>
		)
	}
};

export default TrelloBoard;