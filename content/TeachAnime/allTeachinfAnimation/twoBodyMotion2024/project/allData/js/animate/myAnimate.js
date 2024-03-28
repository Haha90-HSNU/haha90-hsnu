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
	this.shape.setTransform(0.025,0.025);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FF0000").ss(8,1,1).p("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");
	this.shape_1.setTransform(0.025,0.025);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("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");
	this.shape_2.setTransform(0.025,0.025);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.title, new cjs.Rectangle(-191.3,-47.8,382.70000000000005,95.69999999999999), null);


(lib.textureVT = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgJAXQgBAAAAgBQAAAAAAgBQAAAAAAgBQgBAAABgBIABgHIAFgUIgEAAIgBAAIAAgBIABgBIAAgBIABgBQAEgBACgCIAAAAIAFgIIABAAIAAAAIACAAIABAAIABABIAAAAIgEAJIAFAAIABAAIAAABIAAABIgBADIAAAAIgBAAIgFAAIgFAVIgBAFIAAAAIABgBIADgFIABAAIAAAAIABAAIACABIAAABIAAABQgEAFgDACIABAAQgDACgDAAIAAAAIgDgBg");
	this.shape.setTransform(95.025,30.0001);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AADAWIABAAQAAAAgBgBQAAAAAAAAQgBgBAAAAQAAAAAAgBIABgCIAAAAIACgBIADABIABAAIACgEIAAAAIADgEIgCgGIgBgBIAAAAIgCgBIgCAAIgBAAIAAgBIAAAAIAAgBIABAAIAHgCIABAAIAAABIADACIABACIAAgBIAAAAIACgBIADgCIACgBIADABIgBAAQAAAAABABQAAAAAAAAQABABAAAAQAAAAAAAAIgBACIAAAAIgDABIgBAAIgBAAIgBAAIgBAAIABAAIgDAEIACAJIAAABIAAAAIACgDIABAAIAAAAIACAAIAAAAIABABIAAABQgCADgDACIgDACQgBAAAAgBQAAAAgBAAQAAAAgBgBQAAAAgBAAIAAgBIgBgGIgFAHIgEACIAAAAIgDgBgAgPARIgCAAIgBgBIAAgBQgBgXgDgGIgCgBIgDAAIgBAAIAAgBIgBgBIAAgBIAAAAIABgBIAMgCIABAAIAAAAIACAGIAAABIACAKIAAAJIAFgEIAFgIIAAABIABgEIAAgCIAAgBIgBAAQAAAAAAgBQgBAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAAAQABgBAAAAQAAgBABAAQAAAAAAAAQAAAAAAAAQABgBABABQAAgBABABQAAAAAAAAQABAAAAABQABAAAAABIAAgBQAAABABAAQAAABAAAAQABABAAABQAAAAAAABIgBAEIgEAIIgIAKIAAAAIgJAJIAAABIAAAAg");
	this.shape_1.setTransform(10.0002,5.0247);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#FFFFFF").ss(0.6,1,1).p("AmPjHIAADHIAADIAmPAAIMfAA");
	this.shape_2.setTransform(50,30);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#666666").s().p("AnzEsIAApXIPnAAIAAJXgAmPAAIAADIIAAjIIAAjHgAGQAAIsfAAg");
	this.shape_3.setTransform(50,30);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.textureVT, new cjs.Rectangle(0,0,100,60), null);


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
	this.shape.setTransform(-24.9603,-0.249,0.6,0.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("ABkEsIAApXIDIAAIAAJXgAkrEsIAApXIDIAAIAAJXg");
	this.shape_1.setTransform(24.5543,-0.2166,0.6,0.6);

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


(lib.btnCourse4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// text
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(5,1,1).p("AAAjVImrAAIAAGrINXAAIAAmrgAivgcICvi5");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FFFFFF").ss(5,1,1).p("ABNAAQAAAggXAXQgWAWggAAQgfAAgWgWQgXgXAAggQAAgfAXgXQAWgWAfAAQAgAAAWAWQAXAXAAAfg");
	this.shape_1.setTransform(-23.2,3.9);

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


(lib.btnCourse3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// text
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(5,1,1).p("AFEjUQAACHhfBdQhfBfiGAAQiHAAhfhfQhfhdAAiHIAAgBIhmAAIAAGrINXAAIAAmrIhoAAg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FFFFFF").ss(5,1,1).p("ABNAAQAAAggWAXQgXAWggAAQgfAAgWgWQgXgXAAggQAAgfAXgXQAWgWAfAAQAgAAAXAWQAWAXAAAfg");
	this.shape_1.setTransform(-19.1,-11.7);

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


(lib.btnCourse2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// text
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(5,1,1).p("AiuiuIFdAAIAAFdIldAAg");
	this.shape.setTransform(35.3561,0.0157,0.6971,0.6971);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FFFFFF").ss(5,1,1).p("AiuiuIFdAAIAAFdIldAAg");
	this.shape_1.setTransform(-35.2939,0.0157,0.6971,0.6971);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#FFFFFF").ss(5,1,1).p("AKqAAIhdAAIhSDPIikmdIikGdIikmdIijGdIikmdIikGdIhSjPIh7AA");
	this.shape_2.setTransform(0.0138,0.0601,0.3392,0.4261);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(4));

	// Layer_1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#00FFFF").ss(3,1,1).p("AnzkrIPnAAQBkAAAABkIAAGPQAABkhkAAIvnAAQhkAAAAhkIAAmPQAAhkBkAAg");

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["#000066","#0066FF"],[0,1],0,30,0,-29.9).s().p("AnzEsQhkAAAAhkIAAmPQAAhkBkAAIPnAAQBkAAAABkIAAGPQAABkhkAAg");

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.lf(["#000066","#00FFFF"],[0,1],0,30,0,-29.9).s().p("AnzEsQhkAAAAhkIAAmPQAAhkBkAAIPnAAQBkAAAABkIAAGPQAABkhkAAg");

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#FF00FF").ss(3,1,1).p("AnzkrIPnAAQBkAAAABkIAAGPQAABkhkAAIvnAAQhkAAAAhkIAAmPQAAhkBkAAg");

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FF00FF").s().p("AnzEsQhkAAAAhkIAAmPQAAhkBkAAIPnAAQBkAAAABkIAAGPQAABkhkAAg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3,p:{rotation:0}}]}).to({state:[{t:this.shape_5,p:{rotation:0}},{t:this.shape_3,p:{rotation:0}}]},1).to({state:[{t:this.shape_5,p:{rotation:180}},{t:this.shape_3,p:{rotation:180}}]},1).to({state:[{t:this.shape_7},{t:this.shape_6}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-61.5,-31.5,123,63);


(lib.btnCourse1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// text
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(5,1,1).p("Ag7g7IB3AAIAAB3Ih3AAg");
	this.shape.setTransform(-10.95,-6.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FFFFFF").ss(5,1,1).p("AnBiVIBvAAIAACzIKlAAIAAizIBvAAIAAErIuDAAg");
	this.shape_1.setTransform(0,2.8);

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
	this.btnS.setTransform(74.95,0,1.8,0.3);
	new cjs.ButtonHelper(this.btnS, 0, 1, 2, false, new lib.btnSquare(), 3);

	this.timeline.addTween(cjs.Tween.get(this.btnS).wait(1));

	// line
	this.bgLine = new lib.sliderBGLine();
	this.bgLine.name = "bgLine";
	this.bgLine.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.bgLine).wait(1));

}).prototype = getMCSymbolPrototype(lib.slMMRatio, new cjs.Rectangle(-16,-16,467,89.7), null);


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


