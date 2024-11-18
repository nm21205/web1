import React, { useState } from 'react';
// 스타일 컴포넌트 API 임포트
import styled from 'styled-components';

const StyleComponents = () => {
  const [color, setColor] = useState("#ffa");
  const [fontColor, setFontColor] = useState('#000');  
  
  // 배경색과 글자색을 적용할 Div 스타일
  const Div = styled.div`
    border: 1px solid gray;
    box-shadow: 5px 5px 5px gray;
    padding: 40px;
    margin: 20px;
    display: inline-block;
    color: ${props => props.fontColor}; /* fontColor를 props로 전달 */
    background-color: ${color};
    
    & h1 {
      margin: 10px;
    }
    
    & select {
      padding: 4px;
      width: 150px;
      font-size: 12px;
    }
  `;

	const H1 = styled.h1`
		margin: 10px;
	`;

	const Select = styled.select`
		padding: 4px;
		width: 150px;
		font-size: 12px;
	`;
  
  return (
    <Div fontColor={fontColor}>
      <H1>Color</H1>
      <Select onChange={e => setColor(e.target.value)} value={color}>
        <option value="#ffa">yellow</option>
        <option value="#dfd">green</option>
        <option value="#ccf">blue</option>
        <option value="#fdd">red</option>
      </Select>
      
      <Select onChange={e => setFontColor(e.target.value)} value={fontColor}>
        <option value="#000">black</option>
        <option value="#0f0">green</option>
        <option value="#00f">blue</option>
        <option value="#f00">red</option>
      </Select>
    </Div>
  );
};

export default StyleComponents;