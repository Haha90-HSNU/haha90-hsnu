(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


// symbols:
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.circleBTN = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFF00").s().p("AlhFiQgvgvgfg0QhEhyAAiNQAAiMBEhyQAfg0AvgvQCTiSDOAAQDPAACTCSQBDBEAlBTQAqBcAABuQAABvgqBeQglBRhDBEQiTCSjPAAQjOAAiTiSg");
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-50,-50,100,100);


(lib.ball = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Aj5j5IHzAAQAADPiTCRQiRCTjPAAg");
	this.shape.setTransform(25.025,25.025);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF0000").s().p("AAAH0QjOAAiTiSQiSiTAAjOIH0AAIAAHzgAABABIgBn0QDPAACTCSQCSCTAADOIAAABgAABABg");

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFF00").s().p("Aj5D6IAAAAQAAjPCSiSQCSiSDPAAIAAAAIAAHzg");
	this.shape_2.setTransform(-24.975,-24.975);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.ball, new cjs.Rectangle(-50,-50,100,100), null);


(lib.arrow = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFF00").s().p("ABlAWIpYgWIJYgVIAAgmIGPA7ImPA8g");
	this.shape.setTransform(50,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFF00").s().p("AgmAHIjOgHIDOgGIAAgkIEbAqIkbArg");
	this.shape_1.setTransform(65.5125,0);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF0000").s().p("ABXAlIp3gYIAAgaIJ3gXIAAgoIHKBEIAAAQInKBFgAB0gGIjNAGIDNAHIAAAkIEcgrIkcgqg");
	this.shape_2.setTransform(50,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.arrow, new cjs.Rectangle(-4.5,-7.7,109,15.5), null);


(lib.sliderButton = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#999999").ss(3,1,1).p("ACCAAQAAA2gmAmQgmAmg2AAQg1AAgngmQglgmAAg2QAAg1AlgmQAngmA1AAQA2AAAmAmQAmAmAAA1g");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#666666").s().p("AhcBcQglgmAAg2QAAg1AlgmQAngmA1AAQA2AAAmAmQAmAmAAA1QAAA2gmAmQgmAmg2AAQg1AAgngmg");

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#00FFFF").ss(3,1,1).p("ACMAAQAAA6gpApQgpApg6AAQg5AAgqgpQgogpAAg6QAAg5AogpQAqgpA5AAQA6AAApApQApApAAA5g");

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#0000FF").s().p("AhjBiQgogoAAg6QAAg5AogoQAqgqA5AAQA6AAAoAqQAqAoAAA5QAAA6gqAoQgoAqg6AAQg5AAgqgqg");

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#FFFF00").ss(3,1,1).p("ACCAAQAAA2gmAmQgmAmg2AAQg1AAgngmQglgmAAg2QAAg1AlgmQAngmA1AAQA2AAAmAmQAmAmAAA1g");

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FF0000").s().p("AhcBcQglgmAAg2QAAg1AlgmQAngmA1AAQA2AAAmAmQAmAmAAA1QAAA2gmAmQgmAmg2AAQg1AAgngmg");

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FF00FF").s().p("AhpBpQgsgrAAg+QAAg9AsgrQAsgtA9AAQA+AAArAtQAtArAAA9QAAA+gtArQgrAtg+AAQg9AAgsgtg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_3},{t:this.shape_2}]},1).to({state:[{t:this.shape_5},{t:this.shape_4}]},1).to({state:[{t:this.shape_6}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-15.5,-15.5,31,31);


(lib.sliderBGLine = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#999999").ss(5,1,1).p("ArtAAIXbAA");
	this.shape.setTransform(75,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.sliderBGLine, new cjs.Rectangle(-2.5,-2.5,155,5), null);


(lib.btnSquare = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFF00").ss(1,1,1).p("AnznzIPnAAIAAPnIvnAAg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF00FF").s().p("AnzH0IAAvnIPnAAIAAPng");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-51,-51,102,102);


(lib.checker = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(8,1,1).p("AiLgIIA4AAIAfCFIDAj5");
	this.shape.setTransform(2.25,-4.25);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.checker, new cjs.Rectangle(-15.7,-20.7,36,33), null);


(lib.btn3D = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF00FF").s().p("Eh8/BGUMAAAiMnMD5/AAAMAAACMng");
	this.shape.setTransform(800,450);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1600,900);


(lib.btn01 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// text
	this.label = new cjs.Text("按鈕01", "26px 'Microsoft JhengHei'", "#FFFFFF");
	this.label.name = "label";
	this.label.textAlign = "center";
	this.label.lineHeight = 37;
	this.label.lineWidth = 100;
	this.label.parent = this;
	this.label.setTransform(0,-17.25);

	this.timeline.addTween(cjs.Tween.get(this.label).wait(4));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#000066","#0066FF"],[0,1],0,30,0,-29.9).s("#00FFFF").ss(3,1,1).rr(-60,-30,120,60,10);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#000066","#00FFFF"],[0,1],0,30,0,-29.9).s("#00FFFF").ss(3,1,1).rr(-60,-30,120,60,10);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF00FF").s("#FF00FF").ss(3,1,1).rr(-60,-30,120,60,10);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1,p:{rotation:0}}]},1).to({state:[{t:this.shape_1,p:{rotation:180}}]},1).to({state:[{t:this.shape_2}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-61.5,-31.5,123,63);


(lib.theVadj = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層_2
	this.instance = new lib.circleBTN();
	this.instance.parent = this;
	this.instance.setTransform(0,0,2.1,2.1);
	new cjs.ButtonHelper(this.instance, 0, 1, 2, false, new lib.circleBTN(), 3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("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");
	this.shape.setTransform(0,-49.975);

	this.arrow = new lib.arrow();
	this.arrow.name = "arrow";
	this.arrow.parent = this;

	this.ball = new lib.ball();
	this.ball.name = "ball";
	this.ball.parent = this;
	this.ball.setTransform(0,0,0.6,0.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#CCCCCC").ss(1,1,1).p("APoAAQAAGdklEmQkmElmdAAQmcAAkmklQklkmAAmdQAAmgElkiQEmklGcAAQGdAAEmElQElEiAAGgg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.ball},{t:this.arrow},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.theVadj, new cjs.Rectangle(-105,-105,210,210), null);


(lib.theSlider = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		//老師寫的slider，不要修改
		//外部使用變數名稱
		//maximum    最大值number
		//minimum    最小值number
		//value      現在值number
		var sl=this;
		//內部變數
		sl.len = 150;
		sl.min = 0;
		sl.max = 100;
		sl.val = 0;
		sl.btnS.alpha=0;
		sl.digitN=0;
		//event
		sl.on('mousedown',function(e){
									//按下設值
									var localX = e.stageX - sl.x;
									setValue(sl,localX);
								});
		sl.on('pressmove',function(e){
									//拖曳設值
									var localX = e.stageX - sl.x;
									setValue(sl,localX);
								});
		//setValue from localX
		var setValue = function(who,localX){
			var lx=localX;
			if(lx<0){lx=0;}
			else if(lx>who.len){lx=who.len;}
			who.btn.x=lx;
			who.val = who.min+lx/who.len*(who.max-who.min);
			who.valueText.text = digitN(who.val , who.digitN);
		}
		//digitN 將數字取到小數點第N位，變成文字傳回
		var digitN = function( num, n){
			var pn=num<0?"-":"";
			num=Math.abs(num);
			if(n>0){
				var str = String(Math.round(num*Math.pow(10,n)));
				if(str.length<(n+1)){//補位數
					var tempN=n+1-str.length;
					for(var i=0;i<tempN;i++){
						str = "0"+str;
					}
				}
				str = pn+str.substr(0, str.length-n) + "." + str.substr(str.length-n);
			}else{
				var str = pn+String(Math.round(num));
			}
			return str;
		}
		//set value form js
		Object.defineProperty(sl, 'value', {
										    get: function() {
													return sl.val;
											    },
											set: function(_val) {
											        sl.val=_val;
												    if(sl.val>sl.max){sl.val=sl.max;}
												    else if(sl.val<sl.min){sl.val=sl.min;}
												    sl.btn.x=sl.len*(sl.val-sl.min)/(sl.max-sl.min);
													sl.valueText.text = digitN(sl.val , sl.digitN);
												}
									});
		//set length
		Object.defineProperty(sl, 'length', {
										    get: function() {
										        return sl.len;
										    },
										    set: function(_len) {
										        sl.len=_len;
										        sl.bgLine.scaleX=sl.len/150;
										        sl.btn.x=sl.len*(sl.val-sl.min)/(sl.max-sl.min);
										        //btnS
										        sl.btnS.scaleX=(sl.len+30)/100;
												sl.btnS.x=sl.len/2;
												sl.valueText.x = sl.len+20;
										    }
							});
		//set maximum
		Object.defineProperty(sl, 'maximum', {
										    get: function() {
										        return sl.max;
										    },
										    set: function(_max) {
										        sl.max=_max;
										        if(sl.val>sl.max){sl.val=sl.max;}
										        sl.btn.x=sl.len*(sl.val-sl.min)/(sl.max-sl.min);
												sl.valueText.text = digitN(sl.val , sl.digitN);
										    }
							});
		//set minimum
		Object.defineProperty(sl, 'minimum', {										
										    get: function() {
										        return sl.min;
										    },
										    set: function(_min) {
										        sl.min=_min;
										        if(sl.val<sl.min){sl.val=sl.min;}
										        sl.btn.x=sl.len*(sl.val-sl.min)/(sl.max-sl.min);
												sl.valueText.text = digitN(sl.val , sl.digitN);
										    }
							});
		//set valueText visible
		Object.defineProperty(sl, 'isValueText', {										
										    get: function() {
										        return sl.valueText.visible;
										    },
										    set: function(is) {
										        sl.valueText.visible=is;
										    }
							});
		//set label visible
		Object.defineProperty(sl, 'isLabel', {										
										    get: function() {
										        return sl.label.visible;
										    },
										    set: function(is) {
										        sl.label.visible=is;
										    }
							});
		//set label
		sl.setLabel = function(_text , _outline){
					sl.label.text = _text;
					sl.label.outline = _outline||0;
					}
		//sl help
		sl.help=function(){
			var str1="老師寫的slider，不要修改，\n外部使用變數名稱：\n maximum最大值number，\n minimum最小值number，\n value現在值number";
			var str2="\n length線長度 \n digitN顯示到小數點第N位(預設0) \n isLabel是否顯示文字標籤 \n isValueText是否顯示數字";
			var str3="\n 修改文字標籤：setLabel('文字',outline數字)"
			
			console.log(str1+str2+str3);
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// text
	this.label = new cjs.Text("文字標籤", "26px 'Microsoft JhengHei'", "#FFFFFF");
	this.label.name = "label";
	this.label.textAlign = "right";
	this.label.lineHeight = 37;
	this.label.lineWidth = 146;
	this.label.parent = this;
	this.label.setTransform(-27,-17.25);

	this.valueText = new cjs.Text("0", "26px 'Arial'", "#FFFFFF");
	this.valueText.name = "valueText";
	this.valueText.lineHeight = 31;
	this.valueText.lineWidth = 100;
	this.valueText.parent = this;
	this.valueText.setTransform(172,-14.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.valueText},{t:this.label}]}).wait(1));

	// btn
	this.btn = new lib.sliderButton();
	this.btn.name = "btn";
	this.btn.parent = this;
	new cjs.ButtonHelper(this.btn, 0, 1, 2, false, new lib.sliderButton(), 3);

	this.timeline.addTween(cjs.Tween.get(this.btn).wait(1));

	// btnS
	this.btnS = new lib.btnSquare();
	this.btnS.name = "btnS";
	this.btnS.parent = this;
	this.btnS.setTransform(74.95,0,1.8,0.3);
	new cjs.ButtonHelper(this.btnS, 0, 1, 2, false, new lib.btnSquare(), 3);

	this.timeline.addTween(cjs.Tween.get(this.btnS).wait(1));

	// line
	this.bgLine = new lib.sliderBGLine();
	this.bgLine.name = "bgLine";
	this.bgLine.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.bgLine).wait(1));

}).prototype = getMCSymbolPrototype(lib.theSlider, new cjs.Rectangle(-175,-19.2,449,38.5), null);


(lib.theButton = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		//老師寫的button，不要修改
		//外部使用變數名稱
		var bt=this;
		//set label
		bt.setLabel = function(_text){
					bt.btn.label.text = _text;
					}
		//bt help
		bt.help=function(){
			var str1="老師寫的button，不要修改，";
			var str2="\n 修改文字標籤：setLabel('文字');";
			
			console.log(str1+str2);
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// 圖層_1
	this.btn = new lib.btn01();
	this.btn.name = "btn";
	this.btn.parent = this;
	new cjs.ButtonHelper(this.btn, 0, 1, 2, false, new lib.btn01(), 3);

	this.timeline.addTween(cjs.Tween.get(this.btn).wait(1));

}).prototype = getMCSymbolPrototype(lib.theButton, new cjs.Rectangle(-61.5,-31.5,123,63), null);


(lib.sliderW0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		//老師寫的slider，不要修改
		//外部使用變數名稱
		//maximum    最大值number
		//minimum    最小值number
		//value      現在值number
		var sl=this;
		//內部變數
		sl.len = 150;
		sl.min = 0;
		sl.max = 100;
		sl.val = 0;
		sl.btnS.alpha=0;
		sl.digitN=0;
		//event
		sl.on('mousedown',function(e){
									//按下設值
									var localX = e.stageX - sl.x;
									setValue(sl,localX);
								});
		sl.on('pressmove',function(e){
									//拖曳設值
									var localX = e.stageX - sl.x;
									setValue(sl,localX);
								});
		//setValue from localX
		var setValue = function(who,localX){
			var lx=localX;
			if(lx<0){lx=0;}
			else if(lx>who.len){lx=who.len;}
			who.btn.x=lx;
			who.val = who.min+lx/who.len*(who.max-who.min);
			who.valueText.text = digitN(who.val , who.digitN);
		}
		//digitN 將數字取到小數點第N位，變成文字傳回
		var digitN = function( num, n){
			var pn=num<0?"-":"";
			num=Math.abs(num);
			if(n>0){
				var str = String(Math.round(num*Math.pow(10,n)));
				if(str.length<(n+1)){//補位數
					var tempN=n+1-str.length;
					for(var i=0;i<tempN;i++){
						str = "0"+str;
					}
				}
				str = pn+str.substr(0, str.length-n) + "." + str.substr(str.length-n);
			}else{
				var str = pn+String(Math.round(num));
			}
			return str;
		}
		//set value form js
		Object.defineProperty(sl, 'value', {
										    get: function() {
													return sl.val;
											    },
											set: function(_val) {
											        sl.val=_val;
												    if(sl.val>sl.max){sl.val=sl.max;}
												    else if(sl.val<sl.min){sl.val=sl.min;}
												    sl.btn.x=sl.len*(sl.val-sl.min)/(sl.max-sl.min);
													sl.valueText.text = digitN(sl.val , sl.digitN);
												}
									});
		//set length
		Object.defineProperty(sl, 'length', {
										    get: function() {
										        return sl.len;
										    },
										    set: function(_len) {
										        sl.len=_len;
										        sl.bgLine.scaleX=sl.len/150;
										        sl.btn.x=sl.len*(sl.val-sl.min)/(sl.max-sl.min);
										        //btnS
										        sl.btnS.scaleX=(sl.len+30)/100;
												sl.btnS.x=sl.len/2;
												sl.valueText.x = sl.len+20;
										    }
							});
		//set maximum
		Object.defineProperty(sl, 'maximum', {
										    get: function() {
										        return sl.max;
										    },
										    set: function(_max) {
										        sl.max=_max;
										        if(sl.val>sl.max){sl.val=sl.max;}
										        sl.btn.x=sl.len*(sl.val-sl.min)/(sl.max-sl.min);
												sl.valueText.text = digitN(sl.val , sl.digitN);
										    }
							});
		//set minimum
		Object.defineProperty(sl, 'minimum', {										
										    get: function() {
										        return sl.min;
										    },
										    set: function(_min) {
										        sl.min=_min;
										        if(sl.val<sl.min){sl.val=sl.min;}
										        sl.btn.x=sl.len*(sl.val-sl.min)/(sl.max-sl.min);
												sl.valueText.text = digitN(sl.val , sl.digitN);
										    }
							});
		//set valueText visible
		Object.defineProperty(sl, 'isValueText', {										
										    get: function() {
										        return sl.valueText.visible;
										    },
										    set: function(is) {
										        sl.valueText.visible=is;
										    }
							});
		//set label visible
		Object.defineProperty(sl, 'isLabel', {										
										    get: function() {
										        return sl.label.visible;
										    },
										    set: function(is) {
										        sl.label.visible=is;
										    }
							});
		//set label
		sl.setLabel = function(_text , _outline){
					sl.label.text = _text;
					sl.label.outline = _outline||0;
					}
		//sl help
		sl.help=function(){
			var str1="老師寫的slider，不要修改，\n外部使用變數名稱：\n maximum最大值number，\n minimum最小值number，\n value現在值number";
			var str2="\n length線長度 \n digitN顯示到小數點第N位(預設0) \n isLabel是否顯示文字標籤 \n isValueText是否顯示數字";
			var str3="\n 修改文字標籤：setLabel('文字',outline數字)"
			
			console.log(str1+str2+str3);
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// text
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ACJBsQgOgZAAgjQAAgUAFgSQAFgRALgNQAHgLAKgFQAKgGAJAAQAUAAAQAUQAUAZAAArQAAAdgJAWQgJAWgNAJQgNAKgNAAQgYAAgSgegAClgaQgJALgDAVQgEAXAAAUQAAAvAMAVQAIAMALAAQAGAAAIgGQAHgGAEgPQAGgXAAgoQAAgdgGgTQgFgOgHgGQgFgEgIAAQgIAAgHAHgAhJBhQgMgNgDgaQgYAbgWAMQgXAOgVAAQgTAAgQgPQgRgNgEgcQgDgdALggQANgkAZgdQASgXAXgPQAXgPAVgGQAXgHAeAAIgDAKQgkADgjAeQghAegUA6QgTA4AIAbQAFAQATAAQAQAAAUgOQATgNAWgiQgBgeACgOQABgOAFgNQAIgZASgSQAIgIAIAAQAIAAACAIQAGARgJAYQgKAegfArQgBAiAIANQAJAMARAAQAUAAARgQQAXgVATg4QAYhFgTghQgMgUgfgDIADgKQArAAAWAPQAWAPAGAgQAFAhgNAmQgMAggWAbQgWAbgbAOQgbAPgUAAQgWAAgLgOg");
	this.shape.setTransform(-48.5821,0.775);

	this.valueText = new cjs.Text("0", "26px 'Arial'", "#FFFFFF");
	this.valueText.name = "valueText";
	this.valueText.lineHeight = 31;
	this.valueText.lineWidth = 100;
	this.valueText.parent = this;
	this.valueText.setTransform(172,-14.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.valueText},{t:this.shape}]}).wait(1));

	// btn
	this.btn = new lib.sliderButton();
	this.btn.name = "btn";
	this.btn.parent = this;
	new cjs.ButtonHelper(this.btn, 0, 1, 2, false, new lib.sliderButton(), 3);

	this.timeline.addTween(cjs.Tween.get(this.btn).wait(1));

	// btnS
	this.btnS = new lib.btnSquare();
	this.btnS.name = "btnS";
	this.btnS.parent = this;
	this.btnS.setTransform(74.95,0,1.8,0.3);
	new cjs.ButtonHelper(this.btnS, 0, 1, 2, false, new lib.btnSquare(), 3);

	this.timeline.addTween(cjs.Tween.get(this.btnS).wait(1));

	// line
	this.bgLine = new lib.sliderBGLine();
	this.bgLine.name = "bgLine";
	this.bgLine.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.bgLine).wait(1));

}).prototype = getMCSymbolPrototype(lib.sliderW0, new cjs.Rectangle(-72.1,-16.5,346.1,33.1), null);


