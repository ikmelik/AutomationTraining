function ToDoPaper() {
    //it's link to the current istance...
    let that = this;
    this.itemsType='all';
    this.todoItems = [];
    this.todoItemsRender = [];

    this.getJsonData = function () {
        $.getJSON("todo.json", function (data) {
            if (data.data) {
                for (let i = 0; data.data.length > i; i++) {
                    addTodoItem(data.data[i]);
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

setTimeout(function () {
    viewTodoList('completed');
    setTimeout(function () {
        editTodoItem(1, '44444');
        setTimeout(function () {
            addTodoItem({id:4,text:'blah', completed:false});
            setTimeout(function () {
                deleteTodoItem(4);

            },1000);
        },1000);

    },1000);

},1000);







