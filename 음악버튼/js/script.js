const frame = document.querySelector("section");
const lists = frame.querySelectorAll('article');

const deg = 45; //각각의 article요소가 회전할 각도
const len = lists.length-1; //순번이 0부터 시작하므로 전체 개수에 1을 빼줌

let i = 0;

//article의 갯수만큼 반복
for(let el of lists){
  const pic = el.querySelector(".pic");
  el.style.transform = `rotate(${deg*i}) translateY(-100vh)`;
  //배경이미지 추가
  pic.style.backgroundImage = `url(images/member${i+1}.jpg)`

  i++;
}