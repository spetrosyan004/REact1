import './App.css';
import { useState } from 'react';
import Header from './header';
import Carousel from './carousel';

function App() {
  const [count, setCount] = useState(0)
  const [text,setText] = useState('Barev')
  return (
    <div className="App">
      <Header/>
      <main>
        <Carousel/>
        <div className='box'>
            <button onClick={()=>count>0? setCount(count-1):null}>-</button>
            <h2>{count}</h2>
            <button onClick={()=>setCount(count+1)}>+</button>
        </div>
        <div className='box'>
          <input type='text' onChange={(e)=>setText(e.target.value)}/>
          <h2>{text}</h2>
        </div>
      </main>
    </div>
  );
}

export default App;
