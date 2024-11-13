import React from 'react';
import './App.css';
import JSXtest from './components/JSXtest';
import Styletest from './components/styletest';
import './css/style.css'; //스타일시트를 임포트
import Tablecomponent from './components' ;

function App() {

  return ( 
    <div className="App">
    {/*JSXtest컴포넌트를 적용*/}
      <JSXtest/>
      <Styletest/>
   
    </div>
  )
}

export default App;