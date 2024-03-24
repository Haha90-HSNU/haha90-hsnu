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


(lib.checker2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhNBNQggggAAgtQAAgtAgggQAgggAtAAQAtAAAhAgQAgAgAAAtQAAAtggAgQghAhgtAAQgtAAggghg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.checker2, new cjs.Rectangle(-11,-11,22,22), null);


(lib.checker = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(8,1,1).p("AiLgIIA4AAIAfCFIDAj5");
	this.shape.setTransform(2.25,-4.25);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.checker, new cjs.Rectangle(-15.7,-20.7,36,33), null);


(lib.btnUp = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// text
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhCD6IAAkzIhTAAICVjAICWDAIhSAAIAAEzg");

	this.timeline.addTween(cjs.Tween.get(this.shape).to({_off:true},3).wait(1));

	// Layer_1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#00FFFF").ss(3,1,1).p("AjHkrIGPAAQBkAAAABkIAAGPQAABkhkAAImPAAQhkAAAAhkIAAmPQAAhkBkAAg");

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#000066","#0066FF"],[0,1],30,30,30,-29.9).s().p("AjHEsQhkAAAAhkIAAmPQAAhkBkAAIGPAAQBkAAAABkIAAGPQAABkhkAAg");

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#000066","#00FFFF"],[0,1],30,30,30,-29.9).s().p("AjHEsQhkAAAAhkIAAmPQAAhkBkAAIGPAAQBkAAAABkIAAGPQAABkhkAAg");

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#FF00FF").ss(3,1,1).p("AjHkrIGPAAQBkAAAABkIAAGPQAABkhkAAImPAAQhkAAAAhkIAAmPQAAhkBkAAg");

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FF00FF").s().p("AjHEsQhkAAAAhkIAAmPQAAhkBkAAIGPAAQBkAAAABkIAAGPQAABkhkAAg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1,p:{rotation:0}}]}).to({state:[{t:this.shape_3,p:{rotation:0}},{t:this.shape_1,p:{rotation:0}}]},1).to({state:[{t:this.shape_3,p:{rotation:180}},{t:this.shape_1,p:{rotation:180}}]},1).to({state:[{t:this.shape_5},{t:this.shape_4}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-31.5,-31.5,63,63);


(lib.btnRight = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// text
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhDD6IAAk0IhSAAICVi/ICWDAIhSAAIAAEzg");
	this.shape.setTransform(0,0,1,1,90);

	this.timeline.addTween(cjs.Tween.get(this.shape).to({_off:true},3).wait(1));

	// Layer_1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#00FFFF").ss(3,1,1).p("AjHkrIGPAAQBkAAAABkIAAGPQAABkhkAAImPAAQhkAAAAhkIAAmPQAAhkBkAAg");

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#000066","#0066FF"],[0,1],30,30,30,-29.9).s().p("AjHEsQhkAAAAhkIAAmPQAAhkBkAAIGPAAQBkAAAABkIAAGPQAABkhkAAg");

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#000066","#00FFFF"],[0,1],30,30,30,-29.9).s().p("AjHEsQhkAAAAhkIAAmPQAAhkBkAAIGPAAQBkAAAABkIAAGPQAABkhkAAg");

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#FF00FF").ss(3,1,1).p("AjHkrIGPAAQBkAAAABkIAAGPQAABkhkAAImPAAQhkAAAAhkIAAmPQAAhkBkAAg");

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FF00FF").s().p("AjHEsQhkAAAAhkIAAmPQAAhkBkAAIGPAAQBkAAAABkIAAGPQAABkhkAAg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1,p:{rotation:0}}]}).to({state:[{t:this.shape_3,p:{rotation:0}},{t:this.shape_1,p:{rotation:0}}]},1).to({state:[{t:this.shape_3,p:{rotation:180}},{t:this.shape_1,p:{rotation:180}}]},1).to({state:[{t:this.shape_5},{t:this.shape_4}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-31.5,-31.5,63,63);


(lib.btnLeft = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// text
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhDD6IAAk0IhSAAICVi/ICWDAIhSAAIAAEzg");
	this.shape.setTransform(0,0,1,1,-90);

	this.timeline.addTween(cjs.Tween.get(this.shape).to({_off:true},3).wait(1));

	// Layer_1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#00FFFF").ss(3,1,1).p("AjHkrIGPAAQBkAAAABkIAAGPQAABkhkAAImPAAQhkAAAAhkIAAmPQAAhkBkAAg");

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#000066","#0066FF"],[0,1],30,30,30,-29.9).s().p("AjHEsQhkAAAAhkIAAmPQAAhkBkAAIGPAAQBkAAAABkIAAGPQAABkhkAAg");

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#000066","#00FFFF"],[0,1],30,30,30,-29.9).s().p("AjHEsQhkAAAAhkIAAmPQAAhkBkAAIGPAAQBkAAAABkIAAGPQAABkhkAAg");

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#FF00FF").ss(3,1,1).p("AjHkrIGPAAQBkAAAABkIAAGPQAABkhkAAImPAAQhkAAAAhkIAAmPQAAhkBkAAg");

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FF00FF").s().p("AjHEsQhkAAAAhkIAAmPQAAhkBkAAIGPAAQBkAAAABkIAAGPQAABkhkAAg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1,p:{rotation:0}}]}).to({state:[{t:this.shape_3,p:{rotation:0}},{t:this.shape_1,p:{rotation:0}}]},1).to({state:[{t:this.shape_3,p:{rotation:180}},{t:this.shape_1,p:{rotation:180}}]},1).to({state:[{t:this.shape_5},{t:this.shape_4}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-31.5,-31.5,63,63);


(lib.btnDown = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// text
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhDD6IAAk0IhSAAICVi/ICWDAIhSAAIAAEzg");
	this.shape.setTransform(0,0,1,1,180);

	this.timeline.addTween(cjs.Tween.get(this.shape).to({_off:true},3).wait(1));

	// Layer_1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#00FFFF").ss(3,1,1).p("AjHkrIGPAAQBkAAAABkIAAGPQAABkhkAAImPAAQhkAAAAhkIAAmPQAAhkBkAAg");

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#000066","#0066FF"],[0,1],30,30,30,-29.9).s().p("AjHEsQhkAAAAhkIAAmPQAAhkBkAAIGPAAQBkAAAABkIAAGPQAABkhkAAg");

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#000066","#00FFFF"],[0,1],30,30,30,-29.9).s().p("AjHEsQhkAAAAhkIAAmPQAAhkBkAAIGPAAQBkAAAABkIAAGPQAABkhkAAg");

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#FF00FF").ss(3,1,1).p("AjHkrIGPAAQBkAAAABkIAAGPQAABkhkAAImPAAQhkAAAAhkIAAmPQAAhkBkAAg");

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FF00FF").s().p("AjHEsQhkAAAAhkIAAmPQAAhkBkAAIGPAAQBkAAAABkIAAGPQAABkhkAAg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1,p:{rotation:0}}]}).to({state:[{t:this.shape_3,p:{rotation:0}},{t:this.shape_1,p:{rotation:0}}]},1).to({state:[{t:this.shape_3,p:{rotation:180}},{t:this.shape_1,p:{rotation:180}}]},1).to({state:[{t:this.shape_5},{t:this.shape_4}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-31.5,-31.5,63,63);


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


(lib.title = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFF00").s().p("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");
	this.shape.setTransform(0.025,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FF0000").ss(8,1,1).p("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");
	this.shape_1.setTransform(0.025,0);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFF00").s().p("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");
	this.shape_2.setTransform(0.025,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.title, new cjs.Rectangle(-191.6,-48.2,383.29999999999995,96.5), null);


(lib.mmNum = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AALBeIAAiRQgIAIgMAHQgOAIgKAFIAAgXQATgJAOgMQANgNAGgMIAPAAIAAC6g");
	this.shape.setTransform(0.025,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Ag8BeQgBgJADgHQAFgNAKgMQALgNATgQQAegYAKgNQALgPAAgNQAAgOgKgJQgKgKgPAAQgQAAgKAKQgJAKgBASIgXgCQACgbAQgOQAQgOAZABQAbgBAQAQQAPAPAAAWQAAAKgEALQgFALgKALQgLAMgZAUQgTASgGAGIgKAMIBbAAIAAAXg");
	this.shape_1.setTransform(-0.0036,0);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgrBPQgPgOgDgXIAYgDQADASAJAJQALAJANAAQAQAAALgNQAMgMgBgVQAAgTgLgLQgLgLgQAAQgMAAgIAFQgJAFgFAHIgVgDIASheIBbAAIAAAWIhJAAIgKAyQARgMARAAQAYAAARARQAQAQAAAaQAAAZgOATQgSAWgeAAQgZAAgRgOg");
	this.shape_2.setTransform(0,0.025);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAVBMQgSgYAAg0QAAggAGgUQAIgUANgLQANgLAUAAQAPAAAMAGQALAGAHAMQAIALAEAQQAEAQAAAbQAAAhgHAUQgGAUgNALQgOALgVAAQgbAAgPgTgAAmg+QgMARAAAtQAAAuALAQQAKAOAQAAQAQAAALgPQAKgPAAguQAAgsgKgQQgLgPgQAAQgQAAgJANgAhOBcIAAiRQgHAJgOAHQgNAIgLAEIAAgWQATgJAOgNQAPgNAFgMIAQAAIAAC6g");

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AglA5QAAgEACgGQADgHAGgHQAGgIAMgKQASgPAHgIQAGgJAAgIQAAgIgGgGQgGgGgJAAQgKAAgGAGQgGAHAAAKIgOgCQABgPAKgJQAKgJAPABQAQAAAKAJQAKAJAAANQAAAHgDAHQgDAHgGAGIgWAUIgPAOQgEAEgCAEIA3AAIAAANg");
	this.shape_4.setTransform(18.67,-10.75);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgZAyQgKgKgCgOIAPgBQACALAGAGQAGAFAIAAQAJAAAHgHQAHgHAAgKQAAgJgHgHQgGgGgKgBQgCAAgHACIACgLIADAAQAHAAAIgEQAGgGAAgJQAAgIgEgFQgGgFgHAAQgIAAgGAFQgFAFgCAKIgOgCQADgOAJgHQAJgIANAAQAJAAAIADQAHAEAFAHQAEAHAAAIQAAAIgEAGQgEAGgIAEQALACAFAGQAGAIAAALQAAAOgLALQgLALgQAAQgPgBgKgIg");
	this.shape_5.setTransform(18.8,-10.65);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAKA5IAAgbIgxAAIAAgNIA0hJIALAAIAABJIAQAAIAAANIgQAAIAAAbgAgZARIAjAAIAAgzg");
	this.shape_6.setTransform(18.575,-10.725);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgaAxQgKgJgBgPIAPgBQACALAFAGQAHAFAIAAQAJAAAHgIQAHgIAAgMQAAgMgGgGQgIgHgJAAQgHAAgGADQgFADgDAEIgNgCIAKg5IA5AAIAAANIgtAAIgGAfQAKgHAKgBQAPAAALALQAKAJAAAQQAAAQgJALQgLAPgSAAQgPgBgLgIg");
	this.shape_7.setTransform(18.85,-10.55);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_3},{t:this.shape_4}]},1).to({state:[{t:this.shape_3},{t:this.shape_5}]},1).to({state:[{t:this.shape_3},{t:this.shape_6}]},1).to({state:[{t:this.shape_3},{t:this.shape_7}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-12.4,-16.5,35.1,26);


(lib.btnReset = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// text
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ADEC6IAAiAQhLBKhLAgIgWgfQBkgsBIhRIAAhuIibAAIAAgjICbAAIAAgwIAiAAIAAAwICaAAIAAAjIiaAAIAABuQBBBNBoAuIgZAcQhXgrg5g6IAACAgAmLC0IAAggICkAAIAAgSIiRAAIAAggICRAAIAAgVIiAAAQgFgBAAgEIAAiEQAAgEAFgBICAAAIAAgUIinAAIAAgfICnAAIAAgTQhMADg0gBIgDgiQBBABBWgFQBZgGAsgGIAFAhQgiAHhQAFQgFACgFgBIAAAVICmAAIAAAfIimAAIAAAUIB/AAQAFABAAAEIAACEQAAAEgFABIh/AAIAAAVICQAAIAAAgIiQAAIAAASICjAAIAAAggAjFAuIBhAAIACgCIAAgWIhjAAgAlLAsQAAAAAAABQAAAAABAAQAAAAAAAAQAAABABAAIBiAAIAAgYIhkAAgAjFgIIBjAAIAAgZIhjAAgAlLgIIBkAAIAAgZIhkAAgAAaAnQA2g3AYhGIAhAKQgKATgEAQIAzAxIgXAZQgRgYgZgWQgZArgdAcgAEtgSQgOAXgLAOIgfgRQAigoAOgwIAhAJIgNAhQAsAkAnAmIgWAZQgfgigqgng");
	this.shape.setTransform(0.025,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(4));

	// Layer_1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#00FFFF").ss(3,1,1).p("AnzkrIPnAAQBkAAAABkIAAGPQAABkhkAAIvnAAQhkAAAAhkIAAmPQAAhkBkAAg");

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#000066","#0066FF"],[0,1],0,30,0,-29.9).s().p("AnzEsQhkAAAAhkIAAmPQAAhkBkAAIPnAAQBkAAAABkIAAGPQAABkhkAAg");

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#000066","#00FFFF"],[0,1],0,30,0,-29.9).s().p("AnzEsQhkAAAAhkIAAmPQAAhkBkAAIPnAAQBkAAAABkIAAGPQAABkhkAAg");

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#FF00FF").ss(3,1,1).p("AnzkrIPnAAQBkAAAABkIAAGPQAABkhkAAIvnAAQhkAAAAhkIAAmPQAAhkBkAAg");

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FF00FF").s().p("AnzEsQhkAAAAhkIAAmPQAAhkBkAAIPnAAQBkAAAABkIAAGPQAABkhkAAg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1,p:{rotation:0}}]}).to({state:[{t:this.shape_3,p:{rotation:0}},{t:this.shape_1,p:{rotation:0}}]},1).to({state:[{t:this.shape_3,p:{rotation:180}},{t:this.shape_1,p:{rotation:180}}]},1).to({state:[{t:this.shape_5},{t:this.shape_4}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-61.5,-31.5,123,63);


(lib.btnPlayStop = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// text
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AkrkrIJXErIpWEsg");
	this.shape.setTransform(-0.0103,0.001,0.6,0.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(4));

	// Layer_1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#00FFFF").ss(3,1,1).p("AnzkrIPnAAQBkAAAABkIAAGPQAABkhkAAIvnAAQhkAAAAhkIAAmPQAAhkBkAAg");

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#000066","#0066FF"],[0,1],0,30,0,-29.9).s().p("AnzEsQhkAAAAhkIAAmPQAAhkBkAAIPnAAQBkAAAABkIAAGPQAABkhkAAg");

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#000066","#00FFFF"],[0,1],0,30,0,-29.9).s().p("AnzEsQhkAAAAhkIAAmPQAAhkBkAAIPnAAQBkAAAABkIAAGPQAABkhkAAg");

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#FF00FF").ss(3,1,1).p("AnzkrIPnAAQBkAAAABkIAAGPQAABkhkAAIvnAAQhkAAAAhkIAAmPQAAhkBkAAg");

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FF00FF").s().p("AnzEsQhkAAAAhkIAAmPQAAhkBkAAIPnAAQBkAAAABkIAAGPQAABkhkAAg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1,p:{rotation:0}}]}).to({state:[{t:this.shape_3,p:{rotation:0}},{t:this.shape_1,p:{rotation:0}}]},1).to({state:[{t:this.shape_3,p:{rotation:180}},{t:this.shape_1,p:{rotation:180}}]},1).to({state:[{t:this.shape_5},{t:this.shape_4}]},1).wait(1));

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


