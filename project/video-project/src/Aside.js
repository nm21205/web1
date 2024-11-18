//useEffect, useRef 사용
import { useEffect, useRef } from 'react';
//video = 부모컴포넌트에서 전달받은 비디오 소스 경로, onClose = 부모 컴포넌트에서 전달받은 onClose함수
const Aside = ({ video, onClose }) => {
  const videoRef = useRef(null);//비디오 요소를 참조할 useRef훅

  useEffect(() => {
    if (videoRef.current) {//videoRef.current를 통해 해당 DOM을 참조 했는지 여부를 판단
      if (video) {//video값이 있으면 비디오를 재생합니다.
        videoRef.current.play();
      } else { //video값이 없으면 비디오를 정지 합니다.
        videoRef.current.pause();
      }
    }
  }, [video]); //video값이 변경될 때마다 실행



  return (
  //video 값이 있으면 on클래스 추가하고 없으면 on클래스 제거
    <aside className={video ? 'on' : ''}>
    {/*video 값이 있을때만 아래 내용을 렌더링 합니다.*/}
      {video && (
        <>
          <div className="txt">
            <h1>Title</h1>
            <p>Description</p>
            {/*span요소를 클릭하면 onClose함수를 호출하여 Aside컴포넌트를 닫아줍니다.*/}
            <span onClick={onClose}>CLOSE</span>
          </div>
          <figure>
          {/*비디오 요소를 videoRef에 참조*/}
            <video src={video} ref={videoRef} loop muted></video>
          </figure>
        </>
      )}
    </aside>
  )
};

export default Aside;