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


(lib.title = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFF00").s().p("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");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FF0000").ss(8,1,1).p("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");

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFF00").s().p("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");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.title, new cjs.Rectangle(-239.3,-48,478.6,96.1), null);


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
	this.shape.graphics.f("#FFFFFF").s().p("AhNBOQggggAAguQAAgsAgghQAhggAsAAQAuAAAgAgQAgAhAAAsQAAAuggAgQggAgguAAQgsAAghggg");
	this.shape.setTransform(-0.05,-0.05);

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


(lib.OneNumber = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ag5BpQgaghAAhIQAAgtAJgbQAKgcASgQQATgPAbAAQAUABAQAHQAQAJAKAQQAKAQAGAWQAGAXAAAlQAAAugJAbQgKAcgSAQQgSAPgdAAQglAAgUgbgAgihWQgQAYAAA+QAABAAOAUQAPAWAVAAQAWAAAOgWQAPgVABg/QgBg+gPgVQgOgWgWAAQgVAAgNATg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAQCBIAAjIQgLALgSAKQgTALgPAGIAAgfQAbgMAUgSQATgSAIgQIAVAAIAAEBg");
	this.shape_1.setTransform(0,0.025);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AhUCBQAAgLAEgLQAGgRAPgRQAOgRAbgWQApgiAPgUQAPgUAAgSQAAgSgOgNQgNgNgWAAQgWAAgNANQgOAOAAAYIghgDQADgkAWgTQAWgTAkAAQAlAAAWAUQAVAVAAAeQAAAQgGAOQgHAPgOAQQgPAQgiAdQgbAYgJAJQgIAIgFAJIB9AAIAAAeg");
	this.shape_2.setTransform(-0.0028,0.025);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("Ag6BvQgWgUgEggIAhgEQAEAaAOAMQANANATAAQAVAAAQgQQAPgQAAgWQAAgWgOgOQgOgOgWgBQgJABgNADIAEgbIAEAAQAUABAQgLQAQgLAAgVQAAgSgLgMQgNgKgRgBQgTAAgMAMQgMAMgEAWIgfgFQAGggAUgRQAVgSAeAAQAVABARAIQASAJAKAQQAIAQABARQgBARgIANQgJAOgSAJQAXAFANAPQANARgBAZQABAigZAXQgZAYgkAAQgjAAgWgVg");
	this.shape_3.setTransform(1,0);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAXCBIAAg+IhvAAIAAgdIB0imIAaAAIAACmIAjAAIAAAdIgjAAIAAA+gAg5AmIBQAAIAAhzg");
	this.shape_4.setTransform(0.025,0.025);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("Ag7BtQgWgTgEghIAhgDQAEAZAOAMQAOAMASAAQAWAAAQgRQAQgRAAgdQAAgbgPgPQgQgPgXAAQgQAAgMAHQgMAHgHAKIgegEIAZiDIB/AAIAAAeIhlAAIgPBFQAYgQAYAAQAiAAAXAXQAXAXAAAkQAAAjgUAaQgZAfgqAAQgjAAgWgUg");
	this.shape_5.setTransform(0,0.025);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("Ag7BmQgZgdAAhCQAAhKAbgiQAZgeAoAAQAeAAATARQAUARAEAeIggADQgEgTgIgIQgMgOgUAAQgNABgMAHQgPALgIAWQgJAUAAAnQALgSARgIQAQgIARAAQAgAAAWAXQAWAWAAAmQAAAYgKAVQgKAUgTALQgSAMgYAAQgmgBgZgdgAghADQgPAPAAAaQABAQAGAPQAIAOAMAJQANAHAMABQAUAAAPgRQAOgQAAgcQAAgbgOgPQgPgOgVAAQgVAAgPAOg");

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AguB/QAAgeALgrQAMgrAWgnQAUgoAYgcIh9AAIAAgeIClAAIAAAZQgYAagZArQgYArgMAtQgJAhgDAmg");
	this.shape_7.setTransform(0,0.025);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("Ag9BtQgXgXAAghQAAgaANgRQANgPAXgGQgTgIgKgOQgKgNABgSQgBgcAVgUQAUgTAhAAQAhABAVATQAVATgBAdQAAARgJAOQgKANgSAIQAXAHANAQQAMARAAAZQAAAggXAXQgYAWgmABQglgBgYgWgAgkAQQgPAOAAAXQAAANAGANQAHAMAMAIQANAGAOABQAWAAAPgPQAPgPAAgWQAAgXgPgPQgQgPgWAAQgWAAgOAPgAgdhdQgMALAAARQAAASALAMQAMALASAAQATAAALgLQAMgMAAgQQAAgSgMgMQgMgMgSAAQgRAAgMAMg");

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("Ag4BzQgTgRgEgeIAegEQAEAWALAKQALAKARgBQAOABALgIQALgGAHgLQAHgMAEgSQAFgUAAgTIAAgGQgJAPgRAKQgQAIgTABQggAAgWgYQgWgWAAgmQAAgnAXgYQAXgXAjAAQAYAAAVANQAVAOALAYQALAZAAAwQAAAxgLAcQgLAegVAPQgVAQgcAAQgegBgTgQgAgkhYQgPASAAAbQAAAZAPAQQAOAOAWAAQAVAAAOgOQAOgQAAgcQAAgagOgRQgPgPgUAAQgUAAgQAQg");
	this.shape_9.setTransform(0.075,-0.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgRASIAAgjIAjAAIAAAjg");
	this.shape_10.setTransform(0,15);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).wait(1));

	// 圖層_1
	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#000000").ss(6,1,1).p("AhTAAQAAgtAJgcQAKgcASgPQATgPAbAAQAVAAAQAIQAPAJAKAQQALAPAFAXQAGAWAAAmQAAAugJAbQgJAcgTAQQgSAPgdAAQglAAgVgbQgZggAAhJgAgzAAQAABAAPAVQAPAVAVAAQAWAAAPgVQAPgWAAg/QAAg/gPgVQgPgVgWAAQgVAAgNATQgRAXAAA/g");

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("Ag6BoQgZggAAhIQAAgtAJgcQAKgbASgPQATgQAbABQAUgBARAJQAPAIAKAQQAKAQAGAWQAGAXAAAlQAAAtgJAcQgJAcgTAPQgSAQgdgBQgkAAgWgbgAgihWQgQAXAAA/QgBA/APAWQAPAUAVAAQAWAAAPgUQAPgWgBg/QABg+gPgWQgPgUgWAAQgVAAgNASg");

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#000000").ss(6,1,1).p("AAwCBIggAAIAAjIQgLALgSAKQgTALgPAGIAAgfQAbgMAUgSQATgSAIgQIAVAAg");
	this.shape_13.setTransform(0,0.025);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AAQCBIAAjIQgLALgSAKQgTALgPAGIAAgfQAbgMAUgSQATgSAIgQIAVAAIAAEBg");
	this.shape_14.setTransform(0,0.025);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#000000").ss(6,1,1).p("ABVBjIAAAeIipAAQAAgLAEgLQAGgRAPgRQAOgRAbgWQApgiAPgUQAPgUAAgSQAAgSgOgNQgNgNgWAAQgWAAgNANQgOAOAAAYIghgDQADgkAWgTQAWgTAkAAQAlAAAWAUQAVAVAAAeQAAAQgGAOQgHAPgOAQQgPAQgiAdQgbAYgJAJQgIAIgFAJg");
	this.shape_15.setTransform(-0.0028,0.025);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AhUCBQAAgLAEgLQAGgRAPgRQAOgRAbgWQApgiAPgUQAPgUAAgSQAAgSgOgNQgNgNgWAAQgWAAgNANQgOAOAAAYIghgDQADgkAWgTQAWgTAkAAQAlAAAWAUQAVAVAAAeQAAAQgGAOQgHAPgOAQQgPAQgiAdQgbAYgJAJQgIAIgFAJIB9AAIAAAeg");
	this.shape_16.setTransform(-0.0028,0.025);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#000000").ss(6,1,1).p("AhUA7IAggEQAFAbAOAMQANAMASAAQAWAAAQgQQAPgPAAgXQAAgWgOgOQgOgOgWAAQgJAAgNADIADgbQADAAACAAQAUAAAQgKQAQgLAAgWQAAgRgLgMQgNgLgRAAQgTAAgMAMQgMALgEAXIgfgFQAFggAVgRQAUgSAfAAQAVAAARAJQASAJAKAQQAJAPAAASQAAARgJANQgJAOgSAIQAXAFANARQANAQAAAZQAAAigZAXQgZAYglAAQgiAAgWgUQgWgVgEggg");
	this.shape_17.setTransform(1,0);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("Ag6BwQgWgVgEggIAhgEQAEAaAOANQANAMASgBQAWAAAQgPQAPgPAAgYQAAgVgOgPQgPgNgVAAQgIgBgOAEIAEgbIAEAAQAUAAAQgKQAQgKAAgXQAAgRgLgMQgNgLgRABQgTAAgMALQgMALgEAYIgfgGQAGggAUgRQAVgRAeAAQAVgBARAKQASAJAKAPQAIAPABASQgBARgIAOQgJAOgSAHQAXAFANARQANAQgBAZQABAhgZAYQgZAYglgBQghAAgXgTg");
	this.shape_18.setTransform(1,0);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#000000").ss(6,1,1).p("AAXCBIAAg+IhvAAIAAgdIB0imIAaAAIAACmIAjAAIAAAdIgjAAIAAA+gAAXAmIAAhzIhQBzg");
	this.shape_19.setTransform(0.025,0.025);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AAXCBIAAg+IhvAAIAAgdIB0imIAaAAIAACmIAjAAIAAAdIgjAAIAAA+gAg5AmIBQAAIAAhzg");
	this.shape_20.setTransform(0.025,0.025);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#000000").ss(6,1,1).p("AhVA5IAhgDQAEAZAOAMQANAMATAAQAWAAAQgRQAQgRAAgdQAAgbgPgPQgPgPgZAAQgPAAgMAHQgMAHgHAKIgegEIAZiDIB/AAIAAAeIhmAAIgOBFQAXgQAZAAQAiAAAXAXQAYAXAAAkQAAAjgVAaQgZAfgqAAQgjAAgWgUQgXgTgDghg");
	this.shape_21.setTransform(0,0.025);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("Ag7BtQgWgTgEghIAigDQADAZAOAMQANAMATAAQAWAAAQgRQAPgRAAgdQABgbgPgPQgQgPgYAAQgPAAgMAHQgMAHgHAKIgegEIAZiDIB/AAIAAAeIhmAAIgNBFQAWgQAZAAQAiAAAXAXQAYAXAAAkQAAAjgVAaQgZAfgqAAQgjAAgWgUg");
	this.shape_22.setTransform(0,0.025);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#000000").ss(6,1,1).p("ABRhDIggADQgEgTgIgIQgMgOgTAAQgPAAgLAIQgPALgJAVQgIAVgBAnQAMgSAQgIQARgIARAAQAgAAAWAXQAWAXAAAlQAAAYgKAVQgKAUgTAMQgSALgXAAQgnAAgZgdQgZgeAAhCQAAhLAbghQAYgeApAAQAeAAAUARQATARAEAegAgwAsQAAAQAHAPQAHAPANAIQAMAIANAAQAUAAAPgRQAOgQAAgbQAAgbgOgPQgOgPgWAAQgVAAgPAPQgPAPAAAZg");

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("Ag7BnQgZgeAAhDQAAhJAbgiQAYgeAoABQAfAAAUARQATARADAdIgfADQgEgTgIgIQgMgNgUAAQgNgBgMAJQgPAKgIAVQgJAVAAAnQALgRARgJQAQgIARAAQAfAAAXAXQAWAXAAAkQAAAZgKAUQgKAVgTAMQgSALgYgBQgmAAgZgcgAggAEQgPAOgBAZQAAARAIAPQAGAPANAHQAMAJANgBQAUAAAPgQQAOgQAAgbQAAgbgOgPQgOgPgWAAQgUAAgPAPg");

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#000000").ss(6,1,1).p("AhThgIAAgeICnAAIAAAZQgZAagYArQgYArgNAtQgKAhgCAmIghAAQABgeALgrQAMgrAVgnQAVgoAYgcg");
	this.shape_25.setTransform(0,0.025);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgvB/QABgeAMgrQALgrAVgnQAVgoAYgcIh+AAIAAgeICnAAIAAAZQgZAagZArQgXArgNAtQgJAhgDAmg");
	this.shape_26.setTransform(0,0.025);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#000000").ss(6,1,1).p("AgphCQAAATALALQAMAMASAAQATAAALgMQAMgLAAgRQAAgRgMgMQgMgMgSAAQgSAAgLAMQgMALAAAQgAgjgMQgUgHgJgOQgKgNAAgTQAAgcAUgTQAVgTAhAAQAhAAAVAUQAVATAAAcQAAASgKAOQgJANgTAHQAXAIANAQQAMASAAAYQAAAhgXAWQgYAXgmAAQglAAgYgXQgXgXAAghQAAgZANgRQAMgRAYgGgAg0A1QAAANAHANQAGANANAHQANAHAOAAQAWAAAPgPQAPgPAAgWQAAgXgPgPQgQgPgWAAQgWAAgPAPQgPAPAAAWg");

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("Ag8BtQgYgXAAgiQAAgZANgQQAMgRAYgGQgUgHgJgNQgKgNAAgUQABgcATgTQAVgSAhAAQAhgBAVAUQAVATAAAcQAAATgKANQgJANgTAHQAXAIANAQQAMASAAAXQAAAhgYAXQgXAXgmgBQglABgXgXgAglAPQgOAQAAAVQgBAOAHANQAGANANAGQANAIAOgBQAWAAAPgOQAOgPAAgXQAAgWgOgPQgQgPgWAAQgWAAgPAOgAgdhdQgMALAAAQQAAATALALQANAMARAAQASAAAMgMQAMgLAAgRQAAgRgMgMQgNgLgRAAQgRAAgMALg");

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("#000000").ss(6,1,1).p("AAxgtQAAgbgOgRQgPgPgUAAQgUAAgQAQQgPASAAAcQAAAYAPAQQAOAOAWAAQAVAAAOgOQAOgQAAgbgAhPBEIAegDQAEAVALAKQALAKARAAQAOAAALgHQALgHAHgLQAHgLAEgTQAFgTAAgUQAAgCAAgEQgJAPgRAKQgQAJgTAAQggAAgWgXQgWgXAAglQAAgoAXgYQAXgYAjAAQAYAAAVAOQAVANALAZQALAaAAAvQAAAxgLAdQgLAdgVAPQgVAQgcAAQgeAAgTgRQgTgRgEgeg");
	this.shape_29.setTransform(0.075,-0.2);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("Ag4BzQgTgRgEgeIAegEQAEAWALAKQALAKARgBQAOABALgIQALgGAHgLQAHgMAEgSQAFgUAAgTIAAgGQgJAPgRAKQgQAIgTABQggAAgWgYQgWgWAAgmQAAgnAXgYQAXgXAjAAQAYAAAVANQAVAOALAYQALAZAAAwQAAAxgLAcQgLAegVAPQgVAQgcAAQgegBgTgQgAgkhYQgPASAAAbQAAAZAPAQQAOAOAWAAQAVAAAOgOQAOgQAAgcQAAgagOgRQgPgPgUAAQgUAAgQAQg");
	this.shape_30.setTransform(0.075,-0.2);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("#000000").ss(6,1,1).p("AgRASIAAgjIAjAAIAAAjg");
	this.shape_31.setTransform(0,15);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AgRASIAAgjIAjAAIAAAjg");
	this.shape_32.setTransform(0,15);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12},{t:this.shape_11}]}).to({state:[{t:this.shape_14},{t:this.shape_13}]},1).to({state:[{t:this.shape_16},{t:this.shape_15}]},1).to({state:[{t:this.shape_18},{t:this.shape_17}]},1).to({state:[{t:this.shape_20},{t:this.shape_19}]},1).to({state:[{t:this.shape_22},{t:this.shape_21}]},1).to({state:[{t:this.shape_24},{t:this.shape_23}]},1).to({state:[{t:this.shape_26},{t:this.shape_25}]},1).to({state:[{t:this.shape_28},{t:this.shape_27}]},1).to({state:[{t:this.shape_30},{t:this.shape_29}]},1).to({state:[{t:this.shape_32},{t:this.shape_31}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-11.9,-16.3,24.4,36.1);


(lib.explode = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFF00").s().p("AjhDiIgBgDQBFixiXiCQC8gdAmjEQB2CUC+hBQhFCzCYCCQi+AeglDFQh3iVi8BBg");
	this.shape.setTransform(0.003,0.0348,0.5968,0.5968);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FF0000").ss(6,1,1).p("AjiDgQBFiyiXiCQC8gdAmjEQB2CUC+hAQhFCyCYCCQi+AeglDFQh3iUi8BA");
	this.shape_1.setTransform(0.0273,0.0092,0.5968,0.5968);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFF00").s().p("AjhDiIgBgCQBFiziXiBQC8gdAmjEQB2CUC+hAQhFCyCYCCQi+AeglDFQh3iUi8BAg");
	this.shape_2.setTransform(0.0273,0.0092,0.5968,0.5968);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.explode, new cjs.Rectangle(-21.4,-21.5,42.9,43), null);


(lib.conterMass = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFF00").s().p("AAAFKQgLAAgJgJQgJgJAAgMIAAhIQhKgJg5g3IgBgCQg5g4gJhMIhIAAQgMAAgJgJQgJgJAAgMQAAgLAJgJQAJgJAMAAIBIAAQAJhMA5g5IABgBQA5g3BKgJIAAhIQAAgMAJgJQAJgJALAAQAMAAAJAJQAJAJAAAMIAABIQBMAJA5A5QA4A4AJBMIBIAAQAMAAAJAJQAJAJAAALQAAAMgJAJQgJAJgMAAIhIAAQgJBMg4A4Qg5A5hMAJIAABIQAAAMgJAJQgJAJgMAAIAAAAgAAeCnQA0gIAngnQAmgnAJgzIiKAAgAh3B4IABABQAnAmAyAIIAAiJIiJAAQAIAzAnAngACogdQgJgzgmgnQgngng0gIIAACJICKAAIAAAAgAhwh+IAAAAQgvAygHAvICJAAIAAiJQguAIglAgg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// 圖層_1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(6,1,1).p("ACjihQg5g5hMgJIAAhIQAAgMgJgJQgJgJgMAAQgLAAgJAJQgJAJAAAMIAABIQhKAJg5A3QAAABgBAAQg5A5gJBMIhIAAQgMAAgJAJQgJAJAAALQAAAMAJAJQAJAJAMAAIBIAAQAJBMA5A4IABACQA5A3BKAJIAABIQAAAMAJAJQAJAJALAAQAMAAAJgJQAJgJAAgMIAAhIQBMgJA5g5QA4g4AJhMIBIAAQAMAAAJgJQAJgJAAgMQAAgLgJgJQgJgJgMAAIhIAAQgJhMg4g4gAB5h3QAmAnAJAzIiKAAIAAiKQA0AJAnAngAh9hxQACgMALgBQAlggAugJIAACKIiKAAQAIgvAiglgAh2B5IgBgBQgngngJgzICKAAIAACKQgygJgngmgAB5B4QgnAng0AJIAAiKICKAAQgJAzgmAng");

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFF00").s().p("AAAFKQgLAAgJgJQgJgJAAgMIAAhIQhKgJg5g3IgBgCQg5g4gJhMIhIAAQgMAAgJgJQgJgJAAgMQAAgLAJgJQAJgJAMAAIBIAAQAJhMA5g5IABgBQA5g3BKgJIAAhIQAAgMAJgJQAJgJALAAQAMAAAJAJQAJAJAAAMIAABIQBMAJA5A5QA4A4AJBMIBIAAQAMAAAJAJQAJAJAAALQAAAMgJAJQgJAJgMAAIhIAAQgJBMg4A4Qg5A5hMAJIAABIQAAAMgJAJQgJAJgMAAIAAAAgAAeCnQA0gIAngnQAmgnAJgzIiKAAgAh3B4IABABQAnAmAyAIIAAiJIiJAAQAIAzAnAngACogdQgJgzgmgnQgngng0gIIAACJICKAAIAAAAgAhwh+QgLABgCANQgiAkgHAvICJAAIAAiJQguAIglAgg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.conterMass, new cjs.Rectangle(-36,-36,72,72), null);


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


(lib.btnNN = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// text
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AipCEIAUAAQBhAAA5gSQgOgPgggUIAsgaQAcASAXAVQApgSAXgpIhiAAQg4AohNAYIgegvQAugIAzgZQAygYAighIA2AHQgSAUgKAGIBvAAIAAAkQgUBChSAsQhSAtiHAAIgFABgAiugaQBFgCA3gVQgKgLgigXIAqgXQAXANAYAXQAmgRAbgaIh4AAQglAeguAPIgfgpQBMgWAzg0IA1AFQgHAKgNALICPAAIAAAkQgcAwhYAsQhXAshMAIg");
	this.shape.setTransform(-0.0236,0.0039,1.1,1.1);

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


(lib.btnN2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// text
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AiGDJQAEgpAWgjQAWglBBg8QAzgvALgSQARgXAAgYQAAgZgOgOQgOgOgZAAQgXAAgOAPQgOAOgDAiIhMgHQAHhAAkgcQAkgbA1AAQA8AAAhAgQAjAfAAAwQAAAbgKAZQgKAYgVAaQgOASgkAhQglAhgJAMQgJAKgGALICYAAIAABHg");
	this.shape.setTransform(-0.025,0.025);

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


(lib.ball = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層_2
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#FFFFFF","rgba(255,255,255,0)"],[0.267,1],-9,-10.9,0,-9,-10.9,35.9).s().p("AliFiQiRiTAAjPQAAjOCRiTQCUiSDOAAQDPAACSCSQCTCTAADOQAADPiTCTQiSCSjPAAQjOAAiUiSg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3));

	// 圖層_1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#00FFFF").s().p("AliFiQiRiTAAjPQAAjOCRiTQCUiSDOAAQDPAACSCSQCTCTAADOQAADPiTCTQiSCSjPAAQjOAAiUiSg");

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#00FF66").s().p("AliFiQiRiTAAjPQAAjOCRiTQCUiSDOAAQDPAACSCSQCTCTAADOQAADPiTCTQiSCSjPAAQjOAAiUiSg");

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF6666").s().p("AliFiQiRiTAAjPQAAjOCRiTQCUiSDOAAQDPAACSCSQCTCTAADOQAADPiTCTQiSCSjPAAQjOAAiUiSg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1}]}).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).wait(1));

	// 圖層_3
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(6,1,1).p("AH0AAQAADQiTCSQiSCSjPAAQjPAAiTiSQiRiSAAjQQAAjOCRiTQCTiSDPAAQDPAACSCSQCTCTAADOg");

	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-53,-53,106,106);


