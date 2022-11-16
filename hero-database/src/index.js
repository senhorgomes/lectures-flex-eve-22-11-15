import React from 'react';
import ReactDOM from 'react-dom/client';
import HeroList from './components/HeroList';
import NewHero from "./components/NewHero";
import './index.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HeroList />
    <NewHero/>
  </React.StrictMode>
);

