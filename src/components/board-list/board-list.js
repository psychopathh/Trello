import React, { Component } from "react";
import "./board-list.css";
import { storeConsumer } from "../../hoc";

class BoardList extends Component {
  render() {
    const { trelloBoard } = this.props;

    return trelloBoard.map(item => (
      <div className={"board-item"} key={item.id}>
        {item.name}
      </div>
    ));
  }
}

const mapStateToProps = state => {
  return state;
};

export default storeConsumer(BoardList, mapStateToProps);
