import React from 'react'

const StyleComponet = () => {

  const s = {color : "blue", fontSize:"24px"}

  return (
    <div>
      <p style={{color:"pink", fontSize:"20px"}}>인라인 서식</p>
      <p style={s}>변수로 스타일 전달</p>
    </div>
  )
}

export default StyleComponet;
