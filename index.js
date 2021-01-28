document.getElementById("slider").oninput = function(){
    this.style.background = `linear-gradient(to right, hsl(174, 77%, 80%) 0%, hsl(174, 77%, 80%) ${this.value}%, hsl(224, 65%, 95%) ${this.value}%, hsl(224, 65%, 95%) 100%)`
}