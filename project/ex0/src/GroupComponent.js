import React, { useState, useCallback} from 'react'
import CounterA from './CounterA'
import CounterB from './CounterB'

function GroupComponent() {
	console.log("GroupComponent 호출됨");
	const [countA, setCountA] = useState(0)
	const [countB, setCountB] = useState(0)
	const [value, setValue] = useState(0);

	//useCallback : 컴포넌트가 리렌더링 될때 함수가 다시 생성되는 것을 막아줌
	const increaseA = useCallback(() => {setCountA(countA => countA + 1)},[])

	
  const increaseB = useCallback(() => {setCountB(countB => countB + 1)},[])
	
	return (
		<div className="box">
			<h1>CounterContainer</h1>
			<button onClick={() => setValue(value + 1)}>
				{ value }
			</button>
			<CounterA value={countA} increase={increaseA} />
			<CounterB value={countB} increase={increaseB} />
		</div>
	)
}

export default React.memo(GroupComponent);