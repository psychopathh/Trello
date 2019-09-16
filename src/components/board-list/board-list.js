import React from "react";
import "./board-list.css";
import { storeConsumer } from "../../hoc";
import { withRouter } from "react-router";

const BoardList = ({deleteBoard,trelloBoard,history}) => {
  
  return trelloBoard.map(item => (
    <div className={"board-item"} key={item.id} onClick={()=>{
      history.push(`/item/${item.id}`)
    }}>
      {item.name}
      <div
        className={"delete-item"}
        onClick={(e) => {
          e.stopPropagation()
          deleteBoard(item.id)}}
      ></div>
    </div>
  ));
};

const mapStateToProps = state => {
  return state;
};

export default storeConsumer(withRouter(BoardList), mapStateToProps);
