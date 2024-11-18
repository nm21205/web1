import React, {useState} from 'react'
import './Style.css';

const CssStyle = () => {
  //배경색을 적용하기 위한 클래스이름 상태 값
  const[color, setColor] = useState('yellow');
  const divClassName = "App " + color;

  return (
    //위에서 조합한 클래스 이름을 div에 적용
    <div className={divClassName}>
    <h1>Color</h1>
    <select onChange={e=>setColor(e.target.value)}
      value={color}>
        <option>yellow</option>
        <option>green</option>
        <option>blue</option>
        <option>red</option>
    </select>
    </div>
  )
}

export default CssStyle
