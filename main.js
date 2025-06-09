const items = document.querySelector('.items');
const form = document.querySelector('.new-form');
const input = document.querySelector('.search__input');
const addBtn = document.querySelector('.searchAdd__button');
const deleteAllBtn = document.querySelector('.footer__button');

form.addEventListener('submit', (event) => {
  //submit은 입력이 되자마자 페이지를 다시 로딩하기 때문에 값이 바로 사라짐
  event.preventDefault(); //값을 사라지지 않게 하겠다
  onAdd();
});

function onAdd() {
  //1. 사용자가 입력한 텍스트를 받아옴
  const text = input.value;
  // console.log(text);
  if (text === '') {
    //input이 비어있는데 추가를 누르면 함수를 나가버리겠다
    input.focus();
    return;
  }

  //2. 새로운 아이템을 만든다(테스트 + 삭제 버튼)
  const item = createItem(text);

  //3. items 컨테이너 안에 새로 만든 아이템을 추가
  items.appendChild(item);

  //4.새로 추가된 아이템들이 화면을 가득 채우면 스크롤링
  item.scrollIntoView({ block: 'center' });

  //5. 인풋을 초기화 한다.
  input.value = ''; //초기화
  input.focus(); //포커스를 주지 않으면 다시 입력할 수 없음
}

//html에서 선언한 거 참고하면서 작성
let id = 0; //UUID
function createItem(text) {
  const itemRow = document.createElement('li');
  itemRow.setAttribute('class', 'item__row');
  itemRow.setAttribute('data-id', id);
  itemRow.innerHTML = `
          <div class="item">
            <span class="item__name">${text}</span>
            <button class="item__delete">
              <i class="fa-solid fa-trash-can" data-id=${id}></i>
            </button>
          </div>
          <div class="item__divider"></div>`;
  id++;
  return itemRow;
}

items.addEventListener('click', (event) => {
  const id = event.target.dataset.id;
  if (id) {
    const toBeDeleted = document.querySelector(`.item__row[data-id="${id}"]`);
    toBeDeleted.remove();
  }
});

deleteAllBtn.addEventListener('click', (event) => {
  const target = event.target;
  if (target) {
    const allDeleted = document.querySelector('.items');
    allDeleted.innerHTML = '';
  }
});
