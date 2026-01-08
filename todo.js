const addBtn=document.getElementById("addBtn");
const saveBtn = document.getElementById("addTodo");
const containerForm=document.getElementById("container");
const todoList=[];


addBtn.addEventListener("click",(e)=>{
    e.preventDefault();
    saveTodo();
if(containerForm.classList.contains("hidden")){
    containerForm.classList.remove("hidden");
    containerForm.classList.add("flex");
}
else{
       containerForm.classList.remove("flex");
    containerForm.classList.add("hidden");
}
});
saveBtn.addEventListener("click",()=>{

});
function saveTodo(){
    const todo=document.getElementById("todo").value;
const order=document.getElementById("order").value;
    const saveTodo={
        myTodo:todo,
       importence:order,

    }
    todoList.push(saveTodo);
}
