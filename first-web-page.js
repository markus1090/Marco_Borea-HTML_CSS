/* Scrollify */
$(function() {
  $.scrollify({
    section:".panel",
    scrollbars:false,
    
    before:function(i,panels) {
      let ref = panels[i].attr("data-section-name");
      $(".pagination .active").removeClass("active");
      $(".pagination").find("a[href=\"#" + ref + "\"]").addClass("active");
    },
  
    afterRender:function() {
      let pagination = "<ul class=\"pagination\">";
      let activeClass = "";
      $(".panel").each(function(i) {
        activeClass = "";
        if(i===$.scrollify.currentIndex()) {
          activeClass = "active";
        }
        pagination += "<li><a class=\"" + activeClass + "\" href=\"#" + $(this).attr("data-section-name") + "\"><span class=\"hover-text\">" + $(this).attr("data-section-name").charAt(0).toUpperCase() + $(this).attr("data-section-name").slice(1) + "</span></a></li>";
      });

      pagination += "</ul>";

      $("#introduction").append(pagination);
      $(".pagination a").on("click",$.scrollify.move);
    }
  });
});

/* Implementazione puntini di sospensione */
function dot () {
  setTimeout(function() { 
    $("#dot1").toggle();  }, 500);
    
  setTimeout(function(){ 
    $("#dot2").toggle();  }, 1000);
    
  setTimeout(function(){ 
    $("#dot3").toggle();  }, 1500);

  setTimeout(function(){
    $("#dot1").toggle();
    $("#dot2").toggle();
    $("#dot3").toggle();  }, 2000);
}

setInterval(dot,2500);

/* Animazione testi Home */
anime.timeline({loop: false})
.add({
  targets: '.ml5 .line',
  opacity: [0.5,1],
  scaleX: [0, 1],
  easing: "easeInOutExpo",
  duration: 1400 
}).add({
  targets: '.ml5 .line',
  duration: 1200, 
  easing: "easeOutExpo",
  translateY: (el, i) => (-0.625 + 0.625*2*i) + "em"
}).add({
  targets: '.ml5 .ampersand',
  opacity: [0,1],
  scaleY: [0.5, 1],
  easing: "easeOutExpo",
  duration: 1200, 
  offset: '-=600'
}).add({
  targets: '.ml5 .letters-left',
  opacity: [0,1],
  translateX: ["0.5em", 0],
  easing: "easeOutExpo",
  duration: 1200, 
  offset: '-=300'
}).add({
  targets: '.ml5 .letters-right',
  opacity: [0,1],
  translateX: ["-0.5em", 0],
  easing: "easeOutExpo",
  duration: 1200, 
  offset: '-=600'
})

function illustration () {
  $(".illustration").show("slow");  
}
  
illustration();

setTimeout(function(){ 
  anime.timeline({loop: false})
  .add({
    targets: '.ml15 .word',
    scale: [14,1],
    opacity: [0,1],
    easing: "easeOutCirc",
    duration: 800,
    delay: (el, i) => 800 * i
  }); 
},4000);