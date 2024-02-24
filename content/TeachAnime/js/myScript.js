function log(x){console.log(x);}


//-- html 統一作業--//

(function(){
	//head 統一加入 meta
	var googleAnalyticsCode='<!-- Global site tag (gtag.js) - Google Analytics --><script async src="https://www.googletagmanager.com/gtag/js?id=UA-2774096-1"></script><script>window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments);}gtag("js", new Date());gtag("config", "UA-2774096-1");</script>';
	$('head').prepend('<meta charset="utf-8" />')
				.prepend('<meta http-equiv="X-UA-Compatible" content="IE=edge" />')
				.prepend('<meta name= "viewport" content= "width=device-width, user-scalable=no, shrink-to-fit=no, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0" />')
				.prepend(googleAnalyticsCode);

	//--取出 body#content 並置換--//
	//1.取出內容
	var content = $('#oldContent').html();
	//2.移除
	$('#oldContent').remove();
	//3.加入wrapper
	$('body').prepend('<div id="wrapper"></div>');
	//4.加入sideBaar and content wrapper
	$('#wrapper').append('<!-- Sidebar Here!!!--><div id="sidebar-wrapper"></div><!-- /#sidebar-wrapper -->')
					.append('<!-- Page Content --><div id="page-content-wrapper"><div class="container-fluid"><div class="row"><div class="col-lg-12" id="newContent"><!--Fun Physics Content Here!!!--></div><!--end content--></div></div></div><!-- /#page-content-wrapper -->');
	//5.加入內容					
	$('#newContent').append(content);
	
	//img統一格式
	$('img').addClass('img-responsive').attr('border','0');


	//產生 menu button
	$("#page-content-wrapper").prepend('<a href="#menu-toggle" class="btn btn-info" id="menu-toggle">目錄</a>');
	//定義 menu-toggle
	$("#menu-toggle").click(function(e) {
	        e.preventDefault();
	        $("#wrapper").toggleClass("toggled");
	});
	//定義 menu-toggle2 只適用於版權頁
	$("#menu-toggle2").click(function(e) {
	        e.preventDefault();
	        $("#wrapper").toggleClass("toggled");
	});

	//iframe full screen
	var iframeFSBtn = $("#iframeFullScreen");
	if (!(document.fullscreenEnabled || document.webkitFullscreenEnabled || document.mozFullScreenEnabled || document.msFullscreenEnabled)) {
					    iframeFSBtn.css('display','none');
	}
	if(iframeFSBtn.length>0){//有按鈕
		iframeFSBtn.css('margin','0 0 20px 0')
			.click(function(){
				// check if fullscreen mode is available
					  if (document.fullscreenEnabled || 
					    document.webkitFullscreenEnabled || 
					    document.mozFullScreenEnabled ||
					    document.msFullscreenEnabled) {
					    
					    // which element will be fullscreen
					    var iframe = document.querySelector('#iframe');
					    // Do fullscreen
					    if (iframe.requestFullscreen) {
					      iframe.requestFullscreen();
					    } else if (iframe.webkitRequestFullscreen) {
					      iframe.webkitRequestFullscreen();
					    } else if (iframe.mozRequestFullScreen) {
					      iframe.mozRequestFullScreen();
					    } else if (iframe.msRequestFullscreen) {
					      iframe.msRequestFullscreen();
					    }
					  }
					  else {
					    document.querySelector('.error').innerHTML = 'Your browser is not supported';
					    alert('Your browser is not supported full screen!!');
					  }
			});
	}


	// detect enter or exit fullscreen mode
	document.addEventListener('webkitfullscreenchange', fullscreenChange);
	document.addEventListener('mozfullscreenchange', fullscreenChange);
	document.addEventListener('fullscreenchange', fullscreenChange);
	document.addEventListener('MSFullscreenChange', fullscreenChange);
	function fullscreenChange() {
	  if (document.fullscreenEnabled ||
	       document.webkitIsFullScreen || 
	       document.mozFullScreen ||
	       document.msFullscreenElement) {
	    console.log('enter fullscreen');
	  }
	  else {
	    console.log('exit fullscreen');
	  }
	  // force to reload iframe once to prevent the iframe source didn't care about trying to resize the window
	  // comment this line and you will see
	  var iframe = document.querySelector('#iframe');
	//  iframe.src = iframe.src;  //重新載入
	}

	
})();







