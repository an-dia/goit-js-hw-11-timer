(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"1DEj":function(t,e,n){},QfWi:function(t,e,n){"use strict";n.r(e);n("RtS0"),n("e+qc"),n("3dw1");function a(t){var e=t.days,n=t.hours,a=t.mins,r=t.secs;this.refs.days.textContent=""+e,this.refs.hours.textContent=""+n,this.refs.mins.textContent=""+a,this.refs.secs.textContent=""+r}var r=function(){function t(t){var e=t.selector,n=t.targetDate,a=t.onTick;this.intervalId=null,this.selector=e,this.targetDate=n,this.onTick=a,this.refs={days:document.querySelector('[data-value="days"]'),hours:document.querySelector('[data-value="hours"]'),mins:document.querySelector('[data-value="mins"]'),secs:document.querySelector('[data-value="secs"]'),title:document.querySelector(".title"),animation:document.querySelectorAll(".animation")}}var e=t.prototype;return e.startTimer=function(){var t=this;this.targetDate!==Date.now()?this.intervalId=setInterval((function(){var e=Date.now(),n=t.targetDate-e,a=t.getTimeComponents(n);t.onTick(a)}),1e3):this.stopTimer()},e.stopTimer=function(){this.refs.title.textContent="Happy New Year",this.refs.animation.forEach((function(t){t.classList.remove("animation")})),clearInterval(this.intervalId)},e.getTimeComponents=function(t){return{days:this.pad(Math.floor(t/864e5)),hours:this.pad(Math.floor(t%864e5/36e5)),mins:this.pad(Math.floor(t%36e5/6e4)),secs:this.pad(Math.floor(t%6e4/1e3))}},e.pad=function(t){return String(t).padStart(2,"0")},t}();new r({selector:"#timer-1",targetDate:new Date("January  01 , 2021"),onTick:a}),n("1DEj");new r({selector:"#timer-1",targetDate:new Date("January  01 , 2021"),onTick:a}).startTimer()}},[["QfWi",1,2]]]);
//# sourceMappingURL=main.2850afd04f1ce4ff5efc.js.map