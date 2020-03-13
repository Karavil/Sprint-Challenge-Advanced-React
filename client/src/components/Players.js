import React from "react";
import styled from "styled-components";

const ThemedContainer = styled.ol`
   background: ${props => (props.darkmode ? "black" : "white")};
   color: ${props => (props.darkmode ? "white" : "black")};
`;

const Players = props => {
   const playerCards = props.players.map((player, index) => (
      <li data-testid={"player-card"} key={index}>
         {player.name} {player.country} {player.searches}
      </li>
   ));

   return (
      <ThemedContainer darkmode={props.darkmode}>
         <button onClick={() => props.toggleDarkMode()}>
            Toggle Dark Mode
         </button>
         {playerCards}
      </ThemedContainer>
   );
};

export default Players;
