import React, { Component } from "react";
import "./items-list.css";
import { storeConsumer } from "../../hoc";
import { withRouter } from "react-router";

class ItemsList extends Component {
  state = {
    inputValue: '',
  };

  setInput = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  createListItem = (e) => {
    if (e.key === "Enter" && e.target.value !== "") {
      const itemValue = this.state[e.target.name];
      this.props.createValue(e.target.name, itemValue);
      e.target.value = '';
    } else {
      return null;
    }
  };

  render() {
    const { trelloBoard, match, deleteList } = this.props;
    const item = trelloBoard.filter(item => item.id === match.params.id);
    return item[0].list.map(item => (
      <div key={item.id} id={item.id} className="item-wrap">
        <div
          className={"delete-item"}
          onClick={e => {
            e.stopPropagation();
            deleteList(match.params.id, item.id);
          }}
        ></div>
        <div className="item-value">{item.name}</div>
        <div className="item-input">
          <input
            name={item.id}
            className="items-input"
            onChange={this.setInput}
            onKeyUp={this.createListItem}
          />
        </div>
        {
          item.listValue.map(itemValue=>(
            <div key={itemValue.id} className="items-value">{itemValue.value}</div>
          ))
        }
      </div>
    ));
  }
}

const mapStateToProps = state => {
  return state;
};

export default storeConsumer(withRouter(ItemsList), mapStateToProps);
