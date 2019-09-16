import React, { Component } from "react";
import "./create-list.css";

class CreateList extends Component {
  state = {
    create: false,
    inputValue: "",
  };

  setCreate = () => {
    this.setState({ create: true });
  };
  cancelCreate = () => {
    this.setState({ create: false });
  };
  setInput = e => {
    this.setState({ inputValue: e.target.value });
  };
  createListItem = (e) => {
    if (e.key === "Enter" && this.state.inputValue !== "") {
      this.props.createList(this.props.itemId, this.state.inputValue);
      this.setState({ inputValue: "" });
    } else {
      return null;
    }
  };

  CreateListTitle = () => {
    return <div onClick={()=> this.setCreate()} className="create-list-wrapper">Добавьте список...</div>;
  };

  CreateListCreate = () => {
    return (
      <div className="create-list">
        <div onClick={() => this.cancelCreate()} className="create-cancel"></div>
        <input
          type="text"
          className={"create-input"}
          value={this.state.inputValue}
          onChange={this.setInput}
          onKeyUp={this.createListItem}
          placeholder="Имя списка..."
        />
      </div>
    );
  };
  render() {
    if (!this.state.create) {
      return this.CreateListTitle();
    } else {
      return this.CreateListCreate();
    }
  }
}

export default CreateList;
