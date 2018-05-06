function validityCheck(todoItemsOjb, toDoItem) {
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

function addTodoItem(todoItemsOjb,todoItem) {
    if (validityCheck(todoItemsOjb, todoItem)) {
        todoItemsOjb.todoItems.push(todoItem);
    }
}

function viewTodoList(todoItemsOjb,itemsType) {
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
    return newList;
}

function editTodoItem(todoItemsOjb, todoItemId, newText) {
    if (newText != '' && typeof newText == 'string') {
        for (let i = 0; i < todoItemsOjb.todoItems.length; i++) {
            if (todoItemId == todoItemId[i].id) {
                todoItemId[i].text = newText;
                return todoItemId[i];
            }
        }
    }
    return false;
}


function deleteTodoItem(todoItemsOjb,todoItemId) {
           for (let i = 0; i < todoItemsOjb.todoItems.length; i++) {
            if (todoItemId == todoItemId[i].id) {
                delete todoItemId[i];
                return true;
            }
        }
        return false;
}

function completeTodoItem(todoItemsOjb, todoItemId) {
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
