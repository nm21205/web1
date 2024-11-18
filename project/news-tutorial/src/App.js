import './App.css';
import axios from 'axios';
import { useState } from 'react';


function App() {
  const [data, setData] = useState(null);
  const onClick = async () => {
    try{
    const response = await axios.get('https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=c4c4408c9c5f40a891d230b789454433')
    setData(response.data)}catch(e){//응답 오류시 오류를 콘솔에 출력
console.log(e)
    }
  }
  return (
    <div className="App">
    <div>
      <button onClick={onClick}>불러오기</button>
    </div>
    {/*data가 있으면 textarea태그를 표시하고 없으면 표시하지 않음*/}
    {data && (
     <textarea 
     rows={7}
     readOnly={true}
     value={JSON.stringify(data, null, 2)}
     />
    )}
    </div>
  );
}

export default App;
