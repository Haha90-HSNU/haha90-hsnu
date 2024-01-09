'use strict';var theOscillatin,theCharYT,fps=60,log=console.log,gameMD=0,kk=1,mm=1,bb=.1,bbOld=0,ballR=10,L0=40,AA=30,yy=0,vv=0,tt=0,dt=.1,dtnn=10;function init(){world2D.slCameraRR.value=120,world3D.cameraTarget.y=10,world3D.cameraTarget.x=10,initTheOscillation(),initCharYT(),yy=AA,ground.visible=!1,world2D.sl01.minimum=-4,world2D.sl01.maximum=4,world2D.sl01.value=1,world2D.btnPlay.on("click",clickGameMD),world2D.btnStop.on("click",clickGameMD),setInterval(tick,1e3/fps)}function tick(){0===gameMD?tt=0:tt+=dt,world2D.btnPlay.visible=0===gameMD,world2D.btnStop.visible=1===gameMD,.15>Math.abs(world2D.sl01.value-1)&&(world2D.sl01.value=1),bb=Math.pow(2,world2D.sl01.value);var a=Math.sqrt(kk/mm),b=bb/2/mm;if(world2D.sl01.valueText.text=Math.round(100*(b/a))/100,b>a){var c=-b+Math.sqrt(b*b-a*a),d=-b-Math.sqrt(b*b-a*a);yy=-d/(c-d)*AA*Math.exp(c*tt)+c/(c-d)*AA*Math.exp(d*tt)}else if(b<a){var e=Math.sqrt(a*a-b*b);yy=AA*Math.exp(-b*tt)*Math.cos(e*tt)}else yy=AA*Math.exp(-b*tt);let f=theOscillatin;f.ball.position.y=yy-.5*ballR,f.sp.position.y=yy,f.sp.setSpring(0,L0-yy,0),f.damping0.position.y=.5*(L0+yy),f.damping0.scale.y=(L0-yy)/L0,f.damping1.position.y=.5*(L0+yy),f.damping1.scale.x=f.damping1.scale.z=6*Math.pow(bb,.4)+1,f.damping1.scale.y=3*((Math.pow(bb,.4)+.02)/L0);var g=theCharYT;g.stx=1.5,g.six=.2,bbOld!=bb&&(bbOld=bb,resetCurve()),g.ball.position.x=tt*g.stx,g.ball.position.y=yy,world3D.render(),world2D.stage.update()}MyJS.myResize();function initTheOscillation(){theOscillatin=new THREE.Object3D;let a=theOscillatin;a.position.x=-40,scene.add(a),a.wall=new TEACHER.ObjBox(1.5*ballR,2,10,10066329),a.wall.position.y=L0+1;a.wall.position.x=-.25*ballR,a.ball=new TEACHER.ObjBox(1.5*ballR,ballR,ballR,65535),a.ball.position.y=5,a.ball.position.x=-.25*ballR,a.sp=new TEACHER.ObjSpring(L0,.3*ballR,.3,8,16776960),a.damping0=new TEACHER.ObjCylinder(.2,L0,16738047),a.damping1=new TEACHER.ObjCylinder(.2,L0,16738047),a.damping0.position.x=a.damping1.position.x=-.75*ballR,a.add(a.sp).add(a.wall).add(a.ball).add(a.damping0).add(a.damping1)}function initCharYT(){theCharYT=new THREE.Object3D;let a=theCharYT;scene.add(a),a.position.x=-30,a.arrowY=new TEACHER.ObjBox(.5,2.2*AA,.5,16751001),a.arrowT=new TEACHER.ObjBox(80,.5,.5,16751001),a.arrowT.position.x=40,a.ball=new TEACHER.ObjSphere(2,16776960),a.curve=new TEACHER.Line(16776960,2,1e3);for(var b=0;1e3>b;b++)a.curve.addPoint(100*b/1e3,10,0);a.curve.update(),a.add(a.arrowY).add(a.arrowT).add(a.ball).add(a.curve)}function resetCurve(){var a=theCharYT,b=Math.sqrt(kk/mm),c=bb/2/mm;if(c>b)for(var d=-c+Math.sqrt(c*c-b*b),e=-c-Math.sqrt(c*c-b*b),f=0;1e3>f;f++)a.curve.setPoint(f,a.six*f,-e/(d-e)*AA*Math.exp(d*a.six/a.stx*f)+d/(d-e)*AA*Math.exp(e*a.six/a.stx*f),0);else if(c<b)for(var g=Math.sqrt(b*b-c*c),f=0;1e3>f;f++)a.curve.setPoint(f,a.six*f,AA*Math.exp(-c*a.six/a.stx*f)*Math.cos(g*a.six/a.stx*f),0);else{yy=AA*Math.exp(-c*tt);for(var f=0;1e3>f;f++)a.curve.setPoint(f,a.six*f,AA*Math.exp(-c*a.six/a.stx*f),0)}a.curve.update()}function clickGameMD(a){var b=a.target.name;"btnPlay"===b?gameMD=1:"btnStop"===b&&(gameMD=0)}var TEACHER={};TEACHER.ObjPlane=function(a,b,c,d,e){let f=this;f.mat=new TEACHER.MSMat(c,e),f.geo=new THREE.PlaneGeometry(a||10,b||10,1,1),f.mesh=new THREE.Mesh(f.geo,f.mat),"x"===d?f.mesh.rotation.y=.5*Math.PI:"y"==d&&(f.mesh.rotation.x=-.5*Math.PI),THREE.Object3D.call(this,f.geo,f.mat),f.add(f.mesh)},TEACHER.ObjPlane.prototype=Object.create(THREE.Object3D.prototype),TEACHER.ObjPlane.prototype.constructor=TEACHER.ObjPlane,TEACHER.ObjCylinder=function(a,b,c,d,e,f){let g=this;g.mat=new TEACHER.MSMat(c,f),g.geo=new THREE.CylinderGeometry(a||10,a||10,b||10,32,2,d),g.mesh=new THREE.Mesh(g.geo,g.mat),"x"===e?g.mesh.rotation.z=-.5*Math.PI:"z"==e&&(g.mesh.rotation.x=.5*Math.PI),THREE.Object3D.call(this,g.geo,g.mat),g.add(g.mesh)},TEACHER.ObjCylinder.prototype=Object.create(THREE.Object3D.prototype),TEACHER.ObjCylinder.prototype.constructor=TEACHER.ObjCylinder,TEACHER.ObjSphere=function(a,b,c){let d=this;d.mat=new TEACHER.MSMat(b,c),d.geo=new THREE.SphereGeometry(a||10,32,16),d.mesh=new THREE.Mesh(d.geo,d.mat),THREE.Object3D.call(this,d.geo,d.mat),d.add(d.mesh)},TEACHER.ObjSphere.prototype=Object.create(THREE.Object3D.prototype),TEACHER.ObjSphere.prototype.constructor=TEACHER.ObjSphere,TEACHER.ObjBox=function(a,b,c,d,e){let f=this;f.mat=new TEACHER.MSMat(d,e),f.geo=new THREE.BoxGeometry(a||10,b||10,c||10),f.mesh=new THREE.Mesh(f.geo,f.mat),THREE.Object3D.call(this,f.geo,f.mat),f.add(f.mesh)},TEACHER.ObjBox.prototype=Object.create(THREE.Object3D.prototype),TEACHER.ObjBox.prototype.constructor=TEACHER.ObjBox,TEACHER.MSMat=function(a,b){THREE.MeshStandardMaterial.call(this,{color:a||16711935,roughness:.4,side:b||0})},TEACHER.MSMat.prototype=Object.create(THREE.MeshStandardMaterial.prototype),TEACHER.MSMat.prototype.constructor=TEACHER.MSMat,TEACHER.ObjPicPlane=function(a,b,c,d,e){let f=this,g=new THREE.TextureLoader().load(c);f.mat=new THREE.MeshBasicMaterial({map:g,transparent:!0,side:e||0}),f.geo=new THREE.PlaneGeometry(a,b,1,1),f.mesh=new THREE.Mesh(f.geo,f.mat),"x"===d?f.mesh.rotation.y=.5*Math.PI:"y"==d&&(f.mesh.rotation.x=-.5*Math.PI),THREE.Object3D.call(this),f.add(f.mesh)},TEACHER.ObjPicPlane.prototype=Object.create(THREE.Object3D.prototype),TEACHER.ObjPicPlane.prototype.constructor=TEACHER.ObjPicPlane,TEACHER.ObjPicCylinder=function(a,b,c,d,e,f){let g=this,h=new THREE.TextureLoader().load(c);g.mat=new THREE.MeshBasicMaterial({map:h,side:f||0}),g.geo=new THREE.CylinderGeometry(a||10,a||10,b||10,32,4,d),g.mesh=new THREE.Mesh(g.geo,g.mat),"x"===e?g.mesh.rotation.z=-.5*Math.PI:"z"===e?(g.mesh.rotation.y=.5*Math.PI,g.mesh.rotation.x=.5*Math.PI):"y"==e&&(g.mesh.rotation.y=.5*Math.PI),THREE.Object3D.call(this,g.geo,g.mat),g.add(g.mesh)},TEACHER.ObjPicCylinder.prototype=Object.create(THREE.Object3D.prototype),TEACHER.ObjPicCylinder.prototype.constructor=TEACHER.ObjPicCylinder,TEACHER.ObjPicSphere=function(a,b,c){let d=this,e=new THREE.TextureLoader().load(b);d.mat=new THREE.MeshBasicMaterial({map:e,side:c||0}),d.geo=new THREE.SphereGeometry(a||10,32,16),d.mesh=new THREE.Mesh(d.geo,d.mat),THREE.Object3D.call(this,d.geo,d.mat),d.add(d.mesh)},TEACHER.ObjPicSphere.prototype=Object.create(THREE.Object3D.prototype),TEACHER.ObjPicSphere.prototype.constructor=TEACHER.ObjPicSphere,TEACHER.ObjArrow=function(a,b){let c=.5,d=new THREE.MeshStandardMaterial({color:b||16711935,roughness:.4}),e=new THREE.ConeGeometry(a||10,40,32);this.ArrowHead=new THREE.Mesh(e,d),this.ArrowHead.position.y=80,e=new THREE.CylinderGeometry((a||10)*c,(a||10)*c,60,32,2),this.ArrowBody=new THREE.Mesh(e,d),this.ArrowBody.position.y=30,THREE.Object3D.call(this),this.rotX=new THREE.Object3D,this.rotY=new THREE.Object3D,this.add(this.rotY),this.rotY.add(this.rotX),this.rotX.add(this.ArrowBody),this.rotX.add(this.ArrowHead)},TEACHER.ObjArrow.prototype=Object.create(THREE.Object3D.prototype),TEACHER.ObjArrow.prototype.constructor=TEACHER.ObjArrow,TEACHER.ObjArrow.prototype.setArrow=function(a,b,c){let d=a*a+b*b+c*c,e=Math.sqrt(d);0<d?(this.rotX.visible=!0,this.rotX.scale.y=e/100):this.rotX.visible=!1,this.rotX.rotation.x=Math.acos(b/e),this.rotY.rotation.y=Math.atan2(a,c)},TEACHER.ObjSpring=function(a,b,c,d,e){let f=a||20;this.L0=f;let g=[],h=d||5,j=b||5;g.push(new THREE.Vector3(0,0,0)),g.push(new THREE.Vector3(0,.05*f,0));for(var k=0;k<=16*h;k++)g.push(new THREE.Vector3(j*Math.cos(2*k*Math.PI/16),f*(.05+.9*k/h/16),j*Math.sin(2*k*Math.PI/16)));g.push(new THREE.Vector3(0,.95*f,0)),g.push(new THREE.Vector3(0,f,0));let l=new THREE.CatmullRomCurve3(g),m=new THREE.MeshStandardMaterial({color:e||16711935,roughness:.4}),n=new THREE.TubeGeometry(l,500,c||.5,12);this.mesh=new THREE.Mesh(n,m),THREE.Object3D.call(this),this.rotX=new THREE.Object3D,this.rotY=new THREE.Object3D,this.add(this.rotY),this.rotY.add(this.rotX),this.rotX.add(this.mesh)},TEACHER.ObjSpring.prototype=Object.create(THREE.Object3D.prototype),TEACHER.ObjSpring.prototype.constructor=TEACHER.ObjSpring,TEACHER.ObjSpring.prototype.setSpring=function(a,b,c){let d=a*a+b*b+c*c,e=Math.sqrt(d);0<d?(this.rotX.visible=!0,this.rotX.scale.y=e/this.L0):this.rotX.visible=!1,this.rotX.rotation.x=Math.acos(b/e),this.rotY.rotation.y=Math.atan2(a,c)},TEACHER.Points=function(a,b,c){let d=this,e=new THREE.Color(a||16711935);d.nnMax=c||1e4,d.nnNow=0,d.geometry=new THREE.BufferGeometry,d.positions=[],d.geometry.setAttribute("position",new THREE.Float32BufferAttribute(d.positions,3)),d.geometry.computeBoundingSphere();let f=new THREE.PointsMaterial({size:b||1,map:d.createCanvasMaterial("#"+e.getHexString(),64),transparent:!0,depthWrite:!1});THREE.Points.call(this,d.geometry,f)},TEACHER.Points.prototype=Object.create(THREE.Points.prototype),TEACHER.Points.prototype.constructor=TEACHER.Points,TEACHER.Points.prototype.createCanvasMaterial=function(a,b){var c=document.createElement("canvas");c.width=c.height=b;var d=c.getContext("2d");d.imageSmoothingEnabled=!1;var e=new THREE.Texture(c),f=b/2;return d.beginPath(),d.arc(f,f,b/2-3,0,2*Math.PI,!1),d.closePath(),d.fillStyle=a,d.fill(),e.needsUpdate=!0,e},TEACHER.Points.prototype.addPoint=function(a,b,c){let d=this;d.nnNow<d.nnMax?d.nnNow++:(log("TEACHER.Points \u5230\u9054\u6700\u5927\u9EDE\u6578"),d.positions.shift(),d.positions.shift(),d.positions.shift()),d.positions.push(a,b,c)},TEACHER.Points.prototype.clear=function(){let a=this;a.positions=[],a.nnNow=0,a.update()},TEACHER.Points.prototype.setPoint=function(a,b,c,d){let e=this;a>e.nnMax?log("\u8F38\u5165\u7684n\u503C\u5927\u65BCTEACHER.Points \u6700\u5927\u9EDE\u6578 nnMax"):a>e.nnNow?log("\u8F38\u5165\u7684n\u503C\u5927\u65BCTEACHER.Points \u73FE\u5728\u9EDE\u6578 nnNow"):(e.positions[3*a]=b,e.positions[3*a+1]=c,e.positions[3*a+2]=d)},TEACHER.Points.prototype.getPoint=function(a){let b=this,c=new THREE.Vector3;return a>b.nnMax?log("\u8F38\u5165\u7684n\u503C\u5927\u65BCTEACHER.Points \u6700\u5927\u9EDE\u6578 nnMax"):a>b.nnNow?log("\u8F38\u5165\u7684n\u503C\u5927\u65BCTEACHER.Points \u73FE\u5728\u9EDE\u6578 nnNow"):(c.x=b.positions[3*a],c.y=b.positions[3*a+1],c.z=b.positions[3*a+2]),c},TEACHER.Points.prototype.update=function(){let a=this;a.geometry.setAttribute("position",new THREE.Float32BufferAttribute(a.positions,3)),a.geometry.computeBoundingSphere(),a.geometry.attributes.position.needsUpdate=!0},TEACHER.Line=function(a,b,c){let d=this;d.nnMax=c||1e4,d.lineWidth=b||1,d.nnNow=0;var e=new THREE.LineMaterial({color:a||16711935,linewidth:b||1});e.resolution.set(window.innerWidth,window.innerHeight),d.geometry=new THREE.LineGeometry,d.positions=new Float32Array(3*d.nnMax),d.geometry.setPositions(d.positions),THREE.Line2.call(this,d.geometry,e)},TEACHER.Line.prototype=Object.create(THREE.Line2.prototype),TEACHER.Line.prototype.constructor=TEACHER.Line,TEACHER.Line.prototype.addPoint=function(a,b,c){let d=this;if(d.nnNow<d.nnMax)d.nnNow++;else{log("TEACHER.Line \u5230\u9054\u6700\u5927\u9EDE\u6578");for(var e=0;e<d.nnMax-1;e++)d.positions[3*e]=d.positions[3*e+3],d.positions[3*e+1]=d.positions[3*e+4],d.positions[3*e+2]=d.positions[3*e+5]}for(var e=d.nnNow;e<=d.nnMax;e++)d.positions[3*(e-1)]=a,d.positions[3*(e-1)+1]=b,d.positions[3*(e-1)+2]=c},TEACHER.Line.prototype.clear=function(){let a=this;a.positions=new Float32Array(3*a.nnMax);a.nnNow=0},TEACHER.Line.prototype.setPoint=function(a,b,c,d){let e=this;a>e.nnMax?log("\u8F38\u5165\u7684n\u503C\u5927\u65BCTEACHER.Line \u6700\u5927\u9EDE\u6578 nnMax"):a>e.nnNow?log("\u8F38\u5165\u7684n\u503C\u5927\u65BCTEACHER.Line \u73FE\u5728\u9EDE\u6578 nnNow"):(e.positions[3*a]=b,e.positions[3*a+1]=c,e.positions[3*a+2]=d)},TEACHER.Line.prototype.getPoint=function(a){let b=this,c=new THREE.Vector3;return a>b.nnMax?log("\u8F38\u5165\u7684n\u503C\u5927\u65BCTEACHER.Line \u6700\u5927\u9EDE\u6578 nnMax"):a>b.nnNow?log("\u8F38\u5165\u7684n\u503C\u5927\u65BCTEACHER.Line \u73FE\u5728\u9EDE\u6578 nnNow"):(c.x=b.positions[3*a],c.y=b.positions[3*a+1],c.z=b.positions[3*a+2]),c},TEACHER.Line.prototype.update=function(){let a=this,b=a.getPoint(a.nnNow-1);for(var c=a.nnNow;c<=a.nnMax;c++)a.positions[3*c]=b.x,a.positions[3*c+1]=b.y,a.positions[3*c+2]=b.z;a.geometry.setPositions(a.positions)},TEACHER.ObjTextPlane=function(a,b,c,d,e,f){let g=this,h=Math.round(Math.log2(a/b)),i=$("<canvas>").attr("width",128*Math.pow(2,h)+"").attr("height","128");g.stage=new createjs.Stage(i[0]);let j=new createjs.Container;if(f){let a=new createjs.Shape,b=new THREE.Color(f);a.graphics.c().f("#"+b.getHexString()).dr(0,0,128*Math.pow(2,h),128),j.addChild(a)}g.ctext=new createjs.Text;let k=new THREE.Color(e||16777215);g.ctext.color="#"+k.getHexString(),g.ctext.font="96px Arial",g.ctext.text=c||"",g.ctext.textAlign="center",g.ctext.textBaseline="middle",g.ctext.x=128*Math.pow(2,h)/2,g.ctext.y=64,j.addChild(g.ctext),g.stage.addChild(j),g.stage.update(),g.texture=new THREE.Texture(i[0]);var l=new THREE.MeshBasicMaterial({map:g.texture,transparent:!0}),m=new THREE.PlaneGeometry(a||10,b||10,1,1);g.texture.needsUpdate=!0,g.plane1=new THREE.Mesh(m,l),g.plane2=new THREE.Mesh(m,l),g.plane2.rotation.y=Math.PI;let n=new THREE.Object3D;n.add(g.plane1).add(g.plane2),"x"===d?n.rotation.y=.5*Math.PI:"y"==d&&(n.rotation.x=-.5*Math.PI),THREE.Object3D.call(this),g.add(n)},TEACHER.ObjTextPlane.prototype=Object.create(THREE.Object3D.prototype),TEACHER.ObjTextPlane.prototype.constructor=TEACHER.ObjTextPlane,TEACHER.ObjTextPlane.prototype.setText=function(a){let b=this;b.ctext.text=a,b.stage.update(),b.texture.needsUpdate=!0},TEACHER.ObjGraph=function(a,b,c,d,e,f,g){let h=this;h.objCon=new THREE.Object3D,h._xMin=a||0,h._xMax=b||10,h._yMin=c||0,h._yMax=d||10,h.divXN=5,h.divYN=4,h.frameMat=new THREE.LineBasicMaterial({color:e||16777215});for(var i=[],j=0;j<=h.divXN;j++)i.push(new THREE.Vector3(-50+20*j,0,0)),i.push(new THREE.Vector3(-50+20*j,50,0));for(var k=0;k<=h.divYN;k++)i.push(new THREE.Vector3(-50,12.5*k,0)),i.push(new THREE.Vector3(50,12.5*k,0));let l=new THREE.BufferGeometry().setFromPoints(i);h.frame=new THREE.LineSegments(l,h.frameMat),h.objCon.add(h.frame),h.labelXMin=new TEACHER.ObjTextPlane(20,5,h._xMin+"","z",e||16777215),h.labelXMin.position.x=-50,h.labelXMin.position.y=-3,h.objCon.add(h.labelXMin),h.labelXMax=new TEACHER.ObjTextPlane(20,5,h._xMax+"","z",e||16777215),h.labelXMax.position.x=50,h.labelXMax.position.y=-3,h.objCon.add(h.labelXMax),h.labelYMin=new TEACHER.ObjTextPlane(20,5,h._yMin+"","z",e||16777215),h.labelYMin.position.x=-53,h.labelYMin.position.y=0,h.objCon.add(h.labelYMin),h.labelYMax=new TEACHER.ObjTextPlane(20,5,h._yMax+"","z",e||16777215),h.labelYMax.position.x=-53,h.labelYMax.position.y=50,h.objCon.add(h.labelYMax),h.labelX=new TEACHER.ObjTextPlane(24,7,"x","z",e||16777215),h.labelX.position.x=60,h.labelX.position.y=4,h.labelX.position.z=1,h.labelY=new TEACHER.ObjTextPlane(24,7,"y","z",e||16777215),h.labelY.position.x=-60,h.labelY.position.y=25,h.labelY.position.z=1,h.labelY.rotation.z=Math.PI/2,h.labelTitle=new TEACHER.ObjTextPlane(40,10,"y-x","z",e||16777215),h.labelTitle.position.y=53,h.labelTitle.position.z=1,h.objCon.add(h.labelX).add(h.labelY).add(h.labelTitle),h._lineColor=f,h._nnMax=g,h.line=new TEACHER.Line(h._lineColor||16776960,2,h._nnMax),h.objCon.add(h.line),h.changeScale(),THREE.Object3D.call(this),h.add(h.objCon)},TEACHER.ObjGraph.prototype=Object.create(THREE.Object3D.prototype),TEACHER.ObjGraph.prototype.constructor=TEACHER.ObjGraph,Object.defineProperty(TEACHER.ObjGraph.prototype,"xMin",{get:function(){return this._xMin},set:function(a){this._xMin=a,this.changeScale()}}),Object.defineProperty(TEACHER.ObjGraph.prototype,"xMax",{get:function(){return this._xMax},set:function(a){this._xMax=a,this.changeScale()}}),Object.defineProperty(TEACHER.ObjGraph.prototype,"yMin",{get:function(){return this._yMin},set:function(a){this._yMin=a,this.changeScale()}}),Object.defineProperty(TEACHER.ObjGraph.prototype,"yMax",{get:function(){return this._yMax},set:function(a){this._yMax=a,this.changeScale()}}),TEACHER.ObjGraph.prototype.addPoint=function(a,b){let c=this;c.line.addPoint(a,b,0),c.line.update()},TEACHER.ObjGraph.prototype.clear=function(){let a=this;a.line.clear()},TEACHER.ObjGraph.prototype.changeScale=function(){let a=this;a.line.scale.x=100/(a._xMax-a._xMin),a.line.scale.y=50/(a._yMax-a._yMin),a.line.position.x=-50-a._xMin*a.line.scale.x,a.line.position.y=-a._yMin*a.line.scale.y,a.labelXMin.setText(a._xMin),a.labelXMax.setText(a._xMax),a.labelYMin.setText(a._yMin),a.labelYMax.setText(a._yMax)},TEACHER.ObjGraph.prototype.setLabel=function(a,b,c){let d=this;d.labelTitle.setText(a||"y-x"),d.labelY.setText(b||"y"),d.labelX.setText(c||"x")};var skyBox=new THREE.Object3D;skyBox.wallU=new TEACHER.ObjPicPlane(1e4,1e4,pics.wallU,"y",1),skyBox.wallD=new TEACHER.ObjPicPlane(1e4,1e4,pics.wallD,"y",0),skyBox.wallS=new TEACHER.ObjPicCylinder(5e3,1e4,pics.wallSide,!0,"y",1),skyBox.wallU.position.y=5e3,skyBox.wallD.position.y=-5e3,skyBox.add(skyBox.wallU).add(skyBox.wallD).add(skyBox.wallS),world3D.scene.add(skyBox);var ground=new TEACHER.ObjPicPlane(100,100,pics.ground,"y");ground.position.z=30,world3D.scene.add(ground);var logo=new TEACHER.ObjPicPlane(100,100/8,pics.logo,"z",2);logo.position.z=-50,logo.position.y=100/8/2,world3D.scene.add(logo);function getMouse3D(a){let b,c=a||"y",d=new THREE.Vector3;"x"===c?b=new THREE.Vector3(1,0,0):"y"===c?b=new THREE.Vector3(0,1,0):"z"===c?b=new THREE.Vector3(0,0,1):log("\u932F\u8AA4!!");let e=new THREE.Vector2;return e.x=2*(world2D.stage.mouseX/1600)-1,e.y=2*-(world2D.stage.mouseY/900)+1,world3D.raycaster.setFromCamera(e,world3D.camera),world3D.raycaster.ray.intersectPlane(new THREE.Plane(b),d),d}init();