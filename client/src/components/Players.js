import React from "react";
import styled from "styled-components";

const ThemedContainer = styled.div`
   background: ${props => (props.darkmode ? "black" : "white")};
   color: ${props => (props.darkmode ? "white" : "black")};
`;

const Players = props => {
   const playerCards = props.players.map(player => (
      <p>
         {player.name} {player.country} {player.searches}
      </p>
   ));
   return (
      <ThemedContainer darkmode={props.darkmode}>{playerCards}</ThemedContainer>
   );
};

export default Players;
