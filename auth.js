const auth_slider = document.querySelector(".auth_slider");
const navBar = document.querySelector('.auth_nav')
const form = document.querySelector(".form");
const navButtonContainer = document.querySelector('ul')
//const navToggleButton = document.querySelector('i') 
const dialogueBox = document.querySelector(".auth_dialog_Box");
const closeDialogButton = dialogueBox.querySelector(".close_btn");

// fa fa-times or fa fa-bars
//console.log(navToggleButton.classList.contains("fa-bars"));

closeDialogButton.addEventListener('click', () => {
dialogueBox.classList.remove("open-popup");
})
form.addEventListener('submit', e => {
   e.preventDefault()

   // backend goes here
   dialogueBox.classList.add("open-popup");
})


 const signUpPageIndex = 0;
 const signInPageIndex = 1;
 const passwordPageIndex = 2;

 function signInPage() {
   auth_slider.style.transform = `translateX(${
     -parseFloat(form.clientWidth) * signInPageIndex
   }px)`;
 }

 function signUpPage() {
   auth_slider.style.transform = `translateX(${
     -parseFloat(form.clientWidth) * signUpPageIndex
   }px)`;
 }

 function passwordPage() {
   auth_slider.style.transform = `translateX(${
     -parseFloat(form.clientWidth) * passwordPageIndex
   }px)`;
 }



// navToggleButton.addEventListener('click', (e) => {
//   navBar.classList.toggle("inc_nav_height");
//      if(e.target.classList.contains('fa-bars')){
//         e.target.classList.add('fa-times')
//         e.target.classList.remove("fa-bars")
//         navButtonContainer.style.display = 'flex'
//         return
        
//      }else {
//          e.target.classList.add("fa-bars");
//          e.target.classList.remove("fa-times");
//          navButtonContainer.style.display = "none";
//      }
  
//  })

 // --------- carosel slide code goes here ----//



 


// const navButtons = document.querySelectorAll("a");
// navButtons.forEach((navButton, i) => {
  
//   navButtons[i].classList.remove("auth_hightlight");

//   navButton.addEventListener("click", () => {
//     auth_slider.style.transform = `translateX(${
//       -parseFloat(form.clientWidth) * i
//     }px)`;
//     navButton.classList.add("auth_hightlight");
//   });

// });


//  <!-- <header>
//       <nav class="auth_nav">
//         <div class="logo">
//           <img src="esutlogo.webp" alt="">
//           <span>CEE PORTAL</span>
//         </div>
//         <ul>
//           <li>Already have an account?</li>
//           <li><a href="#" onclick="signInPage()">Sign in</a></li>
//         </ul>
//        <div class="nav_burger">
//            <i class="fa fa-bars"></i>
//        </div>
//       </nav>
//     </header> -->
