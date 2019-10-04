/// <reference path="./utilities.ts" />

console.log("models linked up");

interface ToDo {
    content: string,
    date: Date,
    priority: number
}

interface ToDoList {
    title: string,
    date_created: Date,
    items: Array<ToDo>
}

interface User {
    username: string,
    id: string,
    password: string,
    email: string,
    date_registered: Date,
    to_dos?: Array<ToDoList>
}

class ToDo extends Model implements ToDo {

}

class ToDoList extends Model implements ToDoList {

}

class User extends Model implements User {

}