import React, { useEffect, useRef } from 'react'
import styled from 'styled-components';

const Div = styled.div`
	border: 1px solid #ccc;
	padding: 5px;
	overflow-y: scroll;
	width: ${props => props.w };
	height: ${props => props.h };
`; //width와 height를 외부에서 전달받은 w와 h값으로 대입한다.

//ScrollBox 외부에서 width와 height와 children을 props로 받아 옵니다. 
function ScrollBox({width, height, children}) {
	//divRef 참조 변수를 만든다. 특정 DOM요소를 직접 다룰때 사용
	const divRef = useRef(null) //이 변수에 대입된 값은 컴포넌트가 unmount 될 때까지 계속 유지된다.
	//컴포넌트가 렌더링된 후 divRef에 할당된 요소 위치로 스크롤 이동합니다.
	useEffect(() => divRef.current?.scrollIntoView());
	// ?. = divRef.current가 null이나 undefined일 경우 오류가 발생하지 않도록 합니다.
	
	return (
	//Div 컴포넌트의 w, h props 값 전달
		<Div w={width} h={height}>
			{children}
			{/*divRef로 div요소를 넣습니다. */}
			<div ref={divRef}></div>
		</Div>
	);
}

export default ScrollBox;