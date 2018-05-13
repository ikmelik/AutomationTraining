const typeElement = document.getElementById('type-wrapper'),
      newItemName = document.getElementById('new-item'),
      newItemSubmit = document.getElementById('save-button');



typeElement.addEventListener("click", typeHandler);
newItemName.addEventListener("keyup", newElementHandler);
newItemSubmit.addEventListener("click", newElementHandler);
list.addEventListener("click", listElementClickHandler);

function typeHandler(event) {
    if (event.target.type === "radio") {
        viewTodoList(event.target.value)
    }
}

function newElementHandler(event) {
    let todoItem = {};
    if (event.type ==="click" || (event.type ==="keyup" &&  event.keyCode === 13)) {
        todoItem.id = getUniqueId();
        todoItem.completed = false;
        todoItem.text = newItemName.value;
        addTodoItem(todoItem);
        newItemName.value = '';
    }
}
function  listElementClickHandler(event) {

    if(event.target.type  ==="checkbox"){
        completeTodoItem(event.target.parentNode.id);
    } else if (event.target.type  ==="button" && event.target.name  ==="delete"){
        deleteTodoItem(event.target.parentNode.id);

    }  else if (event.target.type  ==="button" && event.target.name  ==="edit"){
        let inputElement = document.getElementById(event.target.parentNode.id+'-input');

        if(event.target.value === 'Save'){
            delete todoItemsOjb.todoItemsInEdit[event.target.parentNode.id];
            editTodoItem(event.target.parentNode.id, inputElement.value);

        } else{
            event.target.value = 'Save';
            todoItemsOjb.todoItemsInEdit[event.target.parentNode.id]=inputElement.value;
            inputElement.style.display = "block";
            inputElement.onkeyup = function(e){
                todoItemsOjb.todoItemsInEdit[event.target.parentNode.id]=e.target.value;
            };
        }


    }
    
}