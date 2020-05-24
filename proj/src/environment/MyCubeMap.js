class MyCubeMap extends CGFobject {
	constructor(scene) {
		super(scene);

    this.quad = new MyQuad(scene);
    this.initMaterials(this.scene);

	};

	initMaterials(scene){


		//back
		this.materialBack = new CGFappearance(scene);
		this.materialBack.setAmbient(0.9, 0.9, 0.9, 1);
		this.materialBack.setDiffuse(0.0, 0.0, 0.0, 1);
		this.materialBack.setSpecular(0.0, 0.0, 0.0, 1);
		this.materialBack.setShininess(10.0);
		this.materialBack.loadTexture('images/split_cubemap/back.png');
		this.materialBack.setTextureWrap('CLAMP_TO_EDGE', 'CLAMP_TO_EDGE');       //Clamp to Edge to clear white lines on the corners of the cubemap

		//front
		this.materialFront = new CGFappearance(scene);
		this.materialFront.setAmbient(0.9, 0.9, 0.9, 1);
		this.materialFront.setDiffuse(0.0, 0.0, 0.0, 1);
		this.materialFront.setSpecular(0.0, 0.0, 0.0, 1);
		this.materialFront.setShininess(10.0);
		this.materialFront.loadTexture('images/split_cubemap/front.png');
		this.materialFront.setTextureWrap('CLAMP_TO_EDGE', 'CLAMP_TO_EDGE');

		//left
		this.materialLeft = new CGFappearance(scene);
		this.materialLeft.setAmbient(0.9, 0.9, 0.9, 1);
		this.materialLeft.setDiffuse(0.0, 0.0, 0.0, 1);
		this.materialLeft.setSpecular(0.0, 0.0, 0.0, 1);
		this.materialLeft.setShininess(10.0);
		this.materialLeft.loadTexture('images/split_cubemap/left.png');
		this.materialLeft.setTextureWrap('CLAMP_TO_EDGE', 'CLAMP_TO_EDGE');

		//right
		this.materialRight = new CGFappearance(scene);
		this.materialRight.setAmbient(0.9, 0.9, 0.9, 1);
		this.materialRight.setDiffuse(0.0, 0.0, 0.0, 1);
		this.materialRight.setSpecular(0.0, 0.0, 0.0, 1);
		this.materialRight.setShininess(10.0);
		this.materialRight.loadTexture('images/split_cubemap/right.png');
		this.materialRight.setTextureWrap('CLAMP_TO_EDGE', 'CLAMP_TO_EDGE');

		//bottom
		this.materialBottom = new CGFappearance(scene);
		this.materialBottom.setAmbient(0.9, 0.9, 0.9, 1);
		this.materialBottom.setDiffuse(0.0, 0.0, 0.0, 1);
		this.materialBottom.setSpecular(0.0, 0.0, 0.0, 1);
		this.materialBottom.setShininess(10.0);
		this.materialBottom.loadTexture('images/split_cubemap/bottom.png');
		this.materialBottom.setTextureWrap('CLAMP_TO_EDGE', 'CLAMP_TO_EDGE');

		//top
		this.materialTop = new CGFappearance(scene);
		this.materialTop.setAmbient(0.9, 0.9, 0.9, 1);
		this.materialTop.setDiffuse(0.0, 0.0, 0.0, 1);
		this.materialTop.setSpecular(0.0, 0.0, 0.0, 1);
		this.materialTop.setShininess(10.0);
		this.materialTop.loadTexture('images/split_cubemap/top.png');
		this.materialTop.setTextureWrap('CLAMP_TO_EDGE', 'CLAMP_TO_EDGE');


        

        this.materialBack_forest = new CGFappearance(scene);
		this.materialBack_forest.setAmbient(0.9, 0.9, 0.9, 1);
		this.materialBack_forest.setDiffuse(0.0, 0.0, 0.0, 1);
		this.materialBack_forest.setSpecular(0.0, 0.0, 0.0, 1);
		this.materialBack_forest.setShininess(10.0);
		this.materialBack_forest.loadTexture('images/split_forest/back.png');
		this.materialBack_forest.setTextureWrap('CLAMP_TO_EDGE', 'CLAMP_TO_EDGE');

		//front
		this.materialFront_forest = new CGFappearance(scene);
		this.materialFront_forest.setAmbient(0.9, 0.9, 0.9, 1);
		this.materialFront_forest.setDiffuse(0.0, 0.0, 0.0, 1);
		this.materialFront_forest.setSpecular(0.0, 0.0, 0.0, 1);
		this.materialFront_forest.setShininess(10.0);
		this.materialFront_forest.loadTexture('images/split_forest/front.png');
		this.materialFront_forest.setTextureWrap('CLAMP_TO_EDGE', 'CLAMP_TO_EDGE');

		//left
		this.materialLeft_forest = new CGFappearance(scene);
		this.materialLeft_forest.setAmbient(0.9, 0.9, 0.9, 1);
		this.materialLeft_forest.setDiffuse(0.0, 0.0, 0.0, 1);
		this.materialLeft_forest.setSpecular(0.0, 0.0, 0.0, 1);
		this.materialLeft_forest.setShininess(10.0);
		this.materialLeft_forest.loadTexture('images/split_forest/left.png');
		this.materialLeft_forest.setTextureWrap('CLAMP_TO_EDGE', 'CLAMP_TO_EDGE');

		//right
		this.materialRight_forest = new CGFappearance(scene);
		this.materialRight_forest.setAmbient(0.9, 0.9, 0.9, 1);
		this.materialRight_forest.setDiffuse(0.0, 0.0, 0.0, 1);
		this.materialRight_forest.setSpecular(0.0, 0.0, 0.0, 1);
		this.materialRight_forest.setShininess(10.0);
		this.materialRight_forest.loadTexture('images/split_forest/right.png');
		this.materialRight_forest.setTextureWrap('CLAMP_TO_EDGE', 'CLAMP_TO_EDGE');

		//bottom
		this.materialBottom_forest = new CGFappearance(scene);
		this.materialBottom_forest.setAmbient(0.9, 0.9, 0.9, 1);
		this.materialBottom_forest.setDiffuse(0.0, 0.0, 0.0, 1);
		this.materialBottom_forest.setSpecular(0.0, 0.0, 0.0, 1);
		this.materialBottom_forest.setShininess(10.0);
		this.materialBottom_forest.loadTexture('images/split_forest/bottom.png');
		this.materialBottom_forest.setTextureWrap('CLAMP_TO_EDGE', 'CLAMP_TO_EDGE');

		//top
		this.materialTop_forest = new CGFappearance(scene);
		this.materialTop_forest.setAmbient(0.9, 0.9, 0.9, 1);
		this.materialTop_forest.setDiffuse(0.0, 0.0, 0.0, 1);
		this.materialTop_forest.setSpecular(0.0, 0.0, 0.0, 1);
		this.materialTop_forest.setShininess(10.0);
		this.materialTop_forest.loadTexture('images/split_forest/top.png');
		this.materialTop_forest.setTextureWrap('CLAMP_TO_EDGE', 'CLAMP_TO_EDGE');


	}	


	display() {


        this.scene.pushMatrix();
        this.scene.translate(0,1,0);
        this.scene.scale(50,50,50);


        //back
		this.scene.pushMatrix();
		this.scene.translate(0,0,-0.5);
		this.scene.rotate(Math.PI, 0,1,0);
		if (this.scene.currentTexture == 1) this.materialBack_forest.apply();
		else this.materialBack.apply();

	    this.quad.display();
	    this.scene.popMatrix();

	    //front
	    this.scene.pushMatrix();
		this.scene.translate(0,0,0.5);
        if (this.scene.currentTexture == 1) this.materialFront_forest.apply();
		else this.materialFront.apply();

	    this.quad.display();
	    this.scene.popMatrix();
	    
	    //bottom
	    this.scene.pushMatrix();
	    this.scene.translate(0,-0.5,0);
	    this.scene.rotate(Math.PI/2, 1,0,0);
	    if (this.scene.currentTexture == 1) this.materialBottom_forest.apply();
	    else this.materialBottom.apply();

	    this.quad.display();
	    this.scene.popMatrix();

	    //top
	    this.scene.pushMatrix();
	    this.scene.translate(0,0.5,0);
	    this.scene.rotate(-Math.PI/2, 1,0,0);
	    if (this.scene.currentTexture == 1) this.materialTop_forest.apply();
	    else this.materialTop.apply();
        
	    this.quad.display();

	    this.scene.popMatrix();

	    //right
	    this.scene.pushMatrix();
	    this.scene.translate(0.5,0,0);
	    this.scene.rotate(Math.PI/2, 0,1,0);
	    if (this.scene.currentTexture == 1) this.materialRight_forest.apply();
	    else this.materialRight.apply();;

	    this.quad.display();
	    this.scene.popMatrix();

	    //left
	    this.scene.pushMatrix();
	    this.scene.translate(-0.5,0,0);
	    this.scene.rotate(-Math.PI/2, 0,1,0);
	    if (this.scene.currentTexture == 1) this.materialLeft_forest.apply();
	    else this.materialLeft.apply();

	    this.quad.display();
	    this.scene.popMatrix();

	    this.scene.popMatrix();
	};



}