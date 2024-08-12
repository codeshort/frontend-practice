import logo from './logo.svg';
import './App.css';
import {useState, useEffect, useRef} from 'react'

function App() {
  const [currentValues, setCurrentValues] = useState(Array.from({length: 50}, (_, i) => i + 1));
  const appEle = useRef(null);

   const handleScroll = () =>  {
    console.log(appEle.current.scrollHeight, appEle.current.scrollTop);
      if(appEle.current.scrollHeight - (appEle.current.scrollTop + window.innerHeight) <=40) {
        setCurrentValues((prev) => [
          ...prev, 
          ...Array.from({length: 50}, (_, i) => i + 1 + prev[prev.length - 1])
        ]);
      }
   }

  useEffect(()=> {
    appEle.current.addEventListener('scroll', handleScroll);

    return () => {
      appEle.current.removeEventListener('scroll', handleScroll);
    }
  }, [])

  return (
    <div className="App" ref={appEle}>
      {currentValues.map((val) => <h3>{val}</h3>)} 
    </div>
  );
}

export default App;
