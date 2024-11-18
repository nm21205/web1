import ScrollBox from './ScrollBox';
import { useRef, useState } from 'react';
import './App.css';
import styled from 'styled-components';

const Div = styled.div`
padding:20px;
& select {
padding:5px;
width:100px;
}
& button {
padding:5px 20px;
margin-left:10px;
}
`

function App() {
  //데이터 목록 상태
  const [list, setList] = useState([]);
 //생상을 저장하는 레퍼런스(참조 변수)를 생성합니다.
 const colorRef = useRef('#ffa');
  //add버튼이 클릭되면, 이 함수가 호출된다
  const addItem = () => {
    const time = new Date().toLocaleTimeString();
    //현재 시각 문자열이 데이터 목록에 추가된다.
    setList([...list, {time, color : colorRef.current}])
  }

  return (
   <Div>
    {/* */}
    <select onChange={e => colorRef.current = e.target.value}>
      <option value="#ffa">yellow</option>
      <option value="#dfd">green</option>
      <option value="#ccf">blue</option>
      <option value="#fdd">red</option>
    </select>
     <div style={{ padding: "20px" }}>
      <button onClick={() => addItem()}>Add Item</button>
      {/*스크롤 박스 컴포넌트로 width와 height값을 props로 전달*/}
      <ScrollBox width="200px" height="500px">
        {/*list배열을  map으로 순회하면서 데이터를 스크롤 바스의 자식으로 넣어줌*/}
        {list.map(item => 
        //item 객체의 color 프로퍼티에 담겨있는 colorRef값을 배경색으로 적용
        <p style={{backgroundColor: item.color}} key={item.time}>
          {item.time}
        
        </p>
      )}
      </ScrollBox>
    </div>
   </Div>
  );
}

export default App;
