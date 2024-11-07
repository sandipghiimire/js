import React, { useState } from 'react'

const Calculate = () => {
  const [num1, setNum1] = useState("1")
  const [num2, setNum2] = useState("1")
  const [calc, setCalc] = useState(null)
  const [operation, setOperation] = useState('+');
  const Calcualtion= () => {
        const number1 = parseFloat(num1);
        const number2 = parseFloat(num2);
        let calcResult;

        switch (operation) {
            case '+':
                calcResult = number1 + number2;
                break;
            case '-':
                calcResult = number1 - number2;
                break;
            case '*':
                calcResult = number1 * number2;
                break;
            case '/':
                calcResult = number2 !== 0 ? number1 / number2 : 'Cannot divide by zero';
                break;
            default:
                calcResult = 'Invalid operation';
        }

        setCalc(calcResult);
  } 
  return (
    <div>
        <h1>calculate</h1>
        <form>
            <label>First Number: </label>
            <input  type="number"
                    value={num1}
                    placeholder='Enter the first Number'
                    onChange={(e) => {setNum1(e.target.value)}}
            /> <br /><br />
            
            <label>First Number: </label>
            <input  type="number"
                    value={num2}
                    placeholder='Enter the first Number'
                    onChange={(e) => {setNum2(e.target.value)}}
            /> <br /><br />
            <label>Operator: </label>
            <input  type="text"
                    value={operation}
                    placeholder='Enter the operator'
                    onChange={(e) => {setOperation(e.target.value)}}
            /> <br /><br />
            <button type="button" onClick={Calcualtion}>Calculate</button>
            {calc !== null && <p>Result: {calc}</p>}
        </form>
    </div>
  )
}

export default Calculate