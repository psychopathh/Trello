import React from "react";
import { TrelloConsumer } from "../trello-context";

const storeConsumer = (Wrapper, mapMethodsToProps) => {
  return (props) => {
    return (
      <TrelloConsumer>
        {(state) => {
          const stateProps = mapMethodsToProps(state);
          return <Wrapper {...props} {...stateProps} />;
        }}
      </TrelloConsumer>
    );
  };
};

export default storeConsumer;