(lib.chWall = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		//老師寫的checkBox，不要修改
		//外部可用變數：checked
		//修改文字標籤：setLabel("文字",outline數字)
		var ch=this;
		ch.stop();
		ch.ched=false;
		ch.checker.visible=ch.ched;
		ch.btnS.alpha=0;
		//click
		ch.on('click',function(e){
								//按下設值
								ch.ched=!ch.ched;
								ch.checker.visible=ch.ched;
							});
		//set label
		ch.setLabel = function(_text , _outline){
					ch.label.text = _text;
					ch.label.outline = _outline||0;
					
					var rect=ch.label.getBounds();
					ch.btnS.scaleX=(ch.label.x+rect.width+20)/100;
					ch.btnS.x=(ch.label.x+rect.width-20)/2;
					}
		
		//checked
		Object.defineProperty(this, 'checked', {
										    get: function() {
									        return ch.ched;
										    },
										    set: function(_ched) {
										        ch.ched=_ched;
										        ch.checker.visible=ch.ched;
										    }
								});
		//ch help
		ch.help = function(){
			var str="老師寫的checkBox，不要修改\n 外部可用變數：checked \n 修改文字標籤：setLabel('文字',outline數字)";
			console.log(str);
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// btnS
	this.btnS = new lib.btnSquare();
	this.btnS.name = "btnS";
	this.btnS.parent = this;
	this.btnS.setTransform(59.2,0,1.6384,0.3399,0,0,0,0.1,0);
	new cjs.ButtonHelper(this.btnS, 0, 1, 2, false, new lib.btnSquare(), 3);

	this.timeline.addTween(cjs.Tween.get(this.btnS).wait(1));

	// checker
	this.checker = new lib.checker();
	this.checker.name = "checker";
	this.checker.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.checker).wait(1));

	// box
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#CCCCCC").ss(3,1,1).p("AiViVIErAAIAAErIkrAAg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#333333").s().p("AiVCWIAAkrIErAAIAAErg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	// label
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("ABaB3QgggGgPggQgGAVgSATIgSgMQASgRAHgPIAAgBQAGgSgBg0IATAAIAAAiQAFAZAGAMIAAhbIgiAAIAAgVIArAAQgLgOgVgSIAPgNIANAMQATgOAHgMIg8AAIAAgUIBIAAIAMAOQgLAZgYAVIAIAKIgMAJIAdAAIANAJQgFAagJASIgTgGQAIgOADgMIgQAAIAAAqIAeAAIAAAVIgeAAIAAAxQAKAEAcABIgJATIgUgDgAjpB6IAAglIhJAAIAAgUIBJAAIAAgPIg2AAQgBAAAAAAQAAgBgBAAQAAAAAAgBQAAgBAAAAIAAhMIACgCICCAAQAAAAABAAQABAAAAABQAAAAABAAQAAAAAAABIAABMQAAAAAAABQgBABAAAAQAAAAgBABQgBAAAAAAIg3AAIAAAPIBGAAIAAAUIhGAAIAAAlgAkNAgIBeAAIABgBIAAgOIhfAAgAkNAAIBfAAIAAgNIhfAAgAC2B5IAAhJIgiAOIgNgUQAdgJASgKIAAhIIgRAAQgFAigEAMIgWgDQANgpAAgxIAAgPIAVAAIAAAPIgBAZIAPAAIAAgxIAWAAIAAAxIAXAAIAAAWIgXAAIAAA+QANgHAHgGIANASQgOAJgTAKIAABUgAl2B5IAAjqIABgCIACgBIA3AAIAQAJIgQBDQgCAIABADQAPAWADARQAGAfgMAPQgIAHgJADQgNACgSgGIAAA7gAlghdIgBABIAACDQALAHAMAAQAFgBADgDQADgEAAgGIABgBQAAgVgWgqIAOg4QABgGgHAAIgTAAIgBABgAEjByIgBgbQAjANAJgIQAJgEAEgPQAFgRABgjQABhSgBgEIgDgBIgLAAQgCA0gWA0QgVAsgrAfIgRgQQBQgwADhzIgQAAQgBAPgDAPQgLA0g0A1IgTgMQAkglAPgdQAKgUAEglIgTAAQgMAjgNATIgVgIQAeguAGg1IAVADIgFAcIBkAAIAFABQADACAAAJIgBBkQgCBLgYAQQgIAEgNAAQgPAAgVgFgAgxBrQAYgUAHglIgYAAIAAgSIAaAAIABgRIAAgMIgHAAQgEALgGAJIgPgIIAABPQAAAHgHAAIgcAAIAAAMIgTAAIAAhtIgDAHIgVgGQAagvADgzIgWAAIAAgVIBFAAIAAAVIgbAAQgEAogHAWIAhAAQAHAAAAAGIAAAjQAFgIADgIQADgJAAgQIATAAIgBAQIAqAAIAAASIgUAAIAAAMIgBARIAXAAIAAASIgaAAIAAAEQAMALALAMIgPANIgMgRQgKAcgSASgAhSgJIAABaIAMAAQABAAABAAQAAAAABgBQAAAAAAAAQAAgBAAgBIAAhXQAAgBAAgBQAAAAAAgBQgBAAAAAAQgBAAgBAAIgJAAQgBAAAAAAQgBAAAAAAQAAABgBAAQAAABAAABgAgUgmQgHgBgGgGQgFgFAAgGIAAg9IASAAIAAAVQAUgIAMgHIAKAQQgTALgXAHIAAALQAAAEADADQADADAEAAIANAAIAGgCQAAAAABAAQAAAAAAAAQAAgBAAAAQAAgBAAgBQABgEAAgMIATAFIgFAbQgJAHgFAAgAkogtIAAgUIAjAAQgEgMgBgJIgXAAIAAgUIA5AAIAAgPIAWAAIAAAPIA7AAIAAAUIgYAAIgCAMQgCAFAAAEIAjAAIAAAUgAjwhBIAoAAIAFgVIgyAAIAFAVg");
	this.shape_2.setTransform(63.275,0.275);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

}).prototype = getMCSymbolPrototype(lib.chWall, new cjs.Rectangle(-23.8,-20.7,165.8,38.7), null);


