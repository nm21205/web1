import './App.css';
import { useState } from 'react';
import Page1 from './components/Page1';
import { ThemeCountext } from './context/ThemeCountext';
import { UserContext } from './context/UserContext';

function App() {
  //현재 앱이 다크모드인지 아닌지 true, false로 제어
  const [isDark, setIsDark] = useState(false)
  return (
    <UserContext.Provider value={"사용자"}>
         <ThemeCountext.Provider>
        <Page1 isDark={isDark} setIsDark={setIsDark}/>
    </ThemeCountext.Provider>
    </UserContext.Provider>
 
 
  );
}

export default App;
