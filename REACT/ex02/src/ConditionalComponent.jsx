import React from 'react';
import './App.css'; // 클래스 정의가 있는 CSS 파일을 import
//이곳에 작성
const ConditionalComponent = ({isActive}) => {
  const className = isActive ? 'active' : 'inactive';
  return (
  <div className={className}> Status: {isActive ? 'active' : 'inactive'}</div>
)
}
export default ConditionalComponent;