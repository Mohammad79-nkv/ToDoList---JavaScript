const addBtn = document.querySelector('.add-todo');
const addInput = document.querySelector('.todo-input');
const todoList = document.querySelector('.todo-list');
const filterTodo = document.querySelector('.todo-filter');


addBtn.addEventListener('click', addTodo);
todoList.addEventListener('click', checkRemove);
filterTodo.addEventListener('click', filter);

function addTodo(e){
    e.preventDefault();
    const todo = document.createElement('div');
   if(addInput.value !== ''){
    todo.classList.add('todo');
    todo.innerHTML = `
        <li>${addInput.value}</li> 
        <span class="todo-icons">
            <i class="far fa-check-circle"></i>
            <i class="far fa-trash-alt"></i>
        </span>`;
    todoList.appendChild(todo);
   }
    addInput.value = '';
}



function checkRemove(e) {
    const classList = [...e.target.classList];
    const item = e.target.parentElement.parentElement;
    // console.log(classList[1])
    if(classList[1] === "fa-trash-alt"){
        item.remove();
    }else if(classList[1] === "fa-check-circle"){
        item.children[0].classList.toggle('completed');
        
    }
}



function filter(e){
    const item = [...todoList.childNodes];
    const div = item.forEach(tag =>{
        const tagElements = [...tag.childNodes]
        const li = tagElements[1]
        const todos = [...todoList.childNodes]
            switch(e.target.value){
                case "All":
                    li.parentElement.style.display = "flex"
                    break;
                case "Completed":
                    if(li.classList.contains("completed")){
                        li.parentElement.style.display = "flex";
                    }else{
                        li.parentElement.style.display = "none";
                    }
                    break;
                case "Uncompleted":
                    if(li.classList.contains("completed")){
                        li.parentElement.style.display = "none";
                    }else{
                        li.parentElement.style.display = "flex";
                    }
                    break;
            }
    })
    console.log(e.target.value)
    
}