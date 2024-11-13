import logo from './logo.svg';
import './App.css';
import Message from './Message';
import PersonTable from './PersonTable';
import MyComponent from './MyComponent';
import GreetingWithDefault from './GreetingWithDefault'
import ParentComponent from './ParentComponent';
import ConditionalComponent from './ConditionalComponent'

function App() {
  let persons1 = [
    {id: 31, name:'홍길동', age:16},
    {id: 41, name:"ghdrlfehd", age:16},
    {id: 21, name:"ghdrlfㅁㅇㄹehd", age:126}
  ]
  //배열요소를 역순으로 변경

  let persons2 =[...persons1] //.slice(0)이랑 같음
  //ES6문법이랑 같음 = [...persons1] 이거랑 슬라이스0이랑
  persons2.reverse();//배열의순서를 반전
  return (
   <div>
    {/*value속성과 color속성이 Messag 컴포넌트의 props로 전달됨, 여기서 size값은 string 타입이 아니라 number 타입이라{}로 묶어야 한다 */}
    <Message value="안녕하세요" color="blue" size={20}/>
    <Message value="안녕하세요" color="blue" size={30}/>
    <Message value="안녕하세요" color="blue" size={40}/>
    <PersonTable persons = {persons1}/>
    <hr/>
    <PersonTable persons = {persons2}/>

    <MyComponent>리액트</MyComponent>
    <GreetingWithDefault/>
    <ParentComponent/>
    <ConditionalComponent isActive={true} />
    
   </div>
   
  );
}

export default App;
