'use strict';var app,grid,drawLineNow,eraserLineNow,lineGraphics,drawGraphics,fps=60,log=console.log,lenMD=1,gridDx=40,gX0=800,gY0=400,isObjDraging=!1,objX=-6*gridDx,objH=80,objY=-80,drawMD=!1,isDrawing=!1,drawLines=[],drawingColor=1;function init(){drawGraphics=new createjs.Graphics;let a=new createjs.Shape(drawGraphics);world2D.theGrid.addChild(a),lineGraphics=new createjs.Graphics;let b=new createjs.Shape(lineGraphics);world2D.theGrid.addChild(b),world2D.theGrid.obj.on("mousedown",objDown),world2D.on("pressup",myUp),world2D.chImage.checked=!0,world2D.rbLen1.on("click",clickRBLen),world2D.rbLen2.on("click",clickRBLen),world2D.rbLen3.on("click",clickRBLen),world2D.rbLen4.on("click",clickRBLen),setLenMD(lenMD),world2D.btnDrawArea.on("mousedown",drawDown),world2D.btnDrawArea.on("pressmove",drawMove),world2D.controlDraw.btnCBox1.on("click",clickDrawBox),world2D.controlDraw.btnCBox2.on("click",clickDrawBox),world2D.controlDraw.btnCBox3.on("click",clickDrawBox),world2D.controlDraw.btnCBox4.on("click",clickDrawBox),world2D.controlDraw.btnCBox5.on("click",clickDrawBox),world2D.controlDraw.btnUndo.on("click",clickDrawUndo),world2D.controlDraw.btnClear.on("click",clickDrawClear),setInterval(tick,1e3/fps)}function tick(){isObjDraging?(objX=stage2D.mouseX-gX0,objX<-16*gridDx?objX=-16*gridDx:objX>16*gridDx&&(objX=16*gridDx),objY=(0<stage2D.mouseY-gY0?1:-1)*objH,world2D.theGrid.obj.dragMe.visible&&(world2D.theGrid.obj.dragMe.alpha-=.02,1e-4>world2D.theGrid.obj.dragMe.alpha&&(world2D.theGrid.obj.dragMe.visible=!1))):objX=Math.round(objX/gridDx)*gridDx,world2D.theGrid.obj.x=objX,world2D.theGrid.obj.scaleY=world2D.theGrid.obj.scaleX=0>objY?1:-1;let a=4*gridDx;(2===lenMD||3===lenMD)&&(a*=-1);let b=Math.abs(objX);b===a&&(b=.9999*a);let c=1/(1/a-1/b);world2D.theGrid.imgI.x=world2D.theGrid.imgR.x=c*(2<lenMD?-1:1)*(0>objX?1:-1),world2D.theGrid.imgR.y=world2D.theGrid.imgI.y=0,world2D.theGrid.imgR.scaleX=world2D.theGrid.imgI.scaleX=-c/b,world2D.theGrid.imgR.scaleY=world2D.theGrid.imgI.scaleY=-c/b*(0>objY?1:-1),world2D.theGrid.imgI.visible=0>c&&b!=a&&world2D.chImage.checked,world2D.theGrid.imgR.visible=0<=c&&b!=a&&world2D.chImage.checked,world2D.theGrid.lens.scaleX=0>objX?1:-1;let d=lineGraphics;if(d.clear(),world2D.chLine1.checked&&(d.setStrokeStyle(3),d.beginStroke("#FFFF00"),realLineTo(d,objX,-objH*(0>objY?1:-1),0,-objH*(0>objY?1:-1)),realLineTo(d,0,-objH*(0>objY?1:-1),(0<a?16:8)*gridDx*(0>objX?1:-1)*(2<lenMD?-1:1),(0<a?6:-6)*gridDx*(0>objY?1:-1)),0>c&&dashedLineTo(d,0,-objH*(0>objY?1:-1),-(0<a?8:16)*gridDx*(0>objX?1:-1)*(2<lenMD?-1:1),-(0<a?6:-6)*gridDx*(0>objY?1:-1),5)),world2D.chLine2.checked&&Math.abs(a-b)>.1*gridDx&&(d.setStrokeStyle(3),d.beginStroke("#FF99FF"),realLineTo(d,objX,-objH*(0>objY?1:-1),0,c/b*objH*(0>objY?1:-1)),realLineTo(d,0,c/b*objH*(0>objY?1:-1),16*gridDx*(0>objX?1:-1)*(2<lenMD?-1:1),c/b*objH*(0>objY?1:-1)),0>c&&dashedLineTo(d,0,c/b*objH*(0>objY?1:-1),-16*gridDx*(0>objX?1:-1)*(2<lenMD?-1:1),c/b*objH*(0>objY?1:-1),5)),world2D.chLine3.checked){d.setStrokeStyle(3),d.beginStroke("#66FF66");let a=Math.atan2(objH*(0>objY?1:-1),-objX),b=Math.abs(16*gridDx/Math.cos(a)),e=Math.abs(6*gridDx/Math.sin(a));realLineTo(d,objX,-objH*(0>objY?1:-1),0,0),realLineTo(d,0,0,Math.min(b,e)*Math.cos(a)*(2<lenMD?-1:1),Math.min(b,e)*Math.sin(a)),2<lenMD&&dashedLineTo(d,0,0,-Math.min(b,e)*Math.cos(a)*(2<lenMD?-1:1),-Math.min(b,e)*Math.sin(a),5),1===lenMD&&0>c&&dashedLineTo(d,objX,-objH*(0>objY?1:-1),-Math.min(b,e)*Math.cos(a)*(2<lenMD?-1:1),-Math.min(b,e)*Math.sin(a),5)}if(world2D.chLine4.checked){d.setStrokeStyle(3),d.beginStroke("#00FFFF");let a=Math.atan2(c/b*objH*(0>objY?1:-1)+4*gridDx,c*(2<lenMD?-1:1)*(0>objX?1:-1)),e=Math.abs(16*gridDx/Math.cos(a+Math.PI*(0>c?1:0))),f=Math.abs((0>Math.sin(a+Math.PI*(0>c?1:0))?2:10)*gridDx/Math.sin(a+Math.PI*(0>c?1:0)));realLineTo(d,objX,-objH*(0>objY?1:-1),0,-4*gridDx),realLineTo(d,0,-4*gridDx,Math.min(e,f)*Math.cos(a+Math.PI*(0>c?1:0)),Math.min(e,f)*Math.sin(a+Math.PI*(0>c?1:0))-4*gridDx),0>c&&(e=Math.abs(16*gridDx/Math.cos(a)),f=Math.abs((0>Math.sin(a)?2:10)*gridDx/Math.sin(a)),dashedLineTo(d,0,-4*gridDx,Math.min(e,f)*Math.cos(a),Math.min(e,f)*Math.sin(a)-4*gridDx,5))}if(world2D.chLine5.checked){d.setStrokeStyle(3),d.beginStroke("#FF9900");let a=Math.atan2(c/b*objH*(0>objY?1:-1)-4*gridDx,c*(2<lenMD?-1:1)*(0>objX?1:-1)),e=Math.abs(16*gridDx/Math.cos(a+Math.PI*(0>c?1:0))),f=Math.abs((0>Math.sin(a+Math.PI*(0>c?1:0))?10:2)*gridDx/Math.sin(a+Math.PI*(0>c?1:0)));realLineTo(d,objX,-objH*(0>objY?1:-1),0,4*gridDx),realLineTo(d,0,4*gridDx,Math.min(e,f)*Math.cos(a+Math.PI*(0>c?1:0)),Math.min(e,f)*Math.sin(a+Math.PI*(0>c?1:0))+4*gridDx),0>c&&(e=Math.abs(16*gridDx/Math.cos(a)),f=Math.abs((0>Math.sin(a)?10:2)*gridDx/Math.sin(a)),dashedLineTo(d,0,4*gridDx,Math.min(e,f)*Math.cos(a),Math.min(e,f)*Math.sin(a)+4*gridDx,5))}if(world2D.controlDraw.visible=world2D.btnDrawArea.visible=world2D.chDraw.checked,drawGraphics.clear(),world2D.chDraw.checked){let a=drawLines.length,b=drawGraphics;b.setStrokeStyle(5);for(var e=0;e<a;e++){let a=drawLines[e];b.beginStroke(a.color),b.moveTo(a.x1,a.y1),b.lineTo(a.x2,a.y2)}}world2D.stage.update()}MyJS.myResize();function objDown(){isObjDraging=!0}function myUp(){isObjDraging=!1,isDrawing&&(isDrawing=!1),drawLineNow=null,eraserLineNow=null}function drawDown(){let a=stage2D.mouseX-gX0,b=stage2D.mouseY-gY0;a=Math.round(2*(a/gridDx))/2*gridDx,b=Math.round(2*(b/gridDx))/2*gridDx;let c;1===drawingColor?c="#FFFFFF":2===drawingColor?c="#FFFF66":3===drawingColor?c="#FF3333":4===drawingColor?c="#66FFFF":5===drawingColor&&(c="#99ff99"),drawLineNow=new OneLine(c,a,b,a,b),drawLines.push(drawLineNow)}function drawMove(){let a=stage2D.mouseX-gX0,b=stage2D.mouseY-gY0;a=Math.round(2*(a/gridDx))/2*gridDx,b=Math.round(2*(b/gridDx))/2*gridDx,drawLineNow.x2=a,drawLineNow.y2=b}function clickDrawBox(a){var b=a.target.name;"btnCBox1"===b?drawingColor=1:"btnCBox2"===b?drawingColor=2:"btnCBox3"===b?drawingColor=3:"btnCBox4"===b?drawingColor=4:"btnCBox5"===b&&(drawingColor=5),world2D.controlDraw.colorPointer.x=60*(drawingColor-1)}function clickDrawUndo(){0<drawLines.length&&drawLines.pop()}function clickDrawClear(){drawLines=[]}function dashedLineTo(a,b,c,d,e,f){a.moveTo(b,c);for(var g=d-b,h=e-c,i=Math.floor(Math.sqrt(g*g+h*h)/f),j=0;j++<i;)b+=g/i,c+=h/i,a[0==j%2?"moveTo":"lineTo"](b,c);a[0==j%2?"moveTo":"lineTo"](d,e)}function realLineTo(a,b,c,d,e){a.moveTo(b,c),a.lineTo(d,e)}function clickRBLen(a){var b=a.target.parent.name;let c=parseInt(b.charAt(5));setLenMD(c)}function setLenMD(a){lenMD=a,world2D.theGrid.lens.gotoAndStop(lenMD-1),world2D.rbLen1.checked=1===lenMD,world2D.rbLen2.checked=2===lenMD,world2D.rbLen3.checked=3===lenMD,world2D.rbLen4.checked=4===lenMD}class OneLine{constructor(a,b,c,d,e){this.color=a,this.x1=b,this.y1=c,this.x2=d,this.y2=e}}init();