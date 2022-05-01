const formInput = document.getElementById('new-task-input');
const addTask = document.getElementById('new-task-submit');
const taskText = document.getElementById('task-text')

addTask.addEventListener('click', function(e){
    e.preventDefault();
    const p = document.createElement('p')
    p.innerHTML = formInput.value;
    taskText.appendChild(p);
    
})
