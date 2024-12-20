import './App.css';
// Route 컴포넌트로 특정 경로에 원하는 컴포넌트를 보여줄 수 있다
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Profile from './pages/Profile';
import Article from './pages/Article';
import Articles from './pages/Articles';
import Layout from './pages/Layout';

function App() {
  return (
    <Routes>
      {/* Layout을 사용하는 공통 레이아웃 설정 */}
      <Route element={<Layout />}>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        {/* URL 파라미터 설정 */}
        <Route path='/profiles/:username' element={<Profile />} />
        <Route path='/articles' element={<Articles />} />
        <Route path=':id' element={<Article />} />
      </Route>
    </Routes>
  );
}

export default App;
