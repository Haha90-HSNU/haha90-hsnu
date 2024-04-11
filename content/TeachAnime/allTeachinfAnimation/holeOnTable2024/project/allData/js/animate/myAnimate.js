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
	this.shape.setTransform(0,0.025);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FF0000").ss(8,1,1).p("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");
	this.shape_1.setTransform(0,0.025);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("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");
	this.shape_2.setTransform(0,0.025);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.title, new cjs.Rectangle(-238.7,-48.4,477.5,96.9), null);


(lib.letter123 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgwBXQgVgaAAg9QAAglAIgXQAIgXAPgNQAPgMAXAAQASAAAMAGQANAIAJANQAJANAEASQAFATAAAfQAAAmgIAXQgHAYgQAMQgQANgXAAQgeAAgSgXgAgdhHQgNATAAA0QAAA1AMASQANARARAAQASAAAMgRQANgSAAg1QAAg0gNgRQgMgSgSAAQgSAAgLAQg");
	this.shape.setTransform(0,-10.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AANBsIAAinQgJAJgPAJQgPAJgNAFIAAgaQAXgKAQgPQAQgPAHgOIARAAIAADXg");
	this.shape_1.setTransform(0.025,-10.675);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AhGBsQAAgKADgJQAFgOAMgOQAMgOAXgTQAigcAMgQQAMgRABgPQgBgQgKgKQgMgLgSAAQgSAAgLALQgMAMAAAUIgbgDQADgeASgQQASgQAeAAQAeAAATARQARARABAaQAAANgGAMQgFANgMAMQgMAOgcAYQgYAUgGAHQgHAHgFAHIBpAAIAAAag");
	this.shape_2.setTransform(0,-10.675);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgwBdQgTgRgCgbIAagDQAFAWALAKQALAKAPAAQASAAANgNQAMgNAAgTQAAgSgLgMQgMgMgTAAQgGAAgLADIADgWIAEAAQAQAAANgJQAOgIAAgTQAAgOgKgKQgKgJgOAAQgQAAgKAJQgKAKgDATIgbgEQAFgbARgOQASgPAZAAQARAAAOAIQAPAHAIANQAIANAAAPQAAAOgIALQgHAMgPAGQATAFALANQAKAOAAAUQAAAcgUAUQgVAUgeAAQgcAAgTgRg");
	this.shape_3.setTransform(0.025,-10.875);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AATBrIAAgzIhcAAIAAgYIBhiKIAVAAIAACKIAdAAIAAAYIgdAAIAAAzgAgwAgIBDAAIAAhgg");
	this.shape_4.setTransform(0.025,-10.675);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgxBcQgTgRgCgbIAbgCQADAUAMAKQALAKAQAAQASAAANgOQANgOAAgYQAAgXgMgMQgNgNgUAAQgMAAgLAGQgKAGgGAIIgZgDIAVhuIBqAAIAAAaIhVAAIgLA5QATgNAUAAQAcAAAUATQATATAAAeQAAAegRAVQgVAagiAAQgeAAgSgQg");
	this.shape_5.setTransform(0.025,-10.775);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgxBVQgVgYAAg4QAAg8AXgdQAUgYAhAAQAZAAARANQAQAPADAZIgaACQgEgPgGgIQgLgLgQAAQgLAAgKAHQgMAJgHASQgHARgBAgQAKgOAOgHQANgIAOAAQAbAAASAUQATASAAAgQAAATgJASQgJARgPAKQgPAJgTAAQggAAgVgZgAgbADQgNAMAAAWQAAANAGANQAGAMAKAHQALAGAKAAQARAAAMgOQAMgNAAgXQAAgXgMgMQgMgMgSAAQgRAAgMAMg");
	this.shape_6.setTransform(0.025,-10.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgnBqQABgZAKgkQAJgkASghQARghAUgWIhpAAIAAgaICLAAIAAAUQgVAXgUAkQgUAjgKAmQgIAbgCAgg");
	this.shape_7.setTransform(0,-10.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgyBbQgUgTAAgcQAAgVALgOQALgOATgEQgQgHgIgKQgIgLAAgQQAAgXARgRQARgPAbAAQAcAAARAQQARAQAAAYQAAAPgIALQgIAKgQAHQAUAGALAOQAKANAAAVQAAAbgUATQgTATggAAQgfAAgTgTgAgeANQgMANAAASQAAAMAFAKQAFAKALAHQAKAFALAAQATAAANgMQAMgMAAgTQAAgTgNgNQgMgMgTAAQgSAAgMAMgAgYhOQgKALAAANQAAAPAKAKQAKAKAOgBQAQABAJgKQAKgKAAgNQAAgPgKgKQgKgKgPAAQgOAAgKAJg");
	this.shape_8.setTransform(0.025,-10.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgvBfQgPgOgDgZIAZgCQADASAJAIQAJAIAPAAQALAAAJgFQAJgGAGgKQAFgJAFgQQADgPAAgRIAAgFQgHANgOAIQgOAHgPAAQgbAAgSgTQgSgTgBgfQABghATgTQATgVAdABQAUAAARALQARALAJAVQAKAUgBAoQABApgKAYQgIAYgSANQgSANgWAAQgagBgQgOgAgdhIQgOAOAAAXQAAAVANAMQANAMARAAQASAAAMgMQALgNABgXQgBgWgLgOQgNgNgRAAQgRAAgMAPg");
	this.shape_9.setTransform(0,-10.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgOAPIAAgdIAdAAIAAAdg");
	this.shape_10.setTransform(0.025,-1.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[]},1).to({state:[{t:this.shape_10}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-7.4,-21.8,14.9,22);


(lib.jBar = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AvnBkIAAjHIfPAAIAADHg");
	this.shape.setTransform(100,0,1,0.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.jBar, new cjs.Rectangle(0,-4,200,8), null);


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


(lib.btnMassC = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// text
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhrDBIAAmCIAiAAIAABoQAkBQAaBSIggAMQgNgqgRgtIAADDgAmRC3IADgiQASAJAKABQAFAAACgCQADgFAAgGIAAhkQgNAFgMAGIgSgdQAbgKAQgKIAAheIgnAAIAAghIAnAAIAAhIIAiAAIAABIIAmAAIAAAhIgmAAIAABMIAWgQIAVAaQgQANgWAMIgFABIAACAQgBAYgRALQgFAEgKAAQgPgBgbgJgAAUC0IAAglICDAAIAAlMIAnAAIAABkIC/AAIAAAlIi/AAIAADDIDWAAIAAAlgAkqCRIBMgKIAAhEIhAAAIAAggIBAAAIAAgjIAiAAIAAAjIBAAAIAAAgIhAAAIAABAIBEgIIADAiIiuAWgAkegRIAAghIBDAAIAAg/Ig5AAIAAggIA5AAIAAgpIAjAAIAAApIA5AAIAAAgIg5AAIAAA/IBBAAIAAAhg");
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


(lib.btnJ2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// text
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAAkdIF1I7IrpABg");
	this.shape.setTransform(14.977,-0.0657,0.3742,0.5685,180);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Ag0BwQgTgUABgnIAfgEQABAeAKAKQAKAMARAAQAMgBAJgGQAKgFADgLQAEgKAAgVIAAixIAiAAIAACuQAAAhgIARQgIASgRAJQgRAKgWAAQgiAAgRgTg");
	this.shape_1.setTransform(-14.9946,-0.0024,1.3435,1.3435);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(4));

	// Layer_1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#00FFFF").ss(3,1,1).p("AkrkrIJXAAQBkAAAABkIAAGPQAABkhkAAIpXAAQhkAAAAhkIAAmPQAAhkBkAAg");

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#000066","#0066FF"],[0,1],20,30,20,-29.9).s().p("AkrEsQhkAAAAhkIAAmPQAAhkBkAAIJXAAQBkAAAABkIAAGPQAABkhkAAg");

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["#000066","#00FFFF"],[0,1],20,30,20,-29.9).s().p("AkrEsQhkAAAAhkIAAmPQAAhkBkAAIJXAAQBkAAAABkIAAGPQAABkhkAAg");

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#FF00FF").ss(3,1,1).p("AkwkrIJhAAQBkAAAABkIAAGPQAABkhkAAIphAAQhkAAAAhkIAAmPQAAhkBkAAg");
	this.shape_5.setTransform(0.5,0);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FF00FF").s().p("AkwEsQhkAAAAhkIAAmPQAAhkBkAAIJhAAQBkAAAABkIAAGPQAABkhkAAg");
	this.shape_6.setTransform(0.5,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2,p:{rotation:0}}]}).to({state:[{t:this.shape_4,p:{rotation:0}},{t:this.shape_2,p:{rotation:0}}]},1).to({state:[{t:this.shape_4,p:{rotation:180}},{t:this.shape_2,p:{rotation:180}}]},1).to({state:[{t:this.shape_6},{t:this.shape_5}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-41.5,-31.5,84,63);


(lib.btnJ1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// text
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAAkdIF1I7IrpABg");
	this.shape.setTransform(15.023,-0.0357,0.3742,0.5686);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Ag0BwQgTgUABgnIAfgEQABAeAKAKQAKAMARAAQAMgBAJgGQAKgFADgLQAEgKAAgVIAAixIAiAAIAACuQAAAhgIARQgIASgRAJQgRAKgWAAQgiAAgRgTg");
	this.shape_1.setTransform(-14.9946,-0.0024,1.3435,1.3435);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(4));

	// Layer_1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#00FFFF").ss(3,1,1).p("AkrkrIJXAAQBkAAAABkIAAGPQAABkhkAAIpXAAQhkAAAAhkIAAmPQAAhkBkAAg");

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#000066","#0066FF"],[0,1],20,30,20,-29.9).s().p("AkrEsQhkAAAAhkIAAmPQAAhkBkAAIJXAAQBkAAAABkIAAGPQAABkhkAAg");

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["#000066","#00FFFF"],[0,1],20,30,20,-29.9).s().p("AkrEsQhkAAAAhkIAAmPQAAhkBkAAIJXAAQBkAAAABkIAAGPQAABkhkAAg");

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#FF00FF").ss(3,1,1).p("AkwkrIJhAAQBkAAAABkIAAGPQAABkhkAAIphAAQhkAAAAhkIAAmPQAAhkBkAAg");
	this.shape_5.setTransform(0.5,0);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FF00FF").s().p("AkwEsQhkAAAAhkIAAmPQAAhkBkAAIJhAAQBkAAAABkIAAGPQAABkhkAAg");
	this.shape_6.setTransform(0.5,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2,p:{rotation:0}}]}).to({state:[{t:this.shape_4,p:{rotation:0}},{t:this.shape_2,p:{rotation:0}}]},1).to({state:[{t:this.shape_4,p:{rotation:180}},{t:this.shape_2,p:{rotation:180}}]},1).to({state:[{t:this.shape_6},{t:this.shape_5}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-41.5,-31.5,84,63);


(lib.btnCourse03 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// text
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ABpDfIAAiHQgiANgeANIgWglQA0gRAigRIAAiGIggAAQgJA+gIAXIgngGQAWhLAAhcIAAgaIAoAAIAAAaIgCAvIAcAAIAAhaIApAAIAABaIAqAAIAAApIgqAAIAABzQAXgNANgLIAYAiQgaARgiARIAACbgAEyDSIgCgxQBBAXARgNQAPgIAIgcQAJggAChAQACiYgCgIIgGgCIgUAAQgCBggpBgQgoBThOA4IgggeQCUhYAFjVIgeAAQgBAcgGAdQgVBghfBiIgkgXQBEhDAcg4QARglAHhEIgiAAQgWBAgZAkIgngPQA4hVAMhhIAnAFQgEAdgFAWIC3AAIAKACQAFAEAAARQAABqgCBQQgDCJgtAeQgPAIgYAAQgbAAgngKgAh7DbIAAm5IAoAAIAAB2QApBcAeBfIgmANQgPgxgSg0IAADggAnKDQIADgnQAVAJALACQAGAAACgCQAEgFAAgIIAAhyQgPAFgOAIIgUgiQAegLATgLIAAhsIgtAAIAAgmIAtAAIAAhSIAnAAIAABSIArAAIAAAmIgrAAIAABWIAYgRIAZAeQgTAOgYANIgGACIAACSQgCAdgTALQgGAEgMAAQgRAAgegKgAlUCjIBWgLIAAhNIhJAAIAAglIBJAAIAAgnIAnAAIAAAnIBKAAIAAAlIhKAAIAABJIBNgJIAEAnIjHAZgAlHgVIAAgmIBNAAIAAhHIhCAAIAAgmIBCAAIAAgvIAnAAIAAAvIBCAAIAAAmIhCAAIAABHIBLAAIAAAmg");
	this.shape.setTransform(0.025,-0.175);

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


(lib.btnCourse02 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// text
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ACiDWIACgoQAqATAQgFQAJAAAGgGQAEgGACgLIjhAAIAAgiIDfAAQAAgJgCgIIi2AAIAAgeICsAAQgDgJgGgHQhSAFg4AAIgEggQBFgCBcgFQATgCANAAIgPghQAmgFAWgIIgjgeIAWgYQAcAaASANQAjgWAHgOQAEgHgIAAIhvAAIAAggICVAAIARAPQgQAnguAoQAjAOAvAFIgPAiQgngJgegNIADAcQglAJhQAIIgCAAQACAHAFALICaAAIAAAeIiTAAQACAKABAHIC0AAIAAAiIiyAAQAFARgMATQgFALgHAGQgOAHgVAAQgaAAgngLgAFRANQgfALgWAGQA0gGAjgFQgMgKgLgBIgLAFgAhyCcQgcAggtAhIghgaQAygeAYgeQADgHAGgCQgkgzgdhfIAlgLQAWBQAdAtQApg8ALhIQgCgIgCgCQAAgDgLABIiHAAIAAglIA3AAIAAiHIAnAAIAAArIBeAAIAAAmIheAAIAAA2IBHAAIAVALQgMB1g0BVQAcAlAtAkIghAYQgkgggcgjgAk7DaIgFgqQAnAKALgIQAKgFAAgMIAAiMQgBgBgBAAQAAAAgBgBQAAAAgBAAQAAAAgBAAIibAAQgBAAAAAAQAAAAgBAAQAAABAAAAQAAAAAAABIAADDIgmAAIAAjdQAAgNAOAAIDQAAQAPAAAAANIAACzQAAAZgTALQgMAKgfAAIgegCgAmLCfQgGAAAAgFIAAhlQAAgGAGAAIBuAAQAGAAgBAGIAABlQABAFgGAAgAlsBUIAAAoIAtAAQABAAAAAAQAAAAABgBQAAAAAAAAQAAgBAAAAIAAgmQAAAAAAAAQAAAAAAgBQgBAAAAAAQAAAAgBAAIgtAAQAAAAAAAAQgBAAAAAAQAAABABAAQAAAAAAAAgAAqAgQgNgCAAgLIAAgfIAgAAIAAAMQAAAGAGAAIA2AAIAAgaIhlAAIAAgaIBlAAIAAgLIhRAAQgDgCAAgCIAAhfQACgEABAAIBRAAIAAgLIhiAAIAAgeIBiAAIAAgXIAiAAIAAAXIBdAAIAAAeIhdAAIAAALIBPAAQAFACAAACIAABfQAAAEgFAAIhPAAIAAALIBfAAIAAAaIhfAAIAAAaIA2AAQAEAAAAgGIAAgMIAgAAIAAAfQgBANgNAAgACbhRIAwAAQABAAAAAAQABAAAAgBQAAAAAAAAQAAgBAAAAIAAgNIgyAAgABGhRIAzAAIAAgPIgzAAgACbh5IAyAAIAAgNQAAAAAAAAQAAgBAAAAQAAAAgBAAQAAgBgBAAIgwAAgABGiGIAAANIAzAAIAAgPIgzAAQAAAAAAABQgBAAAAAAQAAAAABABQAAAAAAAAgAmvgmQgGAAAAgGIAAhSQAAgGAGAAIC0AAQAGAAgBAGIAABSQABAGgGAAgAmRhiIAAAaQAAAAAAABQAAAAAAAAQABABAAAAQAAAAAAAAIB1AAQABAAAAAAQAAAAABgBQAAAAAAAAQAAgBAAAAIAAgaQAAgBAAAAQAAAAAAgBQgBAAAAAAQAAAAgBAAIh1AAQAAAAAAAAQAAAAgBAAQAAABAAAAQAAAAAAABgAD6iIQAOgFAHgGQANgNAAgTIAAgWQAAgEACgCIAGgCIBrAAIADACIAEAGIAAAlQAAAJACACQABAEALAAIAIgCQACAAAAgHQgCgIAAgFIAhADQgFAogFACQgJAJgMAAIgaAAQgPgCgIgHQgJgKAAgNIAAgWQAAgGgGAAIgtAAQgDACAAACIAAADQAAAPgGAMQgLAYgeANgAnNiZIAAglIBhAAIAAggIAqAAIAAAgIBhAAIAAAlg");
	this.shape.setTransform(0,0.0059);

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


(lib.btnCourse01 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// text
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAWDWIAAgpQAsALAMgIQAEgFAAgIIAAhlIg3AVIgNgmIBEgaIAAhmIg8AAIAAgpIA8AAIAAhcIApAAIAABcIAuAAIAAApIguAAIAABSQATgHANgLIAWAiQgaANgcARIAACCQAAAcgWANQgLAFgRAAQgVAAgegHgAl+C8IADgtQBEAcAkgCQAYgCALgHQATgTAAhJIjqAAIAAgqIDoAAIgMhEIjIAAIAAgpIC9AAQgLgigSgkQhbAIg/AAIgGgnQBVgCBsgMQBvgLA4gLIAIAnQgtAMhiALQgKAAgHACQAPAhALAoICaAAIAAApIiSAAQAIAiABAiICcAAIAAAqIicAAQAABOgRAdQgNAYgQAHQgQAGgWAAQgtAAhFgYgACdDQIAAgpICuAAQAPhAANhLQAPhcAAgdIAqAIQgUCPgYBtIBUAAIAAApgADChOIAqgFQAWCAAGBcIgoACQgIh0gWhlgACuh+IAAgqIBsAAIAAgyIApAAIAAAyIB6AAIAAAqg");
	this.shape.setTransform(0,0.0145);

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


(lib.theJBar = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#CCCCCC").ss(3,1,1).p("AvngnIfPAAIAABPI/PAAg");
	this.shape.setTransform(100,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// 圖層_2
	this.jBar = new lib.jBar();
	this.jBar.name = "jBar";
	this.jBar.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.jBar).wait(1));

	// 圖層_1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#333333").s().p("AvnAoIAAhPIfPAAIAABPg");
	this.shape_1.setTransform(100,0);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.theJBar, new cjs.Rectangle(-1.5,-5.5,203,11), null);


(lib.slMassC = function(mode,startPosition,loop) {
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
	this.l2 = new lib.letter123();
	this.l2.name = "l2";
	this.l2.parent = this;
	this.l2.setTransform(189.15,26.2);

	this.l1 = new lib.letter123();
	this.l1.name = "l1";
	this.l1.parent = this;
	this.l1.setTransform(189.15,-4.45);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(3,1,1).p("AizAAIFnAA");
	this.shape.setTransform(189.425,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FFFFFF").ss(3,1,1).p("AizAAIFnAA");
	this.shape_1.setTransform(-55.225,-0.05);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAqEQIACgFQAIAAAEgBQADgBADgDQACgDADgLIAZhUQADgNAAgFQAAgEgCgCQgEgCgKgBIABgDIA2AAQATAAAHACQALACAFAIQAGAGAAAJQAAAIgFAHQgEAIgIAFQgKAFgSAEQATAFAIAIQAHAJAAALQAAAKgHALQgIAKgMAFQgMAEggABgABcEHIAHAAQAXAAAJgMQAJgNAAgOQgBgHgDgFQgEgFgFgDQgFgCgNAAgABwDCQANAAAIgDQAIgFAFgKQAFgJAAgJQAAgHgFgFQgFgFgJAAIgFAAgAgfD0QgGgFAAgIQAAgGAEgOIASg9QADgMAAgDIgBgDIgCgBIgEABQgDACgGAGQgGAHgMARQgMARgEAKQgEAJgFAQIgKAfIgnAAIAdhlIACgMIAAgCIgDgBQgFAAgNAPQgTAYgQAgIgMAtIgoAAIAehkQAEgPAAgGQAAgBAAAAQAAgBAAAAQgBgBAAAAQAAgBgBgBIgDgCQgDgBgIAAIACgGIA0gKIAKAAIgUBEQAUgfAKgLQANgQAJgEQAIgGAJAAQALABAEAGQAFAGAAAHQAAAIgEAPIgHAZQAUgfAIgLQAOgPALgGQAFgFAIAAQAJAAAFAHQAGAFAAAIQAAALgFAPIgRA7QgEANAAAEIABACIACABIADgBQAGgEAGgKIAEgFIAGADQgLAVgNAJQgMAJgLAAQgJAAgGgFgABNhyQgQgOAAgZQABgXAMgUQAMgVAWgNQAXgMAWAAQAJAAANADIAJACQAFAAAFgFIAEAAIgKAsIgEAAQgBgTgIgIQgIgJgNAAQgOAAgOAMQgOAMgJAYQgJAUABAUQgBARAKAKQAIAJAOAAQANAAAKgFQAJgGALgLIAFAAQgNASgMAIQgOAIgSAAQgZAAgPgQgAgfiBQgGgFAAgHQAAgHAEgNIASg9QADgNAAgEIgBgBIgCgBIgEABQgDABgGAHQgGAGgMARQgMARgEAJQgEAKgFAPIgKAhIgnAAIAdhnIACgLIAAgCIgDgBQgFAAgNAPQgTAXgQAiIgMAtIgoAAIAehlQAEgPAAgGQAAgBAAAAQAAgBAAAAQgBgBAAAAQAAgBgBAAIgDgDQgDgBgIAAIACgGIA0gJIAKAAIgUBDQAUgfAKgLQANgQAJgFQAIgEAJAAQALgBAEAHQAFAGAAAHQAAAIgEAOIgHAaQAUggAIgKQAOgQALgGQAFgDAIAAQAJAAAFAFQAGAGAAAJQAAAJgFARIgRA6QgEANAAADIABADIACABIADgBQAGgFAGgIIAEgGIAGAEQgLAUgNAJQgMAJgLAAQgJAAgGgFg");
	this.shape_2.setTransform(-55.45,2.05);

	this.valueText = new cjs.Text("0", "26px 'Arial'", "#FFFFFF");
	this.valueText.name = "valueText";
	this.valueText.lineHeight = 31;
	this.valueText.lineWidth = 100;
	this.valueText.parent = this;
	this.valueText.setTransform(369.6,-13);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.valueText},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.l1},{t:this.l2}]}).wait(1));

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

}).prototype = getMCSymbolPrototype(lib.slMassC, new cjs.Rectangle(-75.2,-26.2,546.8000000000001,55.4), null);


(lib.slHandY = function(mode,startPosition,loop) {
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
										        sl.btn.y=sl.len*(sl.val-sl.min)/(sl.max-sl.min);
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
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AALB0IAAgXQAZAHAGgFQACgDAAgEIAAg2IgdALIgHgVIAkgOIAAg3IghAAIAAgWIAhAAIAAgyIAWAAIAAAyIAaAAIAAAWIgaAAIAAAtQAKgEAIgGIAMASIgeAQIAABGQAAAQgMAHQgFADgKAAQgLAAgRgEgAjOBmIABgZQAlAPATgBQAOgBAFgEQALgKAAgnIiAAAIAAgXIB+AAIgFgkIhtAAIAAgXIBmAAQgFgSgLgTQgxAEgiAAIgDgWQAugBA6gGQA9gGAegGIAEAWQgYAGg1AGIgKABQAJASAGAVIBTAAIAAAXIhPAAQAEASABASIBUAAIAAAXIhUAAQAAAqgJAPQgHAOgKAEQgIADgMAAQgYAAglgNgABVBxIAAgXIBfAAQAHgiAIgpQAHgyAAgPIAXAEQgKBOgOA6IAuAAIAAAXgABpgqIAWgDQANBFADAyIgWABQgEg/gMg2gABehEIAAgWIA7AAIAAgcIAWAAIAAAcIBCAAIAAAWg");
	this.shape.setTransform(0,-39.9865);

	this.valueText = new cjs.Text("0", "26px 'Arial'", "#FFFFFF");
	this.valueText.name = "valueText";
	this.valueText.lineHeight = 31;
	this.valueText.lineWidth = 100;
	this.valueText.parent = this;
	this.valueText.setTransform(295.7,-13);

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
	this.btnS.setTransform(0,75,0.3,1.7998,0,0,0,0.1,0);
	new cjs.ButtonHelper(this.btnS, 0, 1, 2, false, new lib.btnSquare(), 3);

	this.timeline.addTween(cjs.Tween.get(this.btnS).wait(1));

	// line
	this.bgLine = new lib.sliderBGLine();
	this.bgLine.name = "bgLine";
	this.bgLine.parent = this;
	this.bgLine.setTransform(0,0,1,1,89.9948);

	this.timeline.addTween(cjs.Tween.get(this.bgLine).wait(1));

}).prototype = getMCSymbolPrototype(lib.slHandY, new cjs.Rectangle(-24.7,-51.9,422.4,217.9), null);


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
	this.btnS.setTransform(35,0,1.0502,0.3498,0,0,0,0.1,0);
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
	this.shape_2.graphics.f("#FFFFFF").s().p("ABpBqQAvgiABhWIAAg5IgoAAIAAgUIA7AAIAAgaIAXAAIAAAaIA9AAIAAAUIgqAAIAACmQgBAPgKAGQgKAHgggHIAAgWQAYAHAGgEQACgDAAgEIAAihIgTAAIAAA5QgBAsgNAmQgOAfgWAVgAihBrQAsgnABhkIAAgeIgYAAIAAgXIAYAAIAAggIAWAAIAAAgIAgAAQAJgBAAAJIAACiQgBAEADADQADADADAAIABAAIAFgCQACgDAAgDIAAgxIAWAEIgDA5QgDAJgGAEQgHAFgJAAIgJAAQgNgCgHgKQgEgFAAgJIAAiVQAAgEgDAAIgPAAIAAAeIgDAsQgKBHgiAlgAjTB4IAAglIgtAAIAAgWIAtAAIAAgPIglAAQgBAAgBAAQAAAAgBAAQAAgBgBAAQAAgBAAgBIAAhoQAAgBAAgBQABAAAAAAQABgBAAAAQABAAABAAIAlAAIAAgPIgsAAIAAgVIAsAAIAAgTIAVAAIAAATIAtAAIAAAVIgtAAIAAAPIAnAAQABAAABAAQAAAAABABQAAAAAAAAQAAABAAABIAABoQAAABAAABQAAAAAAABQgBAAAAAAQgBAAgBAAIgnAAIAAAPIAsAAIAAAWIgsAAIAAAlgAi+AZIAVAAIABgBIAAgXIgWAAgAjnAZIAUAAIAAgYIgUAAgAi+gUIAWAAIAAgWIgBgBIgVAAgAjngUIAUAAIAAgXIgUAAgAANBhQAFgCAGgBIAAhdIATAAIAABYQAHgDAIgBIAAhtIgfAAQgBAAAAAAQgBAAAAAAQAAgBgBAAQAAgBAAgBIAAhRQAAgBAAgBQABAAAAAAQAAgBABAAQAAAAABAAIBMAAQABAAABAAQAAAAABABQAAAAAAAAQAAABAAABIAABRQAAABAAABQAAAAAAABQgBAAAAAAQgBAAgBAAIgZAAIAAAjIAaAAIAAAUIgaAAIAAAwIAYgJIAIAUQgcAOg9ANgAAsgsIApAAIABgBIAAguIgqAAgADtBIQgDg5gKg8IATgCQANA8ABA7gABhA8QAbgzAAg3IAUABQgEBEgXArg");
	this.shape_2.setTransform(54.625,0.025);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

}).prototype = getMCSymbolPrototype(lib.chTrace, new cjs.Rectangle(-18.6,-20.7,107,39.2), null);


