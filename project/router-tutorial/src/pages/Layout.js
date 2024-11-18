import React from 'react';
import { Outlet, useNavigate } from 'react-router-dom';

const Layout = () => {
  const navigate = useNavigate(); // 변수명을 소문자로 수정

  function goBack() {
    navigate(-1); // 뒤로가기
  }

  function goArticles() {
    navigate("/articles", { replace: true }); // articles 경로로 이동, replace를 true로 설정하면 이전경로가 history에 저장되지 않음
  }

  return (
    <div>
      <header
        style={{
          background: "lightgray",
          padding: 16,
          fontSize: 24,
        }}
      >
        <button onClick={goBack}>뒤로가기</button>
        <button onClick={goArticles}>게시글 목록</button>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