(lib.arrow = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ABSAtIoPAAIAAhZIIPAAIAAgsIFsBYIlsBZg");
	this.shape.setTransform(47.35,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// 圖層_2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AAcBIIoPAAIAAiPIIPAAIAAgzIHYB0IAAAOInYBzgAm9ATIIPAAIAAAlIDhg4Ijhg2IAAAkIoPAAg");
	this.shape_1.setTransform(50,0);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.arrow, new cjs.Rectangle(0,-12.3,100,24.700000000000003), null);


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


(lib.v0AdjN = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層_1
	this.instance = new lib.conterMass();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.v0AdjN, new cjs.Rectangle(-36,-36,72,72), null);


(lib.v0Adj2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層_1
	this.instance = new lib.conterMass();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.v0Adj2, new cjs.Rectangle(-36,-36,72,72), null);


(lib.slMAMB = function(mode,startPosition,loop) {
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
	this.shape.graphics.f("#FFFFFF").s().p("AC/BtIgUgyIhGAAIgSAyIgXAAIBAimIAYAAIBECmgAB+gIIgSAwIA5AAIgSgtIgMgjQgDAQgGAQgAAFBSIAAh1QAAgTgDgIQgCgJgIgEQgIgGgLAAQgTABgOANQgNANABAcIAABsIghAAIAAh4QAAgVgHgLQgIgLgRAAQgOAAgLAIQgMAGgFAOQgEAOgBAZIAABgIgfAAIAAi5IAcAAIAAAZQAJgNAPgJQAOgIASAAQAWAAAMAIQAOAKAFAPQAWghAkAAQAbAAAOAQQAPAPAAAgIAAB/g");
	this.shape.setTransform(-40,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("ABUBtIAAinIA/AAQASAAAMAGQAMAFAGAKQAHALAAAMQAAAKgGAIQgGAKgMAGQAQAFAIAKQAIALAAAOQAAAMgFALQgFAKgHAFQgHAFgLADQgMADgQAAgABqBZIApAAIAQgBQAHgBAFgDQAFgEAEgFQADgHAAgIQAAgJgEgHQgFgHgJgDQgJgDgPAAIgnAAgABqAMIAkAAQAPAAAGgCQAIgDAFgFQAEgFAAgJQAAgJgEgFQgEgHgHgCQgIgDgSAAIghAAgAAMBSIAAh0QAAgUgDgIQgEgJgHgFQgHgEgMAAQgTAAgNAMQgNAOAAAdIAABrIggAAIAAh5QAAgUgHgLQgIgLgSABQgOAAgLAGQgLAIgFANQgFAOAAAZIAABgIggAAIAAi6IAcAAIAAAbQAJgOAPgJQAPgIASAAQAVAAANAIQAOAKAFAPQAWghAjAAQAbAAAPAPQAPAQAAAgIAAB/g");
	this.shape_1.setTransform(190,0);

	this.label = new cjs.Text("文字標籤", "26px 'Microsoft JhengHei'", "#FFFFFF");
	this.label.name = "label";
	this.label.textAlign = "right";
	this.label.lineHeight = 37;
	this.label.lineWidth = 146;
	this.label.parent = this;
	this.label.setTransform(755.5,-61.8);

	this.valueText = new cjs.Text("0", "26px 'Arial'", "#FFFFFF");
	this.valueText.name = "valueText";
	this.valueText.lineHeight = 31;
	this.valueText.lineWidth = 100;
	this.valueText.parent = this;
	this.valueText.setTransform(609.5,-16.05);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.valueText},{t:this.label},{t:this.shape_1},{t:this.shape}]}).wait(1));

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

}).prototype = getMCSymbolPrototype(lib.slMAMB, new cjs.Rectangle(-61.6,-63.8,819.1,79.8), null);


