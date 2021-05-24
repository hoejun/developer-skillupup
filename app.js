let array = [];
let arrayRedo = [];
let stackPos = 0;
let valuebox = document.getElementById('valuebox');

function onload() {
  let inputbox = document.getElementById('inputbox');
  const undoButton = document.getElementById('undoButton');
  const addButton = document.getElementById('addButton');
  const subButton = document.getElementById('subButton');
  const redoButton = document.getElementById('redoButton');

  function showButton() {
    undoButton.disabled = stackPos <= 0;
    // redoButton.disabled = stackPos >= array.length;
  }

  function showDiv() {
    undoButton.disabled = stackPos <= 0;
    redoButton.disabled = arrayRedo.length == 0;

    let sum = array.reduce((a, b) => a + b, 0);

    valuebox.innerHTML = sum;
    inputbox.value = '';
  }

  undoButton.onclick = function () {
    stackPos--;
    const lastMemory = array.pop();
    arrayRedo.push(lastMemory);

    showDiv();
  };

  addButton.onclick = function () {
    stackPos++;
    array.push(Number(inputbox.value));

    showDiv();
  };

  subButton.onclick = function () {
    stackPos++;
    array.push(Number(-inputbox.value));

    console.log(inputbox.value);

    showDiv();
  };

  redoButton.onclick = function () {
    stackPos++;
    array.push(arrayRedo.pop());

    showDiv();
  };

  // undoButton.onclick = handleClick;
  // addButton.onclick = handleClick;
  // subButton.onclick = handleClick;
  // redoButton.onclick = handleClick;
}

// input에 숫자를 입력하고 + 버튼을 클릭하면 결과값에 입력한 숫자 만큼 더해지고 input의 값은 없어진다.
// input에 숫자를 입력하고 - 버튼을 클릭하면 결과값에 입력한 숫자 만큼 빼지고 input의 값은 없어진다.
// input에 유효하지 않은 숫자를 입력하고 +, - 버튼을 클릭하면 동작은 무시 되되고 input의 값은 없어진다.(정수만 입력할 수 있다.)

// undo를 클릭하면 이전 값으로 돌아간다. undo 버튼을 클릭해도 이전 인풋값은 유지 된다.
// redo를 클릭하면 이후 값으로 되돌린다. redo 버튼을 클릭해도 이전 인풋값은 유지 된다.
// undo와 redo는 동작이 가능할때만 활성화 상태가 된다.

// input에 유효한 숫자를 입력하고 +, - 버튼을 클릭했을때 이후 값들은 없어지고 Redo 버튼은 비활성화된다.
// -> 1 입력 후 + : 결과값 1
// -> 2 입력 후 + : 결과값 3
// -> 3 입력 후 + : " 결과값 6
// -> undo 버튼 : 결과값 3
// -> 4 입력 후 + : 결과값 7
// -> undo 버튼 : 결과값 3 -> redo 버튼 활성화
// -> undo 버튼 : 결과값 1
// -> undo 버튼 : 결과갑 0 -> undo 버튼 비활성화
// -> redo 버튼 : 결과갑 1 -> undo 버튼 활성화

// function undoClick(event) {
//   console.log(event);
// }

// function addClick(event) {
//   console.log(event);
// }

// function subClick(event) {
//   console.log(event.addButton);
// }

// function redoClick(event) {
//   console.log(event.addButton);
// }

function handleClick(event) {
  console.log(event);
}
