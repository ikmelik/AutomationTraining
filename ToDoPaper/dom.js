const list = document.getElementById('todo-items').firstElementChild;


function addToDoItemDom(todoItemsOjb) {
    let checkedText = todoItemsOjb.completed?'checked="checked"':"",
        innerData = `<label for="${todoItemsOjb.id}-item"> id is ${todoItemsOjb.id}, text is  ${todoItemsOjb.text}</label>
         <input type="checkbox" name="${todoItemsOjb.id}-item" id="${todoItemsOjb.id}-item" ${checkedText}>`,
        liElement = document.createElement('li');

    liElement.id = todoItemsOjb.id;
    liElement.innerHTML=innerData;
    list.appendChild(liElement);
}
//arguments are absent, because we have the same logic in the viewTodoList function
function viewTodoListDom() {
    list.innerHTML="";
    for(let i =0; todoItemsOjb.todoItemsRender.length>i; i++){
        addToDoItemDom(todoItemsOjb.todoItemsRender[i]);
    }
}

function editTodoItemDom(todoItemId, newText) {
    let liElement = document.getElementById(todoItemId);
    if(liElement){
        let labelElement = liElement.firstElementChild;
        labelElement.innerHTML=` id is ${todoItemId}, text is  ${newText}`;
        return true;
    }
    console.log('element is not found :(');
    return false;

}

function deleteTodoItemDom(todoItemId) {
    let liElement = document.getElementById(todoItemId);
    if(liElement){
        liElement.remove();
        return true;
    }
    console.log('element is not found :(');
    return false;
    // deleteTodoItem()
    // list.removeChild=
}
