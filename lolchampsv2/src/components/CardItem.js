import AppLevelContext from "../context/AppLevelContext";
import React, { useContext, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import "../styles/carditem.css";

const CardItem = () => {
  const { id } = useParams();
  const { champs, getData } = useContext(AppLevelContext);

  useEffect(() => {
    getData();
    // eslint-disable-next-line
  }, []);

  console.log(champs);
  console.log(id);

  return (
    <div className="container">
      <div>
        {// eslint-disable-next-line
         champs.map((champs) => {
          if (champs.id === id) {
            return (
              <div className="card col-12 g-2">
                <div className="row g-0">
                  <div className="col-md-4">
                    <img alt="Sample" src={champs.icon} className="img-style" />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <div className="row">
                        <h2 key={champs.key} className="col">{champs.name}</h2>
                        <Link className="btn btn-success col-2" to="/">
                          Go Home
                        </Link>
                      </div>

                      <p className="card-text">{champs.title}</p>
                      <p className="card-description">{champs.description}</p>
                    </div>
                    <div className="row stats">
                      <h4>Character Stats</h4>
                      <div className="col ">
                        <p>HP: {champs.stats.hp}</p>
                        <p>HP Per.Level: {champs.stats.hpperlevel}</p>
                        <p>MP: {champs.stats.mp}</p>
                        <p>MP Per.Level: {champs.stats.mpperlevel}</p>
                        <p>Move Speed: {champs.stats.movespeed}</p>
                        <p>Armor: {champs.stats.armor}</p>
                        <p>Armor Per.Level: {champs.stats.armorperlevel}</p>
                        <p>Spellblock: {champs.stats.spellblock}</p>
                        <p>
                          Spellblock Per.Level:{" "}
                          {champs.stats.spellblockperlevel}
                        </p>
                        <p>Attack Range: {champs.stats.attackrange}</p>
                      </div>
                      <div className="col">
                        <p>HP Regenation: {champs.stats.hpregen}</p>
                        <p>
                          HP Regenation Per.Level:{" "}
                          {champs.stats.hpregenperlevel}
                        </p>
                        <p>MP Regenation: {champs.stats.mpregen}</p>
                        <p>
                          MP Regenation Per.Level:{" "}
                          {champs.stats.mpregenperlevel}
                        </p>
                        <p>Critical Chance: {champs.stats.crit}</p>
                        <p>Crit Per.Level: {champs.stats.critperlevel}</p>
                        <p>Attack Damage: {champs.stats.attackdamage}</p>
                        <p>
                          Attack Damage Per.Level:{" "}
                          {champs.stats.attackdamageperlevel}
                        </p>
                        <p>Attack Speed: {champs.stats.attackspeed}</p>
                        <p>
                          Attack Speed Per.Level:{" "}
                          {champs.stats.attackspeedperlevel}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          }
        })}
      </div>
    </div>
  );
};
export default CardItem;
