//useState훅을 임포트
import {useState} from 'react';
import './App.css';

function App() {
  //count 상태를 생성
  const [count, setCount] = useState(0);
 const [message, setMessage] = useState("hello");
 const [value, setValue] = useState(true) 

  //함수가 호출되면 경고창을 띄움
  const onClickHandler = () => alert('버튼1 클릭');

  //increase와 decrease함수를 생성
  const increase = () => {
 
    setCount(count+1)//count값을 1증가
    console.log(count)
  }
  const decrease = () => {
    setCount(count-1)//count값을 1감소
    console.log(count)
  }

  const helloTag = <div id="hello">hello React</div>;
  

  return (
    <div className="App">
      <p>{count}</p>
      <button onClick={increase}>증가</button>
      <button onClick={decrease}>감소</button>
      <br/>
      <button onClick={onClickHandler}>버튼1</button>
      <button onClick={() => alert('버튼2 클릭')}>버튼2</button>
      <hr/>

       <p>{message}</p>
       <input type='text' onChange={(e) => setMessage(e.target.value)} value={message}
       />
       <hr/>

       <div className="checkbox">
        {/*value가 true면 true라는 문자를 반환하고 false면 false라는 문자를 반환*/}
        <p>{true ? "true" : "false"}</p>
        <hr/>
        <input type='checkbox' checked={value} onChange={(e) => setValue(e.target.checked)}/>
        {value ? helloTag : null}
        
       </div>
    </div>
  );
}


export default App;