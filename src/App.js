import './App.css';
import { useState } from 'react';
import Calculator from './calculator';

function App() {
  let [val, setval] = useState("");
  let [val1, setval1] = useState("");
  let [ans, setans] = useState();

  const sum = () => {
    ans = setans(parseInt(val) + parseInt(val1))
  }
  const subtraction = () => {
    ans = setans(parseInt(val) - parseInt(val1))
  }
  const multiplication = () => {
    ans = setans(parseInt(val) * parseInt(val1))
  }
  const divition = () => {
    ans = setans(parseInt(val) / parseInt(val1))
  }
  return (
    <>
      <div className='t1'>
        <input type='text' onChange={(e) => { setval(e.target.value) }} ></input>
        <input type='text' onChange={(e) => { setval1(e.target.value) }} ></input><br></br>
        <input type='button' value={"sum"} onClick={sum}></input>
        <input type='button' value={"sub"} onClick={subtraction}></input>
        <input type='button' value={"mul"} onClick={multiplication}></input>
        <input type='button' value={"div"} onClick={divition}></input><br></br>
        <input type='text' value={ans}></input><br></br><br></br>
      </div>

      <Calculator />
    </>
  );
}

export default App;
