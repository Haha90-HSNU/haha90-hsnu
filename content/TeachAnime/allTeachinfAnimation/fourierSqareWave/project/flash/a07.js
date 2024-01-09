(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 800,
	height: 600,
	fps: 60,
	color: "#000000",
	manifest: []
};



// symbols:



(lib.equation = function() {
	this.initialize();

	// Layer 1
	this.tt2 = new cjs.Text("7", "36px 'Arial'", "#FFFFFF");
	this.tt2.name = "tt2";
	this.tt2.textAlign = "center";
	this.tt2.lineHeight = 38;
	this.tt2.lineWidth = 30;
	this.tt2.setTransform(-5.2,0.3);

	this.tt1 = new cjs.Text("7", "36px 'Arial'", "#FFFFFF");
	this.tt1.name = "tt1";
	this.tt1.textAlign = "center";
	this.tt1.lineHeight = 38;
	this.tt1.lineWidth = 30;
	this.tt1.setTransform(2.9,-41.3);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ag5B3QgLgHgHgPQgHgOgBgRQgDgcAHgfQARhEAlglQAagcAeAAQAdAAAOAbQATAmgPA/QgPA+gkAjQgcAcgdAAQgQAAgLgIgAg1A+QgCATAEAOQACAIAHAGQAHAGAKAAQALAAANgKQALgLALgXQAKgYALgpIhXAAQgGAfgCAZgAADhpQgKAJgLAWQgLAWgNAwIBXAAQALgugCgcQgBgVgJgJQgGgHgLAAQgMAAgMAKg");
	this.shape.setTransform(35.7,-22.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Ai6BzQgTgPgGgdIAggFQACASAMAKQAMAKAWAAQAWAAAKgIQALgJAAgMQAAgLgJgGQgHgEgagHQgjgJgNgGQgOgGgGgMQgHgLAAgMQAAgMAFgLQAGgLAKgHQAHgFANgEQANgEAOAAQAWAAARAHQARAGAHALQAIALADASIgfAEQgCgOgKgJQgKgIgSAAQgWAAgJAIQgKAHAAAJQAAAHAEAFQAEADAIADIAcAIQAiAJANAGQANAFAIALQAHALAAAQQAAAQgJAOQgJAOgRAIQgSAHgWAAQgkAAgTgPgAC0B+IAAhxQAAgSgEgJQgDgKgKgFQgJgGgNAAQgUAAgPANQgOAMAAAiIAABmIggAAIAAi4IAcAAIAAAaQAVgfAnAAQARAAAOAHQAOAFAHAKQAHAKADAOQACAIAAAUIAABzgAgSB+IAAi4IAeAAIAAC4gAgShdIAAgkIAeAAIAAAkg");
	this.shape_1.setTransform(-37.7,-22.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#FFFFFF").ss(2,1,1).p("AnvAAIPfAA");
	this.shape_2.setTransform(-7.3,0);

	this.addChild(this.shape_2,this.shape_1,this.shape,this.tt1,this.tt2);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-58.9,-41.3,103.1,89.7);


(lib.bg = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#666666").s().p("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");
	this.shape.setTransform(724.2,978.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#000000","#003300"],[0,1],0,500,0,-500).s().p("EhOGBdvMAAAi7dMCcOAAAMAAAC7dgEhNphVvIAEAGIgBgGIgDAAg");
	this.shape_1.setTransform(400,500);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-100,-100,1000,1200);


(lib.a01MC = function() {
	this.initialize();

	// Layer 2
	this.equation = new lib.equation();
	this.equation.setTransform(-240,0,1,1,0,0,0,-7.4,1);

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#999999").ss(2,1,1).p("A7VAAIAAK8A7VAAMBGTAAAA7Vq7IAAK7Egq9AAAIPoAA");
	this.shape.setTransform(175,0);

	this.addChild(this.shape,this.equation);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-291.5,-71,742.6,142);


// stage content:
(lib.a07 = function() {
	this.initialize();

	// Layer 1
	this.xxMe = new lib.a01MC();
	this.xxMe.setTransform(300,150);

	this.instance = new lib.bg();
	this.instance.setTransform(400,500,1,1,0,0,0,400,500);

	this.addChild(this.instance,this.xxMe);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(300,200,1000,1200);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;