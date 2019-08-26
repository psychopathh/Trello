import React from 'react';
import App from './components/app';
import ReactDOM from 'react-dom';
import {TrelloProvider} from './trello-context';

const state = {
  trelloBoard: {
    '123': 32
  }
}

ReactDOM.render(
	<TrelloProvider value={state}>
		<App />
	</TrelloProvider>
	, document.getElementById('root'));