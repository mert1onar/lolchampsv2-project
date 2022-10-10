import AppLevelContext from "../context/AppLevelContext";
import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import "../styles/cardlist.css"



const CardList = () => {
  const { champs, getData, searchChamps, setSearchChamps} = useContext(AppLevelContext);

  useEffect(() => {
    getData();
    // eslint-disable-next-line    
    
  }, []); 

  
  
  


  return (
    <div className="container row">     
      {searchChamps.map((champs) => {
        return (
          <div className="card col-6 g-2">
            <div className="row g-0">
              <div className="col-md-4">
                <img alt="Sample" src={champs.icon} className="img-style" />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h2 key={champs.key}>{champs.name}</h2>
                  <p className="card-text">{champs.title}</p>
                  <Link
                    className="btn btn-success"
                    to={`/champions/${champs.id}`}
                  >
                    Go Details
                  </Link>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default CardList;
