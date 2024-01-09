'use strict';var fps=60,log=console.log,theta0=30*Math.PI/180;const v0=12;var ball,trace,ballsPosition,ballV,ballsVelocity,ballsTweenV,tangentLine,bgPlane,bgVV,vvGuideLine,arV0T,arGTT,arSSS,arV0,arGT,arVV,gg=2,x0=-50,y0=30,ballNN=15,deltaT=1,tweenVRatio=-1,isPlay=!1,tt=0,dt=.1,tEnd=0,titleTime=200;function init(){logo.position.z=-5,logo.position.y=80+100/8/2;let a=new TEACHER.ObjBox(20,y0-2,20,6710886);a.position.x=-60,a.position.y=y0/2-1,scene.add(a),a=new TEACHER.ObjBox(20,2,40,6710886),a.position.x=-60,a.position.y=1,a.position.z=30,scene.add(a),ball=new TEACHER.ObjSphere(2,16711680),ball.position.x=x0,ball.position.y=y0,scene.add(ball),ball.arV=new TEACHER.ObjArrow(1.2,16711680),ball.add(ball.arV),ballV=new TEACHER.ObjSphere(1.5,16711680),ballV.position.x=20,ballV.position.y=40,ballV.position.z=30,scene.add(ballV),trace=new TEACHER.Line(16776960,5,150),scene.add(trace);for(var b=0;150>b;b++)trace.addPoint(b,b,0);trace.update(),arV0T=new TEACHER.ObjArrow(1.2,65535),arGTT=new TEACHER.ObjArrow(1.2,6750054),arSSS=new TEACHER.ObjArrow(1.2,16751001),scene.add(arV0T).add(arGTT).add(arSSS),arV0=new TEACHER.ObjArrow(1.2,65535),arVV=new TEACHER.ObjArrow(1.2,16724787),arGT=new TEACHER.ObjArrow(1.2,6750054),ballV.add(arV0).add(arVV).add(arGT),ballsPosition=[],ballsVelocity=[],ballsTweenV=[];for(var b=0;b<ballNN;b++){let a=new TEACHER.ObjSphere(1.2,16711935);a.mat.color.setHSL(b/ballNN,1,.5),a.arV=new TEACHER.ObjArrow(.9,a.mat.color.getHex()),a.add(a.arV),scene.add(a),ballsPosition.push(a);let c=new TEACHER.ObjSphere(.8,16711935);c.mat.color.setHSL(b/ballNN,1,.5),c.arV=new TEACHER.ObjArrow(.6,c.mat.color.getHex()),c.add(c.arV),ballV.add(c),ballsVelocity.push(c);let d=new TEACHER.ObjSphere(1.2,16711935);d.mat.color.setHSL(b/ballNN,1,.5),d.arV=new TEACHER.ObjArrow(.9,d.mat.color.getHex()),d.add(d.arV),scene.add(d),ballsTweenV.push(d)}tangentLine=new TEACHER.ObjBox(100,1,1,16724787),scene.add(tangentLine),bgVV=new ObjCanvasPlane(20,30,"z","texturePlaneVV",4),scene.add(bgVV),bgVV.position.x=ballV.position.x+5,bgVV.position.y=ballV.position.y-5,bgVV.position.z=ballV.position.z-5,bgPlane=new ObjCanvasPlane(100,80,"z","texturePlane",4),scene.add(bgPlane),bgPlane.position.y=40,bgPlane.position.z=-5,vvGuideLine=new TEACHER.Line(13421772,5,3),vvGuideLine.addPoint(x0,y0,0),vvGuideLine.addPoint(0,16,25),vvGuideLine.addPoint(15,22,25),vvGuideLine.update(),world2D.slTheta0.minimum=0,world2D.slTheta0.maximum=90,world2D.slTheta0.value=30,world2D.slCameraRR.value=160,world2D.slCameraRR.maximum=360,world2D.slCameraRR.minimum=60,world2D.btnShootAndReset.on("click",clickShootAndReset),world2D.btnTweenVV.on("click",clickTweenV),setInterval(tick,1e3/fps)}function tick(){titleTime--,120<titleTime?(world2D.title.x=800,world2D.title.y=400,world2D.title.scaleX=world2D.title.scaleY=2.5):0<titleTime?(world2D.title.x=200*(120-titleTime)/120+800*titleTime/120,world2D.title.y=50*(120-titleTime)/120+400*titleTime/120,world2D.title.scaleX=world2D.title.scaleY=.8*(120-titleTime)/120+2.5*titleTime/120):(world2D.title.x=200,world2D.title.y=50,world2D.title.scaleX=world2D.title.scaleY=.8),0<=tweenVRatio&&(tweenVRatio+=.01,1<tweenVRatio&&(tweenVRatio=-1)),theta0=world2D.slTheta0.value*Math.PI/180,tEnd=(v0*Math.sin(theta0)+Math.sqrt(Math.pow(v0*Math.sin(theta0),2)+4*y0))/gg,dt=.1*(world2D.chSlow.checked?.2:1),isPlay&&(tt+=dt,tt>tEnd&&(tt=tEnd)),ball.position.x=x0+v0*Math.cos(theta0)*tt,ball.position.y=y0+v0*Math.sin(theta0)*tt-1*tt*tt,ball.arV.setArrow(v0*Math.cos(theta0),v0*Math.sin(theta0)-gg*tt,0),vvGuideLine.setPoint(0,ball.position.x,ball.position.y,0),vvGuideLine.update(),vvGuideLine.visible=world2D.chEQV.checked,arV0T.setArrow(v0*Math.cos(theta0)*tt,v0*Math.sin(theta0)*tt,0),arGTT.setArrow(0,-1*tt*tt,0),arSSS.setArrow(v0*Math.cos(theta0)*tt,v0*Math.sin(theta0)*tt-1*tt*tt,0),arV0T.position.x=arSSS.position.x=x0,arV0T.position.y=arSSS.position.y=y0,arGTT.position.x=x0+v0*Math.cos(theta0)*tt,arGTT.position.y=y0+v0*Math.sin(theta0)*tt,arGTT.visible=arV0T.visible=arSSS.visible=world2D.chEQS.checked&&0<tt,arV0.setArrow(v0*Math.cos(theta0),v0*Math.sin(theta0),0),arGT.setArrow(0,-2*tt,0),arVV.setArrow(v0*Math.cos(theta0),v0*Math.sin(theta0)-gg*tt,0),arGT.position.x=v0*Math.cos(theta0),arGT.position.y=v0*Math.sin(theta0),arGT.visible=arV0.visible=arVV.visible=world2D.chEQV.checked&&0<tt;let a=x0+v0*Math.cos(theta0)*tt/2,b=y0+v0*Math.sin(theta0)*tt/2,c=ball.position.x,d=ball.position.y;tangentLine.position.x=.5*(a+c),tangentLine.position.y=.5*(b+d),tangentLine.scale.x=(Math.sqrt(Math.pow(c-a,2)+Math.pow(d-b,2))+20)/100,tangentLine.rotation.z=Math.atan2(v0*Math.sin(theta0)-gg*tt,v0*Math.cos(theta0)),tangentLine.visible=world2D.chTLine.checked&&0<tt;for(var e=0;150>e;e++){let a=.1*e;a<tEnd?trace.setPoint(e,x0+v0*Math.cos(theta0)*a,y0+v0*Math.sin(theta0)*a-1*a*a,0):trace.setPoint(e,x0+v0*Math.cos(theta0)*tEnd,y0+v0*Math.sin(theta0)*tEnd-1*tEnd*tEnd,0)}trace.update();for(var e=0;e<ballNN;e++){let a=ballsPosition[e],b=ballsVelocity[e],c=ballsTweenV[e],d=e*deltaT;a.visible=d<tt&&world2D.chDT.checked,b.visible=d<tt&&world2D.chDT.checked&&world2D.chEQV.checked,c.visible=b.visible&&0<tweenVRatio&&1>tweenVRatio,a.position.x=x0+v0*Math.cos(theta0)*d,a.position.y=y0+v0*Math.sin(theta0)*d-1*d*d,a.arV.setArrow(v0*Math.cos(theta0),v0*Math.sin(theta0)-gg*d,0),b.arV.setArrow(v0*Math.cos(theta0),v0*Math.sin(theta0)-gg*d,0),c.arV.setArrow(v0*Math.cos(theta0),v0*Math.sin(theta0)-gg*d,0),.7>tweenVRatio?(c.position.x=a.position.x*(.7-tweenVRatio)/.7+0*tweenVRatio/.7,c.position.y=a.position.y*(.7-tweenVRatio)/.7+y0*tweenVRatio/.7,c.position.z=a.position.z*(.7-tweenVRatio)/.7+40*tweenVRatio/.7):(c.position.x=ballV.position.x*(tweenVRatio-.7)/.3+0*(1-tweenVRatio)/.3,c.position.y=ballV.position.y*(tweenVRatio-.7)/.3+y0*(1-tweenVRatio)/.3,c.position.z=ballV.position.z*(tweenVRatio-.7)/.3+40*(1-tweenVRatio)/.3)}bgVV.updateCanvasVV(),bgVV.visible=world2D.chEQV.checked,ballV.visible=world2D.chEQV.checked,world3D.cameraTarget.y=y0,world3D.render(),world2D.stage.update()}MyJS.myResize();function clickShootAndReset(){isPlay?(tt=0,isPlay=!1):(tt=0,isPlay=!0)}function clickTweenV(){0>tweenVRatio&&(tweenVRatio=0)}var ObjCanvasPlane=class extends THREE.Object3D{constructor(a,b,c,d,e){super();let f=this,g=e;f.w=a||100,f.h=b||100,f.canvas=document.createElement("canvas"),f.canvas.width=f.w*g,f.canvas.height=f.h*g,f.stage=new createjs.Stage(f.canvas),f.groundTexture=new lib[d],f.groundTexture.scaleX=f.groundTexture.scaleY=g,f.stage.addChild(f.groundTexture),f.stage.update(),f.mapTexture=new THREE.Texture(f.canvas),f.mapTexture.needsUpdate=!0,f.mapMaterial=new THREE.MeshStandardMaterial({map:f.mapTexture,side:0,roughness:.6,transparent:!0}),f.mesh=new THREE.Mesh(new THREE.PlaneGeometry(f.w,f.h,1,1),f.mapMaterial),"y"===c?f.mesh.rotation.x=-Math.PI/2:"x"==c&&(f.mesh.rotation.y=Math.PI/2),f.add(f.mesh)}updateCanvasVV(){let a=this;a.groundTexture.tp.x=-50-ball.position.x,a.groundTexture.tp.y=-80+ball.position.y,a.stage.update(),a.mapTexture.needsUpdate=!0}},TEACHER={};TEACHER.ObjPlane=class extends THREE.Object3D{constructor(a,b,c,d,e){super();let f=this;f.mat=new TEACHER.MSMat(c,e),f.geo=new THREE.PlaneGeometry(a||10,b||10,1,1),f.mesh=new THREE.Mesh(f.geo,f.mat),"x"===d?f.mesh.rotation.y=.5*Math.PI:"y"==d&&(f.mesh.rotation.x=-.5*Math.PI),f.add(f.mesh)}},TEACHER.ObjCylinder=class extends THREE.Object3D{constructor(a,b,c,d,e,f){super();let g=this;g.mat=new TEACHER.MSMat(c,f),g.geo=new THREE.CylinderGeometry(a||10,a||10,b||10,32,2,d),g.mesh=new THREE.Mesh(g.geo,g.mat),"x"===e?g.mesh.rotation.z=-.5*Math.PI:"z"==e&&(g.mesh.rotation.x=.5*Math.PI),g.add(g.mesh)}},TEACHER.ObjSphere=class extends THREE.Object3D{constructor(a,b,c){super();let d=this;d.mat=new TEACHER.MSMat(b,c),d.geo=new THREE.SphereGeometry(a||10,32,16),d.mesh=new THREE.Mesh(d.geo,d.mat),d.add(d.mesh)}},TEACHER.ObjBox=class extends THREE.Object3D{constructor(a,b,c,d,e){super();let f=this;f.mat=new TEACHER.MSMat(d,e),f.geo=new THREE.BoxGeometry(a||10,b||10,c||10),f.mesh=new THREE.Mesh(f.geo,f.mat),f.add(f.mesh)}},TEACHER.MSMat=class extends THREE.MeshStandardMaterial{constructor(a,b){super({color:a||16711935,roughness:.4,side:b||0})}},TEACHER.ObjPicPlane=class extends THREE.Object3D{constructor(a,b,c,d,e){super();let f=this,g=new THREE.TextureLoader().load(c);f.mat=new THREE.MeshBasicMaterial({map:g,transparent:!0,side:e||0}),f.geo=new THREE.PlaneGeometry(a,b,1,1),f.mesh=new THREE.Mesh(f.geo,f.mat),"x"===d?f.mesh.rotation.y=.5*Math.PI:"y"==d&&(f.mesh.rotation.x=-.5*Math.PI),f.add(f.mesh)}},TEACHER.ObjPicCylinder=class extends THREE.Object3D{constructor(a,b,c,d,e,f){super();let g=this,h=new THREE.TextureLoader().load(c);g.mat=new THREE.MeshBasicMaterial({map:h,side:f||0}),g.geo=new THREE.CylinderGeometry(a||10,a||10,b||10,32,4,d),g.mesh=new THREE.Mesh(g.geo,g.mat),"x"===e?g.mesh.rotation.z=-.5*Math.PI:"z"===e?(g.mesh.rotation.y=.5*Math.PI,g.mesh.rotation.x=.5*Math.PI):"y"==e&&(g.mesh.rotation.y=.5*Math.PI),g.add(g.mesh)}},TEACHER.ObjPicSphere=class extends THREE.Object3D{constructor(a,b,c){super();let d=this,e=new THREE.TextureLoader().load(b);d.mat=new THREE.MeshBasicMaterial({map:e,side:c||0}),d.geo=new THREE.SphereGeometry(a||10,32,16),d.mesh=new THREE.Mesh(d.geo,d.mat),d.add(d.mesh)}},TEACHER.ObjArrow=class extends THREE.Object3D{constructor(a,b){super();let c=.5,d=new THREE.MeshStandardMaterial({color:b||16711935,roughness:.4}),e=new THREE.ConeGeometry(a||10,40,32);this.ArrowHead=new THREE.Mesh(e,d),this.ArrowHead.position.y=80,e=new THREE.CylinderGeometry((a||10)*c,(a||10)*c,60,32,2),this.ArrowBody=new THREE.Mesh(e,d),this.ArrowBody.position.y=30,this.rotX=new THREE.Object3D,this.rotY=new THREE.Object3D,this.add(this.rotY),this.rotY.add(this.rotX),this.rotX.add(this.ArrowBody),this.rotX.add(this.ArrowHead)}setArrow(a,b,c){let d=this,e=a*a+b*b+c*c,f=Math.sqrt(e);0<e?(this.rotX.visible=!0,this.rotX.scale.y=f/100,20<f?(d.ArrowHead.scale.y=20/f,d.ArrowHead.position.y=100-400/f,d.ArrowBody.scale.y=(f-8)/(.6*f),d.ArrowBody.position.y=30*(f-8)/(.6*f)):(d.ArrowHead.scale.y=1,d.ArrowHead.position.y=80,d.ArrowBody.scale.y=1,d.ArrowBody.position.y=30)):this.rotX.visible=!1,this.rotX.rotation.x=Math.acos(b/f),this.rotY.rotation.y=Math.atan2(a,c)}},TEACHER.ObjSpring=class extends THREE.Object3D{constructor(a,b,c,d,e){super();let f=a||20;this.L0=f;let g=[],h=d||5,j=b||5;g.push(new THREE.Vector3(0,0,0)),g.push(new THREE.Vector3(0,.05*f,0));for(var k=0;k<=16*h;k++)g.push(new THREE.Vector3(j*Math.cos(2*k*Math.PI/16),f*(.05+.9*k/h/16),j*Math.sin(2*k*Math.PI/16)));g.push(new THREE.Vector3(0,.95*f,0)),g.push(new THREE.Vector3(0,f,0));let l=new THREE.CatmullRomCurve3(g),m=new THREE.MeshStandardMaterial({color:e||16711935,roughness:.4}),n=new THREE.TubeGeometry(l,500,c||.5,12);this.mesh=new THREE.Mesh(n,m),this.rotX=new THREE.Object3D,this.rotY=new THREE.Object3D,this.add(this.rotY),this.rotY.add(this.rotX),this.rotX.add(this.mesh)}setSpring(a,b,c){let d=a*a+b*b+c*c,e=Math.sqrt(d);0<d?(this.rotX.visible=!0,this.rotX.scale.y=e/this.L0):this.rotX.visible=!1,this.rotX.rotation.x=Math.acos(b/e),this.rotY.rotation.y=Math.atan2(a,c)}},TEACHER.Points=class extends THREE.Points{constructor(a,b,c){let d=new THREE.Color(a||16711935),e=new THREE.BufferGeometry,f=[];e.setAttribute("position",new THREE.Float32BufferAttribute(f,3)),e.computeBoundingSphere();let g=new THREE.PointsMaterial({size:b||1,map:TEACHER.Points.createCanvasMaterial("#"+d.getHexString(),64),transparent:!0,depthWrite:!1});super(e,g);let h=this;h.nnMax=c||1e4,h.nnNow=0,h.geometry=e,h.positions=f}static createCanvasMaterial(a,b){var c=document.createElement("canvas");c.width=c.height=b;var d=c.getContext("2d");d.imageSmoothingEnabled=!1;var e=new THREE.Texture(c),f=b/2;return d.beginPath(),d.arc(f,f,b/2-3,0,2*Math.PI,!1),d.closePath(),d.fillStyle=a,d.fill(),e.needsUpdate=!0,e}addPoint(a,b,c){let d=this;d.nnNow<d.nnMax?d.nnNow++:(log("TEACHER.Points \u5230\u9054\u6700\u5927\u9EDE\u6578"),d.positions.shift(),d.positions.shift(),d.positions.shift()),d.positions.push(a,b,c)}clear(){let a=this;a.positions=[],a.nnNow=0,a.update()}setPoint(a,b,c,d){let e=this;a>e.nnMax?log("\u8F38\u5165\u7684n\u503C\u5927\u65BCTEACHER.Points \u6700\u5927\u9EDE\u6578 nnMax"):a>e.nnNow?log("\u8F38\u5165\u7684n\u503C\u5927\u65BCTEACHER.Points \u73FE\u5728\u9EDE\u6578 nnNow"):(e.positions[3*a]=b,e.positions[3*a+1]=c,e.positions[3*a+2]=d)}getPoint(a){let b=this,c=new THREE.Vector3;return a>b.nnMax?log("\u8F38\u5165\u7684n\u503C\u5927\u65BCTEACHER.Points \u6700\u5927\u9EDE\u6578 nnMax"):a>b.nnNow?log("\u8F38\u5165\u7684n\u503C\u5927\u65BCTEACHER.Points \u73FE\u5728\u9EDE\u6578 nnNow"):(c.x=b.positions[3*a],c.y=b.positions[3*a+1],c.z=b.positions[3*a+2]),c}update(){let a=this;a.geometry.setAttribute("position",new THREE.Float32BufferAttribute(a.positions,3)),a.geometry.computeBoundingSphere(),a.geometry.attributes.position.needsUpdate=!0}},TEACHER.Line=class extends THREE.Line2{constructor(a,b,c){let d=c||1e4;var e=new THREE.LineMaterial({color:a||16711935,linewidth:b||1});e.resolution.set(window.innerWidth,window.innerHeight);let f=new THREE.LineGeometry,g=new Float32Array(3*d);f.setPositions(g),super(f,e);let h=this;h.nnMax=d,h.lineWidth=b||1,h.nnNow=0,h.geometry=f,h.positions=g}addPoint(a,b,c){let d=this;if(d.nnNow<d.nnMax)d.nnNow++;else{log("TEACHER.Line \u5230\u9054\u6700\u5927\u9EDE\u6578");for(var e=0;e<d.nnMax-1;e++)d.positions[3*e]=d.positions[3*e+3],d.positions[3*e+1]=d.positions[3*e+4],d.positions[3*e+2]=d.positions[3*e+5]}for(var e=d.nnNow;e<=d.nnMax;e++)d.positions[3*(e-1)]=a,d.positions[3*(e-1)+1]=b,d.positions[3*(e-1)+2]=c}clear(){let a=this;a.positions=new Float32Array(3*a.nnMax);a.nnNow=0,a.update()}setPoint(a,b,c,d){let e=this;a>e.nnMax?log("\u8F38\u5165\u7684n\u503C\u5927\u65BCTEACHER.Line \u6700\u5927\u9EDE\u6578 nnMax"):a>e.nnNow?log("\u8F38\u5165\u7684n\u503C\u5927\u65BCTEACHER.Line \u73FE\u5728\u9EDE\u6578 nnNow"):(e.positions[3*a]=b,e.positions[3*a+1]=c,e.positions[3*a+2]=d)}getPoint(a){let b=this,c=new THREE.Vector3;return a>b.nnMax?log("\u8F38\u5165\u7684n\u503C\u5927\u65BCTEACHER.Line \u6700\u5927\u9EDE\u6578 nnMax"):a>b.nnNow?log("\u8F38\u5165\u7684n\u503C\u5927\u65BCTEACHER.Line \u73FE\u5728\u9EDE\u6578 nnNow"):(c.x=b.positions[3*a],c.y=b.positions[3*a+1],c.z=b.positions[3*a+2]),c}update(){let a=this,b=a.getPoint(a.nnNow-1);for(var c=a.nnNow;c<=a.nnMax;c++)a.positions[3*c]=b.x,a.positions[3*c+1]=b.y,a.positions[3*c+2]=b.z;a.geometry.setPositions(a.positions)}},TEACHER.ObjTextPlane=class extends THREE.Object3D{constructor(a,b,c,d,e,f){super();let g=this,h=Math.round(Math.log2(a/b)),i=$("<canvas>").attr("width",128*Math.pow(2,h)+"").attr("height","128");g.stage=new createjs.Stage(i[0]);let j=new createjs.Container;if(f){let a=new createjs.Shape,b=new THREE.Color(f);a.graphics.c().f("#"+b.getHexString()).dr(0,0,128*Math.pow(2,h),128),j.addChild(a)}g.ctext=new createjs.Text;let k=new THREE.Color(e||16777215);g.ctext.color="#"+k.getHexString(),g.ctext.font="96px Arial",g.ctext.text=c||"",g.ctext.textAlign="center",g.ctext.textBaseline="middle",g.ctext.x=128*Math.pow(2,h)/2,g.ctext.y=64,j.addChild(g.ctext),g.stage.addChild(j),g.stage.update(),g.texture=new THREE.Texture(i[0]);var l=new THREE.MeshBasicMaterial({map:g.texture,transparent:!0}),m=new THREE.PlaneGeometry(a||10,b||10,1,1);g.texture.needsUpdate=!0,g.plane1=new THREE.Mesh(m,l),g.plane2=new THREE.Mesh(m,l),g.plane2.rotation.y=Math.PI;let n=new THREE.Object3D;n.add(g.plane1).add(g.plane2),"x"===d?n.rotation.y=.5*Math.PI:"y"==d&&(n.rotation.x=-.5*Math.PI),g.add(n)}setText(a){let b=this;b.ctext.text=a,b.stage.update(),b.texture.needsUpdate=!0}},TEACHER.ObjGraph=class extends THREE.Object3D{constructor(a,b,c,d,e,f,g){super();let h=this;h.objCon=new THREE.Object3D,h._xMin=a||0,h._xMax=b||10,h._yMin=c||0,h._yMax=d||10,h.divXN=5,h.divYN=4,h.frameMat=new THREE.LineBasicMaterial({color:e||16777215});for(var i=[],j=0;j<=h.divXN;j++)i.push(new THREE.Vector3(-50+20*j,0,0)),i.push(new THREE.Vector3(-50+20*j,50,0));for(var k=0;k<=h.divYN;k++)i.push(new THREE.Vector3(-50,12.5*k,0)),i.push(new THREE.Vector3(50,12.5*k,0));let l=new THREE.BufferGeometry().setFromPoints(i);h.frame=new THREE.LineSegments(l,h.frameMat),h.objCon.add(h.frame),h.labelXMin=new TEACHER.ObjTextPlane(20,5,h._xMin+"","z",e||16777215),h.labelXMin.position.x=-50,h.labelXMin.position.y=-3,h.objCon.add(h.labelXMin),h.labelXMax=new TEACHER.ObjTextPlane(20,5,h._xMax+"","z",e||16777215),h.labelXMax.position.x=50,h.labelXMax.position.y=-3,h.objCon.add(h.labelXMax),h.labelYMin=new TEACHER.ObjTextPlane(20,5,h._yMin+"","z",e||16777215),h.labelYMin.position.x=-53,h.labelYMin.position.y=0,h.objCon.add(h.labelYMin),h.labelYMax=new TEACHER.ObjTextPlane(20,5,h._yMax+"","z",e||16777215),h.labelYMax.position.x=-53,h.labelYMax.position.y=50,h.objCon.add(h.labelYMax),h.labelX=new TEACHER.ObjTextPlane(24,7,"x","z",e||16777215),h.labelX.position.x=60,h.labelX.position.y=4,h.labelX.position.z=1,h.labelY=new TEACHER.ObjTextPlane(24,7,"y","z",e||16777215),h.labelY.position.x=-60,h.labelY.position.y=25,h.labelY.position.z=1,h.labelY.rotation.z=Math.PI/2,h.labelTitle=new TEACHER.ObjTextPlane(40,10,"y-x","z",e||16777215),h.labelTitle.position.y=53,h.labelTitle.position.z=1,h.objCon.add(h.labelX).add(h.labelY).add(h.labelTitle),h._lineColor=f,h._nnMax=g,h.line=new TEACHER.Line(h._lineColor||16776960,2,h._nnMax),h.objCon.add(h.line),h.changeScale(),h.add(h.objCon)}addPoint(a,b){let c=this;c.line.addPoint(a,b,0),c.line.update()}clear(){let a=this;a.line.clear()}changeScale(){let a=this;a.line.scale.x=100/(a._xMax-a._xMin),a.line.scale.y=50/(a._yMax-a._yMin),a.line.position.x=-50-a._xMin*a.line.scale.x,a.line.position.y=-a._yMin*a.line.scale.y,a.labelXMin.setText(a._xMin),a.labelXMax.setText(a._xMax),a.labelYMin.setText(a._yMin),a.labelYMax.setText(a._yMax)}setLabel(a,b,c){let d=this;d.labelTitle.setText(a||"y-x"),d.labelY.setText(b||"y"),d.labelX.setText(c||"x")}get xMin(){return this._xMin}set xMin(a){this._xMin=a,this.changeScale()}get xMax(){return this._xMax}set xMax(a){this._xMax=a,this.changeScale()}get yMin(){return this._yMin}set yMin(a){this._yMin=a,this.changeScale()}get yMax(){return this._yMax}set yMax(a){this._yMax=a,this.changeScale()}};var skyBox=new THREE.Object3D;skyBox.wallU=new TEACHER.ObjPicPlane(1e4,1e4,pics.wallU,"y",1),skyBox.wallD=new TEACHER.ObjPicPlane(1e4,1e4,pics.wallD,"y",0),skyBox.wallS=new TEACHER.ObjPicCylinder(5e3,1e4,pics.wallSide,!0,"y",1),skyBox.wallU.position.y=5e3,skyBox.wallD.position.y=-5e3,skyBox.add(skyBox.wallU).add(skyBox.wallD).add(skyBox.wallS),world3D.scene.add(skyBox);var ground=new TEACHER.ObjPicPlane(100,100,pics.ground,"y");world3D.scene.add(ground);var logo=new TEACHER.ObjPicPlane(100,100/8,pics.logo,"z",2);logo.position.z=-50,logo.position.y=100/8/2,world3D.scene.add(logo);function getMouse3D(a){let b,c=a||"y",d=new THREE.Vector3;"x"===c?b=new THREE.Vector3(1,0,0):"y"===c?b=new THREE.Vector3(0,1,0):"z"===c?b=new THREE.Vector3(0,0,1):log("\u932F\u8AA4!!");let e=new THREE.Vector2;return e.x=2*(world2D.stage.mouseX/1600)-1,e.y=2*-(world2D.stage.mouseY/900)+1,world3D.raycaster.setFromCamera(e,world3D.camera),world3D.raycaster.ray.intersectPlane(new THREE.Plane(b),d),d}TEACHER.CCC=class{constructor(a){this.name=a}},init();