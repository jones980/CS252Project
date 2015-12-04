function init() {
	var background;
	var stage;
	var ground;
	var canvas;
	var sprite;
	var g;
	var manifest;
	
	canvas = document.getElementById("tutorialCanvas");	
	stage = new createjs.Stage(canvas);
	background = new createjs.Bitmap("images/sky.png");
		//g = new Graphics();
		//	g.beginStroke(Graphics.getRGB(0,0,0));
		//	var s = new Shape(g);
		//	s.width = 640;
		//	s.height = 480;
	stage.addChild(background);
	ground = new createjs.Bitmap("images/ground.png");
	stage.addChild(ground);
	ground.y = 164;

	stage.update();
}