(lib.theCheckbox = function(mode,startPosition,loop) {
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
	this.label = new cjs.Text("文字標籤", "26px 'Microsoft JhengHei'", "#FFFFFF");
	this.label.name = "label";
	this.label.lineHeight = 37;
	this.label.lineWidth = 132;
	this.label.parent = this;
	this.label.setTransform(24,-18.6);

	this.timeline.addTween(cjs.Tween.get(this.label).wait(1));

}).prototype = getMCSymbolPrototype(lib.theCheckbox, new cjs.Rectangle(-23.8,-20.7,181.9,38.7), null);


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


(lib.theBtnUp = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層_1
	this.btn = new lib.btnUp();
	this.btn.name = "btn";
	this.btn.parent = this;
	new cjs.ButtonHelper(this.btn, 0, 1, 2, false, new lib.btnUp(), 3);

	this.timeline.addTween(cjs.Tween.get(this.btn).wait(1));

}).prototype = getMCSymbolPrototype(lib.theBtnUp, new cjs.Rectangle(-31.5,-31.5,63,63), null);


(lib.theBtnRight = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層_1
	this.btn = new lib.btnRight();
	this.btn.name = "btn";
	this.btn.parent = this;
	new cjs.ButtonHelper(this.btn, 0, 1, 2, false, new lib.btnRight(), 3);

	this.timeline.addTween(cjs.Tween.get(this.btn).wait(1));

}).prototype = getMCSymbolPrototype(lib.theBtnRight, new cjs.Rectangle(-31.5,-31.5,63,63), null);


