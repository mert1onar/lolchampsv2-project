import CardList from "./components/CardList";
import CardItem from "./components/CardItem";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {Container} from "reactstrap"
import Navbars from "./components/Navbars"
import "./styles/app.css"


function App() {
  return (
    <Container className="container">
      <Navbars className="row"/>
      <Router className="row">
        <Routes>
          <Route path="/" element={<CardList />} />    
        
          <Route path="/champions/:id" element={<CardItem />} />
        </Routes>
      </Router>
    </Container>
  );
}

export default App;