(lib.slExplodeTime = function(mode,startPosition,loop) {
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
	this.shape.graphics.f("#FFFFFF").s().p("ABZCdIAAgSQgXALgIABIgIgRQAbgHAXgQIALAOIgUANIAPAEQABAAABgBQABAAABAAQAAAAABAAQAAgBAAAAQACgDAAgDIAAg4IATAAIAAA8QgBAOgJAFQgDADgJAAQgIAAgNgDgAgSCTQAcgcABhKIAAhjIATAAIAAA2IAMgYIAQAIQgLAXgRAcIAAAKIgEApQAPASAOAUIgPALIgRgbQgJAegOAUgACICHIAIgRQAdANASALIgJAPQgYgOgWgIgACMBjIARgOQgGgFgGgIIgrAAQgJAIgGAIIALANIgMANIgNgOQgJAGgJAEIgMgQQAUgJAQgNIggAAIAAgRIApAAIAAgNIgjAAIAAgQIAjAAIAAgMIgaAAQAAAAgBgBQAAAAgBAAQAAAAAAgBQAAAAAAgBIAAg7QAAgBAAAAQABgBAAAAQAAgBAAAAQABAAAAAAIB4AAQABAAABAAQAAAAAAABQABAAAAABQAAAAAAABIAAA7QAAABAAAAQAAABgBAAQAAAAAAAAQgBABgBAAIgYAAIAAAMIAgAAIAAAQIggAAIAAANIAmAAIAAARIgdAAQALALAWAMIgPAOQgJgHgHgEIgSAQgABqA3IAiAAIAAgNIgiAAgABqAaIAiAAIAAgMIgiAAgABPgBIBXAAIABAAIAAgKIhYAAgABPgiIAAAIIBYAAIAAgIIgBgBIhXAAQgBAAAAAAQAAAAAAAAQAAAAAAAAQAAAAABABgAijBiIAwjkIhUAAIAGgdIDKAAIgHAdIhSAAIgwDkgAgMA9QABgmgGgoIARgBQAFAzAAAcg");
	this.shape.setTransform(-41.95,0.3875);

	this.label = new cjs.Text("文字標籤", "26px 'Microsoft JhengHei'", "#FFFFFF");
	this.label.name = "label";
	this.label.textAlign = "right";
	this.label.lineHeight = 37;
	this.label.lineWidth = 146;
	this.label.parent = this;
	this.label.setTransform(-480.95,-61.8);

	this.valueText = new cjs.Text("0", "26px 'Arial'", "#FFFFFF");
	this.valueText.name = "valueText";
	this.valueText.lineHeight = 31;
	this.valueText.lineWidth = 100;
	this.valueText.parent = this;
	this.valueText.setTransform(-626.95,-16.05);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.valueText},{t:this.label},{t:this.shape}]}).wait(1));

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

}).prototype = getMCSymbolPrototype(lib.slExplodeTime, new cjs.Rectangle(-628.9,-63.8,794.9,80.19999999999999), null);