(lib.theBtnLeft = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層_1
	this.btn = new lib.btnLeft();
	this.btn.name = "btn";
	this.btn.parent = this;
	new cjs.ButtonHelper(this.btn, 0, 1, 2, false, new lib.btnLeft(), 3);

	this.timeline.addTween(cjs.Tween.get(this.btn).wait(1));

}).prototype = getMCSymbolPrototype(lib.theBtnLeft, new cjs.Rectangle(-31.5,-31.5,63,63), null);


(lib.theBtnDown = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層_1
	this.btn = new lib.btnDown();
	this.btn.name = "btn";
	this.btn.parent = this;
	new cjs.ButtonHelper(this.btn, 0, 1, 2, false, new lib.btnDown(), 3);

	this.timeline.addTween(cjs.Tween.get(this.btn).wait(1));

}).prototype = getMCSymbolPrototype(lib.theBtnDown, new cjs.Rectangle(-31.5,-31.5,63,63), null);


(lib.slMMRatio = function(mode,startPosition,loop) {
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
	this.label.setTransform(-244.7,12);

	this.valueText = new cjs.Text("0", "26px 'Arial'", "#FFFFFF");
	this.valueText.name = "valueText";
	this.valueText.lineHeight = 31;
	this.valueText.lineWidth = 100;
	this.valueText.parent = this;
	this.valueText.setTransform(-390.7,-38.1);

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

}).prototype = getMCSymbolPrototype(lib.slMMRatio, new cjs.Rectangle(-392.7,-40.1,558.7,88.7), null);


