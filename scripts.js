button = document.querySelector('#add');

button.addEventListener("click", () => {
    title = document.querySelector("#title").value;
    content = document.querySelector("#content").value;
    additem(title, content)
    addToLocalStorage(title, content);
});;


function additem(title, content)
{
    let template = document.querySelector('template');
    let todo = document.querySelector('#todo');

    let clone = template.content.cloneNode(true);
    let h3 = clone.querySelector("h3");
    let p = clone.querySelector("p");

    h3.textContent =title;
    p.textContent = content;
    todo.appendChild(clone);
}

function addToLocalStorage(title, content)
{
    todo = 
    {
        title: title,
        content: content
    }
    // console.log(todo);
    // console.log(JSON.stringify(todo));
    localStorage.setItem(localStorage.length+1, JSON.stringify(todo));
}

function addLocalLists()
{

    Object.values(localStorage).forEach(item => {
        data = JSON.parse(item)
        additem(data.title, data.content)
    })

}

function deleteall()
{
    localStorage.clear();
    let todo = document.querySelector('#todo');
    todo.innerHTML = "";
}