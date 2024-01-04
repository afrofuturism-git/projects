document.addEventListener('DOMContentLoaded', ()=>{
    const addTask = document.getElementById('addtask');
    const taskList = document.getElementById('taskContainer');
    const completedTaskList = document.getElementById('completedTasks');
    let inputContainer = document.getElementById('add')


function add(){
    li = document.createElement('li')
    input = document.createElement('input')
        input.type = 'checkbox'
    input.addEventListener('change', checked)
    label = document.createElement('label');
    label.innerHTML = inputContainer.value;
    let button = document.createElement('button')
        button.id = 'delete'
        button.addEventListener('click', ()=>deleteButton(button))
    img= document.createElement('img')
        img.src = 'img/download.png'
    
    button.appendChild(img)

    li.appendChild(input)
    li.appendChild(label)
    li.appendChild(button)

    taskList.appendChild(li)


}

function deleteButton(button){
    listItem=button.parentNode
    listItem.remove()
}


function checked(event){
     let checkbox = event.target
    listItem = checkbox.parentNode

    if(checkbox.checked){
        listItem.classList.add('completed')
       completedTaskList.appendChild(listItem)
       console.log(taskList)
    }
    else if(!checkbox.checked){
        taskList.appendChild(listItem)
        listItem.classList.remove('completed')
    }
}
    addTask.addEventListener('click', add)
})