(lib.slBallY = function(mode,startPosition,loop) {
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
									var localY = e.stageY - sl.y;
									setValue(sl,localY);
								});
		sl.on('pressmove',function(e){
									//拖曳設值
									var localY = e.stageY - sl.y;
									setValue(sl,localY);
								});
		//setValue from localY
		var setValue = function(who,localY){
			var ly=localY;
			if(ly<0){ly=0;}
			else if(ly>who.len){ly=who.len;}
			who.btn.y=ly;
			who.val = who.min+ly/who.len*(who.max-who.min);
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
												    sl.btn.y=sl.len*(sl.val-sl.min)/(sl.max-sl.min);
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
										        sl.btn.y=sl.len*(sl.val-sl.min)/(sl.max-sl.min);
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
										        sl.btn.y=sl.len*(sl.val-sl.min)/(sl.max-sl.min);
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
	this.label.setTransform(449,37.1);

	this.valueText = new cjs.Text("0", "26px 'Arial'", "#FFFFFF");
	this.valueText.name = "valueText";
	this.valueText.lineHeight = 31;
	this.valueText.lineWidth = 100;
	this.valueText.parent = this;
	this.valueText.setTransform(303,-13);

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
	this.btnS.setTransform(0,74.9,1.8,0.3,90);
	new cjs.ButtonHelper(this.btnS, 0, 1, 2, false, new lib.btnSquare(), 3);

	this.timeline.addTween(cjs.Tween.get(this.btnS).wait(1));

	// line
	this.bgLine = new lib.sliderBGLine();
	this.bgLine.name = "bgLine";
	this.bgLine.parent = this;
	this.bgLine.setTransform(0,0,1,1,90);

	this.timeline.addTween(cjs.Tween.get(this.bgLine).wait(1));

}).prototype = getMCSymbolPrototype(lib.slBallY, new cjs.Rectangle(-16,-16.1,467,182), null);


(lib.rbFollowRing = function(mode,startPosition,loop) {
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
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AGlAkIgDAAIgPAQIAAArQAUgDALgDIADAUQgfAIg0ADIgFgUIAhgDIAAgbQgUANgQAGIgLgSQAhgNAYgWIgeAAQgBAAAAAAQgBAAAAgBQAAAAAAAAQAAgBAAgBIAAgvIACgCICCAAQABAAABABQAAAAABAAQAAAAAAABQABAAAAAAIAAAvQAAABgBABQAAAAAAAAQgBABAAAAQgBAAgBAAIgyAAQAEAPAHANQAXgOAMgKIALAQQgNAMgTAMQAVARAYAHIgPASQhCgcgKg6gAF8ASIBeAAIABgBIAAgPIhfAAgAjHBmQAUgFAHgGQAIgHAAgJIAAgzIgCgCIgKAAQAAAZgLAKQgGAIgJABQgKAAgPgFIAAA7IgUAAIAAjpQAAgBAAAAQAAAAAAgBQAAAAABAAQAAAAAAAAIACgBIAyAAIANAIIgLA+QgDAPAEAEQAHAQAEANIAgAAQAGgBAAAGIAABBIAAACQABAFAGAGQAFAHAHADQAUAFBfgEIgFAWIhZAAQgkgCgMgSQgGAHgLAHQgNAIgMABgAjjhgIAACGQAJAIAKAAQAFAAABgDQACgBADgJQABgUgQgrQgBgCAAgGIALg7IgYAAIgBABgADbB4IAAgKIizAAIAAAKIgUAAIAAjiQAAgHAHAAIDPAAQAGAAAAAHIAADigADRBPIgFALIAPAAIAAi1QAAAAAAgBQAAAAAAAAQgBAAAAgBQgBAAAAAAIiuAAQAAAAgBAAQAAABgBAAQAAAAAAABQgBABAAAAIAAC0IASAAIgEgLIAogNIgkAAQAAAAgBAAQAAgBgBAAQAAAAAAgBQAAAAAAgBIAAhcIACgCICQAAQABABAAAAQABAAAAAAQABABAAAAQAAAAAAAAIAABcQAAABAAAAQAAABgBAAQAAAAgBABQAAAAgBAAIgeAAQAWAHAPAGgAC5BaQgWgJgIgBIAEgOIg5AAIAGAOQgKAGgOAEIBlAAIAAAAgABMAxIBsAAIABgBIAAgKIhtAAgABMAWIBtAAIAAgLIhtAAgABMgFIBtAAIAAgKIhtAAgAmxBkIAfgHIAAjJQAAgGAGAAIBtAAQAFAAAAAHIAABkQAAAHgHAAIgyAAQAEAXAHAPQAfgSAPgPIAOARQgUARgfASQANAZAmAWIgRAPIgSgOQgvgogJhBIgWAAIAABWQAWgIANgHIALATQggARg5ANgAl9gVIBMAAQAAAAABAAQAAAAABAAQAAgBAAAAQABgBAAgBIAAgWIhPAAgAl9hYIAAAWIBPAAIAAgWQAAgFgGAAIhEAAQgFABAAAEgAn/BfQAFgCAGAAIAAhkIAUAAIAABeIAPgFIAAhsIghAAQAAAAgBAAQAAAAgBgBQAAAAAAAAQAAgBAAgBIAAhRQAAgBAAgBQAAAAAAAAQABgBAAAAQABAAAAAAIBPAAQAAAAABAAQAAAAABABQAAAAAAAAQAAABAAABIAABRQAAABAAABQAAAAAAAAQgBABAAAAQgBAAAAAAIgaAAIAAAjIAcAAIAAAUIgcAAIAAAuIAZgLIAIATQgdAQg+AQgAnhguIArAAQAAAAABAAQAAAAAAgBQAAAAAAAAQAAAAAAAAIAAguIgsAAgAhABbIgBgWQAVAFAEgDQAFgDABgHIAAgGIhEAAIAAAhIgUAAIAAhkQAAgEAEAAIBiAAQAGAAAAAEIAABSQAAAMgKAGQgHAEgOAAIgTgBgAhmAnIBEAAIAAgMIhEAAgAhmABIAAAKIBEAAIAAgKIgDgBIhAAAIgBABgAENBIIAagIIAAhGIgWAAIAAgVIAWAAIAAg9IgXAAIAAgVIBEAAIAAAVIgYAAIAAA9IAVAAIAAAVIgVAAIAAA9IAVgLIALARQgaARgqANgAi7gsIAOgPQAMAKANAQIgNAOQgQgSgKgHgAiUglQAYgWARgcIgbAAIAAgSIAkAAIAFgQIAUAHIgEAJIA/AAIAAASIhIAAIgHAMIBJAAIAAARIgjAAIAAAOIArAAIAAASIhqAAIAAgMIgMANgAhxgsIAmAAIAAgOIgbAAQgGAHgFAHgAFagbIAAgTIChAAIAAATgABAgoQgBAAAAAAQgBgBAAAAQgBAAAAgBQAAAAAAgBIAAgnQAAAAAAgBQAAAAABAAQAAAAABgBQAAAAABAAICGAAIACACIAAAnQAAABgBAAQAAABAAAAQAAAAgBABQAAAAAAAAgABQg5IABABIBkAAIAAgMIhlAAgAFig5QAAAAAAAAQgBgBAAAAQAAAAAAgBQAAAAAAgBIAAgyQAAgBAAgBQAAAAABAAQAAgBAAAAQAAAAAAAAICQAAQABAAABAAQAAAAABABQAAAAAAAAQAAABAAABIAAAyQAAABAAAAQAAABAAAAQgBAAAAABQgBAAgBAAgAHKhLIAWAAIABgBIAAgTIgBgBIgWAAgAGghLIAYAAIAAgVIgYAAgAF0hfIAAAUIAZAAIAAgVIgZAAQAAAAAAAAQAAAAAAAAQAAABAAAAQAAAAAAAAgAiwhgIANgNQANAJAOASIgQANQgOgSgKgJg");
	this.shape.setTransform(80,0.025);

	this.checker = new lib.checker2();
	this.checker.name = "checker";
	this.checker.parent = this;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.checker},{t:this.shape}]}).wait(1));

	// box
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#CCCCCC").ss(3,1,1).p("ACWAAQAAA+gsAsQgsAsg+AAQg9AAgsgsQgsgsAAg+QAAg9AsgtQAsgrA9AAQA+AAAsArQAsAtAAA9g");

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#333333").s().p("AhpBpQgsgrAAg+QAAg9AsgsQAsgsA9AAQA+AAAsAsQAsAsAAA9QAAA+gsArQgsAtg+AAQg9AAgsgtg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.rbFollowRing, new cjs.Rectangle(-23.8,-18,165.8,36), null);


