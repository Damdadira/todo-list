const items = document.querySelector('.items');
const input = document.querySelector('.search__input');
const addBtn = document.querySelector('.searchAdd__button');
const deleteAllBtn = document.querySelector('.footer__button');

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

  // const item = document.createElement('div');
  // item.setAttribute('class', 'item');

  // const name = document.createElement('span');
  // name.setAttribute('class', 'item__name');
  // name.innerText = text; //span에는 전달받은 텍스트를 지정해줘야 하기 때문에 지정된 텍스트를 할당

  // const deleteBtn = document.createElement('button');
  // deleteBtn.setAttribute('class', 'item__delete');
  // deleteBtn.innerHTML = '<i class="fa-solid fa-trash-can"></i>';
  // deleteBtn.addEventListener('click', () => {
  //   items.removeChild(itemRow);
  // });

  // const itemDivider = document.createElement('div');
  // itemDivider.setAttribute('class', 'item__divider');

  // //item에 span,deleteBtn 추가
  // item.appendChild(name);
  // item.appendChild(deleteBtn);

  // itemRow.appendChild(item);
  // itemRow.appendChild(itemDivider);

  // return itemRow;
}

addBtn.addEventListener('click', () => {
  onAdd();
});

input.addEventListener('keypress', (event) => {
  // console.log('key');
  if (event.key === 'Enter') {
    onAdd();
  }
});

items.addEventListener('click', (event) => {
  // console.log('he');
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
