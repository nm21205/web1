import {useState} from 'react';

function CounterB(){
console.log("CounterB")
//value값을 0으로 초기화
const [value, setValue] = useState(0);
return(
  <div className='box'>
    <h1>CounterB</h1>
    {/*버튼을 누를때마다 벨류 1증가*/}
    <button onClick={()=> setValue(value + 1)}>
      {value}
    </button>
  </div>
)
}

export default CounterB;