const staggeringOption = {
    delay:300,
    distance:"50px",
    duration:500,
    easing:"ease-in-out",
    origin:"bottom"
};
ScrollReveal().reveal(".feature",{...staggeringOption,interval:350});