window.onload=function(){
	var _hmt = _hmt || [];
	(function() {
	  var hm = document.createElement("script");
	  hm.src = "../../../hm.baidu.com/hm.js-b8035dbe09bd3dce95a02430db98ce91";
	  var s = document.getElementsByTagName("script")[0]; 
	  s.parentNode.insertBefore(hm, s);
	})();
	
	var otimeboxM=document.getElementById('timeboxM');
	var otimebox=document.getElementById('timebox');
	var myDates=new Date();
	otimebox.innerHTML=myDates.getSeconds();
	otimeboxM.innerHTML=myDates.getMinutes();
	function timer(){
		setInterval(function(){
			var myDate=new Date();
			otimebox.innerHTML=myDate.getSeconds();
			otimeboxM.innerHTML=myDates.getMinutes();
		},1000);
	}
	timer();
	
	
	var suoyin=0;
	var timer2=null;
	function st(){
		
		timer2=setInterval(function(){
			suoyin++;
			if(suoyin==8){
				suoyin=0;
			}
			for(var i=0;i<dians.length;i++){
				dians[i].style.background='#fff';
				imgs[i].style.opacity='0';
			}
			dians[suoyin].style.background='#DB192A';
			imgs[suoyin].style.opacity='1';
			imgs[suoyin].style.zIndex='10'
		},2500);
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
				dians[i].style.background='#fff';
				imgs[i].style.opacity='0';
				imgs[i].style.zIndex='0';
				
			}
			this.style.background='#DB192A';
			imgs[this.index].style.opacity='1';
			imgs[this.index].style.zIndex='10'
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
				suoyin=7;
			}
		for(var i=0;i<dians.length;i++){
			dians[i].style.background='#fff';
			imgs[i].style.opacity='0';
			imgs[i].style.zIndex='0';
		}
		dians[suoyin].style.background='#DB192A';
		imgs[suoyin].style.opacity='1';
		imgs[suoyin].style.zIndex='10'
	}
	obtnr.onclick=function(){
		suoyin++;
		if(suoyin==8){
				suoyin=0;
			}
		for(var i=0;i<dians.length;i++){
			dians[i].style.background='#fff';
			imgs[i].style.opacity='0';
			imgs[i].style.zIndex='0';
		}
		dians[suoyin].style.background='#DB192A';
		imgs[suoyin].style.opacity='1';
		imgs[suoyin].style.zIndex='10'
	}
	obtnl.onmouseover=function(){
		obtnl.style.background='rgba(0,0,0,0.5)';
		clearInterval(timer2);
	}
	obtnl.onmouseout=function(){
		clearInterval(timer2);
		obtnl.style.background='rgba(0,0,0,0.1)';
		st();
	}
	obtnr.onmouseover=function(){
		obtnr.style.background='rgba(0,0,0,0.5)';
		clearInterval(timer2);
	}
	obtnr.onmouseout=function(){
		clearInterval(timer2);
		obtnr.style.background='rgba(0,0,0,0.1)';
		st();
	}
	var obanner=document.getElementById('banner');
	obanner.onmouseover=function(){
		obtnl.style.display='block';
		obtnr.style.display='block';
		clearInterval(timer2);
	}
	obanner.onmouseout=function(){
		clearInterval(timer2);
		obtnl.style.display='none';
		obtnr.style.display='none';
		st();
	}
	
	var oboxs=document.getElementsByClassName('content04_r_nr');
	var odongxian=document.getElementsByClassName('dongxian');
	var oas=document.getElementsByClassName('taba');
	
	var index;
	for(var i=0;i<oas.length;i++){
		oas[i].onmouseover=function(){
			for(var i=0;i<oas.length;i++){
					oas[i].index=i;
					oboxs[i].style.display='none';
					odongxian[0].style.left=this.index*78+'px';
				}
			oboxs[this.index].style.display='block';
		}
	}
}