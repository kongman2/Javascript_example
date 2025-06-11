const op1 = document.querySelector('#op1')
const op2 = document.querySelector('#op2')
// const selectBox = document.querySelector('#opar')
const selectBox = document.querySelector('#oper')
// 에러: Uncaught TypeError: Cannot read properties of null (reading 'addEventListener')
// 에러 이유: 오타나서 selectbox값이 null이됨 (opar -> oper로 변경)
const answer = document.querySelector('#answer')

selectBox.addEventListener('change', (e) => {
   let result = 0
   var value = selectBox.options[selectBox.selectedIndex].value

   switch (value) {
      case 'plus':
         result = Number(op1.value) + Number(op2.value)
         break
      case 'minus':
         result = Number(op1.value) - Number(op2.value)
         break
   }

   answer.textContent = result
})
