function ToDoPaper() {
    //it's link to the current istance...
    let that = this;

    this.todoItems = [];
    this.getJsonData = function () {
        $.getJSON("todo.json", function (data) {
            if (data.data) {
                for (let i = 0; data.data.length > i; i++) {
                    addTodoItem(that, data.data[i]);
                    console.log(that.todoItems);
                }
            }
        });
    }
    this.setJsonData = function(){
        let jsonString = JSON.stringify(this.todoItems);
        //@todo here is should be jquery json put function, but I don't know what exactly function should be...
    }
}
let todoItemsOjb = new ToDoPaper();
todoItemsOjb.getJsonData();
todoItemsOjb.setJsonData();