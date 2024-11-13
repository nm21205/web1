import React from 'react'

//App컴포넌트에서 props 파라미터 객체를 통해 조회

const Message = (props) => {
  const MsgStyle ={color: props.color, fontSize:props.size}
  return (
    <div style={MsgStyle}>
{props.value}{/**/}      
    </div>
  )
}

//App컴포넌트에서 props 파라미터 객체를 통해 조회

export default Message
