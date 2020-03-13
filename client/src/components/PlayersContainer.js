import React, { useState, useEffect } from "react";
import axios from "axios";

import useLocalState from "../hooks/useLocalState";

import Players from "./Players";

const PlayersContainer = () => {
   const [players, setPlayers] = useState([]);
   const [darkmode, setDarkMode] = useLocalState("darkmode", false);

   const toggleDarkMode = () => {
      setDarkMode(!darkmode);
   };

   useEffect(() => {
      axios
         .get("http://localhost:5000/api/players")
         .then(res => {
            console.log(res.data);
            setPlayers(res.data);
         })
         .catch(err => console.log(err));
   }, []);

   return (
      <Players
         darkmode={darkmode}
         toggleDarkMode={toggleDarkMode}
         players={players}
      />
   );
};

export default PlayersContainer;