(lib.rbFollowCar = function(mode,startPosition,loop) {
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
	this.shape.graphics.f("#FFFFFF").s().p("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");
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

}).prototype = getMCSymbolPrototype(lib.rbFollowCar, new cjs.Rectangle(-23.8,-18,165.8,36), null);


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
	this.shape_2.graphics.f("#FFFFFF").s().p("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");
	this.shape_2.setTransform(80,0.025);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

}).prototype = getMCSymbolPrototype(lib.chWall, new cjs.Rectangle(-23.8,-20.7,165.8,38.7), null);


(lib.chVT = function(mode,startPosition,loop) {
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
	this.shape_2.graphics.f("#FFFFFF").s().p("AFjB3IAAgKIi1AAIAAAKIgVAAIAAjmQABgHAGAAIDRAAQAHABAAAGIAADmgACuBZIC1AAIAAhsIi1AAgAETgmIBQAAIAAg5QAAgBAAgBQgBAAAAgBQAAAAgBAAQAAAAgBAAIivAAQgBAAgBAAQAAAAAAAAQgBABAAAAQAAABAAABIAAA5IBQAAIAAgKIg+AAQAAAAgBAAQAAAAAAAAQgBgBAAAAQAAgBAAgBIAAgkIACgCICPAAQABAAABAAQAAABAAAAQABAAAAAAQAAABAAAAIAAAkQAAABAAABQAAAAgBABQAAAAAAAAQgBAAgBAAIg8AAgADQhAIBvAAIABgBIAAgIIhwAAgAhFBiIAAi4IgzAAIAAgWIB5AAIAAAWIgxAAIAAC4gAlMBiIgrjOIAWAAIAhCmIAjimIAVAAIgrDOgAC8BQQAAAAgBAAQAAAAAAAAQAAgBgBAAQAAgBAAgBIAAhZIACgCICYAAQABAAABAAQAAABAAAAQABAAAAAAQAAABAAAAIAABZQAAABAAABQAAAAgBABQAAAAAAAAQgBAAgBAAgADOA+IB0AAIABgBIAAg6Ih1AAgADeA2QgBgBgBAAQAAAAAAAAQgBgBAAAAQAAAAAAAAIAAgnQAAgBAAAAQAAgBABAAQAAAAAAgBQABAAABAAIBZAAQAAAAABAAQAAABAAAAQAAAAABABQAAAAAAABIAAAnIgCACgADuAaIAAAMIABABIA3AAIAAgOIg3AAIgBABg");
	this.shape_2.setTransform(80.025,0.025);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

}).prototype = getMCSymbolPrototype(lib.chVT, new cjs.Rectangle(-23.8,-20.7,165.8,38.7), null);


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
	this.shape_2.graphics.f("#FFFFFF").s().p("ACfBqQAvgiABhWIAAg5IgoAAIAAgUIA7AAIAAgaIAWAAIAAAaIA+AAIAAAUIgrAAIAACmQAAAPgKAGQgLAHgfgHIAAgWQAXAHAHgEQACgDAAgEIAAihIgTAAIAAA5QgBAsgNAmQgOAfgXAVgAjXBrQAsgnABhkIAAgeIgXAAIAAgXIAXAAIAAggIAWAAIAAAgIAhAAQAIgBAAAJIAACiQgBAEADADQADADADAAIABAAIAFgCQACgDAAgDIAAgxIAXAEIgEA5QgDAJgGAEQgHAFgJAAIgJAAQgMgCgIgKQgDgFgBgJIAAiVQAAgBAAgBQAAgBAAAAQgBgBAAAAQgBAAAAAAIgQAAIAAAeIgDAsQgKBHghAlgAkJB4IAAglIgtAAIAAgWIAtAAIAAgPIglAAQgBAAgBAAQAAAAgBAAQAAgBAAAAQgBgBAAgBIAAhoQAAgBABgBQAAAAAAAAQABgBAAAAQABAAABAAIAlAAIAAgPIgsAAIAAgVIAsAAIAAgTIAVAAIAAATIAtAAIAAAVIgtAAIAAAPIAoAAQAAAAABAAQAAAAABABQAAAAAAAAQAAABAAABIAABoQAAABAAABQAAAAAAABQgBAAAAAAQgBAAAAAAIgoAAIAAAPIAsAAIAAAWIgsAAIAAAlgAj0AZIAVAAIABgBIAAgXIgWAAgAkdAZIAUAAIAAgYIgUAAgAj0gUIAWAAIAAgWIgBgBIgVAAgAkdgUIAUAAIAAgXIgUAAgABDBhQAEgCAHgBIAAhdIATAAIAABYQAHgDAIgBIAAhtIgfAAQgBAAAAAAQgBAAAAAAQgBgBAAAAQAAgBAAgBIAAhRQAAgBAAgBQAAAAABgBQAAAAABAAQAAAAABAAIBMAAQABAAAAAAQABAAAAAAQABABAAAAQAAABAAABIAABRQAAABAAABQAAAAgBABQAAAAgBAAQAAAAgBAAIgaAAIAAAjIAbAAIAAAUIgbAAIAAAwIAZgJIAIAUQgdAOg8ANgABigsIApAAIAAgBIAAguIgpAAgAEjBIQgDg5gKg8IATgCQANA8ABA7gACXA8QAbgzgBg3IAUABQgDBEgXArg");
	this.shape_2.setTransform(71.1,-0.075);

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
	this.chVT = new lib.chVT();
	this.chVT.name = "chVT";
	this.chVT.parent = this;
	this.chVT.setTransform(1384.7,634.6);

	this.title = new lib.title();
	this.title.name = "title";
	this.title.parent = this;
	this.title.setTransform(800,450,2.5,2.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.title},{t:this.chVT}]}).wait(1));

	// UI
	this.chWall = new lib.chWall();
	this.chWall.name = "chWall";
	this.chWall.parent = this;
	this.chWall.setTransform(486.4,871.9,1,1,0,0,0,59.1,-1.8);

	this.rbFollowCar = new lib.rbFollowCar();
	this.rbFollowCar.name = "rbFollowCar";
	this.rbFollowCar.parent = this;
	this.rbFollowCar.setTransform(1385.75,582.1);

	this.rbFollowGround = new lib.rbFollowGround();
	this.rbFollowGround.name = "rbFollowGround";
	this.rbFollowGround.parent = this;
	this.rbFollowGround.setTransform(1385.75,477.1);

	this.rbFollowCenter = new lib.rbFollowCenter();
	this.rbFollowCenter.name = "rbFollowCenter";
	this.rbFollowCenter.parent = this;
	this.rbFollowCenter.setTransform(1385.75,529.6);

	this.btnCourse4 = new lib.btnCourse4();
	this.btnCourse4.name = "btnCourse4";
	this.btnCourse4.parent = this;
	this.btnCourse4.setTransform(70.8,817,0.8,0.8);
	new cjs.ButtonHelper(this.btnCourse4, 0, 1, 2, false, new lib.btnCourse4(), 3);

	this.btnCourse3 = new lib.btnCourse3();
	this.btnCourse3.name = "btnCourse3";
	this.btnCourse3.parent = this;
	this.btnCourse3.setTransform(70.8,754.9,0.8,0.8);
	new cjs.ButtonHelper(this.btnCourse3, 0, 1, 2, false, new lib.btnCourse3(), 3);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#999999").s().p("AIiDuQgPgOAAgcIAWgBQAAAQAGAKQAIALAQAAQAQgBAKgKQAIgMABgVQAAgSgMgJQgMgIgTAAIAAgWQATgBAHgJQAKgKgBgNQAAgPgIgLQgHgJgKAAQgMAAgIAKQgHALgCAPIgVgHQAGgWANgPQAMgNATAAQAUAAANANQANAPAAAcQgBAWgMAPQgCADgDABIAIAGQASAPAAAcQAAAggRAQQgQARgXAAQgYAAgNgPgAGnDrQgQgbAAhBQAAg/APgVQAMgRAWAAQAVABANAQQAPAVAAA+QAAA9gPAcQgMAWgWAAQgWAAgLgSgAG3BJQgLATABAzQgBA7ALATQAHALAKAAQAKAAAIgMQAJgUABg6QgCgygJgTQgIgKgJAAQgLAAgGAKgAhgDrQgPgbAAhBQAAg/AOgVQALgRAXAAQAUABAOAQQAPAVAAA+QAAA9gPAcQgNAWgVAAQgXAAgKgSgAhRBJQgKATABAzQgBA7AKATQAIALAKAAQAKAAAIgMQAKgUgBg6QAAgygKgTQgIgKgJAAQgLAAgHAKgADQD6IAAgxIhHAAIAAgJIBAiUIAdAAIAACKIAYAAIAAATIgYAAIAAAxgACiC2IAuAAIAAhpgAAOD6IAAgQQAAgmArglQAogjAAgZQABgQgHgKQgJgKgKAAQgPAAgHAJQgLANABAVIgWAAQAAghAQgQQAOgPAYAAQAUAAAOAPQANAOAAAcQAAAjgvArQglAgAAAUIBTAAIAAAVgAj1D6IAAgQQAAgmArglQAogjAAgZQABgQgHgKQgJgKgKAAQgPAAgHAJQgLANABAVIgWAAQAAghAQgQQANgPAZAAQAUAAANAPQAOAOAAAcQAAAjgvArQglAgAAAUIBTAAIAAAVgAEyDtIAAgfIAgAAIAAAfgAGugJIAAiEIgJAQIgXgLQAog0AHg9IAXAEIgPA6IAACygACsgeIAegCIAAgSQgfALgXAAIgHgVQAygFAtgUIheAAIAAgUIBuAAIAAgMQgFgCgGAAIgBgXQAVAGAGgEQAFgDAAgGIAAgDIgCgCIgmAAIAAAiIgVAAIAAgiIgkAAIgCACIAAAdIgUAAIAAgtQgBgFAHAAIA0AAIAAgLIg8AAIAAgUIA8AAIAAgLIgvAAQgIAHgGAEQgGgMgGgEQASgNAOgTIARANIgFAGIAdAAIAAgRIAVAAIAAARIA4AAIAAASIg4AAIAAALIA+AAIAAAUIg+AAIAAALIA3AAQAFABABAEIAAAbQgBANgJAGQgFAEgEABIAAAMIBoAAIAAAUIgeAAIAKAOQgPAMgUAMQAWAMAlAEIgHAUQhNgKgkg4QgVANgRAHIAAAXQAggEAVgGIAEAVQgsALg9ADgAEhhKIAPAPIAngaIg8AAIAGALgAIWgKIAAjFIgXAAQgKAugQAcIgXgHQAdg0ACg4IAWABIgBASIB+AAIAAAWIhUAAIAAAzIBMAAIAAAWIhMAAIAAAxIBQAAIAAAXIhQAAIAAA0gAAggNIgCgYQAlAIAJgHQAFgFAAgEIAAhVIhlAAIAAgVICLAAIAAAVIgQAAIAABZQgCAIgEAHQgFAIgGADQgMAEgRAAIgZgCgAl8gaQAjgcABhHIAAgIIgZAAIAAgWIBqAAIAAAWIgRAAIAABRQAAAGACADQAGAEAEAAIBkAAQAEAAACgDQACgBAAgZIAWAEQgBAjgDADQgKAJgHAAIh5AAQgJgBgIgHQgFgHgBgHIAAheIgTAAIAAAIQAABIgnAogAmxgNIAAgIIhpAAIAAAIIgVAAIAAhlIgHADIgMgTQAugPAZgVIhBAAIAAgUIAlAAQgKgNgGgGIAQgOQALAKAKAQIgIAHIAZAAIAAglQgkACgZgBIgBgWQBSACA1gJIADAVQgRAFgmABIgBAAIAAAmIAPAAIAUgkIASAKIgMAaIAiAAIAAAUIhCAAQAbAVAsAMIgMAUIgEgBIAABlgAndgpIAsAAIAAgRIgsAAgAoagpIApAAIAAgRIgpAAgAndhPIAsAAIAAgRQAAAAgBgBQAAAAAAAAQgBgBAAAAQgBAAAAAAIgpAAgAoahfIAAAQIApAAIAAgTIglAAQgBAAgBAAQAAABgBAAQAAAAAAABQgBAAAAABgAmoh2QgbgLgagTIAAAeIA1AAIAAAAgAoBiKQgDADggARIAzAAIAAgfIgQALgAp/gZQAQgRAKgSQALgVAHgZIAVAGQgRA6gcAcgAh4gqIApgDIAAhSIgiAAIAAgVIAiAAIAAgTIgXAAIAAgUIBFAAIAAAUIgaAAIAAATIAeAAIAAAVIgeAAIAABPIAigJIAHAUQgkALg9AGgAjwgzIAAgYQAgALAJgHQACgDAAgEIAAhNIg7AAIAAgWIA7AAIAAgbIAXAAIAAAbIAfAAIAAAWIgfAAIAABTQAAAQgNAHQgHADgLAAQgOAAgVgFgAgFgwQgBAAAAAAQgBgBAAAAQgBAAAAgBQAAAAAAgBIAAg9QAAgBAAgBQAAAAABAAQAAgBABAAQAAAAABAAIBGAAQABAAAAAAQABAAAAABQABAAAAAAQAAABAAABIAAA9QAAABAAAAQAAABgBAAQAAAAgBABQAAAAgBAAgAALhfIAAAbIAjAAIABgBIAAgaIgBgBIgjAAQAAAAAAAAQAAAAAAAAQAAABAAAAQAAAAAAAAgAhsg2QgCghgEgYIAUgCQAFAhAAAagAg0hGQAIgZABgTIATAEIgJAugAj7iGIATgJQAPAbAKAWIgUAIQgJgUgPgcgAE+h5IAAgXQAYAHAHgEQABgDAAgEIAAhlIAVAAIAABqQgBAQgKAGQgFADgLAAQgKAAgQgDgAp+iYIANgTQARAKAZATIgNATQgagUgQgJgAEzibIAAhVIAVAAIAABVgAAujLQgPAdgoAQIgPgSIAKgDQAhgQAJgRIgsAAIAAgUIAzAAIAAgQIAVgBIgBARIA6AAIAAAUIgyAAQARAbAlAJIgMATQgogPgTgfgAlXiyIAAgXIBLAAIAAAXgAiqjBIAHgYQAAAAgBgBQAAgBAAAAQgBAAAAgBQgBAAAAAAIi3AAQAAAAAAAAQgBAAAAAAQAAAAAAABQgBABAAAAIAAAgIgWAAIAAg0QAAgEAEAAIDTAAIAVAKQgCASgKAcgAh4jNQAmgWAKgSIATABIgBADQASAOARAMIgQAQQgPgNgNgNQgQASgWARgAp7jfIAOgSQASAMAXAVIgOARQgZgWgQgKg");
	this.shape.setTransform(1524.3,40.025);

	this.chGround = new lib.chGround();
	this.chGround.name = "chGround";
	this.chGround.parent = this;
	this.chGround.setTransform(240.8,873.7);

	this.chMC = new lib.chMC();
	this.chMC.name = "chMC";
	this.chMC.parent = this;
	this.chMC.setTransform(1384.7,687.15);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("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");
	this.shape_1.setTransform(101.2,875.708);

	this.mmText = new lib.mmText();
	this.mmText.name = "mmText";
	this.mmText.parent = this;
	this.mmText.setTransform(1435.35,349.35);

	this.slMMRatio = new lib.slMMRatio();
	this.slMMRatio.name = "slMMRatio";
	this.slMMRatio.parent = this;
	this.slMMRatio.setTransform(1369.4,417.55);

	this.chTrace = new lib.chTrace();
	this.chTrace.name = "chTrace";
	this.chTrace.parent = this;
	this.chTrace.setTransform(1384.7,634.6);

	this.btnReset = new lib.btnReset();
	this.btnReset.name = "btnReset";
	this.btnReset.parent = this;
	this.btnReset.setTransform(1320.25,778.4,1.2,1.2);
	new cjs.ButtonHelper(this.btnReset, 0, 1, 2, false, new lib.btnReset(), 3);

	this.btnPlayStop = new lib.btnPlayStop();
	this.btnPlayStop.name = "btnPlayStop";
	this.btnPlayStop.parent = this;
	this.btnPlayStop.setTransform(1476,778.4,1.2,1.2);
	new cjs.ButtonHelper(this.btnPlayStop, 0, 1, 2, false, new lib.btnPlayStop(), 3);

	this.btnCourse2 = new lib.btnCourse2();
	this.btnCourse2.name = "btnCourse2";
	this.btnCourse2.parent = this;
	this.btnCourse2.setTransform(70.8,692.9,0.8,0.8);
	new cjs.ButtonHelper(this.btnCourse2, 0, 1, 2, false, new lib.btnCourse2(), 3);

	this.btnCourse1 = new lib.btnCourse1();
	this.btnCourse1.name = "btnCourse1";
	this.btnCourse1.parent = this;
	this.btnCourse1.setTransform(70.8,630.9,0.8,0.8);
	new cjs.ButtonHelper(this.btnCourse1, 0, 1, 2, false, new lib.btnCourse1(), 3);

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

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(0,0,0,0.6)").s().p("Ax9U5MAAAgpxMAj7AAAMAAAApxg");
	this.shape_2.setTransform(1443.1439,515.9403,0.9122,1.5537);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.sl01},{t:this.sl02},{t:this.sl03},{t:this.ch01},{t:this.ch02},{t:this.btn01},{t:this.btn02},{t:this.slCameraRR},{t:this.btnUp},{t:this.btnDown},{t:this.btnRight},{t:this.btnLeft},{t:this.btnCourse1},{t:this.btnCourse2},{t:this.btnPlayStop},{t:this.btnReset},{t:this.chTrace},{t:this.slMMRatio},{t:this.mmText},{t:this.shape_1},{t:this.chMC},{t:this.chGround},{t:this.shape},{t:this.btnCourse3},{t:this.btnCourse4},{t:this.rbFollowCenter},{t:this.rbFollowGround},{t:this.rbFollowCar},{t:this.chWall}]}).wait(1));

	// btn3D
	this.instance = new lib.textureVT();
	this.instance.parent = this;
	this.instance.setTransform(-460.05,159.35,1,1,0,0,0,50,30);

	this.btn3D = new lib.btn3D();
	this.btn3D.name = "btn3D";
	this.btn3D.parent = this;
	new cjs.ButtonHelper(this.btn3D, 0, 1, 2, false, new lib.btn3D(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.btn3D},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(290,450,1891.8000000000002,450);
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