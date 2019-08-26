import React,{ Component } from 'react';
import './trello-board.css';
import { storeConsumer } from '../../hoc';

class TrelloBoard extends Component {

	render(){
		return(
			<div>
				1
			</div>
		)
	}
};

const mapStateToProps = (state) =>{
  return {
    trelloBoard: state.trelloBoard
  }
}

export default storeConsumer(TrelloBoard, mapStateToProps);