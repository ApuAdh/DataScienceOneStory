//Progress Barr
window.onscroll = function() {scrollBar()};
function scrollBar() {
  let winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  let scrolled = (winScroll / height) * 100;
  if (scrolled>99){
    scrolled = 99.999999
  }
  document.getElementById("myBar").style.width = scrolled + "%";
}
//Custom Animation
document.getElementById("yes").onclick = function(){
  document.getElementById("custom-animation").classList.add("visible");
  /*Scroll Animations (Having the scroll animations in this part of the
   code ensures that they only occour when the YES button is clicked)*/
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      console.log(entry);
      if (entry.isIntersecting){
        entry.target.classList.add('show');
      }
    })
  })
  const hiddenElements = document.querySelectorAll('.hidden');
  hiddenElements.forEach((el) => observer.observe(el));
}

//dropdown Menu
let acc = document.getElementsByClassName("accordion");
let i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    let panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}