(lib.rbFollowGround = function(mode,startPosition,loop) {
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
	this.checker = new lib.checker2();
	this.checker.name = "checker";
	this.checker.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.checker).wait(1));

	// box
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#CCCCCC").ss(3,1,1).p("ACWAAQAAA+gsAsQgsAsg+AAQg9AAgsgsQgsgsAAg+QAAg9AsgtQAsgrA9AAQA+AAAsArQAsAtAAA9g");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#333333").s().p("AhpBpQgsgrAAg+QAAg9AsgsQAsgsA9AAQA+AAAsAsQAsAsAAA9QAAA+gsArQgsAtg+AAQg9AAgsgtg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	// label
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("ACXBiIAfgIIAAjJQAAgGAGAAIBsAAQAHAAAAAHIAABlQAAAHgIAAIgyAAQAEAWAHAQQAegTARgPIANARQgVASgeASQANAYAmAXIgSAPIgSgOQgtgpgLhAIgVAAIAABVQAXgIANgHIAKATQggASg5ANgADLgXIBLAAQABAAABAAQAAgBABAAQAAAAAAgBQAAgBAAAAIAAgXIhOAAgADLhaIAAAVIBOAAIAAgVQACgFgHAAIhEAAQgFABAAAEgAjNB1IAAiUQgoArg2AiIgQgUQAWgMAUgNQAvggAlg7Ih4AAIAAgYIDmAAIAAAYIhUAAQgKARgJAMIAACygABJBdQAFgDAHAAIAAhjIAUAAIAABdIAOgFIAAhrIggAAQgBAAgBAAQAAgBgBAAQAAAAAAgBQgBAAAAgBIAAhSQAAgBABAAQAAgBAAAAQABAAAAgBQABAAABAAIBNAAQABAAABAAQAAABABAAQAAAAAAABQABAAAAABIAABSQAAABgBAAQAAABAAAAQgBAAAAABQgBAAgBAAIgZAAIAAAiIAdAAIAAAUIgdAAIAAAuIAYgLIAIATQgcARg+AQgABogxIAqAAQAAAAABAAQAAAAAAAAQAAAAAAAAQABgBAAAAIAAgtIgsAAgAiygeIAPgTQAqAeAyA3IgTAQQgyg5gmgZg");
	this.shape_2.setTransform(60,0.025);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

}).prototype = getMCSymbolPrototype(lib.rbFollowGround, new cjs.Rectangle(-23.8,-18,165.8,36), null);