(lib.rbDir4 = function(mode,startPosition,loop) {
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
	this.shape.graphics.f().s("#CCCCCC").ss(3,1,1).p("ACWAAQAAA+gsAsQgsAsg+AAQg+AAgrgsQgsgsAAg+QAAg+AsgsQArgrA+AAQA+AAAsArQAsAsAAA+g");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#333333").s().p("AhpBqQgsgsAAg+QAAg+AsgrQArgsA+AAQA+AAAsAsQAsArAAA+QAAA+gsAsQgsAsg+AAQg+AAgrgsg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	// label
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("ACwB6QBJgfAxhGIAWAPQgGAKgIAJQguA5hGAhgAjACKIAAgcQAmAMAJgIQACgDAAgFIAAi6IhMAAIAAgZIBMAAIAAgkIAaAAIAAAkIA0AAQgQgLgQgHIAMgVQAUAJAQANIgMARIAVAAIAAAZIhNAAIAAAHQAGBgBUBUIgYAPQgrgxgXgtIAABVQAAATgOAIQgHAEgNAAQgQAAgZgGgACICPIAAiKIgtAAQgDAPgBAZQgFAagIAXQgMAfgIAMIgbgHQAlg7ABhCIghAAIAAgaIAhAAIAAhVIgeAAIAAgbICZAAIAAAbIgZAAIAABVIAcAAIAAAaIgcAAIAACKgABcgVIAsAAIAAhVIgsAAgAk/BgQAVgHAQgJIAAhYIggAAIAAgXIAgAAIAAhLIghAAIAAgYIBeAAIAAAYIgiAAIAABLIAeAAIAAAXIgeAAIAABMIAYgPIAOAVQgjAZg6AWgAjyBoQAsgkAWgvIAWAKQgeA9glAcgAC5APQBAgbApg0IAVARQg4A/g0AWgAhbgJQATgbAOgdIAVAOQgUAjgOAVgAjbgyIAVgQQAUAXATAiIgVAOQgXgkgQgTgAC3hLQA3gXAmgrIATASQgzA0gtASg");
	this.shape_2.setTransform(60.15,-0.1,1,1,0,0,0,-1.8,0);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

}).prototype = getMCSymbolPrototype(lib.rbDir4, new cjs.Rectangle(-23.8,-18,165.8,36), null);


