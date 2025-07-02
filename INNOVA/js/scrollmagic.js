var controller = new ScrollMagic.Controller();
var scene = new ScrollMagic.Scene({
                    triggerElement: ".portfolio-item",
                    offset:30,

                })
                .setTween(".portfolio-itemsall", 0.5, { scale:1.05})// trigger a TweenMax.to tween
                .addIndicators({name: "1 (duration: 0)"}) // add indicators (requires plugin)
                .addTo(controller);