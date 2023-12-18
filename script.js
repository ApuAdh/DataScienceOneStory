document.getElementById("analysis_button").onclick = function(){
  document.getElementById("analysis_for_nerds").classList.add('visible');
}

document.getElementById("yes").onclick = function(){
    document.getElementById("invisible1").classList.add('visible');
    document.getElementById("invisible2").classList.add('visible');
    document.getElementById("invisible3").classList.add('visible');
    document.getElementById("invisible4").classList.add('visible');
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
window.onscroll = function() {myFunction()};

function myFunction() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
}

function visibleClass(){
  document.getElementById("text").className = "visible";
}

document.getElementById("fire").onclick = function(){
  document.getElementById("text").innerHTML = "The Strongest Offensive Fire Type Pokemon is Zen Mode Galarian Darmanitan and The Strongest Defensive One is A Tossup Between Ho-oh and Primal Groudon. Check this <a href='https://apuadh.github.io/Data-Science-One-Final-Project/fire.html' target=_blank class='fighting'>link</a> to see why"
}
document.getElementById("water").onclick = function(){
  document.getElementById("text").innerHTML = "The Strongest Offensive Water Type Pokemon is Ash-Greninja and The Strongest Defensive Water Type is Toxapex. Check this <a href='https://apuadh.github.io/Data-Science-One-Final-Project/water.html' target=_blank class='water_a'>link</a> out to see why"
}
document.getElementById("grass").onclick = function(){
  document.getElementById("text").innerHTML = "The Strongest Offensive Water Type Pokemon is Mega-Sceptile and The Strongest Defensive Grass Type is Ferrothorn. Check this <a href='https://apuadh.github.io/Data-Science-One-Final-Project/grass.html' target=_blank class='grass_a'>link</a> out to see why"
}
document.getElementById("normal").onclick = function(){
  document.getElementById("text").innerHTML = "The Strongest Offensive Normal Type Pokemon is Mega-Lopunny and The Strongest Defensive Normal Type is Mega-Audino. Check this <a href='https://apuadh.github.io/Data-Science-One-Final-Project/normal.html' target=_blank class='normal_a' style='font-size: 150%'>link</a> out to see why"
}
document.getElementById("electric").onclick = function(){
  document.getElementById("text").innerHTML = "The Strongest Offensive Electric Type Pokemon is Mega-Manetric and The Strongest Defensive Electric Type is A Tossup Between Miraidon and Zekrom. Check this <a href='https://apuadh.github.io/Data-Science-One-Final-Project/electric.html' target=_blank class='electric_a'>link</a> out to see why"
}
document.getElementById("ice").onclick = function(){
  document.getElementById("text").innerHTML = "The Strongest Offensive Ice Type Pokemon is Zen Mode Galarian Darmanitan  and The Strongest Defensive Ice Type is Ice Rider Calyrex. Check this <a href='https://apuadh.github.io/Data-Science-One-Final-Project/ice.html' target=_blank class='ice_a'>link</a> out to see why"
}
document.getElementById("fighting").onclick = function(){
  document.getElementById("text").innerHTML = "The Strongest Offensive Fighting Type Pokemon is a Tossup Between Pheromosa and Mega Mewtwo X and The Strongest Defensive Fighting Type is Zamazenta Crowned Shield Form. Check this <a href='https://apuadh.github.io/Data-Science-One-Final-Project/fighting.html' target=_blank class='fighting'>link</a> out to see why"
}
document.getElementById("poison").onclick = function(){
  document.getElementById("text").innerHTML = "The Strongest Offensive Poison Type Pokemon is Mega-Beedrill and The Strongest Defensive Poison Type is Toxapex. Check this <a href='https://apuadh.github.io/Data-Science-One-Final-Project/poison.html' target=_blank class='poison_a'>link</a> out to see why"
}
document.getElementById("bug").onclick = function(){
  document.getElementById("text").innerHTML = "The Strongest Offensive Bug Type Pokemon is Pheromosa and The Strongest Defensive Bug Type Pokemon is Shuckle. Check this <a href='https://apuadh.github.io/Data-Science-One-Final-Project/bug.html' target=_blank class='bug_a'>link</a> out to see why"
}
document.getElementById("flying").onclick = function(){
  document.getElementById("text").innerHTML = "The Strongest Offensive Flying Type Pokemon is a Tossup Between Mega-Aerodactyl and Mega-Rayquaza and The Strongest Defensive Flying Type Pokemon is Lugia. Check this <a href='https://apuadh.github.io/Data-Science-One-Final-Project/flying.html' target=_blank class='flying_a'>link</a> out to see why"
}
document.getElementById("psychic").onclick = function(){
  document.getElementById("text").innerHTML = "The Strongest Offensive Psychic Type Pokemon is a Tossup Between Deoxys Attack Form and Mega-Mewtwo Y and The Strongest Defensive Psychic Type Pokemon is Deoxys Defence Form. Check this <a href='https://apuadh.github.io/Data-Science-One-Final-Project/psychic.html' target=_blank class='psychic_a'>link</a> out to see why"
}
document.getElementById("dark").onclick = function(){
  document.getElementById("text").innerHTML = "The Strongest Offensive Dark Type Pokemon is Ash-Greninja and The Strongest Defensive Bug Type Pokemon is Mega-Tyranitar. Check this <a href='https://apuadh.github.io/Data-Science-One-Final-Project/dark.html' target=_blank class='dark_a'>link</a> out to see why"
}
document.getElementById("ghost").onclick = function(){
  document.getElementById("text").innerHTML = "The Strongest Offensive Ghost Type Pokemon is a Tossup Between Mega-Gengar and Ghost Rider Calyrex and The Strongest Defensive Ghost Aegislash Shield Form Type Pokemon is Mega-Tyranitar. Check this <a href='https://apuadh.github.io/Data-Science-One-Final-Project/ghost.html' target=_blank class='ghost_a'>link</a> out to see why"
}
document.getElementById("fairy").onclick = function(){
  document.getElementById("text").innerHTML = "The Strongest Offensive Fairy Type Pokemon is Zacian Crowned Sword and The Strongest Defensive Fairy Type Pokemon is Diancie. Check this <a href='https://apuadh.github.io/Data-Science-One-Final-Project/fairy.html' target=_blank class='fairy_a'>link</a> out to see why"
}
document.getElementById("steel").onclick = function(){
  document.getElementById("text").innerHTML = "The Strongest Offensive Steel Type Pokemon is Zacian Crowned Sword and The Strongest Defensive Steel Type Pokemon is Bastiodon. Check this <a href='https://apuadh.github.io/Data-Science-One-Final-Project/steel.html' target=_blank class='steel_a'>link</a> out to see why"
}
document.getElementById("rock").onclick = function(){
  document.getElementById("text").innerHTML = "The Strongest Offensive Rock Type Pokemon is a Tossup Between Mega-Aerodactyl and Mega-Diance and The Strongest Defensive Rock Type Pokemon is Shuckle. Check this <a href='https://apuadh.github.io/Data-Science-One-Final-Project/rock.html' target=_blank class='rock_a'>link</a> out to see why"
}
document.getElementById("dragon").onclick = function(){
  document.getElementById("text").innerHTML = "The Strongest Offensive Dragon Type Pokemon is Ultra Necrozma and The Strongest Defensive Steel Type Pokemon is Eternatus Eternamax. Check this <a href='https://apuadh.github.io/Data-Science-One-Final-Project/dragon.html' target=_blank class='dragon_a'>link</a> out to see why"
}
document.getElementById("ground").onclick = function(){
  document.getElementById("text").innerHTML = "The Strongest Offensive Dragon Type Pokemon is Garchomp and The Strongest Defensive Ground Type Pokemon is a Tossup Between Claydol and Mega Steelix. Check this <a href='https://apuadh.github.io/Data-Science-One-Final-Project/ground.html' target=_blank class='ground_a'>link</a> out to see why"
}