import React, { Component } from "react";
import TrelloBoard from "../../components/trello-board";
import { TrelloProvider } from "../../trello-context";
import "./app.css";
import nanoid from "nanoid";

export default class App extends Component {
  state = {
    trelloBoard: JSON.parse(localStorage.getItem("trelloBoard")) || []
  };

  createBoard = value => {
    const id = nanoid();
    const newBoard = {
      id: id,
      name: value
    };
    this.setState({ trelloBoard: [...this.state.trelloBoard, newBoard] });
  };

  componentDidUpdate(prevState) {
    if (prevState.trelloBoard !== this.state.trelloBoard) {
      const json = JSON.stringify(this.state.trelloBoard);
      localStorage.setItem("trelloBoard", json);
    }
  }

  render() {
    return (
      <TrelloProvider value={this.state}>
        <div className="main-wrapper">
          <TrelloBoard createBoard={this.createBoard} />
        </div>
      </TrelloProvider>
    );
  }
}
