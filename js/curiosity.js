//start all animations as hidden
//when l1 ends, start l2
//detect end of l1

//get all ids in a document

//const line = document.querySelector("#l1");
//line.style.visibility = "visible";

var imageElement = document.getElementById("imageBottom");
imageElement.classList.add('fade-in');

var linesById = document.querySelectorAll('[id]');
console.log(linesById);
linesById.forEach((item, i) => {
item.style.visibility = "visible";

  //detect when animation ends
  item.addEventListener('animationend', ()=> {
  console.log("animation ends");

//item.classList.add('animate__animated', 'animate__slower', 'animate__fadeIn');
  });
});
