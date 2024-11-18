import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Profile from './components/profile';

function App() {
  return (
    <Router>
      {/* path 경로와 Profile 컴포넌트의 props로 member 값을 전달합니다. */}
      <Routes>
        <Route path='/member1' element={<Profile member="member1" />} />
        <Route path='/member2' element={<Profile member="member2" />} />
        <Route path='/member3' element={<Profile member="member3" />} />
        <Route path='/member4' element={<Profile member="member4" />} />
        {/* default route */}
        <Route path='/' element={<Profile member="member1" />} />
      </Routes>
    </Router>
  );
}

export default App;
