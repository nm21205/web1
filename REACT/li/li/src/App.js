import './App.css';
import ToggleSwitch from './ToggleSwitch'; // ToggleSwitch 컴포넌트 불러오기
import Greeting from './Greeting'; // Greeting 컴포넌트 불러오기
import UserForm from './UserForm';

function App() {
  const isLoggedIn = true; // 예시로 로그인 상태 설정

  return (
    <div className="App">
      <Greeting /> {/* 로그인 상태에 따라 메시지 표시 */}
      <ToggleSwitch/> {/* ON/OFF 토글 버튼 */}
      <UserForm/>
    </div>
  );
}

export default App;
