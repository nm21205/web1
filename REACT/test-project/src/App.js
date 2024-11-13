import './App.css';
import UserProfile from './components/UserProfile';
import TodoList from './components/TodoList';
import StyleComponent from './components/StyleComponent';
import ParentComponent from './components/ParentComponent';
//부모 컴포넌트에서 자식 컴포넌트를 import해서 불러옴
import MultiplicationTable from './components/MultiplicationTable';

function App() {
  return (
    <div className="App">
      <h1>HelloWorld</h1>
      <UserProfile />
      <TodoList />
      <StyleComponent />
      <ParentComponent />
      {/*import후에 컴포넌트를 사용할 수 있음 */}
      <MultiplicationTable />
    </div>
  );
}

export default App;