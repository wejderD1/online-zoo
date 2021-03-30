const description = {
    des1: "Native to central China, giant pandas have come to symbolize vulnerable species.",
    des2: "Lemurs are considered the world’s most endangered group of mammals",
    des3: "Variety of snacks very important for the healthy life of gorillas and his plenty of babies.",
    des4: "From nose to tail, belly to back, hard scales protect this petite alligator.",
    des5: "Pair of eagle parents lay and protect eggs, feed their chicks and teach them to hunt and fly.",
    des6: "The elevated walkways bring you to eye level with the koalas as they perch in their forest.",
    des7: "Lions roam the savannas and grasslands of Africa, hunting and raising cubs in the pride.",
    des8: "Sumatran Tigers are the smallest of the five sub-species, and are found in Indonesia."
}

const animalCardInfo = {
    name: ["Panda", "Lemur", "Gorilla", "Alligator", "Eagles", "Koala", "Lion", "Tiger"],
    title: ["Giant Panda", "Madagascarian Lemur", "Gorilla in Congo", "Chinese  Alligator", "West and Bald Coat", "Australian Koala","African Lion", "Sumatran Tiger"],
    description: [description.des1, description.des2, description.des3, description.des4, description.des4, description.des5, description.des6, description.des7, description.des8],
    nikname: ["Lucas", "Andi", "Glen", "Mike", "Sam & Lora", "Liz", "Shake", "Senja"]
}

const description2 = {
    desc1: "Your $30 could give Lucas a slice of panda cake, made with our secret recipe.",
    desc2: "Your $150 will help to care for Senja, a Sumatran tiger, for three weeks.",
    desc3: "With your support, we can give Andy his favorite fruits. Especially when it's not fruit season in its natural habitat.",
    desc4: "Sam & Lora have hatched and raised numerous young and will be happy with your help. "
}

const chooseFavouriteInfo = {
    name: ["Panda", "Tiger", "Lemur", "Eagles"],
    description: [description2.desc1, description2.desc2, description2.desc3, description2.desc4] 
}

let cardContainer = document.querySelectorAll(".card__container")

for (let i = 0; i < animalCardInfo.name.length; i++) {
    cardContainer[0].insertAdjacentHTML("beforeend", `<div class="animal__inner"><div class="animals-card">
    <a href="#" class="animals-card__link">
        <img src="../../assets/images/first/animals-card/${animalCardInfo.name[i]}.png" 
        alt="photo" class="animals-card__photo">
        <div class="animals-card__description">
            <h3 class="subheader color-white">${animalCardInfo.title[i]}</h3>
            <p class="body-text color-white">${animalCardInfo.description[i]}</p>
            <button class="btn btn_bg-transparent btn__border_none btn_240 btn-text btn_color-orange">view live cam
            <img class="right-arrow" src="../../assets/icons/right-orange-arrow.svg" alt="#">
            </button>
        </div>
    </a>
    </div>
    </div>`)
}

for (let i = 0; i < chooseFavouriteInfo.name.length; i++) {
    cardContainer[1].insertAdjacentHTML("beforeend", `<div class="animals-card donate-card ">
    <a href="#" class="animals-card__link">
        <img src="../../assets/images/donate-card/${chooseFavouriteInfo.name[i]}.png" alt="" class="animals-card__photo">
        <div class="animals-card__description">
            <p class="animals-card__text common-text common-text_white">${chooseFavouriteInfo.description[i]}</p>
        </div>
        <button
            class="animals-card__btn button button_142 button_right_orange button_border-none button_border-none_orange">feed</button>
    </a></div>`)
}
