"use strict";var allCourse1,allCourse2,allCourse3,theCoil,subRing,fps=60,log=console.log,courseMD=1,currentNow=0,di=.1,coilRR=10,ringRR=8,ringX=0,ringXOld=0,isSubRing=!1,paperY=10,coilY=-10,isBLineSimplify=!0;function init(){ground.visible=!1,allCourse1=new THREE.Object3D,allCourse2=new THREE.Object3D,allCourse3=new THREE.Object3D,scene.add(allCourse1).add(allCourse2).add(allCourse3),initCourse1(),initSubRing(),initTheCoil(),world2D.control03.slII.minimum=0,world2D.control03.slII.maximum=5,world2D.control03.slII.digitN=1,world2D.control03.rbMagnet.checked=!0,world2D.control03.rbMagnet.on("click",rbClick),world2D.control03.rbCoil.on("click",rbClick),setInterval(tick,1e3/fps)}function tick(){if(courseMD=world2D.chCourseMD01.checked?1:3,world2D.control01.visible=allCourse1.visible=1===courseMD,allCourse2.visible=2===courseMD,world2D.control03.visible=allCourse3.visible=3===courseMD,isBLineSimplify=!world2D.control03.ch3DLine.checked,1===courseMD)currentNow=3,allCourse1.theCoil.cNN.visible=allCourse1.theCoil.cSS.visible=!0,allCourse1.theCoil.torus.visible=!1,world2D.control01.chMove.checked&&(0<coilY&&0<di?(di*=-1,coilY=0):coilY<-30&&di<0?(di*=-1,coilY=-30):coilY+=di),allCourse1.theCoil.position.y=coilY,allCourse1.subRing.position.y=paperY,allCourse1.subRing.position.x=0,tick1();else if(2!==courseMD&&3===courseMD){currentNow=world2D.control03.rbMagnet.checked?5:.3*currentNow+.7*world2D.control03.slII.value,theCoil.cNN.visible=theCoil.cSS.visible=world2D.control03.rbMagnet.checked,theCoil.torus.visible=world2D.control03.rbCoil.checked,world2D.control03.slII.visible=world2D.control03.rbCoil.checked,world2D.control03.chMove.visible=world2D.control03.rbMagnet.checked,isSubRing=world2D.control03.chInducedCoil.checked,world2D.control03.slCoilX.visible=world2D.control03.chInducedEE.visible=subRing.visible=isSubRing,world2D.control03.rbMagnet.checked&&world2D.control03.chMove.checked?0<coilY&&0<di?(di*=-1,coilY=0):coilY<-30&&di<0?(di*=-1,coilY=-30):coilY+=di:world2D.control03.rbMagnet.checked||(coilY=0),ringX=world2D.control03.slCoilX.value/5,setLines(),theCoil.position.y=coilY,subRing.position.y=paperY,subRing.position.x=ringX,ringXOld=ringX;for(var e=theCoil.currentArrows.length,t=0;t<e;t++){let o=theCoil.currentArrows[t];o.visible=.1<currentNow,o.position.x=(coilRR+2)*Math.cos(2*t*Math.PI/e),o.position.y=(coilRR+2)*Math.sin(2*t*Math.PI/e),o.setArrow(1.5*currentNow*Math.sin(2*t*Math.PI/e),-1.5*currentNow*Math.cos(2*t*Math.PI/e),0)}}world3D.render(),world2D.stage.update()}function initTheCoil(){theCoil=new THREE.Object3D,allCourse3.add(theCoil);var o=new THREE.TorusGeometry(coilRR,.4,16,64),e=new TEACHER.MSMat(16776960);theCoil.torus=new THREE.Mesh(o,e),theCoil.torus.rotation.x=Math.PI/2,theCoil.add(theCoil.torus),theCoil.cNN=new TEACHER.ObjCylinder(coilRR,1,255),theCoil.cSS=new TEACHER.ObjCylinder(coilRR,1,16711680),theCoil.cNN.position.y=.5,theCoil.cSS.position.y=-.5,theCoil.add(theCoil.cSS).add(theCoil.cNN),theCoil.BLines=[],theCoil.BLinesNN=113;for(var t=0;t<theCoil.BLinesNN;t++){var i=new TEACHER.Line(16776960,1,65);i.xs=t/theCoil.BLinesNN*coilRR+30,i.zs=0,i.addPoint(i.xs,0,i.zs),i.addPoint(i.xs,10+2*t,i.zs),i.update(),i.dirty=!0,theCoil.add(i),theCoil.BLines.push(i),i.bx1=new TEACHER.ObjPicPlane(2,2,"allData/pics/bx.png","y"),i.bx2=new TEACHER.ObjPicPlane(2,2,"allData/pics/bx.png","y"),i.bo1=new TEACHER.ObjPicPlane(2,2,"allData/pics/bo.png","y"),i.bo2=new TEACHER.ObjPicPlane(2,2,"allData/pics/bo.png","y"),i.bx2.rotation.x=i.bo2.rotation.x=Math.PI,i.bx2.position.x=10,i.bo1.position.x=15,i.bo2.position.x=20,theCoil.add(i.bx1).add(i.bx2).add(i.bo1).add(i.bo2),i.arrowB1=new TEACHER.ObjArrow(.4,16776960),i.arrowB2=new TEACHER.ObjArrow(.4,16776960),i.arrowB1.visible=i.arrowB2.visible=!1,theCoil.add(i.arrowB1).add(i.arrowB2),i.arrowI1=new TEACHER.ObjArrow(.8,65535),i.arrowI2=new TEACHER.ObjArrow(.8,65535),i.arrowI1.visible=i.arrowI2.visible=!1,subRing.add(i.arrowI1).add(i.arrowI2)}theCoil.currentArrows=[];for(t=0;t<8;t++){var r=new TEACHER.ObjArrow(.8,16776960);theCoil.currentArrows.push(r),theCoil.torus.add(r)}}function setLines(){for(var o=theCoil.BLines.length,e=0;e<o;e++)theCoil.BLines[e].dirty&&(theCoil.BLines[e].clear(),theCoil.BLines[e].dirty=!1),theCoil.BLines[e].bx1.visible=theCoil.BLines[e].bx2.visible=theCoil.BLines[e].bo1.visible=theCoil.BLines[e].bo2.visible=!1,theCoil.BLines[e].arrowB1.visible=theCoil.BLines[e].arrowB2.visible=!1,theCoil.BLines[e].arrowI1.life--,theCoil.BLines[e].arrowI1.life=theCoil.BLines[e].arrowI1.life<1?1:theCoil.BLines[e].arrowI1.life,theCoil.BLines[e].arrowI2.life--,theCoil.BLines[e].arrowI2.life=theCoil.BLines[e].arrowI2.life<1?1:theCoil.BLines[e].arrowI2.life,theCoil.BLines[e].arrowI1.visible=0<theCoil.BLines[e].arrowI1.life&&world2D.control03.chInducedCoil.checked&&world2D.control03.chInducedEE.checked,theCoil.BLines[e].arrowI1.scale.x=theCoil.BLines[e].arrowI1.scale.y=theCoil.BLines[e].arrowI1.scale.z=1-Math.pow((100-theCoil.BLines[e].arrowI1.life)/100,2),theCoil.BLines[e].arrowI2.visible=0<theCoil.BLines[e].arrowI2.life&&world2D.control03.chInducedCoil.checked&&world2D.control03.chInducedEE.checked,theCoil.BLines[e].arrowI2.scale.x=theCoil.BLines[e].arrowI2.scale.y=theCoil.BLines[e].arrowI2.scale.z=1-Math.pow((100-theCoil.BLines[e].arrowI2.life)/100,2);var t=2*coilRR/(2*Math.abs(currentNow)+1);let i=1,r=0;for(i=1;i<=Math.floor(Math.abs(currentNow))+1;i++){var n=(i-.5)*t,a=Math.round(2*Math.PI*n/t);isBLineSimplify&&(a=2);for(var s=2*Math.PI/a,l=0;l<a;l++){var c=theCoil.BLines[r];r++;var E=l*s,h=coilRR-n+50*(coilRR/n-1);c.xs=n*Math.cos(E),c.zs=n*Math.sin(E),c.xc=(n+h)*Math.cos(E),c.zc=(n+h)*Math.sin(E);for(var p,d,w,b,C,R,M,T,u,H,y=0;y<=64;y++){var x=2*Math.PI*y/64;c.addPoint((n+h-h*Math.cos(x))*Math.cos(E),h*Math.sin(x),(n+h-h*Math.cos(x))*Math.sin(E))}c.update(),c.dirty=!0,c.arrowB1.isOld=!1,c.arrowB2.isOld=!1,paperY-coilY<=h?(c.arrowB1.isOld=!0,c.arrowB2.isOld=!0,c.bx1.visible=c.bx2.visible=c.bo1.visible=c.bo2.visible=world2D.control03.chInducedCoil.checked,p=n+h-Math.sqrt(h*h-Math.pow(paperY-coilY,2))*(0<currentNow?1:-1),u=n+h+Math.sqrt(h*h-Math.pow(paperY-coilY,2))*(0<currentNow?1:-1),c.bx1.position.x=c.bo2.position.x=u*Math.cos(E),c.bx1.position.z=c.bo2.position.z=u*Math.sin(E),c.bx2.position.x=c.bo1.position.x=p*Math.cos(E),c.bx2.position.z=c.bo1.position.z=p*Math.sin(E),c.bx1.position.y=c.bx2.position.y=c.bo1.position.y=c.bo2.position.y=paperY-coilY,c.arrowB1.visible=c.arrowB2.visible=world2D.control03.chInducedCoil.checked,d=Math.atan2(paperY-coilY,n+h-p),w=Math.atan2(u-(n+h),paperY-coilY)+Math.PI/2,c.arrowB1.position.x=p*Math.cos(E),c.arrowB1.position.z=p*Math.sin(E),c.arrowB2.position.x=u*Math.cos(E),c.arrowB2.position.z=u*Math.sin(E),c.arrowB1.position.y=c.arrowB2.position.y=paperY-coilY,u=5*(0<currentNow?1:-1),c.arrowB1.setArrow(u*Math.sin(d)*Math.cos(E),u*Math.cos(d),u*Math.sin(d)*Math.sin(E)),c.arrowB2.setArrow(u*Math.sin(w)*Math.cos(E),u*Math.cos(w),u*Math.sin(w)*Math.sin(E)),0<(u=ringRR*ringRR-Math.pow(Math.sin(E)*ringX,2))&&(c.arrowB1.isOld&&(b=Math.sqrt(Math.pow(c.arrowB1.position.x-ringX,2)+Math.pow(c.arrowB1.position.z,2)),H=Math.sqrt(Math.pow(c.arrowB1.oldX-ringXOld,2)+Math.pow(c.arrowB1.oldZ,2)),(b-ringRR)*(H-ringRR)<=0&&(c.arrowI1.visible=world2D.control03.chInducedCoil.checked&&world2D.control03.chInducedEE.checked,c.arrowI1.life=100,C=Math.cos(E)*Math.cos(E)*ringX-Math.cos(E)*Math.sqrt(u),R=Math.cos(E)*Math.cos(E)*ringX+Math.cos(E)*Math.sqrt(u),w=(c.arrowB1.position.x-C)*(c.arrowB1.oldX-C)<0?C:R,M=Math.tan(E)*w,T=Math.atan2(M,w-ringX)+Math.PI/2,c.arrowI1.position.x=w-ringX,c.arrowI1.position.z=M,c.arrowI1.position.y=0*paperY+1.5,M=10*(b<H?1:-1)*(currentNow<0?-1:1),c.arrowI1.setArrow(M*Math.cos(T),0,M*Math.sin(T)))),c.arrowB2.isOld&&(b=Math.sqrt(Math.pow(c.arrowB2.position.x-ringX,2)+Math.pow(c.arrowB2.position.z,2)),H=Math.sqrt(Math.pow(c.arrowB2.oldX-ringXOld,2)+Math.pow(c.arrowB2.oldZ,2)),(b-ringRR)*(H-ringRR)<=0&&(c.arrowI2.visible=world2D.control03.chInducedCoil.checked&&world2D.control03.chInducedEE.checked,c.arrowI2.life=100,C=Math.cos(E)*Math.cos(E)*ringX-Math.cos(E)*Math.sqrt(u),R=Math.cos(E)*Math.cos(E)*ringX+Math.cos(E)*Math.sqrt(u),M=(c.arrowB2.position.x-C)*(c.arrowB2.oldX-C)<0?C:R,T=Math.tan(E)*M,u=Math.atan2(T,M-ringX)+Math.PI/2,c.arrowI2.position.x=M-ringX,c.arrowI2.position.z=T,c.arrowI2.position.y=0*paperY+1.5,H=-10*(b<H?1:-1)*(currentNow<0?-1:1),c.arrowI2.setArrow(H*Math.cos(u),0,H*Math.sin(u))))),c.arrowB1.oldX=c.arrowB1.position.x,c.arrowB1.oldZ=c.arrowB1.position.z,c.arrowB2.oldX=c.arrowB2.position.x,c.arrowB2.oldZ=c.arrowB2.position.z):(c.arrowB1.isOld=!1,c.arrowB2.isOld=!1)}}}function initSubRing(){subRing=new THREE.Object3D,allCourse3.add(subRing);var o=new THREE.TorusGeometry(ringRR,.4,16,64),e=new TEACHER.MSMat(65535);const t=new THREE.Mesh(o,e);t.rotation.x=Math.PI/2,subRing.add(t)}function rbClick(o){o=o.target.parent.name;"rbMagnet"===o?(world2D.control03.rbMagnet.checked=!0,world2D.control03.rbCoil.checked=!1):"rbCoil"===o&&(world2D.control03.rbMagnet.checked=!1,world2D.control03.rbCoil.checked=!0)}function initCourse1(){allCourse1.theCoil=new THREE.Object3D,allCourse1.add(allCourse1.theCoil);var o=new THREE.TorusGeometry(coilRR,.4,16,64),e=new TEACHER.MSMat(16776960);allCourse1.theCoil.torus=new THREE.Mesh(o,e),allCourse1.theCoil.torus.rotation.x=Math.PI/2,allCourse1.theCoil.add(allCourse1.theCoil.torus),allCourse1.theCoil.cNN=new TEACHER.ObjCylinder(coilRR,1,255),allCourse1.theCoil.cSS=new TEACHER.ObjCylinder(coilRR,1,16711680),allCourse1.theCoil.cNN.position.y=.5,allCourse1.theCoil.cSS.position.y=-.5,allCourse1.theCoil.add(allCourse1.theCoil.cSS).add(allCourse1.theCoil.cNN),allCourse1.theCoil.BLines=[],allCourse1.theCoil.BLinesNN=113;for(var t=0;t<allCourse1.theCoil.BLinesNN;t++){var i=new TEACHER.Line(16776960,1,65);i.xs=t/allCourse1.theCoil.BLinesNN*coilRR+30,i.zs=0,i.addPoint(0,-20,0),i.addPoint(0,20,0),i.update(),i.dirty=!0,allCourse1.theCoil.add(i),allCourse1.theCoil.BLines.push(i),i.bx=new TEACHER.ObjPicPlane(2,2,"allData/pics/bx.png","y"),i.bo=new TEACHER.ObjPicPlane(2,2,"allData/pics/bo.png","y"),i.bx.position.x=10,i.bo.position.x=15,i.bx.rotation.x=Math.PI,allCourse1.theCoil.add(i.bx).add(i.bo),i.arrowB=new TEACHER.ObjArrow(.4,16776960),i.arrowB.visible=!1,allCourse1.theCoil.add(i.arrowB),i.arrowI1=new TEACHER.ObjArrow(.8,65535),i.arrowI2=new TEACHER.ObjArrow(.8,65535),i.arrowI1.visible=i.arrowI2.visible=!1,allCourse1.add(i.arrowI1).add(i.arrowI2)}allCourse1.subRing=new THREE.Object3D,allCourse1.add(allCourse1.subRing);o=new THREE.TorusGeometry(ringRR,.4,16,64),e=new TEACHER.MSMat(65535),e=new THREE.Mesh(o,e);e.rotation.x=Math.PI/2,allCourse1.subRing.add(e)}function tick1(){for(var o=allCourse1.theCoil.BLines.length,e=0;e<o;e++)allCourse1.theCoil.BLines[e].visible=!1,allCourse1.theCoil.BLines[e].bx.visible=allCourse1.theCoil.BLines[e].bo.visible=!1,allCourse1.theCoil.BLines[e].arrowB.visible=!1;var t=2*coilRR/(2*Math.abs(currentNow)+1);let i=1,r=0;for(i=1;i<=Math.floor(Math.abs(currentNow))+1;i++)for(var n=(i-.5)*t,a=Math.round(2*Math.PI*n/t),s=2*Math.PI/a,l=0;l<a;l++){var c=allCourse1.theCoil.BLines[r];c.visible=!0,r++;var E=l*s;c.xs=n*Math.cos(E),c.zs=n*Math.sin(E),c.position.x=c.xs,c.position.z=c.zs,paperY-coilY<=20&&(c.bx.visible=c.bo.visible=!0,c.bx.position.x=c.bo.position.x=c.xs,c.bx.position.z=c.bo.position.z=c.zs,c.bx.position.y=c.bo.position.y=paperY-coilY,c.arrowB.visible=!0,c.arrowB.position.x=c.xs,c.arrowB.position.z=c.zs,c.arrowB.position.y=paperY-coilY,E=5*(0<currentNow?1:-1),c.arrowB.setArrow(0,E,0))}}MyJS.myResize();var TEACHER={ObjPlane:function(o,e,t,i,r){var n=this;n.mat=new TEACHER.MSMat(t,r),n.geo=new THREE.PlaneGeometry(o||10,e||10,1,1),n.mesh=new THREE.Mesh(n.geo,n.mat),"x"===i?n.mesh.rotation.y=.5*Math.PI:"y"===i&&(n.mesh.rotation.x=-.5*Math.PI),THREE.Object3D.call(this,n.geo,n.mat),n.add(n.mesh)}};TEACHER.ObjPlane.prototype=Object.create(THREE.Object3D.prototype),TEACHER.ObjPlane.prototype.constructor=TEACHER.ObjPlane,TEACHER.ObjCylinder=function(o,e,t,i,r,n){var a=this;a.mat=new TEACHER.MSMat(t,n),a.geo=new THREE.CylinderGeometry(o||10,o||10,e||10,32,2,i),a.mesh=new THREE.Mesh(a.geo,a.mat),"x"===r?a.mesh.rotation.z=-.5*Math.PI:"z"===r&&(a.mesh.rotation.x=.5*Math.PI),THREE.Object3D.call(this,a.geo,a.mat),a.add(a.mesh)},TEACHER.ObjCylinder.prototype=Object.create(THREE.Object3D.prototype),TEACHER.ObjCylinder.prototype.constructor=TEACHER.ObjCylinder,TEACHER.ObjSphere=function(o,e,t){var i=this;i.mat=new TEACHER.MSMat(e,t),i.geo=new THREE.SphereGeometry(o||10,32,16),i.mesh=new THREE.Mesh(i.geo,i.mat),THREE.Object3D.call(this,i.geo,i.mat),i.add(i.mesh)},TEACHER.ObjSphere.prototype=Object.create(THREE.Object3D.prototype),TEACHER.ObjSphere.prototype.constructor=TEACHER.ObjSphere,TEACHER.ObjBox=function(o,e,t,i,r){var n=this;n.mat=new TEACHER.MSMat(i,r),n.geo=new THREE.BoxGeometry(o||10,e||10,t||10),n.mesh=new THREE.Mesh(n.geo,n.mat),THREE.Object3D.call(this,n.geo,n.mat),n.add(n.mesh)},TEACHER.ObjBox.prototype=Object.create(THREE.Object3D.prototype),TEACHER.ObjBox.prototype.constructor=TEACHER.ObjBox,TEACHER.MSMat=function(o,e){THREE.MeshStandardMaterial.call(this,{color:o||16711935,roughness:.4,side:e||0})},TEACHER.MSMat.prototype=Object.create(THREE.MeshStandardMaterial.prototype),TEACHER.MSMat.prototype.constructor=TEACHER.MSMat,TEACHER.ObjPicPlane=function(o,e,t,i,r){var n=this,t=(new THREE.TextureLoader).load(t);n.mat=new THREE.MeshBasicMaterial({map:t,transparent:!0,side:r||0}),n.geo=new THREE.PlaneGeometry(o,e,1,1),n.mesh=new THREE.Mesh(n.geo,n.mat),"x"===i?n.mesh.rotation.y=.5*Math.PI:"y"===i&&(n.mesh.rotation.x=-.5*Math.PI),THREE.Object3D.call(this),n.add(n.mesh)},TEACHER.ObjPicPlane.prototype=Object.create(THREE.Object3D.prototype),TEACHER.ObjPicPlane.prototype.constructor=TEACHER.ObjPicPlane,TEACHER.ObjPicCylinder=function(o,e,t,i,r,n){var a=this,t=(new THREE.TextureLoader).load(t);a.mat=new THREE.MeshBasicMaterial({map:t,side:n||0}),a.geo=new THREE.CylinderGeometry(o||10,o||10,e||10,32,4,i),a.mesh=new THREE.Mesh(a.geo,a.mat),"x"===r?a.mesh.rotation.z=-.5*Math.PI:"z"===r?(a.mesh.rotation.y=.5*Math.PI,a.mesh.rotation.x=.5*Math.PI):"y"===r&&(a.mesh.rotation.y=.5*Math.PI),THREE.Object3D.call(this,a.geo,a.mat),a.add(a.mesh)},TEACHER.ObjPicCylinder.prototype=Object.create(THREE.Object3D.prototype),TEACHER.ObjPicCylinder.prototype.constructor=TEACHER.ObjPicCylinder,TEACHER.ObjPicSphere=function(o,e,t){var i=this,e=(new THREE.TextureLoader).load(e);i.mat=new THREE.MeshBasicMaterial({map:e,side:t||0}),i.geo=new THREE.SphereGeometry(o||10,32,16),i.mesh=new THREE.Mesh(i.geo,i.mat),THREE.Object3D.call(this,i.geo,i.mat),i.add(i.mesh)},TEACHER.ObjPicSphere.prototype=Object.create(THREE.Object3D.prototype),TEACHER.ObjPicSphere.prototype.constructor=TEACHER.ObjPicSphere,TEACHER.ObjArrow=function(o,e){var t=new THREE.MeshStandardMaterial({color:e||16711935,roughness:.4}),e=new THREE.ConeGeometry(o||10,40,32);this.ArrowHead=new THREE.Mesh(e,t),this.ArrowHead.position.y=30,e=new THREE.CylinderGeometry(.5*(o||10),.5*(o||10),60,32,2),this.ArrowBody=new THREE.Mesh(e,t),this.ArrowBody.position.y=-20,THREE.Object3D.call(this),this.rotX=new THREE.Object3D,this.rotY=new THREE.Object3D,this.add(this.rotY),this.rotY.add(this.rotX),this.rotX.add(this.ArrowBody),this.rotX.add(this.ArrowHead)},TEACHER.ObjArrow.prototype=Object.create(THREE.Object3D.prototype),TEACHER.ObjArrow.prototype.constructor=TEACHER.ObjArrow,TEACHER.ObjArrow.prototype.setArrow=function(o,e,t){var i=o*o+e*e+t*t,r=Math.sqrt(i);0<i?(this.rotX.visible=!0,this.rotX.scale.y=r/100):this.rotX.visible=!1,this.rotX.rotation.x=Math.acos(e/r),this.rotY.rotation.y=Math.atan2(o,t)},TEACHER.ObjSpring=function(o,e,t,i,r){var n=o||20;this.L0=n;let a=[];var s=i||5,l=e||5,e=t||.5;a.push(new THREE.Vector3(0,0,0)),a.push(new THREE.Vector3(0,.05*n,0));for(var c=0;c<=16*s;c++)a.push(new THREE.Vector3(l*Math.cos(2*c*Math.PI/16),n*(.05+.9*c/s/16),l*Math.sin(2*c*Math.PI/16)));a.push(new THREE.Vector3(0,.95*n,0)),a.push(new THREE.Vector3(0,n,0));t=new THREE.CatmullRomCurve3(a),r=new THREE.MeshStandardMaterial({color:r||16711935,roughness:.4}),e=new THREE.TubeGeometry(t,500,e,12);this.mesh=new THREE.Mesh(e,r),THREE.Object3D.call(this),this.rotX=new THREE.Object3D,this.rotY=new THREE.Object3D,this.add(this.rotY),this.rotY.add(this.rotX),this.rotX.add(this.mesh)},TEACHER.ObjSpring.prototype=Object.create(THREE.Object3D.prototype),TEACHER.ObjSpring.prototype.constructor=TEACHER.ObjSpring,TEACHER.ObjSpring.prototype.setSpring=function(o,e,t){var i=o*o+e*e+t*t,r=Math.sqrt(i);0<i?(this.rotX.visible=!0,this.rotX.scale.y=r/this.L0):this.rotX.visible=!1,this.rotX.rotation.x=Math.acos(e/r),this.rotY.rotation.y=Math.atan2(o,t)},TEACHER.Points=function(o,e,t){var i=this,e=e||1,o=o||16711935;let r=new THREE.Color(o);i.nnMax=t||1e4,i.nnNow=0,i.geometry=new THREE.BufferGeometry,i.positions=[],i.geometry.setAttribute("position",new THREE.Float32BufferAttribute(i.positions,3)),i.geometry.computeBoundingSphere();e=new THREE.PointsMaterial({size:e,map:i.createCanvasMaterial("#"+r.getHexString(),64),transparent:!0,depthWrite:!1});THREE.Points.call(this,i.geometry,e)},TEACHER.Points.prototype=Object.create(THREE.Points.prototype),TEACHER.Points.prototype.constructor=TEACHER.Points,TEACHER.Points.prototype.createCanvasMaterial=function(o,e){var t=document.createElement("canvas");t.width=t.height=e;var i=t.getContext("2d");i.imageSmoothingEnabled=!1;var r=new THREE.Texture(t),t=e/2;return i.beginPath(),i.arc(t,t,e/2-3,0,2*Math.PI,!1),i.closePath(),i.fillStyle=o,i.fill(),r.needsUpdate=!0,r},TEACHER.Points.prototype.addPoint=function(o,e,t){var i=this;i.nnNow<i.nnMax?i.nnNow++:(log("TEACHER.Points 到達最大點數"),i.positions.shift(),i.positions.shift(),i.positions.shift()),i.positions.push(o,e,t)},TEACHER.Points.prototype.clear=function(){this.positions=[],this.nnNow=0,this.update()},TEACHER.Points.prototype.setPoint=function(o,e,t,i){var r=this;o>r.nnMax?log("輸入的n值大於TEACHER.Points 最大點數 nnMax"):o>r.nnNow?log("輸入的n值大於TEACHER.Points 現在點數 nnNow"):(r.positions[3*o]=e,r.positions[3*o+1]=t,r.positions[3*o+2]=i)},TEACHER.Points.prototype.getPoint=function(o){var e=this;let t=new THREE.Vector3;return o>e.nnMax?log("輸入的n值大於TEACHER.Points 最大點數 nnMax"):o>e.nnNow?log("輸入的n值大於TEACHER.Points 現在點數 nnNow"):(t.x=e.positions[3*o],t.y=e.positions[3*o+1],t.z=e.positions[3*o+2]),t},TEACHER.Points.prototype.update=function(){this.geometry.setAttribute("position",new THREE.Float32BufferAttribute(this.positions,3)),this.geometry.computeBoundingSphere(),this.geometry.attributes.position.needsUpdate=!0},TEACHER.Line=function(o,e,t){var i=this;i.nnMax=t||1e4,i.lineWidth=e||1,i.nnNow=0;e=new THREE.LineMaterial({color:o||16711935,linewidth:e||1});e.resolution.set(window.innerWidth,window.innerHeight),i.geometry=new THREE.LineGeometry,i.positions=new Float32Array(3*i.nnMax),i.geometry.setPositions(i.positions),THREE.Line.call(this,i.geometry,e)},TEACHER.Line.prototype=Object.create(THREE.Line.prototype),TEACHER.Line.prototype.constructor=TEACHER.Line,TEACHER.Line.prototype.addPoint=function(o,e,t){var i=this;if(i.nnNow<i.nnMax)i.nnNow++;else{log("TEACHER.Line 到達最大點數");for(var r=0;r<i.nnMax-1;r++)i.positions[3*r]=i.positions[3*r+3],i.positions[3*r+1]=i.positions[3*r+4],i.positions[3*r+2]=i.positions[3*r+5]}for(r=i.nnNow;r<=i.nnMax;r++)i.positions[3*(r-1)]=o,i.positions[3*(r-1)+1]=e,i.positions[3*(r-1)+2]=t},TEACHER.Line.prototype.clear=function(){var o=this;o.positions=new Float32Array(3*o.nnMax),o.nnNow=0,o.geometry.setPositions(o.positions)},TEACHER.Line.prototype.setPoint=function(o,e,t,i){var r=this;o>r.nnMax?log("輸入的n值大於TEACHER.Line 最大點數 nnMax"):o>r.nnNow?log("輸入的n值大於TEACHER.Line 現在點數 nnNow"):(r.positions[3*o]=e,r.positions[3*o+1]=t,r.positions[3*o+2]=i)},TEACHER.Line.prototype.getPoint=function(o){var e=this;let t=new THREE.Vector3;return o>e.nnMax?log("輸入的n值大於TEACHER.Line 最大點數 nnMax"):o>e.nnNow?log("輸入的n值大於TEACHER.Line 現在點數 nnNow"):(t.x=e.positions[3*o],t.y=e.positions[3*o+1],t.z=e.positions[3*o+2]),t},TEACHER.Line.prototype.update=function(){for(var o=this,e=o.getPoint(o.nnNow-1),t=o.nnNow;t<=o.nnMax;t++)o.positions[3*t]=e.x,o.positions[3*t+1]=e.y,o.positions[3*t+2]=e.z;o.geometry.setPositions(o.positions)},TEACHER.ObjTextPlane=function(o,e,t,i,r,n){var a=this,s=Math.round(Math.log2(o/e)),l=$("<canvas>").attr("width",String(128*Math.pow(2,s))).attr("height","128");a.stage=new createjs.Stage(l[0]);let c=new createjs.Container;if(n){let o=new createjs.Shape,e=new THREE.Color(n);o.graphics.c().f("#"+e.getHexString()).dr(0,0,128*Math.pow(2,s),128),c.addChild(o)}a.ctext=new createjs.Text;let E=new THREE.Color(r||16777215);a.ctext.color="#"+E.getHexString(),a.ctext.font="96px Arial",a.ctext.text=t||"",a.ctext.textAlign="center",a.ctext.textBaseline="middle",a.ctext.x=128*Math.pow(2,s)/2,a.ctext.y=64,c.addChild(a.ctext),a.stage.addChild(c),a.stage.update(),a.texture=new THREE.Texture(l[0]);l=new THREE.MeshBasicMaterial({map:a.texture,transparent:!0}),e=new THREE.PlaneGeometry(o||10,e||10,1,1);a.texture.needsUpdate=!0,a.plane1=new THREE.Mesh(e,l),a.plane2=new THREE.Mesh(e,l),a.plane2.rotation.y=Math.PI;let h=new THREE.Object3D;h.add(a.plane1).add(a.plane2),"x"===i?h.rotation.y=.5*Math.PI:"y"===i&&(h.rotation.x=-.5*Math.PI),THREE.Object3D.call(this),a.add(h)},TEACHER.ObjTextPlane.prototype=Object.create(THREE.Object3D.prototype),TEACHER.ObjTextPlane.prototype.constructor=TEACHER.ObjTextPlane,TEACHER.ObjTextPlane.prototype.setText=function(o){this.ctext.text=o,this.stage.update(),this.texture.needsUpdate=!0},TEACHER.ObjGraph=function(o,e,t,i,r,n,a){var s=this;s.objCon=new THREE.Object3D,s._xMin=o||0,s._xMax=e||10,s._yMin=t||0,s._yMax=i||10,s.divXN=5,s.divYN=4,s.frameMat=new THREE.LineBasicMaterial({color:r||16777215});for(var l=[],c=0;c<=s.divXN;c++)l.push(new THREE.Vector3(20*c-50,0,0)),l.push(new THREE.Vector3(20*c-50,50,0));for(var E=0;E<=s.divYN;E++)l.push(new THREE.Vector3(-50,12.5*E,0)),l.push(new THREE.Vector3(50,12.5*E,0));i=(new THREE.BufferGeometry).setFromPoints(l);s.frame=new THREE.LineSegments(i,s.frameMat),s.objCon.add(s.frame),s.labelXMin=new TEACHER.ObjTextPlane(20,5,String(s._xMin),"z",r||16777215),s.labelXMin.position.x=-50,s.labelXMin.position.y=-3,s.objCon.add(s.labelXMin),s.labelXMax=new TEACHER.ObjTextPlane(20,5,String(s._xMax),"z",r||16777215),s.labelXMax.position.x=50,s.labelXMax.position.y=-3,s.objCon.add(s.labelXMax),s.labelYMin=new TEACHER.ObjTextPlane(20,5,String(s._yMin),"z",r||16777215),s.labelYMin.position.x=-53,s.labelYMin.position.y=0,s.objCon.add(s.labelYMin),s.labelYMax=new TEACHER.ObjTextPlane(20,5,String(s._yMax),"z",r||16777215),s.labelYMax.position.x=-53,s.labelYMax.position.y=50,s.objCon.add(s.labelYMax),s.labelX=new TEACHER.ObjTextPlane(24,7,"x","z",r||16777215),s.labelX.position.x=60,s.labelX.position.y=4,s.labelX.position.z=1,s.labelY=new TEACHER.ObjTextPlane(24,7,"y","z",r||16777215),s.labelY.position.x=-60,s.labelY.position.y=25,s.labelY.position.z=1,s.labelY.rotation.z=Math.PI/2,s.labelTitle=new TEACHER.ObjTextPlane(40,10,"y-x","z",r||16777215),s.labelTitle.position.y=53,s.labelTitle.position.z=1,s.objCon.add(s.labelX).add(s.labelY).add(s.labelTitle),s._lineColor=n,s._nnMax=a,s.line=new TEACHER.Line(s._lineColor||16776960,2,s._nnMax),s.objCon.add(s.line),s.changeScale(),THREE.Object3D.call(this),s.add(s.objCon)},TEACHER.ObjGraph.prototype=Object.create(THREE.Object3D.prototype),TEACHER.ObjGraph.prototype.constructor=TEACHER.ObjGraph,Object.defineProperty(TEACHER.ObjGraph.prototype,"xMin",{get:function(){return this._xMin},set:function(o){this._xMin=o,this.changeScale()}}),Object.defineProperty(TEACHER.ObjGraph.prototype,"xMax",{get:function(){return this._xMax},set:function(o){this._xMax=o,this.changeScale()}}),Object.defineProperty(TEACHER.ObjGraph.prototype,"yMin",{get:function(){return this._yMin},set:function(o){this._yMin=o,this.changeScale()}}),Object.defineProperty(TEACHER.ObjGraph.prototype,"yMax",{get:function(){return this._yMax},set:function(o){this._yMax=o,this.changeScale()}}),TEACHER.ObjGraph.prototype.addPoint=function(o,e){this.line.addPoint(o,e,0),this.line.update()},TEACHER.ObjGraph.prototype.clear=function(){this.line.clear()},TEACHER.ObjGraph.prototype.changeScale=function(){var o=this;o.line.scale.x=100/(o._xMax-o._xMin),o.line.scale.y=50/(o._yMax-o._yMin),o.line.position.x=-50-o._xMin*o.line.scale.x,o.line.position.y=-o._yMin*o.line.scale.y,o.labelXMin.setText(o._xMin),o.labelXMax.setText(o._xMax),o.labelYMin.setText(o._yMin),o.labelYMax.setText(o._yMax)},TEACHER.ObjGraph.prototype.setLabel=function(o,e,t){this.labelTitle.setText(o||"y-x"),this.labelY.setText(e||"y"),this.labelX.setText(t||"x")};var skyBox=new THREE.Object3D;skyBox.wallU=new TEACHER.ObjPicPlane(1e4,1e4,pics.wallU,"y",1),skyBox.wallD=new TEACHER.ObjPicPlane(1e4,1e4,pics.wallD,"y",0),skyBox.wallS=new TEACHER.ObjPicCylinder(5e3,1e4,pics.wallSide,!0,"y",1),skyBox.wallU.position.y=5e3,skyBox.wallD.position.y=-5e3,skyBox.add(skyBox.wallU).add(skyBox.wallD).add(skyBox.wallS),world3D.scene.add(skyBox);var ground=new TEACHER.ObjPicPlane(100,100,pics.ground,"y");world3D.scene.add(ground);var logo=new TEACHER.ObjPicPlane(100,12.5,pics.logo,"z",2);function getMouse3D(o,e){var t=o||"y";let i;o=new THREE.Vector3;"x"===t?i=new THREE.Vector3(1,0,0):"y"===t?i=new THREE.Vector3(0,1,0):"z"===t?i=new THREE.Vector3(0,0,1):log("錯誤!!");let r=new THREE.Vector2;return r.x=world2D.stage.mouseX/1600*2-1,r.y=-world2D.stage.mouseY/900*2+1,world3D.raycaster.setFromCamera(r,world3D.camera),world3D.raycaster.ray.intersectPlane(new THREE.Plane(i),o),o}logo.position.z=-50,logo.position.y=6.25,world3D.scene.add(logo),init();