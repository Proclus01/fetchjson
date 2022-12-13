import axios from 'axios';

const url = "https://jsonplaceholder.typicode.com/todos/1";

// Interfaces are used to define the structure of an object
interface Todo {
    id: number;
    title: string;
    completed: boolean;
}

axios.get(url).then(
    response => {
        // This is how we implement our interface in a variable
        const todo = response.data as Todo;

        const id = todo.id;
        const title = todo.title;
        const completed = todo.completed;

        logTodo(id, title, completed);
    }
);

// You add additional information to function paramters
// by introducing a semicolon follwed by a type annotation
const logTodo = (id: number, title: string, completed: boolean) => {
    console.log(`
    The Todo with ID: ${id}
    Has a title of: ${title}
    Is it finished? ${completed}
`);
};