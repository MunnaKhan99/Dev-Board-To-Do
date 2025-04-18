document.getElementById("btn-activity")
.addEventListener("click",function(event){
    event.preventDefault();
    document.getElementById("task-container").innerText = '';
})