(lib.chSlow = function(mode,startPosition,loop) {
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
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhbBmQgiANgtABIgFgTQAdAAAUgEQAEgCAGgBIgdgSIALgPQAYAPATAJQAHgDAJgGQATgIAJgKQAAgBAAAAQAAAAAAgBQgBAAAAAAQgBAAgBAAIhmAAIAAgTIB/AAIAOAJQAAABAAAAQAAABAAAAQAAAAAAABQAAAAAAAAQgQAXgnAWQAYAGAjAAIgFAUQgsgCgjgMgAjUB0IAAjnIAUAAIAADngAAIBgQAWgIAFgJQAFgIADgJIAAgqQAAgBAAgBQAAAAAAAAQgBgBAAAAQgBAAgBAAIgXAAIAAgVIAqAAQAGABAAADIAAA8QABAHAHAHQAGAJAPAGQAVAGB+gGIgFAXIh3AAQgtgDgQgaQgDAJgMAKQgLAJgMAEgACRBSIAAg6QgcAigaAOIgPgPQAkgVAXgeIgzAAQAAAAgBAAQgBgBAAAAQAAAAgBgBQAAAAAAgBIAAg9QAAgBAAgBQABAAAAAAQAAgBABAAQABAAAAAAIA9AAIAAgSIhCAAIAAgVIBCAAIAAgPIAUAAIAAAPIBFAAIAAAVIhFAAIAAASIA+AAQABAAAAAAQABAAAAABQAAAAABAAQAAABAAABIAAA9QAAABAAAAQgBABAAAAQAAAAgBABQAAAAgBAAIg1AAQAZAgAqAWIgRAOQgigWgZgcIAAA6gAClgNIArAAIABgBIAAgcIgsAAgABmgOIABABIAqAAIAAgdIgrAAgAjwAYQAGgoAAgvIARABQgCA+gEAZgAigAYQAAAAgBAAQAAgBAAAAQgBAAAAgBQAAgBAAAAIAAgzQAAgBABgBQAAAAAAgBQAAAAABAAQAAAAAAAAICVAAQAAAAABAAQABAAAAAAQAAABABAAQAAABAAABIAAAzQAAAAAAABQgBABAAAAQAAAAgBABQgBAAAAAAgAg2AHIAZAAIABgBIAAgWIgBAAIgZAAgAhhAHIAXAAIAAgXIgXAAgAiOgQIAAAXIAZAAIAAgXIgZAAQgBAAABAAgAi5hBIAQgCIACBBIgQABgAALgqIAMgSQASAIAWATIgNARQgXgTgQgHgAiWgrQgBAAAAAAQAAAAgBgBQAAAAAAAAQAAgBAAgBIAAg/QAAgBAAgBQABAAAAgBQAAAAAAAAQABAAAAAAICAAAQAAAAABAAQABAAAAAAQAAABABAAQAAABAAABIAAA/QAAABAAABQgBAAAAAAQAAABgBAAQgBAAAAAAgAiFg7IBdAAIABgBIAAgKIheAAgAiFhfIAAAKIBeAAIAAgKIgBgBIhdAAIAAABgAAQhdIALgSQATAJAYARIgNATQgYgSgRgJg");
	this.shape.setTransform(55.025,0.025);

	this.btnS = new lib.btnSquare();
	this.btnS.name = "btnS";
	this.btnS.parent = this;
	this.btnS.setTransform(35,0,1.0502,0.3498,0,0,0,0.1,0);
	new cjs.ButtonHelper(this.btnS, 0, 1, 2, false, new lib.btnSquare(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.btnS},{t:this.shape}]}).wait(1));

	// checker
	this.checker = new lib.checker();
	this.checker.name = "checker";
	this.checker.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.checker).wait(1));

	// box
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#CCCCCC").ss(3,1,1).p("AiViVIErAAIAAErIkrAAg");

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#333333").s().p("AiVCWIAAkrIErAAIAAErg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.chSlow, new cjs.Rectangle(-18.6,-20.7,107,39.2), null);


