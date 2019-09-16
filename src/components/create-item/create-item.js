import React, { Component } from "react";
import "./create-item.css";

class CreateItem extends Component {
  state = {
    create: false,
    inputValue: "",
    showError: true
  };

  setCreate = () => {
    this.setState({ create: true });
  };

  cancelCreate = () => {
    this.setState({ create: false, showError: true, inputValue: "" });
  };

  setInput = e => {
    this.setState({ inputValue: e.target.value });
  };

  titleWrap = () => {
    return (
      <div
        className="wrapper"
        onClick={() => {
          this.setCreate();
        }}
      >
        Создайте новую доску
      </div>
    );
  };

  createBoardItem = () => {
    if (this.state.inputValue === "") {
      this.setState({
        showError: false
      });
    } else {
      this.props.createBoard(this.state.inputValue);
      this.setState({ inputValue: "" });
      this.cancelCreate();
      this.setState({
        showError: true
      });
    }
  };

  createWrap = () => {
    return (
      <div className="create-wrap">
        <div className="create-top">
          <div>Создание доски</div>
          <div className="create-cancel" onClick={this.cancelCreate}></div>
        </div>
        <div className="create-bottom">
          <div className="create-name">Назовите Вашу доску.</div>
          <input
            type="text"
            className={"create-input"}
            value={this.state.inputValue}
            onChange={this.setInput}
            onKeyPress={event => {
              if (event.key === "Enter") {
                this.createBoardItem();
              }
            }}
          />
          <div className={"create-error"}>
            {!this.state.showError ? "Введите название доски." : null}
          </div>
          <div className="create-buttons">
            <button
              className="create-button-cancel"
              onClick={this.cancelCreate}
            >
              Отмена
            </button>
            <button
              className="create-button-save"
              onClick={this.createBoardItem}
            >
              Создать
            </button>
          </div>
        </div>
      </div>
    );
  };

  render() {
    if (this.state.create === false) {
      return this.titleWrap();
    } else {
      return this.createWrap();
    }
  }
}

export default CreateItem;
