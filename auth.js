const auth_slider = qs(".auth_slider")
const navBar = qs('.auth_nav')
const form = qs(".form")
const navButtonContainer = qs('ul')
//const navToggleButton = document.querySelector('i') 
const dialogueBox = qs(".auth_dialog_Box")
const closeDialogButton = qs(".close_btn", dialogueBox)

function qs(selector, parent=document){
  return parent.querySelector(selector)
}

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


 const pageIndex = {

        signUpPageIndex:0,
        signInPageIndex:1,
        passwordPageIndex:2 
    }

 function signInPage() {
   auth_slider.style.transform = `translateX(${
     -parseFloat(form.clientWidth) * pageIndex.signInPageIndex
   }px)`;
 }

 function signUpPage() {
   auth_slider.style.transform = `translateX(${
     -parseFloat(form.clientWidth) * pageIndex.signUpPageIndex
   }px)`;
 }

 function passwordPage() {
   auth_slider.style.transform = `translateX(${
     -parseFloat(form.clientWidth) * pageIndex.passwordPageIndex
   }px)`;
 }

console.log(...pageIndex);

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
