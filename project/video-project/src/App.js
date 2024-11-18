import './App.css';
import Header from './Header';
import Nav from './Nav';
import Aside from './Aside';
import Article from './Article';
import { useState } from 'react';


function App() {
  	//클릭한 아티클 컴포넌트에 해당하는 비디오소스 경로를 담을 상태
    const [selectedVideo, setSelectedVideo] = useState(null);

    const handleArticleClick = (video) => {
      setSelectedVideo(video);  //실행(4)번
    };
    	//함수가 호출되면 비디오소스 경로를 담은 selectedVideo를 비워줌
  const handleClose = () => {
    setSelectedVideo(null); 
  };



  return (
<main>
<Header/>
<Nav/>
<section>
  {/*배열의 갯수 만큼 아티클 컴포넌트를 추가*/}
  {['vids/vid1.mp4','vids/vid2.mp4','vids/vid3.mp4','vids/vid4.mp4'].map
  ((video, index) =>(
    <Article
    key={index}
    video={video}
    onClick={() => handleArticleClick(video)}  //실행(1)번
    />
  ))}
</section>
{/*Aside 컴포넌트로 현재 선택된 비디오소스 경로를 전달*/}
      <Aside video={selectedVideo} onClose={handleClose} />
</main>
  );
}

export default App;
