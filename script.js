const name_box = document.getElementById("name_box");
const add_task = document.getElementById("add_task");
const do_box = document.getElementById("do");

tasks = []

add_task.addEventListener("click",function(){
    console.log(tasks)
    tasks.push(new task(name_box.value));
    name_box.value = ""
})

class task {
    constructor(name){
        this.name = name;
        this.state = "do";
        
        this.build = function(){
            this.box = document.createElement("div");
            this.box.classList.add("task","plate");

            this.del = document.createElement("button");
            this.del.classList.add("element_negative");
            this.del.id = "del"
            this.del.addEventListener("click", () => {
                console.log("removing")
                this.remove()
            })
            this.del.innerHTML = "X"

            this.title = document.createElement("input");
            this.title.classList.add("title")
            this.title.value = this.name;
            this.title.id = this.name;
            
            this.box.appendChild(this.title);
            this.box.appendChild(this.del);

            var target_box = eval(`${this.state}_box`);
            target_box.appendChild(this.box);
        }

        this.remove = function(){
            var target_box = eval(`${this.state}_box`);
            target_box.removeChild(this.box);
            tasks.pop(this)
            
        }

        this.build()
    };
};