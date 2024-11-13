import React,{useEffect} from 'react';

const Lifecycle = () => {
  //처음 렌더링될 때만 Component Mounted를 출력하고 언마운트될 때 Component Unmounted 출력

  useEffect(() => {
 console.log('Component Mounted') //처음 렌더링 될때만 실행
 return () => console.log('component Unmounted') //언 마운트 될때만 실행
  },[]); //빈 의존성 배열

  return <div>콘솔에 mounted 또는 unmounted를 표시</div>;
};

export default Lifecycle;