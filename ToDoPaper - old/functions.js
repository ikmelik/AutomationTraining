function validityCheck(todoItems, toDoItem) {
    //check if id item exists
    if (!toDoItem.id || !Number.isInteger(toDoItem.id)) {
        console.log('id does not exist or is not integer')
        return false;
    }

    //check unique id
    for (i = 0; i < todoItems.length; i++) {
        if (todoItems[i].id == toDoItem.id) {
            console.log('id is not unique')
            return false;
        }
    }

    //check if text item exists
    if (!toDoItem.text || typeof toDoItem.text != "string" || toDoItem.text == "") {
        console.log('text field does not exist or empty or is not text')
        return false;
    }
//check if completed exists
    if (!toDoItem.completed || typeof toDoItem.completed != "boolean") {
        console.log('field completed should be boolean')
        return false;
    }
    return true;
}

function addTodoItem(todoItem) {
    if (validityCheck(todoItems, todoItem)) {
        todoItems.push(todoItem);
    }
}

function viewTodoList(itemsType) {
    var newList = [];
    for (i = 0; i < todoItems.length; i++) {
        if (itemsType == 'completed' && todoItems[i].completed == true) {
            newList.push(todoItems[i]);
        } else if (itemsType == 'not completed' && todoItems[i].completed == false) {
            newList.push(todoItems[i]);
        } else if (itemsType == 'all') {
            newList.push(todoItems[i]);
        }
    }
    return newList;
}

function editTodoItem(todoItemId, newText) {
    if (newText != '' && typeof newText == "string") {
        for (i = 0; i < todoItems.length; i++) {
            if (todoItemId == todoItemId[i].id) {
                todoItemId[i].text = newText;
                return todoItemId[i];
            }
        }
    }
    return false;
}


function deleteTodoItem(todoItemId) {
           for (i = 0; i < todoItems.length; i++) {
            if (todoItemId == todoItemId[i].id) {
                delete todoItemId[i];
                return true;
            }
        }
        return false;
}

function completeTodoItem(todoItemId) {
    if (typeof toDoItem.completed=='boolean') {
        for (i = 0; i < todoItems.length; i++) {
            if (todoItemId == todoItemId[i].id) {
                todoItemId[i].completed = true;
                return todoItemId[i];
            }
        }
    }
    return false;
}
