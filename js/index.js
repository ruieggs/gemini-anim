new Vivus('usp1', {type: 'scenario-sync', duration: 25, forceRender: false});
new Vivus('usp2', {type: 'scenario-sync', duration: 25, forceRender: false});
new Vivus('usp3', {type: 'scenario-sync', duration: 25, forceRender: false});
new Vivus('nybil', {type: 'scenario-sync', duration: 25, forceRender: false});
new Vivus('en-regning', {type: 'scenario-sync', duration: 10, forceRender: false});
new Vivus('bruk-bilen', {type: 'scenario-sync', duration: 25, forceRender: false});
new Vivus('hvis-noe', {type: 'scenario-sync', duration: 15, forceRender: false});
new Vivus('enkelt', {type: 'scenario-sync', duration: 10, forceRender: false});
new Vivus('null-stress', {type: 'scenario-sync', duration: 20, forceRender: false});


var wrappedElement = new svgScroll.ScrollWrapper('#drawing');

// INITIAL STATE
document.addEventListener('DOMContentLoaded', function(){ 
    wrappedElement.hide();
    window.scrollTo(0,0);
}, false);

// ANIMATION
window.addEventListener("scroll", function(e) {
    wrappedElement.reveal([0.3, 1], [-0.2, 1],false);
});

window.onbeforeunload = function(){ window.scrollTo(0,0); }

window.sr = ScrollReveal();
sr.reveal('.thumbnail', { duration: 2000 }, 500);
sr.reveal('.element1', { duration: 2000 }, 500);
sr.reveal('.text_container1', { duration: 2000 }, 500);
sr.reveal('.element2', { duration: 2000 }, 500);
sr.reveal('.text_container2', { duration: 2000 }, 500);
sr.reveal('.element3', { duration: 2000 }, 500);
sr.reveal('.text_container3', { duration: 2000 }, 500);
sr.reveal('.element4', { duration: 2000 }, 500);
sr.reveal('.text_container4', { duration: 2000 }, 500);
sr.reveal('.element5', { duration: 2000 }, 500);
sr.reveal('.text_container5', { duration: 2000 }, 500);
sr.reveal('.element6', { duration: 2000 }, 500);
sr.reveal('.text_container6', { duration: 2000 }, 500);