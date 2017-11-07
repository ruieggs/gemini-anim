new Vivus('usp1', {type: 'scenario-sync', duration: 25, forceRender: false});
new Vivus('usp2', {type: 'scenario-sync', duration: 25, forceRender: false});
new Vivus('usp3', {type: 'scenario-sync', duration: 25, forceRender: false});
new Vivus('nybil', {type: 'scenario-sync', duration: 25, forceRender: false});

var wrappedElement = new svgScroll.ScrollWrapper('#drawing');

// INITIAL STATE
document.addEventListener('DOMContentLoaded', function(){ 
    wrappedElement.hide();
    window.scrollTo(0,0);
}, false);

// ANIMATION
window.addEventListener("scroll", function(e) {
    wrappedElement.reveal([0.4, 1], [0, 1],false);
});

window.onbeforeunload = function(){ window.scrollTo(0,0); }

window.sr = ScrollReveal();
sr.reveal('.thumbnail', { duration: 2000 }, 500);
sr.reveal('.number1', { duration: 2000 });
sr.reveal('.element1', { duration: 2000 });
sr.reveal('.number2', { duration: 2000 });
sr.reveal('.element2', { duration: 2000 });
sr.reveal('.number3', { duration: 2000 });
sr.reveal('.element3', { duration: 2000 });