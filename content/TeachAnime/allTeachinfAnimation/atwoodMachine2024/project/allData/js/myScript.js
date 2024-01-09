'use strict';var fps=60,log=console.log,gameMD=0,wRMD=1,wLMD=0,rrBig=6,rrSmall=3;const wheelD=2,wheelBigY0=50,wheelSmallY0=25,wireR=.3,wireColor=16777215;var the3DBtns,mousePosition,theEquation,wheelU,wheelR,wheelL,blocksA,blocksB,blocksC,blocksD,blocksR,blocksL,aA=0,aB=0,aC=0,aD=0,aR=0,aL=0,vA=0,vB=0,vC=0,vD=0,vR=0,vL=0;const gg=.6,dt=.1;var titleTime=120;function init(){ground.visible=!1,wheelU=new OneWheel(rrBig),wheelR=new OneWheel(rrSmall,"S"),wheelL=new OneWheel(rrSmall,"S"),scene.add(wheelU).add(wheelR).add(wheelL),wheelU.position.y=wheelBigY0,wheelR.position.y=wheelSmallY0,wheelL.position.y=wheelSmallY0,wheelR.position.x=rrBig,wheelL.position.x=-rrBig,blocksA=new Blocks,blocksB=new Blocks,blocksC=new Blocks,blocksD=new Blocks,blocksR=new Blocks,blocksL=new Blocks,blocksA.position.x=-rrSmall,blocksB.position.x=+rrSmall,blocksC.position.x=-rrSmall,blocksD.position.x=+rrSmall,blocksR.position.x=+rrBig,blocksL.position.x=-rrBig,blocksA.position.y=blocksB.position.y=blocksC.position.y=blocksD.position.y=-wheelSmallY0,blocksR.position.y=blocksL.position.y=wheelSmallY0,blocksA.label.setLablelPlane(0),blocksB.label.setLablelPlane(1),blocksC.label.setLablelPlane(2),blocksD.label.setLablelPlane(3),blocksR.label.setLablelPlane(4),blocksL.label.setLablelPlane(5),wheelL.add(blocksA).add(blocksB),wheelR.add(blocksC).add(blocksD),scene.add(blocksR).add(blocksL);let a=new TEACHER.ObjBox(30,5,10,10066329);a.position.y=wheelBigY0+10+2.5,scene.add(a),the3DBtns=new The3DBtns,the3DBtns.position.z=wheelD,the3DBtns.position.y=wheelSmallY0,scene.add(the3DBtns),theEquation=new EquationPlane,theEquation.scale.x=theEquation.scale.y=.15,theEquation.position.z=logo.position.z,theEquation.position.y=25,scene.add(theEquation),world2D.btnGo.on("click",clickBtn),world2D.btnReset.on("click",clickBtn),world2D.slCameraRR.value=110,world2D.slCameraRR.maximum=160,setInterval(tick,1e3/fps)}function tick(){if(titleTime--,60<titleTime?(world2D.title.x=800,world2D.title.y=450,world2D.title.scaleX=world2D.title.scaleY=2):0<titleTime&&(world2D.title.x=(800*titleTime+270*(60-titleTime))/60,world2D.title.y=(450*titleTime+80*(60-titleTime))/60,world2D.title.scaleX=world2D.title.scaleY=(2*titleTime+1*(60-titleTime))/60),0===gameMD)blocksR.position.y=wheelR.position.y=blocksL.position.y=wheelL.position.y=wheelSmallY0,blocksA.position.y=blocksB.position.y=blocksC.position.y=blocksD.position.y=-wheelSmallY0,wheelL.conIn.rotation.z=wheelR.conIn.rotation.z=wheelU.conIn.rotation.z=0,blocksA.visible=blocksB.visible=1===wLMD,blocksC.visible=blocksD.visible=1===wRMD,blocksR.visible=0===wRMD,blocksL.visible=0===wLMD,wheelR.visible=1===wRMD,wheelL.visible=1===wLMD,blocksA.setVisible(),blocksB.setVisible(),blocksC.setVisible(),blocksD.setVisible(),blocksR.setVisible(),blocksL.setVisible(),blocksA.setWire(-blocksA.position.y),blocksB.setWire(-blocksB.position.y),blocksC.setWire(-blocksC.position.y),blocksD.setWire(-blocksD.position.y),blocksR.setWire(wheelBigY0-blocksR.position.y),blocksL.setWire(wheelBigY0-blocksL.position.y),wheelR.setWire(wheelBigY0-blocksR.position.y),wheelL.setWire(wheelBigY0-blocksL.position.y),wheelU.setWire(10),mousePosition=getMouse3D("z",wheelD),the3DBtns.setBtns(mousePosition.x,mousePosition.y),vR=vL=vA=vB=vC=vD=0;else if(1===gameMD){let a=0===wRMD?blocksR.mass:4*blocksC.mass*blocksD.mass/(blocksC.mass+blocksD.mass),b=0===wLMD?blocksL.mass:4*blocksA.mass*blocksB.mass/(blocksA.mass+blocksB.mass);aR=(a-b)/(a+b)*gg,aL=-aR,aA=(blocksA.mass-blocksB.mass)/(blocksA.mass+blocksB.mass)*(gg-aL),aB=(blocksB.mass-blocksA.mass)/(blocksA.mass+blocksB.mass)*(gg-aL),aC=(blocksC.mass-blocksD.mass)/(blocksC.mass+blocksD.mass)*(gg-aR),aD=(blocksD.mass-blocksC.mass)/(blocksC.mass+blocksD.mass)*(gg-aR),wheelU.conIn.rotation.z-=(vR*dt+.5*aR*dt*dt)/wheelU.rr,wheelR.conIn.rotation.z-=(vD*dt+.5*aD*dt*dt)/wheelR.rr,wheelL.conIn.rotation.z-=(vB*dt+.5*aB*dt*dt)/wheelL.rr,wheelR.position.y-=vR*dt+.5*aR*dt*dt,vR+=aR*dt,wheelL.position.y-=vL*dt+.5*aL*dt*dt,vL+=aL*dt,blocksR.position.y=wheelR.position.y,blocksL.position.y=wheelL.position.y,blocksA.position.y-=vA*dt+.5*aA*dt*dt,blocksB.position.y-=vB*dt+.5*aB*dt*dt,blocksC.position.y-=vC*dt+.5*aC*dt*dt,blocksD.position.y-=vD*dt+.5*aD*dt*dt,vA+=aA*dt,vB+=aB*dt,vC+=aC*dt,vD+=aD*dt,blocksA.setWire(-blocksA.position.y),blocksB.setWire(-blocksB.position.y),blocksC.setWire(-blocksC.position.y),blocksD.setWire(-blocksD.position.y),blocksR.setWire(wheelBigY0-blocksR.position.y),blocksL.setWire(wheelBigY0-blocksL.position.y),wheelR.setWire(wheelBigY0-blocksR.position.y),wheelL.setWire(wheelBigY0-blocksL.position.y),1===wLMD&&(blocksA.position.y>-rrSmall||blocksB.position.y>-rrSmall)&&(gameMD=2),1===wRMD&&(blocksC.position.y>-rrSmall||blocksD.position.y>-rrSmall)&&(gameMD=2),(blocksR.position.y-wheelBigY0>-rrBig+2||blocksL.position.y-wheelBigY0>-rrBig+2)&&(gameMD=2)}the3DBtns.visible=0===gameMD&&(!world2D.chHide.checked||world2D.chHide.checked&&Math.abs(mousePosition.x)<.5*the3DBtns.w&&Math.abs(mousePosition.y-wheelSmallY0)<.5*the3DBtns.h),theEquation.visible=world2D.chEquation.checked,theEquation.setEquationPlane(),world2D.btnGo.visible=0===gameMD,world2D.btnReset.visible=0<gameMD,world3D.cameraTarget.y=wheelSmallY0-5+0*Math.cos(world3D.cameraTheta),world3D.render(),world2D.stage.update()}MyJS.myResize();function clickBtn(a){let b=a.target.name;"btnGo"===b&&0===gameMD?gameMD=1:"btnReset"===b&&0<gameMD&&(gameMD=0)}class OneWheel extends THREE.Object3D{constructor(a,b){super();let c=this;c.rr=a,c.BS=b,c.conIn=new THREE.Object3D,c.conIn.scale.x=c.conIn.scale.y=c.rr,c.conIn.scale.z=20,c.add(c.conIn),c.gltf;const d=new THREE.GLTFLoader;d.load("allData/js/model3D/wheel.gltf",function(a){c.gltf=a,c.conIn.add(a.scene),a.animations,a.scene,a.scenes,a.cameras,a.asset,a.scene.children[0].material=new TEACHER.MSMat(10066329)},function(){},function(){console.log("An error happened")});let e=new TEACHER.ObjBox(1.2,("S"===b?rrSmall:rrBig)+1.4,.5,6710886),f=new TEACHER.ObjBox(1.2,("S"===b?rrSmall:rrBig)+1.4,.5,6710886),g=new TEACHER.ObjBox(1.2,.5,wheelD+.5,6710886),h=new TEACHER.ObjCylinder(.4,4,3355443,!1,"z");e.position.z=1+.5,f.position.z=-1-.5,e.position.y=f.position.y=.5*("S"===b?rrSmall:rrBig)+.3,g.position.y=("S"===b?rrSmall:rrBig)+.75,c.add(e).add(f).add(g).add(h);let i=new THREE.TorusGeometry(c.rr,wireR,16,32,Math.PI),j=new TEACHER.MSMat(wireColor);c.cWire=new THREE.Mesh(i,j),c.add(c.cWire);let k=new THREE.CylinderGeometry(wireR,wireR,100,16,1);c.wire=new THREE.Mesh(k,j),c.add(c.wire)}setWire(a){let b=this,c=("S"===b.BS?rrSmall:rrBig)+1;b.wire.position.y=.5*(c+a),b.wire.scale.y=(a-c)/100}}class Blocks extends THREE.Object3D{constructor(){super();let a=this;a.dd=5,a.nnMax=6,a.blocks=[],a.mass=3;let c=new THREE.Shape,d=a.dd-3;c.moveTo(-d,-d),c.lineTo(+d,-d),c.lineTo(+d,+d),c.lineTo(-d,+d),c.lineTo(-d,-d);let e={steps:1,depth:a.dd-1,bevelEnabled:!0,bevelThickness:.5,bevelSize:.5,bevelOffset:0,bevelSegments:1},f=new THREE.ExtrudeGeometry(c,e),g=new TEACHER.MSMat(10053120);for(var h,j=0;j<a.nnMax;j++)h=new THREE.Mesh(f,g),h.position.y=-j*a.dd-.5,h.rotation.x=Math.PI/2,a.add(h),a.blocks.push(h);let k=new THREE.CylinderGeometry(wireR,wireR,100,16,1),l=new TEACHER.MSMat(wireColor);a.wire=new THREE.Mesh(k,l),a.add(a.wire),a.label=new LabelPlane,a.label.position.y=-.5*a.dd,a.label.position.z=.5*a.dd+.2,a.label.scale.x=a.label.scale.y=.15,a.add(a.label)}setVisible(){let a=this;for(var c,d=0;d<a.nnMax;d++)c=a.blocks[d],c.visible=d<a.mass;a.label.visible=world2D.chEquation.checked}setWire(a){let b=this;b.wire.scale.y=a/100,b.wire.position.y=a/2}}var LabelPlane=class extends THREE.Object3D{constructor(){super();let a=this;a.ss=1,a.w=30,a.h=30,a.canvas=document.createElement("canvas"),a.canvas.width=a.w*a.ss,a.canvas.height=a.h*a.ss,a.stage=new createjs.Stage(a.canvas),a.eTexture=new lib.textureABCD,a.eTexture.scaleX=a.eTexture.scaleY=a.ss,a.stage.addChild(a.eTexture),a.stage.update(),a.mapTexture=new THREE.Texture(a.canvas),a.mapTexture.needsUpdate=!0,a.mapMaterial=new THREE.MeshStandardMaterial({map:a.mapTexture,side:0,roughness:.4,transparent:!0}),a.mesh=new THREE.Mesh(new THREE.PlaneGeometry(a.w,a.h,1,1),a.mapMaterial),a.add(a.mesh)}setLablelPlane(a){let b=this;b.eTexture.letterABCD.gotoAndStop(a),b.stage.update(),b.mapTexture.needsUpdate=!0}};class The3DBtns extends THREE.Object3D{constructor(){super();let a=this;a.w=30,a.h=20,a.bg=new TEACHER.ObjPlane(a.w,a.h,10027161,"z");a.btnChangeR=new TEACHER.ObjPicPlane(5,5,"allData/pics/btnChange.png","z"),a.btnChangeL=new TEACHER.ObjPicPlane(5,5,"allData/pics/btnChange.png","z"),a.btnBlockRP=new TEACHER.ObjPicPlane(5,5,"allData/pics/btnP.png","z"),a.btnBlockRM=new TEACHER.ObjPicPlane(5,5,"allData/pics/btnM.png","z"),a.btnBlockLP=new TEACHER.ObjPicPlane(5,5,"allData/pics/btnP.png","z"),a.btnBlockLM=new TEACHER.ObjPicPlane(5,5,"allData/pics/btnM.png","z"),a.btnBlockAP=new TEACHER.ObjPicPlane(5,5,"allData/pics/btnP.png","z"),a.btnBlockAM=new TEACHER.ObjPicPlane(5,5,"allData/pics/btnM.png","z"),a.btnBlockBP=new TEACHER.ObjPicPlane(5,5,"allData/pics/btnP.png","z"),a.btnBlockBM=new TEACHER.ObjPicPlane(5,5,"allData/pics/btnM.png","z"),a.btnBlockCP=new TEACHER.ObjPicPlane(5,5,"allData/pics/btnP.png","z"),a.btnBlockCM=new TEACHER.ObjPicPlane(5,5,"allData/pics/btnM.png","z"),a.btnBlockDP=new TEACHER.ObjPicPlane(5,5,"allData/pics/btnP.png","z"),a.btnBlockDM=new TEACHER.ObjPicPlane(5,5,"allData/pics/btnM.png","z"),a.btnChangeR.str="btnChangeR",a.btnChangeL.str="btnChangeL",a.btnBlockRP.str="btnBlockRP",a.btnBlockRM.str="btnBlockRM",a.btnBlockLP.str="btnBlockLP",a.btnBlockLM.str="btnBlockLM",a.btnBlockAP.str="btnBlockAP",a.btnBlockAM.str="btnBlockAM",a.btnBlockBP.str="btnBlockBP",a.btnBlockBM.str="btnBlockBM",a.btnBlockCP.str="btnBlockCP",a.btnBlockCM.str="btnBlockCM",a.btnBlockDP.str="btnBlockDP",a.btnBlockDM.str="btnBlockDM",a.btnChangeR.position.y=a.btnChangeL.position.y=8,a.btnBlockRP.position.y=a.btnBlockLP.position.y=3,a.btnBlockRM.position.y=a.btnBlockLM.position.y=8,a.btnChangeR.position.x=+rrBig,a.btnBlockRP.position.x=a.btnBlockRM.position.x=+rrBig+5,a.btnChangeL.position.x=-rrBig,a.btnBlockLP.position.x=a.btnBlockLM.position.x=-rrBig-5,a.btnBlockAP.position.y=a.btnBlockBP.position.y=a.btnBlockCP.position.y=a.btnBlockDP.position.y=-8,a.btnBlockAM.position.y=a.btnBlockBM.position.y=a.btnBlockCM.position.y=a.btnBlockDM.position.y=-3,a.btnBlockAP.position.x=a.btnBlockAM.position.x=-rrBig-rrSmall,a.btnBlockBP.position.x=a.btnBlockBM.position.x=-rrBig+rrSmall,a.btnBlockCP.position.x=a.btnBlockCM.position.x=+rrBig-rrSmall,a.btnBlockDP.position.x=a.btnBlockDM.position.x=+rrBig+rrSmall,a.add(a.btnChangeR).add(a.btnChangeL).add(a.btnBlockRP).add(a.btnBlockRM).add(a.btnBlockLP).add(a.btnBlockLM).add(a.btnBlockAP).add(a.btnBlockAM).add(a.btnBlockBP).add(a.btnBlockBM).add(a.btnBlockCP).add(a.btnBlockCM).add(a.btnBlockDP).add(a.btnBlockDM),a.btns=[a.btnChangeR,a.btnChangeL,a.btnBlockRP,a.btnBlockRM,a.btnBlockLP,a.btnBlockLM,a.btnBlockAP,a.btnBlockAM,a.btnBlockBP,a.btnBlockBM,a.btnBlockCP,a.btnBlockCM,a.btnBlockDP,a.btnBlockDM]}setBtns(a,b){let c=this,d=b-c.position.y;c.btnBlockAP.visible=c.btnBlockAM.visible=c.btnBlockBP.visible=c.btnBlockBM.visible=1===wLMD,c.btnBlockCP.visible=c.btnBlockCM.visible=c.btnBlockDP.visible=c.btnBlockDM.visible=1===wRMD,c.btnBlockRP.visible=c.btnBlockRM.visible=0===wRMD,c.btnBlockLP.visible=c.btnBlockLM.visible=0===wLMD;let e=c.btns.length;for(var f=0;f<e;f++){let b=c.btns[f],e=(b.position.x-a)**2+(b.position.y-d)**2;e=Math.sqrt(e),b.scale.x=b.scale.y=3>e?2:1,b.position.z=3>e?2:1}}checkClick(){let a=this,b=mousePosition.x,c=mousePosition.y-a.position.y,d=a.btns.length,e="xx";for(var f=0;f<d;f++){let d=a.btns[f],g=(d.position.x-b)**2+(d.position.y-c)**2;g=Math.sqrt(g),2>g&&(e=d.str,f=1e4)}"btnChangeL"===e?wLMD=0===wLMD?1:0:"btnChangeR"===e?wRMD=0===wRMD?1:0:"btnBlockRP"===e?(blocksR.mass++,blocksR.mass=Math.min(blocksR.mass,6)):"btnBlockRM"===e?(blocksR.mass--,blocksR.mass=Math.max(blocksR.mass,1)):"btnBlockLP"===e?(blocksL.mass++,blocksL.mass=Math.min(blocksL.mass,6)):"btnBlockLM"===e?(blocksL.mass--,blocksL.mass=Math.max(blocksL.mass,1)):"btnBlockAP"===e?(blocksA.mass++,blocksA.mass=Math.min(blocksA.mass,6)):"btnBlockAM"===e?(blocksA.mass--,blocksA.mass=Math.max(blocksA.mass,1)):"btnBlockBP"===e?(blocksB.mass++,blocksB.mass=Math.min(blocksB.mass,6)):"btnBlockBM"===e?(blocksB.mass--,blocksB.mass=Math.max(blocksB.mass,1)):"btnBlockCP"===e?(blocksC.mass++,blocksC.mass=Math.min(blocksC.mass,6)):"btnBlockCM"===e?(blocksC.mass--,blocksC.mass=Math.max(blocksC.mass,1)):"btnBlockDP"===e?(blocksD.mass++,blocksD.mass=Math.min(blocksD.mass,6)):"btnBlockDM"===e&&(blocksD.mass--,blocksD.mass=Math.max(blocksD.mass,1))}}var EquationPlane=class extends THREE.Object3D{constructor(){super();let a=this;a.ss=1,a.w=1200,a.h=300,a.canvas=document.createElement("canvas"),a.canvas.width=a.w*a.ss,a.canvas.height=a.h*a.ss,a.stage=new createjs.Stage(a.canvas),a.eTexture=new lib.equationTexture,a.eTexture.scaleX=a.eTexture.scaleY=a.ss,a.stage.addChild(a.eTexture),a.stage.update(),a.mapTexture=new THREE.Texture(a.canvas),a.mapTexture.needsUpdate=!0,a.mapMaterial=new THREE.MeshStandardMaterial({map:a.mapTexture,side:0,roughness:.4,transparent:!0}),a.mesh=new THREE.Mesh(new THREE.PlaneGeometry(a.w,a.h,1,1),a.mapMaterial),a.add(a.mesh)}setEquationPlane(){let a=this;a.eTexture.eqA.visible=a.eTexture.eqB.visible=1===wLMD,a.eTexture.eqC.visible=a.eTexture.eqD.visible=1===wRMD,a.eTexture.eqR.visible=0===wRMD,a.eTexture.eqL.visible=0===wLMD,a.eTexture.eqTL.visible=1===wLMD,a.eTexture.eqTR.visible=1===wRMD,a.eTexture.eqAA.aAB.visible=1===wLMD,a.eTexture.eqAA.aCD.visible=1===wRMD,a.eTexture.eqAA.aL.visible=0===wLMD,a.eTexture.eqAA.aR.visible=0===wRMD,a.eTexture.eqA.tM1.gotoAndStop(blocksA.mass-1),a.eTexture.eqA.tM2.gotoAndStop(blocksA.mass-1),a.eTexture.eqA.tT.gotoAndStop(5),a.eTexture.eqA.tA.gotoAndStop(0),a.eTexture.eqB.tM1.gotoAndStop(blocksB.mass-1),a.eTexture.eqB.tM2.gotoAndStop(blocksB.mass-1),a.eTexture.eqB.tT.gotoAndStop(5),a.eTexture.eqB.tA.gotoAndStop(1),a.eTexture.eqC.tM1.gotoAndStop(blocksC.mass-1),a.eTexture.eqC.tM2.gotoAndStop(blocksC.mass-1),a.eTexture.eqC.tT.gotoAndStop(4),a.eTexture.eqC.tA.gotoAndStop(2),a.eTexture.eqD.tM1.gotoAndStop(blocksD.mass-1),a.eTexture.eqD.tM2.gotoAndStop(blocksD.mass-1),a.eTexture.eqD.tT.gotoAndStop(4),a.eTexture.eqD.tA.gotoAndStop(3),a.eTexture.eqR.tM1.gotoAndStop(blocksR.mass-1),a.eTexture.eqR.tM2.gotoAndStop(blocksR.mass-1),a.eTexture.eqR.tT.gotoAndStop(6),a.eTexture.eqR.tA.gotoAndStop(4),a.eTexture.eqL.tM1.gotoAndStop(blocksL.mass-1),a.eTexture.eqL.tM2.gotoAndStop(blocksL.mass-1),a.eTexture.eqL.tT.gotoAndStop(6),a.eTexture.eqL.tA.gotoAndStop(5),a.eTexture.eqTL.tA.gotoAndStop(5),a.eTexture.eqTR.tA.gotoAndStop(4),a.eTexture.eqAA.aAB.tA1.gotoAndStop(0),a.eTexture.eqAA.aAB.tA2.gotoAndStop(1),a.eTexture.eqAA.aCD.tA1.gotoAndStop(2),a.eTexture.eqAA.aCD.tA2.gotoAndStop(3),a.eTexture.eqAA.aL.tA1.gotoAndStop(5),a.eTexture.eqAA.aR.tA1.gotoAndStop(4),a.stage.update(),a.mapTexture.needsUpdate=!0}};world2D.btn3D.on("mousedown",myMouseDown),world2D.btn3D.on("pressmove",myMouseMove),world2D.btn3D.on("pressup",myMouseUp),world3D.camera.isDraging=!1,world3D.camera.oldMouseX=0,world3D.camera.oldMouseY=0,world2D.slCameraRR.minimum=1,world2D.slCameraRR.maximum=200,world2D.slCameraRR.value=80,world2D.slCameraRR.setLabel("\u9060\u8FD1");function myMouseDown(){world3D.camera.isDraging=!0,world3D.camera.oldMouseX=stage2D.mouseX,world3D.camera.oldMouseY=stage2D.mouseY,the3DBtns.checkClick()}function myMouseMove(){if(world3D.camera.isDraging&&world3D.cameraDragAndRotate){var a=stage2D.mouseX,b=stage2D.mouseY;for(world3D.cameraPhi-=.005*(a-world3D.camera.oldMouseX);world3D.cameraPhi>Math.PI;)world3D.cameraPhi-=2*Math.PI;for(;world3D.cameraPhi<-Math.PI;)world3D.cameraPhi+=2*Math.PI;world3D.cameraTheta-=.005*(b-world3D.camera.oldMouseY),world3D.cameraTheta>.9999*Math.PI&&(world3D.cameraTheta=.9999*Math.PI),world3D.cameraTheta<1e-4*Math.PI&&(world3D.cameraTheta=1e-4*Math.PI),world3D.camera.oldMouseX=a,world3D.camera.oldMouseY=b}}function myMouseUp(){world3D.camera.isDraging=!1}var TEACHER={};TEACHER.ObjPlane=class extends THREE.Object3D{constructor(a,b,c,d,e){super();let f=this;f.mat=new TEACHER.MSMat(c,e),f.geo=new THREE.PlaneGeometry(a||10,b||10,1,1),f.mesh=new THREE.Mesh(f.geo,f.mat),"x"===d?f.mesh.rotation.y=.5*Math.PI:"y"==d&&(f.mesh.rotation.x=-.5*Math.PI),f.add(f.mesh)}},TEACHER.ObjCylinder=class extends THREE.Object3D{constructor(a,b,c,d,e,f){super();let g=this;g.mat=new TEACHER.MSMat(c,f),g.geo=new THREE.CylinderGeometry(a||10,a||10,b||10,32,2,d),g.mesh=new THREE.Mesh(g.geo,g.mat),"x"===e?g.mesh.rotation.z=-.5*Math.PI:"z"==e&&(g.mesh.rotation.x=.5*Math.PI),g.add(g.mesh)}},TEACHER.ObjSphere=class extends THREE.Object3D{constructor(a,b,c){super();let d=this;d.mat=new TEACHER.MSMat(b,c),d.geo=new THREE.SphereGeometry(a||10,32,16),d.mesh=new THREE.Mesh(d.geo,d.mat),d.add(d.mesh)}},TEACHER.ObjBox=class extends THREE.Object3D{constructor(a,b,c,d,e){super();let f=this;f.mat=new TEACHER.MSMat(d,e),f.geo=new THREE.BoxGeometry(a||10,b||10,c||10),f.mesh=new THREE.Mesh(f.geo,f.mat),f.add(f.mesh)}},TEACHER.MSMat=class extends THREE.MeshStandardMaterial{constructor(a,b){super({color:a||16711935,roughness:.4,side:b||0})}},TEACHER.ObjPicPlane=class extends THREE.Object3D{constructor(a,b,c,d,e){super();let f=this,g=new THREE.TextureLoader().load(c);f.mat=new THREE.MeshBasicMaterial({map:g,transparent:!0,side:e||0}),f.geo=new THREE.PlaneGeometry(a,b,1,1),f.mesh=new THREE.Mesh(f.geo,f.mat),"x"===d?f.mesh.rotation.y=.5*Math.PI:"y"==d&&(f.mesh.rotation.x=-.5*Math.PI),f.add(f.mesh)}},TEACHER.ObjPicCylinder=class extends THREE.Object3D{constructor(a,b,c,d,e,f){super();let g=this,h=new THREE.TextureLoader().load(c);g.mat=new THREE.MeshBasicMaterial({map:h,side:f||0}),g.geo=new THREE.CylinderGeometry(a||10,a||10,b||10,32,4,d),g.mesh=new THREE.Mesh(g.geo,g.mat),"x"===e?g.mesh.rotation.z=-.5*Math.PI:"z"===e?(g.mesh.rotation.y=.5*Math.PI,g.mesh.rotation.x=.5*Math.PI):"y"==e&&(g.mesh.rotation.y=.5*Math.PI),g.add(g.mesh)}},TEACHER.ObjPicSphere=class extends THREE.Object3D{constructor(a,b,c){super();let d=this,e=new THREE.TextureLoader().load(b);d.mat=new THREE.MeshBasicMaterial({map:e,side:c||0}),d.geo=new THREE.SphereGeometry(a||10,32,16),d.mesh=new THREE.Mesh(d.geo,d.mat),d.add(d.mesh)}},TEACHER.ObjArrow=class extends THREE.Object3D{constructor(a,b){super();let c=.5,d=new THREE.MeshStandardMaterial({color:b||16711935,roughness:.4}),e=new THREE.ConeGeometry(a||10,40,32);this.ArrowHead=new THREE.Mesh(e,d),this.ArrowHead.position.y=80,e=new THREE.CylinderGeometry((a||10)*c,(a||10)*c,60,32,2),this.ArrowBody=new THREE.Mesh(e,d),this.ArrowBody.position.y=30,this.rotX=new THREE.Object3D,this.rotY=new THREE.Object3D,this.add(this.rotY),this.rotY.add(this.rotX),this.rotX.add(this.ArrowBody),this.rotX.add(this.ArrowHead)}setArrow(a,b,c){let d=a*a+b*b+c*c,e=Math.sqrt(d);0<d?(this.rotX.visible=!0,this.rotX.scale.y=e/100):this.rotX.visible=!1,this.rotX.rotation.x=Math.acos(b/e),this.rotY.rotation.y=Math.atan2(a,c)}},TEACHER.ObjSpring=class extends THREE.Object3D{constructor(a,b,c,d,e){super();let f=a||20;this.L0=f;let g=[],h=d||5,j=b||5;g.push(new THREE.Vector3(0,0,0)),g.push(new THREE.Vector3(0,.05*f,0));for(var k=0;k<=16*h;k++)g.push(new THREE.Vector3(j*Math.cos(2*k*Math.PI/16),f*(.05+.9*k/h/16),j*Math.sin(2*k*Math.PI/16)));g.push(new THREE.Vector3(0,.95*f,0)),g.push(new THREE.Vector3(0,f,0));let l=new THREE.CatmullRomCurve3(g),m=new THREE.MeshStandardMaterial({color:e||16711935,roughness:.4}),n=new THREE.TubeGeometry(l,500,c||.5,12);this.mesh=new THREE.Mesh(n,m),this.rotX=new THREE.Object3D,this.rotY=new THREE.Object3D,this.add(this.rotY),this.rotY.add(this.rotX),this.rotX.add(this.mesh)}setSpring(a,b,c){let d=a*a+b*b+c*c,e=Math.sqrt(d);0<d?(this.rotX.visible=!0,this.rotX.scale.y=e/this.L0):this.rotX.visible=!1,this.rotX.rotation.x=Math.acos(b/e),this.rotY.rotation.y=Math.atan2(a,c)}},TEACHER.Points=class extends THREE.Points{constructor(a,b,c){let d=new THREE.Color(a||16711935),e=new THREE.BufferGeometry,f=[];e.setAttribute("position",new THREE.Float32BufferAttribute(f,3)),e.computeBoundingSphere();let g=new THREE.PointsMaterial({size:b||1,map:TEACHER.Points.createCanvasMaterial("#"+d.getHexString(),64),transparent:!0,depthWrite:!1});super(e,g);let h=this;h.nnMax=c||1e4,h.nnNow=0,h.geometry=e,h.positions=f}static createCanvasMaterial(a,b){var c=document.createElement("canvas");c.width=c.height=b;var d=c.getContext("2d");d.imageSmoothingEnabled=!1;var e=new THREE.Texture(c),f=b/2;return d.beginPath(),d.arc(f,f,b/2-3,0,2*Math.PI,!1),d.closePath(),d.fillStyle=a,d.fill(),e.needsUpdate=!0,e}addPoint(a,b,c){let d=this;d.nnNow<d.nnMax?d.nnNow++:(log("TEACHER.Points \u5230\u9054\u6700\u5927\u9EDE\u6578"),d.positions.shift(),d.positions.shift(),d.positions.shift()),d.positions.push(a,b,c)}clear(){let a=this;a.positions=[],a.nnNow=0,a.update()}setPoint(a,b,c,d){let e=this;a>e.nnMax?log("\u8F38\u5165\u7684n\u503C\u5927\u65BCTEACHER.Points \u6700\u5927\u9EDE\u6578 nnMax"):a>e.nnNow?log("\u8F38\u5165\u7684n\u503C\u5927\u65BCTEACHER.Points \u73FE\u5728\u9EDE\u6578 nnNow"):(e.positions[3*a]=b,e.positions[3*a+1]=c,e.positions[3*a+2]=d)}getPoint(a){let b=this,c=new THREE.Vector3;return a>b.nnMax?log("\u8F38\u5165\u7684n\u503C\u5927\u65BCTEACHER.Points \u6700\u5927\u9EDE\u6578 nnMax"):a>b.nnNow?log("\u8F38\u5165\u7684n\u503C\u5927\u65BCTEACHER.Points \u73FE\u5728\u9EDE\u6578 nnNow"):(c.x=b.positions[3*a],c.y=b.positions[3*a+1],c.z=b.positions[3*a+2]),c}update(){let a=this;a.geometry.setAttribute("position",new THREE.Float32BufferAttribute(a.positions,3)),a.geometry.computeBoundingSphere(),a.geometry.attributes.position.needsUpdate=!0}},TEACHER.Line=class extends THREE.Line2{constructor(a,b,c){let d=c||1e4;var e=new THREE.LineMaterial({color:a||16711935,linewidth:b||1});e.resolution.set(window.innerWidth,window.innerHeight);let f=new THREE.LineGeometry,g=new Float32Array(3*d);f.setPositions(g),super(f,e);let h=this;h.nnMax=d,h.lineWidth=b||1,h.nnNow=0,h.geometry=f,h.positions=g}addPoint(a,b,c){let d=this;if(d.nnNow<d.nnMax)d.nnNow++;else{log("TEACHER.Line \u5230\u9054\u6700\u5927\u9EDE\u6578");for(var e=0;e<d.nnMax-1;e++)d.positions[3*e]=d.positions[3*e+3],d.positions[3*e+1]=d.positions[3*e+4],d.positions[3*e+2]=d.positions[3*e+5]}for(var e=d.nnNow;e<=d.nnMax;e++)d.positions[3*(e-1)]=a,d.positions[3*(e-1)+1]=b,d.positions[3*(e-1)+2]=c}clear(){let a=this;a.positions=new Float32Array(3*a.nnMax);a.nnNow=0,a.update()}setPoint(a,b,c,d){let e=this;a>e.nnMax?log("\u8F38\u5165\u7684n\u503C\u5927\u65BCTEACHER.Line \u6700\u5927\u9EDE\u6578 nnMax"):a>e.nnNow?log("\u8F38\u5165\u7684n\u503C\u5927\u65BCTEACHER.Line \u73FE\u5728\u9EDE\u6578 nnNow"):(e.positions[3*a]=b,e.positions[3*a+1]=c,e.positions[3*a+2]=d)}getPoint(a){let b=this,c=new THREE.Vector3;return a>b.nnMax?log("\u8F38\u5165\u7684n\u503C\u5927\u65BCTEACHER.Line \u6700\u5927\u9EDE\u6578 nnMax"):a>b.nnNow?log("\u8F38\u5165\u7684n\u503C\u5927\u65BCTEACHER.Line \u73FE\u5728\u9EDE\u6578 nnNow"):(c.x=b.positions[3*a],c.y=b.positions[3*a+1],c.z=b.positions[3*a+2]),c}update(){let a=this,b=a.getPoint(a.nnNow-1);for(var c=a.nnNow;c<=a.nnMax;c++)a.positions[3*c]=b.x,a.positions[3*c+1]=b.y,a.positions[3*c+2]=b.z;a.geometry.setPositions(a.positions)}},TEACHER.ObjTextPlane=class extends THREE.Object3D{constructor(a,b,c,d,e,f){super();let g=this,h=Math.round(Math.log2(a/b)),i=$("<canvas>").attr("width",128*Math.pow(2,h)+"").attr("height","128");g.stage=new createjs.Stage(i[0]);let j=new createjs.Container;if(f){let a=new createjs.Shape,b=new THREE.Color(f);a.graphics.c().f("#"+b.getHexString()).dr(0,0,128*Math.pow(2,h),128),j.addChild(a)}g.ctext=new createjs.Text;let k=new THREE.Color(e||16777215);g.ctext.color="#"+k.getHexString(),g.ctext.font="96px Arial",g.ctext.text=c||"",g.ctext.textAlign="center",g.ctext.textBaseline="middle",g.ctext.x=128*Math.pow(2,h)/2,g.ctext.y=64,j.addChild(g.ctext),g.stage.addChild(j),g.stage.update(),g.texture=new THREE.Texture(i[0]);var l=new THREE.MeshBasicMaterial({map:g.texture,transparent:!0}),m=new THREE.PlaneGeometry(a||10,b||10,1,1);g.texture.needsUpdate=!0,g.plane1=new THREE.Mesh(m,l),g.plane2=new THREE.Mesh(m,l),g.plane2.rotation.y=Math.PI;let n=new THREE.Object3D;n.add(g.plane1).add(g.plane2),"x"===d?n.rotation.y=.5*Math.PI:"y"==d&&(n.rotation.x=-.5*Math.PI),g.add(n)}setText(a){let b=this;b.ctext.text=a,b.stage.update(),b.texture.needsUpdate=!0}},TEACHER.ObjGraph=class extends THREE.Object3D{constructor(a,b,c,d,e,f,g){super();let h=this;h.objCon=new THREE.Object3D,h._xMin=a||0,h._xMax=b||10,h._yMin=c||0,h._yMax=d||10,h.divXN=5,h.divYN=4,h.frameMat=new THREE.LineBasicMaterial({color:e||16777215});for(var i=[],j=0;j<=h.divXN;j++)i.push(new THREE.Vector3(-50+20*j,0,0)),i.push(new THREE.Vector3(-50+20*j,50,0));for(var k=0;k<=h.divYN;k++)i.push(new THREE.Vector3(-50,12.5*k,0)),i.push(new THREE.Vector3(50,12.5*k,0));let l=new THREE.BufferGeometry().setFromPoints(i);h.frame=new THREE.LineSegments(l,h.frameMat),h.objCon.add(h.frame),h.labelXMin=new TEACHER.ObjTextPlane(20,5,h._xMin+"","z",e||16777215),h.labelXMin.position.x=-50,h.labelXMin.position.y=-3,h.objCon.add(h.labelXMin),h.labelXMax=new TEACHER.ObjTextPlane(20,5,h._xMax+"","z",e||16777215),h.labelXMax.position.x=50,h.labelXMax.position.y=-3,h.objCon.add(h.labelXMax),h.labelYMin=new TEACHER.ObjTextPlane(20,5,h._yMin+"","z",e||16777215),h.labelYMin.position.x=-53,h.labelYMin.position.y=0,h.objCon.add(h.labelYMin),h.labelYMax=new TEACHER.ObjTextPlane(20,5,h._yMax+"","z",e||16777215),h.labelYMax.position.x=-53,h.labelYMax.position.y=50,h.objCon.add(h.labelYMax),h.labelX=new TEACHER.ObjTextPlane(24,7,"x","z",e||16777215),h.labelX.position.x=60,h.labelX.position.y=4,h.labelX.position.z=1,h.labelY=new TEACHER.ObjTextPlane(24,7,"y","z",e||16777215),h.labelY.position.x=-60,h.labelY.position.y=25,h.labelY.position.z=1,h.labelY.rotation.z=Math.PI/2,h.labelTitle=new TEACHER.ObjTextPlane(40,10,"y-x","z",e||16777215),h.labelTitle.position.y=53,h.labelTitle.position.z=1,h.objCon.add(h.labelX).add(h.labelY).add(h.labelTitle),h._lineColor=f,h._nnMax=g,h.line=new TEACHER.Line(h._lineColor||16776960,2,h._nnMax),h.objCon.add(h.line),h.changeScale(),h.add(h.objCon)}addPoint(a,b){let c=this;c.line.addPoint(a,b,0),c.line.update()}clear(){let a=this;a.line.clear()}changeScale(){let a=this;a.line.scale.x=100/(a._xMax-a._xMin),a.line.scale.y=50/(a._yMax-a._yMin),a.line.position.x=-50-a._xMin*a.line.scale.x,a.line.position.y=-a._yMin*a.line.scale.y,a.labelXMin.setText(a._xMin),a.labelXMax.setText(a._xMax),a.labelYMin.setText(a._yMin),a.labelYMax.setText(a._yMax)}setLabel(a,b,c){let d=this;d.labelTitle.setText(a||"y-x"),d.labelY.setText(b||"y"),d.labelX.setText(c||"x")}get xMin(){return this._xMin}set xMin(a){this._xMin=a,this.changeScale()}get xMax(){return this._xMax}set xMax(a){this._xMax=a,this.changeScale()}get yMin(){return this._yMin}set yMin(a){this._yMin=a,this.changeScale()}get yMax(){return this._yMax}set yMax(a){this._yMax=a,this.changeScale()}};var skyBox=new THREE.Object3D;skyBox.wallU=new TEACHER.ObjPicPlane(1e4,1e4,pics.wallU,"y",1),skyBox.wallD=new TEACHER.ObjPicPlane(1e4,1e4,pics.wallD,"y",0),skyBox.wallS=new TEACHER.ObjPicCylinder(5e3,1e4,pics.wallSide,!0,"y",1),skyBox.wallU.position.y=5e3,skyBox.wallD.position.y=-5e3,skyBox.add(skyBox.wallU).add(skyBox.wallD).add(skyBox.wallS),world3D.scene.add(skyBox);var ground=new TEACHER.ObjPicPlane(100,100,pics.ground,"y");world3D.scene.add(ground);var logo=new TEACHER.ObjPicPlane(100,100/8,pics.logo,"z",2);logo.position.z=-30,logo.position.y=-10,world3D.scene.add(logo);function getMouse3D(a){let b,c=a||"y",d=new THREE.Vector3;"x"===c?b=new THREE.Vector3(1,0,0):"y"===c?b=new THREE.Vector3(0,1,0):"z"===c?b=new THREE.Vector3(0,0,1):log("\u932F\u8AA4!!");let e=new THREE.Vector2;return e.x=2*(world2D.stage.mouseX/1600)-1,e.y=2*-(world2D.stage.mouseY/900)+1,world3D.raycaster.setFromCamera(e,world3D.camera),world3D.raycaster.ray.intersectPlane(new THREE.Plane(b),d),d}TEACHER.CCC=class{constructor(a){this.name=a}},init();