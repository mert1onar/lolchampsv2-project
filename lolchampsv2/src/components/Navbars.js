import AppLevelContext from "../context/AppLevelContext";
import React from 'react';
import "../styles/navbars.css"

import { useContext, useEffect } from "react";


const Navbars = () => {
  const { champs, getData, setSearchChamps, searchChamps } = useContext(AppLevelContext);  
  

  useEffect(() => {
    getData();
    // eslint-disable-next-line    
  }, []);

  

  

  const handleSearchChange = (e) => {
    if (!e.target.value) return setSearchChamps(champs)    
    

    setSearchChamps(champs.filter(filteredChamp =>  filteredChamp.name.toLowerCase().includes(e.target.value.toLowerCase()))) 
  }

  
  

  if (searchChamps.length===0) {
    setSearchChamps(champs);
  }

  return (
    <div className="container row nav-style">
      <div className="col-8"><h2>League Of Legends Champions</h2></div>
      <div className="col-3"><input      
      className="search_input"
      type="text"
      id="search"
      onChange={handleSearchChange}
      placeholder="Ara"/></div>
      
    </div>
  );
};
export default Navbars;
