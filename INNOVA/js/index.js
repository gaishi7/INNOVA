// 轮播图部分
const glide = new Glide('.glide', {
  type: 'carousel',
  startAt: 0,
  autoplay: 3000,
  perView: 1
})

glide.mount()


//鼠标悬停预览视频部分
//鼠标移进去
function videoPlayback(e){ 
  //给视频标签添加缓存播放---video标签属性。
  e.setAttribute("autoplay","autoplay")
  //给视频标签添加循环播放---video标签属性。
  e.setAttribute("loop","loop")
  //播放视频
  e.play();
}
    
  //鼠标离开
  function videoStopped(e){
  //停止播放
  e.pause();
} 

// 弹窗播放视频部分
$('.videolist').each(function(){ //遍历视频列表
  $(this).hover(function(){ //鼠标移上来后隐藏封面
		$(this).find('.videolist-img').hide();
	},function(){
		$(this).find('.videolist-img').show();
	});
  $(this).click(function(){ //这个视频被点击后执行
		var img = $(this).attr('vpath');//获取视频预览图
		var video = $(this).attr('ipath');//获取视频路径
		$('.videos').html("<video id=\"video\" poster='"+img+"' style='width: 100%' src='"+video+"' preload=\"auto\" controls=\"controls\" autoplay=\"autoplay\"></video><img onClick=\"close1()\" class=\"vclose\" src=\"img/gb.png\" width=\"25px\" height=\"25px\"/>");
		$('.videos').show();
	});
});

function close1(){
	var v = document.getElementById('video');//获取视频节点
	$('.videos').hide();//点击关闭按钮关闭暂停视频
	v.pause();
	$('.videos').html();
}

// 右侧滚轮
function indicatorClick(id) {

  let domID = ['about', 'company', 'Service', 'portfolio', 'news', 'contact']

  let indicators = document.getElementsByClassName("xtalpi-about-position-indicator-item")

  for (let index = 0; index < indicators.length; index++) {
      var indicator = indicators[index];
      if (index === id) {

          indicator.classList.add('xtalpi-about-position-indicator-item-active')
          scrollToelement(domID[id])

      } else {

          indicator.classList.remove('xtalpi-about-position-indicator-item-active')

      }
  }
}

function scrollToelement(domID) {
const element = document.getElementById(domID)

element.scrollIntoView({
    behavior: "smooth",
    block: "start"
})

}

window.addEventListener('scroll', function (e) {

let indicators = document.getElementsByClassName("xtalpi-about-position-indicator-item")
var menuHeight = $("#menu").height(); 
var homeHeight = $("#home").height(); 
var aboutHeight = $("#about").height(); 
var companyHeight = $("#company").height();
var ServiceHeight = $("#Service").height();
var portfolioHeight = $("#portfolio").height();
var sectionHeight = $("#section-number").height();
var newsHeight = $("#news").height();
var contactHeight = $("#contact").height();
let position = 0

switch (true) {

    case window.scrollY < menuHeight + homeHeight + aboutHeight:
        position = 0
        break;

    case window.scrollY < menuHeight + homeHeight + aboutHeight + companyHeight:
        position = 1
        break;

    case window.scrollY < menuHeight + homeHeight + aboutHeight + companyHeight + ServiceHeight:
        position = 2
        break;

    case window.scrollY < menuHeight + homeHeight + aboutHeight + companyHeight + ServiceHeight + portfolioHeight + sectionHeight:
        position = 3
        break;

    case window.scrollY < menuHeight + homeHeight + aboutHeight + companyHeight + ServiceHeight + portfolioHeight + sectionHeight + newsHeight:
        position = 4
        break;
    
    case window.scrollY < menuHeight + homeHeight + aboutHeight + companyHeight + ServiceHeight + portfolioHeight + sectionHeight + newsHeight + contactHeight:
        position = 5
        break;

    default:
        position = -1
        break;
}

if (position !== -1) {

    for (let index = 0; index < indicators.length; index++) {
        var indicator = indicators[index];
        if (index === position) {

            indicator.classList.add('xtalpi-about-position-indicator-item-active')
            
        } else {

            indicator.classList.remove('xtalpi-about-position-indicator-item-active')

        }

    }
}


});
// 控制滚轮显示
$(window).scroll(function(){  //scroll事件
    　　  var win_top=$(this).scrollTop(); //获取滚动条位置
          var glideHeight = $("#home").outerHeight(); 
          var menuHeight = $("#menu").outerHeight();
    　　　if(win_top>menuHeight+glideHeight){
        　　　$(".xtalpi-about-position-indicator").addClass("another"); //添加类another（top：400px）
    　　　}
    　　　if(win_top<menuHeight+glideHeight){
    　　　　　$(".xtalpi-about-position-indicator").removeClass("another");  //移除类another（top：400px）
    　　　}
    })
    