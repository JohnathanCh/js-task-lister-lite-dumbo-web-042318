// taskForm.onsubmit = function(e) {alert(e.value)};
// taskForm.onsubmit = fun()

// taskForm.addEventListener('submit', submitForm)

// function fun(e) {
//   e.preventDefault();
//   const getTask = document.getElementById("new-task-description")
//   let value =  getTask.value
//   console.log(e);
//   console.log(value);
//   createTask(value)
//   getTask.placeholder = 'description'
// }


const taskForm = document.getElementById("create-task-form")
taskForm.addEventListener('submit', submitForm)
// taskForm.addEventListener('submit', submitForm)
// function newTask(e) {
//   console.log("yo")
//   e.preventDefault();
//   let idk = new Task;
//   idk.submitForm(e)
//
// }

  function submitForm(e) {
    e.preventDefault();
    const getTask = document.getElementById("new-task-description")
    let value =  getTask.value
    console.log(e);
    console.log(value);
    createTask(value)
    getTask.value =  ''
  }


// class Task {
//    // eventListener () {
//    //   taskForm.addEventListener('submit', submitForm)
//    // }
//
//    submitForm(e) {
//      e.preventDefault();
//      const getTask = document.getElementById("new-task-description")
//      let value =  getTask.value
//      console.log(e);
//      console.log(value);
//      createTask(value)
//      getTask.placeholder = 'description'
//    }
//
//
//
//
// }
