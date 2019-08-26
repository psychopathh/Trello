import React from 'react';
import TrelloBoard from '../../components/trello-board';
import './app.css';

const App = () => {
	return(
		<div className="main-wrapper">
			<TrelloBoard />
		</div>
	)
};

export default App;