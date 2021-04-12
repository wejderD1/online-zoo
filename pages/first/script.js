var el = document.querySelector(".quit");
var wind = document.querySelector(".pop-up")

el.addEventListener( "click" , () => {
    console.log(wind.setAttribute("hidden", true));
});

window.addEventListener("load", (e)=>{
    setTimeout(wind.removeAttribute("hidden"), 5000)
})
