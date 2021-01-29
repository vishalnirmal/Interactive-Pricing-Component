var view = document.querySelector(".views span");
var duration = document.querySelector(".d");
var rate = document.querySelector(".rate span");
var slider = document.querySelector(".slider");
var toggle_button = document.querySelector("#checkbox");


slider.addEventListener("input", ()=>{
    var value = slider.value;
    slider.style.background = `linear-gradient(to right, hsl(174, 77%, 80%) 0%, hsl(174, 77%, 80%) ${value}%, hsl(224, 65%, 95%) ${value}%, hsl(224, 65%, 95%) 100%)`
    view.textContent = value*2+"K";
    changeRate(toggle_button.checked);
});


toggle_button.addEventListener("input", ()=>{
    changeRate(toggle_button.checked);
});


function changeRate(annualy){
    var value = slider.value;
    if(annualy){
        duration.textContent = "/year";
        rate.textContent = "$"+(value*2 * 1.44).toFixed(2)+"";
    }
    else{
        duration.textContent = "/month";
        rate.textContent = "$"+(value*2 * 0.16).toFixed(2)+"";
    }
}