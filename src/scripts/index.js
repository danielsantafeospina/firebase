

console.log('webpack starterkit');

//UI
const inputTask = document.querySelector('#taskInput');
const taskUl = document.querySelector('#taskContainer');

//DB
connectDB();
const database = firebase.database();
const taskRef = database.ref('task');
taskRef.on('value', paintTasks);
update()


function connectDB(){
  // Your web app's Firebase configuration
   var firebaseConfig = {
    apiKey: "AIzaSyDSgoRyGlUInqjfDXNtHOC5N-GwNPdTOmg",
    authDomain: "todolist2-fe286.firebaseapp.com",
    databaseURL: "https://todolist2-fe286.firebaseio.com",
    projectId: "todolist2-fe286",
    storageBucket: "todolist2-fe286.appspot.com",
    messagingSenderId: "84115401173",
    appId: "1:84115401173:web:645fb6ec005e318a06b55c"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
}

function addTask(){
  const name = inputTask.value;
  
  taskRef.push({
    name: name,
    isComplete: false
  });
  
  inputTask.value = '';
}

function update(){
  taskRef.update({
     "-M6ly2f5KF1yRQHndA2h" : {
        name : "nuevo valor ",
        isCopleted: false
     }
  })
}

function paintTasks(data){
	const result = data.val();
  let taskLi = ""  
  for(var key in result){
     const task = result[key];
     taskLi +=  `<li>${task.name}</li>`;
  }
  taskUl.innerHTML = taskLi;
}



$(document).ready(function() {
    $('div').hover(
        function () {
            
            $(this).css({"background-color":"red"});
        }, 
        function () {
            
            $(this).css({"background-color":"blue"});
        }
    );
});