(lib.rbDir3 = function(mode,startPosition,loop) {
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
	this.shape.graphics.f().s("#CCCCCC").ss(3,1,1).p("ACWAAQAAA+gsAsQgsAsg+AAQg+AAgrgsQgsgsAAg+QAAg+AsgsQArgrA+AAQA+AAAsArQAsAsAAA+g");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#333333").s().p("AhpBqQgsgsAAg+QAAg+AsgrQArgsA+AAQA+AAAsAsQAsArAAA+QAAA+gsAsQgsAsg+AAQg+AAgrgsg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	// label
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#00FFFF").ss(5,1,1).p("AD6AAQAABnhJBKQhJBJhoAAQhnAAhJhJQhJhKAAhnQAAhnBJhJQBJhJBnAAQBoAABJBJQBJBJAABng");
	this.shape_2.setTransform(77.85,-5.05);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#FFFFFF").ss(5,1,1).p("Ap7CAQKgn/JXH/");
	this.shape_3.setTransform(78.575,9.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.rbDir3, new cjs.Rectangle(-23.8,-32.5,168.5,56.9), null);


(lib.rbDir2 = function(mode,startPosition,loop) {
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
	this.shape.graphics.f().s("#CCCCCC").ss(3,1,1).p("ACWAAQAAA+gsAsQgsAsg+AAQg+AAgrgsQgsgsAAg+QAAg+AsgsQArgrA+AAQA+AAAsArQAsAsAAA+g");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#333333").s().p("AhpBqQgsgsAAg+QAAg+AsgrQArgsA+AAQA+AAAsAsQAsArAAA+QAAA+gsAsQgsAsg+AAQg+AAgrgsg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	// label
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#00FFFF").ss(5,1,1).p("ABfAAQAABwgcBPQgcBPgnAAQgmAAgdhPQgbhPAAhwQAAhvAbhPQAdhPAmAAQAnAAAcBPQAcBPAABvg");
	this.shape_2.setTransform(77.85,-5.1,1,1,90);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#FFFFFF").ss(5,1,1).p("Ap7CAQKgn/JXH/");
	this.shape_3.setTransform(78.575,9.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.rbDir2, new cjs.Rectangle(-23.8,-18,168.5,42.4), null);


(lib.rbDir1 = function(mode,startPosition,loop) {
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
	this.shape.graphics.f().s("#CCCCCC").ss(3,1,1).p("ACWAAQAAA+gsAsQgsAsg+AAQg+AAgrgsQgsgsAAg+QAAg+AsgsQArgrA+AAQA+AAAsArQAsAsAAA+g");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#333333").s().p("AhpBqQgsgsAAg+QAAg+AsgrQArgsA+AAQA+AAAsAsQAsArAAA+QAAA+gsAsQgsAsg+AAQg+AAgrgsg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	// label
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#00FFFF").ss(5,1,1).p("ABbBXQgHA5gQAvQgcBPgoAAQgmAAgchPQgchPAAhwQAAhvAchPQAchPAmAAQAoAAAcBPQAWA/AFBV");
	this.shape_2.setTransform(77.8,-5.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#FFFFFF").ss(5,1,1).p("Ap7CAQKgn/JXH/");
	this.shape_3.setTransform(78.575,9.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.rbDir1, new cjs.Rectangle(-23.8,-34.6,168.5,59), null);


(lib.rb2Dir2 = function(mode,startPosition,loop) {
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
	this.shape.graphics.f().s("#CCCCCC").ss(3,1,1).p("ACWAAQAAA+gsAsQgsAsg+AAQg+AAgrgsQgsgsAAg+QAAg+AsgsQArgrA+AAQA+AAAsArQAsAsAAA+g");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#333333").s().p("AhpBqQgsgsAAg+QAAg+AsgrQArgsA+AAQA+AAAsAsQAsArAAA+QAAA+gsAsQgsAsg+AAQg+AAgrgsg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	// label
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#00FFFF").ss(5,1,1).p("AirirIFXAAIAAFXIlXAAg");
	this.shape_2.setTransform(78.85,-2.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#FFFFFF").ss(5,1,1).p("Ap7CAQKgn/JXH/");
	this.shape_3.setTransform(78.575,9.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.rb2Dir2, new cjs.Rectangle(-23.8,-21.9,168.5,46.3), null);


(lib.rb2Dir1 = function(mode,startPosition,loop) {
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
	this.shape.graphics.f().s("#CCCCCC").ss(3,1,1).p("ACWAAQAAA+gsAsQgsAsg+AAQg+AAgrgsQgsgsAAg+QAAg+AsgsQArgrA+AAQA+AAAsArQAsAsAAA+g");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#333333").s().p("AhpBqQgsgsAAg+QAAg+AsgrQArgsA+AAQA+AAAsAsQAsArAAA+QAAA+gsAsQgsAsg+AAQg+AAgrgsg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	// label
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#00FFFF").ss(5,1,1).p("ACPA7IAABJIkdCyIAAprIEdChIAABD");
	this.shape_2.setTransform(78.4834,-2,0.591,1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#FFFFFF").ss(5,1,1).p("Ap7CAQKgn/JXH/");
	this.shape_3.setTransform(78.575,9.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.rb2Dir1, new cjs.Rectangle(-23.8,-35.5,168.5,67), null);


(lib.projectTrace = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AB6CUIBHknIApAAIhHEngAmWB/QgZgWgFgkIA3gFQACATAMAKQALALAPAAQARAAAMgOQAMgOAAgcQAAgbgMgNQgLgMgTAAQgYAAgTAUIgsgGIAciVICRAAIAAA0IhoAAIgIAwQASgJATAAQAlABAZAaQAaAaAAAqQAAAkgVAbQgcAmgxAAQgoAAgZgVgAEUCCQgZgQgIgeIA3gIQAEAPAKAJQALAIAUAAQAVAAALgIQAHgFAAgKQAAgFgEgFQgEgDgOgEQhDgPgSgMQgYgRAAgcQAAgcAVgRQAVgTAtAAQArAAAUAOQAVANAIAcIg0AJQgDgMgJgGQgKgGgRgBQgWAAgJAHQgGAEAAAGQAAAHAFADQAIAFAsAKQArAKASAPQARAOAAAaQAAAdgYAUQgYAVguAAQgrgBgYgRgAAqCPIAAh3QAAgegGgIQgHgMgQAAQgMAAgJAHQgKAHgEANQgFANAAAdIAABkIg3AAIAAhxQAAgegDgJQgDgIgGgFQgGgEgKAAQgNAAgKAGQgKAHgFANQgEAMAAAeIAABlIg3AAIAAjPIAyAAIAAAdQAcghAlAAQAUAAAPAIQAOAJAKAQQANgQAQgJQAPgIASAAQAXAAAQAKQAPAJAIASQAGAMAAAeIAACEg");
	this.shape.setTransform(303.675,-187.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(6,1,1).p("Am0BGIA3gGQACATAMAKQALALAPAAQARAAAMgOQAMgOAAgcQAAgagMgNQgLgNgTAAQgYAAgTAUIgsgGIAciUICRAAIAAAzIhoAAIgIAxQASgJATAAQAlAAAZAaQAaAaAAAqQAAAkgVAbQgcAmgxAAQgoAAgZgVQgZgVgFgkgAjPg/IAyAAIAAAcQAcghAlAAQAUAAAPAIQAOAIAKARQANgRAQgIQAPgIASAAQAXAAAQAKQAPAJAIARQAGAOAAAdIAACEIg3AAIAAh2QAAgegGgJQgHgMgQAAQgMAAgJAHQgKAHgEANQgFANAAAeIAABjIg3AAIAAhxQAAgegDgIQgDgJgGgFQgGgEgKAAQgNAAgKAHQgKAHgFAMQgEANAAAdIAABlIg3AAgADzBUIA3gIQAEAQAKAIQALAIAUAAQAVAAALgIQAHgFAAgJQAAgGgEgFQgEgDgOgEQhDgOgSgNQgYgQAAgdQAAgcAVgRQAVgTAtAAQArAAAUAOQAVAOAIAbIg0AKQgDgNgJgGQgKgGgRAAQgWAAgJAGQgGAEAAAGQAAAHAFADQAIAFAsAKQArAKASAPQARAOAAAaQAAAdgYAUQgYAVguAAQgrAAgYgRQgZgRgIgegAB6CUIBHknIApAAIhHEng");
	this.shape_1.setTransform(303.675,-187.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AB6CUIBHknIApAAIhHEngAmWB/QgZgWgFgkIA3gFQACATAMAKQALALAPAAQARAAAMgOQAMgOAAgcQAAgbgMgNQgLgMgTAAQgYAAgTAUIgsgGIAciVICRAAIAAA0IhoAAIgIAwQASgJATAAQAlABAZAaQAaAaAAAqQAAAkgVAbQgcAmgxAAQgoAAgZgVgAEUCCQgZgQgIgeIA3gIQAEAPAKAJQALAIAUAAQAVAAALgIQAHgFAAgKQAAgFgEgFQgEgDgOgEQhDgPgSgMQgYgRAAgcQAAgcAVgRQAVgTAtAAQArAAAUAOQAVANAIAcIg0AJQgDgMgJgGQgKgGgRgBQgWAAgJAHQgGAEAAAGQAAAHAFADQAIAFAsAKQArAKASAPQARAOAAAaQAAAdgYAUQgYAVguAAQgrgBgYgRgAAqCPIAAh3QAAgegGgIQgHgMgQAAQgMAAgJAHQgKAHgEANQgFANAAAdIAABkIg3AAIAAhxQAAgegDgJQgDgIgGgFQgGgEgKAAQgNAAgKAGQgKAHgFANQgEAMAAAeIAABlIg3AAIAAjPIAyAAIAAAdQAcghAlAAQAUAAAPAIQAOAJAKAQQANgQAQgJQAPgIASAAQAXAAAQAKQAPAJAIASQAGAMAAAeIAACEg");
	this.shape_2.setTransform(303.675,-187.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("ADjCUIBHknIAoAAIhHEngAkzB0QgaghAAhSQAAhPAdgkQAWgdArgBQApABAXAdQAcAkAABQQAABRgcAjQgXAegpAAQgqAAgagggAkBhbQgIAFgFARQgFAVAAAyQgBAyAGATQAFATAIAGQAHAHALAAQAJAAAIgHQAIgGAEgRQAGgVAAgyQAAgygGgSQgEgUgIgFQgIgHgJAAQgLAAgHAHgAF8CDQgZgSgIgdIA3gIQAEAPALAJQAKAIAUAAQAVAAALgIQAHgFAAgJQAAgHgEgEQgEgEgOgDQhCgPgSgMQgZgQAAgdQAAgbAVgSQAVgTAuAAQAqAAAVAOQAUAOAIAbIg0AKQgDgNgJgGQgJgGgRAAQgXgBgJAHQgGADAAAIQAAAGAFAEQAIAEAsAKQAsAKARAOQARAPAAAaQAAAcgXAVQgZAUguABQgqAAgZgRgACTCPIAAh2QAAgegHgKQgHgLgQAAQgLAAgLAHQgKAHgEAMQgEAOgBAdIAABkIg2AAIAAhyQAAgdgDgJQgEgJgFgEQgHgEgJAAQgNAAgKAHQgKAGgEANQgFAMAAAeIAABlIg3AAIAAjPIAzAAIAAAdQAbghAlAAQATAAAPAIQAOAIAKARQANgRARgIQAPgIASAAQAXAAAQAKQAQAIAHATQAGANAAAcIAACFgAnVCPIAAjOQgeAdgpANIAAgyQAVgHAagUQAZgTAJgbIAtAAIAAEfg");
	this.shape_3.setTransform(84.95,-23.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(6,1,1).p("Ahng/IAzAAIAAAcQAbghAlAAQAUAAAOAIQAPAJAJAQQAOgQAQgJQAQgIARAAQAXAAAQAKQAQAJAIASQAFANAAAdIAACEIg2AAIAAh2QAAgegGgJQgIgMgQAAQgLAAgKAHQgKAHgFANQgEANAAAeIAABjIg3AAIAAhxQAAgegDgIQgDgJgGgFQgGgEgKAAQgNAAgKAHQgKAHgEAMQgFANAAAdIAABlIg3AAgAjviPQApAAAYAdQAbAkAABQQAABRgcAkQgXAdgpAAQgrAAgZggQgZggAAhTQAAhPAcgkQAWgdArAAgAjvhiQgKAAgIAHQgIAGgEAQQgGAWAAAxQAAAyAFATQAFATAIAGQAIAHAKAAQAJAAAIgHQAIgGAEgQQAGgWAAgyQAAgxgFgTQgFgTgIgGQgIgHgJAAgAmeCPIg3AAIAAjOQgeAdgpANIAAgyQAWgHAZgTQAZgUAKgaIAsAAgAFcBUIA3gIQADAQALAIQALAIATAAQAVAAALgIQAHgFAAgJQAAgGgEgFQgEgDgOgEQhCgOgSgNQgZgQAAgdQAAgbAWgSQAVgTAtAAQAqAAAVAOQAVAOAHAbIgzAKQgEgNgJgGQgJgGgRAAQgWAAgKAGQgGAEAAAHQAAAGAGAEQAHAEAsAKQAsAKARAPQARAOAAAaQAAAdgXAUQgYAVgvAAQgqAAgZgRQgZgRgHgegADjCUIBHknIApAAIhIEng");
	this.shape_4.setTransform(84.95,-23.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("ADiCUIBHknIAqAAIhIEngAkzB0QgaggABhTQAAhQAcgjQAXgeApABQAqgBAXAeQAcAjAABRQAABRgcAjQgXAegqAAQgqAAgZgggAkChbQgHAFgEARQgHAVAAAyQABAyAFATQAFATAHAGQAIAGAKAAQAKAAAIgGQAIgGAEgRQAGgVAAgyQAAgxgFgUQgGgSgHgGQgIgHgKAAQgKAAgIAHgAF8CCQgZgQgHgeIA3gJQADAQAKAJQAMAIATAAQAVAAALgIQAHgFAAgKQAAgFgEgFQgEgEgOgDQhDgOgSgNQgYgRAAgdQAAgaAWgTQAUgSAtAAQArAAAUAOQAWAOAHAbIgzAJQgEgMgJgGQgKgHgRABQgVAAgKAFQgGAFAAAGQAAAGAGAFQAHAEAsAKQArAKASAOQARAPAAAaQAAAdgYAUQgXAVgvgBQgrABgYgSgACSCPIAAh2QAAgfgFgJQgIgLgQAAQgLAAgKAHQgKAHgFANQgFANAAAeIAABjIg3AAIAAhyQAAgdgCgIQgEgKgFgEQgHgEgJAAQgNAAgKAHQgKAGgFANQgEANAAAdIAABlIg3AAIAAjOIAyAAIAAAcQAcghAkAAQAUAAAPAIQAPAIAJARQAOgRAQgIQAPgIASAAQAXAAAQAJQAPAKAJARQAFAOAAAcIAACFgAnVCPIAAjOQgeAcgpAOIAAgyQAWgHAZgTQAZgVAKgZIAsAAIAAEeg");
	this.shape_5.setTransform(84.95,-23.4);

	this.instance = new lib.arrow();
	this.instance.parent = this;
	this.instance.setTransform(260,-225,0.5,1);

	this.instance_1 = new lib.arrow();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-0.05,0.05,1,1,-60.0001);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// 圖層_2
	this.explode = new lib.explode();
	this.explode.name = "explode";
	this.explode.parent = this;
	this.explode.setTransform(37.8,-62.8,1,1,0,0,0,0.1,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.explode).wait(1));

	// 圖層_1
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#999999").ss(5,1,1).p("Egu3AAAMBdvAAA");
	this.shape_6.setTransform(300,0);

	this.timeline.addTween(cjs.Tween.get(this.shape_6).wait(1));

}).prototype = getMCSymbolPrototype(lib.projectTrace, new cjs.Rectangle(-10.7,-237.3,613.2,243.60000000000002), null);


(lib.labelV0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層_1
	this.nDot = new lib.OneNumber();
	this.nDot.name = "nDot";
	this.nDot.parent = this;
	this.nDot.setTransform(11.8,0);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAFCFIBLkJIAZAAIhKEJgACNB2QgTgPgGgeIAggFQACATAMAKQAMAKAWAAQAWAAAKgJQALgJAAgMQAAgKgJgHQgHgEgagGQgjgJgNgGQgOgHgGgLQgHgMAAgMQAAgNAFgKQAGgLAKgHQAHgGANgDQANgEAOAAQAWAAARAGQARAHAHAKQAIALADASIgfAEQgCgOgKgIQgKgIgSAAQgWAAgJAHQgKAHAAAKQAAAGAEAFQAEAEAIADIAcAJQAiAJANAFQANAGAIALQAHALAAAQQAAAQgJAOQgJAOgRAHQgSAIgWAAQgkAAgTgPgAgxCBIAAh2QAAgSgDgIQgDgJgIgFQgIgFgLAAQgTAAgNANQgNANAAAcIAABtIggAAIAAh6QAAgUgIgKQgIgLgRAAQgOAAgLAHQgLAHgFAOQgFAMAAAaIAABhIggAAIAAi6IAcAAIAAAaQAJgNAPgJQAOgIATAAQAVAAANAIQANAJAGAQQAWghAjAAQAcAAAPAPQAPAQAAAfIAACAg");
	this.shape.setTransform(71.075,-0.375);

	this.n3 = new lib.OneNumber();
	this.n3.name = "n3";
	this.n3.parent = this;
	this.n3.setTransform(26.5,0);

	this.n2 = new lib.OneNumber();
	this.n2.name = "n2";
	this.n2.parent = this;
	this.n2.setTransform(-1.5,0);

	this.n1 = new lib.OneNumber();
	this.n1.name = "n1";
	this.n1.parent = this;
	this.n1.setTransform(-26.5,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.n1},{t:this.n2},{t:this.n3},{t:this.shape},{t:this.nDot}]}).wait(3));

	// 圖層_5
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(6,1,1).p("AkOCBIAAi6IAcAAIAAAaQAJgNAPgJQAOgIATAAQAVAAANAIQANAJAGAQQAWghAjAAQAcAAAPAPQAPAQAAAfIAACAIggAAIAAh2QAAgSgDgIQgDgJgIgFQgIgFgLAAQgTAAgNANQgNANAAAcIAABtIggAAIAAh6QAAgUgIgKQgIgLgRAAQgOAAgLAHQgLAHgFAOQgFAMAAAaIAABhgAB0BJIAggFQACATAMAKQAMAKAWAAQAWAAAKgJQALgJAAgMQAAgKgJgHQgHgEgagGQgjgJgNgGQgOgHgGgLQgHgMAAgMQAAgNAFgKQAGgLAKgHQAHgGANgDQANgEAOAAQAWAAARAGQARAHAHAKQAIALADASIgfAEQgCgOgKgIQgKgIgSAAQgWAAgJAHQgKAHAAAKQAAAGAEAFQAEAEAIADQAFACAXAHQAiAJANAFQANAGAIALQAHALAAAQQAAAQgJAOQgJAOgRAHQgSAIgWAAQgkAAgTgPQgTgPgGgegAAFCFIBLkJIAZAAIhKEJg");
	this.shape_1.setTransform(71.075,-0.375);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAFCFIBLkJIAZAAIhKEJgACNB2QgTgPgGgeIAggFQACATAMAKQAMAKAWAAQAWAAAKgJQALgJAAgMQAAgKgJgHQgHgEgagGQgjgJgNgGQgOgHgGgLQgHgMAAgMQAAgNAFgKQAGgLAKgHQAHgGANgDQANgEAOAAQAWAAARAGQARAHAHAKQAIALADASIgfAEQgCgOgKgIQgKgIgSAAQgWAAgJAHQgKAHAAAKQAAAGAEAFQAEAEAIADIAcAJQAiAJANAFQANAGAIALQAHALAAAQQAAAQgJAOQgJAOgRAHQgSAIgWAAQgkAAgTgPgAgxCBIAAh2QAAgSgDgIQgDgJgIgFQgIgFgLAAQgTAAgNANQgNANAAAcIAABtIggAAIAAh6QAAgUgIgKQgIgLgRAAQgOAAgLAHQgLAHgFAOQgFAMAAAaIAABhIggAAIAAi6IAcAAIAAAaQAJgNAPgJQAOgIATAAQAVAAANAIQANAJAGAQQAWghAjAAQAcAAAPAPQAPAQAAAfIAACAg");
	this.shape_2.setTransform(71.075,-0.375);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1}]}).wait(3));

	// 圖層_3
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("Ag5BbQgRgVAAgvQAAgdAHgSQAGgSAMgKQAMgKASAAQAOAAAJAGQAKAFAHAKQAGAKAEAPQAEAPAAAYQAAAdgGASQgGASgMAKQgMAKgSAAQgYAAgOgRgAgqghQgKAPAAApQAAApAJAOQAKANAOAAQAOAAAJgOQAKgNAAgpQAAgpgKgNQgJgOgOAAQgOAAgJAMgAjMBOIgfi5IAfAAIAQBmIAHA2QAJgTAOgaIA+hvIAiAAIhrC5gABCAFIAAgdICqAAIAAAdgABChIIAAgeICqAAIAAAeg");
	this.shape_3.setTransform(-68.375,4.675);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAiBrIgUgzIhFAAIgSAzIgYAAIBBinIAYAAIBDCngAgegKIgSAwIA4AAIgRgtIgMgjQgDAQgGAQgAjZBQIgfi6IAfAAIAQBnIAHA2QAJgUAOgaIA+hvIAiAAIhrC6gABPAGIAAgcICqAAIAAAcgABPhHIAAgdICqAAIAAAdg");
	this.shape_4.setTransform(-69.675,4.525);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AhPBrIAAinIA/AAQASAAAMAFQALAFAHALQAGALAAALQAAALgGAIQgFAKgMAGQAPAEAIALQAIALAAAOQAAAMgFAKQgFAKgHAGQgHAFgLADQgLADgPAAgAg5BXIAqAAIAPgBQAGgBAGgDQAFgEADgGQADgGAAgIQAAgJgEgHQgFgHgJgDQgHgDgQAAIgnAAgAg5AKIAkAAQAPAAAGgCQAIgDAEgFQAEgFAAgJQAAgJgEgGQgEgGgHgDQgGgCgSAAIgiAAgAjZBQIgfi6IAfAAIAQBnIAHA2QAJgUAOgaIA+hvIAiAAIhrC6gABPAGIAAgcICqAAIAAAcgABPhHIAAgdICqAAIAAAdg");
	this.shape_5.setTransform(-69.675,4.525);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3}]}).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).wait(1));

	// 圖層_4
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#000000").ss(6,1,1).p("AjMBOIgfi5IAfAAIAQBmQADAQAEAmQAJgTAOgaIA+hvIAiAAIhrC5gADshIIiqAAIAAgeICqAAgAhKAXQAAgdAHgSQAGgSAMgKQAMgKASAAQAOAAAJAGQAKAFAHAKQAGAKAEAPQAEAPAAAYQAAAdgGASQgGASgMAKQgMAKgSAAQgYAAgOgRQgRgVAAgvgADsAFIiqAAIAAgdICqAAgAg0AXQAAApAJAOQAKANAOAAQAOAAAJgOQAKgNAAgpQAAgpgKgNQgJgOgOAAQgOAAgJAMQgKAPAAApg");
	this.shape_6.setTransform(-68.375,4.675);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("Ag5BbQgRgVAAgvQAAgdAHgSQAGgSAMgKQAMgKASAAQAOAAAJAGQAKAFAHAKQAGAKAEAPQAEAPAAAYQAAAdgGASQgGASgMAKQgMAKgSAAQgYAAgOgRgAgqghQgKAPAAApQAAApAJAOQAKANAOAAQAOAAAJgOQAKgNAAgpQAAgpgKgNQgJgOgOAAQgOAAgJAMgAjMBOIgfi5IAfAAIAQBmIAHA2QAJgTAOgaIA+hvIAiAAIhrC5gABCAFIAAgdICqAAIAAAdgABChIIAAgeICqAAIAAAeg");
	this.shape_7.setTransform(-68.375,4.675);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#000000").ss(6,1,1).p("AjZBQIgfi6IAfAAIAQBnQADAQAEAmQAJgUAOgaIA+hvIAiAAIhrC6gAhhBrIBBinIAYAAIBDCnIgZAAIgUgzIhFAAIgSAzgAD5hHIiqAAIAAgdICqAAgAD5AGIiqAAIAAgcICqAAgAgwAmIA4AAIgRgtQgIgWgEgNQgDAQgGAQg");
	this.shape_8.setTransform(-69.675,4.525);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AAiBrIgUgzIhFAAIgSAzIgYAAIBBinIAYAAIBDCngAgegKIgSAwIA4AAIgRgtIgMgjQgDAQgGAQgAjZBQIgfi6IAfAAIAQBnIAHA2QAJgUAOgaIA+hvIAiAAIhrC6gABPAGIAAgcICqAAIAAAcgABPhHIAAgdICqAAIAAAdg");
	this.shape_9.setTransform(-69.675,4.525);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#000000").ss(6,1,1).p("AjZBQIgfi6IAfAAIAQBnQADAQAEAmQAJgUAOgaIA+hvIAiAAIhrC6gAhPBrIAAinIA/AAQASAAAMAFQALAFAHALQAGALAAALQAAALgGAIQgFAKgMAGQAPAEAIALQAIALAAAOQAAAMgFAKQgFAKgHAGQgHAFgLADQgLADgPAAgAD5hHIiqAAIAAgdICqAAgAD5AGIiqAAIAAgcICqAAgAg5AKIAkAAQAPAAAGgCQAIgDAEgFQAEgFAAgJQAAgJgEgGQgEgGgHgDQgGgCgSAAIgiAAgAg5BXIAqAAQAKAAAFgBQAGgBAGgDQAFgEADgGQADgGAAgIQAAgJgEgHQgFgHgJgDQgHgDgQAAIgnAAg");
	this.shape_10.setTransform(-69.675,4.525);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AhPBrIAAinIA/AAQASAAAMAFQALAFAHALQAGALAAALQAAALgGAIQgFAKgMAGQAPAEAIALQAIALAAAOQAAAMgFAKQgFAKgHAGQgHAFgLADQgLADgPAAgAg5BXIAqAAIAPgBQAGgBAGgDQAFgEADgGQADgGAAgIQAAgJgEgHQgFgHgJgDQgHgDgQAAIgnAAgAg5AKIAkAAQAPAAAGgCQAIgDAEgFQAEgFAAgJQAAgJgEgGQgEgGgHgDQgGgCgSAAIgiAAgAjZBQIgfi6IAfAAIAQBnIAHA2QAJgUAOgaIA+hvIAiAAIhrC6gABPAGIAAgcICqAAIAAAcgABPhHIAAgdICqAAIAAAdg");
	this.shape_11.setTransform(-69.675,4.525);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6}]}).to({state:[{t:this.shape_9},{t:this.shape_8}]},1).to({state:[{t:this.shape_11},{t:this.shape_10}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-97.5,-16.7,198.7,35.2);


(lib.controlsMain = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// CM
	this.slExplodeTime = new lib.slExplodeTime();
	this.slExplodeTime.name = "slExplodeTime";
	this.slExplodeTime.parent = this;
	this.slExplodeTime.setTransform(319.2,618.2);

	this.centerMass = new lib.conterMass();
	this.centerMass.name = "centerMass";
	this.centerMass.parent = this;
	this.centerMass.setTransform(1175,350);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.centerMass},{t:this.slExplodeTime}]}).wait(1));

	// v0AdjN
	this.rbDir4 = new lib.rbDir4();
	this.rbDir4.name = "rbDir4";
	this.rbDir4.parent = this;
	this.rbDir4.setTransform(946.3,660);

	this.rbDir3 = new lib.rbDir3();
	this.rbDir3.name = "rbDir3";
	this.rbDir3.parent = this;
	this.rbDir3.setTransform(1159.45,660);

	this.rbDir2 = new lib.rbDir2();
	this.rbDir2.name = "rbDir2";
	this.rbDir2.parent = this;
	this.rbDir2.setTransform(1159.45,586.5);

	this.rbDir1 = new lib.rbDir1();
	this.rbDir1.name = "rbDir1";
	this.rbDir1.parent = this;
	this.rbDir1.setTransform(946.3,586.5);

	this.v0AdjN = new lib.v0AdjN();
	this.v0AdjN.name = "v0AdjN";
	this.v0AdjN.parent = this;
	this.v0AdjN.setTransform(1175,350);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.v0AdjN},{t:this.rbDir1},{t:this.rbDir2},{t:this.rbDir3},{t:this.rbDir4}]}).wait(1));

	// v0Adj2
	this.rb2Dir2 = new lib.rb2Dir2();
	this.rb2Dir2.name = "rb2Dir2";
	this.rb2Dir2.parent = this;
	this.rb2Dir2.setTransform(1192.05,650);

	this.rb2Dir1 = new lib.rb2Dir1();
	this.rb2Dir1.name = "rb2Dir1";
	this.rb2Dir1.parent = this;
	this.rb2Dir1.setTransform(972.05,650);

	this.slMAMB = new lib.slMAMB();
	this.slMAMB.name = "slMAMB";
	this.slMAMB.parent = this;
	this.slMAMB.setTransform(1066.05,568.2);

	this.v0Adj2 = new lib.v0Adj2();
	this.v0Adj2.name = "v0Adj2";
	this.v0Adj2.parent = this;
	this.v0Adj2.setTransform(1175,350);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.v0Adj2},{t:this.slMAMB},{t:this.rb2Dir1},{t:this.rb2Dir2}]}).wait(1));

	// 圖層_1
	this.projectTrace = new lib.projectTrace();
	this.projectTrace.name = "projectTrace";
	this.projectTrace.parent = this;
	this.projectTrace.setTransform(125,500);

	this.timeline.addTween(cjs.Tween.get(this.projectTrace).wait(1));

	// 圖層_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(8,1,1).p("EAAAg2rMB1MAAAMAAABtXMh1MAAAgEAAAA2sMh1LAAAMAAAhtXMB1LAAA");
	this.shape.setTransform(800,400.025);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(0,0,0,0.6)").s().p("EAAAA2sMAAAhtXMB1MAAAMAAABtXgEAAAA2sMh1LAAAMAAAhtXMB1LAAAMAAABtXg");
	this.shape_1.setTransform(800,400.025);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.controlsMain, new cjs.Rectangle(-309.7,46.1,2133.2999999999997,707.9), null);


