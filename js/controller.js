angular
    .module("tictactoe")
    .controller("tictactoe", tictactoe);

    function tictactoe(){
        var self = this;


self.listholes = [
        {
            cellNumber: "one"
        },
        {
            cellNumber: "two"
        },
        {
            cellNumber: "three"
        },
        {
            cellNumber: "four"
        },
        {
            cellNumber: "five"
        },
        {
            cellNumber: "six"
        },
        {
            cellNumber: "seven"
        },
        {
            cellNumber: "eight"
        },
        {
            cellNumber: "nine"
        },
        

    ] //end of kitties array
    }; // end of Kitties controller function
    

// angular
//     .module("todoApp")
//     .controller("TodosController", TodosController);


// TodosController.$inject = ['$firebaseArray', '$firebaseObject'];


//     function TodosController($firebaseArray, $firebaseObject){
//         var self = this;

//         self.text; //bound to input box for new todo
//         self.addTodo = addTodo;
//         self.deleteTodo = deleteTodo;
//         self.completedTodos = completedTodos;
//         self.remainingTodos = remainingTodos;
//         self.search; //bound to input box
//         self.todoList = getToDosList();

//         function addTodo(){
//             self.todoList.$add({task: self.text, done: false});
//             self.text = null;
//         }

//         function getToDosList(){
//             var ref = new Firebase('https://nickstodolist.firebaseio.com/todos');
//             var todos = $firebaseArray(ref);

//             console.log(todos);
//             return todos;
//         } 


//         function deleteTodo(todo){
//             self.todoList.$remove(todo);
//         }

//         function completedTodos(){ var count = 0; for(var i = 0; i < self.todoList.length; i++){ if(self.todoList[i].done){ count++; } } return count; }

//         function remainingTodos(){ var count = 0; for(var i = 0; i < self.todoList.length; i++){ if(self.todoList[i].done === false){ count++; } } return count; }



//     }







