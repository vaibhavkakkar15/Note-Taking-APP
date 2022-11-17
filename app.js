let inp = document.querySelector("input");
let btn = document.querySelector("button");
let addTaskBtn = document.querySelector(".add");
let lists = document.querySelector(".lists");

window.onload = function () {
  alert("Hey! Enter something to your list");
};

addTaskBtn.addEventListener("click", function (ev) {
  //each time we click on add task button we create div elemnt
  let div = document.createElement("div");

  //styling div
  div.classList.add("styling");
  // it will add the text in input box
  div.innerText = inp.value;

  if (inp.value == "") {
    alert("Please Enter Something");
  }

  //if input is not empty
  else {
    let removeBtn = document.createElement("button");
    //adding class
    removeBtn.classList.add("remove");

    let up = document.createElement("button");
    //adding class
    up.classList.add("up");

    let down = document.createElement("button");
    //adding class
    down.classList.add("down");

    div.prepend(removeBtn);
    div.prepend(up);
    div.prepend(down);

    up.innerText = "Up";
    down.innerText = "Down";
    removeBtn.innerText = "X";
    removeBtn.style.margin = "0px 10px ";
    up.style.margin = "0px 10px ";
    div.style.margin = "15px 15px";
    lists.append(div);
    inp.value = "";

    removeBtn.addEventListener("click", function (e) {
      div.remove();
    });

    //concept gor up button

    var upFunctionality = document.querySelectorAll(".up");
    for (var i = 0; i < upFunctionality.length; i++) {
      upFunctionality[i].addEventListener("click", function () {
        var aboveEle = this.parentElement;
        if (aboveEle.previousElementSibling)
          aboveEle.parentNode.insertBefore(
            aboveEle,
            aboveEle.previousElementSibling
          );
      });
    }
    // concept for down button
    var downFunctionality = document.querySelectorAll(".down");
    for (var i = 0; i < downFunctionality.length; i++) {
      downFunctionality[i].addEventListener("click", function () {
        var ele = this.parentElement;
        if (ele.nextElementSibling)
          ele.parentNode.insertBefore(ele.nextElementSibling, ele);
      });
    }
  }
});
