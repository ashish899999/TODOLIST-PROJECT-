// using form event --> submit event
const todoform=document.querySelector(".form-todo");
const todoinput=document.querySelector(".form-todo input[type='text']");
const todolist=document.querySelector(".todo-list");
console.log(todoform);
console.log(todoinput);

// todoform.addEventListener("submit",()=>{
//     console.log("form submit");
// });
// bar bar refresh ho zara h so
// to prevent  this 
// use 
// devent.preventDefault();
// will stop the page fro refreshing


todoform.addEventListener("submit",(event)=>{
    event.preventDefault(); 
    const newtodotext = todoinput.value;
    const newli=document.createElement("li");
    const newliinnerhtml=`
    <span class="text"> ${newtodotext}</span>
    <div class="todo-buttons">
        <button class="todo-btn done">Done</button>
        <button class="todo-btn remove">Remove</button>
    </div>`;
  newli.innerHTML= newliinnerhtml;
  todolist.append(newli);
    todoinput.value="";
    // console.log("form submit");
});

todolist.addEventListener("click",(event)=>{
    //   console.log(event.target);
    // check if user clicke on done
    // console.log(event.target.classList)
    if(event.target.classList.contains("remove")){
        const targetedli=event.target.parentNode.parentNode;
        targetedli.remove();
        // console.log(" you want to remove something ?");
    }
    if(event.target.classList.contains("done")){
        const lispan=event.target.parentNode.previousElementSibling;
        lispan.style.textDecoration="line-through";
        // console.log(lispan); 
        // console.log("Great!!");
    }
})
