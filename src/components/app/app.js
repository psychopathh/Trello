import React, { Component } from "react";
import TrelloBoard from "../../components/trello-board";
import { TrelloProvider } from "../../trello-context";
import ListBoard from "../list-board";
import "./app.css";
import nanoid from "nanoid";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

export default class App extends Component {
  state = {
    trelloBoard: JSON.parse(localStorage.getItem("trelloBoard")) || []
  };

  componentDidUpdate(prevState) {
    if (prevState.trelloBoard !== this.state.trelloBoard) {
      const json = JSON.stringify(this.state.trelloBoard);
      localStorage.setItem("trelloBoard", json);
    }
  }

  createBoard = value => {
    const id = nanoid();
    const newBoard = {
      id: id,
      name: value,
      list: []
    };
    this.setState({ trelloBoard: [...this.state.trelloBoard, newBoard] });
  };

  createList = (id, value) => {
    const newId = nanoid();
    const newListItem = {
      id: newId,
      name: value,
      listValue: []
    };
    this.setState(state => {
      const boardItem = state.trelloBoard.find(({ id: Id }) => Id === id);
      const newList = [...boardItem.list, newListItem];
      const newBoardItem = {
        ...boardItem,
        list: newList
      };
      const newTrelloBoard = state.trelloBoard.filter(
        ({ id: Id }) => Id !== id
      );
      const trelloBoard = [...newTrelloBoard, newBoardItem];
      return { trelloBoard };
    });
  };

  createValue = (id, value, idBoard) => {
    const newId = nanoid();

    const newListValue = {
      id: newId,
      value,
      done: false
    };

    const currentBoard = this.state.trelloBoard.find(
      ({ id }) => id === idBoard
    );
    const _itemList = currentBoard.list.find(({ id: Id }) => Id === id);

    this.setState(state => {
      const newListItemValue = [..._itemList.listValue, newListValue];
      const newItemList = {..._itemList, listValue: newListItemValue};
      const newList = currentBoard.list.map(listItem =>
        listItem.id === id ? newItemList : listItem
      );
      const trelloBoard = state.trelloBoard.map(boardItem =>
        boardItem.id === idBoard ? { ...boardItem, list: newList } : boardItem
      );

      return { trelloBoard };
    });
  };

  deleteBoard = id => {
    this.setState(({ trelloBoard }) => ({
      trelloBoard: trelloBoard.filter(({ id: Id }) => Id !== id)
    }));
  };

  deleteList = (boardId, itemId) => {
    this.setState(state => {
      const boardItem = state.trelloBoard.find(({ id: Id }) => Id === boardId);
      const itemList = boardItem.list.find(item => item.id === itemId);
      const newListItem = boardItem.list.filter(
        item => item.id !== itemList.id
      );
      const newBoard = {
        ...boardItem,
        list: newListItem
      };
      const newTrelloBoard = state.trelloBoard.filter(
        ({ id: Id }) => Id !== boardId
      );
      const trelloBoard = [...newTrelloBoard, newBoard];
      return { trelloBoard };
    });
  };

  render() {
    return (
      <Router>
        <TrelloProvider value={this.state}>
          <div className="main-wrapper">
            <Switch>
              <Route path="/" exact>
                <TrelloBoard
                  deleteBoard={this.deleteBoard}
                  createBoard={this.createBoard}
                />
              </Route>
              <Route
                path="/item/:id"
                render={({ match }) => {
                  const { id } = match.params;
                  return (
                    <ListBoard
                      createList={this.createList}
                      deleteList={this.deleteList}
                      createValue={this.createValue}
                      itemId={id}
                      exact
                    />
                  );
                }}
              />
            </Switch>
          </div>
        </TrelloProvider>
      </Router>
    );
  }
}
