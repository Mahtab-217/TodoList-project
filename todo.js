const addBtn=document.getElementById("addBtn");
const error=document.getElementById("error")
const saveBtn = document.getElementById("addTodo");
const containerForm=document.getElementById("container");
const container=document.getElementById("todoContainer");
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
container.innerHTML="";
todoList.map(todo=>{
    ShowTodo(todo);
})
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
       completed: false,
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
const div= document.createElement("div");
 container.appendChild(div);
 div.classList.add("todoContainer");
 div.classList.add("py-3");
 div.classList.add("px-5");
 div.classList.add("border");
 div.classList.add("w-9/12");
 div.classList.add("max-w-4xl");

 const h1=document.createElement("h1")
 h1.textContent = todo.myTodo;
 const circle=document.createElement("div");
 if(todo.importence==="important"){
   circle.classList.add("h-4");
   circle.classList.add("w-4");
   circle.classList.add("rounded-full");
   circle.classList.add("bg-red-700");
 }
 else if(todo.importence==="optional"){
 circle.classList.add("h-4");
 circle.classList.add("w-4");
 circle.classList.add("rounded-full");
 circle.classList.add("bg-green-700");
 }
 else{
 circle.classList.add("h-4");
 circle.classList.add("w-4");
 circle.classList.add("bg-blue-700");
 circle.classList.add("rounded-full");
 }
 div.append(circle,h1);
}