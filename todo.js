const addBtn=document.getElementById("addBtn");
const todo=document.getElementById("todo").value;
const order=document.getElementById("order").value;
const saveBtn = document.getElementById("addTodo");
const containerForm=document.getElementById("container");
const todoList=[];

addBtn.addEventListener("click",()=>{
if(containerForm.classList.contains("hidden")){
    containerForm.classList.remove("hidden");
    containerForm.classList.add("flex");
}
else{
       containerForm.classList.remove("flex");
    containerForm.classList.add("hidden");
}
})
