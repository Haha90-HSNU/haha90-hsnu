﻿var MyJS=MyJS||{};!function(){var e;function t(){if(requestAnimationFrame(t),4===e.gameMD&&1===e.playMD){if(e.needNewQ){for(var a=-1;!e.allowArray[a];)a=Math.floor(8*Math.random()),log(a);e.queInt1=a+2;for(var n=-1;n<0||n===e.queInt2;)n=Math.floor(8*Math.random())+2;e.queInt2=n,e.myFlash.theGame.qNumA.n1.gotoAndStop(e.queInt1),e.myFlash.theGame.qNumA.n2.gotoAndStop(e.queInt1),e.myFlash.theGame.qNumB.n1.gotoAndStop(e.queInt2),e.myFlash.theGame.qNumB.n2.gotoAndStop(e.queInt2),e.timerNow=0}var o=e.queInt1*e.queInt2;o<10?(e.myFlash.theGame.aNumA.visible=!0,e.myFlash.theGame.aNumB.visible=!1,e.ansInt1=o,e.ansDigit=1):(e.myFlash.theGame.aNumA.visible=!0,e.myFlash.theGame.aNumB.visible=!0,e.ansInt1=Math.floor(o/10),e.ansInt2=o-10*Math.floor(o/10),e.ansDigit=2),e.myFlash.theGame.aNumA.n1.gotoAndStop(10),e.myFlash.theGame.aNumA.n2.gotoAndStop(10),e.myFlash.theGame.aNumB.n1.gotoAndStop(10),e.myFlash.theGame.aNumB.n2.gotoAndStop(10),e.ansNowTo=1,e.playMD=2,e.isTimerCounting=!0}else 4===e.gameMD&&e.playMD;var m=new Date,l=m.getTime()-e.oldDate.getTime();e.oldDate=m,e.isTimerCounting&&(e.timerNow+=l);var i=e.timerArray.length;e.timerAverage=0;for(var r=0;r<i;r++)e.timerAverage+=e.timerArray[r];e.timerAverage=i>0?e.timerAverage/i:0;var h=e.myFlash.theGame.theInfoPanel;h.textQCount.text=String(e.countOO)+"/"+String(e.maxQN);var c=e.countOO/(e.countOO+e.countXX)*100||0;h.textCorrectRatio.text=100===c?"100%":s(c,1)+"%",h.textTimePassed.text=s(e.timerNow/1e3,1)+"s",h.textAverageTime.text=s(e.timerAverage/1e3,1)+"s";var u=e.myFlash.theGameover;u.textQCount.text=String(e.maxQN),u.textCorrectRatio.text=100===c?"100%":s(c,1)+"%",u.textAverageTime.text=s(e.timerAverage/1e3,1)+"s",e.stage.update()}function a(t){if(4===e.gameMD&&2===e.playMD)if(t.which>=48&&t.which<=57){var a=t.which-48;o(n="btnNum"+String(a),e.myFlash.theGame[n])}else if(46===t.which){var n;o(n="btnNumClear",e.myFlash.theGame[n])}}function n(e){o(e.target.parent.parent.name,e.target.parent.parent)}function o(t,a){if("btnS0"===t.slice(0,5)){for(var n=parseInt(t.slice(5,6)),o=0,m=0;m<8;m++)o+=e.allowArray[m]?1:0;o>1&&(e.allowArray[n-2]=!e.allowArray[n-2],a.btnTop.gotoAndStop(e.allowArray[n-2]?1:0))}else if("btnSelectAll"===t)for(m=0;m<8;m++){e.allowArray[m]=!0,e.myFlash.theWelcome["btnS0"+(m+2)].btnTop.gotoAndStop(1)}else if("btnQN"===t.slice(0,5)){for(n=parseInt(t.slice(5,6)),m=0;m<5;m++){e.myFlash.theWelcome["btnQN"+(m+1)].btnBG.gotoAndStop(m==n-1?1:0)}1===n?e.maxQN=5:2===n?e.maxQN=10:3===n?e.maxQN=20:4===n?e.maxQN=30:5===n&&(e.maxQN=50)}else if("btnNum"===t.slice(0,6)){if(4===e.gameMD&&2===e.playMD)if((r=a.btnTop.circle).scaleX=r.scaleY=.5,r.visible=!0,r.alpha=1,createjs.Tween.get(r).to({alpha:0,scaleX:1.2,scaleY:1.2},300),"Clear"===t.slice(6,12))e.myFlash.theGame.aNumA.n1.gotoAndStop(10),e.myFlash.theGame.aNumA.n2.gotoAndStop(10),e.myFlash.theGame.aNumB.n1.gotoAndStop(10),e.myFlash.theGame.aNumB.n2.gotoAndStop(10),e.ansNowTo=1;else{n=parseInt(t.slice(6,7));e["userInt"+e.ansNowTo]=n,e.myFlash.theGame["aNum"+(1===e.ansNowTo?"A":"B")].n1.gotoAndStop(n),e.myFlash.theGame["aNum"+(1===e.ansNowTo?"A":"B")].n2.gotoAndStop(n),e.ansNowTo++,e.ansNowTo>e.ansDigit&&(!function(){var t;1===e.ansDigit?t=e.ansInt1===e.userInt1:2===e.ansDigit&&(t=e.ansInt1===e.userInt1&&e.ansInt2===e.userInt2);e.myFlash.theGame.ooxx.alpha=1,e.myFlash.theGame.ooxx.visible=!0,t?(e.myFlash.theGame.ooxx.gotoAndStop(0),e.needNewQ=!0,e.countOO++,e.timerArray.push(e.timerNow),e.timerNow=0,e.isTimerCounting=!1):(e.myFlash.theGame.ooxx.gotoAndStop(1),e.needNewQ=!1,e.countXX++);e.isTimerCounting=!1,createjs.Tween.get(e.myFlash.theGame.ooxx).wait(300).to({alpha:0},600).call(i)}(),e.playMD=3)}}else"btnPlayagain"===t&&l();var r}function m(t){e.gameMD=4,e.playMD=1,e.myFlash.theWelcome.visible=!1,e.timerArray=[],e.timerAverage=0,e.countOO=0,e.countXX=0}function l(){e.myFlash.theGame.ooxx.visible=!1,e.myFlash.theWelcome.visible=!0,e.myFlash.theGameover.visible=!1,e.gameMD=1}function i(){log("over"),e.myFlash.theGame.ooxx.visible=!1,e.countOO>=e.maxQN?(e.playMD=4,e.isTimerCounting=!1,e.myFlash.theGameover.visible=!0):e.playMD=1}function r(e){MyJS.myFullScreen()}function s(e,t){for(var a=t||1,n=String(Math.round(e*Math.pow(10,a)));n.length<=a;)n="0"+n;return ll=n.length,n.slice(0,ll-a)+"."+n.slice(ll-a,ll)}MyJS.TheWorld=function(){e=this,theWorld=e,e.gameMD=1,e.playMD=1,e.allowArray=[!0,!0,!0,!0,!0,!0,!0,!0],e.maxQN=20,e.needNewQ=!0,e.queInt1=0,e.queInt2=0,e.ansInt1=0,e.ansInt2=0,e.userInt1=0,e.userInt2=0,e.ansDigit=0,e.ansNowTo=0,e.countOO=0,e.countXX=0,e.timerArray=[],e.timerNow=0,e.isTimerCounting=!1,e.oldDate=new Date,e.canvas=$("<canvas>").attr("width","1280px").attr("height","720px"),$("#mainAnimation").append(this.canvas),e.myFlash=new lib.myFlash,e.stage=new createjs.Stage(e.canvas[0]),e.stage.addChild(e.myFlash),e.stage.update(),createjs.Touch.enable(e.stage),$(document).keypress(a);for(var o=0;o<=9;o++)(i=e.myFlash.theGame["btnNum"+o]).name="btnNum"+o,i.numberMC.n1.gotoAndStop(o),i.numberMC.n2.gotoAndStop(o),i.btnBG.stop(),i.btnTop.circle.visible=!1,i.addEventListener("click",n);for((i=e.myFlash.theGame.btnNumClear).name="btnNumClear",i.btnBG.stop(),i.btnTop.circle.visible=!1,i.addEventListener("click",n),o=0;o<8;o++)(i=e.myFlash.theWelcome["btnS0"+(o+2)]).name="btnS0"+(o+2),i.numberMC.n1.gotoAndStop(o+2),i.numberMC.n2.gotoAndStop(o+2),i.btnBG.stop(),i.btnTop.gotoAndStop(e.allowArray[o]?1:0),i.addEventListener("click",n);for((i=e.myFlash.theWelcome.btnSelectAll).name="btnSelectAll",i.btnBG.stop(),i.btnTop.stop(),i.addEventListener("click",n),(i=e.myFlash.theWelcome.btnStartGame).name="btnStartGame",i.addEventListener("click",m),o=0;o<5;o++){var i;(i=e.myFlash.theWelcome["btnQN"+(o+1)]).name="btnQN"+(o+1),i.gotoAndStop(o),i.btnBG.gotoAndStop(2==o?1:0),i.btnTop.stop(),i.addEventListener("click",n)}e.isFullScreened=!1,(i=e.myFlash.theWelcome.btnFullScreen).addEventListener("click",r),(i=e.myFlash.theGameover.btnPlayagain).name="btnPlayagain",i.btnBG.stop(),i.btnTop.circle.visible=!1,i.addEventListener("click",n),l(),gameMD=1,gameMD,t(),MyJS.myResize()}}();