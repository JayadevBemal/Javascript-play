



let arr = [];

function store() {
let x = document.querySelector('#inputtext')
let idata = x.value ;
let y = document.querySelector('#date')
let idate = y.value;
arr.push({task: idata , date:idate})
// localStorage.setItem('todo',JSON.stringify(arr))


// localStorage.setItem('date',JSON.stringify(arr2))

  document.querySelector('#inputtext').value = '';
  document.querySelector('#date').value = '';


}


function display() {
//  let fetch = localStorage.getItem('todo');
//  JSON.parse(fetch)
//  let fetch2 = localStorage.getItem('date');
//  JSON.parse(fetch2)
let newhtml = '';


 document.querySelector('#display').innerText = '';
 for (let i = 0; i < arr.length; i++) {

  let {task,date} = arr[i];

  newhtml = `<span> ${task} </span> <span>${date}</span><button class = "btn btn2" onclick = "arr.splice(${i},1);display()" >Delete</button> `
  document.querySelector('#display').innerHTML += newhtml;             
 }
 
 }

