window.addEventListener("scroll", () => {
  //section의 left값을 스크롤한 거림나큼 마이너스 값으로적용
  document.querySelector("section").style.left = - (scrollY) + "px";
})

//article요소의 갯수 저장

const artricles = document.querySelectorAll("article");
const numAc = artricles.length;

//article요소의 총 넓이 계산
const widSec = 200 * numAc;

//article요소의 총 넓이 계산(article이 펼쳐지면 넓이가 600px늘어남)

const widTotal = widSec + 600;

//section의 넓이 설정

document.querySelector("section").style.width = widTotal+ "px";

document.body.style.height = widSec +"px";

//문서의 스크롤 거리를 widSec의 널이만큼 변경해서 처음 문서가 불러와지면 마지막 위치로 스크롤 이동

scrollTo(
  {
    top:widSec,
    behavior:"smooth"
  }
)