import { useState } from "react"
import { AnswerPad } from "./AnswerPad";
import { NumPad } from "./NumPad";
import { Operators } from "./OperatorPad";

export function Calculator() {
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

  return(
    <div className="calculator">
        <NumPad val={val1} addVal={addToValue1} addDecimal={addDecimalToValue1} clearVal={clearVal1}/>
      
        <Operators operator={operator} updateOperator={updateOperator}/>
  
        <NumPad val={val2} addVal={addToValue2} addDecimal={addDecimalToValue2} clearVal={clearVal2}/>
        
        <AnswerPad result={result} calcResult={calcResult} storeResult={storeResult} recallStoredResult={recallStoredResult} clearAll={clearAll} />
    </div>
  )
}