import { useState } from "react"
import "./App.css"

function App() { 
  const initialVal = '0'

  const [val1, setVal1] = useState(initialVal);
  const [val2, setVal2] = useState(initialVal);
  const [operator, setOperator] = useState('+');
  const [result, setResult] = useState(initialVal);
  const [storedResult, setStoredResult] = useState(initialVal)

  const addToValue1 = (e) => val1 === '0' ? setVal1(e.target.innerText) : setVal1(val1 + e.target.innerText)
  const addToValue2 = (e) => val2 === '0' ? setVal2(e.target.innerText) : setVal2(val2 + e.target.innerText)
  const addDecimalToValue1 = (e) => val1.includes('.') ? console.log("Can't add more decimal points!") : setVal1(val1 + e.target.innerText)
  const addDecimalToValue2 = (e) => val2.includes('.') ? console.log("Can't add more decimal points!") : setVal2(val2 + e.target.innerText)
  
  const clearVal1 = () => setVal1(initialVal);
  const clearVal2 = () => setVal2(initialVal);
  const clearAll = () => {
    clearVal1();
    clearVal2();
    setResult(initialVal)
  }

  const updateOperator = (e) => setOperator(e.target.innerText);
  const calcResult = () => setResult(Function(`"use strict";return ${val1} ${operator} ${val2}`))
  const storeResult = () => setStoredResult(result)
  const recallStoredResult = () => setResult(storedResult)

  return (
    <div className="calculator">
        <div className="panel">
          <p>{val1}</p>
          <div className="numbers">
            <button onClick={addToValue1}>1</button>
            <button onClick={addToValue1}>2</button>
            <button onClick={addToValue1}>3</button>
            <button onClick={addToValue1}>4</button>
            <button onClick={addToValue1}>5</button>
            <button onClick={addToValue1}>6</button>
            <button onClick={addToValue1}>7</button>
            <button onClick={addToValue1}>8</button>
            <button onClick={addToValue1}>9</button>
            <button onClick={addToValue1}>0</button>
            <button onClick={addDecimalToValue1}>.</button>
            <button onClick={clearVal1}>Clear</button>
          </div>
        </div>
        
        <div className="panel">
          <p>{operator}</p>
          <div className="numbers">
            <button onClick={updateOperator}>+</button>
            <button onClick={updateOperator}>-</button>
            <button onClick={updateOperator}>*</button>
            <button onClick={updateOperator}>/</button>
          </div>
        </div>

        <div className="panel">
          <p>{val2}</p>
          <div className="numbers">
            <button onClick={addToValue2}>1</button>
            <button onClick={addToValue2}>2</button>
            <button onClick={addToValue2}>3</button>
            <button onClick={addToValue2}>4</button>
            <button onClick={addToValue2}>5</button>
            <button onClick={addToValue2}>6</button>
            <button onClick={addToValue2}>7</button>
            <button onClick={addToValue2}>8</button>
            <button onClick={addToValue2}>9</button>
            <button onClick={addToValue2}>0</button>
            <button onClick={addDecimalToValue2}>.</button>
            <button onClick={clearVal2}>Clear</button>
          </div>
        </div>
        <div className="panel answer">
          <p>{result}</p>
          <div>
            <button onClick={calcResult}>=</button>
            <button onClick={storeResult}>Store</button>
            <button onClick={recallStoredResult}>Recall</button>
            <button onClick={clearAll}>AC</button>
          </div>
        </div>
    </div>
  )
}

export default App
