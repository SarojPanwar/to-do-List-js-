const taskInput=document.getElementById("input");
const addBtn=document.getElementById("btn");
const taskList= document.getElementById("task-list");

addBtn.addEventListener("click",addTask);
taskInput.addEventListener("keypress",function event(){
    if(event.key==="Enter"){
        addTask();
    }
       
});


function addTask(){
    const taskText = taskInput.value.trim();
    if(taskText==="")return;
        
    // create list item
    const li = document.createElement("li");
    li.textContent=taskText;
    li.addEventListener("click", ()=>{
        li.classList.toggle("completed");
    });

      // Add number based on current count
  const number = taskList.children.length + 1;
  li.textContent = number + ". " + taskText;

    // delete buttn
    const deleteBtn=document.createElement("button");
    deleteBtn.textContent="Delete";
    deleteBtn.style.marginleft="10px";
    deleteBtn.addEventListener("click",()=>{
        taskList.removeChild(li);
    });

    li.appendChild(deleteBtn);
    taskList.appendChild(li);
    taskInput.value = "";
}