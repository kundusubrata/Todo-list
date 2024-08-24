
let todos = [];
let counter = 1;

// ----------- State --------------
function createTodo(){
  todos.push({
    title: document.getElementById("input1").value,
  })
  render();
}
function deleteTodo(index) {
  todos.splice(index-1,1);
  render();
}
function editTodo(index){

}


// ---------------- Component -----------------
function createTodoComponent(todo,index){
  
  const parent = document.createElement("div");
  parent.setAttribute("class","todo-list");
  parent.setAttribute("id",`todo-${index+1}`);

  const firstChild = document.createElement("div");
  const title = document.createElement("h3");
  title.textContent = (index+1)+". "+ todo.title;
  firstChild.appendChild(title);
  parent.appendChild(firstChild);

  const secondChild = document.createElement("div");
  // const editBtn = document.createElement("button");
  // editBtn.setAttribute("class","editBtn");
  // editBtn.setAttribute("onclick",`editTodo(${index+1})`)
  // editBtn.innerHTML=`<i class="fa-solid fa-pencil"></i>`
  // secondChild.appendChild(editBtn);
  //
  const delBtn = document.createElement("button");
  delBtn.setAttribute("class", "delBtn");
  delBtn.setAttribute("onclick",`deleteTodo(${index+1})`);
  delBtn.innerHTML =`<i class="fa-regular fa-trash-can"></i>`;
  secondChild.appendChild(delBtn);
  parent.appendChild(secondChild);

  return parent;
}


// ---------------- handle by react --------------
function render(){
  let parent = document.getElementById("todos");
  counter = 1;
  parent.innerHTML = "";
  todos.forEach((element,index) => {
    const div = createTodoComponent(element,index);
    parent.appendChild(div);
    counter = counter + 1;
    document.querySelector("#input1").value = "";
  });
}
