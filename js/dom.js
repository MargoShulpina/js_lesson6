console.log("Javascript - лучший язык программирования!");
window.addEventListener("load", function() {
  setTimeout(() => {
   
    // Поменяйте приветствие с "Привет Всем!" на "Привет Виталий Валентинович!".
    let changeMessage = document.querySelector("#greeting");
    changeMessage.textContent = 'Привет Виталий Валентинович!';

    // Установите фоновый цвет для каждого <li> на yellow.
    document.querySelector("#essentials").style.backgroundColor = "yellow";
    
    // Создайте тег изображения, установите его атрибут src, и вложите в div с идентификатором #greeting.
    let newElement = document.createElement("img");
    newElement.setAttribute("src", "http://49.media.tumblr.com/tumblr_m6qt1rjPSz1rxjzkho1_500.gif");
    document.querySelector("#greeting").appendChild(newElement);  
    
    // Создайте и добавьте ul элемент в конец body с классом "todo-items"
    let ulElement = document.createElement("ul");
    ulElement.classList.add ("todo-items");
    document.querySelector("body").appendChild(ulElement);

    // Пройдитесь по массиву ['приготовить кофе','съесть салатик','поменять подгузник ребёнку','поехать на работу'] и создайте тег li для каждого элемента, например: <li>приготовить кофе</li>
    // Добавьте каждый созданный ранее тег li в вашу конструкцию ul с классом "todo-items".
    let arr = ['приготовить кофе','съесть салатик','поменять подгузник ребёнку','поехать на работу'];
    for (let i = 0; i < arr.length; i++ ) {
      let liElement = document.createElement("li");
      liElement.textContent = arr[i];
      document.querySelector(".todo-items").appendChild(liElement);
    }
    // Добавьте класс selected к <li> при щелчке по нём. Удалите его из любых других li.
    // Измените изображение, чтобы оно было последним выбранным продуктом питания.
    let UlSelected = document.querySelector("#essentials");
    UlSelected.addEventListener("click",addClass, false);
    function addClass(e) {
      const nodes = e.target.parentNode.childNodes;
      nodes.forEach(node => {
        if (node.nodeName === 'LI') {
          node.classList.remove('selected')
        }
      });
     e.target.classList.add('selected');
     const key = e.target.innerText;
      let obj = {
        "мёд": "images/honey.jpg",
        "молоко": "images/milk.jpg",
        "вода": "images/water.jpg",
        "вино": "images/wine.jpg",
        "пиво": "images/beer.jpg"
      }
      let image = document.querySelector('#essimages');
      image.setAttribute("src", obj[key]);
    }

    // Когда на серый div наводится указатель мыши, он удаляется из DOM.
    let ghost = document.querySelector("#ghosting");
    ghost.addEventListener("mouseover",ghosting, false);
    function ghosting() {
      document.querySelector("body").removeChild(ghost);
    }

    // Когда на оранжевый div наводится указатель мыши, его ширина удваивается. Когда мы уходим за пределы div, ширина возвращается к своему первоначальному размеру.
    let resize = document.querySelector("#resize");
    resize.addEventListener("mouseover",() => {resize.style.width = "400px"}, false);
    resize.addEventListener("mouseout",() => {resize.style.width = "200px"}, false);

    // Когда кнопка Reset нажата - удалите класс selected из каждого <li> и измените изображение на panic.jpg.
    let reset = document.querySelector("#reset")
    reset.addEventListener("click",resetChanges, false);
    function resetChanges () {
      let selected = document.querySelectorAll(".selected");
      selected.forEach(sel => sel.classList.remove('selected'))
      let image = document.querySelector('#essimages');
      image.setAttribute("src", 'images/panic.jpg');
    }
    // При нажатии клавиши 1, 2, 3, 4, 5, 6, 7, 8, 9 или 0 на странице появляется сообщение «Я НЕНАВИЖУ ЧИСЛААААА!»
    window.addEventListener("keydown", checkKeyPressed, false);
    function checkKeyPressed(e) {
      if ((e.keyCode >= 48 && e.keyCode <= 57) || (e.keyCode >= 96 && e.keyCode <= 105)) 
        alert("Я НЕНАВИЖУ ЧИСЛААААА!");    
    }
}, 2000);
})


