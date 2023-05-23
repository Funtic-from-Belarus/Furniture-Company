const popularCard = document.querySelectorAll('.popular__cards .popular__card');
const sliderLine = document.querySelector('.slider-line');
const popularCards = document.querySelector('.popular__cards')
let width;
let count = 0;

function init() {
   let widthW = window.innerWidth;
   console.log('resize');
   // if (window.innerWidth < 1000) { //надо было прибавить 120 
   //    popularCards.removeProperty('gap');
   //    // popularCards.style.gap = 0 + 'px';
   // } else {
   //    popularCards.style.gap = 20 + 'px';
   // }
   width = document.querySelector('.slider').offsetWidth;
   sliderLine.style.width = width * popularCard.length + "px";

   if (window.innerWidth < 540) {
      popularCard.forEach(item => {
         item.style.width = width + 'px';
         item.style.height = 'auto';
      });
   }
   else if (window.innerWidth < 920) {
      popularCard.forEach(item => {
         item.style.width = (width / 2) + 'px';
         item.style.height = 'auto';
      });
   } else {
      popularCard.forEach(item => {

         item.style.width = (width / 3) - 20 + 'px';
         item.style.height = 'auto';
      });
   }
   console.log(widthW);

   rollSlider();
}
window.addEventListener('resize', init);
init();
console.log(popularCard.length);
let widthW = window.innerWidth;

document.querySelector('.next').addEventListener('click', () => {
   count++;
   console.log(count);
   if (count >= (popularCard.length - 2) && widthW > 1000) {
      console.log(window.innerWidth)
      count = 0;
      rollSlider();
   } else if (count >= popularCard.length && widthW < 540) {
      count = 0;
      rollSlider();
   } else if (count >= popularCard.length - 1 && widthW > 540 && window.innerWidth < 940) {
      count = 0;
      rollSlider();
   } else {
      rollSlider();
   }

});
document.querySelector('.back').addEventListener('click', () => {
   count--;
   console.log(count);
   if (count < 0 && widthW < 540) {
      count = popularCard.length - 1;
   } else if (count < 0 && widthW > 540 && widthW < 1000) {
      count = popularCard.length - 2;
   } else if (count < 0 && widthW > 1000) {
      count = popularCard.length - 3;
   }
   console.log(count);
   rollSlider();
});

function rollSlider() {
   if (window.innerWidth < 540) {
      sliderLine.style.transform = 'translate(-' + ((count * width) + (count * 20)) + 'px)';

   }
   else if (window.innerWidth < 920) {
      sliderLine.style.transform = 'translate(-' + (count * (width / 2) + count * 20) + 'px)';
   } else {
      sliderLine.style.transform = 'translate(-' + (count * (width / 3) - 15) + 'px)';
   }

}





const searchIcon = document.querySelector('.glass__container');
const searchContainer = document.querySelector('.search-container');

searchIcon.addEventListener('click', function () {
   searchContainer.classList.toggle('show');
});





const navToggle = document.querySelector(".menu__icon");
const links = document.querySelector(".header-menu__list");
const menu = document.querySelector(".header__menu");

navToggle.addEventListener("click", function () {
   menu.classList.toggle("show-links");

   if (menu.style.display == "block") {
      menu.style.display = "none";

   } else {
      menu.style.display = "block";

   }
});





const shopBy = document.querySelectorAll(".shop-by");
shopBy.forEach(el => {
   el.addEventListener('click', function () {
      setActive(this);
   });
});
function setActive(element) {
   shopBy.forEach(el => {
      el.classList.remove('active');
   });
   element.classList.add('active')
}


const shopItem = document.querySelectorAll(".shop__item");

shopItem.forEach(el => {
   el.addEventListener('click', function () {
      setActiveItem(this);
   });
});
function setActiveItem(element) {
   shopItem.forEach(el => {
      el.classList.remove('activeItem');
      el.children[1].style.color = "#808080";
   });
   element.classList.add('activeItem')
   element.children[1].style.color = "#fff";
}





const questions = document.querySelectorAll(".question");

questions.forEach(question => {
   const btn = question.querySelector(".question-btn");
   // console.log(btn);

   question.addEventListener("click", function () {
      console.log(question);

      questions.forEach(function (item) {
         if (item !== question) {
            item.classList.remove("show-text");
            // item.children[1].style.display = "none";
         }
      });
      // question.children[1].style.display = "block";
      question.classList.toggle("show-text");
   });
});





const button = document.querySelector('.btn');

const displayButton = () => {
   window.addEventListener('scroll', () => {
      console.log(window.scrollY);

      if (window.scrollY > 100) {
         button.classList.add("show");
      } else {
         button.classList.remove("show");
      }
   });
};

const scrollToTop = () => {
   button.addEventListener("click", () => {
      window.scroll({
         top: 0,
         left: 0,
         behavior: 'smooth'
      });
      console.log(event);
   });
};

displayButton();
scrollToTop();