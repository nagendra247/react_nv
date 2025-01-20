import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      <h1 className="home-title">Welcome to ReactNV</h1>
      <div className="options-container">
        <div 
          className="option-card primary"
          onClick={() => navigate('/practice')}
        >
          <h2>Practice React</h2>
          <p>Master React concepts through hands-on practice exercises</p>
        </div>
        <div 
          className="option-card secondary"
          onClick={() => navigate('/learn')}
        >
          <h2>Learn React</h2>
          <p>Comprehensive tutorials and learning resources</p>
        </div>
      </div>
    </div>
  );
};

export default Home;