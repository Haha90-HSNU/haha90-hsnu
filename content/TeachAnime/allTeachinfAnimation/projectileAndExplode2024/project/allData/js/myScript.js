'use strict';var fireMain,ballMain,fireCM,ballCM,fireExp,fps=60,log=console.log,titleTime=120;const nnMax=50;var balls=[],fires=[],isPlay=!0,isAutoSlow=!1,gameMD=0,nnMD="2",nDir=3,n2Dir=2;const gg=2,v0=10,theta0=60*Math.PI/180;var mA=20,mB=20;const scale3D=2.3,dt=.05;var totalTime,expTimeTT,ttime=0,timeFire=0,explodeTimeR=.5,dragWho="X";function init(){ballMain=new TEACHER.ObjSphere(2,16711680),ballMain.rr=30,ballMain.tt=0,scene.add(ballMain),fireMain=new FireSmoke(200),fireCM=new FireSmoke(200),fireExp=new FireSmoke(100),scene.add(fireMain).add(fireCM).add(fireExp);for(var a=0;a<nnMax;a++){let a=new TEACHER.ObjSphere(1,65535),b=new FireSmoke(300);balls.push(a),fires.push(b),scene.add(a).add(b),a.v0=new THREE.Vector3,a.r0=new THREE.Vector3}ballCM=new THREE.Object3D,scene.add(ballCM),ballCM.add(new TEACHER.ObjBox(4,.5,.5,16776960)),ballCM.add(new TEACHER.ObjBox(.5,4,.5,16776960)),ballCM.add(new TEACHER.ObjBox(.5,.5,4,16776960)),initControl(),world2D.btnPlayStop.on("click",clickBtn),world2D.btnReset.on("click",clickBtn),world2D.on("pressup",myUp),world2D.controlMain.slMAMB.value=50,world2D.controlMain.slExplodeTime.value=50,world2D.btnN2.on("click",clickNN),world2D.btnNN.on("click",clickNN),world2D.controlMain.rbDir1.on("click",clickRBN),world2D.controlMain.rbDir2.on("click",clickRBN),world2D.controlMain.rbDir3.on("click",clickRBN),world2D.controlMain.rbDir4.on("click",clickRBN),world2D.controlMain.rbDir3.checked=!0,world2D.controlMain.rb2Dir1.on("click",clickRB2),world2D.controlMain.rb2Dir2.on("click",clickRB2),world2D.controlMain.rb2Dir2.checked=!0,world2D.chCM.checked=!0,world3D.cameraTarget.y=.5*(v0*Math.sin(theta0))**2/2/gg*scale3D,world2D.slCameraRR.value=120,setInterval(tick,1e3/fps)}function tick(){if(titleTime--,60<titleTime?(world2D.title.x=800,world2D.title.y=450,world2D.title.scaleX=world2D.title.scaleY=2):0<titleTime&&(world2D.title.x=(800*titleTime+260*(60-titleTime))/60,world2D.title.y=(450*titleTime+80*(60-titleTime))/60,world2D.title.scaleX=world2D.title.scaleY=(2*titleTime+1*(60-titleTime))/60),isAutoSlow=world2D.chAutoSlow.checked,0===gameMD){ttime=0,timeFire=0,world2D.controlMain.slExplodeTime.value=10*Math.round(world2D.controlMain.slExplodeTime.value/10),10>world2D.controlMain.slExplodeTime.value?world2D.controlMain.slExplodeTime.value=1:90<world2D.controlMain.slExplodeTime.value&&(world2D.controlMain.slExplodeTime.value=99),explodeTimeR=.9*explodeTimeR+.1*world2D.controlMain.slExplodeTime.value/100,totalTime=2*v0*Math.sin(theta0)/gg,expTimeTT=explodeTimeR*totalTime,world2D.controlMain.projectTrace.explode.x=12*v0*Math.cos(theta0)*expTimeTT,world2D.controlMain.projectTrace.explode.y=-12*(v0*Math.sin(theta0)*expTimeTT-1*expTimeTT**2);let b=world2D.controlMain.v0Adj2.ballA.x-world2D.controlMain.v0Adj2.ballB.x,c=world2D.controlMain.v0Adj2.ballA.y-world2D.controlMain.v0Adj2.ballB.y;if(world2D.controlMain.slMAMB.value=10*Math.round(world2D.controlMain.slMAMB.value/10),mA=.9*mA+.1*(20-.2*(world2D.controlMain.slMAMB.value-50)),mB=.9*mB+.1*(20+.2*(world2D.controlMain.slMAMB.value-50)),world2D.controlMain.v0Adj2.ballA.x=mB/(mA+mB)*b,world2D.controlMain.v0Adj2.ballA.y=mB/(mA+mB)*c,world2D.controlMain.v0Adj2.ballB.x=-mA/(mA+mB)*b,world2D.controlMain.v0Adj2.ballB.y=-mA/(mA+mB)*c,"X"!=dragWho){let c=world2D.stage.mouseX-world2D.controlMain.centerMass.x,b=world2D.stage.mouseY-world2D.controlMain.centerMass.y,d=Math.sqrt(c**2+b**2);d=50*Math.round(d/50);let e=Math.atan2(b,c);if(e=Math.round(e/(Math.PI/18))*(Math.PI/18),c=d*Math.cos(e),b=d*Math.sin(e),"A"===dragWho&&"2"===nnMD)world2D.controlMain.v0Adj2.ballA.theta0=e,world2D.controlMain.v0Adj2.ballB.theta0=e+Math.PI,world2D.controlMain.v0Adj2.ballA.x=.9*world2D.controlMain.v0Adj2.ballA.x+.1*c,world2D.controlMain.v0Adj2.ballA.y=.9*world2D.controlMain.v0Adj2.ballA.y+.1*b,world2D.controlMain.v0Adj2.ballB.x=.9*world2D.controlMain.v0Adj2.ballB.x-.1*mA/mB*c,world2D.controlMain.v0Adj2.ballB.y=.9*world2D.controlMain.v0Adj2.ballB.y-.1*mA/mB*b;else if("B"===dragWho&&"2"===nnMD)world2D.controlMain.v0Adj2.ballB.theta0=e,world2D.controlMain.v0Adj2.ballA.theta0=e+Math.PI,world2D.controlMain.v0Adj2.ballB.x=.9*world2D.controlMain.v0Adj2.ballB.x+.1*c,world2D.controlMain.v0Adj2.ballB.y=.9*world2D.controlMain.v0Adj2.ballB.y+.1*b,world2D.controlMain.v0Adj2.ballA.x=.9*world2D.controlMain.v0Adj2.ballA.x-.1*mA/mB*c,world2D.controlMain.v0Adj2.ballA.y=.9*world2D.controlMain.v0Adj2.ballA.y-.1*mA/mB*b;else if("N"===dragWho&&"N"===nnMD)for(var a=0;a<nnMax;a++){let d=world2D.controlMain.v0AdjN.balls[a];d.x=.9*d.x+.1*c*Math.cos(2*Math.PI*(a+1)/nnMax),d.y=.9*d.y+.1*c*Math.sin(2*Math.PI*(a+1)/nnMax)}}let d=1/30;1===n2Dir?(world2D.controlMain.v0Adj2.ballA.v0z=-world2D.controlMain.v0Adj2.ballA.x*d,world2D.controlMain.v0Adj2.ballA.v0y=-world2D.controlMain.v0Adj2.ballA.y*d,world2D.controlMain.v0Adj2.ballA.v0x=0,world2D.controlMain.v0Adj2.ballB.v0z=-world2D.controlMain.v0Adj2.ballB.x*d,world2D.controlMain.v0Adj2.ballB.v0y=-world2D.controlMain.v0Adj2.ballB.y*d,world2D.controlMain.v0Adj2.ballB.v0x=0):2===n2Dir&&(world2D.controlMain.v0Adj2.ballA.v0x=world2D.controlMain.v0Adj2.ballA.x*d,world2D.controlMain.v0Adj2.ballA.v0y=-world2D.controlMain.v0Adj2.ballA.y*d,world2D.controlMain.v0Adj2.ballA.v0z=0,world2D.controlMain.v0Adj2.ballB.v0x=world2D.controlMain.v0Adj2.ballB.x*d,world2D.controlMain.v0Adj2.ballB.v0y=-world2D.controlMain.v0Adj2.ballB.y*d,world2D.controlMain.v0Adj2.ballB.v0z=0),world2D.controlMain.v0Adj2.ballA.visible=world2D.controlMain.v0Adj2.ballB.visible="2"===nnMD;for(var a=0;a<nnMax;a++){let c=world2D.controlMain.v0AdjN.balls[a];if(1===nDir)c.v0z=c.x*d,c.v0y=c.y*d,c.v0x=0;else if(2===nDir)c.v0x=c.x*d,c.v0z=c.y*d,c.v0y=0;else if(3===nDir)c.v0x=c.x*d,c.v0y=c.y*d,c.v0z=0;else if(4===nDir){let b=Math.sqrt(c.x**2+c.y**2),e=Math.acos(1-2*a/nnMax);c.v0x=b*Math.sin(e)*Math.cos(.62*(2*a*Math.PI))*d,c.v0z=b*Math.sin(e)*Math.sin(.62*(2*a*Math.PI))*d,c.v0y=b*Math.cos(e)*d}c.visible="N"===nnMD}if("2"===nnMD)balls[0].scale.x=balls[0].scale.y=balls[0].scale.z=.3*Math.pow(mA,1/2),balls[1].scale.x=balls[1].scale.y=balls[1].scale.z=.3*Math.pow(mB,1/2),balls[1].mat.color.setHex(65382),balls[0].alive=balls[1].alive=!0,balls[0].alive=balls[1].alive=!0;else if("N"===nnMD){for(var a=0;a<nnMax;a++){let c=balls[a];c.scale.x=c.scale.y=c.scale.z=.8,c.position.y=0,c.alive=!0}balls[1].mat.color.setHex(65535)}for(var a=0;a<nnMax;a++){let c=balls[a];c.visible=!1;let b=fires[a];b.zero()}fireMain.zero(),fireCM.zero(),ballCM.position.x=ballMain.position.x=-50,ballCM.position.y=ballMain.position.y=0,ballCM.position.z=ballMain.position.z=0,1===n2Dir?(setArrowAndV0(world2D.controlMain.v0Adj2.arrowA,world2D.controlMain.v0Adj2.labelV0A,-world2D.controlMain.v0Adj2.ballA.v0z,-world2D.controlMain.v0Adj2.ballA.v0y),setArrowAndV0(world2D.controlMain.v0Adj2.arrowB,world2D.controlMain.v0Adj2.labelV0B,-world2D.controlMain.v0Adj2.ballB.v0z,-world2D.controlMain.v0Adj2.ballB.v0y)):2===n2Dir&&(setArrowAndV0(world2D.controlMain.v0Adj2.arrowA,world2D.controlMain.v0Adj2.labelV0A,world2D.controlMain.v0Adj2.ballA.v0x,-world2D.controlMain.v0Adj2.ballA.v0y),setArrowAndV0(world2D.controlMain.v0Adj2.arrowB,world2D.controlMain.v0Adj2.labelV0B,world2D.controlMain.v0Adj2.ballB.v0x,-world2D.controlMain.v0Adj2.ballB.v0y)),setArrowAndV0(world2D.controlMain.v0AdjN.arrow,world2D.controlMain.v0AdjN.labelV0,Math.sqrt(world2D.controlMain.v0AdjN.balls[49].v0x**2+world2D.controlMain.v0AdjN.balls[49].v0y**2+world2D.controlMain.v0AdjN.balls[49].v0z**2),0),world2D.controlMain.v0Adj2.arrowA.visible=world2D.controlMain.v0Adj2.labelV0A.visible=world2D.controlMain.v0Adj2.arrowB.visible=world2D.controlMain.v0Adj2.labelV0B.visible="2"===nnMD,world2D.controlMain.v0AdjN.arrow.visible=world2D.controlMain.v0AdjN.labelV0.visible="N"===nnMD,world2D.controlMain.slMAMB.visible="2"===nnMD,world2D.controlMain.rbDir1.visible=world2D.controlMain.rbDir2.visible=world2D.controlMain.rbDir3.visible=world2D.controlMain.rbDir4.visible="N"===nnMD,world2D.controlMain.rb2Dir1.visible=world2D.controlMain.rb2Dir2.visible="2"===nnMD,fireExp.exploded=!1}else if(3>gameMD){let b=dt;isAutoSlow&&2>Math.abs(ttime-expTimeTT)&&(b=(.2+.8*Math.abs(ttime-expTimeTT)/2)*dt),ttime+=isPlay?b:0,gameMD=ttime>expTimeTT?2:1;let c,d;if(1===gameMD){c=v0*Math.cos(theta0)*ttime*scale3D,d=(v0*Math.sin(theta0)*ttime-1*ttime*ttime)*scale3D,ballCM.position.x=ballMain.position.x=c-50,ballCM.position.y=ballMain.position.y=d,ballCM.position.z=ballMain.position.z=0,ttime-timeFire>dt&&fireMain.addOne(ballMain.position.x,ballMain.position.y,ballMain.position.z,1,0,0,10),isPlay&&fireMain.update();for(var a=0;a<nnMax;a++){let c=balls[a];c.visible=!1}}else if(2===gameMD){let c=ttime-expTimeTT,d=v0*Math.cos(theta0)*expTimeTT*scale3D-50,e=(v0*Math.sin(theta0)*expTimeTT-1*expTimeTT*expTimeTT)*scale3D,g=0,h=0,i=0;if("2"===nnMD){for(var a=0;a<nnMax;a++){let c=balls[a];c.visible=2>a}if(0<=balls[0].position.y&&balls[0].alive){let a=world2D.controlMain.v0Adj2.ballA.v0x+v0*Math.cos(theta0),b=world2D.controlMain.v0Adj2.ballA.v0y+v0*Math.sin(theta0)-gg*expTimeTT,f=world2D.controlMain.v0Adj2.ballA.v0z;balls[0].position.x=d+a*c*scale3D,balls[0].position.y=e+(b*c-1*c*c)*scale3D,balls[0].position.z=f*c*scale3D}else balls[0].position.y=0,balls[0].alive=!1;if(0<=balls[1].position.y&&balls[1].alive){let a=world2D.controlMain.v0Adj2.ballB.v0x+v0*Math.cos(theta0),b=world2D.controlMain.v0Adj2.ballB.v0y+v0*Math.sin(theta0)-gg*expTimeTT,f=world2D.controlMain.v0Adj2.ballB.v0z;balls[1].position.x=d+a*c*scale3D,balls[1].position.y=e+(b*c-1*c*c)*scale3D,balls[1].position.z=f*c*scale3D}else balls[1].position.y=0,balls[1].alive=!1;ttime-timeFire>dt&&balls[0].alive&&fires[0].addOne(balls[0].position.x,balls[0].position.y,balls[0].position.z,0,1,1,8),isPlay&&fires[0].update(),ttime-timeFire>dt&&balls[1].alive&&fires[1].addOne(balls[1].position.x,balls[1].position.y,balls[1].position.z,0,1,0,8),isPlay&&fires[1].update(),g=(mA*balls[0].position.x+mB*balls[1].position.x)/(mA+mB),h=(mA*balls[0].position.y+mB*balls[1].position.y)/(mA+mB),i=(mA*balls[0].position.z+mB*balls[1].position.z)/(mA+mB),balls[0].alive||balls[1].alive?(ttime-timeFire>dt&&fireCM.addOne(g,h,i,1,1,0,4),isPlay&&fireCM.update()):gameMD=3}else if("N"===nnMD){let j=!1;for(var a=0;a<nnMax;a++){let k=balls[a];if(k.visible=!0,0<=k.position.y&&k.alive){let b=world2D.controlMain.v0AdjN.balls[a].v0x+v0*Math.cos(theta0),f=world2D.controlMain.v0AdjN.balls[a].v0y+v0*Math.sin(theta0)-gg*expTimeTT,g=world2D.controlMain.v0AdjN.balls[a].v0z;k.position.x=d+b*c*scale3D,k.position.y=e+(f*c-1*c*c)*scale3D,k.position.z=g*c*scale3D}else k.alive=!1,k.position.y=0;j=j||k.alive;let b=fires[a];ttime-timeFire>dt&&k.alive&&b.addOne(k.position.x,k.position.y,k.position.z,0,1,1,9),isPlay&&b.update(),g+=k.position.x/nnMax,h+=k.position.y/nnMax,i+=k.position.z/nnMax}j?(ttime-timeFire>dt&&fireCM.addOne(g,h,i,1,1,0,4),isPlay&&fireCM.update()):gameMD=3}ballCM.position.x=ballMain.position.x=g,ballCM.position.y=ballMain.position.y=h,ballCM.position.z=ballMain.position.z=i,isPlay&&fireMain.update()}!fireExp.exploded&&ttime>expTimeTT?(fireExp.exploded=!0,fireExp.explode()):fireExp.exploded&&ttime-timeFire>dt&&fireExp.updateExplode(),ttime-timeFire>dt&&(timeFire+=dt)}else if(3===gameMD){for(var a=0;a<nnMax;a++){let b=fires[a];b.update()}fireMain.update(),fireCM.update(),fireExp.updateExplode()}let b=v0*Math.cos(theta0)*expTimeTT*scale3D-50,c=(v0*Math.sin(theta0)*expTimeTT-1*expTimeTT*expTimeTT)*scale3D;fireExp.position.x=b,fireExp.position.y=c,fireExp.position.z=0,fireExp.visible=fireExp.exploded,ballCM.visible=1<gameMD,ballMain.visible=2>gameMD,ballCM.visible=fireCM.visible=world2D.chCM.checked,world2D.controlMain.v0Adj2.ballA.scaleX=world2D.controlMain.v0Adj2.ballA.scaleY=.8*Math.pow(mA/20,2/3),world2D.controlMain.v0Adj2.ballB.scaleX=world2D.controlMain.v0Adj2.ballB.scaleY=.8*Math.pow(mB/20,2/3),world2D.controlMain.visible=0===gameMD,world2D.btnPlayStop.visible=3>gameMD,world2D.btnReset.visible=3===gameMD,world3D.render(),world2D.stage.update()}MyJS.myResize();function clickNN(a){let b=a.target.name,c=b.charAt(4);c!=nnMD&&(nnMD=c,gameMD=0)}function clickBtn(a){let b=a.target.name;"btnPlayStop"===b?0===gameMD?(gameMD=1,isPlay=!0):isPlay=!isPlay:"btnReset"===b&&(gameMD=0)}function myUp(){dragWho="X"}function clickRBN(a){let b=a.target.parent.name;nDir=parseInt(b.charAt(5)),world2D.controlMain.rbDir1.checked=1===nDir,world2D.controlMain.rbDir2.checked=2===nDir,world2D.controlMain.rbDir3.checked=3===nDir,world2D.controlMain.rbDir4.checked=4===nDir}function clickRB2(a){let b=a.target.parent.name;n2Dir=parseInt(b.charAt(6)),world2D.controlMain.rb2Dir1.checked=1===n2Dir,world2D.controlMain.rb2Dir2.checked=2===n2Dir}function initControl(){world2D.controlMain.v0Adj2.ballA=new lib.ball,world2D.controlMain.v0Adj2.ballB=new lib.ball,world2D.controlMain.v0Adj2.ballA.gotoAndStop(0),world2D.controlMain.v0Adj2.ballB.gotoAndStop(1),world2D.controlMain.v0Adj2.ballA.x=-150,world2D.controlMain.v0Adj2.ballB.x=150,world2D.controlMain.v0Adj2.addChild(world2D.controlMain.v0Adj2.ballA),world2D.controlMain.v0Adj2.addChild(world2D.controlMain.v0Adj2.ballB),world2D.controlMain.v0Adj2.ballA.on("mousedown",downBall),world2D.controlMain.v0Adj2.ballB.on("mousedown",downBall),world2D.controlMain.v0Adj2.ballA.name="A",world2D.controlMain.v0Adj2.ballB.name="B",world2D.controlMain.v0Adj2.ballA.theta0=world2D.controlMain.v0Adj2.ballA.theta=0,world2D.controlMain.v0Adj2.ballB.theta0=world2D.controlMain.v0Adj2.ballB.theta=Math.PI,world2D.controlMain.v0Adj2.ballA.v0=world2D.controlMain.v0Adj2.ballA.vv=5,world2D.controlMain.v0Adj2.ballB.v0=world2D.controlMain.v0Adj2.ballB.vv=5,world2D.controlMain.v0Adj2.arrowA=new lib.arrow,world2D.controlMain.v0Adj2.labelV0A=new lib.labelV0,world2D.controlMain.v0Adj2.labelV0A.gotoAndStop(1),world2D.controlMain.v0Adj2.addChild(world2D.controlMain.v0Adj2.arrowA),world2D.controlMain.v0Adj2.addChild(world2D.controlMain.v0Adj2.labelV0A),world2D.controlMain.v0Adj2.arrowB=new lib.arrow,world2D.controlMain.v0Adj2.labelV0B=new lib.labelV0,world2D.controlMain.v0Adj2.labelV0B.gotoAndStop(2),world2D.controlMain.v0Adj2.addChild(world2D.controlMain.v0Adj2.arrowB),world2D.controlMain.v0Adj2.addChild(world2D.controlMain.v0Adj2.labelV0B),world2D.controlMain.v0AdjN.balls=[];for(var a=0;a<nnMax;a++){let c=new lib.ball;c.x=150*Math.cos(2*Math.PI*(a+1)/nnMax),c.y=150*Math.sin(2*Math.PI*(a+1)/nnMax),c.gotoAndStop(0),c.scaleX=c.scaleY=.3,world2D.controlMain.v0AdjN.addChild(c),world2D.controlMain.v0AdjN.balls.push(c),a==49&&(c.name="N",c.on("mousedown",downBall),c.gotoAndStop(2),c.scaleX=c.scaleY=.4)}world2D.controlMain.v0AdjN.arrow=new lib.arrow,world2D.controlMain.v0AdjN.labelV0=new lib.labelV0,world2D.controlMain.v0AdjN.labelV0.gotoAndStop(0),world2D.controlMain.v0AdjN.addChild(world2D.controlMain.v0AdjN.arrow),world2D.controlMain.v0AdjN.addChild(world2D.controlMain.v0AdjN.labelV0);let b=new createjs.Graphics,c=new createjs.Shape(b);world2D.controlMain.projectTrace.addChild(c),b.ss(5).s("#00ffff").mt(0,0);let d=2*v0*Math.sin(theta0)/gg;for(var e=0;e<=d;e+=.05){let a=v0*Math.cos(theta0)*e,c=v0*Math.sin(theta0)*e-1*e*e;b.lt(12*a,12*-c)}b.es()}function downBall(a){let b=a.target.parent;dragWho=b.name}function setArrowAndV0(a,b,c,d){let e=c**2+d**2;e=Math.sqrt(e);let f=Math.atan2(d,c);a.scaleX=e*30/100,a.rotation=180*f/Math.PI,b.x=.5*e*30*Math.cos(f),b.y=.5*e*30*Math.sin(f)+25;let g=Math.round(10*e)+"";b.n1.visible=2<g.length,b.n1.gotoAndStop(g.charAt(g.length-3)),b.n2.gotoAndStop(g.charAt(g.length-2)),b.n3.gotoAndStop(g.charAt(g.length-1)),b.nDot.gotoAndStop(10)}class FireSmoke extends THREE.Object3D{constructor(a){super();let b=this;b.nn=a,b.iNow=0,b.xxiNow=0,b.velocities,b.velocities=new Float32Array(3*b.nn),b.positions=new Float32Array(3*b.nn),b.colors=new Float32Array(3*b.nn),b.sizes=new Float32Array(b.nn),b.ages=new Float32Array(b.nn);const c=new THREE.Vector3,d=new THREE.Color(16777215);for(let e=0;e<b.nn;e++)c.x=0,c.y=0,c.z=0,c.toArray(b.positions,3*e),d.setHSL(.5+.1*(e/b.nn),.7,.5),d.toArray(b.colors,3*e),b.sizes[e]=2,b.ages[e]=-1;const e=new THREE.BufferGeometry;e.setAttribute("position",new THREE.BufferAttribute(b.positions,3)),e.setAttribute("customColor",new THREE.BufferAttribute(b.colors,3)),e.setAttribute("size",new THREE.BufferAttribute(b.sizes,1));const f=new THREE.ShaderMaterial({uniforms:{color:{value:new THREE.Color(16777215)},pointTexture:{value:new THREE.TextureLoader().load("allData/pics/ball.png")}},vertexShader:document.getElementById("vertexshader").textContent,fragmentShader:document.getElementById("fragmentshader").textContent,blending:THREE.AdditiveBlending,depthTest:!1,transparent:!0});b.points=new THREE.Points(e,f),b.add(b.points)}zero(){let a=this;a.iNow=0,a.xxiNow=0;const b=a.points.geometry,c=b.attributes;for(var d=0;d<a.nn;d++)c.position.array[3*d+0]=0,c.position.array[3*d+1]=0,c.position.array[3*d+2]=0,c.size.array[d]=1e-5,c.customColor.array[3*d+0]=1,c.customColor.array[3*d+1]=1,c.customColor.array[3*d+2]=1,a.ages[d]=-1;c.size.needsUpdate=!0,c.position.needsUpdate=!0,c.customColor.needsUpdate=!0}addOne(a,b,c,d,e,f,g){let h=this;const i=h.points.geometry,j=i.attributes;h.ages[h.iNow]=0,h.finalR=d,h.finalG=e,h.finalB=f,h.finalSize=g,j.position.array[3*h.iNow+0]=a,j.position.array[3*h.iNow+1]=b,j.position.array[3*h.iNow+2]=c,j.customColor.array[3*h.iNow+0]=1,j.customColor.array[3*h.iNow+1]=1,j.customColor.array[3*h.iNow+2]=1,h.iNow+=1,h.xxiNow+=1,h.iNow>=h.nn&&(h.iNow=0)}update(){let a=this;const b=a.points.geometry,c=b.attributes;for(let b=0;b<a.nn;b++){let d=c.position.array[3*b+0],e=c.position.array[3*b+1],f=c.position.array[3*b+2];a.ages[b]+=0<=a.ages[b]?1:0,c.size.array[b]=0<=a.ages[b]?a.finalSize+(20-a.finalSize)*Math.exp(-a.ages[b]/10):1e-5,c.position.array[3*b+0]=d,c.position.array[3*b+1]=e,c.position.array[3*b+2]=f,c.customColor.array[3*b+0]=a.finalR+(1-a.finalR)*Math.exp(-a.ages[b]/10),c.customColor.array[3*b+1]=a.finalG+(1-a.finalG)*Math.exp(-a.ages[b]/10),c.customColor.array[3*b+2]=a.finalB+(1-a.finalB)*Math.exp(-a.ages[b]/10)}c.size.needsUpdate=!0,c.position.needsUpdate=!0,c.customColor.needsUpdate=!0}explode(){let a=this;const b=a.points.geometry,c=b.attributes;for(var d=0;d<a.nn;d++){c.position.array[3*d+0]=0,c.position.array[3*d+1]=0,c.position.array[3*d+2]=0;let b=Math.acos(1-2*d/a.nn);a.velocities[3*d+0]=.3*Math.sin(b)*Math.cos(.62*(2*d*Math.PI)),a.velocities[3*d+1]=.3*Math.cos(b),a.velocities[3*d+2]=.3*Math.sin(b)*Math.sin(.62*(2*d*Math.PI)),c.size.array[d]=10,c.customColor.array[3*d+0]=1,c.customColor.array[3*d+1]=1,c.customColor.array[3*d+2]=1}c.size.needsUpdate=!0,c.position.needsUpdate=!0,c.customColor.needsUpdate=!0}updateExplode(){let a=this;const b=a.points.geometry,c=b.attributes;for(var d=0;d<a.nn;d++)c.position.array[3*d+0]+=a.velocities[3*d+0],c.position.array[3*d+1]+=a.velocities[3*d+1],c.position.array[3*d+2]+=a.velocities[3*d+2],a.velocities[3*d+0]*=.95,a.velocities[3*d+1]*=.95,a.velocities[3*d+2]*=.95,c.size.array[d]+=.06,c.customColor.array[3*d+0]*=.95,c.customColor.array[3*d+1]*=.92,c.customColor.array[3*d+2]*=.9;c.size.needsUpdate=!0,c.position.needsUpdate=!0,c.customColor.needsUpdate=!0}}var TEACHER={};TEACHER.ObjPlane=class extends THREE.Object3D{constructor(a,b,c,d,e){super();let f=this;f.mat=new TEACHER.MSMat(c,e),f.geo=new THREE.PlaneGeometry(a||10,b||10,1,1),f.mesh=new THREE.Mesh(f.geo,f.mat),"x"===d?f.mesh.rotation.y=.5*Math.PI:"y"==d&&(f.mesh.rotation.x=-.5*Math.PI),f.add(f.mesh)}},TEACHER.ObjCylinder=class extends THREE.Object3D{constructor(a,b,c,d,e,f){super();let g=this;g.mat=new TEACHER.MSMat(c,f),g.geo=new THREE.CylinderGeometry(a||10,a||10,b||10,32,2,d),g.mesh=new THREE.Mesh(g.geo,g.mat),"x"===e?g.mesh.rotation.z=-.5*Math.PI:"z"==e&&(g.mesh.rotation.x=.5*Math.PI),g.add(g.mesh)}},TEACHER.ObjSphere=class extends THREE.Object3D{constructor(a,b,c){super();let d=this;d.mat=new TEACHER.MSMat(b,c),d.geo=new THREE.SphereGeometry(a||10,32,16),d.mesh=new THREE.Mesh(d.geo,d.mat),d.add(d.mesh)}},TEACHER.ObjBox=class extends THREE.Object3D{constructor(a,b,c,d,e){super();let f=this;f.mat=new TEACHER.MSMat(d,e),f.geo=new THREE.BoxGeometry(a||10,b||10,c||10),f.mesh=new THREE.Mesh(f.geo,f.mat),f.add(f.mesh)}},TEACHER.MSMat=class extends THREE.MeshStandardMaterial{constructor(a,b){super({color:a||16711935,roughness:.4,side:b||0})}},TEACHER.ObjPicPlane=class extends THREE.Object3D{constructor(a,b,c,d,e){super();let f=this,g=new THREE.TextureLoader().load(c);f.mat=new THREE.MeshBasicMaterial({map:g,transparent:!0,side:e||0}),f.geo=new THREE.PlaneGeometry(a,b,1,1),f.mesh=new THREE.Mesh(f.geo,f.mat),"x"===d?f.mesh.rotation.y=.5*Math.PI:"y"==d&&(f.mesh.rotation.x=-.5*Math.PI),f.add(f.mesh)}},TEACHER.ObjPicCylinder=class extends THREE.Object3D{constructor(a,b,c,d,e,f){super();let g=this,h=new THREE.TextureLoader().load(c);g.mat=new THREE.MeshBasicMaterial({map:h,side:f||0}),g.geo=new THREE.CylinderGeometry(a||10,a||10,b||10,32,4,d),g.mesh=new THREE.Mesh(g.geo,g.mat),"x"===e?g.mesh.rotation.z=-.5*Math.PI:"z"===e?(g.mesh.rotation.y=.5*Math.PI,g.mesh.rotation.x=.5*Math.PI):"y"==e&&(g.mesh.rotation.y=.5*Math.PI),g.add(g.mesh)}},TEACHER.ObjPicSphere=class extends THREE.Object3D{constructor(a,b,c){super();let d=this,e=new THREE.TextureLoader().load(b);d.mat=new THREE.MeshBasicMaterial({map:e,side:c||0}),d.geo=new THREE.SphereGeometry(a||10,32,16),d.mesh=new THREE.Mesh(d.geo,d.mat),d.add(d.mesh)}},TEACHER.ObjArrow=class extends THREE.Object3D{constructor(a,b){super();let c=.5,d=new THREE.MeshStandardMaterial({color:b||16711935,roughness:.4}),e=new THREE.ConeGeometry(a||10,40,32);this.ArrowHead=new THREE.Mesh(e,d),this.ArrowHead.position.y=80,e=new THREE.CylinderGeometry((a||10)*c,(a||10)*c,60,32,2),this.ArrowBody=new THREE.Mesh(e,d),this.ArrowBody.position.y=30,this.rotX=new THREE.Object3D,this.rotY=new THREE.Object3D,this.add(this.rotY),this.rotY.add(this.rotX),this.rotX.add(this.ArrowBody),this.rotX.add(this.ArrowHead)}setArrow(a,b,c){let d=a*a+b*b+c*c,e=Math.sqrt(d);0<d?(this.rotX.visible=!0,this.rotX.scale.y=e/100):this.rotX.visible=!1,this.rotX.rotation.x=Math.acos(b/e),this.rotY.rotation.y=Math.atan2(a,c)}},TEACHER.ObjSpring=class extends THREE.Object3D{constructor(a,b,c,d,e){super();let f=a||20;this.L0=f;let g=[],h=d||5,j=b||5;g.push(new THREE.Vector3(0,0,0)),g.push(new THREE.Vector3(0,.05*f,0));for(var k=0;k<=16*h;k++)g.push(new THREE.Vector3(j*Math.cos(2*k*Math.PI/16),f*(.05+.9*k/h/16),j*Math.sin(2*k*Math.PI/16)));g.push(new THREE.Vector3(0,.95*f,0)),g.push(new THREE.Vector3(0,f,0));let l=new THREE.CatmullRomCurve3(g),m=new THREE.MeshStandardMaterial({color:e||16711935,roughness:.4}),n=new THREE.TubeGeometry(l,500,c||.5,12);this.mesh=new THREE.Mesh(n,m),this.rotX=new THREE.Object3D,this.rotY=new THREE.Object3D,this.add(this.rotY),this.rotY.add(this.rotX),this.rotX.add(this.mesh)}setSpring(a,b,c){let d=a*a+b*b+c*c,e=Math.sqrt(d);0<d?(this.rotX.visible=!0,this.rotX.scale.y=e/this.L0):this.rotX.visible=!1,this.rotX.rotation.x=Math.acos(b/e),this.rotY.rotation.y=Math.atan2(a,c)}},TEACHER.Points=class extends THREE.Points{constructor(a,b,c){let d=new THREE.Color(a||16711935),e=new THREE.BufferGeometry,f=[],g=[];e.setAttribute("position",new THREE.Float32BufferAttribute(f,3)),e.setAttribute("customColor",new THREE.Float32BufferAttribute([],3)),e.setAttribute("size",new THREE.Float32BufferAttribute(g,1)),e.computeBoundingSphere();let h=new THREE.PointsMaterial({size:b||1,map:TEACHER.Points.createCanvasMaterial("#"+d.getHexString(),64),transparent:!0,depthWrite:!1});super(e,h);let i=this;i.nnMax=c||1e4,i.nnNow=0,i.geometry=e,i.positions=f,i.sizes=g}static createCanvasMaterial(a,b){var c=document.createElement("canvas");c.width=c.height=b;var d=c.getContext("2d");d.imageSmoothingEnabled=!1;var e=new THREE.Texture(c),f=b/2;return d.beginPath(),d.arc(f,f,b/2-3,0,2*Math.PI,!1),d.closePath(),d.fillStyle=a,d.fill(),e.needsUpdate=!0,e}addPoint(a,b,c,d){let e=this;e.nnNow<e.nnMax?e.nnNow++:(log("TEACHER.Points \u5230\u9054\u6700\u5927\u9EDE\u6578"),e.positions.shift(),e.positions.shift(),e.positions.shift(),e.sizes.shift()),e.positions.push(a,b,c),e.sizes.push(d)}clear(){let a=this;a.positions=[],a.sizes=[],a.nnNow=0,a.update()}setPoint(a,b,c,d,e){let f=this;a>f.nnMax?log("\u8F38\u5165\u7684n\u503C\u5927\u65BCTEACHER.Points \u6700\u5927\u9EDE\u6578 nnMax"):a>f.nnNow?log("\u8F38\u5165\u7684n\u503C\u5927\u65BCTEACHER.Points \u73FE\u5728\u9EDE\u6578 nnNow"):(f.positions[3*a]=b,f.positions[3*a+1]=c,f.positions[3*a+2]=d,f.sizes[a]=e)}getPoint(a){let b=this,c=new THREE.Vector3;return a>b.nnMax?log("\u8F38\u5165\u7684n\u503C\u5927\u65BCTEACHER.Points \u6700\u5927\u9EDE\u6578 nnMax"):a>b.nnNow?log("\u8F38\u5165\u7684n\u503C\u5927\u65BCTEACHER.Points \u73FE\u5728\u9EDE\u6578 nnNow"):(c.x=b.positions[3*a],c.y=b.positions[3*a+1],c.z=b.positions[3*a+2]),c}update(){let a=this;a.geometry.setAttribute("position",new THREE.Float32BufferAttribute(a.positions,3)),a.geometry.setAttribute("size",new THREE.Float32BufferAttribute(a.sizes,1)),a.geometry.computeBoundingSphere(),a.geometry.attributes.position.needsUpdate=!0,a.geometry.attributes.size.needsUpdate=!0}},TEACHER.Line=class extends THREE.Line2{constructor(a,b,c){let d=c||1e4;var e=new THREE.LineMaterial({color:a||16711935,linewidth:b||1});e.resolution.set(window.innerWidth,window.innerHeight);let f=new THREE.LineGeometry,g=new Float32Array(3*d);f.setPositions(g),super(f,e);let h=this;h.nnMax=d,h.lineWidth=b||1,h.nnNow=0,h.geometry=f,h.positions=g}addPoint(a,b,c){let d=this;if(d.nnNow<d.nnMax)d.nnNow++;else{log("TEACHER.Line \u5230\u9054\u6700\u5927\u9EDE\u6578");for(var e=0;e<d.nnMax-1;e++)d.positions[3*e]=d.positions[3*e+3],d.positions[3*e+1]=d.positions[3*e+4],d.positions[3*e+2]=d.positions[3*e+5]}for(var e=d.nnNow;e<=d.nnMax;e++)d.positions[3*(e-1)]=a,d.positions[3*(e-1)+1]=b,d.positions[3*(e-1)+2]=c}clear(){let a=this;a.positions=new Float32Array(3*a.nnMax);a.nnNow=0,a.update()}setPoint(a,b,c,d){let e=this;a>e.nnMax?log("\u8F38\u5165\u7684n\u503C\u5927\u65BCTEACHER.Line \u6700\u5927\u9EDE\u6578 nnMax"):a>e.nnNow?log("\u8F38\u5165\u7684n\u503C\u5927\u65BCTEACHER.Line \u73FE\u5728\u9EDE\u6578 nnNow"):(e.positions[3*a]=b,e.positions[3*a+1]=c,e.positions[3*a+2]=d)}getPoint(a){let b=this,c=new THREE.Vector3;return a>b.nnMax?log("\u8F38\u5165\u7684n\u503C\u5927\u65BCTEACHER.Line \u6700\u5927\u9EDE\u6578 nnMax"):a>b.nnNow?log("\u8F38\u5165\u7684n\u503C\u5927\u65BCTEACHER.Line \u73FE\u5728\u9EDE\u6578 nnNow"):(c.x=b.positions[3*a],c.y=b.positions[3*a+1],c.z=b.positions[3*a+2]),c}update(){let a=this,b=a.getPoint(a.nnNow-1);for(var c=a.nnNow;c<=a.nnMax;c++)a.positions[3*c]=b.x,a.positions[3*c+1]=b.y,a.positions[3*c+2]=b.z;a.geometry.setPositions(a.positions)}},TEACHER.ObjTextPlane=class extends THREE.Object3D{constructor(a,b,c,d,e,f){super();let g=this,h=Math.round(Math.log2(a/b)),i=$("<canvas>").attr("width",128*Math.pow(2,h)+"").attr("height","128");g.stage=new createjs.Stage(i[0]);let j=new createjs.Container;if(f){let a=new createjs.Shape,b=new THREE.Color(f);a.graphics.c().f("#"+b.getHexString()).dr(0,0,128*Math.pow(2,h),128),j.addChild(a)}g.ctext=new createjs.Text;let k=new THREE.Color(e||16777215);g.ctext.color="#"+k.getHexString(),g.ctext.font="96px Arial",g.ctext.text=c||"",g.ctext.textAlign="center",g.ctext.textBaseline="middle",g.ctext.x=128*Math.pow(2,h)/2,g.ctext.y=64,j.addChild(g.ctext),g.stage.addChild(j),g.stage.update(),g.texture=new THREE.Texture(i[0]);var l=new THREE.MeshBasicMaterial({map:g.texture,transparent:!0}),m=new THREE.PlaneGeometry(a||10,b||10,1,1);g.texture.needsUpdate=!0,g.plane1=new THREE.Mesh(m,l),g.plane2=new THREE.Mesh(m,l),g.plane2.rotation.y=Math.PI;let n=new THREE.Object3D;n.add(g.plane1).add(g.plane2),"x"===d?n.rotation.y=.5*Math.PI:"y"==d&&(n.rotation.x=-.5*Math.PI),g.add(n)}setText(a){let b=this;b.ctext.text=a,b.stage.update(),b.texture.needsUpdate=!0}},TEACHER.ObjGraph=class extends THREE.Object3D{constructor(a,b,c,d,e,f,g){super();let h=this;h.objCon=new THREE.Object3D,h._xMin=a||0,h._xMax=b||10,h._yMin=c||0,h._yMax=d||10,h.divXN=5,h.divYN=4,h.frameMat=new THREE.LineBasicMaterial({color:e||16777215});for(var i=[],j=0;j<=h.divXN;j++)i.push(new THREE.Vector3(-50+20*j,0,0)),i.push(new THREE.Vector3(-50+20*j,50,0));for(var k=0;k<=h.divYN;k++)i.push(new THREE.Vector3(-50,12.5*k,0)),i.push(new THREE.Vector3(50,12.5*k,0));let l=new THREE.BufferGeometry().setFromPoints(i);h.frame=new THREE.LineSegments(l,h.frameMat),h.objCon.add(h.frame),h.labelXMin=new TEACHER.ObjTextPlane(20,5,h._xMin+"","z",e||16777215),h.labelXMin.position.x=-50,h.labelXMin.position.y=-3,h.objCon.add(h.labelXMin),h.labelXMax=new TEACHER.ObjTextPlane(20,5,h._xMax+"","z",e||16777215),h.labelXMax.position.x=50,h.labelXMax.position.y=-3,h.objCon.add(h.labelXMax),h.labelYMin=new TEACHER.ObjTextPlane(20,5,h._yMin+"","z",e||16777215),h.labelYMin.position.x=-53,h.labelYMin.position.y=0,h.objCon.add(h.labelYMin),h.labelYMax=new TEACHER.ObjTextPlane(20,5,h._yMax+"","z",e||16777215),h.labelYMax.position.x=-53,h.labelYMax.position.y=50,h.objCon.add(h.labelYMax),h.labelX=new TEACHER.ObjTextPlane(24,7,"x","z",e||16777215),h.labelX.position.x=60,h.labelX.position.y=4,h.labelX.position.z=1,h.labelY=new TEACHER.ObjTextPlane(24,7,"y","z",e||16777215),h.labelY.position.x=-60,h.labelY.position.y=25,h.labelY.position.z=1,h.labelY.rotation.z=Math.PI/2,h.labelTitle=new TEACHER.ObjTextPlane(40,10,"y-x","z",e||16777215),h.labelTitle.position.y=53,h.labelTitle.position.z=1,h.objCon.add(h.labelX).add(h.labelY).add(h.labelTitle),h._lineColor=f,h._nnMax=g,h.line=new TEACHER.Line(h._lineColor||16776960,2,h._nnMax),h.objCon.add(h.line),h.changeScale(),h.add(h.objCon)}addPoint(a,b){let c=this;c.line.addPoint(a,b,0),c.line.update()}clear(){let a=this;a.line.clear()}changeScale(){let a=this;a.line.scale.x=100/(a._xMax-a._xMin),a.line.scale.y=50/(a._yMax-a._yMin),a.line.position.x=-50-a._xMin*a.line.scale.x,a.line.position.y=-a._yMin*a.line.scale.y,a.labelXMin.setText(a._xMin),a.labelXMax.setText(a._xMax),a.labelYMin.setText(a._yMin),a.labelYMax.setText(a._yMax)}setLabel(a,b,c){let d=this;d.labelTitle.setText(a||"y-x"),d.labelY.setText(b||"y"),d.labelX.setText(c||"x")}get xMin(){return this._xMin}set xMin(a){this._xMin=a,this.changeScale()}get xMax(){return this._xMax}set xMax(a){this._xMax=a,this.changeScale()}get yMin(){return this._yMin}set yMin(a){this._yMin=a,this.changeScale()}get yMax(){return this._yMax}set yMax(a){this._yMax=a,this.changeScale()}};var skyBox=new THREE.Object3D;skyBox.wallU=new TEACHER.ObjPicPlane(1e4,1e4,pics.wallU,"y",1),skyBox.wallD=new TEACHER.ObjPicPlane(1e4,1e4,pics.wallD,"y",0),skyBox.wallS=new TEACHER.ObjPicCylinder(5e3,1e4,pics.wallSide,!0,"y",1),skyBox.wallU.position.y=5e3,skyBox.wallD.position.y=-5e3,skyBox.add(skyBox.wallU).add(skyBox.wallD).add(skyBox.wallS),world3D.scene.add(skyBox);var ground=new TEACHER.ObjPicPlane(100,100,pics.ground,"y");world3D.scene.add(ground);var logo=new TEACHER.ObjPicPlane(100,100/8,pics.logo,"z",2);logo.position.z=-50,logo.position.y=100/8/2,world3D.scene.add(logo);function getMouse3D(a){let b,c=a||"y",d=new THREE.Vector3;"x"===c?b=new THREE.Vector3(1,0,0):"y"===c?b=new THREE.Vector3(0,1,0):"z"===c?b=new THREE.Vector3(0,0,1):log("\u932F\u8AA4!!");let e=new THREE.Vector2;return e.x=2*(world2D.stage.mouseX/1600)-1,e.y=2*-(world2D.stage.mouseY/900)+1,world3D.raycaster.setFromCamera(e,world3D.camera),world3D.raycaster.ray.intersectPlane(new THREE.Plane(b),d),d}TEACHER.CCC=class{constructor(a){this.name=a}},init();