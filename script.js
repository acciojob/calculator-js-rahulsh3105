let num = '';
let answer=''
// $('button').click(()=>{
// console.log($('button').attr('value'))
// })
function add(value) {
console.log(value)
num = num+value;
document.getElementById('input').value = num;
}
function ans() {
answer = eval(num);
document.getElementById('input').value = answer;
answer=''
num=''
}
function clr(){
num='';
document.getElementById('input').value = "";
}