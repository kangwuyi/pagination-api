$(document).ready(function () {
	//返回头部
	$(function() {
		function b(){
			var h = $(window).height()/2;
			// h = 400;
			var t = $(document).scrollTop();
			if(t > h){
				$('#gotop').fadeIn();
			}else{
				$('#gotop').fadeOut(700);
			}
		}
		$(document).ready(function(e) {
			b();
			$('#gotop').click(function(){
				clearInterval(timer);
				var timer = setInterval(function() {
					var now = $(document).scrollTop();; //滚动条竖直距离
					speed = (0 - now) / 10;
					speed = Math.floor(speed);
					if (now == 0){
						clearInterval(timer);
					}
				document.documentElement.scrollTop = now + speed; //标准模式下的浏览器
				document.body.scrollTop = now + speed; //怪异模式下的浏览器
				}, 15);
				//$(document).scrollTop(0);
			})
		});
		$(window).scroll(function(e){
			b();
		})
	});
});