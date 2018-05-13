const list = document.getElementById('todo-items').firstElementChild;


function addToDoItemDom(item) {
    let checkedText = item.completed ? 'checked="checked" disabled' : "",
        editInputVisible = (todoItemsOjb.todoItemsInEdit[item.id]) ? "block" : "none",
        editingText = (todoItemsOjb.todoItemsInEdit[item.id]) ? todoItemsOjb.todoItemsInEdit[item.id] : item.text,
        editingValue = (todoItemsOjb.todoItemsInEdit[item.id]) ? 'Save' : 'Edit',
        innerData = `<label for="${item.id}-item"> id is ${item.id}, text is  ${item.text}</label>
         <input type="checkbox" name="${item.id}-item" id="${item.id}-item" ${checkedText}>
         <input type="text"  style="display:${editInputVisible}" id ="${item.id}-input" value="${editingText}">
         <input type="button" name = "edit" value="${editingValue}" /> <input type="button" name="delete" value="Delete" />`,
        liElement = document.createElement('li');

    liElement.id = item.id;
    liElement.innerHTML = innerData;
    list.appendChild(liElement);
}

//arguments are absent, because we have the same logic in the viewTodoList function
function viewTodoListDom() {
    //clear list of items before render
    list.innerHTML = "";
    for (let i = 0; todoItemsOjb.todoItemsRender.length > i; i++) {
        addToDoItemDom(todoItemsOjb.todoItemsRender[i]);
    }
}

function editTodoItemDom(todoItemId, newText) {
    let liElement = document.getElementById(todoItemId);
    if (liElement) {
        let labelElement = liElement.firstElementChild;
        labelElement.innerHTML = ` id is ${todoItemId}, text is  ${newText}`;
        return true;
    }
    console.log('element is not found :(');
    return false;

}

function deleteTodoItemDom(todoItemId) {
    //let deleteButton=
    let liElement = document.getElementById(todoItemId);
    if (liElement) {
        liElement.remove();
        return true;
    }
    console.log('element is not found :(');
    return false;
    // deleteTodoItem()
    // list.removeChild=
}
