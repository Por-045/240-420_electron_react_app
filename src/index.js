import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Profile from './Profile';
import { BrowserRouter, NavLink, Route, Routes } from "react-router-dom"; 
import * as serviceWorker from './serviceWorkerRegistration';
import reportWebVitals from './reportWebVitals';
import Navbar from './components/Navbar';
import './style.css'
 
ReactDOM.render(
  <React.StrictMode>
     <BrowserRouter>
        {/* <header className="App-header">
          <nav>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/Profile">Profile</NavLink>
          </nav>
        </header> */}
        <Navbar />
        <div className="App">
          <Routes>
            <Route path="/" element={<App />} />
            <Route path="/Profile" element={<Profile />} />
          </Routes>
        </div>
      </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
 
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
reportWebVitals();
