import React, { useState, useEffect } from 'react';

const TimerWithCleanup = () => {
  const [count, setCount] = useState(0)
  //1. 타이머 메서드로 1초마다 1씩 증가하는 타이머 구현(setInterval())
  useEffect(() => {
    const timer = setInterval(() => {
      setCount(prevCount => prevCount + 1)
      return () =>{
        clearInterval(timer) //컴포넌트가 언마운트 될때 clearinterval로 반복 함수를 종료함
      };
     }, 1000)
  },[])
 
  //2. 언마운트될 때 타이머를 정리(clearInterval())
  return (
    <div>
      <p>Timer: {count}s</p>
    </div>
  );
};

export default TimerWithCleanup;