(lib.chCM = function(mode,startPosition,loop) {
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
	this.shape_2.graphics.f("#FFFFFF").s().p("AizB4IAFgVIhfAAIAGAUQgmAOg2AIIgGgYQAxgKAfgIIgxAAQgGAAAAgHIAAh+QABgFAFAAIB0AAIgQgRQAWgTAAgVIAAghQAAgJAIABQA0ABArgEIAGAXQgjAEguAAQgEAAAAAEIAAAHIBkAAIAAAYIguAAIAAAiIgYAAIAAgiIggAAQgFARgRAWIBcAAQAHABAAAEIAAB+QAAAHgHAAIgqAAQAfAGAoAMIgGAYQg1gRghgEgAk2BMICuAAIACgCIAAgOIiwAAgAk2AnICwAAIAAgQIiwAAgAk2gPIAAARICwAAIAAgRQAAAAAAAAQAAgBgBAAQAAAAAAAAQAAAAgBAAIiuAAQAAAAgBAAQAAAAAAAAQAAAAAAABQABAAAAAAgADACGQgMAAgHgFQgOgKAAgZIAAjUIAbAAIAADQQABAJABADQAEAFAKAAIBBAAQAOAAADgHQAEgFABgHQABgHgBgtIAbAEQABAwgEASQgBAJgEAHQgJAKgEABQgHABgMAAgABWBjQAWh1gBhKIAaACQABBRgWBvgAEvhiIAZgGQAaBRALB0IgaAFQgOh9gWhHgADSiFIAagGQAYBHAIBpIgaAFQgLhvgVhAgAlsgtQASgXAAgWIAAglQAAgJAHAAQA3AAAmgEIAHAXQgrAFgkAAQgEAAAAAFIAAAFIBoAAIAAAYIgxAAIAAAiIgYAAIAAgiIggAAQgFAbgPAWg");
	this.shape_2.setTransform(70.025,0.025);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

}).prototype = getMCSymbolPrototype(lib.chCM, new cjs.Rectangle(-23.8,-20.7,165.8,38.7), null);


