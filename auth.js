const auth_slider = document.querySelector(".auth_slider");
const form = document.querySelector(".form");

const navButtons = document.querySelectorAll("a");
navButtons.forEach((navButton, i) => {
  
  navButtons[i].classList.remove("auth_hightlight");

  navButton.addEventListener("click", () => {
    auth_slider.style.transform = `translateX(${
      -parseFloat(form.clientWidth) * i
    }px)`;
    navButton.classList.add("auth_hightlight");
  });

});