(lib.rbFollowCenter = function(mode,startPosition,loop) {
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
	this.checker = new lib.checker2();
	this.checker.name = "checker";
	this.checker.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.checker).wait(1));

	// box
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#CCCCCC").ss(3,1,1).p("ACWAAQAAA+gsAsQgsAsg+AAQg9AAgsgsQgsgsAAg+QAAg9AsgtQAsgrA9AAQA+AAAsArQAsAtAAA9g");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#333333").s().p("AhpBpQgsgrAAg+QAAg9AsgsQAsgsA9AAQA+AAAsAsQAsAsAAA9QAAA+gsArQgsAtg+AAQg9AAgsgtg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	// label
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("ACpBoIAEgSIhSAAIAFARQghAMgvAHIgEgVQAqgIAbgHIgrAAQgFAAAAgGIAAhtQABgFAEAAIBkAAIgOgOQAUgQAAgTIAAgcQgBgIAIABQAsABAmgEIAFAUQgfADgnAAQgDAAAAAEIAAAGIBXAAIAAAUIgpAAIAAAeIgUAAIAAgeIgcAAQgEAQgPASIBQAAQAGABAAAEIAABtQAAAGgGAAIglAAQAbAFAiAKIgFAVQgtgPgdgDgAA4BCICXAAIABgBIAAgNIiYAAgAA4AiICYAAIAAgOIiYAAgAA4gNIAAAPICYAAIAAgPIgBgBIiXAAQgBAAAAAAQAAAAAAAAQAAABAAAAQAAAAABAAgAjHBmQAUgFAIgGQAHgHABgJIAAgzIgCgCIgLAAQAAAZgKAKQgHAIgJABQgJAAgPgFIAAA7IgVAAIAAjpQAAgBABAAQAAgBAAAAQAAAAAAAAQAAAAAAAAIACgBIAyAAIANAIIgLA+QgCAPADAEQAHAQAFANIAgAAQAFgBABAGIAABBIAAACQAAAFAHAGQAEAHAIADQATAFBggEIgGAWIhYAAQglgCgMgSQgFAHgMAHQgMAIgNABgAjihgIAACGQAJAIAJAAQAGAAAAgDQACgBAEgJQABgUgRgrQgBgCAAgGIALg7IgXAAIgBABgAmwBkIAfgHIAAjJQgBgGAHAAIBsAAQAGAAAAAHIAABkQAAAHgHAAIgyAAQAEAXAGAPQAfgSAQgPIAOARQgVARgfASQAOAZAmAWIgSAPIgSgOQgugogKhBIgWAAIAABWQAXgIANgHIAKATQggARg4ANgAl9gVIBMAAQABAAAAAAQABAAAAgBQABAAAAAAQAAgBAAgBIAAgWIhPAAgAl9hYIAAAWIBPAAIAAgWQABgFgHAAIhDAAQgGABAAAEgAFpB0QgKAAgGgEQgMgJAAgVIAAi4IAXAAIAAC0IACALQADAEAJAAIA4AAQAMAAAEgGQACgEABgGQABgGgBgoIAYAEQABAqgEAPQgBAIgDAGQgIAIgDABIgRABgAn+BfQAEgCAHAAIAAhkIAUAAIAABeIAPgFIAAhsIghAAQgBAAAAAAQgBAAAAAAQgBgBAAAAQAAgBAAgBIAAhRQAAgBAAgBQAAAAABAAQAAgBABAAQAAAAABAAIBOAAQABAAAAAAQABAAAAABQABAAAAAAQAAABAAABIAABRQAAABAAABQAAAAgBABQAAAAgBAAQAAAAgBAAIgaAAIAAAjIAdAAIAAAUIgdAAIAAAuIAZgLIAIATQgdAQg9AQgAngguIArAAQAAAAAAAAQAAAAABAAQAAgBAAAAQAAAAAAAAIAAguIgsAAgAhABbIgBgWQAWAFAEgDQAFgDAAgHIAAgGIhDAAIAAAhIgVAAIAAhkQAAgEAEAAIBjAAQAFAAAAAEIAABSQAAAMgKAGQgHAEgOAAIgTgBgAhlAnIBDAAIAAgMIhDAAgAhlABIAAAKIBDAAIAAgKIgCgBIhAAAIgBABgAEOBWQAThmgBhAIAWACQABBGgTBhgAHJhVIAWgFQAXBGAJBlIgWAEQgMhsgUg+gAF6hzIAVgFQAVA+AHBaIgWAEQgKhfgRg4gAi6gsIAOgPQAMAKANAQIgOAOQgPgSgKgHgAAJgnQAPgTAAgUIAAggQAAgHAGAAQAwAAAhgEIAHAUQgmAEggAAQgBAAAAABQgBAAAAAAQgBABAAAAQAAABAAABIAAAFIBbAAIAAAUIgrAAIAAAeIgVAAIAAgeIgcAAQgEAYgNATgAiTglQAXgWARgcIgaAAIAAgSIAjAAIAGgQIATAHIgEAJIA/AAIAAASIhHAAIgHAMIBJAAIAAARIgkAAIAAAOIArAAIAAASIhqAAIAAgMIgMANgAhxgsIAmAAIAAgOIgaAAQgHAHgFAHgAiwhgIAOgNQANAJANASIgQANQgOgSgKgJg");
	this.shape_2.setTransform(80,0.025);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

}).prototype = getMCSymbolPrototype(lib.rbFollowCenter, new cjs.Rectangle(-23.8,-18,165.8,36), null);


