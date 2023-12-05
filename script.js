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

//Scroll Animations
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

//Custom Animation
document.getElementById("yes").onclick = function(){
  document.getElementById("custom-animation").classList.add("visible");
}