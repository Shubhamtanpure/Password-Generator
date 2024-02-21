import './App.css';
import { useState, useCallback, useEffect } from 'react';


function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharacterAllowed] = useState(false);
  const [password, setPassword] = useState("");

  //useRef hook
  // const passwordRef = useRef(null)

  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (numberAllowed) str += "0123456789"
    if (charAllowed) str += "!@#$%^&*-_+=[]{}~`"

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length)
      pass += str.charAt(char)

    }
    // The setPassword(pass) line is used to update the password state with the newly generated password stored in the pass variable.
    setPassword(pass)
  }, [length, numberAllowed, charAllowed])




  useEffect(() => {
    passwordGenerator()
  }, [length, numberAllowed, charAllowed, setPassword])

  return (

    <div className="App">
      <header className="App-header">
        <h1>Please Slide Your Range To Generate Password</h1>

        <div className='pass_generator'>
          <input type='text'

            readOnly
            placeholder='Password'
            style={{ height: "40px", width: "500px", borderRadius: "10px ", outline: "none", fontWeight: "bold", fontSize: "25px" }}
            value={password}
          // ref={passwordRef}
          />
          <label>Lenght: {length}</label>
          <div className='nxt_row' style={{ margin: " 20px 0px 0px 0px" }}>
            <input type='range'
              style={{ cursor: "pointer" }}
              min={8}
              max={100}
              value={length}
              onChange={(e) => { setLength(e.target.value) }}
            />
            <input type='checkbox'
              style={{ margin: " 0px 0px 0px 20px" }}
              defaultChecked={charAllowed}
              onChange={() => {
                setCharacterAllowed((prev) => !prev);
              }}
            />
            <label>Character</label>
            <input type='checkbox'
              style={{ margin: " 0px 0px 0px 20px" }}
              defaultChecked={numberAllowed}
              onChange={() => {
                setNumberAllowed((prev) => !prev);
              }}
            />
            <label>Number</label>
            <p>Your Password : {password}</p>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
