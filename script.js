/*Tableau caché*/

let tableSports=document.getElementById('table-sports');

let eventBtn=document.getElementById('event-btn');

eventBtn.addEventListener("click", () => {
  if(getComputedStyle(tableSports).display == "none"){
    tableSports.style.display = "block";
    eventBtn.value = 'Hide the results';
  } else {
    tableSports.style.display = "none";
    eventBtn.value = 'The last results';
  }
})

/*Alerte Formulaire*/

let submit=document.getElementById('submit');

submit.onclick = function (){
    alert('Thank you for your request')
}



