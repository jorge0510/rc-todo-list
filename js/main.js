//select parent nodeElement
const ul = document.querySelector('ul');

const onSubmit = (e) => {
    //prevent default of form
    e.preventDefault();
    //get input values
    const title = document.querySelector('#title').value;
    if (title === "") {
        alert("no data!");
        return;
    }    
    //create new nodeElement
    const li = document.createElement('li');
    const dateId = (new Date()).toISOString();

    li.id = dateId;
    // li.querySelector(`#${dateId}`);

    li.innerHTML = `
            <div>
                <input type="radio" id="radio#${dateId}">
                <h5 id="title#${dateId}">${title}</h5>
            </div>
            <input type="submit" class="delete" id="delete#${dateId}" value="x">
            
        `;

   ul.appendChild(li);
   document.querySelector('#title').value = "";
   li.addEventListener('click', onTouch);
}

//event bubulling click on element that wasnt there at rendering
document.querySelector('button').addEventListener('click', onSubmit);



const onTouch = (e) => {
    if(e.target.type === "radio") {
        e.target.parentNode.children[1].classList.add("completed");
    } else if (e.target.type === "submit") {
        e.target.parentNode.remove();
    }
}
