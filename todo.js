const addBtn=document.getElementById("addBtn");
const error=document.getElementById("error")
const saveBtn = document.getElementById("addTodo");
const containerForm=document.getElementById("container");
// document.getElementById("")
const todoList=[];
let message="";

addBtn.addEventListener("click",()=>{
if(containerForm.classList.contains("hidden")){
    containerForm.classList.remove("hidden");
    containerForm.classList.add("flex");
}
else{
       containerForm.classList.remove("flex");
    containerForm.classList.add("hidden");
}
});
saveBtn.addEventListener("click",(event)=>{
event.preventDefault();
saveTodo();
});

function saveTodo(){
    error.innerHTML="";
    const h1=document.createElement("h1");
    const todo=document.getElementById("todo").value;
const order=document.getElementById("order").value;
if(todo!==""){
    const saveTodo={
        myTodo:todo,
       importence:order,
    }
    todoList.push(saveTodo)
    message="";
}
else{
    message="لطفا پلان امروز را اضافه کنید"
    h1.textContent=message;
    error.appendChild(h1);
}
}



function ShowTodo(todo){
    
}