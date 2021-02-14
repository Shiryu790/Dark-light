let button = document.querySelector (".btn-toggle"); 

button.addEventListener ("click", () => {
    const body = document.body; 

    if (body.classList.contains("dark")) {
        body.classList.add ("light"); 
        body.classList.remove ("dark"); 
        button.innerHTML= "Go dark";
    }
    else if (body.classList.contains("light")) {
        body.classList.add ("dark"); 
        body.classList.remove ("light"); 
        button.innerHTML = "Go light"
    }
})