//generate sideBar menu
(function(){
	//generateAlist
	var generateAList = function(_name, _url, _id, _itemArray){

		//icon
		var len=0;
		if(_itemArray){len=_itemArray.length;}log(len);
		var iconString='';
		for(var i=0;i<len;i++){
			if(_itemArray[i]==='html5'){
				iconString+='<i class="fa fa-html5" aria-hidden="true"></i>';
			}else if(_itemArray[i]==='flash'){
				iconString+='<i class="fa fa-facebook" aria-hidden="true"></i>';
			}else if(_itemArray[i]==='copyright'){//版權宣告
				iconString+='<i class="fa fa-copyright" aria-hidden="true"></i>';
			}else if(_itemArray[i]==='youtube'){//HTML5 -> MP4 取代
				iconString+='<i class="fa fa-youtube-play" aria-hidden="true"></i>';
			}
		}

		



		if(_id === $('meta[name="description"]').attr("content")){//此頁，不連結
			var li=$('<li class="pageNow">').append(iconString+'&nbsp;&nbsp;'+_name);
		}else{
			var li=$('<li>').append('<a href='+'../'+_url+'>'+iconString+'&nbsp;&nbsp;'+_name+'</a>');
			//換頁時紀錄 scrollTop
			li.mousedown(function(){
				if (typeof(Storage) !== "undefined") {
				    sessionStorage.setItem("funExpScroll", $('#sidebar-wrapper')[0].scrollTop);
				    
				}
			});
		}
		
		return li;
	}

	var ul=$('<ul class="sidebar-nav" id="mySidebar">')
				.html('<li class="sidebar-brand">教學動畫</li>');
	$('#sidebar-wrapper').append(ul[0]);
	$('#mySidebar').append(generateAList('得獎作品','honor/honor.html', 'honor'))
					.append('<li class="line">--- 版權宣告 ---</li>')
					.append(generateAList('版權宣告','copyRight/copyRight.html', 'copyRight',['copyright']))
					.append('<li class="line">--- 運動學 ---</li>')
					//.append(generateAList('郭靖抗元','theJump/theJump.html', 'theJump',['flash']))
					.append(generateAList('飛機投彈','airplaneBoom2013/airplaneBoom2013.html', 'airplaneBoom2013',['flash']))
					//.append(generateAList('相對運動','relativeMotion/relativeMotion.html', 'relativeMotion',['flash']))
					.append(generateAList('安全拋物線','safeParabola2023/safeParabola2023.html', 'safeParabola2023',['html5']))
					.append(generateAList('相對運動','relativeMotion2023/relativeMotion2023.html', 'relativeMotion2023',['html5']))
					.append(generateAList('射猴子','shootMonkey2023/shootMonkey2023.html', 'shootMonkey2023',['html5']))
					.append(generateAList('斜面上的斜拋','projectileOnBevel2023/projectileOnBevel2023.html', 'projectileOnBevel2023',['html5']))
					.append(generateAList('斜面上的投影','shadowOnBevel2023/shadowOnBevel2023.html', 'shadowOnBevel2023',['html5']))
					.append(generateAList('拋體向量圖','vectorDiagramOfProjectile2023/vectorDiagramOfProjectile2023.html', 'vectorDiagramOfProjectile2023',['html5']))
					//.append(generateAList('簡諧運動分析','SHMrva/SHMrva.html', 'SHMrva',['flash']))
					.append(generateAList('簡諧運動','SHM2022/SHM2022.html', 'SHM2022',['html5']))
					.append(generateAList('鉛直彈簧SHM','vSHM/vSHM.html', 'vSHM',['flash']))
					.append(generateAList('彈簧力學能守恆','springEnergy/springEnergy.html', 'springEnergy',['flash']))
					.append(generateAList('飛輪組','rotationWheel/rotationWheel.html', 'rotationWheel',['flash']))
					.append(generateAList('終端速度','terminalVelocity2023/terminalVelocity2023.html', 'terminalVelocity',['html5']))
					.append('<li class="line">--- 靜力學 ---</li>')
					.append(generateAList('滑下或倒下','slipOrFall2023/slipOrFall2023.html', 'slipOrFall2023',['html5']))
					.append(generateAList('堆木塊','stackBlock2023/stackBlock2023.html', 'stackBlock2023',['html5']))
					.append('<li class="line">--- 動力學 ---</li>')
//					.append(generateAList('牛頓第三定律','thirdLAW/thirdLAW.html', 'thirdLAW',['flash']))
//					.append(generateAList('壓車過彎','theBike2014/theBike2014.html', 'theBike2014',['flash']))
					.append(generateAList('阿特伍機','atwoodMachine2024/atwoodMachine2024.html', 'atwoodMachine2024',['html5']))
					.append(generateAList('輸送帶與摩擦力','conveyorFriction2023/conveyorFriction2023.html', 'conveyorFriction2023',['html5']))
					.append(generateAList('過彎摔車','bikeAndDriver2023/bikeAndDriver2023.html', 'bikeAndDriver2023',['html5']))
					.append(generateAList('斜拋空中爆','projectileAndExplode2024/projectileAndExplode2024.html', 'projectileAndExplode2024',['html5']))
					.append(generateAList('二物彈簧SHM','shmM1M2/shmM1M2.html', 'shmM1M2',['flash']))
					.append(generateAList('錐動擺的角動量','angularMomentumOfCircle2023/angularMomentumOfCircle2023.html', 'angularMomentumOfCircle2023',['html5']))
					.append(generateAList('行星軌道N次方','orbitalGravityN2024/orbitalGravityN2024.html', 'orbitalGravityN2024',['html5']))
					.append(generateAList('雙星互繞','twoStar/twoStar.html', 'twoStar',['flash']))
					//.append(generateAList('鉛直半圓軌道運動','verticalHalfCircle/verticalHalfCircle.html', 'verticalHalfCircle',['flash']))
					.append(generateAList('鉛直半圓軌道運動','verticalHalfCircle2023/verticalHalfCircle2023.html', 'verticalHalfCircle2023',['html5']))
//					.append(generateAList('鉛直面圓周運動','verticalCircle/verticalCircle.html', 'verticalCircle',['flash']))
//					.append(generateAList('衛星受微小摩擦力','satelliteFk/satelliteFk.html', 'satelliteFk',['flash']))
					.append(generateAList('環與球碰撞','ringBall/ringBall.html', 'ringBall',['flash']))
					.append(generateAList('向左滾？向右滾？','theAxis/theAxis.html', 'theAxis',['flash']))
				//	.append(generateAList('科氏力2009','CoriolisForce/CoriolisForce.html', 'CoriolisForce',['flash']))
				//	.append(generateAList('科氏力2013','CoriolisForce2013/CoriolisForce2013.html', 'CoriolisForce2013',['flash']))
					.append(generateAList('離心力與柯氏力','centrifugalForce2022/centrifugalForce2022.html', 'centrifugalForce2022',['html5']))
					.append(generateAList('直線碰撞','linearCollision2023/linearCollision2023.html', 'linearCollision2023',['html5']))
					.append(generateAList('平面彈性碰撞','collision2D2023/collision2D2023.html', 'collision2D2023',['html5']))
					.append('<li class="line">--- 彈簧與木塊 ---</li>')
					.append(generateAList('水平彈簧雙振子','springBlockAH/springBlockAH.html', 'springBlockAH',['html5']))
					.append(generateAList('彈簧木塊細線','springBlockAndWire2024/springBlockAndWire2024.html', 'springBlockAndWire2024',['html5']))
					.append(generateAList('落下物體壓彈簧','springBlockCV/springBlockCV.html', 'springBlockCV',['html5']))
					.append(generateAList('鉛直雙振子壓放','springBlockDVPress/springBlockDVPress.html', 'springBlockDVPress',['html5']))
					.append(generateAList('阻尼振盪','dampingOscillation2022/dampingOscillation2022.html', 'dampingOscillation2022',['html5']))
					.append(generateAList('受迫振盪','forcedOscillation2022/forcedOscillation2022.html', 'forcedOscillation2022',['html5']))
					.append(generateAList('耦合振盪','couplingOscillation2022/couplingOscillation2022.html', 'couplingOscillation2022',['html5']))
					.append(generateAList('彈簧阿特伍機','springAtwood2023/springAtwood2023.html', 'springAtwood2023',['html5']))
					.append('<li class="line">--- 剛體碰撞 ---</li>')
					.append(generateAList('質點撞棒','ballHitRod/ballHitRod.html', 'ballHitRod',['html5']))
					.append(generateAList('彈跳球','superBall2022/superBall2022.html', 'superBall2022',['html5']))
					.append('<li class="line">--- 熱學 ---</li>')
					.append(generateAList('焦耳實驗','JouleExperiment/JouleExperiment.html', 'JouleExperiment',['flash']))
					.append(generateAList('熱運動','thermal3D/thermal3D.html', 'thermal3D',['flash']))
					.append('<li class="line">--- 波動 ---</li>')
					.append(generateAList('基礎波動','wave2DBasic/wave2DBasic.html', 'wave2DBasic',['html5']))
					.append(generateAList('駐波的產生','wave2DStandingWave/wave2DStandingWave.html', 'wave2DStandingWave',['html5']))
					.append(generateAList('管內縱波','wave2DLongitudinal/wave2DLongitudinal.html', 'wave2DLongitudinal',['html5']))
					.append(generateAList('A繩入B繩','wave2DAtoB/wave2DAtoB.html', 'wave2DAtoB',['html5']))
					.append(generateAList('橫波變縱波','waveT2WaveL/waveT2WaveL.html', 'waveT2WaveL',['html5']))
					.append(generateAList('橫波波函數','waveFunction/waveFunction.html', 'waveFunction',['html5']))
					.append(generateAList('橫波的力學能','waveEnergyOnString/waveEnergyOnString.html', 'waveEnergyOnString',['html5']))
					.append(generateAList('雙點波源干涉','interferenceTwoSource2023/interferenceTwoSource2023.html', 'interferenceTwoSource2023',['html5']))
					.append('<li class="line">--- 聲音 ---</li>')
					.append(generateAList('共鳴氣柱實驗','resonanceExperiment/resonanceExperiment.html', 'resonanceExperiment',['flash']))
					.append(generateAList('波以耳實驗','bell/bell.html', 'bell',['flash']))
					.append(generateAList('聲速','speedSound/speedSound.html', 'speedSound',['flash']))
					.append(generateAList('回聲','backSound/backSound.html', 'backSound',['flash']))
					.append(generateAList('都卜勒效應','Doppler2013/Doppler2013.html', 'Doppler2013',['flash']))
					.append(generateAList('聲音三要素','soundCHCH/soundCHCH.html', 'soundCHCH',['flash']))
					.append(generateAList('頻譜與波形','soundWaveform/soundWaveform.html', 'soundWaveform',['flash']))
					.append(generateAList('方波傅立葉','fourierSqareWave/fourierSqareWave.html', 'fourierSqareWave',['html5']))
					.append('<li class="line">--- 幾何光學 ---</li>')
					.append(generateAList('平面鏡成像','mirrorImage2021/mirrorImage2021.html', 'mirrorImage2021',['html5']))
					.append(generateAList('兩人同鏡','twoPersonOneMirror2021/twoPersonOneMirror2021.html', 'twoPersonOneMirror2021',['html5']))
					//.append(generateAList('平面鏡成像2','mirrorImage2/mirrorImage2.html', 'mirrorImage2',['flash']))
					//.append(generateAList('雙鏡成多像','doubleMirrorImage/doubleMirrorImage.html', 'doubleMirrorImage',['flash']))
					.append(generateAList('雙鏡成多像','doubleMirrorImage2021/doubleMirrorImage2021.html', 'doubleMirrorImage2021',['html5']))
					.append(generateAList('曲面鏡反射','curveMirrorReflection2021/curveMirrorReflection2021.html', 'curveMirrorReflection2021',['html5']))
					.append(generateAList('成像作圖','imageDrawing2023/imageDrawing2023.html', 'imageDrawing2023',['html5']))
					//.append(generateAList('球面鏡成像','sphererMirrorsImage/sphererMirrorsImage.html', 'sphererMirrorsImage',['flash']))
					//.append(generateAList('折射的原因','deflection2006/deflection2006.html', 'deflection2006',['flash']))
					.append(generateAList('折射的原因','deflection2023/deflection2023.html', 'deflection2023',['html5']))
					.append(generateAList('多層折射','mutiLayer/mutiLayer.html', 'mutiLayer',['flash']))
					.append(generateAList('薄透鏡成像','lensImage/lensImage.html', 'lensImage',['flash']))
					//.append(generateAList('物與成像','objectAndImage/objectAndImage.html', 'objectAndImage',['html5']))
					//.append(generateAList('透鏡成像-透鏡移動','lenImageLenMove/lenImageLenMove.html', 'lenImageLenMove',['flash']))
					//.append(generateAList('透鏡成像-物速像速','lensImagePQV/lensImagePQV.html', 'lensImagePQV',['flash']))
					.append(generateAList('成像之舞','dancingImage/dancingImage.html', 'dancingImage',['html5']))
					.append(generateAList('透鏡遮一半','lensFilterHalf2021/lensFilterHalf2021.html', 'lensFilterHalf2021',['html5']))
					.append(generateAList('視差法找成像位置','opticalParallax/opticalParallax.html', 'opticalParallax',['html5']))
					.append(generateAList('光學儀器','opticalInstruments2021/opticalInstruments2021.html', 'opticalInstruments2021',['html5']))
					.append(generateAList('虹與霓','rainbow3D2022/rainbow3D2022.html', 'rainbow3D2022',['html5']))
					.append('<li class="line">--- 波動光學 ---</li>')
				//	.append(generateAList('雙狹縫干涉','diffraction2006/diffraction2006.html', 'diffraction2006',['flash']))
					.append(generateAList('雙狹縫繞射','doubleSlit2016/doubleSlit2016.html', 'doubleSlit2016',['html5']))
					.append(generateAList('干涉繞射條紋','diffractionPattern2023/diffractionPattern2023.html', 'diffractionPattern2023',['html5']))
					.append(generateAList('干涉繞射的強度','diffractionIntensity2022/diffractionIntensity2022.html', 'diffractionIntensity2022',['html5']))
				//	.append(generateAList('干涉繞射的強度','diffractionIntensity/diffractionIntensity.html', 'diffractionIntensity',['flash']))
					.append(generateAList('轉狹縫轉雷射','rotateSlitLaserScreen/rotateSlitLaserScreen.html', 'rotateSlitLaserScreen',['html5']))
					.append(generateAList('光的三原色','color3Origin2022/color3Origin2022.html', 'color3Origin2022',['html5']))
					.append('<li class="line">--- 電磁學 ---</li>')
					.append(generateAList('ILB LvB','ILBLVB2022/ILBLVB2022.html', 'ILBLVB2022',['html5']))
					.append(generateAList('電場單擺','electricPendulum/electricPendulum.html', 'electricPendulum',['flash']))
					.append(generateAList('帶電粒子的運動','qEqvB/qEqvB.html', 'qEqvB',['flash']))
					.append(generateAList('電磁感應','electromagneticInduction2022/electromagneticInduction2022.html', 'electromagneticInduction2022',['html5']))
					.append(generateAList('電動機','dcMotor2022/dcMotor2022.html', 'dcMotor2022',['html5']))
					.append(generateAList('發電機','acGenerator2022/acGenerator2022.html', 'acGenerator2022',['html5']))
				//	.append(generateAList('直流電動機','dcMotor/dcMotor.html', 'dcMotor',['flash']))
				//	.append(generateAList('交流發電機','acGenerator/acGenerator.html', 'acGenerator',['flash']))
					.append(generateAList('電磁波與偏極柵','EMWandPolarization2023/EMWandPolarization2023.html', 'EMWandPolarization2023',['html5']))
					.append('<li class="line">--- 近代物理 ---</li>')
					.append(generateAList('光電效應實驗','photoelectricEffectExperiment/photoelectricEffectExperiment.html', 'photoelectricEffectExperiment',['flash']))
					.append(generateAList('原子軌域的形狀','allHatom/allHatom.html', 'allHatom',['flash']))
					.append(generateAList('EPR實驗','EPRexperimant2022/EPRexperimant2022.html', 'EPRexperimant2022',['html5']))
					.append(generateAList('1s2s躍遷禁止','forbidden1s2s/forbidden1s2s.html', 'forbidden1s2s',['html5']))
					.append(generateAList('混成軌域','orbitalHybridization2023/orbitalHybridization2023.html', 'orbitalHybridization2023',['html5']))
					.append('<li class="line">--- 其它 ---</li>')
					.append(generateAList('永動機','cork/cork.html', 'cork',['flash']))
					.append(generateAList('滾動摩擦','tire/tire.html', 'tire',['flash']))
					.append(generateAList('輪的純滾動','IPHO2008/IPHO2008.html', 'IPHO2008',['html5']))
					.append(generateAList('雷射冷卻','ultraCold/ultraCold.html', 'ultraCold',['flash']))
					.append(generateAList('面截方體','cubeAndPlane/cubeAndPlane.html', 'cubeAndPlane',['flash']))
					.append(generateAList('天空中的日行跡','Analemma/Analemma.html', 'Analemma',['html5']))
					.append(generateAList('追蹤曲線','pursuitCurves2023/pursuitCurves2023.html', 'pursuitCurves2023',['html5']))
					.append('<li class="line">--- 計算模擬 ---</li>')
					.append(generateAList('彈簧質量SHM','springMassSHM/springMassSHM.html', 'springMassSHM',['flash']));
					





	//scroll to 剛才位置
	if (sessionStorage.funExpScroll) {
    	var sTop = Number(sessionStorage.funExpScroll);
		$('#sidebar-wrapper')[0].scrollTop = sTop;
	}
	

})();


