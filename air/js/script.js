
//스크롤을 내리면 AIRPOB네비바가 브라우저 상단에 고정
const navbar = document.querySelector(".airpods-navbar");
const originalY = navbar.offsetTop; //.airpods-navbar의 y축으로 top위치값을 originaly에
//할당 .apple-navbar의 높이가 44px이므로 originalY에 할당된 값은 44가 할당 됩니다.

window.addEventListener("scroll",() => {
  if(scrollY >= originalY){
    //스크롤이동값이 오리지날 y 값보다 커지면 실행
    navbar.classList.add("sticky"); 
  }else{
    //스크롤 이동값이 originaly값보다 작으면 실행
    navbar.classList.remove("sticky"); //navbar에 sticky클래스를 제거하여
    //브라우저 상단에 고정되지 않도록 초기화
  }
})

//ScrollTrigger 플러그인을 등록

gsap.registerPlugin(ScrollTrigger);

//섹션01과 그 내부의 텍스트 요소들을 선택
const section1 = document.querySelector(".section-01");
const mainText = document.querySelector(".main-elem");
const msgText1 = document.querySelector(".msg-elem-01")
const msgText2 = document.querySelector(".msg-elem-02")
const msgText3 = document.querySelector(".msg-elem-03")
const msgText4 = document.querySelector(".msg-elem-04")

//캔버스의 크기 설정

const canvas = document.querySelector("#airpods");
const ctx = canvas.getContext("2d");

canvas.width = 1158;
canvas.height = 770;

//이미지의 프레임을 저장할 배열을 생성

const images = [];
//현재 프레임을 푸적하는 airpods객체를 정의
const airpods = {frame:0}
//총 프레임의 수
const frameCount = 147;

//이미지 경로 frameCount의 갯수 만큼 받아서 images배열에 저장
const currentFrame = (index) => 
  `images/airpods/${(index+1).toString().padStart(4,"0")}.jpg`;
  //프레임 번호를 index로 받아서 이미지 경로를 생성하는 함수
  //index가 0일 경우 'images/airpods/0001.jpg'를 반환


//.padStart(4,"0") = 문자열의 특정 길이로 맞추기 위해 사용되는 메서드
//4는 최종 문자열의 길이를 의미, "0"은 추가할 문자를 의미
//예를 들어 전달 받은 문자열이 5면 문자열의 길이가 되도록 0을 추가합니다.
//결과적으로 "0005"라는 문자열이 됩니다.

//console.log(currentFrame(0))

for(let i = 0; i < frameCount; i++){
  const img = new Image();
  img.src = currentFrame(i);
  //src 속성값으로 할당
  images.push(img);
  //img객체의 onload이벤트 핸들러를 정의(이미지가 로드 되었을때 호출되는 함수)
  img.onload = () => {
    //첫번째 이미지가 로드되면 render함수를 호출
    if(i === 0) render();
  }
}
console.log(images)

//초기 로딩 애니메이션
let tl0 = gsap.timeline();

tl0
.add("start0")//타임라인에 start0 이라는 레이블을 추가 이후에 .to()메서드에 3번째 인자값으로
//start0을 입력하면 해당 애니메이션은 start0레이블을 추가한 시점에서 동시에 실행됩니다.
.fromTo(canvas, {opacity:0},{duration:2, opacity:1}, "start0")
//start0 지점에서 캔버스가 2초 동안 서서히 보이게 합니다.
.fromTo (mainText,
  {opacity:0},
  {duration:1.5, delay:0.75, opacity:1},
  "start0"
)

//스크롤 애니메이션
const t11 = gsap.timeline({
  scrollTrigger: {
    trigger: section1,
    start: "top top+100px",
    end: "+=4000",
    pin:true, //트리거 요소를 고정
    scrub:true,//ㅛ스크롤위치에따라
    markers:false,
    //스크롤 이벤트에 따라 애니메이션을 제어하기 위한 설정
  }
})

t11
.add("start0")
//메인텍스트 애니메이션 :5초동안 위로 500px 이동
.to(mainText,{duration:5, y:-500}, "start0")
//airpobs 객체의 frame 속성을 0에서 38초동안 애니메이션 합니다.
.to(
  airpods,{
    duration:8,
    frame:138, //airpods객체의 초기값은 0부터 138까지
    snap:"frame", //애니메이션을 프레임 단위로 스냅합니다.
    ease:"none",
    onUpdate:render, //프레임이 변경될 때 render함수를 호출
  },
  "start0"
)
//메시지 텍스트 애니메이션
.add("start1")
//msgText1요소는 3.5초 동안 투명도가 1로 증가하고 y축으로 -50px위치로 이동한 후
.to(msgText1, {duration:3.5, opacity:1, y: -50}, "start1")
//다시 3.5초 동안 투명도가 0으로 가모하면서 현재 위치(-50px)에서 y축으로 -100px로 이동
.to(msgText1, {duration:3.5, opacity:0, y: -100})

.add("start2")
//msgText1요소는 3.5초 동안 투명도가 1로 증가하고 y축으로 -50px위치로 이동한 후
.to(msgText2, {duration:3.5, opacity:1, y: -50}, "start2")
//다시 3.5초 동안 투명도가 0으로 가모하면서 현재 위치(-50px)에서 y축으로 -100px로 이동
.to(msgText2, {duration:3.5, opacity:0, y: -100})

.add("start3")
//msgText1요소는 3.5초 동안 투명도가 1로 증가하고 y축으로 -50px위치로 이동한 후
.to(msgText3, {duration:3.5, opacity:1, y: -50}, "start3")
//다시 3.5초 동안 투명도가 0으로 가모하면서 현재 위치(-50px)에서 y축으로 -100px로 이동
.to(msgText3, {duration:3.5, opacity:0, y: -100})

.add("start4")
//msgText1요소는 3.5초 동안 투명도가 1로 증가하고 y축으로 -50px위치로 이동한 후
.to(msgText4, {duration:3.5, opacity:1, y: -50}, "start4")
//다시 3.5초 동안 투명도가 0으로 가모하면서 현재 위치(-50px)에서 y축으로 -100px로 이동
.to(msgText4, {duration:3.5, opacity:0, y: -100})

//캔버스의 마지막 이미지 그리기
.to(airpods, {
  duration:1,
  frame :frameCount -1,
  snap:"frame",
  ease:"none",
  onUpdate:render,
})
//easeIn = 천천히시작 -> 보통속도
.to(canvas,{duration:36, scale:0.5, ease:"power1.in"}, "start0")

//이미지 렌더링
function render (){
  ctx.clearRect(0,0, canvas.width, canvas.height);
  ctx.drawImage(images[airpods.frame],0, 0); 
}



