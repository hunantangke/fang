$(function(){
	var _hmt = _hmt || [];
	(function() {
	  var hm = document.createElement("script");
	  hm.src = "../../../hm.baidu.com/hm.js-b8035dbe09bd3dce95a02430db98ce91";
	  var s = document.getElementsByTagName("script")[0]; 
	  s.parentNode.insertBefore(hm, s);
	})();
	
	var oweixin=document.getElementById('weixin');
	var otwoma=document.getElementById('twoma');
	oweixin.onmouseover=function(){	
	
		otwoma.style.display='block';
		otwoma.style.opacity='0';
		setTimeout(function(){
			otwoma.style.opacity='1';
		},30);
	}
	
	oweixin.onmouseout=function(){
		
		otwoma.style.opacity='0';
		setTimeout(function(){
			otwoma.style.display='none';
		},300);
	}
	
	$('.navlan>li').hover(function(e) {
     	$(this).children(':eq(1)').stop().slideToggle();   
    });
	
	var suoyin=0;
	var timer2=null;
	function st(){
		
		timer2=setInterval(function(){
			suoyin++;
			if(suoyin==6){
				suoyin=0;
			}
			for(var i=0;i<dians.length;i++){
				dians[i].style.background='#DDDDDD';
				imgs[i].style.opacity='0';
				imgs[i].style.zIndex='0';
			}
			dians[suoyin].style.background='#A10000';
			imgs[suoyin].style.opacity='1';
			imgs[suoyin].style.zIndex='10';
		},2300);
	}
	st();
	var olunbo=document.getElementById('lunbo');
	var odians=document.getElementById('dians');
	var imgs=olunbo.getElementsByTagName('li');
	var dians=odians.getElementsByTagName('li');
	for(var i=0;i<dians.length;i++){
		dians[i].index=i;
		dians[i].onmouseover=function(){
			clearInterval(timer2);
			for(var i=0;i<dians.length;i++){
				dians[i].style.background='#DDDDDD';
				imgs[i].style.opacity='0';
				imgs[i].style.zIndex='0';
			}
			this.style.background='#A10000';
			imgs[this.index].style.opacity='1';
			imgs[this.index].style.zIndex='10';
		}		
		dians[i].onmouseout=function(){
			suoyin=this.index;
			st();
		}		
	}
	
	var obtnl=document.getElementById('btn_l');
	var obtnr=document.getElementById('btn_r');
	obtnl.onclick=function(){
		suoyin--
		if(suoyin==-1){
				suoyin=5;
			}
		for(var i=0;i<dians.length;i++){
			dians[i].style.background='#DDDDDD';
			imgs[i].style.opacity='0';
			imgs[i].style.zIndex='0';
		}
		dians[suoyin].style.background='#A10000';
		imgs[suoyin].style.opacity='1';
		imgs[suoyin].style.zIndex='10';
	}
	obtnr.onclick=function(){
		suoyin++;
		if(suoyin==6){
				suoyin=0;
			}
		for(var i=0;i<dians.length;i++){
			dians[i].style.background='#DDDDDD';
			imgs[i].style.opacity='0';
			imgs[i].style.zIndex='0';
		}
		dians[suoyin].style.background='#A10000';
		imgs[suoyin].style.opacity='1';
		imgs[suoyin].style.zIndex='0';
	}
	obtnl.onmouseover=function(){
		obtnl.style.backgroundPosition='-3px -66px';
		clearInterval(timer2);
	}
	obtnl.onmouseout=function(){
		clearInterval(timer2);
		obtnl.style.backgroundPosition='-3px -5px';
		st();
	}
	obtnr.onmouseover=function(){
		obtnr.style.backgroundPosition='-60px -66px';
		clearInterval(timer2);
	}
	obtnr.onmouseout=function(){
		clearInterval(timer2);
		obtnr.style.backgroundPosition='-60px -5px';
		st();
	}
	var obanner=document.getElementById('banner');
	obanner.onmouseover=function(){
		/*obtnl.style.display='block';
		obtnr.style.display='block';*/
		clearInterval(timer2);
	}
	obanner.onmouseout=function(){
		clearInterval(timer2);
		/*obtnl.style.display='none';
		obtnr.style.display='none';*/
		st();
	}
	
	/* 回顶部 */
	$('.backtop .dingbu').click(function(){
		$('html,body').animate({scrollTop:0},600);
	});
	
	/* 购物车 */
	$('.search_r .car').hover(function(){
		$(this).toggleClass('car2');
		$('.search_r .car_under').stop().slideToggle(200);
	});
})