(lib.chAutoSlow = function(mode,startPosition,loop) {
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
	this.shape_2.setTransform(70.025,0.0343);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

}).prototype = getMCSymbolPrototype(lib.chAutoSlow, new cjs.Rectangle(-23.8,-20.7,165.8,38.7), null);


// stage content:
(lib.myAnimate = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// helper
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("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");
	this.shape.setTransform(1545.1,26.925);

	this.title = new lib.title();
	this.title.name = "title";
	this.title.parent = this;
	this.title.setTransform(260,80);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.title},{t:this.shape}]}).wait(1));

	// control
	this.chAutoSlow = new lib.chAutoSlow();
	this.chAutoSlow.name = "chAutoSlow";
	this.chAutoSlow.parent = this;
	this.chAutoSlow.setTransform(1407.65,608);

	this.chCM = new lib.chCM();
	this.chCM.name = "chCM";
	this.chCM.parent = this;
	this.chCM.setTransform(1407.65,668);

	this.btnNN = new lib.btnNN();
	this.btnNN.name = "btnNN";
	this.btnNN.parent = this;
	this.btnNN.setTransform(52,800.75);
	new cjs.ButtonHelper(this.btnNN, 0, 1, 2, false, new lib.btnNN(), 3);

	this.btnN2 = new lib.btnN2();
	this.btnN2.name = "btnN2";
	this.btnN2.parent = this;
	this.btnN2.setTransform(52,724.05);
	new cjs.ButtonHelper(this.btnN2, 0, 1, 2, false, new lib.btnN2(), 3);

	this.btnPlayStop = new lib.btnPlayStop();
	this.btnPlayStop.name = "btnPlayStop";
	this.btnPlayStop.parent = this;
	this.btnPlayStop.setTransform(1457.35,756.6,1.2,1.2);
	new cjs.ButtonHelper(this.btnPlayStop, 0, 1, 2, false, new lib.btnPlayStop(), 3);

	this.btnReset = new lib.btnReset();
	this.btnReset.name = "btnReset";
	this.btnReset.parent = this;
	this.btnReset.setTransform(1457.35,756.6,1.2,1.2);
	new cjs.ButtonHelper(this.btnReset, 0, 1, 2, false, new lib.btnReset(), 3);

	this.instance = new lib.labelV0();
	this.instance.parent = this;
	this.instance.setTransform(-219,394.6,1,1,0,0,0,3.1,0.9);

	this.instance_1 = new lib.arrow();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-237.25,339.2);

	this.instance_2 = new lib.ball();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-218.95,252.75);

	this.controlMain = new lib.controlsMain();
	this.controlMain.name = "controlMain";
	this.controlMain.parent = this;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.controlMain},{t:this.instance_2},{t:this.instance_1},{t:this.instance},{t:this.btnReset},{t:this.btnPlayStop},{t:this.btnN2},{t:this.btnNN},{t:this.chCM},{t:this.chAutoSlow}]}).wait(1));

	// UI
	this.btnLeft = new lib.theBtnLeft();
	this.btnLeft.name = "btnLeft";
	this.btnLeft.parent = this;
	this.btnLeft.setTransform(1910.85,730);

	this.btnRight = new lib.theBtnRight();
	this.btnRight.name = "btnRight";
	this.btnRight.parent = this;
	this.btnRight.setTransform(2060.85,730);

	this.btnDown = new lib.theBtnDown();
	this.btnDown.name = "btnDown";
	this.btnDown.parent = this;
	this.btnDown.setTransform(1985.85,730);

	this.btnUp = new lib.theBtnUp();
	this.btnUp.name = "btnUp";
	this.btnUp.parent = this;
	this.btnUp.setTransform(1985.85,655);

	this.slCameraRR = new lib.theSlider();
	this.slCameraRR.name = "slCameraRR";
	this.slCameraRR.parent = this;
	this.slCameraRR.setTransform(1350,850);

	this.btn02 = new lib.theButton();
	this.btn02.name = "btn02";
	this.btn02.parent = this;
	this.btn02.setTransform(2060.85,550);

	this.btn01 = new lib.theButton();
	this.btn01.name = "btn01";
	this.btn01.parent = this;
	this.btn01.setTransform(1910.85,550);

	this.ch02 = new lib.theCheckbox();
	this.ch02.name = "ch02";
	this.ch02.parent = this;
	this.ch02.setTransform(1978.05,440.55,1,1,0,0,0,67.2,-1.4);

	this.ch01 = new lib.theCheckbox();
	this.ch01.name = "ch01";
	this.ch01.parent = this;
	this.ch01.setTransform(1978.05,368.4,1,1,0,0,0,67.2,-1.4);

	this.sl03 = new lib.theSlider();
	this.sl03.name = "sl03";
	this.sl03.parent = this;
	this.sl03.setTransform(1910.85,283.45);

	this.sl02 = new lib.theSlider();
	this.sl02.name = "sl02";
	this.sl02.parent = this;
	this.sl02.setTransform(1910.85,202.95);

	this.sl01 = new lib.theSlider();
	this.sl01.name = "sl01";
	this.sl01.parent = this;
	this.sl01.setTransform(1910.85,122.45);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.sl01},{t:this.sl02},{t:this.sl03},{t:this.ch01},{t:this.ch02},{t:this.btn01},{t:this.btn02},{t:this.slCameraRR},{t:this.btnUp},{t:this.btnDown},{t:this.btnRight},{t:this.btnLeft}]}).wait(1));

	// btn3D
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("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");
	this.shape_1.setTransform(101.2,875.708);

	this.btn3D = new lib.btn3D();
	this.btn3D.name = "btn3D";
	this.btn3D.parent = this;
	new cjs.ButtonHelper(this.btn3D, 0, 1, 2, false, new lib.btn3D(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.btn3D},{t:this.shape_1}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(483,450,1701.9,450);
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