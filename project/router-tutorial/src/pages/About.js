import React from 'react'
//URL 끝 ? 뒤에 파라미터를 나타내는 문자열을 추가해 서버에 요청할 때 추가 정보를 전달하는 방법
import { useLocation } from 'react-router-dom'
//쿼리에서 ?를 지우고 &를 분리한 뒤 key와 value로 파싱하는 작업
import { useSearchParams } from 'react-router-dom';

const About = () => {
  const location = useLocation();//location 객체를 반환(페이지의 정보를 가지고 있다)
  const [searchParams, setSearchParams] = useSearchParams();
  const detail = searchParams.get("detail");//get메서드로 detail값을 조회
  const page = parseInt(searchParams.get("page") || 0)//get메서드로 page값을 조회하는데 만약 값이 없으면 0을 반환

  function onToggleDetail(){
    //setSearchParams로 파라미터값을 인자로 받아옴
    setSearchParams((prev) => ({
      ...prev, //구조분해할당으로 변경되지 않는 값은 그대로 복사
      detail: detail === "true" ? "false" : "true", //detail값을 true에서 false로 false에서 true로 변경
      page
    }))
  }
  function onIncreasePage(){
    setSearchParams((prev) => ({
      ...prev,
      detail,
      page: page + 1
    }))
  }

  return (
    <div>
      <h1>About</h1>
      <p>리액트 라우터를 사용해보는 프로젝트입니다.</p>
      <p>쿼리스트링 : {location.search}</p>
      <p>detail : {detail}</p>
      <p>page : {page}</p>
      <button onClick={onToggleDetail}>Toggle detail</button>
      <button onClick={onIncreasePage}>page + 1</button>
    </div>
  )
}

export default About