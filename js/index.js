'use strict'
window.onload=function(){
	var oAbout=document.getElementById('aboutme');
	var oIntro=document.getElementById('introduce');
	var oUp=document.getElementById('up');
	var speed=0;
	var timer=null;	
	oAbout.onclick=function(){
		var top=-450;
		var iTarget=100;
		timer=setInterval(function(){
			speed+=(iTarget-top)/5;
			speed*=0.7;
			top+=speed;
			oIntro.style.top=Math.ceil(top)+'px';
			if(oIntro.offsetTop==100){
				speed=0;
				clearInterval(timer);

			}
				
			},30);			
	}

	oUp.onclick=function(){
		var top2=100;
		var iTarget2=-450;
		timer=setInterval(function(){
			speed+=(iTarget2-top2)/5;
			speed*=0.7;
			top2+=speed;
			oIntro.style.top=Math.ceil(top2)+'px';
			if(oIntro.offsetTop==-450){
				speed=0;
				clearInterval(timer)
			}
		},30);
	}

	$(function(){
		$('#contact').click(function(){
			$('#contactme').show();
			$('#contactme').stop().animate({
				width:400
			})
		})
		$('#close').click(function(){
			$('contactme').hide();
			$('#contactme').stop().animate({
				width:0
			})
		})
	})
}