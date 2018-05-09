function validityCheck(toDoItem) {
    //check if id item exists
    if (!toDoItem.id || !Number.isInteger(toDoItem.id)) {
        console.log('id does not exist or is not integer')
        return false;
    }

    //check unique id
    for (let i = 0; i < todoItemsOjb.todoItems.length; i++) {
        if (todoItemsOjb.todoItems[i].id == toDoItem.id) {
            console.log('id is not unique')
            return false;
        }
    }

    //check if text item exists
    if (!toDoItem.text || typeof toDoItem.text != 'string' || toDoItem.text == '') {
        console.log('text field does not exist or empty or is not text')
        return false;
    }
//check if completed exists
    if (typeof toDoItem.completed != 'boolean') {
        console.log('field completed should be boolean')
        return false;
    }
    return true;
}

function addTodoItem(todoItem) {
    if (validityCheck(todoItem)) {
        todoItemsOjb.todoItems.push(todoItem);
        addToDoItemDom(todoItem);
    }
    viewTodoList(todoItemsOjb.itemsType);
}

function viewTodoList(itemsType) {
    todoItemsOjb.itemsType=itemsType;
    let newList = [];
    for (let i = 0; i < todoItemsOjb.todoItems.length; i++) {
        if (itemsType == 'completed' && todoItemsOjb.todoItems[i].completed == true) {
            newList.push(todoItemsOjb.todoItems[i]);
        } else if (itemsType == 'not completed' && todoItemsOjb.todoItems[i].completed == false) {
            newList.push(todoItemsOjb.todoItems[i]);
        } else if (itemsType == 'all') {
            newList.push(todoItemsOjb.todoItems[i]);
        }
    }
    todoItemsOjb.todoItemsRender = newList;
    viewTodoListDom();
}

function editTodoItem(todoItemId, newText) {
    if (newText != '' && typeof newText == 'string') {
        for (let i = 0; i < todoItemsOjb.todoItems.length; i++) {
            if (todoItemId == todoItemsOjb.todoItems[i].id) {
                todoItemsOjb.todoItems[i].text = newText;
                editTodoItemDom(todoItemId, newText);
                return todoItemsOjb.todoItems[i];
            }
        }
    }
    return false;
}


function deleteTodoItem(todoItemId) {
           for (let i = 0; i < todoItemsOjb.todoItems.length; i++) {
            if (todoItemId == todoItemsOjb.todoItems[i].id) {
                deleteTodoItemDom(todoItemId)
                delete todoItemsOjb.todoItems[i];
                return true;
            }
        }
        return false;
}

function completeTodoItem(todoItemId) {
    if (typeof toDoItem.completed=='boolean') {
        for (let i = 0; i < todoItemsOjb.todoItems.length; i++) {
            if (todoItemId == todoItemId[i].id) {
                todoItemId[i].completed = true;
                return todoItemId[i];
            }
        }
    }
    return false;
}
