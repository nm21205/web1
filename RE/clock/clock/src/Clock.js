import React, {useEffect, useState} from 'react'

const Clock = () => {
  const [time, setTime] = useState(new Date())
  useEffect(()=>{
  const id = setInterval(() => setTime(new Date()),1000)
  return () => clearInterval(id); //언마운트 될때 반복함수를 종료
  },[]) //빈배열을 전달하여 마운트 될때 한번 만 useEffect를 호출
  return (
    <div className='clock'>
   <h1>시계</h1>
   {/*
   Date.toLocaleDateString = 날짜정보
   Date.toLocaleTimeString = 시간정보
    */}
   <p>{time.toLocaleTimeString()}</p>
    </div>
  )
}

export default Clock
