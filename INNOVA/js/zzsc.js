
$(function(){
	$('.title-list li:not(:first)').mouseover(function(){
		var liindex = $('.title-list li').index(this);
		$(this).addClass('on').siblings().removeClass('on');
		$('.product-wrap div.product').eq(liindex).fadeIn(150).siblings('div.product').hide();
		var liWidth = $('.title-list li').width();
		$('.case .title-list p').stop(false,true).animate({'left' : liindex * liWidth + 'px'},300);
	});
	$('.product-wrap .product li').hover(function(){
		$(this).css("border-color","#ff6600");
		$(this).find('p > a').css('color','#ff6600');
	},function(){
		$(this).css("border-color","#fafafa");
		$(this).find('p > a').css('color','#666666');
	});
	$('.title-list li:first').mouseover(function(){
		var liindex = $('.title-list li').index(this);
		$(this).addClass('on').siblings().removeClass('on');
		$('.product-wrap div.product').eq(liindex).fadeIn(150).siblings('div.product').hide();
		var liWidth = $('.title-list li').width();
		$('.case .title-list p').stop(false,true).animate({'left' : liindex * liWidth + 'px'},300);
	});
	});

$(function(){
	var liindex = $('.selDef').index(this-1);
	$('.selDef').addClass('on').siblings().removeClass('on');
	$('.product-wrap div.product').eq(liindex).fadeIn(150).siblings('div.product').hide();
	var liWidth = $('.selDef').width();
	//$('.case .title-list p').stop(false,true).animate({'left' : liindex * liWidth + 'px'},300);
	$('.product-wrap .product li').hover(function(){
		$(this).css("border-color","#ff6600");
		$(this).find('p > a').css('color','#ff6600');
	},function(){
		$(this).css("border-color","#fafafa");
		$(this).find('p > a').css('color','#666666');
	});
	});
	