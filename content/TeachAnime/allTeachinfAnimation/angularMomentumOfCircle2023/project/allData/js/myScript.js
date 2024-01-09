'use strict';var thePendulum,ball,wall,wire,fps=60,log=console.log,titleTime=120,gameMD=1,followRatio=0;const LL=40,theta=Math.PI/6;var theOrigin,theRightHand,originY=-30,originX=10,handThetaTarget=0,handTheta=0;const gg=10,omega=Math.sqrt(10/(40*Math.sin(theta)*Math.cos(theta)));var arrowMg,arrowFc,arrowVV,arrowTension,arrowAngulerMomentum,arrowTau,arrowRR,arrowDeltaL,traceBall,traceLL,labelMg,labelFc,labelVV,labelTension,labelAngulerMomentum,labelTau,labelRR,labelDeltaL,equationPlane,tt=0,dt=.08,dtTarget=.08;function init(){theRightHand=new OneRightHand,scene.add(theRightHand),ground.visible=!1,logo.position.y-=20,thePendulum=new THREE.Object3D,wall=new TEACHER.ObjCylinder(6,2,6710835,!1,"y"),wall.position.y=LL*Math.cos(theta)+1,wire=new TEACHER.ObjCylinder(.2,LL,16777215,!1,"y"),wire.position.y=20*Math.cos(theta),wire.position.x=-20*Math.sin(theta),wire.rotation.z=-theta,ball=new TEACHER.ObjSphere(2,16711680),ball.position.y=0,ball.position.x=-40*Math.sin(theta),scene.add(thePendulum),thePendulum.add(wire).add(ball).add(wall),traceBall=new TEACHER.Line(16711680,2,65),traceLL=new TEACHER.Line(16776960,2,120),scene.add(traceLL).add(traceBall);for(var a=0;65>a;a++)traceBall.addPoint(LL*Math.sin(theta)*Math.cos(2*(a/64)*Math.PI),0,LL*Math.sin(theta)*Math.sin(2*(a/64)*Math.PI));traceBall.update();let b=.3;theOrigin=new THREE.Object3D,theOrigin.add(new TEACHER.ObjBox(10,b,b,16777215)),theOrigin.add(new TEACHER.ObjBox(b,10,b,16777215)),theOrigin.add(new TEACHER.ObjBox(b,b,10,16777215)),scene.add(theOrigin),initArrows(),equationPlane=new EquationPlane,equationPlane.scale.x=equationPlane.scale.y=.1,equationPlane.position.z=-50,equationPlane.position.y=20,scene.add(equationPlane),world2D.rbGame00.on("click",clickRB),world2D.rbGame01.on("click",clickRB),world2D.rbGame02.on("click",clickRB),world2D.rbGame03.on("click",clickRB),world2D.rbGame04.on("click",clickRB),setToGame(gameMD),world2D.btnHandAction.on("click",clickHandAction),world2D.btnPlayStop.on("click",function(){dtTarget=.04>dtTarget?.08:0}),world2D.slOriginX.value=100,world2D.chLabel.checked=!0,setInterval(tick,1e3/fps)}function tick(){titleTime--,60<titleTime?(world2D.title.x=800,world2D.title.y=450,world2D.title.scaleX=world2D.title.scaleY=2):0<=titleTime&&(world2D.title.x=800*titleTime/60+290*(60-titleTime)/60,world2D.title.y=450*titleTime/60+70*(60-titleTime)/60,world2D.title.scaleX=world2D.title.scaleY=2*titleTime/60+.8*(60-titleTime)/60),5>Math.abs(world2D.slOriginY.value-75)&&(world2D.slOriginY.value=75),originY=.92*originY+.08*LL*Math.cos(theta)*world2D.slOriginY.value/75,originX=.92*originX-.08*LL*Math.sin(theta)*(100-world2D.slOriginX.value)/80,dt=.9*dt+.1*dtTarget,thePendulum.rotation.y+=omega*dt,thePendulum.rotation.y%=2*Math.PI,setArrows(),equationPlane.visible=wall.visible=wire.visible=traceBall.visible=logo.visible=!(4===gameMD&&world2D.chFocus.checked),equationPlane.visible=equationPlane.visible&&0<gameMD,followRatio=.98*followRatio+.02*(4===gameMD?1:0),world3D.cameraTarget.y=20*Math.cos(theta),world3D.cameraTarget.x=-40*Math.sin(theta)*Math.cos(thePendulum.rotation.y)*followRatio,world3D.cameraTarget.z=LL*Math.sin(theta)*Math.sin(thePendulum.rotation.y)*followRatio,handTheta=.95*handTheta+.05*handThetaTarget,theRightHand.bendHand(handTheta),2===gameMD?(theRightHand.rotateHand(arrowRR.xx,arrowRR.yy,arrowRR.zz,arrowAngulerMomentum.xx,arrowAngulerMomentum.yy,arrowAngulerMomentum.zz),theRightHand.scale.x=theRightHand.scale.y=theRightHand.scale.z=1):3===gameMD?(theRightHand.rotateHand(arrowRR.xx,arrowRR.yy,arrowRR.zz,arrowTau.xx,arrowTau.yy,arrowTau.zz),theRightHand.scale.x=theRightHand.scale.y=theRightHand.scale.z=20>arrowTau.rr?arrowTau.rr/20:1):0===gameMD&&(theRightHand.rotateHand(.001,.001,-1,.001,1,.001),theRightHand.scale.x=theRightHand.scale.y=theRightHand.scale.z=1),world2D.chRightHand.visible=2===gameMD||3===gameMD||0===gameMD,world2D.btnHandAction.visible=theRightHand.visible=world2D.chRightHand.visible&&world2D.chRightHand.checked,world2D.chLabel.visible=0!=gameMD,world3D.render(),world2D.stage.update()}MyJS.myResize();function clickRB(a){let b=a.target.parent.name;gameMD=parseInt(b.charAt(7)),setToGame(gameMD)}function setToGame(a){gameMD=a,world2D.rbGame00.checked=0===gameMD,world2D.rbGame01.checked=1===gameMD,world2D.rbGame02.checked=2===gameMD,world2D.rbGame03.checked=3===gameMD,world2D.rbGame04.checked=4===gameMD,equationPlane.setEquationPlane(gameMD)}function initArrows(){let a=.8,b=2;arrowMg=new TEACHER.ObjArrow(a,65535),arrowTension=new TEACHER.ObjArrow(a,65535),arrowFc=new TEACHER.ObjArrow(a,16711680),arrowVV=new TEACHER.ObjArrow(a,65280),arrowAngulerMomentum=new TEACHER.ObjArrow(a,16776960),arrowTau=new TEACHER.ObjArrow(a,16750848),arrowDeltaL=new TEACHER.ObjArrow(a,16750848),arrowVV.position.x=arrowTension.position.x=arrowFc.position.x=arrowMg.position.x=ball.position.x,arrowVV.position.y=arrowTension.position.y=arrowFc.position.y=arrowMg.position.y=ball.position.y,thePendulum.add(arrowMg).add(arrowFc).add(arrowTension).add(arrowVV),arrowMg.setArrow(0,-10*b,0),arrowTension.setArrow(gg*Math.tan(theta)*b,gg*b,0),arrowFc.setArrow(gg*Math.tan(theta)*b,0,0),arrowVV.setArrow(0,0,LL*Math.sin(theta)*omega*b),arrowRR=new TEACHER.ObjArrow(a,16738047),scene.add(arrowRR).add(arrowTau).add(arrowAngulerMomentum).add(arrowDeltaL),labelMg=new OneLabel(0),labelTension=new OneLabel(1),labelFc=new OneLabel(2),labelAngulerMomentum=new OneLabel(3),labelRR=new OneLabel(4),labelVV=new OneLabel(5),labelTau=new OneLabel(6),labelDeltaL=new OneLabel(7),scene.add(labelMg).add(labelTension).add(labelFc).add(labelAngulerMomentum).add(labelRR).add(labelVV).add(labelTau).add(labelDeltaL),labelMg.scale.x=labelMg.scale.y=labelTension.scale.x=labelTension.scale.y=labelFc.scale.x=labelFc.scale.y=labelAngulerMomentum.scale.x=labelAngulerMomentum.scale.y=labelRR.scale.x=labelRR.scale.y=labelVV.scale.x=labelVV.scale.y=labelTau.scale.x=labelTau.scale.y=labelDeltaL.scale.x=labelDeltaL.scale.y=.04}function setArrows(){let a=.05,b=.1,c=-40*Math.sin(theta)*Math.cos(thePendulum.rotation.y),d=LL*Math.sin(theta)*Math.sin(thePendulum.rotation.y),e=-40*Math.cos(theta)+originY,f=c-originX,g=d,h=LL*Math.sin(theta)*omega,i=h*Math.sin(thePendulum.rotation.y),j=h*Math.cos(thePendulum.rotation.y),k=gg*Math.tan(theta),l=k*Math.cos(thePendulum.rotation.y),m=-k*Math.sin(thePendulum.rotation.y);arrowRR.position.y=LL*Math.cos(theta)-originY,arrowRR.position.x=originX,arrowRR.setArrow(f,e,g),theOrigin.position.x=originX,theOrigin.position.y=LL*Math.cos(theta)-originY,arrowAngulerMomentum.position.x=c,arrowAngulerMomentum.position.z=d,arrowAngulerMomentum.position.y=0,arrowAngulerMomentum.setArrow(e*j*a,(g*i-f*j)*a,-e*i*a),arrowTau.position.x=c,arrowTau.position.z=d,arrowTau.position.y=0,arrowTau.setArrow(e*m*b,(g*l-f*m)*b,-e*l*b),arrowDeltaL.position.x=c+e*j*a,arrowDeltaL.position.z=d-e*i*a,arrowDeltaL.position.y=(g*i-f*j)*a,arrowDeltaL.setArrow(e*m*a,(g*l-f*m)*a,-e*l*a),traceLL.position.x=arrowAngulerMomentum.position.x,traceLL.position.y=arrowAngulerMomentum.position.y,traceLL.position.z=arrowAngulerMomentum.position.z,.01<dt&&4===gameMD&&(traceLL.addPoint(e*j*a,(g*i-f*j)*a,-e*i*a),traceLL.update()),labelMg.position.x=c,labelMg.position.y=-5,labelMg.position.z=d+5,labelTension.position.x=.9*c,labelTension.position.y=15,labelTension.position.z=.9*d,labelFc.position.x=.7*c,labelFc.position.y=5,labelFc.position.z=.7*d,labelAngulerMomentum.position.x=arrowAngulerMomentum.position.x+.5*e*j*a,labelAngulerMomentum.position.y=arrowAngulerMomentum.position.y+.5*(g*i-f*j)*a+5,labelAngulerMomentum.position.z=arrowAngulerMomentum.position.z-.5*e*i*a+5,labelRR.position.x=arrowRR.position.x+.5*f,labelRR.position.y=arrowRR.position.y+.5*e+5,labelRR.position.z=arrowRR.position.z+.5*g,labelVV.position.x=c+.5*i*2,labelVV.position.y=5,labelVV.position.z=d+.5*j*2,labelTau.position.x=arrowTau.position.x+.5*e*m*b,labelTau.position.y=arrowTau.position.y+.5*(g*l-f*m)*b,labelTau.position.z=arrowTau.position.z-.5*e*l*b-5,labelDeltaL.position.x=arrowDeltaL.position.x+.5*e*m*b,labelDeltaL.position.y=arrowDeltaL.position.y+.5*(g*l-f*m)*b+5,labelDeltaL.position.z=arrowDeltaL.position.z-.5*e*l*b,labelMg.rotation.y=labelTension.rotation.y=labelFc.rotation.y=labelAngulerMomentum.rotation.y=labelRR.rotation.y=labelVV.rotation.y=labelTau.rotation.y=labelDeltaL.rotation.y=world3D.cameraPhi,arrowMg.visible=1===gameMD,arrowTension.visible=1===gameMD,arrowFc.visible=1===gameMD||3===gameMD,arrowVV.visible=2===gameMD,arrowAngulerMomentum.visible=2===gameMD||4===gameMD,arrowTau.visible=3===gameMD||4===gameMD,arrowRR.visible=2===gameMD||3===gameMD,arrowDeltaL.visible=4===gameMD,theOrigin.visible=2===gameMD||3===gameMD,traceLL.visible=4===gameMD,world2D.slOriginX.visible=world2D.slOriginY.visible=1<gameMD,world2D.chFocus.visible=4===gameMD;let n=world2D.chLabel.checked;labelMg.visible=arrowMg.visible&&n,labelTension.visible=arrowTension.visible&&n,labelFc.visible=arrowFc.visible&&n,labelAngulerMomentum.visible=arrowAngulerMomentum.visible&&n,labelRR.visible=arrowRR.visible&&n,labelVV.visible=arrowVV.visible&&n,labelTau.visible=arrowTau.visible&&n,labelDeltaL.visible=arrowDeltaL.visible&&n}function clickHandAction(){handThetaTarget=handThetaTarget<Math.PI/4?Math.PI/2:0}class OneRightHand extends THREE.Object3D{constructor(){super();let a=this;a.rotYIn=new THREE.Object3D,a.rotZMid=new THREE.Object3D,a.add(a.rotZMid),a.rotZMid.add(a.rotYIn);a.theta=0;var b=new TEACHER.ObjCylinder(4.5,9,16750899,!1,"z");b.position.z=-4.5,b.scale.x=.4,a.rotYIn.add(b);var b=new TEACHER.ObjCylinder(2,5,16750899,!1,"y");b.position.y=3,b.position.z=-3,b.position.x=-1,b.rotation.z=20*Math.PI/180,b.rotation.x=-20*Math.PI/180,a.rotYIn.add(b);var b=new TEACHER.ObjCylinder(1.5,3,16750899,!1,"y");b.position.y=6.2,b.position.z=-4,b.position.x=-1.8,b.rotation.x=-10*Math.PI/180,b.scale.z=.9,a.rotYIn.add(b);var b=new TEACHER.ObjCylinder(1,2,16750899,!1,"y");b.position.y=8.5,b.position.z=-4.2,b.position.x=-1.8,b.scale.z=.9,a.rotYIn.add(b);var c=new TEACHER.ObjSphere(1,16750899);c.position.y=8.5+1,c.position.z=-4.2,c.position.x=-1.8,c.scale.z=.9,c.scale.y=.6,a.rotYIn.add(c),a.lowerFingers=new THREE.Object3D,a.lowerFingers.position.z=-9,a.rotYIn.add(a.lowerFingers);var b=new TEACHER.ObjCylinder(1,3,16750899,!1,"z");b.position.z=-1.5,b.position.y=3.5,a.lowerFingers.add(b);var b=new TEACHER.ObjCylinder(1.2,3.4,16750899,!1,"z");b.position.z=-1.7,b.position.y=1.2,a.lowerFingers.add(b);var b=new TEACHER.ObjCylinder(1,3,16750899,!1,"z");b.position.z=-1.5,b.position.y=-1.2,a.lowerFingers.add(b);var b=new TEACHER.ObjCylinder(.9,2.9,16750899,!1,"z");b.position.z=-1.45,b.position.y=-3.2,a.lowerFingers.add(b),a.middleFingers=new THREE.Object3D,a.middleFingers.position.z=-3,a.lowerFingers.add(a.middleFingers);var b=new TEACHER.ObjCylinder(.85,2.2,16750899,!1,"z");b.position.z=-1.1,b.position.y=3.5,a.middleFingers.add(b);var b=new TEACHER.ObjCylinder(.9,2.6,16750899,!1,"z");b.position.z=-1.3,b.position.y=1.2,a.middleFingers.add(b);var b=new TEACHER.ObjCylinder(.85,2.2,16750899,!1,"z");b.position.z=-1.1,b.position.y=-1.2,a.middleFingers.add(b);var b=new TEACHER.ObjCylinder(.75,2,16750899,!1,"z");b.position.z=-1,b.position.y=-3.2,a.middleFingers.add(b),a.upperFingers=new THREE.Object3D,a.upperFingers.position.z=-2.2,a.middleFingers.add(a.upperFingers);var b=new TEACHER.ObjCylinder(.75,2,16750899,!1,"z");b.position.z=-1,b.position.y=3.5,a.upperFingers.add(b);var b=new TEACHER.ObjCylinder(.8,2.4,16750899,!1,"z");b.position.z=-1.2,b.position.y=1.2,a.upperFingers.add(b);var b=new TEACHER.ObjCylinder(.75,2,16750899,!1,"z");b.position.z=-1,b.position.y=-1.2,a.upperFingers.add(b);var b=new TEACHER.ObjCylinder(.65,1.8,16750899,!1,"z");b.position.z=-.9,b.position.y=-3.2,a.upperFingers.add(b)}bendHand(a){let b=this;b.theta=a,b.lowerFingers.rotation.y=a,b.middleFingers.rotation.y=a,b.upperFingers.rotation.y=a}rotateHand(a,b,c,d,e,f){let g=this,h=d**2+e**2+f**2,i=a**2+b**2+c**2;h=Math.sqrt(h),i=Math.sqrt(i);let j=d/h,k=e/h,l=f/h,m=a/i,n=b/i,o=c/i,p=Math.acos(k),q=Math.atan2(l,-j),r=Math.atan2(-n/Math.sin(p),-m*Math.sin(q)-o*Math.cos(q));g.rotYIn.rotation.y=r,g.rotZMid.rotation.z=p,g.rotation.y=q}}var EquationPlane=class extends THREE.Object3D{constructor(){super();let a=this;a.ss=1,a.w=800,a.h=400,a.canvas=document.createElement("canvas"),a.canvas.width=a.w*a.ss,a.canvas.height=a.h*a.ss,a.stage=new createjs.Stage(a.canvas),a.eTexture=new lib.textureEquation,a.eTexture.scaleX=a.eTexture.scaleY=a.ss,a.stage.addChild(a.eTexture),a.stage.update(),a.mapTexture=new THREE.Texture(a.canvas),a.mapTexture.needsUpdate=!0,a.mapMaterial=new THREE.MeshStandardMaterial({map:a.mapTexture,side:0,roughness:.4,transparent:!0}),a.mesh=new THREE.Mesh(new THREE.PlaneGeometry(a.w,a.h,1,1),a.mapMaterial),a.add(a.mesh)}setEquationPlane(a){let b=this;b.eTexture.gotoAndStop(a-1),b.stage.update(),b.mapTexture.needsUpdate=!0}},OneLabel=class extends THREE.Object3D{constructor(a){super();let b=this;b.ss=1,b.w=200,b.h=200,b.canvas=document.createElement("canvas"),b.canvas.width=b.w*b.ss,b.canvas.height=b.h*b.ss,b.stage=new createjs.Stage(b.canvas),b.eTexture=new lib.textureLabel,b.eTexture.gotoAndStop(a),b.eTexture.scaleX=b.eTexture.scaleY=b.ss,b.stage.addChild(b.eTexture),b.stage.update(),b.mapTexture=new THREE.Texture(b.canvas),b.mapTexture.needsUpdate=!0,b.mapMaterial=new THREE.MeshStandardMaterial({map:b.mapTexture,side:0,roughness:.4,transparent:!0}),b.mesh=new THREE.Mesh(new THREE.PlaneGeometry(b.w,b.h,1,1),b.mapMaterial),b.add(b.mesh)}},TEACHER={};TEACHER.ObjPlane=class extends THREE.Object3D{constructor(a,b,c,d,e){super();let f=this;f.mat=new TEACHER.MSMat(c,e),f.geo=new THREE.PlaneGeometry(a||10,b||10,1,1),f.mesh=new THREE.Mesh(f.geo,f.mat),"x"===d?f.mesh.rotation.y=.5*Math.PI:"y"==d&&(f.mesh.rotation.x=-.5*Math.PI),f.add(f.mesh)}},TEACHER.ObjCylinder=class extends THREE.Object3D{constructor(a,b,c,d,e,f){super();let g=this;g.mat=new TEACHER.MSMat(c,f),g.geo=new THREE.CylinderGeometry(a||10,a||10,b||10,32,2,d),g.mesh=new THREE.Mesh(g.geo,g.mat),"x"===e?g.mesh.rotation.z=-.5*Math.PI:"z"==e&&(g.mesh.rotation.x=.5*Math.PI),g.add(g.mesh)}},TEACHER.ObjSphere=class extends THREE.Object3D{constructor(a,b,c){super();let d=this;d.mat=new TEACHER.MSMat(b,c),d.geo=new THREE.SphereGeometry(a||10,32,16),d.mesh=new THREE.Mesh(d.geo,d.mat),d.add(d.mesh)}},TEACHER.ObjBox=class extends THREE.Object3D{constructor(a,b,c,d,e){super();let f=this;f.mat=new TEACHER.MSMat(d,e),f.geo=new THREE.BoxGeometry(a||10,b||10,c||10),f.mesh=new THREE.Mesh(f.geo,f.mat),f.add(f.mesh)}},TEACHER.MSMat=class extends THREE.MeshStandardMaterial{constructor(a,b){super({color:a||16711935,roughness:.4,side:b||0})}},TEACHER.ObjPicPlane=class extends THREE.Object3D{constructor(a,b,c,d,e){super();let f=this,g=new THREE.TextureLoader().load(c);f.mat=new THREE.MeshBasicMaterial({map:g,transparent:!0,side:e||0}),f.geo=new THREE.PlaneGeometry(a,b,1,1),f.mesh=new THREE.Mesh(f.geo,f.mat),"x"===d?f.mesh.rotation.y=.5*Math.PI:"y"==d&&(f.mesh.rotation.x=-.5*Math.PI),f.add(f.mesh)}},TEACHER.ObjPicCylinder=class extends THREE.Object3D{constructor(a,b,c,d,e,f){super();let g=this,h=new THREE.TextureLoader().load(c);g.mat=new THREE.MeshBasicMaterial({map:h,side:f||0}),g.geo=new THREE.CylinderGeometry(a||10,a||10,b||10,32,4,d),g.mesh=new THREE.Mesh(g.geo,g.mat),"x"===e?g.mesh.rotation.z=-.5*Math.PI:"z"===e?(g.mesh.rotation.y=.5*Math.PI,g.mesh.rotation.x=.5*Math.PI):"y"==e&&(g.mesh.rotation.y=.5*Math.PI),g.add(g.mesh)}},TEACHER.ObjPicSphere=class extends THREE.Object3D{constructor(a,b,c){super();let d=this,e=new THREE.TextureLoader().load(b);d.mat=new THREE.MeshBasicMaterial({map:e,side:c||0}),d.geo=new THREE.SphereGeometry(a||10,32,16),d.mesh=new THREE.Mesh(d.geo,d.mat),d.add(d.mesh)}},TEACHER.ObjArrow=class extends THREE.Object3D{constructor(a,b){super();let c=.5,d=new THREE.MeshStandardMaterial({color:b||16711935,roughness:.4}),e=new THREE.ConeGeometry(a||10,40,32);this.ArrowHead=new THREE.Mesh(e,d),this.ArrowHead.position.y=80,e=new THREE.CylinderGeometry((a||10)*c,(a||10)*c,60,32,2),this.ArrowBody=new THREE.Mesh(e,d),this.ArrowBody.position.y=30,this.rotX=new THREE.Object3D,this.rotY=new THREE.Object3D,this.add(this.rotY),this.rotY.add(this.rotX),this.rotX.add(this.ArrowBody),this.rotX.add(this.ArrowHead)}setArrow(a,b,c){let d=a*a+b*b+c*c,e=Math.sqrt(d);0<d?(this.rotX.visible=!0,this.rotX.scale.y=e/100):this.rotX.visible=!1,this.rotX.rotation.x=Math.acos(b/e),this.rotY.rotation.y=Math.atan2(a,c),this.xx=a,this.yy=b,this.zz=c,this.rr=Math.sqrt(a**2+b**2+c**2)}},TEACHER.ObjSpring=class extends THREE.Object3D{constructor(a,b,c,d,e){super();let f=a||20;this.L0=f;let g=[],h=d||5,j=b||5;g.push(new THREE.Vector3(0,0,0)),g.push(new THREE.Vector3(0,.05*f,0));for(var k=0;k<=16*h;k++)g.push(new THREE.Vector3(j*Math.cos(2*k*Math.PI/16),f*(.05+.9*k/h/16),j*Math.sin(2*k*Math.PI/16)));g.push(new THREE.Vector3(0,.95*f,0)),g.push(new THREE.Vector3(0,f,0));let l=new THREE.CatmullRomCurve3(g),m=new THREE.MeshStandardMaterial({color:e||16711935,roughness:.4}),n=new THREE.TubeGeometry(l,500,c||.5,12);this.mesh=new THREE.Mesh(n,m),this.rotX=new THREE.Object3D,this.rotY=new THREE.Object3D,this.add(this.rotY),this.rotY.add(this.rotX),this.rotX.add(this.mesh)}setSpring(a,b,c){let d=a*a+b*b+c*c,e=Math.sqrt(d);0<d?(this.rotX.visible=!0,this.rotX.scale.y=e/this.L0):this.rotX.visible=!1,this.rotX.rotation.x=Math.acos(b/e),this.rotY.rotation.y=Math.atan2(a,c)}},TEACHER.Points=class extends THREE.Points{constructor(a,b,c){let d=new THREE.Color(a||16711935),e=new THREE.BufferGeometry,f=[];e.setAttribute("position",new THREE.Float32BufferAttribute(f,3)),e.computeBoundingSphere();let g=new THREE.PointsMaterial({size:b||1,map:TEACHER.Points.createCanvasMaterial("#"+d.getHexString(),64),transparent:!0,depthWrite:!1});super(e,g);let h=this;h.nnMax=c||1e4,h.nnNow=0,h.geometry=e,h.positions=f}static createCanvasMaterial(a,b){var c=document.createElement("canvas");c.width=c.height=b;var d=c.getContext("2d");d.imageSmoothingEnabled=!1;var e=new THREE.Texture(c),f=b/2;return d.beginPath(),d.arc(f,f,b/2-3,0,2*Math.PI,!1),d.closePath(),d.fillStyle=a,d.fill(),e.needsUpdate=!0,e}addPoint(a,b,c){let d=this;d.nnNow<d.nnMax?d.nnNow++:(log("TEACHER.Points \u5230\u9054\u6700\u5927\u9EDE\u6578"),d.positions.shift(),d.positions.shift(),d.positions.shift()),d.positions.push(a,b,c)}clear(){let a=this;a.positions=[],a.nnNow=0,a.update()}setPoint(a,b,c,d){let e=this;a>e.nnMax?log("\u8F38\u5165\u7684n\u503C\u5927\u65BCTEACHER.Points \u6700\u5927\u9EDE\u6578 nnMax"):a>e.nnNow?log("\u8F38\u5165\u7684n\u503C\u5927\u65BCTEACHER.Points \u73FE\u5728\u9EDE\u6578 nnNow"):(e.positions[3*a]=b,e.positions[3*a+1]=c,e.positions[3*a+2]=d)}getPoint(a){let b=this,c=new THREE.Vector3;return a>b.nnMax?log("\u8F38\u5165\u7684n\u503C\u5927\u65BCTEACHER.Points \u6700\u5927\u9EDE\u6578 nnMax"):a>b.nnNow?log("\u8F38\u5165\u7684n\u503C\u5927\u65BCTEACHER.Points \u73FE\u5728\u9EDE\u6578 nnNow"):(c.x=b.positions[3*a],c.y=b.positions[3*a+1],c.z=b.positions[3*a+2]),c}update(){let a=this;a.geometry.setAttribute("position",new THREE.Float32BufferAttribute(a.positions,3)),a.geometry.computeBoundingSphere(),a.geometry.attributes.position.needsUpdate=!0}},TEACHER.Line=class extends THREE.Line2{constructor(a,b,c){let d=c||1e4;var e=new THREE.LineMaterial({color:a||16711935,linewidth:b||1});e.resolution.set(window.innerWidth,window.innerHeight);let f=new THREE.LineGeometry,g=new Float32Array(3*d);f.setPositions(g),super(f,e);let h=this;h.nnMax=d,h.lineWidth=b||1,h.nnNow=0,h.geometry=f,h.positions=g}addPoint(a,b,c){let d=this;if(d.nnNow<d.nnMax)d.nnNow++;else{log("TEACHER.Line \u5230\u9054\u6700\u5927\u9EDE\u6578");for(var e=0;e<d.nnMax-1;e++)d.positions[3*e]=d.positions[3*e+3],d.positions[3*e+1]=d.positions[3*e+4],d.positions[3*e+2]=d.positions[3*e+5]}for(var e=d.nnNow;e<=d.nnMax;e++)d.positions[3*(e-1)]=a,d.positions[3*(e-1)+1]=b,d.positions[3*(e-1)+2]=c}clear(){let a=this;a.positions=new Float32Array(3*a.nnMax);a.nnNow=0,a.update()}setPoint(a,b,c,d){let e=this;a>e.nnMax?log("\u8F38\u5165\u7684n\u503C\u5927\u65BCTEACHER.Line \u6700\u5927\u9EDE\u6578 nnMax"):a>e.nnNow?log("\u8F38\u5165\u7684n\u503C\u5927\u65BCTEACHER.Line \u73FE\u5728\u9EDE\u6578 nnNow"):(e.positions[3*a]=b,e.positions[3*a+1]=c,e.positions[3*a+2]=d)}getPoint(a){let b=this,c=new THREE.Vector3;return a>b.nnMax?log("\u8F38\u5165\u7684n\u503C\u5927\u65BCTEACHER.Line \u6700\u5927\u9EDE\u6578 nnMax"):a>b.nnNow?log("\u8F38\u5165\u7684n\u503C\u5927\u65BCTEACHER.Line \u73FE\u5728\u9EDE\u6578 nnNow"):(c.x=b.positions[3*a],c.y=b.positions[3*a+1],c.z=b.positions[3*a+2]),c}update(){let a=this,b=a.getPoint(a.nnNow-1);for(var c=a.nnNow;c<=a.nnMax;c++)a.positions[3*c]=b.x,a.positions[3*c+1]=b.y,a.positions[3*c+2]=b.z;a.geometry.setPositions(a.positions)}},TEACHER.ObjTextPlane=class extends THREE.Object3D{constructor(a,b,c,d,e,f){super();let g=this,h=Math.round(Math.log2(a/b)),i=$("<canvas>").attr("width",128*Math.pow(2,h)+"").attr("height","128");g.stage=new createjs.Stage(i[0]);let j=new createjs.Container;if(f){let a=new createjs.Shape,b=new THREE.Color(f);a.graphics.c().f("#"+b.getHexString()).dr(0,0,128*Math.pow(2,h),128),j.addChild(a)}g.ctext=new createjs.Text;let k=new THREE.Color(e||16777215);g.ctext.color="#"+k.getHexString(),g.ctext.font="96px Arial",g.ctext.text=c||"",g.ctext.textAlign="center",g.ctext.textBaseline="middle",g.ctext.x=128*Math.pow(2,h)/2,g.ctext.y=64,j.addChild(g.ctext),g.stage.addChild(j),g.stage.update(),g.texture=new THREE.Texture(i[0]);var l=new THREE.MeshBasicMaterial({map:g.texture,transparent:!0}),m=new THREE.PlaneGeometry(a||10,b||10,1,1);g.texture.needsUpdate=!0,g.plane1=new THREE.Mesh(m,l),g.plane2=new THREE.Mesh(m,l),g.plane2.rotation.y=Math.PI;let n=new THREE.Object3D;n.add(g.plane1).add(g.plane2),"x"===d?n.rotation.y=.5*Math.PI:"y"==d&&(n.rotation.x=-.5*Math.PI),g.add(n)}setText(a){let b=this;b.ctext.text=a,b.stage.update(),b.texture.needsUpdate=!0}},TEACHER.ObjGraph=class extends THREE.Object3D{constructor(a,b,c,d,e,f,g){super();let h=this;h.objCon=new THREE.Object3D,h._xMin=a||0,h._xMax=b||10,h._yMin=c||0,h._yMax=d||10,h.divXN=5,h.divYN=4,h.frameMat=new THREE.LineBasicMaterial({color:e||16777215});for(var i=[],j=0;j<=h.divXN;j++)i.push(new THREE.Vector3(-50+20*j,0,0)),i.push(new THREE.Vector3(-50+20*j,50,0));for(var k=0;k<=h.divYN;k++)i.push(new THREE.Vector3(-50,12.5*k,0)),i.push(new THREE.Vector3(50,12.5*k,0));let l=new THREE.BufferGeometry().setFromPoints(i);h.frame=new THREE.LineSegments(l,h.frameMat),h.objCon.add(h.frame),h.labelXMin=new TEACHER.ObjTextPlane(20,5,h._xMin+"","z",e||16777215),h.labelXMin.position.x=-50,h.labelXMin.position.y=-3,h.objCon.add(h.labelXMin),h.labelXMax=new TEACHER.ObjTextPlane(20,5,h._xMax+"","z",e||16777215),h.labelXMax.position.x=50,h.labelXMax.position.y=-3,h.objCon.add(h.labelXMax),h.labelYMin=new TEACHER.ObjTextPlane(20,5,h._yMin+"","z",e||16777215),h.labelYMin.position.x=-53,h.labelYMin.position.y=0,h.objCon.add(h.labelYMin),h.labelYMax=new TEACHER.ObjTextPlane(20,5,h._yMax+"","z",e||16777215),h.labelYMax.position.x=-53,h.labelYMax.position.y=50,h.objCon.add(h.labelYMax),h.labelX=new TEACHER.ObjTextPlane(24,7,"x","z",e||16777215),h.labelX.position.x=60,h.labelX.position.y=4,h.labelX.position.z=1,h.labelY=new TEACHER.ObjTextPlane(24,7,"y","z",e||16777215),h.labelY.position.x=-60,h.labelY.position.y=25,h.labelY.position.z=1,h.labelY.rotation.z=Math.PI/2,h.labelTitle=new TEACHER.ObjTextPlane(40,10,"y-x","z",e||16777215),h.labelTitle.position.y=53,h.labelTitle.position.z=1,h.objCon.add(h.labelX).add(h.labelY).add(h.labelTitle),h._lineColor=f,h._nnMax=g,h.line=new TEACHER.Line(h._lineColor||16776960,2,h._nnMax),h.objCon.add(h.line),h.changeScale(),h.add(h.objCon)}addPoint(a,b){let c=this;c.line.addPoint(a,b,0),c.line.update()}clear(){let a=this;a.line.clear()}changeScale(){let a=this;a.line.scale.x=100/(a._xMax-a._xMin),a.line.scale.y=50/(a._yMax-a._yMin),a.line.position.x=-50-a._xMin*a.line.scale.x,a.line.position.y=-a._yMin*a.line.scale.y,a.labelXMin.setText(a._xMin),a.labelXMax.setText(a._xMax),a.labelYMin.setText(a._yMin),a.labelYMax.setText(a._yMax)}setLabel(a,b,c){let d=this;d.labelTitle.setText(a||"y-x"),d.labelY.setText(b||"y"),d.labelX.setText(c||"x")}get xMin(){return this._xMin}set xMin(a){this._xMin=a,this.changeScale()}get xMax(){return this._xMax}set xMax(a){this._xMax=a,this.changeScale()}get yMin(){return this._yMin}set yMin(a){this._yMin=a,this.changeScale()}get yMax(){return this._yMax}set yMax(a){this._yMax=a,this.changeScale()}};var skyBox=new THREE.Object3D;skyBox.wallU=new TEACHER.ObjPicPlane(1e4,1e4,pics.wallU,"y",1),skyBox.wallD=new TEACHER.ObjPicPlane(1e4,1e4,pics.wallD,"y",0),skyBox.wallS=new TEACHER.ObjPicCylinder(5e3,1e4,pics.wallSide,!0,"y",1),skyBox.wallU.position.y=5e3,skyBox.wallD.position.y=-5e3,skyBox.add(skyBox.wallU).add(skyBox.wallD).add(skyBox.wallS),world3D.scene.add(skyBox);var ground=new TEACHER.ObjPicPlane(100,100,pics.ground,"y");world3D.scene.add(ground);var logo=new TEACHER.ObjPicPlane(100,100/8,pics.logo,"z",2);logo.position.z=-50,logo.position.y=100/8/2,world3D.scene.add(logo);function getMouse3D(a){let b,c=a||"y",d=new THREE.Vector3;"x"===c?b=new THREE.Vector3(1,0,0):"y"===c?b=new THREE.Vector3(0,1,0):"z"===c?b=new THREE.Vector3(0,0,1):log("\u932F\u8AA4!!");let e=new THREE.Vector2;return e.x=2*(world2D.stage.mouseX/1600)-1,e.y=2*-(world2D.stage.mouseY/900)+1,world3D.raycaster.setFromCamera(e,world3D.camera),world3D.raycaster.ray.intersectPlane(new THREE.Plane(b),d),d}init();