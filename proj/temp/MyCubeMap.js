class MyCubeMap extends CGFobject {
	constructor(scene) {
		super(scene);

    this.quad = new MyQuad(scene);
    this.initMaterials(this.scene);

	};

	initMaterials(scene){
    /*this.aterial = new CGFappearance(scene);
	this.material_bottom.setAmbient(0.9, 0.9, 0.9, 1);
	this.material_bottom.setDiffuse(0.0, 0.0, 0.0, 1);
	this.material_bottom.setSpecular(0.0, 0.0, 0.0, 1);
	this.exampleMaterial.setShininess(10.0);
	this.exampleMaterial.loadTexture('images/cubemap.png');
	this.exampleMaterial.setTextureWrap('REPEAT', 'REPEAT');*/

    //back
    this.materialBack = new CGFappearance(scene);
	this.materialBack.setAmbient(0.9, 0.9, 0.9, 1);
	this.materialBack.setDiffuse(0.0, 0.0, 0.0, 1);
	this.materialBack.setSpecular(0.0, 0.0, 0.0, 1);
	this.materialBack.setShininess(10.0);
	this.materialBack.loadTexture('images/split_cubemap/back.png');
	this.materialBack.setTextureWrap('REPEAT', 'REPEAT');

    //front
    this.materialFront = new CGFappearance(scene);
	this.materialFront.setAmbient(0.9, 0.9, 0.9, 1);
	this.materialFront.setDiffuse(0.0, 0.0, 0.0, 1);
	this.materialFront.setSpecular(0.0, 0.0, 0.0, 1);
	this.materialFront.setShininess(10.0);
	this.materialFront.loadTexture('images/split_cubemap/front.png');
	this.materialFront.setTextureWrap('REPEAT', 'REPEAT');

	//left
	this.materialLeft = new CGFappearance(scene);
	this.materialLeft.setAmbient(0.9, 0.9, 0.9, 1);
	this.materialLeft.setDiffuse(0.0, 0.0, 0.0, 1);
	this.materialLeft.setSpecular(0.0, 0.0, 0.0, 1);
	this.materialLeft.setShininess(10.0);
	this.materialLeft.loadTexture('images/split_cubemap/left.png');
	this.materialLeft.setTextureWrap('REPEAT', 'REPEAT');

	//right
	this.materialRight = new CGFappearance(scene);
	this.materialRight.setAmbient(0.9, 0.9, 0.9, 1);
	this.materialRight.setDiffuse(0.0, 0.0, 0.0, 1);
	this.materialRight.setSpecular(0.0, 0.0, 0.0, 1);
	this.materialRight.setShininess(10.0);
	this.materialRight.loadTexture('images/split_cubemap/right.png');
	this.materialRight.setTextureWrap('REPEAT', 'REPEAT');

	//bottom
	this.materialBottom = new CGFappearance(scene);
	this.materialBottom.setAmbient(0.9, 0.9, 0.9, 1);
	this.materialBottom.setDiffuse(0.0, 0.0, 0.0, 1);
	this.materialBottom.setSpecular(0.0, 0.0, 0.0, 1);
	this.materialBottom.setShininess(10.0);
	this.materialBottom.loadTexture('images/split_cubemap/bottom.png');
	this.materialBottom.setTextureWrap('REPEAT', 'REPEAT');

    //top
    this.materialTop = new CGFappearance(scene);
	this.materialTop.setAmbient(0.9, 0.9, 0.9, 1);
	this.materialTop.setDiffuse(0.0, 0.0, 0.0, 1);
	this.materialTop.setSpecular(0.0, 0.0, 0.0, 1);
	this.materialTop.setShininess(10.0);
	this.materialTop.loadTexture('images/split_cubemap/top.png');
	this.materialTop.setTextureWrap('REPEAT', 'REPEAT');

    
	}

	display() {

        this.scene.pushMatrix();
        //this.scene.scale(50,50,50);

        //back
		this.scene.pushMatrix();
		this.scene.translate(0,0,-0.5);
		this.scene.rotate(Math.PI, 0,1,0);
		this.materialBack.apply();
	    this.quad.display();
	    this.scene.popMatrix();

	    //front
	    this.scene.pushMatrix();
		this.scene.translate(0,0,0.5);
		this.materialFront.apply();
	    this.quad.display();
	    this.scene.popMatrix();
	    
	    //bottom
	    this.scene.pushMatrix();
	    this.scene.translate(0,-0.5,0);
	    this.scene.rotate(Math.PI/2, 1,0,0);
	    this.materialBottom.apply();
	    this.quad.display();
	    this.scene.popMatrix();

	    //top
	    this.scene.pushMatrix();
	    this.scene.translate(0,0.5,0);
	    this.scene.rotate(-Math.PI/2, 1,0,0);
	    this.materialTop.apply();
	    this.quad.display();
	    this.scene.popMatrix();

	    //right
	    this.scene.pushMatrix();
	    this.scene.translate(0.5,0,0);
	    this.scene.rotate(Math.PI/2, 0,1,0);
	    this.materialRight.apply();
	    this.quad.display();
	    this.scene.popMatrix();

	    //left
	    this.scene.pushMatrix();
	    this.scene.translate(-0.5,0,0);
	    this.scene.rotate(-Math.PI/2, 0,1,0);
	    this.materialLeft.apply();
	    this.quad.display();
	    this.scene.popMatrix();

	    this.scene.popMatrix();
	};



}