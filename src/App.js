import "./component/App.css";
import { useState } from 'react';
const App = () => {
   const [counter, setCounter] = useState(0);
    return (
        <div className='App'>
        <h1>{counter}</h1>
        
            <button onClick={() => setCounter(counter + 1)}>increase</button>
            <button onClick={() => counter > 0 ? setCounter(counter - 1) : null}  style={counter === 0 ? {backgroundColor :"blue"} : null}>decrease</button>
            <button onClick={() => setCounter(0)}>reset</button>

        </div>
    );
}
export default App;