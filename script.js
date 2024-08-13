let todoList = [];
let completedList = [];

// render todo list
function renderTodoList() {
    const todoListElement = document.getElementById('todo-list');
    todoListElement.innerHTML = '';
    todoList.forEach((todo, index) => {
        const todoItem = document.createElement('li');
        todoItem.textContent = todo.text;
        todoItem.dataset.index = index;
        if (todo.completed) {
            todoItem.classList.add('done');
        }
        const completeButton = document.createElement('button');
        completeButton.textContent = 'Complete';
        completeButton.addEventListener('click', () => {
            completeTodoItem(index);
        });
        todoItem.appendChild(completeButton);
        todoListElement.appendChild(todoItem);
    });
}

// render completed list
function renderCompletedList() {
    const completedListElement = document.getElementById('completed-list');
    completedListElement.innerHTML = '';
    completedList.forEach((todo, index) => {
        const todoItem = document.createElement('li');
        todoItem.textContent = todo.text;
        todoItem.dataset.index = index;
        todoItem.classList.add('done');
        completedListElement.appendChild(todoItem);
    });
}

// add todo item
function addTodoItem(text) {
    const todo = {
        text,
        completed: false
    };
    todoList.push(todo);
    renderTodoList();
}

// complete todo item
function completeTodoItem(index) {
    const todo = todoList.splice(index, 1)[0];
    todo.completed = true;
    completedList.push(todo);
    renderTodoList();
    renderCompletedList();
}

// clear task list
function clearTaskList() {
    completedList = [];
    renderCompletedList();
}

// event listeners
document.getElementById('add-todo-btn').addEventListener('click', (e) => {
    e.preventDefault();
    const text = document.getElementById('new-todo').value.trim();
    if (text) {
        addTodoItem(text);
        document.getElementById('new-todo').value = '';
    }
});

document.getElementById('clear-task-list-btn').addEventListener('click', () => {
    clearTaskList();
});

// initial render
renderTodoList();
renderCompletedList();