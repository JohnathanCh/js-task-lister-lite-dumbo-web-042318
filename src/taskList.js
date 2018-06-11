//Lists created tasks
const list = document.getElementById("tasks")
console.log(list)

function createTask(value) {
  const li = document.createElement('li')
  li.innerText =  value
  li.className = 'list'
  list.appendChild(li)

}

class TaskList {


  addTask() {
    //will add task based on user input after listening for a click of the submit button



  }


}
