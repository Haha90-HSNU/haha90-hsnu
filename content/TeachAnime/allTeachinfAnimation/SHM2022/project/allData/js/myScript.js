var fps=60,comp=AdobeAn.getComposition("98EA1A955B63F6489D0F00F6BFD1C4DE"),lib=comp.getLibrary(),myAnimate=new lib.myAnimate,canvas=$("<canvas>").attr("width","1600px").attr("height","900px");$("#mainAnimation").append(canvas);var stage=new createjs.Stage(canvas[0]);stage.enableMouseOver(1e3/60),stage.addChild(myAnimate),createjs.Touch.enable(stage),stage.update();var isPlay=!0,isStep=!1,tt=0,dt=.1,theta=0,omega=.2,RR=300;init();function init(){myAnimate.theKingV.latterV.rotation=myAnimate.theKingV.latterA.rotation=90,myAnimate.theKingV.latterV.y=myAnimate.theKingV.latterA.y=-30,myAnimate.slDT.minimum=.05,myAnimate.slDT.maximum=.3,myAnimate.slDT.value=.1,myAnimate.btnPlayStop.on("click",clickBtn),myAnimate.btnStep.on("click",clickBtn),setInterval(tick,1e3/fps)}function tick(){dt=myAnimate.slDT.value,tt+=dt*(isPlay?1:0),theta+=omega*dt*(isPlay?1:0),theta%=2*Math.PI,myAnimate.theCircle.bar.rotation=180*-theta/Math.PI,myAnimate.theCircle.ball.x=RR*Math.cos(theta),myAnimate.theCircle.ball.y=RR*Math.sin(-theta),myAnimate.theCircle.arA.x=myAnimate.theCircle.arV.x=myAnimate.theCircle.ball.x,myAnimate.theCircle.arA.y=myAnimate.theCircle.arV.y=myAnimate.theCircle.ball.y,myAnimate.theCircle.arV.rotation=180*-theta/Math.PI-90,myAnimate.theCircle.arA.rotation=180*-theta/Math.PI+180,myAnimate.theCircle.latterA.x=.8*RR*Math.cos(theta+.1),myAnimate.theCircle.latterA.y=-.8*RR*Math.sin(theta+.1),myAnimate.theCircle.latterV.x=1.1*RR*Math.cos(theta+.2),myAnimate.theCircle.latterV.y=-1.1*RR*Math.sin(theta+.2),myAnimate.theKingH.ball.x=RR*Math.cos(theta),myAnimate.theKingH.arA.x=myAnimate.theKingH.arV.x=myAnimate.theKingH.ball.x,myAnimate.theKingH.arV.scaleX=-Math.sin(theta),myAnimate.theKingH.arA.scaleX=-Math.cos(theta),myAnimate.theKingH.latterA.x=.4*RR*Math.cos(theta),myAnimate.theKingH.latterV.x=RR*Math.cos(theta)-180*Math.sin(theta),myAnimate.theKingV.ball.x=RR*Math.sin(theta),myAnimate.theKingV.arA.x=myAnimate.theKingV.arV.x=myAnimate.theKingV.ball.x,myAnimate.theKingV.arV.scaleX=Math.cos(theta),myAnimate.theKingV.arA.scaleX=-Math.sin(theta),myAnimate.theKingV.latterA.x=.4*RR*Math.sin(theta),myAnimate.theKingV.latterV.x=RR*Math.sin(theta)+180*Math.cos(theta),myAnimate.theCircle.arA.visible=myAnimate.theKingH.arA.visible=myAnimate.theKingV.arA.visible=myAnimate.theCircle.latterA.visible=myAnimate.theKingH.latterA.visible=myAnimate.theKingV.latterA.visible=myAnimate.chArA.checked,myAnimate.theCircle.arV.visible=myAnimate.theKingH.arV.visible=myAnimate.theKingV.arV.visible=myAnimate.theCircle.latterV.visible=myAnimate.theKingH.latterV.visible=myAnimate.theKingV.latterV.visible=myAnimate.chArV.checked,myAnimate.theKingH.visible=myAnimate.chKingH.checked,myAnimate.theKingV.visible=myAnimate.chKingV.checked,isStep&&(isPlay=!1),stage.update()}function clickBtn(a){var b=a.target.name;"btnPlayStop"===b?isStep?(isStep=!1,isPlay=!0):isPlay=!isPlay:"btnStep"===b&&(isStep=!0,isPlay=!0)}MyJS.myResize();