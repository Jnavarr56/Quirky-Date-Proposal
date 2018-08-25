let noButton = document.getElementById("no");
let siButton = document.getElementById("si");

setTimeout(nodFunc = () => {
  siButton.classList.add("nodSi");
  noButton.classList.add("nodNo");
}, 4000);

let numberGenerator = (max, min = undefined) => {
  if (min === undefined) {
    return Math.floor(Math.random()*(max+1));
  }
  else {
    var answer = Math.floor(Math.random()*(max+1));
    if (answer < min){
      return min;
    }
    else {
      return answer;
    } 
  }  
}
let colorArray = ["color-1","color-2","color-3","color-5","color-6","color-7"];

siButton.addEventListener ("click", heartsFall = (event) => {
  for (i = 0; i < 400; i++) {
    var heartElement = document.createElement("h1");
    heartElement.innerHTML = "&#9829";
    heartElement.classList.add("heart");
    heartElement.classList.add(colorArray[numberGenerator(5)]);
    heartElement.style.left = numberGenerator(window.innerWidth+1) + "px";
    heartElement.style.animationDelay = numberGenerator(50, 0) + "s";
    heartElement.style.animationDuration = numberGenerator(30,5) + "s";
    document.body.appendChild(heartElement);
  }
  
  
    siButton.classList.remove("nodSi");
    siButton.classList.add("siAway");
    noButton.classList.remove("nodNo");
    noButton.classList.add("noAway");
    document.getElementById("text").classList.add("center-text");
    document.getElementById("main").classList.add("center-main");
  

    
    setTimeout(removeAnswers = () => {

       document.getElementById("respuestas-house").style.display= "none"; 
    }, 1250);
  
  setTimeout(changeExclam = () => {
        document.getElementById("exclam1").innerText = "¡";
        document.getElementById("exclam1").classList.add("blink1");
        document.getElementById("exclam2").innerText = "!";
        document.getElementById("exclam2").classList.add("blink2");
  },2400);
 
  setTimeout(openEmail = () => {
    alert("Text me? 917-683-0901");
  }, 6000);
  
});

noButton.addEventListener("mouseover", (event) => {
    var randX = numberGenerator(window.innerHeight*.40, 40);
    var randY = numberGenerator(window.innerHeight*.40, 40);
    
    console.log(window.innerWidth);
    noButton.classList.remove("nodNo");
    noButton.classList.remove("respuestas");
    noButton.classList.remove("no-class");
    noButton.classList.add("opacityConstant");
    
 
    noButton.style.left = randX + "px";
    noButton.style.top = randY + "px";
  

   
});

noButton.addEventListener("click", (event) => {
    alert("¯\\_(ツ)_/¯")
});