const menuHeader = document.querySelector(".menu__header");
const navBar = document.querySelector(".nav");
const menuIcon = document.querySelector(".menu__nav-icon");
const menuActive = false;
const arrowUp = document.querySelector(".arrow-up__container");
const newPortfolio = document.querySelector("#new-portfolio");

sessionStorage.setItem("tasks", JSON.stringify(menuActive));

menuIcon.addEventListener("click", ()=>{
    const check = JSON.parse(sessionStorage.getItem("tasks"));
    if(!check){
        navBar.style.display = "block";
        if(window.innerWidth <= 425){
            menuHeader.style.justifyContent = "center";
            menuHeader.style.marginLeft = "0";
        }
        sessionStorage.setItem("tasks", JSON.stringify(true));
    }else{
        navBar.style.display = "none";
        if(window.innerWidth <= 425){
            menuHeader.style.justifyContent = "flex-start";
            menuHeader.style.marginLeft = "50px";
        }
        sessionStorage.setItem("tasks", JSON.stringify(false));
    }
})
arrowUp.addEventListener("click", () =>{
    navigator.vibrate(25);
})

function changeLanguage() {
    const selectedLanguage = document.getElementById('language-selector').value;
    
    fetch(`translations_${selectedLanguage}.json`)
    .then(response => response.json())
    .then(translations => {
      const translateText = (elementId, translationKey) => {
        const element = document.getElementById(elementId);
        if (element) {
          element.innerText = translations[translationKey] || element.innerText;
        }
      };

      const traslateTextClass = (elementClass, translationKey) => {
        const elements = document.getElementsByClassName(elementClass);
        for (let i = 0; i < elements.length; i++) {
          elements[i].innerText = translations[translationKey] || elements[i].innerText;
        }
      }

      translateText('new-portfolio-title', 'new_portfolio');
      translateText('portfolio', 'portfolio');
      translateText('menu__list__item_sobre-mi', 'about_me');
      translateText('about_me', 'about_me');
      translateText('skills', 'skills');
      translateText('skills2', 'skills');
      translateText('menu__list__item_formacion', 'education');
      translateText('menu__list__item_proyectos', 'projects')
      translateText('experience__section__title', 'experience');

      translateText('main-title', 'main-title');
      translateText('sub-title', 'sub-title');
      translateText('about_paragraph', 'about_paragraph');
      translateText('about_paragraph2', 'about_paragraph2');

      translateText('menu__list__item_hobbies', 'hobbies');
      translateText('guitar', 'guitar');
      translateText('music', 'music');
      translateText('series', 'series');
      translateText('photos', 'photos');

      translateText('formacion_title', 'education');
      translateText('highschool_title', 'highschool_title');
      translateText('utn_title', 'utn_title');
      translateText('utn_subtitle', 'utn_subtitle');
      translateText('alura_title', 'alura_title');
      translateText('platzi_title', 'platzi_title');
      translateText('platzi_subtitle', 'platzi_subtitle');
      translateText('junior_title', 'junior_title');

      translateText('exp-title', 'exp-title');
      translateText('pokedex-desc', 'pokedex-desc');
      translateText('task-list-title', 'task-list-title');
      translateText('task-list-desc', 'task-list-desc');
      translateText('calculadora-title', 'calculadora-title');
      translateText('calculadora-desc', 'task-list-desc');
      translateText('hotel-title', 'hotel-title');
      translateText('hotel-desc', 'hotel-desc');
      translateText('ecommerce-title', 'ecommerce-title');
      translateText('ecommerce-desc', 'ecommerce-desc');
      translateText('converter-title', 'converter-title');
      translateText('converter-desc', 'converter-desc');
      translateText('hangman-title', 'hangman-title');
      translateText('hangman-desc', 'hangman-desc');
      translateText('encryptor-title', 'encryptor-title');
      translateText('encryptor-desc', 'encryptor-desc');

      traslateTextClass('experience__button--repo', 'repository');
      traslateTextClass('experience__button--demo', 'seedemo');
      translateText('downloadapk', 'downloadapk');

      translateText('contact_title', 'contact_title');
      translateText('contact_paragraph', 'contact_paragraph');
      translateText('contact_btn', 'contact_btn');
      translateText('made-by', 'made_by');
    })
    .catch(error => {
      console.error('Error al cargar las traducciones:', error);
    });
  }