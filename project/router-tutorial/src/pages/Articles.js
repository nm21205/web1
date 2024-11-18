import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Articles = () => {
  return (
    <>
    <ul>
   {/*outlet은 중첩된 라우트를 렌더링할때 사용됩니다.*/}

   <Outlet/>
   <li><Link to="/articles/1">게시글 1</Link></li>
   <li><Link to="/articles/2">게시글 2</Link></li>
   <li><Link to="/articles/3">게시글 3</Link></li>
 </ul>
 </>
  );
};

export default Articles;