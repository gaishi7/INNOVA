//获取元素  动态获取
	var boxs = document.getElementsByClassName("box");
 
	createItem(9);
 
	//防止多个计时器开启扰乱动画
	var timer =null;
	returnTop.onclick = function(){
		var scrollToTop=setInterval(function() {
		　　var pos = window.pageYOffset;
			if ( pos >0 ) {
			　　window.scrollTo(0, pos - 20 );
			} else {
			　　window.clearInterval( scrollToTop );
			}
			}, 10); 
		
		//时刻获取页面的滚动偏移量
		var scroll = document.body.scrollTop || window.pageYOffset || document.documentElement.scrollTop;
		var t=0,d=6,b=scroll,c=0-b;
		if(timer==null){
			timer=setInterval(function(){
				t++;
				//设置滚动偏移量要主要兼容
				if(document.body.scrollTop){
					document.body.scrollTop=Tween.Bounce.easeOut(t,b,c,d);
				}else{
					document.documentElement.scrollTop=Tween.Bounce.easeOut(t,b,c,d);
				}
 
				if(t>=d){
					clearInterval(timer);
					timer=null;
				}
			},100);
		}
	}
 
	//无限添加
	window.onscroll = function(){
		//时刻获取页面的滚动偏移量
		var scroll = document.body.scrollTop || window.pageYOffset || document.documentElement.scrollTop;
		
		//控制返回按钮的隐藏和显示
		
		if(scroll>0){
			returnTop.style.display="block";
		}else{
			returnTop.style.display="none"
		}
 
		//页面滚动偏移+窗口可视区域 >= 瀑布流中最小一列的高度
		//当瀑布流中高度最小一列内容即将完全显示在页面上时,我们就需要创建并添加新元素
		//获取浏览器窗口可视区域高度
		var ch = document.documentElement.clientHeight;
		//获取瀑布流最小高度
		var mh = minIndex()[1];

		if(scroll+ch>=mh-10){
			createItem(5);
		}
	}
 
	//创建指定数量元素的瀑布流
	function createItem(n){
		for(var i=0;i<n;i++){
			var div = document.createElement("div");
			div.className="col-md-4 box-item";
			div.innerHTML=i+1;
			var adiv = document.createElement("a");
			adiv.href = "./news.html"
			div.appendChild(adiv);
			var imgdiv = document.createElement("div");
			imgdiv.className="service-media";
			adiv.appendChild(imgdiv);
			var img = document.createElement("img");
			imgdiv.appendChild(img);
			img.src = 'img/services/service-1.jpg';
			var txt = document.createElement("div");
			txt.className ="service-desc";
			adiv.appendChild(txt);
			var title = document.createElement("h3");
			title.innerText ="New Home Construction"
			txt.appendChild(title);
			var message = document.createElement("p");
			message.innerText ="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam sedasd commodo nibh ante facilisis bibendum dolor feugiat at."
			txt.appendChild(message);

			div.style.lineHeight=div.style.height;
			//找到最小一列的下标像里面添加新元素以平衡每列的高度
			var index = minIndex()[0];
			boxs[index].appendChild(div);
		}
	}
 
	//返回最低高度下标和最小高度函数,返回的是一个数组,第一个元素是最小下标的高度,第二个元素是最小高度的值
	function minIndex(){
		var heightArr=[];
		for(var i=0;i<boxs.length;i++){
			heightArr.push(boxs[i].clientHeight);
		}
		//假设最小高度是第一列的高度
		var minHeight=heightArr[0];
		for(var i=0;i<heightArr.length;i++){
			//如果有高度小于假设的最小高度,那么就用小的高度替换假设的值
			if(minHeight>heightArr[i]){
				minHeight=heightArr[i];
			}
		}
		//将数组中最小值的下标和最小高度进行返回
		return [heightArr.indexOf(minHeight),minHeight];
	}