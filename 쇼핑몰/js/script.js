function loadItems(){
  return fetch('./data.json') 
  .then(res => res.json())
  .then(json => json.items)
}
//loadItems();

//주어진 항목으로 목록 엡데이트

function displayItems(items){
  const container = document.querySelector('.items');
  //innerHTML속성을 이용하여 container요소안에 내용을 채워줍니다.
  container.innerHTML = items.map(item => createHTMLString(item)).join('');
  //이때 매개변수로 전달 받은 items data.json에 담겨있는 items정보를 참조합니다.
  //.map()메서드를 이용하여 items 배열에 담겨있는 정보를 순차적으로 전달하여 creatHTMLString함수의 인자값으로 전달하고 join메서드를 이용하여 모든 요소를 하나의 문자열로 만들어 줍니다.
}

//주어진 데이터 항목에서 HTML 목록 항목 만들기

function createHTMLString(item){
  return `<li class="item">
  <img src="${item.image}" alt="${item.type}" class="item__thumbnail" />
  <span class="item__description">${item.gender}, ${item.size}</span>
  </li>`;
  
}

function setEventListeners(items){
  const logo = document.querySelector(".logo");
  const buttons = document.querySelector(".buttons");

  //로고를 클릭하면 displaytems함수를 호출 인자값으로 items(목록데이터 전체)를 전달
  logo.addEventListener("click", () => displayItems(items));

  //buttons그룹에 클릭이벤트가 발생하면 onbuttonclick함수 호출 인자값으로 event객체와 items(목록 데이터)를 전달

  //displayItems함수의 인자값으로 event.target의 data-key값과 items의 프로퍼티 이름이 일치하는 값을
  //찾고 data-value값과 item의 해당 프로처피 값이 일피하는지 확인하여 일치하면 displayitems의 인자로 전달합니다.
  buttons.addEventListener("click", (event) => onButtonClick(event, items));
}

function onButtonClick(event, items){
  //event.target = 클릭한 요소
  const dataset = event.target.dataset;
  //변수 key에 data-key속성 값을 할당
  const key = dataset.key;
  const value = dataset.value;

  if(key == null || value == null) return;


  displayItems(items.filter(item => item[key] === value))

}

//loadItems함수 호출
loadItems()
.then(items => {
  console.log(items)
  displayItems(items);
  setEventListeners(items);
})
.catch(console.log);