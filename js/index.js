/*
* @Author: Administrator
* @Date:   2017-05-28 23:48:12
* @Last Modified by:   Administrator
* @Last Modified time: 2017-05-31 16:32:00
*/

'use strict';
$(function(){ 
//全屏播放
	if($.browser.msie && $.browser.version < 6){
		$('body').addClass('ltie6');
	}

//侧面导航条
    $('#dowebok').fullpage({
        continuousVertical: true,
        'navigation': true,
        anchors: ['page1', 'page2', 'page3', 'page4', 'page5', 'page6'],
        navigationTooltips: ['首页', '个人简介', '个人作品', '关于我', '作品集', '具体资料']
    });

    // setInterval(function(){
    //     $.fn.fullpage.moveSectionDown();
    // }, 6000);

//进度圆
  //   $(".circleChart#1").circleChart({
  //           size:100
  //       });
  //       $(".circleChart#0").circleChart({
  //           size: 100,
  //           value: 90,
  //           text: 0,
  //           onDraw: function(el, circle) {
  //               circle.text(Math.round(circle.value) + "%");
  //           }
  //       });
		// $(".circleChart#1").circleChart({
  //          size: 100,
  //           value: 90,
  //           text: 0,
  //           background: "#67ee3e",
  //           color: "#76ee3e",
  //           onDraw: function(el, circle) {
  //               circle.text(Math.round(circle.value) + "%");
  //           }
  //       });
  //       $(".circleChart#2").circleChart({
  //          size: 100,
  //           value: 90,
  //           text: 0,
  //           background: "#ffcc00",
  //           color: "#ffcc00",
  //           onDraw: function(el, circle) {
  //               circle.text(Math.round(circle.value) + "%");
  //           }
  //       });
  //      $(".circleChart#3").circleChart({
  //          size: 100,
  //           value: 90,
  //           text: 0,
  //           background: "#DD4D41",
  //           color: "#DD4D41",
  //           onDraw: function(el, circle) {
  //               circle.text(Math.round(circle.value) + "%");
  //           }
  //       });

        let ctx=document.querySelector('.one1').getContext('2d');
        let ctx1=document.querySelector('.two').getContext('2d');
        let ctx2=document.querySelector('.three').getContext('2d');
        let ctx3=document.querySelector('.fore').getContext('2d');
           cilCle(90,ctx);
           cilCle(80,ctx1);
            cilCle(95,ctx2);
           cilCle(70,ctx3);
           function cilCle(num,ctx){
               let t=setInterval(key,60),n=0;
               ctx.lineWidth=8;
               ctx.strokeStyle='#ffcc00';
               ctx1.strokeStyle='#0085d0';
               ctx2.strokeStyle="#43BF2E";
               ctx3.strokeStyle="#FF0000";
               ctx.lineCap='round';
               ctx.font='bold 30px 宋体';
               ctx.textAlign='center';
               ctx.textBaseline='middle';
               ctx.fillStyle='#ffcc00';
               ctx1.fillStyle='#0085d0';
               ctx2.fillStyle="#43BF2E";
                ctx3.fillStyle="#FF0000";
               function key() {
                   n++;
                   if(n==num){
                       clearInterval(t)
                   }else{
                       ctx.clearRect(0,0,100,100);
                       ctx.beginPath();
                       let ang=(n*360/100-90)*Math.PI/180;
                       ctx.arc(60,60,55,-Math.PI/2,ang,false);
                       ctx.stroke();
                       ctx.fillText(`${n+1}%`,60,60);
                   }
               }
           }

        // setInterval(function() {
        //     cilCle({
        //         value: Math.random() * 100
        //     });
        // }, 4000);
});
