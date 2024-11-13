import { useState } from "react";
import CounterA from "./CounterA";
import CounterB from "./CounterB";

function GroupCompoenet(){
console.log("GroupComponent 호출됨")
const [value, setValue] = useState(0);
return(

<div className="box">
<h1>GroupCompoenet</h1>
<button onClick={() => setValue(value +1)}>
  {value}
</button>
<CounterA />
<CounterB />
</div>
)
}

export default GroupCompoenet;