import logo from "./logo.svg";
import "./App.css";
import CheckboxComponent from "./components/CheckBoxComponent";
import { DEFAULT_OPTIONS } from "./constants/Constants";
import { useState} from 'react'
import usePasswordGenerator from "./hooks/usePasswordGenerator";

function App() {

  const [checkboxOptions, setCheckboxOptions] = useState(DEFAULT_OPTIONS);
  const [password,setPassword] = useState('NULL');
  const [length, setLength] = useState(0);
  const [copied, setCopied] = useState(false);
  const {generatePass} = usePasswordGenerator();


  function onCheckBoxChange(value) {
    console.log("check", value);
    setCheckboxOptions((prev) => {return {
      ...prev,
      [value]: !prev[value]
    }})
  }

  function onPasswordGenerateClick() {
    const newPass = generatePass(checkboxOptions, length);
    if(!newPass){
      setPassword('NULL');
    }

    setPassword(newPass);
    setCopied(false);
  }

  function onLengthChange(event) {
    setLength(event.target.value);
  }

  function onCopyClick(){
    async function copyToClipBoard(){
      await window.navigator.clipboard.writeText(password);
    }
    copyToClipBoard();
    setCopied(true);
  }
 

  console.log("checkbox", checkboxOptions, "length", length);

  return (
    <div className="app">
      <div className="password-details">
        <div className="password">{password.length ? password : 'NULL'}</div>
        <button class="copy-btn" onClick={onCopyClick}>{copied ? 'Copied!' : 'Copy'}</button>
      </div>
      <div className="character-length">
        <div className="character-length-info">
          <div className="char-length-text">
          Character Length
          </div>
          <div className="length-value">
            {length}
          </div>
        </div>
        <input type="range" min="3" max="10"  className="char-slider" onChange={onLengthChange}/>
      </div>
      <CheckboxComponent onCheckBoxChange={onCheckBoxChange}/>
    
      <button className="generate-btn" onClick={onPasswordGenerateClick}>Generate Passsword</button>
    </div>
  );
}

export default App;