(lib.mmText = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層_1
	this.nnNum2 = new lib.mmNum();
	this.nnNum2.name = "nnNum2";
	this.nnNum2.parent = this;
	this.nnNum2.setTransform(32.05,20.8);

	this.nnNum1 = new lib.mmNum();
	this.nnNum1.name = "nnNum1";
	this.nnNum1.parent = this;
	this.nnNum1.setTransform(32.05,-18.25);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(3,0,1).p("AinAAIFPAA");
	this.shape.setTransform(38.704,0,1.4881,1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FFFFFF").ss(3,0,1).p("AinAAIFPAA");
	this.shape_1.setTransform(-31.3,0);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("Ag8AnIAAgWIB6AAIAAAWgAg8gRIAAgVIB6AAIAAAVg");

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("ABhE6IAAjqIhRDqIggAAIhRjuIAADuIgkAAIAAkXIA4AAIBCDFIAMApIAPgsIBDjCIAyAAIAAEXgABnhqIAAh/QAAgVgDgJQgEgIgIgGQgJgGgMAAQgVAAgPAPQgOANAAAgIAAB1IghAAIAAiDQAAgYgJgLQgIgLgTAAQgPAAgMAHQgMAIgGAPQgFAPAAAbIAABpIgiAAIAAjLIAeAAIAAAdQAKgPAQgJQAQgJAUAAQAWAAAPAKQANAJAGARQAYgkAmAAQAeAAARASQAQAQAAAiIAACLg");
	this.shape_3.setTransform(-31.275,2.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.nnNum1},{t:this.nnNum2}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.mmText, new cjs.Rectangle(-49.6,-28.5,114.80000000000001,62.8), null);


(lib.chTrace = function(mode,startPosition,loop) {
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
	this.shape_2.graphics.f("#FFFFFF").s().p("ACkBqQAvgiABhWIAAg5IgoAAIAAgUIA7AAIAAgaIAWAAIAAAaIA9AAIAAAUIgpAAIAACmQgCAPgKAGQgJAHgggHIAAgWQAYAHAFgEQACgDAAgEIAAihIgSAAIAAA5QgBAsgNAmQgPAfgVAVgAjcBrQAsgnABhkIAAgeIgYAAIAAgXIAYAAIAAggIAWAAIAAAgIAhAAQAIgBAAAJIAACiQgBAEADADQADADADAAIABAAIAFgCQACgDAAgDIAAgxIAWAEIgCA5QgEAJgGAEQgHAFgJAAIgJAAQgNgCgGgKQgFgFAAgJIAAiVQAAgBAAgBQAAgBAAAAQgBgBAAAAQgBAAAAAAIgQAAIAAAeIgDAsQgKBHgiAlgAkOB4IAAglIgtAAIAAgWIAtAAIAAgPIglAAQgBAAgBAAQAAAAgBAAQAAgBAAAAQAAgBAAgBIAAhoQAAgBAAgBQAAAAAAAAQABgBAAAAQABAAABAAIAlAAIAAgPIgsAAIAAgVIAsAAIAAgTIAWAAIAAATIAtAAIAAAVIgtAAIAAAPIAnAAQAAAAABAAQAAAAABABQAAAAAAAAQAAABAAABIAABoQAAABAAABQAAAAAAABQgBAAAAAAQgBAAAAAAIgnAAIAAAPIArAAIAAAWIgrAAIAAAlgAj4AZIAUAAIABgBIAAgXIgVAAgAkiAZIAUAAIAAgYIgUAAgAj4gUIAVAAIAAgWIgBgBIgUAAgAkigUIAUAAIAAgXIgUAAgABHBhQAGgCAGgBIAAhdIATAAIAABYQAHgDAHgBIAAhtIgeAAQgBAAAAAAQgBAAAAAAQgBgBAAAAQAAgBAAgBIAAhRQAAgBAAgBQAAAAABAAQAAgBABAAQAAAAABAAIBMAAQABAAAAAAQABAAAAABQABAAAAAAQAAABAAABIAABRQAAABAAABQAAAAgBABQAAAAgBAAQAAAAgBAAIgaAAIAAAjIAbAAIAAAUIgbAAIAAAwIAZgJIAIAUQgdAOg9ANgABngsIAoAAIABgBIAAguIgpAAgAEoBIQgDg5gKg8IATgCQAMA8ABA7gACcA8QAbgzAAg3IAUABQgEBEgXArg");
	this.shape_2.setTransform(70,0.025);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

}).prototype = getMCSymbolPrototype(lib.chTrace, new cjs.Rectangle(-23.8,-20.7,165.8,38.7), null);


(lib.chMC = function(mode,startPosition,loop) {
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
	this.shape_2.graphics.f("#FFFFFF").s().p("AibBoIAEgSIhSAAIAFARQggAMgvAHIgGgVQArgIAbgHIgrAAQgFAAAAgGIAAhtQABgFAEAAIBkAAIgNgOQATgQAAgTIAAgcQgBgIAIABQAsABAmgEIAFAUQgfADgnAAQgDAAAAAEIAAAGIBXAAIAAAUIgpAAIAAAeIgUAAIAAgeIgcAAQgEAQgPASIBQAAQAGABAAAEIAABtQAAAGgGAAIgkAAQAaAFAiAKIgFAVQgtgPgdgDgAkMBCICXAAIABgBIAAgNIiYAAgAkMAiICYAAIAAgOIiYAAgAkMgNIAAAPICYAAIAAgPIgBgBIiXAAQgBAAAAAAQAAAAAAAAQAAABAAAAQAAAAABAAgACmB0QgKAAgGgEQgNgJAAgVIAAi4IAYAAIAAC0IACALQADAEAJAAIA4AAQAMAAADgGQADgEACgGQABgGgBgoIAWAEQABAqgDAPQAAAIgFAGQgGAIgFABIgQABgABKBWQAUhmgBhAIAXACQABBGgUBhgAEGhVIAWgFQAXBGAJBlIgWAEQgMhsgUg+gAC2hzIAXgFQAUA+AHBaIgXAEQgJhfgSg4gAk7gnQAPgTAAgUIAAggQAAgHAGAAQAvAAAigEIAHAUQgnAEgfAAQgDAAAAAEIAAAFIBbAAIAAAUIgrAAIAAAeIgVAAIAAgeIgcAAQgEAYgNATg");
	this.shape_2.setTransform(70,0.025);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

}).prototype = getMCSymbolPrototype(lib.chMC, new cjs.Rectangle(-23.8,-20.7,165.8,38.7), null);


(lib.chGround = function(mode,startPosition,loop) {
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
	this.shape_2.graphics.f("#FFFFFF").s().p("AD7BQQgVAUgjAVIgQgPQAggSAZgYQgggqgDg6IgGAAIAAAfQgBBJgjAzIgTgJQAUgfAHgcQAHgZgBglIAAheQAAgGAHAAICAAAIAAAWIhuAAQgBAAAAABQgBAAAAAAQgBAAAAABQAAAAAAAAIAAAeIBjAAIANAIQgJBCghAtIAHAJQAQARAcATIgSAOQgigZgNgQgADwAgQAFAHAGAHQAcgmAFgnQAAgBAAAAQAAgBAAgBQAAAAAAgBQAAAAgBAAIgGgBIg3AAQAEAmAOAegABvB4IAAhtQgHAXgKAPIgUgFQAagpAKgwIggAAIAAgXIAhAAIAAgyIAWAAIAAAyIAfAAIAAAXIgfAAIAAACQATAcAQAeIgSALQgHgRgKgQIAAB/gAjBByQgKAAgHgEQgMgKABgTIAAhaIgTAJIgMgUIAfgOIAAg/IAXAAIAAA2IAhgPIAAg+IAXAAIAAA0IAugUIAQAHIAABaQAAAHgFAJQgFAJgGAEQgLAFgYgDIgBgVIAQACQAJgBADgGQACgFAAgJIAAg4QAAgBAAAAQAAgBAAAAQAAAAAAAAQAAAAgBAAQAAgBAAAAQAAAAgBAAQAAAAAAAAQAAAAgBABIglAQIAABoIgXAAIAAhfIghAPIAABfIACALQADAEAJgBIBEAAQAMgBAFgEQACgGgBgcIAWACQAAApgEAJQgHAIgFABIgPABgAk7BPQASgHAMgGIAAhlIgbAAIAAgWIAbAAIAAg8IAXAAIAAA8IAYAAIAAAWIgYAAIAABYQALgHAHgHIAOARQgaAVguAVg");
	this.shape_2.setTransform(70,0.025);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

}).prototype = getMCSymbolPrototype(lib.chGround, new cjs.Rectangle(-23.8,-20.7,165.8,38.7), null);


// stage content:
(lib.myAnimate = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// helper
	this.title = new lib.title();
	this.title.name = "title";
	this.title.parent = this;
	this.title.setTransform(800,449.95,2.7999,2.7999);

	this.chTrace = new lib.chTrace();
	this.chTrace.name = "chTrace";
	this.chTrace.parent = this;
	this.chTrace.setTransform(1404.5,695.65);

	this.slBallY = new lib.slBallY();
	this.slBallY.name = "slBallY";
	this.slBallY.parent = this;
	this.slBallY.setTransform(1338.25,422.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.slBallY},{t:this.chTrace},{t:this.title}]}).wait(1));

	// UI
	this.mmText = new lib.mmText();
	this.mmText.name = "mmText";
	this.mmText.parent = this;
	this.mmText.setTransform(100.8,741.15);

	this.slMMRatio = new lib.slMMRatio();
	this.slMMRatio.name = "slMMRatio";
	this.slMMRatio.parent = this;
	this.slMMRatio.setTransform(34.85,809.35);

	this.chGround = new lib.chGround();
	this.chGround.name = "chGround";
	this.chGround.parent = this;
	this.chGround.setTransform(1404.5,650.15);

	this.rbFollowGround = new lib.rbFollowGround();
	this.rbFollowGround.name = "rbFollowGround";
	this.rbFollowGround.parent = this;
	this.rbFollowGround.setTransform(1404.5,424.7);

	this.rbFollowCenter = new lib.rbFollowCenter();
	this.rbFollowCenter.name = "rbFollowCenter";
	this.rbFollowCenter.parent = this;
	this.rbFollowCenter.setTransform(1404.5,524.95);

	this.rbFollowRing = new lib.rbFollowRing();
	this.rbFollowRing.name = "rbFollowRing";
	this.rbFollowRing.parent = this;
	this.rbFollowRing.setTransform(1404.5,474.8);

	this.chMC = new lib.chMC();
	this.chMC.name = "chMC";
	this.chMC.parent = this;
	this.chMC.setTransform(1404.5,604.7);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("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");
	this.shape.setTransform(101.2,875.708);

	this.btnReset = new lib.btnReset();
	this.btnReset.name = "btnReset";
	this.btnReset.parent = this;
	this.btnReset.setTransform(1453.65,778.4,1.2,1.2);
	new cjs.ButtonHelper(this.btnReset, 0, 1, 2, false, new lib.btnReset(), 3);

	this.btnPlayStop = new lib.btnPlayStop();
	this.btnPlayStop.name = "btnPlayStop";
	this.btnPlayStop.parent = this;
	this.btnPlayStop.setTransform(1433.85,778.4,1.2,1.2);
	new cjs.ButtonHelper(this.btnPlayStop, 0, 1, 2, false, new lib.btnPlayStop(), 3);

	this.btnLeft = new lib.theBtnLeft();
	this.btnLeft.name = "btnLeft";
	this.btnLeft.parent = this;
	this.btnLeft.setTransform(1907.8,740.75);

	this.btnRight = new lib.theBtnRight();
	this.btnRight.name = "btnRight";
	this.btnRight.parent = this;
	this.btnRight.setTransform(2057.8,740.75);

	this.btnDown = new lib.theBtnDown();
	this.btnDown.name = "btnDown";
	this.btnDown.parent = this;
	this.btnDown.setTransform(1982.8,740.75);

	this.btnUp = new lib.theBtnUp();
	this.btnUp.name = "btnUp";
	this.btnUp.parent = this;
	this.btnUp.setTransform(1982.8,665.75);

	this.slCameraRR = new lib.theSlider();
	this.slCameraRR.name = "slCameraRR";
	this.slCameraRR.parent = this;
	this.slCameraRR.setTransform(1350,850);

	this.btn02 = new lib.theButton();
	this.btn02.name = "btn02";
	this.btn02.parent = this;
	this.btn02.setTransform(2057.8,560.75);

	this.btn01 = new lib.theButton();
	this.btn01.name = "btn01";
	this.btn01.parent = this;
	this.btn01.setTransform(1907.8,560.75);

	this.ch02 = new lib.theCheckbox();
	this.ch02.name = "ch02";
	this.ch02.parent = this;
	this.ch02.setTransform(1975,451.3,1,1,0,0,0,67.2,-1.4);

	this.ch01 = new lib.theCheckbox();
	this.ch01.name = "ch01";
	this.ch01.parent = this;
	this.ch01.setTransform(1975,379.15,1,1,0,0,0,67.2,-1.4);

	this.sl03 = new lib.theSlider();
	this.sl03.name = "sl03";
	this.sl03.parent = this;
	this.sl03.setTransform(1907.8,294.2);

	this.sl02 = new lib.theSlider();
	this.sl02.name = "sl02";
	this.sl02.parent = this;
	this.sl02.setTransform(1907.8,213.7);

	this.sl01 = new lib.theSlider();
	this.sl01.name = "sl01";
	this.sl01.parent = this;
	this.sl01.setTransform(1907.8,133.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(0,0,0,0.6)").s().p("AzhTyMAAAgnjMAnDAAAMAAAAnjg");
	this.shape_1.setTransform(1434.6442,553.9058,1.0572,1.3962);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.sl01},{t:this.sl02},{t:this.sl03},{t:this.ch01},{t:this.ch02},{t:this.btn01},{t:this.btn02},{t:this.slCameraRR},{t:this.btnUp},{t:this.btnDown},{t:this.btnRight},{t:this.btnLeft},{t:this.btnPlayStop},{t:this.btnReset},{t:this.shape},{t:this.chMC},{t:this.rbFollowRing},{t:this.rbFollowCenter},{t:this.rbFollowGround},{t:this.chGround},{t:this.slMMRatio},{t:this.mmText}]}).wait(1));

	// btn3D
	this.btn3D = new lib.btn3D();
	this.btn3D.name = "btn3D";
	this.btn3D.parent = this;
	new cjs.ButtonHelper(this.btn3D, 0, 1, 2, false, new lib.btn3D(), 3);

	this.timeline.addTween(cjs.Tween.get(this.btn3D).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(442.2,450,1739.6000000000001,450);
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