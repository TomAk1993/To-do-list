const formInput = document.getElementById('new-task-input');
const addTask = document.getElementById('new-task-submit');
const taskText = document.getElementById('text')
const clear = document.getElementById('clear')

addTask.addEventListener('click', function(e){
    e.preventDefault();
    const li = document.createElement('li')
    li.innerHTML = formInput.value;
    taskText.appendChild(li);
})

clear.addEventListener('click', function(e){
    e.preventDefault();
    taskText.remove();
})