(lib.chNoFk = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		//老師寫的checkBox，不要修改
		//外部可用變數：checked
		//修改文字標籤：setLabel("文字",outline數字)
		var ch=this;
		ch.stop();
		ch.ched=false;
		ch.checker.visible=ch.ched;
		ch.btnS.alpha=0;
		//click
		ch.on('click',function(e){
								//按下設值
								ch.ched=!ch.ched;
								ch.checker.visible=ch.ched;
							});
		//set label
		ch.setLabel = function(_text , _outline){
					ch.label.text = _text;
					ch.label.outline = _outline||0;
					
					var rect=ch.label.getBounds();
					ch.btnS.scaleX=(ch.label.x+rect.width+20)/100;
					ch.btnS.x=(ch.label.x+rect.width-20)/2;
					}
		
		//checked
		Object.defineProperty(this, 'checked', {
										    get: function() {
									        return ch.ched;
										    },
										    set: function(_ched) {
										        ch.ched=_ched;
										        ch.checker.visible=ch.ched;
										    }
								});
		//ch help
		ch.help = function(){
			var str="老師寫的checkBox，不要修改\n 外部可用變數：checked \n 修改文字標籤：setLabel('文字',outline數字)";
			console.log(str);
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// btnS
	this.btnS = new lib.btnSquare();
	this.btnS.name = "btnS";
	this.btnS.parent = this;
	this.btnS.setTransform(59.2,0,1.6384,0.3399,0,0,0,0.1,0);
	new cjs.ButtonHelper(this.btnS, 0, 1, 2, false, new lib.btnSquare(), 3);

	this.timeline.addTween(cjs.Tween.get(this.btnS).wait(1));

	// checker
	this.checker = new lib.checker();
	this.checker.name = "checker";
	this.checker.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.checker).wait(1));

	// box
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#CCCCCC").ss(3,1,1).p("AiViVIErAAIAAErIkrAAg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#333333").s().p("AiVCWIAAkrIErAAIAAErg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	// label
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAnB1IAAgYQAPAGAHABQAEAAABgBQAGgFAAgGIAAgKIhVAAIAAAnIgVAAIAAh8QABgGAEAAIB1AAQAFABAAAFIAGgSQAAgBAAgBQAAAAgBgBQAAAAgBAAQAAgBgBAAIiGAAQAAAAgBAAQAAAAAAAAQgBABAAAAQAAABAAABIAAAaIgVAAIAAgtQAAgEADAAIAUAAIAAg8QABgHAGAAIB5AAQAHABAAAGIAAA8IAHAAIASAJQgCATgJAaIgSgGIAABjQAAALgKAIQgGADgLAAQgLAAgQgDgAgNA6IBVAAIAAgRIhVAAgAgNAIIAAAOIBVAAIAAgOQAAgBgBAAQAAAAAAAAQAAgBAAAAQAAAAAAAAIhRAAIgDACgAAbg/IAAAOIAwAAIAAgQIguAAIgBAAQAAAAAAAAQgBAAAAAAQAAABAAAAQAAAAAAABgAgRheIAAAtIAYAAIAAgeQAAgFAEAAIBAAAIAAgKQAAAAAAgBQAAAAAAgBQgBAAAAAAQgBAAAAAAIhXAAQAAAAgBAAQgBAAAAAAQgBABAAAAQAAABAAAAgAl5BkQATgCASgKQAMgIAIgKQAPgWABgtIAAgDIhFAAIAAgXIBoAAIAAhgIAWAAIAABgIBoAAIAAAXIhIAAIAABQQAAAGADADQAFAEAEAAIAfAAQADAAADgDQAEgCABgqIAVACQgDA0gEAHQgJAIgHABIg0AAQgJgCgHgGQgGgIAAgHIAAhdIgtAAIAAADQgCAvgPAcQgKAPgMAJQgQAKgaAHgAFeB2IAAgKIiyAAIAAAKIgWAAIAAiuQAAgHAHAAIBLAAIANgaIhlAAIAAgXIDrAAIAAAXIhtAAQgDAGgFALQgBAFgEAEIBrAAQAIAAAAAHIAACugAFCBVIAcAAIAAh7QAAgBAAAAQAAgBgBAAQAAgBgBAAQAAAAgBAAIgZAAgADhBVIBKAAIAAgbIhKAAgACsgmIAAB7IAeAAIAAh+IgbAAQgEAAABADgADhAlIBKAAIAAgdIhKAAgADhgOIBKAAIAAgbIhKAAgAh2BrQAcguAGgwIAWADQgLA9gYAlgAh4ghIANgTQATAMAWATIgOARQgYgUgQgJgAlkhaIASgNQAUAVASAlIgUAMQgUgngQgSgAjYguQAZgjAKgYIAUALQgLAcgYAfgAhzhiIAPgTQATANAYAXIgNAQQgagYgTgJg");
	this.shape_2.setTransform(62.85,-0.7);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

}).prototype = getMCSymbolPrototype(lib.chNoFk, new cjs.Rectangle(-23.8,-20.7,165.8,38.7), null);


