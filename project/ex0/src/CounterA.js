import {useState} from 'react';
import GroupCompoenet from './GroupComponent';

function CounterA(){
console.log("CounterA")
//value값을 0으로 초기화
const [value, setValue] = useState(0);

return(

  


  <div className='box'>
    <h1>CounterA</h1>
    {/*버튼을 누를때마다 벨류 1증가*/}
    <button onClick={()=> setValue(value + 1)}>
      {value}
    </button>
    <GroupCompoenet/>
  </div>
)
}

export default CounterA;