'use strict';

const items = document.querySelector('.items');
const input = document.querySelector('.search__input');
const addBtn = document.querySelector('.searchAdd__button');

function onAdd() {
  //1. 사용자가 입력한 텍스트를 받아옴
  const text = input.value;
  console.log(text);

  //2. 새로운 아이템을 만든다(테스트 + 삭제 버튼)
  const item = createItem();

  //3. items 컨테이너 안에 새로 만든 아이템을 추가
  items.appendChild(item);

  //4. 인풋을 초기화 한다.
  input.value = ''; //초기화
  input.focus(); //포커스를 주지 않으면 다시 입력할 수 없음
}

addBtn.addEventListener('click', () => {
  onAdd();
});
