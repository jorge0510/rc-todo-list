class todo {
    constructor(title, description) {
        this.title = title;
        this.description = description;
        this.isDone = false;
        this.dateStamp = new Date();
    }
}

document.querySelector('button').addEventListener('click', (e) => {
    e.preventDefault();
    const title = document.querySelector('#title').value;
    const description = document.querySelector('#description').value;
    const newTodo = new todo(title, description);

    const ul = document.querySelector('ul');
    const li = document.createElement('li');

   li.innerHTML = `
        <input type="radio">
        <div>
            <span>${newTodo.dateStamp.toLocaleDateString()}</span>
            <h5>${newTodo.title}</h5>
            <p>${newTodo.description}</p>
        </div>
    `;
   ul.appendChild(li);
})
