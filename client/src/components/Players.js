import React from "react";

const Players = props => {
   const playerCards = props.players.map(player => (
      <p>
         {player.name} {player.country} {player.searches}
      </p>
   ));
   return <div>{playerCards}</div>;
};

export default Players;
