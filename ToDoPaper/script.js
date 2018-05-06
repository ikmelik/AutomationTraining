function ToDoPaper() {
    //it's link to the current istance...
    let that = this;

    this.todoItems = [];
    this.setJsonData = function () {
        $.getJSON("todo.json", function (data) {
            if (data.data) {
                for (let i = 0; data.data.length > i; i++) {
                    addTodoItem(that, data.data[i]);
                    console.log(that.todoItems);
                }
            }
        });
    }
}
let todoItemsOjb = new ToDoPaper();
todoItemsOjb.setJsonData()
