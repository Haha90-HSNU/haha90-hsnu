"use strict";$("#mainAnimation").css("position","absolute").css("top","0px").css("left","0px").css("width","1600px").css("height","900px");var MyJS=MyJS||{};!function(){var e={};function o(){var e=window.innerWidth,t=window.innerHeight,o=Math.min(e/1600,t/900);$("#mainAnimation").css("width",1600*o).css("height",900*o);var a=0,i=0;if(e/1600<t/900)a=.5*(t-900*o);else i=.5*(e-1600*o);$("#mainAnimation").offset({top:a,left:i});for(var r=$("#mainAnimation").children(),n=r.length,s=0;s<n;s++){var l=r[s],c=o;"canvas"===$(l).attr("id")&&(c/=resolutionScale),$(l).css({"-webkit-transform":"scale("+c+")","-moz-transform":"scale("+c+")","-ms-transform":"scale("+c+")","-o-transform":"scale("+c+")",transform:"scale("+c+");"}).offset({top:a,left:i})}}!function(){(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0,4)))&&(e.isMobile=!0);e.isOpera=!!window.opr&&!!opr.addons||!!window.opera||navigator.userAgent.indexOf(" OPR/")>=0,e.isFirefox="undefined"!=typeof InstallTrigger,e.isSafari=/constructor/i.test(window.HTMLElement)||(t=!window.safari||safari.pushNotification,"[object SafariRemoteNotification]"===t.toString()),e.isIE=!!document.documentMode,e.isEdge=!e.isIE&&!!window.StyleMedia,e.isChrome=!!window.chrome&&!!window.chrome.webstore,e.isBlink=(e.isChrome||e.isOpera)&&!!window.CSS;var t;var o=window.navigator.userAgent,a=window.navigator.platform;-1!==["Macintosh","MacIntel","MacPPC","Mac68K"].indexOf(a)?e.isMacOS=!0:-1!==["iPhone","iPad","iPod"].indexOf(a)?e.isIOS=!0:-1!==["Win32","Win64","Windows","WinCE"].indexOf(a)?e.isWondows=!0:/Android/.test(o)?e.isAndroid=!0:!os&&/Linux/.test(a)&&(e.isLinux=!0)}(),MyJS.myResize=o,o(),$("#mainAnimation").on("dragstart",function(e){e.preventDefault()}).css("margin","0px auto").css("overflow","hidden"),$(window).resize(o),$("body").prop("scroll","no").css("overflow","hidden"),MyJS.myFullScreen=function(){t=theWorld;var e=$("#mainAnimation").get(0);t.isFullscreened?(document.exitFullscreen?document.exitFullscreen():document.webkitExitFullscreen?document.webkitExitFullscreen():document.mozCancelFullScreen?document.mozCancelFullScreen():document.msExitFullscreen&&document.msExitFullscreen(),t.isFullscreened=!1):(e.requestFullscreen?e.requestFullscreen():e.mozRequestFullScreen?e.mozRequestFullScreen():e.webkitRequestFullscreen?e.webkitRequestFullscreen():e.msRequestFullscreen&&e.msRequestFullscreen(),t.isFullscreened=!0)}}();var comp=AdobeAn.getComposition("98EA1A955B63F6489D0F00F6BFD1C4DE"),lib=comp.getLibrary(),world2D=new lib.myAnimate,canvas2D=$("<canvas>").attr("width","1600px").attr("height","900px"),canvas3D=$("<canvas>").attr("width","1600px").attr("height","900px");$("#mainAnimation").append(canvas3D).append(canvas2D);var stage2D=new createjs.Stage(canvas2D[0]);stage2D.enableMouseOver(1e3/30),stage2D.addChild(world2D),createjs.Touch.enable(stage2D),stage2D.update();var Stats=function(){function e(e){return a.appendChild(e.dom),e}function t(e){for(var t=0;t<a.children.length;t++)a.children[t].style.display=t===e?"block":"none";o=e}var o=0,a=document.createElement("div");a.style.cssText="position:fixed;top:0;left:0;cursor:pointer;opacity:0.9;z-index:10000",a.addEventListener("click",function(e){e.preventDefault(),t(++o%a.children.length)},!1);var i=(performance||Date).now(),r=i,n=0,s=e(new Stats.Panel("FPS","#0ff","#002")),l=e(new Stats.Panel("MS","#0f0","#020"));if(self.performance&&self.performance.memory)var c=e(new Stats.Panel("MB","#f08","#201"));return t(0),{REVISION:16,dom:a,addPanel:e,showPanel:t,begin:function(){i=(performance||Date).now()},end:function(){n++;var e=(performance||Date).now();if(l.update(e-i,200),e>r+1e3&&(s.update(1e3*n/(e-r),100),r=e,n=0,c)){var t=performance.memory;c.update(t.usedJSHeapSize/1048576,t.jsHeapSizeLimit/1048576)}return e},update:function(){i=this.end()},domElement:a,setMode:t}};Stats.Panel=function(e,t,o){var a=1/0,i=0,r=Math.round,n=r(window.devicePixelRatio||1),s=80*n,l=48*n,c=3*n,d=2*n,h=3*n,E=15*n,w=74*n,m=30*n,p=document.createElement("canvas");p.width=s,p.height=l,p.style.cssText="width:80px;height:48px";var u=p.getContext("2d");return u.font="bold "+9*n+"px Helvetica,Arial,sans-serif",u.textBaseline="top",u.fillStyle=o,u.fillRect(0,0,s,l),u.fillStyle=t,u.fillText(e,c,d),u.fillRect(h,E,w,m),u.fillStyle=o,u.globalAlpha=.9,u.fillRect(h,E,w,m),{dom:p,update:function(l,R){a=Math.min(a,l),i=Math.max(i,l),u.fillStyle=o,u.globalAlpha=1,u.fillRect(0,0,s,E),u.fillStyle=t,u.fillText(r(l)+" "+e+" ("+r(a)+"-"+r(i)+")",c,d),u.drawImage(p,h+n,E,w-n,m,h,E,w-n,m),u.fillRect(h+w-n,E,n,m),u.fillStyle=o,u.globalAlpha=.9,u.fillRect(h+w-n,E,n,r((1-l/R)*m))}}},"object"==typeof module&&(module.exports=Stats);var world3D={cameraRR:20};world3D.cameraTheta=75*Math.PI/180,world3D.cameraPhi=0*Math.PI/180,world3D.scene=new THREE.Scene;var scene=world3D.scene;world3D.camera=new THREE.PerspectiveCamera(45,1600/900,.01,1e5),world3D.cameraTarget=new THREE.Vector3(0,0,0),world3D.cameraDragAndRotate=!0,world3D.renderer=new THREE.WebGLRenderer({canvas:canvas3D[0],antialias:!0}),world3D.renderer.setSize(1600,900),world3D.raycaster=new THREE.Raycaster;var stats=new Stats;$("#mainAnimation").append(stats.dom),stats.dom.style.visibility="visible",Object.defineProperty(stats,"visible",{get:function(){return"visible"===stats.dom.style.visibility},set:function(e){stats.dom.style.visibility=e?"visible":"hidden"}}),stats.visible=!1;var directionalLight=new THREE.DirectionalLight(16777215,1);directionalLight.position.set(5,10,7.5),world3D.scene.add(directionalLight);var ambientLight=new THREE.AmbientLight(6710886);function myMouseDown(e){world3D.camera.isDraging=!0,world3D.camera.oldMouseX=stage2D.mouseX,world3D.camera.oldMouseY=stage2D.mouseY}function myMouseMove(e){if(world3D.camera.isDraging&&world3D.cameraDragAndRotate){var t=stage2D.mouseX,o=stage2D.mouseY;for(world3D.cameraPhi-=.005*(t-world3D.camera.oldMouseX);world3D.cameraPhi>Math.PI;)world3D.cameraPhi-=2*Math.PI;for(;world3D.cameraPhi<-Math.PI;)world3D.cameraPhi+=2*Math.PI;world3D.cameraTheta-=.005*(o-world3D.camera.oldMouseY),world3D.cameraTheta>.9999*Math.PI&&(world3D.cameraTheta=.9999*Math.PI),world3D.cameraTheta<1e-4*Math.PI&&(world3D.cameraTheta=1e-4*Math.PI),world3D.camera.oldMouseX=t,world3D.camera.oldMouseY=o}}function myMouseUp(e){world3D.camera.isDraging=!1}world3D.scene.add(ambientLight),world2D.btn3D.on("mousedown",myMouseDown),world2D.btn3D.on("pressmove",myMouseMove),world2D.btn3D.on("pressup",myMouseUp),world3D.camera.isDraging=!1,world3D.camera.oldMouseX=0,world3D.camera.oldMouseY=0,world2D.slCameraRR.minimum=1,world2D.slCameraRR.maximum=200,world2D.slCameraRR.value=80,world2D.slCameraRR.setLabel("遠近"),world3D.render=function(){world3D.cameraRR=world2D.slCameraRR.value,world3D.camera.position.x=world3D.cameraRR*Math.sin(world3D.cameraTheta)*Math.sin(world3D.cameraPhi)+world3D.cameraTarget.x,world3D.camera.position.z=world3D.cameraRR*Math.sin(world3D.cameraTheta)*Math.cos(world3D.cameraPhi)+world3D.cameraTarget.z,world3D.camera.position.y=world3D.cameraRR*Math.cos(world3D.cameraTheta)+world3D.cameraTarget.y,world3D.camera.lookAt(world3D.cameraTarget),world3D.renderer.render(world3D.scene,world3D.camera),stats.update()};var theWheel,timeRoll,timeBack0,fps=60,log=console.log,wheelR=10,playStage=0,dt=.1,tt=0,gmu=.15,v0=5,omega0=v0/2/wheelR,omega2=0,v2=0,inertia=wheelR*wheelR,cameraFollowRatio=1;function init(){ground.visible=!1;var e=new THREE.Object3D;e.position.y=-wheelR;var t=new TEACHER.ObjPlane(1e3,50,10066329,"y");t.position.x=-500,e.add(t),scene.add(e);for(var o=0;o<1e3;o+=50){var a=new TEACHER.ObjPicPlane(50,50,pics.ground,"y");a.position.x=o+25,e.add(a)}theWheel=new THREE.Object3D,scene.add(theWheel);for(var i=0;i<3;i++){let e;theWheel["ww"+(i+1)]=new THREE.Object3D,theWheel.add(theWheel["ww"+(i+1)]),0===i?e=13421772:1===i?e=16777215:2===i&&(e=65535);let t=new TEACHER.MSMat(e,2),o=new THREE.CylinderGeometry(wheelR,wheelR,4,32,1,!0),a=new THREE.Mesh(o,t);theWheel["ww"+(i+1)].add(a),o=new THREE.CylinderGeometry(wheelR-2.2,wheelR-2.2,4,32,1,!0),a=new THREE.Mesh(o,t),theWheel["ww"+(i+1)].add(a),o=new THREE.CylinderGeometry(wheelR,wheelR-2.2,.001,32,1,!0),(a=new THREE.Mesh(o,t)).position.y=2,theWheel["ww"+(i+1)].add(a),(a=new THREE.Mesh(o,t)).position.y=-2,theWheel["ww"+(i+1)].add(a),theWheel["ww"+(i+1)].rotation.x=Math.PI/2}for(i=0;i<6;i++){var r=new TEACHER.ObjSphere(1,1118481),n=new TEACHER.ObjSphere(1,1118481);r.position.x=n.position.x=(wheelR-1.1)*Math.sin(60*i*Math.PI/180),r.position.y=n.position.y=(wheelR-1.1)*Math.cos(60*i*Math.PI/180),r.position.z=1.5,n.position.z=-1.5,theWheel.add(r).add(n)}world2D.ch01.setLabel("視野跟隨"),world2D.ch01.checked=!0,world2D.sl01.setLabel("omega0(v0/R)"),world2D.sl01.maximum=2,world2D.sl01.minimum=-2,world2D.sl01.digitN=1,world2D.sl02.visible=world2D.sl03.visible=world2D.ch02.visible=!1,world2D.btnRight.visible=world2D.btnLeft.visible=world2D.btnUp.visible=world2D.btnDown.visible=!1,world2D.btn01.setLabel("GO!!"),world2D.btn01.on("click",clickGo),world2D.btn01.x+=150,world2D.btn02.visible=!1,setInterval(tick,1e3/fps)}function tick(){0===playStage?(theWheel.position.x=-30,omega0=world2D.sl01.value*v0/wheelR):1===playStage?(theWheel.position.x+=v0*dt,theWheel.rotation.z+=omega0*dt,theWheel.position.x>=0&&(playStage=2,tt=0,theWheel.rotation.z0=theWheel.rotation.z)):2===playStage?(tt+=dt,theWheel.position.x=v0*tt-.5*gmu*tt*tt,theWheel.rotation.z=theWheel.rotation.z0+omega0*tt-.5*gmu*wheelR*tt*tt/inertia,tt>=timeRoll?playStage=3:tt>timeBack0&&(playStage=4,v2=v0-gmu*timeBack0,omega2=omega0-gmu*wheelR*timeBack0/inertia)):3===playStage?(theWheel.position.x+=v2*dt,theWheel.rotation.z+=omega2*dt):4===playStage&&(theWheel.position.x+=v2*dt,theWheel.rotation.z+=omega2*dt),theWheel.ww1.visible=1===playStage||0===playStage,theWheel.ww2.visible=2===playStage,theWheel.ww3.visible=3===playStage||4===playStage,world2D.sl01.visible=0===playStage,world2D.ch01.checked&&cameraFollowRatio<1?cameraFollowRatio+=.05:!world2D.ch01.checked&&cameraFollowRatio>0&&(cameraFollowRatio-=.05),world3D.cameraTarget.x=cameraFollowRatio*theWheel.position.x,world3D.render(),world2D.stage.update()}function resetGame(){playStage=0,theWheel.rotation.z=0}function clickGo(e){0===playStage?(playStage=1,timeRoll=(v0-(v2=-(omega2=(inertia*omega0-wheelR*v0)/(inertia+wheelR*wheelR))*wheelR))/gmu,timeBack0=v0*v0/2/gmu,world2D.btn01.setLabel("reset")):resetGame()}MyJS.myResize();var TEACHER={ObjPlane:function(e,t,o,a,i){let r=this;r.mat=new TEACHER.MSMat(o,i),r.geo=new THREE.PlaneGeometry(e||10,t||10,1,1),r.mesh=new THREE.Mesh(r.geo,r.mat),"x"===a?r.mesh.rotation.y=.5*Math.PI:"y"===a&&(r.mesh.rotation.x=-.5*Math.PI),THREE.Object3D.call(this,r.geo,r.mat),r.add(r.mesh)}};TEACHER.ObjPlane.prototype=Object.create(THREE.Object3D.prototype),TEACHER.ObjPlane.prototype.constructor=TEACHER.ObjPlane,TEACHER.ObjCylinder=function(e,t,o,a,i,r){let n=this;n.mat=new TEACHER.MSMat(o,r),n.geo=new THREE.CylinderGeometry(e||10,e||10,t||10,32,2,a),n.mesh=new THREE.Mesh(n.geo,n.mat),"x"===i?n.mesh.rotation.z=-.5*Math.PI:"z"===i&&(n.mesh.rotation.x=.5*Math.PI),THREE.Object3D.call(this,n.geo,n.mat),n.add(n.mesh)},TEACHER.ObjCylinder.prototype=Object.create(THREE.Object3D.prototype),TEACHER.ObjCylinder.prototype.constructor=TEACHER.ObjCylinder,TEACHER.ObjSphere=function(e,t,o){let a=this;a.mat=new TEACHER.MSMat(t,o),a.geo=new THREE.SphereGeometry(e||10,32,16),a.mesh=new THREE.Mesh(a.geo,a.mat),THREE.Object3D.call(this,a.geo,a.mat),a.add(a.mesh)},TEACHER.ObjSphere.prototype=Object.create(THREE.Object3D.prototype),TEACHER.ObjSphere.prototype.constructor=TEACHER.ObjSphere,TEACHER.ObjBox=function(e,t,o,a,i){let r=this;r.mat=new TEACHER.MSMat(a,i),r.geo=new THREE.BoxGeometry(e||10,t||10,o||10),r.mesh=new THREE.Mesh(r.geo,r.mat),THREE.Object3D.call(this,r.geo,r.mat),r.add(r.mesh)},TEACHER.ObjBox.prototype=Object.create(THREE.Object3D.prototype),TEACHER.ObjBox.prototype.constructor=TEACHER.ObjBox,TEACHER.MSMat=function(e,t){THREE.MeshStandardMaterial.call(this,{color:e||16711935,roughness:.4,side:t||0})},TEACHER.MSMat.prototype=Object.create(THREE.MeshStandardMaterial.prototype),TEACHER.MSMat.prototype.constructor=TEACHER.MSMat,TEACHER.ObjPicPlane=function(e,t,o,a,i){let r=this,n=(new THREE.TextureLoader).load(o);r.mat=new THREE.MeshBasicMaterial({map:n,transparent:!0,side:i||0}),r.geo=new THREE.PlaneGeometry(e,t,1,1),r.mesh=new THREE.Mesh(r.geo,r.mat),"x"===a?r.mesh.rotation.y=.5*Math.PI:"y"===a&&(r.mesh.rotation.x=-.5*Math.PI),THREE.Object3D.call(this),r.add(r.mesh)},TEACHER.ObjPicPlane.prototype=Object.create(THREE.Object3D.prototype),TEACHER.ObjPicPlane.prototype.constructor=TEACHER.ObjPicPlane,TEACHER.ObjPicCylinder=function(e,t,o,a,i,r){let n=this,s=(new THREE.TextureLoader).load(o);n.mat=new THREE.MeshBasicMaterial({map:s,side:r||0}),n.geo=new THREE.CylinderGeometry(e||10,e||10,t||10,32,4,a),n.mesh=new THREE.Mesh(n.geo,n.mat),"x"===i?n.mesh.rotation.z=-.5*Math.PI:"z"===i?(n.mesh.rotation.y=.5*Math.PI,n.mesh.rotation.x=.5*Math.PI):"y"===i&&(n.mesh.rotation.y=.5*Math.PI),THREE.Object3D.call(this,n.geo,n.mat),n.add(n.mesh)},TEACHER.ObjPicCylinder.prototype=Object.create(THREE.Object3D.prototype),TEACHER.ObjPicCylinder.prototype.constructor=TEACHER.ObjPicCylinder,TEACHER.ObjPicSphere=function(e,t,o){let a=this,i=(new THREE.TextureLoader).load(t);a.mat=new THREE.MeshBasicMaterial({map:i,side:o||0}),a.geo=new THREE.SphereGeometry(e||10,32,16),a.mesh=new THREE.Mesh(a.geo,a.mat),THREE.Object3D.call(this,a.geo,a.mat),a.add(a.mesh)},TEACHER.ObjPicSphere.prototype=Object.create(THREE.Object3D.prototype),TEACHER.ObjPicSphere.prototype.constructor=TEACHER.ObjPicSphere,TEACHER.ObjArrow=function(e,t){let o=new THREE.MeshStandardMaterial({color:t||16711935,roughness:.4}),a=new THREE.ConeGeometry(e||10,40,32);this.ArrowHead=new THREE.Mesh(a,o),this.ArrowHead.position.y=80,a=new THREE.CylinderGeometry(.5*(e||10),.5*(e||10),60,32,2),this.ArrowBody=new THREE.Mesh(a,o),this.ArrowBody.position.y=30,THREE.Object3D.call(this),this.rotX=new THREE.Object3D,this.rotY=new THREE.Object3D,this.add(this.rotY),this.rotY.add(this.rotX),this.rotX.add(this.ArrowBody),this.rotX.add(this.ArrowHead)},TEACHER.ObjArrow.prototype=Object.create(THREE.Object3D.prototype),TEACHER.ObjArrow.prototype.constructor=TEACHER.ObjArrow,TEACHER.ObjArrow.prototype.setArrow=function(e,t,o){let a=e*e+t*t+o*o,i=Math.sqrt(a);a>0?(this.rotX.visible=!0,this.rotX.scale.y=i/100):this.rotX.visible=!1,this.rotX.rotation.x=Math.acos(t/i),this.rotY.rotation.y=Math.atan2(e,o)},TEACHER.ObjSpring=function(e,t,o,a,i){let r=e||20;this.L0=r;let n=[],s=a||5,l=t||5,c=o||.5;n.push(new THREE.Vector3(0,0,0)),n.push(new THREE.Vector3(0,.05*r,0));for(var d=0;d<=16*s;d++)n.push(new THREE.Vector3(l*Math.cos(2*d*Math.PI/16),r*(.05+.9*d/s/16),l*Math.sin(2*d*Math.PI/16)));n.push(new THREE.Vector3(0,.95*r,0)),n.push(new THREE.Vector3(0,r,0));let h=new THREE.CatmullRomCurve3(n),E=new THREE.MeshStandardMaterial({color:i||16711935,roughness:.4}),w=new THREE.TubeGeometry(h,500,c,12);this.mesh=new THREE.Mesh(w,E),THREE.Object3D.call(this),this.rotX=new THREE.Object3D,this.rotY=new THREE.Object3D,this.add(this.rotY),this.rotY.add(this.rotX),this.rotX.add(this.mesh)},TEACHER.ObjSpring.prototype=Object.create(THREE.Object3D.prototype),TEACHER.ObjSpring.prototype.constructor=TEACHER.ObjSpring,TEACHER.ObjSpring.prototype.setSpring=function(e,t,o){let a=e*e+t*t+o*o,i=Math.sqrt(a);a>0?(this.rotX.visible=!0,this.rotX.scale.y=i/this.L0):this.rotX.visible=!1,this.rotX.rotation.x=Math.acos(t/i),this.rotY.rotation.y=Math.atan2(e,o)},TEACHER.Points=function(e,t,o){let a=this,i=t||1,r=e||16711935,n=new THREE.Color(r);a.nnMax=o||1e4,a.nnNow=0,a.geometry=new THREE.BufferGeometry,a.positions=[],a.geometry.setAttribute("position",new THREE.Float32BufferAttribute(a.positions,3)),a.geometry.computeBoundingSphere();let s=new THREE.PointsMaterial({size:i,map:a.createCanvasMaterial("#"+n.getHexString(),64),transparent:!0,depthWrite:!1});THREE.Points.call(this,a.geometry,s)},TEACHER.Points.prototype=Object.create(THREE.Points.prototype),TEACHER.Points.prototype.constructor=TEACHER.Points,TEACHER.Points.prototype.createCanvasMaterial=function(e,t){var o=document.createElement("canvas");o.width=o.height=t;var a=o.getContext("2d");a.imageSmoothingEnabled=!1;var i=new THREE.Texture(o),r=t/2;return a.beginPath(),a.arc(r,r,t/2-3,0,2*Math.PI,!1),a.closePath(),a.fillStyle=e,a.fill(),i.needsUpdate=!0,i},TEACHER.Points.prototype.addPoint=function(e,t,o){let a=this;a.nnNow<a.nnMax?a.nnNow++:(log("TEACHER.Points 到達最大點數"),a.positions.shift(),a.positions.shift(),a.positions.shift()),a.positions.push(e,t,o),a.geometry.setAttribute("position",new THREE.Float32BufferAttribute(a.positions,3)),a.geometry.computeBoundingSphere(),a.geometry.attributes.position.needsUpdate=!0},TEACHER.Points.prototype.clear=function(){let e=this;e.positions=[],e.geometry.setAttribute("position",new THREE.Float32BufferAttribute(e.positions,3)),e.geometry.computeBoundingSphere(),e.geometry.attributes.position.needsUpdate=!0,e.nnNow=0},TEACHER.Line=function(e,t){let o=this;o.nnMax=t||1e4,o.nnNow=0;let a=new THREE.MeshBasicMaterial({color:e||16711935});o.geometry=new THREE.BufferGeometry,o.positions=[],o.geometry.setAttribute("position",new THREE.Float32BufferAttribute(o.positions,3)),o.geometry.computeBoundingSphere(),o.geometry.dynamic=!0,THREE.Line.call(this,o.geometry,a)},TEACHER.Line.prototype=Object.create(THREE.Line.prototype),TEACHER.Line.prototype.constructor=TEACHER.Line,TEACHER.Line.prototype.addPoint=function(e,t,o){let a=this;a.nnNow<a.nnMax?a.nnNow++:(log("TEACHER.Line 到達最大點數"),a.positions.shift(),a.positions.shift(),a.positions.shift()),a.positions.push(e,t,o),a.geometry.setAttribute("position",new THREE.Float32BufferAttribute(a.positions,3)),a.geometry.computeBoundingSphere(),a.geometry.attributes.position.needsUpdate=!0},TEACHER.Line.prototype.clear=function(){let e=this;e.positions=[],e.geometry.setAttribute("position",new THREE.Float32BufferAttribute(e.positions,3)),e.geometry.computeBoundingSphere(),e.geometry.attributes.position.needsUpdate=!0,e.nnNow=0},TEACHER.ObjTextPlane=function(e,t,o,a,i,r){let n=this,s=Math.round(Math.log2(e/t));log(s);let l=$("<canvas>").attr("width",String(128*Math.pow(2,s))).attr("height","128");n.stage=new createjs.Stage(l[0]);let c=new createjs.Container;if(r){let e=new createjs.Shape,t=new THREE.Color(r);e.graphics.c().f("#"+t.getHexString()).dr(0,0,128*Math.pow(2,s),128),c.addChild(e)}n.ctext=new createjs.Text;let d=new THREE.Color(i||16777215);n.ctext.color="#"+d.getHexString(),n.ctext.font="96px Arial",n.ctext.text=o||"",n.ctext.textAlign="center",n.ctext.textBaseline="middle",n.ctext.x=128*Math.pow(2,s)/2,n.ctext.y=64,c.addChild(n.ctext),n.stage.addChild(c),n.stage.update(),n.texture=new THREE.Texture(l[0]);var h=new THREE.MeshBasicMaterial({map:n.texture,transparent:!0}),E=new THREE.PlaneGeometry(e||10,t||10,1,1);n.texture.needsUpdate=!0,n.plane1=new THREE.Mesh(E,h),n.plane2=new THREE.Mesh(E,h),n.plane2.rotation.y=Math.PI;let w=new THREE.Object3D;w.add(n.plane1).add(n.plane2),"x"===a?w.rotation.y=.5*Math.PI:"y"===a&&(w.rotation.x=-.5*Math.PI),THREE.Object3D.call(this),n.add(w)},TEACHER.ObjTextPlane.prototype=Object.create(THREE.Object3D.prototype),TEACHER.ObjTextPlane.prototype.constructor=TEACHER.ObjTextPlane,TEACHER.ObjTextPlane.prototype.setText=function(e){let t=this;t.ctext.text=e,t.stage.update(),t.texture.needsUpdate=!0};var skyBox=new THREE.Object3D;skyBox.wallU=new TEACHER.ObjPicPlane(1e4,1e4,pics.wallU,"y",1),skyBox.wallD=new TEACHER.ObjPicPlane(1e4,1e4,pics.wallD,"y",0),skyBox.wallS=new TEACHER.ObjPicCylinder(5e3,1e4,pics.wallSide,!0,"y",1),skyBox.wallU.position.y=5e3,skyBox.wallD.position.y=-5e3,skyBox.add(skyBox.wallU).add(skyBox.wallD).add(skyBox.wallS),world3D.scene.add(skyBox);var ground=new TEACHER.ObjPicPlane(100,100,pics.ground,"y");world3D.scene.add(ground);var logo=new TEACHER.ObjPicPlane(100,12.5,pics.logo,"z",2);function getMouse3D(e,t){let o,a=e||"y",i=new THREE.Vector3;"x"===a?o=new THREE.Vector3(1,0,0):"y"===a?o=new THREE.Vector3(0,1,0):"z"===a?o=new THREE.Vector3(0,0,1):log("錯誤!!");let r=new THREE.Vector2;return r.x=world2D.stage.mouseX/1600*2-1,r.y=-world2D.stage.mouseY/900*2+1,world3D.raycaster.setFromCamera(r,world3D.camera),world3D.raycaster.ray.intersectPlane(new THREE.Plane(o),i),i}logo.position.z=-50,logo.position.y=6.25,world3D.scene.add(logo),init();