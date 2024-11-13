import React from 'react';
import './App.css';

function App() {
  let persons =[{
name: "홍길동", age:16},
{
  name: "임꺽정", age:19},
  {
    name: "전우치", age:20},
  ];

  //React.creatElement(element,attribute, child)
let td1 = React.createElement("td", null, "이름");
let td2 = React.createElement("td", null, "나이");
let tr = React.createElement("td", null, td1, td2);
let trlist = [tr];

for (let persons of persons){
  td1 = React.createElement("td", null, person.name);
  td2 = React.createElement("td", null, person.age);
  tr = React.createElement("td", null, td1, td2);
  trlist.push(tr);
}
let table = React.createElement("table", null, trlist);
return table;}

export default App;

  return (
   <div>
    <h1>hell0 react</h1>
    <p>jsx를 사용한 컴포넌트입니다.</p>
   </div>
  );
}

export default App;
