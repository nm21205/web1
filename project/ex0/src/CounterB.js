import React from 'react'

function CounterB({value, increase}) {
	//console.log("CounterB 호출됨");
	//const [value, setValue] = useState(0);
	return (
		<div className="box">
			<h1>CounterB</h1>
			<button onClick={increase}>
				{ value }
			</button>
		</div>
	)
}

export default React.memo(CounterB);