/*
* 監聽 div #newContent resize
* 為了 responsive mp4 video
* copy from "CSS-Element-Queries" http://marcj.github.io/css-element-queries/
*/
//****public*****//
/*
 https://github.com/Mr0grog/element-query/blob/master/LICENSE

 @param {HTMLElement} element
 @param {*} value
 @returns {*}
*/
(function(d,a){"function"===typeof define&&define.amd?define(a):"object"===typeof exports?module.exports=a():d.ResizeSensor=a()})(this,function(){function d(b,a){var u=Object.prototype.toString.call(b),d=0,g=b.length;if("[object Array]"===u||"[object NodeList]"===u||"[object HTMLCollection]"===u||"undefined"!==typeof jQuery&&b instanceof jQuery||"undefined"!==typeof Elements&&b instanceof Elements)for(;d<g;d++)a(b[d]);else a(b)}var a=window.requestAnimationFrame||window.mozRequestAnimationFrame||
window.webkitRequestAnimationFrame||function(a){return window.setTimeout(a,20)},l=function(b,p){function u(){var e=[];this.add=function(a){e.push(a)};var a,b;this.call=function(){a=0;for(b=e.length;a<b;a++)e[a].call()};this.remove=function(u){var d=[];a=0;for(b=e.length;a<b;a++)e[a]!==u&&d.push(e[a]);e=d};this.length=function(){return e.length}}function x(a,b){return a.currentStyle?a.currentStyle[b]:window.getComputedStyle?window.getComputedStyle(a,null).getPropertyValue(b):a.style[b]}function g(b,
d){if(!b.resizedAttached)b.resizedAttached=new u,b.resizedAttached.add(d);else if(b.resizedAttached){b.resizedAttached.add(d);return}b.resizeSensor=document.createElement("div");b.resizeSensor.className="resize-sensor";b.resizeSensor.style.cssText="position: absolute; left: 0; top: 0; right: 0; bottom: 0; overflow: hidden; z-index: -1; visibility: hidden;";b.resizeSensor.innerHTML='<div class="resize-sensor-expand" style="position: absolute; left: 0; top: 0; right: 0; bottom: 0; overflow: hidden; z-index: -1; visibility: hidden;"><div style="position: absolute; left: 0; top: 0; transition: 0s;"></div></div><div class="resize-sensor-shrink" style="position: absolute; left: 0; top: 0; right: 0; bottom: 0; overflow: hidden; z-index: -1; visibility: hidden;"><div style="position: absolute; left: 0; top: 0; transition: 0s; width: 200%; height: 200%"></div></div>';
b.appendChild(b.resizeSensor);"static"==x(b,"position")&&(b.style.position="relative");var p=b.resizeSensor.childNodes[0],g=p.childNodes[0],r=b.resizeSensor.childNodes[1],f=function(){g.style.width="100000px";g.style.height="100000px";p.scrollLeft=1E5;p.scrollTop=1E5;r.scrollLeft=1E5;r.scrollTop=1E5};f();var l=!1,w=function(){b.resizedAttached&&(l&&(b.resizedAttached.call(),l=!1),a(w))};a(w);var v,c,q,h,k=function(){if((q=b.offsetWidth)!=v||(h=b.offsetHeight)!=c)l=!0,v=q,c=h;f()},n=function(c,b,h){c.attachEvent?
c.attachEvent("on"+b,h):c.addEventListener(b,h)};n(p,"scroll",k);n(r,"scroll",k)}d(b,function(b){g(b,p)});this.detach=function(a){l.detach(b,a)}};l.detach=function(b,a){d(b,function(b){if(b.resizedAttached&&"function"==typeof a&&(b.resizedAttached.remove(a),b.resizedAttached.length()))return;b.resizeSensor&&(b.contains(b.resizeSensor)&&b.removeChild(b.resizeSensor),delete b.resizeSensor,delete b.resizedAttached)})};return l});
(function(d,a){"function"===typeof define&&define.amd?define(["./ResizeSensor.js"],a):"object"===typeof exports?module.exports=a(require("./ResizeSensor.js")):d.ElementQueries=a(d.ResizeSensor)})(this,function(d){var a=function(){function b(c){c||(c=document.documentElement);c=window.getComputedStyle(c,null).fontSize;return parseFloat(c)||16}function p(c,a){var h=a.split(/\d/),h=h[h.length-1];a=parseFloat(a);switch(h){case "px":return a;case "em":return a*b(c);case "rem":return a*b();case "vw":return a*
document.documentElement.clientWidth/100;case "vh":return a*document.documentElement.clientHeight/100;case "vmin":case "vmax":return a*(0,Math["vmin"===h?"min":"max"])(document.documentElement.clientWidth/100,document.documentElement.clientHeight/100);default:return a}}function l(c){this.element=c;this.options={};var b,a,k=0,n=0,d,f,t,m,e;this.addOption=function(c){var b=[c.mode,c.property,c.value].join();this.options[b]=c};var g=["min-width","min-height","max-width","max-height"];this.call=function(){k=
this.element.offsetWidth;n=this.element.offsetHeight;t={};for(b in this.options)this.options.hasOwnProperty(b)&&(a=this.options[b],d=p(this.element,a.value),f="width"==a.property?k:n,e=a.mode+"-"+a.property,m="","min"==a.mode&&f>=d&&(m+=a.value),"max"==a.mode&&f<=d&&(m+=a.value),t[e]||(t[e]=""),m&&-1===(" "+t[e]+" ").indexOf(" "+m+" ")&&(t[e]+=" "+m));for(var c in g)g.hasOwnProperty(c)&&(t[g[c]]?this.element.setAttribute(g[c],t[g[c]].substr(1)):this.element.removeAttribute(g[c]))}}function x(c,b){c.elementQueriesSetupInformation?
c.elementQueriesSetupInformation.addOption(b):(c.elementQueriesSetupInformation=new l(c),c.elementQueriesSetupInformation.addOption(b),c.elementQueriesSensor=new d(c,function(){c.elementQueriesSetupInformation.call()}));c.elementQueriesSetupInformation.call();y&&0>r.indexOf(c)&&r.push(c)}function g(){var c;document.querySelectorAll&&(c=document.querySelectorAll.bind(document));c||"undefined"===typeof $$||(c=$$);c||"undefined"===typeof jQuery||(c=jQuery);if(!c)throw"No document.querySelectorAll, jQuery or Mootools's $$ found.";
return c}function e(c){function b(){var d=!1,q;for(q in a)a.hasOwnProperty(q)&&k[q].minWidth&&c.offsetWidth>k[q].minWidth&&(d=q);d||(d=f);e!=d?g[d]?(a[e].style.display="none",a[d].style.display="block",e=d):(q=new Image,q.onload=function(){a[d].src=n[d];a[e].style.display="none";a[d].style.display="block";g[d]=!0;e=d},q.src=n[d]):a[d].src=n[d]}var a=[],k=[],n=[],f=0,e=-1,g=[],m;for(m in c.children)if(c.children.hasOwnProperty(m)&&c.children[m].tagName&&"img"===c.children[m].tagName.toLowerCase()){a.push(c.children[m]);
var l=c.children[m].getAttribute("min-width")||c.children[m].getAttribute("data-min-width"),p=c.children[m].getAttribute("data-src")||c.children[m].getAttribute("url");n.push(p);k.push({minWidth:l});l?c.children[m].style.display="none":(f=a.length-1,c.children[m].style.display="block")}e=f;c.resizeSensor=new d(c,b);b();y&&r.push(c)}function z(c){var a,b;for(c=c.replace(/'/g,'"');null!==(a=B.exec(c));)for(b=a[1]+a[3],attrs=a[2];null!==(attrMatch=w.exec(attrs));){a=b;var d=attrMatch[1],e=attrMatch[2],
g=attrMatch[3];"undefined"==typeof f[d]&&(f[d]={});"undefined"==typeof f[d][e]&&(f[d][e]={});f[d][e][g]="undefined"==typeof f[d][e][g]?a:f[d][e][g]+(","+a)}}function A(c){var a;if(c)if("string"===typeof c)c=c.toLowerCase(),-1===c.indexOf("min-width")&&-1===c.indexOf("max-width")||z(c);else for(var b=0,d=c.length;b<d;b++)1===c[b].type?(a=c[b].selectorText||c[b].cssText,-1!==a.indexOf("min-height")||-1!==a.indexOf("max-height")?z(a):-1===a.indexOf("min-width")&&-1===a.indexOf("max-width")||z(a)):4===
c[b].type&&A(c[b].cssRules||c[b].rules)}var y=!1,r=[],f={},B=/,?[\s\t]*([^,\n]*?)((?:\[[\s\t]*?(?:min|max)-(?:width|height)[\s\t]*?[~$\^]?=[\s\t]*?"[^"]*?"[\s\t]*?])+)([^,\n\s\{]*)/mgi,w=/\[[\s\t]*?(min|max)-(width|height)[\s\t]*?[~$\^]?=[\s\t]*?"([^"]*?)"[\s\t]*?]/mgi,v=!1;this.init=function(a){y="undefined"===typeof a?!1:a;a=0;for(var b=document.styleSheets.length;a<b;a++)try{A(document.styleSheets[a].cssRules||document.styleSheets[a].rules||document.styleSheets[a].cssText)}catch(d){if("SecurityError"!==
d.name)throw d;}v||(a=document.createElement("style"),a.type="text/css",a.innerHTML="[responsive-image] > img, [data-responsive-image] {overflow: hidden; padding: 0; } [responsive-image] > img, [data-responsive-image] > img { width: 100%;}",document.getElementsByTagName("head")[0].appendChild(a),v=!0);a=g();for(var h in f)if(f.hasOwnProperty(h))for(var k in f[h])if(f[h].hasOwnProperty(k))for(var n in f[h][k])if(f[h][k].hasOwnProperty(n))for(var b=a(f[h][k][n]),l=0,p=b.length;l<p;l++)x(b[l],{mode:h,
property:k,value:n});h=g()("[data-responsive-image],[responsive-image]");k=0;for(n=h.length;k<n;k++)e(h[k])};this.update=function(a){this.init(a)};this.detach=function(){if(!this.withTracking)throw"withTracking is not enabled. We can not detach elements since we don not store it.Use ElementQueries.withTracking = true; before domready or call ElementQueryes.update(true).";for(var b;b=r.pop();)a.detach(b);r=[]}};a.update=function(b){a.instance.update(b)};a.detach=function(a){a.elementQueriesSetupInformation?
(a.elementQueriesSensor.detach(),delete a.elementQueriesSetupInformation,delete a.elementQueriesSensor):a.resizeSensor&&(a.resizeSensor.detach(),delete a.resizeSensor)};a.withTracking=!1;a.init=function(){a.instance||(a.instance=new a);a.instance.init(a.withTracking)};var l=function(a){if(document.addEventListener)document.addEventListener("DOMContentLoaded",a,!1);else if(/KHTML|WebKit|iCab/i.test(navigator.userAgent))var d=setInterval(function(){/loaded|complete/i.test(document.readyState)&&(a(),
clearInterval(d))},10);else window.onload=a};a.listen=function(){l(a.init)};"undefined"!==typeof module&&"undefined"!==typeof module.exports?module.exports=a:(window.ElementQueries=a,a.listen());return a});
//myResize
(function(){
var element = document.getElementById('newContent');
new ResizeSensor(element, myResize);
function myResize(){

	var divW = $('#newContent').css('width');
	divW = divW.substring(0, divW.length - 2);//去掉'px'
	divW = Number(divW);
	
	//iframeWrappers
	var iframeWrappers = $('.iframeWrapper');
	var len = iframeWrappers.length;
	for(var i=0;i<len;i++){
		var ifWrapper = iframeWrappers[i];
		var _iframe = $($(ifWrapper).children('iframe')[0]);
		if(!_iframe.oldWidth){
			var ow = _iframe.css('width');
			ow = ow.substring(0, ow.length - 2);
			_iframe.oldWidth = Number(ow);
			var oh = _iframe.css('height');
			oh = oh.substring(0, oh.length - 2);
			_iframe.oldHeight = Number(oh);			
		}
		
		//佔滿全寬 or 原尺寸
		var scale = Math.min((divW-30)/_iframe.oldWidth , 1);
		$(ifWrapper).css('width',_iframe.oldWidth*scale+'px')
					.css('height',_iframe.oldHeight*scale+'px')
					.css('position','relative')
					.css('left',-0.5*(1-scale)*_iframe.oldWidth*scale+'px')
					.css('top',-0.5*(1-scale)*_iframe.oldHeight*scale+'px');
		scaleDiv($(ifWrapper) , scale);		
	}

	//video
	var len = $('video').length;
	for(var i=0;i<len;i++){
		var videoI = $('video')[i];
		//fixed width and height
		if(!videoI.fixedWidth){
			videoI.fixedWidth = videoI.width;
			videoI.fixedHeight = videoI.height;
		}
		//佔滿全寬 or 原尺寸
		var scale = Math.min((divW-30)/videoI.fixedWidth , 1);
		videoI.width = videoI.fixedWidth*scale;
		videoI.height = videoI.fixedHeight*scale;
		log('video width = '+$('video')[i].width +'div width = '+divW);
	}
}
myResize();

function scaleDiv(_jQdiv, _scale){
	_jQdiv.css({
			  '-webkit-transform' : 'scale(' + _scale + ')',
			  '-moz-transform'    : 'scale(' + _scale + ')',
			  '-ms-transform'     : 'scale(' + _scale + ')',
			  '-o-transform'      : 'scale(' + _scale + ')',
			  'transform'         : 'scale(' + _scale + ')'
	});
}

})();
