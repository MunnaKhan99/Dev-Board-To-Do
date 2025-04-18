const buttons = document.getElementsByClassName('btn-completed')
for(let i = 0; i < buttons.length;i++){
    buttons[i].addEventListener("click",function(event){
        event.preventDefault();

        this.disabled = true;
        this.classList.remove("cursor-pointer");
        this.classList.add("opacity-50", "cursor-default");

        const task = getInnerTextById("task-assign");
        const totalCompletedTask = getInnerTextById("total-completed-task");

        const updated = task-1;
        const totalUpdatedTask = totalCompletedTask + 1; 

        setInnerTextByIDandValue("task-assign",updated);
        setInnerTextByIDandValue("total-completed-task",totalUpdatedTask);
        alert("Board update Successfully");
        
        const taskTitle = this.closest('.task-card').querySelector('.task-title').innerText;
        const time = new Date().toLocaleTimeString([], {
            hour: '2-digit',
            minute: '2-digit',
            second:'2-digit',
            hour12: true
          });

        const container = document.getElementById("task-container");
        const div = document.createElement("div");
        div.classList.add("bg-slate-100","rounded-xl","p-4","my-4");
        div.innerHTML =`
              <h1>You have completed the task ${taskTitle} at ${time}</span></h1>
            
        ` 
        container.appendChild(div);
        

        if (updated === 0) {
            alert("🎉 All tasks completed!");
          }
    });
    

}