(lib.control03 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層_1
	this.btnMassC = new lib.btnMassC();
	this.btnMassC.name = "btnMassC";
	this.btnMassC.parent = this;
	this.btnMassC.setTransform(1449.2,778.4,1.2,1.2);
	new cjs.ButtonHelper(this.btnMassC, 0, 1, 2, false, new lib.btnMassC(), 3);

	this.slMassC = new lib.slMassC();
	this.slMassC.name = "slMassC";
	this.slMassC.parent = this;
	this.slMassC.setTransform(1377.4,699.95);

	this.btnReset = new lib.btnReset();
	this.btnReset.name = "btnReset";
	this.btnReset.parent = this;
	this.btnReset.setTransform(1449.2,778.4,1.2,1.2);
	new cjs.ButtonHelper(this.btnReset, 0, 1, 2, false, new lib.btnReset(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.btnReset},{t:this.slMassC},{t:this.btnMassC}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.control03, new cjs.Rectangle(1302.2,673.8,546.8,142.4000000000001), null);


(lib.control02 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層_1
	this.btnJ2 = new lib.btnJ2();
	this.btnJ2.name = "btnJ2";
	this.btnJ2.parent = this;
	this.btnJ2.setTransform(1509.2,778.4);
	new cjs.ButtonHelper(this.btnJ2, 0, 1, 2, false, new lib.btnJ2(), 3);

	this.btnJ1 = new lib.btnJ1();
	this.btnJ1.name = "btnJ1";
	this.btnJ1.parent = this;
	this.btnJ1.setTransform(1389.2,778.4);
	new cjs.ButtonHelper(this.btnJ1, 0, 1, 2, false, new lib.btnJ1(), 3);

	this.theJBar = new lib.theJBar();
	this.theJBar.name = "theJBar";
	this.theJBar.parent = this;
	this.theJBar.setTransform(1349.2,723.45);

	this.btnReset = new lib.btnReset();
	this.btnReset.name = "btnReset";
	this.btnReset.parent = this;
	this.btnReset.setTransform(1449.2,778.4,1.2,1.2);
	new cjs.ButtonHelper(this.btnReset, 0, 1, 2, false, new lib.btnReset(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.btnReset},{t:this.theJBar},{t:this.btnJ1},{t:this.btnJ2}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.control02, new cjs.Rectangle(1347.7,718,203,98.20000000000005), null);


(lib.control01 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層_1
	this.slHandY = new lib.slHandY();
	this.slHandY.name = "slHandY";
	this.slHandY.parent = this;
	this.slHandY.setTransform(1447.3,638.1);

	this.timeline.addTween(cjs.Tween.get(this.slHandY).wait(1));

}).prototype = getMCSymbolPrototype(lib.control01, new cjs.Rectangle(1422.6,586.2,422.4000000000001,217.79999999999995), null);


// stage content:
(lib.myAnimate = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// helper
	this.title = new lib.title();
	this.title.name = "title";
	this.title.parent = this;
	this.title.setTransform(800,450,2.5,2.5);

	this.timeline.addTween(cjs.Tween.get(this.title).wait(1));

	// control01
	this.control01 = new lib.control01();
	this.control01.name = "control01";
	this.control01.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.control01).wait(1));

	// control02
	this.control02 = new lib.control02();
	this.control02.name = "control02";
	this.control02.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.control02).wait(1));

	// control03
	this.control03 = new lib.control03();
	this.control03.name = "control03";
	this.control03.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.control03).wait(1));

	// UI
	this.btnCourse03 = new lib.btnCourse03();
	this.btnCourse03.name = "btnCourse03";
	this.btnCourse03.parent = this;
	this.btnCourse03.setTransform(62.1,793.4,0.7,0.7);
	new cjs.ButtonHelper(this.btnCourse03, 0, 1, 2, false, new lib.btnCourse03(), 3);

	this.btnCourse02 = new lib.btnCourse02();
	this.btnCourse02.name = "btnCourse02";
	this.btnCourse02.parent = this;
	this.btnCourse02.setTransform(62.1,734.05,0.7,0.7);
	new cjs.ButtonHelper(this.btnCourse02, 0, 1, 2, false, new lib.btnCourse02(), 3);

	this.btnCourse01 = new lib.btnCourse01();
	this.btnCourse01.name = "btnCourse01";
	this.btnCourse01.parent = this;
	this.btnCourse01.setTransform(62.1,674.75,0.7,0.7);
	new cjs.ButtonHelper(this.btnCourse01, 0, 1, 2, false, new lib.btnCourse01(), 3);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#999999").s().p("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");
	this.shape.setTransform(1524.525,40.025);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("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");
	this.shape_1.setTransform(101.2,875.708);

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

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.sl01},{t:this.sl02},{t:this.sl03},{t:this.ch01},{t:this.ch02},{t:this.btn01},{t:this.btn02},{t:this.slCameraRR},{t:this.btnUp},{t:this.btnDown},{t:this.btnRight},{t:this.btnLeft},{t:this.shape_1},{t:this.shape},{t:this.btnCourse01},{t:this.btnCourse02},{t:this.btnCourse03}]}).wait(1));

	// btn3D
	this.chSlow = new lib.chSlow();
	this.chSlow.name = "chSlow";
	this.chSlow.parent = this;
	this.chSlow.setTransform(37.7,568.65);

	this.chTrace = new lib.chTrace();
	this.chTrace.name = "chTrace";
	this.chTrace.parent = this;
	this.chTrace.setTransform(37.7,618.25);

	this.btn3D = new lib.btn3D();
	this.btn3D.name = "btn3D";
	this.btn3D.parent = this;
	new cjs.ButtonHelper(this.btn3D, 0, 1, 2, false, new lib.btn3D(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.btn3D},{t:this.chTrace},{t:this.chSlow}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(800,450,1381.8000000000002,450);
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