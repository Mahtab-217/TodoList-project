const addBtn=document.getElementById("addBtn");
const saveBtn = document.getElementById("addTodo");
const containerForm=document.getElementById("container");
const error=document.getElementById("error")
const todoList=[];
let message="";

addBtn.addEventListener("click",(event)=>{
    const h1=document.createElement("h1")
 event.preventDefault();
    saveTodo();
     h1.innerHTML="";
    if(message>0){
    document.createElement("h1");
    h1.textContent=message;
    error.appendChild(h1);
}

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
if(todo!==""){
 

    const saveTodo={
        myTodo:todo,
       importence:order,

    }
    todoList.push(saveTodo);
    message="";
}
else{
    message="لطفا پلان امروز را اضافه کنید"
}
}

