addEventListener("load",()=>{
  const toggle = document.querySelector(".toggle");
  const gnb = document.querySelector('.gnb');

  toggle.addEventListener("click",(e)=>{
    e.preventDefault(); //A요소의 링크기능을 제거
    const gnb = document.querySelector('.gnb');
    gnb.classList.toggle("on"); //클릭이벤트가 발생되면 on클래스를 추가 또는 제거
  })

  //브라우저 크기가 변경되면 실행되는 이벤트
  addEventListener("resize",()=>{
const wWidth = window.innerWidth;
if(wWidth > 768){
  gnb.classList.remove("on");
}


    }
  );
});