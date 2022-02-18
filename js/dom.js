console.log("Javascript - лучший язык программирования!");
window.addEventListener("load", function() {
  setInterval(() => {
    let changeMessage = document.querySelector("#greeting");
    changeMessage.textContent = 'Привет Виталий Валентинович!';

    document.querySelector("#essentials").style.backgroundColor = "yellow";
    
    
    let newElement = document.createElement("img");
    newElement.setAttribute("src", "http://49.media.tumblr.com/tumblr_m6qt1rjPSz1rxjzkho1_500.gif");
    document.querySelector("#greeting").appendChild(newElement);    
}, 2000);

  let ulElement = document.createElement("ul");
    ulElement.classList.add ("todo-items");
    document.querySelector("body").appendChild(ulElement);

  let arr = ['приготовить кофе','съесть салатик','поменять подгузник ребёнку','поехать на работу'];
  for (let i = 0; i < arr.length; i++ ) {
    let liElement = document.createElement("li");
    liElement.textContent = arr[i];
    document.querySelector(".todo-items").appendChild(liElement);
  }

  
})


