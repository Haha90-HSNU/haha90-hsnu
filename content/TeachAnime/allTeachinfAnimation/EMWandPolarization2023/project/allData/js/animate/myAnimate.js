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


(lib.reciverMeterBB = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AjHPoIAA/PIGPAAIAAfPg");
	this.shape.setTransform(0,-100);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.reciverMeterBB, new cjs.Rectangle(-20,-200,40,200), null);


(lib.btnPlayStop = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// text
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ABkEsIAApXIDIAAIAAJXgAkrEsIAApXIDIAAIAAJXg");
	this.shape.setTransform(22.808,-0.0638,0.6,0.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AkrkrIJXEsIpXErg");
	this.shape_1.setTransform(-22.8202,0.0962,0.6,0.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(4));

	// Layer_1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#00FFFF").ss(3,1,1).p("AnzkrIPnAAQBkAAAABkIAAGPQAABkhkAAIvnAAQhkAAAAhkIAAmPQAAhkBkAAg");

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#000066","#0066FF"],[0,1],0,30,0,-29.9).s().p("AnzEsQhkAAAAhkIAAmPQAAhkBkAAIPnAAQBkAAAABkIAAGPQAABkhkAAg");

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["#000066","#00FFFF"],[0,1],0,30,0,-29.9).s().p("AnzEsQhkAAAAhkIAAmPQAAhkBkAAIPnAAQBkAAAABkIAAGPQAABkhkAAg");

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#FF00FF").ss(3,1,1).p("AnzkrIPnAAQBkAAAABkIAAGPQAABkhkAAIvnAAQhkAAAAhkIAAmPQAAhkBkAAg");

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FF00FF").s().p("AnzEsQhkAAAAhkIAAmPQAAhkBkAAIPnAAQBkAAAABkIAAGPQAABkhkAAg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2,p:{rotation:0}}]}).to({state:[{t:this.shape_4,p:{rotation:0}},{t:this.shape_2,p:{rotation:0}}]},1).to({state:[{t:this.shape_4,p:{rotation:180}},{t:this.shape_2,p:{rotation:180}}]},1).to({state:[{t:this.shape_6},{t:this.shape_5}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-61.5,-31.5,123,63);


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


(lib.slThetaReciver = function(mode,startPosition,loop) {
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
	this.shape.graphics.f("#FFFFFF").s().p("AJ/CIIAAgZQAeAHAIgFQABgEAAgEIAAgcIhkAAIAAgXIBkAAIAAgQIAaAAIAAAQIAkAAIAAAXIgkAAIAAAiQgCARgMAHQgGAFgOAAQgNAAgSgEgAH7CMIAAgmIgrAAIAAgXIArAAIAAgTIgiAAQAAAAgBAAQgBAAAAgBQgBAAAAgBQAAAAAAgBIAAh9QAAgBAAAAQAAgBABAAQAAgBABAAQABAAAAAAIAiAAIAAgRIgpAAIAAgXIApAAIAAgaIAXAAIAAAaIAmAAIAAAXIgmAAIAAARIAiAAQABAAABAAQAAAAABABQAAAAAAABQABAAAAABIAAB9QAAABgBAAQAAABAAAAQgBABAAAAQgBAAgBAAIgiAAIAAATIApAAIAAAXIgpAAIAAAmgAISAlIAOAAIABgBIAAgfIgPAAgAHsAkIABABIAOAAIAAggIgPAAgAISgQIAPAAIAAggQAAAAAAAAQAAAAAAAAQAAAAgBAAQAAAAAAAAIgOAAgAHsgQIAPAAIAAggIgPAAgAooBwQgoAWg5AFIgGgaQAtgFAYgHIgvgRIgDgPIAfghIgqAAIAAgZIA8AAQAHgLAHgPIhHAAIAAgZIAsAAQgEgZgGgZIgaAAIAAgZIBGAAIAAgYIAaAAIAAAYIBKAAIAAAZIgcAAQgMAugBAEIAxAAIAAAZIhXAAQgGAPgHALIBkAAIAAAZIggAAQgMAhgaAZIBGAYQgHALgIALgApZBCQgBABAAAAQAAABAAAAQAAABABAAQAAAAABAAIAuARQAQgOAMgPQAFgKAEgLIg5AAQgMAQgPAOgAo+goIApAAQAIgYAFgaIhBAAIALAygAjvBRQgYAbgoAdIgXgSQAvghARgSIAHgIQgbgqgKg4QgHAWgLAPIgXgHIAACTIgZAAIAAhOQgjAUgfAOIgOgVIASgHIAAiqIAZAAIAACdIAKgGQAQgJALgIIAAinIAZAAIAAB/QAig+ABhBIAaADIgDAbIBzAAIAAAZIgYAAQgBBTgnA7QAXAcArAgIgXASQglgggVgagAkEgKQAJAYAMAZQAdgwAAhIIg/AAQACAnALAggArfCFIAAgbIAQAGQALACAFgDQACgEAAgFIAAhFIgYAMIgOgWIAmgTIAAhCIgiAAIAAgaIAiAAIAAgwIAaAAIAAAwIAfAAIAAAaIgfAAIAAA1QAKgHAGgEIAPAUQgKAHgVAMIAABaQAAASgOAIQgGAEgJAAQgMAAgTgGgAEBB+QATglAJgjQAHgiAAgqIAaACQgCAWgEAWQAJAsATAVIAAiHIgtAAIAAgXIB+AAIAPALQgGAggPAcIgYgHQAVgegCgLIgDAAIgpAAIAABBIBAAAIAAAZIhAAAIAAA/QALAFBBAAIgHAYQgtAAgUgEIgKgDQgsgRgOgnQgGAhgSAfQgNgIgIgDgABeCJIAAgMIg3AAIAAAMIgZAAIAAhgQAAgDAFAAIA2AAQgegUgSgSIgsAAQgUATgdASIgBABIA4AAQAFAAAAAFIAABeIgZAAIAAgMIg5AAIAAAMIgZAAIAAhPIgJACIgNgWQA1gRAdgVIhQAAIAAgYIBnAAIASgYIhjAAQgBAAgBAAQgBAAAAgBQgBAAAAgBQAAAAAAgBIAAhNQAAgBAAAAQAAgBABAAQAAgBABAAQABAAABAAIBkAAQABAAABAAQAAAAABABQAAAAAAABQAAAAAAABIAABIIACAAIATAMQgGALgGAJIBFAAQgNgLgKgFIAFgIIggAAQgBAAgBAAQgBAAAAgBQgBAAAAgBQAAAAAAgBIAAhNQAAgBAAAAQAAgBABAAQAAgBABAAQABAAABAAIBlAAQAAAAABAAQABAAAAABQABAAAAABQAAAAAAABIAABNQAAABAAAAQAAABgBAAQAAABgBAAQgBAAAAAAIgrAAIAPALIgKANIA5AAIAAAYIhPAAQAgAbAzALIgMAXIgLgDIAABPgAAnBBIAAAkIA3AAIAAglQAAgBAAAAQAAgBgBAAQAAAAgBAAQgBgBAAAAIgxAAQAAAAgBABQgBAAAAAAQgBABAAAAQAAABAAABgAhaBBIAAAkIA5AAIAAglQAAgBAAAAQAAgBgBAAQAAAAgBAAQgBgBgBAAIgxAAQgBAAgBABQgBAAAAAAQgBABAAAAQAAABAAABgAAnhIIABABIA4AAIABgBIAAgkIg6AAgAhdhIIABABIA5AAIABgBIAAgkIg7AAgADICGIABgbQAXAEAEgCQADgBABgFQAHgYAAhfQAAgBAAAAQAAgBgBAAQAAAAgBAAQgBgBAAAAIgZAAQgFBegTA2IgZgDQAbhTgChcIAAgaIgXAAIAAgYIAnAAIAAglIAZAAIAAAlIAkAAIAAAYIg0AAIAAAaIAAAGIAtAAQAHABAAAFQAACCgMAcQgFAJgGAEQgGACgKAAQgLAAgOgCgAJTBfIAPgPQAMALAMARIgSAOQgOgTgHgIgALMAhIiHAIIgCgVIA/gDIAAgRIg2AAQAAAAgBAAQgBAAAAAAQgBAAAAgBQAAAAAAgBIAAhQQAAgBAAAAQAAgBABAAQAAgBABAAQABAAAAAAIA2AAIAAgMIg/AAIAAgVIA/AAIAAgTIAYAAIAAATIBEAAIAAAVIhEAAIAAAMIA6AAQABAAABAAQABAAAAABQABAAAAABQAAAAAAABIAABQQAAABgBAAQAAABAAAAQgBAAAAAAQAAAAgBAAQAHAOAIAWIgTAIIgFgLgAKaAQIAqgDIgEgJIAIgEIguAAgAKagTIAnAAIAAgBIAAgNIgnAAgAJfgUQAAABAAAAQAAAAAAAAQABAAAAAAQAAAAAAAAIAiAAIAAgOIgjAAgAKag1IAnAAIAAgLIAAgBIgnAAgAJfhAIAAALIAjAAIAAgMIgiAAQAAAAAAAAQAAAAgBAAQAAAAAAAAQAAABAAAAgAD+g5QANgSALgRQAIgRAFgdIAZADIgEATIB+AAIAAAYIiFAAQgLAcgVAVg");
	this.shape.setTransform(-97.2,-0.0368);

	this.valueText = new cjs.Text("0.00", "26px 'Arial'", "#FFFFFF");
	this.valueText.name = "valueText";
	this.valueText.lineHeight = 31;
	this.valueText.lineWidth = 100;
	this.valueText.parent = this;
	this.valueText.setTransform(319.6,-13);

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

}).prototype = getMCSymbolPrototype(lib.slThetaReciver, new cjs.Rectangle(-171.1,-16,592.7,34.1), null);


(lib.slCombine = function(mode,startPosition,loop) {
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
	this.shape.graphics.f("#FFFFFF").s().p("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");
	this.shape.setTransform(-95.7,-1.0368);

	this.valueText = new cjs.Text("0.00", "26px 'Arial'", "#FFFFFF");
	this.valueText.name = "valueText";
	this.valueText.lineHeight = 31;
	this.valueText.lineWidth = 100;
	this.valueText.parent = this;
	this.valueText.setTransform(319.6,-13);

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

}).prototype = getMCSymbolPrototype(lib.slCombine, new cjs.Rectangle(-169.6,-16,591.2,34.1), null);


(lib.reciverMeter = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgWA8QgLgSAAgsQAAgrALgPQAHgMAPAAQAOABAJALQALAPAAAqQAAAqgLATQgIAPgPAAQgPAAgHgNgAgLgyQgHAMAAAkQAAAoAHANQAFAHAGAAQAHAAAFgIQAHgNAAgoQgBgjgHgMQgFgHgGAAQgHAAgEAHg");
	this.shape.setTransform(50.275,0.425);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgdBHIAAgOIAYAAIAAhqIgZAKIAAgPIAmgQIAAB/IAXAAIAAAOg");
	this.shape_1.setTransform(50.525,-200.25);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#FFFFFF").ss(5,1,1).p("AEsvnIjIAAIAAH0IAAHzIAAH0IAAH0ImPAAIAA/PIGPAAADInzIhkAAAEsAAIjIAAADIH0IhkAAAEsPoIjIAA");
	this.shape_2.setTransform(10,-100);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// 圖層_3
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("ADmBWQgUAeggAXIgUgSQAigVAZgoQgVgwgCgWIgDAIIgVgHIAAAqQAAABAAABQgBAAAAABQgBAAAAAAQgBAAgBAAIg7AAIgJAPIBWAAIAAAUIgiAAQgSAZgOAMIAnANIgPAUIgxgQIgdAIQgRAGggACIgHgZQAOAAAjgEIgYgJIgEgQQAMgIAHgIIgoAAIAAgUIA9AAIAJgPIg1AAQgBAAAAAAQgBAAAAAAQAAgBgBAAQAAgBAAgBIAAgyQABAAAAgBQAAgBAAAAQABgBAAAAQAAAAABAAIA6AAIAAgKIg2AAQgBAAAAgBQgBAAAAAAQgBgBAAAAQAAgBAAgBIAAgiIgSAAIAAgVIASAAIAAgiQAAgBAAgBQAAAAABgBQAAAAABAAQAAAAABgBIA2AAIAAgMIAZAAIAAAMIA0AAQABABABAAQAAAAABAAQAAABABAAQAAABAAABIAAAiIATAAIAAAVIgTAAIAAAiQAAABAAABQgBAAAAABQgBAAAAAAQgBABgBAAIg0AAIAAAKIA6AAQABAAABAAQAAAAABABQAAAAABABQAAABAAAAIAAADQAbg8gBg9IAYAAIgCAiIBFAAIAAAZIgQAAIAAAJQAABCgcA+QATAjAaAgIgWANQghgrgDgMgAA/BYQAAAAAAABQAAAAAAAAQAAAAAAABQAAAAAAAAIAcAIQARgJAOgSIgpAAQgHAJgLAIgADZgJQAGAXAHATQAQgsAAg4IAAgJIggAAQgFAdAIAmgABsAQIAlAAIABAAIAAgQIgBAAIglAAgAAuAAIAAAQIAlAAIAAgQIglAAQgBAAAAAAQAAAAAAAAQAAAAAAAAQAAAAABAAgABsg0IAeAAIABgBIAAgPIgfAAgAAyg1QAAAAAAABQAAAAAAAAQABAAAAAAQAAAAAAAAIAgAAIAAgQIghAAgABshZIAfAAIAAgRIgfAAgAAyhZIAhAAIAAgRIghAAgAhVCCIACgYQAcACAqAKIgGAXQgpgLgZAAgAjHB1QAmgDAVgIIAHAXQgZAIgnAEgAkdCEIAAhoQABgHAHAAIA9AAQAIAAAAAHIAABXQAAAIgIAAIgsAAIAAAJgAkEAwIAAAzIAXAAQAFgBAAgDIAAgvQAAgBAAgBQgBAAAAgBQgBAAAAAAQgBgBgBAAIgVAAQgBAAAAABQgBAAAAAAQgBABAAAAQAAABAAABgAi3BpIgCgDIAAhdQAAAAAAgBQAAgBABAAQAAgBAAAAQAAAAABAAICZAAQABAAABAAQAAAAABABQAAAAABABQAAABAAAAIAABdQAAABAAAAQgBABAAAAQgBAAAAAAQgBABgBAAgAiiBXIBvAAQABAAAAAAQAAAAAAAAQABgBAAAAQAAAAAAAAIAAgIIhxAAgAiiA+IBxAAIAAgLIhxAAgAiiAZIAAAKIBxAAIAAgKQAAgBAAAAQAAAAgBAAQAAAAAAAAQAAAAgBAAIhvAAQAAAAAAAAQgBAAAAAAQAAAAABAAQAAAAAAABgAkYAHIAAgXIBEAAIAAAXgAi/gBIgDgCIAAhBQABgBAAgBQAAAAABgBQAAAAAAAAQABgBAAAAICqAAQABAAAAABQABAAAAAAQABABAAAAQAAABAAABIAABBQAAAAAAABQAAAAgBAAQAAABgBAAQAAAAgBAAgAitg1IAAAiICFAAQAAAAAAAAQABAAAAAAQAAAAAAgBQAAAAAAAAIAAgHIgwAAQgIAAAAgIIAAgTIgUAAIgFAJQgLAVghgBIgGgSQAagBAIgKIglAAQAAAAAAAAQAAAAAAAAQAAAAAAABQAAAAAAAAgAhKgvQAAAFADgBIAgAAIAAgKQAAAAAAAAQAAgBAAAAQAAAAgBAAQAAAAAAAAIgiAAgAkYgdIAAgYIBEAAIAAAYgAkfhEIAAgXIBTAAIAAAXgAi1hRIAAgRIBAAAIAAgKIhKAAIAAgTIBKAAIAAgLIAXAAIAAALIBLAAIAAATIhLAAIAAAKIBAAAIAAARgAkXhqIAAgXIBBAAIAAAXg");
	this.shape_3.setTransform(-0.525,28.5);

	this.bb = new lib.reciverMeterBB();
	this.bb.name = "bb";
	this.bb.parent = this;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.bb},{t:this.shape_3}]}).wait(1));

	// 圖層_1
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(255,255,255,0.298)").s().p("AjHPoIAA/PIGPAAIAAfPg");
	this.shape_4.setTransform(0,-100);

	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(1));

}).prototype = getMCSymbolPrototype(lib.reciverMeter, new cjs.Rectangle(-29.3,-207.4,83,250), null);


