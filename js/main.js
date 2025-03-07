class todo {
    constructor(title, description) {
        this.title = title;
        this.description = description;
        this.isDone = false;
        this.dateStamp = new Date();
    }

    onComplete() {
        this.isDone = true;
    }
}

const todoArray = [];

document.querySelector('button').addEventListener('click', (e) => {

    console.log(e)
    //prevent default of form
    e.preventDefault();

    //get input values
    const title = document.querySelector('#title').value;
    const description = document.querySelector('#description').value;

    //create new todo object
    const newTodo = new todo(title, description);

    //select parent of nodeElement
    const ul = document.querySelector('ul');

    //create new nodeElement
    const li = document.createElement('li');

    li.innerHTML = `
            <input type="radio">
            <div>
                <span>${newTodo.dateStamp.toLocaleDateString()}</span>
                <h5>${newTodo.title}</h5>
                <p>${newTodo.description}</p>
                <button class="precomplete">Completed</button>
            </div>
        `;

   todoArray.push(newTodo);
   ul.appendChild(li);
})

document.getElementsByClassName('precomplete').addEventListener('click', completeTask)
const completeTask = (e) => {
    console.log(e.target);
}