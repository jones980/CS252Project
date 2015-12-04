function init() {
			stage = new createjs.Stage("canvas");
			background = new createjs.Bitmap("sky.png");
			g = new Graphics();
		//		g.beginStroke(Graphics.getRGB(0,0,0));
		//	var s = new Shape(g);
		//	s.width = 640;
		//	s.height = 480;
			stage.addChild(background);
			stage.update();
			ground = createjs.Bitmap();
			sprite = new createjs.SpriteSheet(data);


			manifest = [
				{src: "http://i.imgur.com/e50rhHP.png", id: "walker"},
				{src: "sky.png"},
				{src: }

			]
		}