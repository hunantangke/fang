// JavaScript Document

window.onload=function(){
	var suoyin=0;
	var timer2=null;
	function st(){
		
		timer2=setInterval(function(){
			suoyin++;
			if(suoyin==6){
				suoyin=0;
			}
			for(var i=0;i<dians.length;i++){
				dians[i].className='';
				imgs[i].style.opacity='0';
			}
			dians[suoyin].className='current';
			imgs[suoyin].style.opacity='1';
			imgs[suoyin].style.zIndex='10'
			obgcolor.style.background=colors[suoyin];
		},2200);
	}
	st();
	var colors=['#FB9213','#120948','#CE013A','#8020F3','#BB1D1E','#000000']
	var obgcolor=document.getElementById('banner');
	var olunbo=document.getElementById('lunbo');
	var odians=document.getElementById('dians');
	var imgs=olunbo.getElementsByTagName('li');
	var dians=odians.getElementsByTagName('li');
	for(var i=0;i<dians.length;i++){
		dians[i].index=i;
		dians[i].onmouseover=function(){
			clearInterval(timer2);
			for(var i=0;i<dians.length;i++){
				dians[i].className='';
				imgs[i].style.opacity='0';
				imgs[i].style.zIndex='0';
				
			}
			this.className='current';
			imgs[this.index].style.opacity='1';
			imgs[this.index].style.zIndex='10';
			obgcolor.style.background=colors[this.index];
		}		
		dians[i].onmouseout=function(){
			suoyin=this.index;
			st();
		}		
	}
	
	/*var obtnl=document.getElementById('btn_l');
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
	}*/
	var obanner=document.getElementById('lunbo');
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
}