// Get DOM elements and assert their types
const input = document.getElementById('taskInput') as HTMLInputElement;
const btn = document.getElementById('addTaskBtn') as HTMLButtonElement;
const taskList = document.getElementById('taskList') as HTMLUListElement;

// Handle button click
btn.addEventListener('click', () => {
    addTask(input.value);
    input.value = '';
});

// Add task function
function addTask(task: string): void {
    if (task.trim() === '') return;

    // Create list item and span
    const li = document.createElement('li');
    const span = document.createElement('span');
    span.textContent = task;

    // Create Edit button
    const editBtn = document.createElement('button');
    editBtn.className = 'edit-btn';
    editBtn.innerHTML = '<i class="fas fa-pen"></i>';
    editBtn.addEventListener('click', () => updateTask(span));

    // Create Delete button
    const deleteBtn = document.createElement('button');
    deleteBtn.className = 'delete-btn';
    deleteBtn.innerHTML = '<i class="fas fa-trash"></i>';
    deleteBtn.addEventListener('click', () => deleteTask(li));

    // Group buttons in a container
    const btnGroup = document.createElement('div');
    btnGroup.className = 'task-buttons';
    btnGroup.appendChild(editBtn);
    btnGroup.appendChild(deleteBtn);

    // Add elements to list item
    li.appendChild(span);
    li.appendChild(btnGroup);

    // Add list item to the task list
    taskList.appendChild(li);
}

// Delete task
function deleteTask(taskElement: HTMLLIElement): void {
    taskElement.remove();
}

// Update task
function updateTask(taskSpan: HTMLSpanElement): void {
    const newText: string | null = prompt('Edit your task:', taskSpan.textContent || '');
    if (newText !== null && newText.trim() !== '') {
        taskSpan.textContent = newText;
    }
}
