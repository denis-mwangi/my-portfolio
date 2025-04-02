// TYPING ANIMATION

let typed = new Typed('.typing', {
  strings: ['','Web Developer', 'Front-end Designer', "Python Developer", "C++ Developer"],
  typeSpeed: 100,
  backSpeed: 60,
  loop: true
});

// ASIDE MENU
const nav = document.querySelector(".nav"),
      navList = nav.querySelectorAll("li"),
      totalNavList = navList.length;
      for(let i=0; i<totalNavList; i++){
        const a = navList[i].querySelector("a");
        a.addEventListener("click", function() {
          for(let j=0; j<totalNavList; j++){
            navList[j].querySelector("a").classList.remove("active");
          }
          this.classList.add("active")
          showSection(this);
        })
      }
      function showSection(element){
        const target = element.getAttribute("href").split("#")[1];
        document.querySelector("#" + target).classList.add("active")
      }
      // TOGGLE NAV BAR FOR MOBILE PHONES
      const navToggleBtn = document.querySelector(".nav-toggler"),
            aside = document.querySelector(".aside");
            navToggleBtn.addEventListener("click", () => {
              asideSectionToggleBtn();
            })
            function asideSectionToggleBtn(){
              aside.classList.toggle("open");
            }