// stage content:
(lib.myAnimate = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// UI
	this.theVadj = new lib.theVadj();
	this.theVadj.name = "theVadj";
	this.theVadj.parent = this;
	this.theVadj.setTransform(1425,141.05);

	this.slCameraRR = new lib.theSlider();
	this.slCameraRR.name = "slCameraRR";
	this.slCameraRR.parent = this;
	this.slCameraRR.setTransform(1350,850);

	this.btn01 = new lib.theButton();
	this.btn01.name = "btn01";
	this.btn01.parent = this;
	this.btn01.setTransform(1402.15,550,1.25,1.25);

	this.chWall = new lib.chWall();
	this.chWall.name = "chWall";
	this.chWall.parent = this;
	this.chWall.setTransform(1417.2,440.55,1,1,0,0,0,67.2,-1.4);

	this.chNoFk = new lib.chNoFk();
	this.chNoFk.name = "chNoFk";
	this.chNoFk.parent = this;
	this.chNoFk.setTransform(1417.2,368.4,1,1,0,0,0,67.2,-1.4);

	this.slW0 = new lib.sliderW0();
	this.slW0.name = "slW0";
	this.slW0.parent = this;
	this.slW0.setTransform(1350,293.45);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.slW0},{t:this.chNoFk},{t:this.chWall},{t:this.btn01},{t:this.slCameraRR},{t:this.theVadj}]}).wait(1));

	// btn3D
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("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");
	this.shape.setTransform(1542.25,29,0.8,0.8,0,0,0,0.1,-0.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("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");
	this.shape_1.setTransform(101.2,875.708);

	this.btn3D = new lib.btn3D();
	this.btn3D.name = "btn3D";
	this.btn3D.parent = this;
	new cjs.ButtonHelper(this.btn3D, 0, 1, 2, false, new lib.btn3D(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.btn3D},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(800,450,824,450);
// library properties:
lib.properties = {
	id: '98EA1A955B63F6489D0F00F6BFD1C4DE',
	width: 1600,
	height: 900,
	fps: 30,
	color: "#000000",
	opacity: 1.00,
	manifest: [],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['98EA1A955B63F6489D0F00F6BFD1C4DE'] = {
	getStage: function() { return exportRoot.getStage(); },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}



})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;