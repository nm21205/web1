import React, {useContext} from 'react'
import { ThemeCountext } from '../context/ThemeCountext'

const Content = () => {
  const {isDark} =  useContext(ThemeCountext);

  return (
    <div
      className="content"
      style={{
        backgroundColor: isDark ? 'black' : 'lightgray',
        color: isDark ? 'white' : 'black',
      }}
    >
      <h1>{user}님 좋은 하루 보내세요</h1>
    </div>
  );
};

export default Content;