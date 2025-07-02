let controller = new ScrollMagic.Controller();
var tween = TweenMax.fromTo(
    ".about-img",
    0.5,
    {left:"50vw"},
    {left:-10,opacity:0},
    0.15
);
new ScrollMagic.Scene({
    offset:0,
    duration:"50%",
    triggerElement:".about-img",
})
  .setTween(tween)
  .setPin(".about-img")
  .addTo(controller);