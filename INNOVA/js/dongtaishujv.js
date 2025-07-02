//这是动态数据变换的js
ScrollReveal().reveal(".data-section",{
    beforeReveal:()=>{
        anime({
            targets:".data-piece .num",
            innerHTML: el => {
                return [0,el.innerHTML];
            },
            duration:2000,
            round:1,
            easing:"easeInExpo"
        });
    }
});
