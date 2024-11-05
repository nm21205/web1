//섹션2

const section2 = document.querySelector(".section-02");
const msgText = section2.querySelector(".msg-elem");

const canvas2 = document.querySelector("#head-bod-turn");
const ctx2 = canvas2.getContext("2d");

//캔버스크기
canvas2.width = 1458;
canvas2.height = 820;

const images2 = [];
const headturn = {frame:0};

//총프레임수

const frameCount2 = 131;

const currentFrame2 = (index) => 
  `images/head-bob-turn/${(index+1).toString().padStart(4,"0")}.jpg`;




for(let i = 0; i < frameCount2; i++){
  const img = new Image();
  img.src = currentFrame2(i);
  //src 속성값으로 할당
  images2.push(img);
  //img객체의 onload이벤트 핸들러를 정의(이미지가 로드 되었을때 호출되는 함수)
  img.onload = () => {
    //첫번째 이미지가 로드되면 render함수를 호출
    if(i === 0) render2();
  }
}

//로딩 애니메이션을 정의하기 위해 gsap.timeline()을 호출하여 타임라인 객체를 생성
let tl2 = gsap.timeline({
  scrollTrigger:{
    trigger:section2,
    start: "top top",
    end:"+=4000",
    scrub:true,
    pin:true,
  }
});

tl2
.add("start0")
.to(msgText,{delay: 11, duration:3.5, opacity:1, y:-50}, "start0")
.to(msgText,{duration:3.5, opacity:0, y:-100})
//headturn 객체의 frame속성을 0에서 마지막 프레임까지 19초동안 애니메이션 합니다.
.to(
  headturn,
  {
    duration:19,
    frame:frameCount2 -1,
    snap:"frame",
    ease:"none",
    onUpdate:render2
  },
  "start0"
)

//render2함수는 캔버스를 지우고 현재 프레임의 이미지를 캔버스에 그립니다.

function render2(){
  ctx2.clearRect(0,0, canvas2.width, canvas2.height);
  ctx2.drawImage(images2[headturn.frame],0,0);
}