import React from 'react';
//부모컨포넌트로부터 value와 increase함수를 props로 전달받음

function CounterA({value, increase}) {
	//console.log("CounterA 호출됨");
	//const [value, setValue] = useState(0);

	return (
		<div className="box">
			<h1>CounterA</h1>

			<button onClick={increase}>
				{ value }
			</button>
		</div>
	)
}

//보모컴퍼넌트의 상태가 변경되었을때 자식 컴포넌트가 리렌더링 되는 것을 막아줌

export default React.memo(CounterA);