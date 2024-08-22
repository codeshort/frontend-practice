import '../App.css';
export default function CheckboxComponent({onCheckBoxChange}) {
  return (  <div className="options-checkbox">
    <div className="input-group">
      <p>
        <input type="checkbox" id="lowercase" value="lowercase" onChange={()=>{(onCheckBoxChange('lowercase'))}}/>
        <label>Include Lowercase</label>
      </p>
      <p>
        <input type="checkbox" id="uppercase" value="uppercase" onChange={()=>{(onCheckBoxChange('uppercase'))}} />
        <label>Include UpperCase</label>
      </p>
    </div>
    <div className="input-group">
      <p>
        <input type="checkbox" id="number" value="number" onChange={()=>{(onCheckBoxChange('number'))}}/>
        <label>Include Numbers</label>
      </p>
      <p>
        <input type="checkbox" id="symbols" value="symbol" onChange={()=>{(onCheckBoxChange('symbol'))}} />
        <label>Include Symbols</label>
      </p>
    </div>
  </div>)
}