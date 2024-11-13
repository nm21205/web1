
import './App.css';
import { useState } from 'react';
import GroupCompoenet from './GroupComponent';

function App() {
  console.log("App 호출됨")
const [value, setValue] = useState(0);
  return (
    <div className="box">
      <h1>App</h1>
      <button onClick={() => setValue(value + 1)}> 
        {value}
        </button>
        <GroupCompoenet/>
    </div>
  );
}

export default App;
