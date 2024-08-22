import logo from './logo.svg';
import './App.css';
import {useState, useEffect} from 'react';

function App() {
  const [percentage, setPercentage] = useState(0);
  useEffect(() => {
    setInterval(()=> {
      setPercentage((prev)=> {
       return Math.min(100, Math.max(0,prev+1));
      });;
    },100);
  }, []);

  return (
    <div className="app">
      <div>Progress Bar</div>
      <div class="progress-bar">
        <div className="percentage" style={{color: percentage > 49 ? 'white':'black'}}>{percentage}%</div>
        <div className="overlay" style={{width :  `${percentage}%`}}></div>
      </div>
    </div>
  );
}

/**
 * imp transform: translate(-50%, -50%); with top : 50% and left: 50% ---> important to use like this 
 */

export default App;