(lib.chGrid = function(mode,startPosition,loop) {
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
	this.shape_1.graphics.f("rgba(51,51,51,0.498)").s().p("AiVCWIAAkrIErAAIAAErg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	// label
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("ADmCMIAAiAIgPAmIgZgGQAcgsAIgzIgfAAIAAgZIAjAAIAAg9IAYAAIAAA9IAdAAIAAAZIgdAAIAAAHQARAcAOAdIgUALIgLgYIAACMgAhoCLIAAiDIgOAqIgVgJQAZg6AIgrIgcAAIAAgYIAeAAIAAg2IAZAAIAAA2IAeAAIAAAYIgeAAIAAAIQASAfAPAfIgUALIgNgcIAACSgAGYCHIgVAAIAAiGIgVAAIAACGIgZAAIAAiGIgWAAIAACGIgZAAIAAiGIgNAAIAAgZIANAAIAAhhQABgJAJAAICSAAQAIABAAAIIAABhIAMAAIAAAZIgMAAIAABsQAAAQgLAIQgGAEgMAAQgJAAgMgCgAGbBuQANAEAEgBQAGgFAAgHIAAhkIgXAAgAGbgYIAXAAIAAhPQAAgBAAAAQAAgBAAAAQgBAAAAAAQAAgBAAAAIgWAAgAFugYIAVAAIAAhSIgVAAgAE/hnIAABPIAWAAIAAhSIgUAAQAAABgBAAQAAAAgBABQAAAAAAAAQAAABAAAAgAjyCFIgBgZQAOAFAEgBQAGgEAAgHIAAgbIgbAAIAAA2IgYAAIAAg2IgaAAIAAA2IgXAAIAAg2IgbAAIAAA6IgXAAIAAhSQgJAegPAdIgRgLIAAAjIgZAAIAAiTIgJAPIgZgIQAog+AIhEIAZADQgGAkgIAbIAACcQAOgeAEgVQAFgXAAgZIAAhmQAAgKAHAAQBdAEBLgLIAHAaQhIAHhSgBQgDAAAAAFIAAAMICdAAQAHAAAAAGIAAA0QAAAIgHAAIidAAIAAAEIAAAOICgAAQAGAAAAAFIAABpQAAAOgMAIQgFAEgLAAQgIAAgKgDgAj2AzIAbAAIAAgbIgDgDIgYAAgAkoAzIAaAAIAAgeIgaAAgAlaAYIAAAbIAbAAIAAgeIgaAAIgBADgAlqgpICJAAIACgDIAAgQQAAAAAAAAQAAgBAAAAQAAAAgBAAQAAAAgBAAIiJAAgAg0CCIAAgYIDAAAIAAAYgAgKBiIgEgYQAbAFAIgIQAFgEAFgLQAEgKAAgwQAAgzgFgEQgGgJgWABIgEgLIAOgdIg8AAIAAgXIC5AAIAAAXIhjAAIgMAVQAAAAAAABQAAABABAAQAAABAAAAQAAAAABAAQAPABAHALQAEAFACAIQACAKAAAcIgBAqQgDA4gVAOQgHAEgHABIgGABQgJAAgOgCgAAyBVQAWgVAPgZQgRgmgFgmIASgIQAFAlALAYQANgjAFggIgDgGQgCgDgFACIgpAAIAAgYIA4AAIAMAGQgFBFgSAuQAIARAWAdIgWAHQgNgRgHgOQgLASgRATgAgqA9QAAAAgBgBQAAAAgBAAQAAAAAAgBQAAAAAAAAIAAhuQAAAAAAgBQABgBAAAAQAAgBABAAQAAAAAAAAIA3AAQABAAABAAQAAAAABABQAAAAABABQAAABAAAAIAABuQAAAAAAABQgBAAAAAAQgBABAAAAQgBAAgBAAgAgXghIAABKIATAAIABgBIAAhJIgBgBIgTAAQAAAAgBAAQAAAAAAAAQAAAAAAABQABAAAAAAg");
	this.shape_2.setTransform(76.375,0.15);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

}).prototype = getMCSymbolPrototype(lib.chGrid, new cjs.Rectangle(-23.8,-20.7,165.8,38.7), null);


(lib.chBB = function(mode,startPosition,loop) {
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
	this.shape_1.graphics.f("rgba(51,51,51,0.498)").s().p("AiVCWIAAkrIErAAIAAErg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	// label
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("Ah6BMQgRgSAAgiQAAgkAVgTQARgOAZAAQAcAAASASQARASAAAfQAAAagIAPQgHAPgPAIQgPAIgSAAQgcABgSgTgAhogOQgMANAAAZQAAAaAMANQALANARAAQARAAALgNQAMgNAAgbQAAgXgMgOQgLgNgRABQgRgBgLANgAmNBTQgNgLgEgUIAWgFQACAPAJAGQAJAIAPAAQAQAAAIgGQAHgHAAgIQAAgJgGgEQgFgDgTgEQgZgHgKgFQgJgEgFgJQgFgIAAgJQAAgJAEgHQAEgIAHgFQAFgEAKgDQAJgCAKAAQAQgBAMAFQAMAFAGAIQAFAHADAOIgXACQgBgKgHgGQgIgFgNAAQgQAAgHAEQgGAGAAAHQAAAFACADQADACAGADIAUAGQAZAGAJAEQAKAEAFAIQAGAIAAAMQAAALgHAKQgHALgMAFQgNAGgQgBQgaAAgOgLgAETBbIAAi5IBGAAQAVAAANAGQANAGAHAMQAHALAAANQAAAMgGAKQgHALgNAGQARAFAJAMQAJAMAAAPQAAANgFAMQgGALgIAGQgIAGgMAEQgMACgSAAgAErBGIAvAAIARgCQAIgBAGgDQAFgEAEgGQAEgIAAgJQAAgKgGgIQgFgHgJgDQgKgDgSgBIgrAAgAErgQIApAAQAQAAAHgBQAKgDAEgHQAFgGAAgKQAAgJgEgIQgFgGgIgDQgIgDgUABIgmAAgAB0BbIgbhmIgbBmIgYAAIgoiGIAWAAIAeBrIAHgcIAVhPIAYAAIAaBoIAfhoIAWAAIgqCGgAi8BbIAAhVQAAgQgIgIQgHgHgOAAQgKAAgJAEQgJAGgDAJQgEAIAAAQIAABJIgXAAIAAi5IAXAAIAABDQAQgSAYAAQAPAAALAFQALAHAFAKQAFAKAAATIAABVg");
	this.shape_2.setTransform(76.9,-0.4,1.2,1.2,0,0,0,0.4,-0.3);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

}).prototype = getMCSymbolPrototype(lib.chBB, new cjs.Rectangle(-23.8,-20.7,165.8,38.7), null);


(lib.chArrow = function(mode,startPosition,loop) {
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
	this.shape_1.graphics.f("rgba(51,51,51,0.498)").s().p("AiVCWIAAkrIErAAIAAErg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	// label
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("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");
	this.shape_2.setTransform(80.325,0.112);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

}).prototype = getMCSymbolPrototype(lib.chArrow, new cjs.Rectangle(-23.8,-20.7,165.8,38.7), null);


// stage content:
(lib.myAnimate = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// UI
	this.slThetaReciver = new lib.slThetaReciver();
	this.slThetaReciver.name = "slThetaReciver";
	this.slThetaReciver.parent = this;
	this.slThetaReciver.setTransform(1372.75,622.85);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFF00").s().p("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");
	this.shape.setTransform(259.65,67.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FF0000").ss(6,1,1).p("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");
	this.shape_1.setTransform(259.65,67.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFF00").s().p("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");
	this.shape_2.setTransform(259.65,67.9);

	this.slCameraRR = new lib.theSlider();
	this.slCameraRR.name = "slCameraRR";
	this.slCameraRR.parent = this;
	this.slCameraRR.setTransform(1350,850);

	this.btnPlayStop = new lib.btnPlayStop();
	this.btnPlayStop.name = "btnPlayStop";
	this.btnPlayStop.parent = this;
	this.btnPlayStop.setTransform(1300.65,795.5,0.6,0.6,0,0,0,0.1,0.1);
	new cjs.ButtonHelper(this.btnPlayStop, 0, 1, 2, false, new lib.btnPlayStop(), 3);

	this.slCombine = new lib.slCombine();
	this.slCombine.name = "slCombine";
	this.slCombine.parent = this;
	this.slCombine.setTransform(1371.25,182.55);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.slCombine},{t:this.btnPlayStop},{t:this.slCameraRR},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.slThetaReciver}]}).wait(1));

	// btn3D
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#CCCCCC").s().p("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");
	this.shape_3.setTransform(1543.05,29.4);

	this.chArrow = new lib.chArrow();
	this.chArrow.name = "chArrow";
	this.chArrow.parent = this;
	this.chArrow.setTransform(1437.25,743.4,1,1,0,0,0,59.1,-1.8);

	this.reciverMeter = new lib.reciverMeter();
	this.reciverMeter.name = "reciverMeter";
	this.reciverMeter.parent = this;
	this.reciverMeter.setTransform(1441.25,440.2,1,1,0,0,0,0,-100);

	this.chGrid = new lib.chGrid();
	this.chGrid.name = "chGrid";
	this.chGrid.parent = this;
	this.chGrid.setTransform(1437.25,230.95,1,1,0,0,0,59.1,-1.8);

	this.chBB = new lib.chBB();
	this.chBB.name = "chBB";
	this.chBB.parent = this;
	this.chBB.setTransform(1437.25,794.65,1,1,0,0,0,59.1,-1.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("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");
	this.shape_4.setTransform(101.2,875.708);

	this.btn3D = new lib.btn3D();
	this.btn3D.name = "btn3D";
	this.btn3D.parent = this;
	new cjs.ButtonHelper(this.btn3D, 0, 1, 2, false, new lib.btn3D(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.btn3D},{t:this.shape_4},{t:this.chBB},{t:this.chGrid},{t:this.reciverMeter},{t:this.chArrow},{t:this.shape_3}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(800,450,994.4000000000001,450);
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