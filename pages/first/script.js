var el = document.querySelector(".quit");
var wind = document.querySelector(".pop-up")
var animalCard = document.querySelectorAll(".animal__card")


el.addEventListener( "click" , () => {
    wind.setAttribute("hidden", true);
});

// window.addEventListener("load", (e)=>{
//     setTimeout(wind.removeAttribute("hidden"), 5000)
// })



// selection

const selectSingle = document.querySelector('.__select');
const selectSingle_title = selectSingle.querySelector('.__select__title');
const selectSingle_labels = selectSingle.querySelectorAll('.__select__label');
const rightBlock = document.querySelector(".right-block");


// Toggle menu
selectSingle_title.addEventListener('click', () => {
    if ('active' === selectSingle.getAttribute('data-state')) {
      selectSingle.setAttribute('data-state', '');
    } else {
      selectSingle.setAttribute('data-state', 'active');
    }

  });

  // Close when click to option
for (let i = 0; i < selectSingle_labels.length; i++) {
    selectSingle_labels[i].addEventListener('click', (evt) => {
      selectSingle_title.textContent = evt.target.textContent;
      selectSingle_title.appendChild(rightBlock)
      selectSingle.setAttribute('data-state', '');
    });
  }



