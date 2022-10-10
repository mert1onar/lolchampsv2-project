import React, { createContext, useState} from "react";


const AppLevelContext = createContext();

export const AppLevelProvider = ({ children }) => {
  const [champs, setChamps] = useState([]);
  const [searchChamps, setSearchChamps] = useState([])
 
  const getData = () => {
    fetch("http://localhost:3000/champs/")
      .then((data) => data.json())
      .then((champs) => setChamps(champs))      
  };

  

  return (
    <AppLevelContext.Provider value={{getData,champs, setSearchChamps, searchChamps}}>{children}</AppLevelContext.Provider>
  );
};
export default AppLevelContext;
