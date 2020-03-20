class MyUnitCubeQuad extends CGFobject {
	constructor(scene) {
		super(scene);

    this.quad = new MyQuad(scene);
    this.quad.initBuffers(scene);
    this.initMaterials(scene);
	};
    

    initMaterials(scene){
    	//side
    	this.material_side = new CGFappearance(this.scene);
        this.material_side.setAmbient(0.1, 0.1, 0.1, 1);
        this.material_side.setDiffuse(0.9, 0.9, 0.9, 1);
        this.material_side.setSpecular(0.1, 0.1, 0.1, 1);
        this.material_side.setShininess(10.0);
        this.material_side.loadTexture('images/mineSide.png');
        this.material_side.setTextureWrap('REPEAT', 'REPEAT');

        //top
        this.material_top = new CGFappearance(this.scene);
        this.material_top.setAmbient(0.1, 0.1, 0.1, 1);
        this.material_top.setDiffuse(0.9, 0.9, 0.9, 1);
        this.material_top.setSpecular(0.1, 0.1, 0.1, 1);
        this.material_top.setShininess(10.0);
        this.material_top.loadTexture('images/mineTop.png');
        this.material_top.setTextureWrap('REPEAT', 'REPEAT');

        //bottom
        this.material_bottom = new CGFappearance(this.scene);
        this.material_bottom.setAmbient(0.1, 0.1, 0.1, 1);
        this.material_bottom.setDiffuse(0.9, 0.9, 0.9, 1);
        this.material_bottom.setSpecular(0.1, 0.1, 0.1, 1);
        this.material_bottom.setShininess(10.0);
        this.material_bottom.loadTexture('images/mineBottom.png');
        this.material_bottom.setTextureWrap('REPEAT', 'REPEAT');

    }

    
	display() {
        //this.material_side.apply();

		this.scene.pushMatrix();
		this.scene.rotate(Math.PI, 0, 0, 1);
		this.scene.translate(0,0,-0.5);
		this.scene.rotate(Math.PI, 1, 0, 0);
		this.material_side.apply();
		this.scene.gl.texParameteri(this.scene.gl.TEXTURE_2D, this.scene.gl.TEXTURE_MAG_FILTER, this.scene.gl.NEAREST);
	    this.quad.display();
	    this.scene.popMatrix();

	    this.scene.pushMatrix();
		this.scene.translate(0,0,0.5);
	    this.quad.display();
	    this.scene.popMatrix();

	    this.scene.pushMatrix();
	    this.scene.translate(0.5,0,0);
	    this.scene.rotate(Math.PI/2, 0,1,0);
	    this.quad.display();
	    this.scene.popMatrix();

	    this.scene.pushMatrix();
	    this.scene.translate(-0.5,0,0);
	    this.scene.rotate(-Math.PI/2, 0,1,0);;
	    this.quad.display();
	    this.scene.popMatrix();

	    this.scene.pushMatrix();
	    this.scene.translate(0,-0.5,0);
	    this.scene.rotate(Math.PI/2, 1,0,0);
	    this.material_bottom.apply();
		this.scene.gl.texParameteri(this.scene.gl.TEXTURE_2D, this.scene.gl.TEXTURE_MAG_FILTER, this.scene.gl.NEAREST);
	    this.quad.display();
	    this.scene.popMatrix();

	    this.scene.pushMatrix();
	    this.scene.translate(0,0.5,0);
	    this.scene.rotate(-Math.PI/2, 1,0,0);
	    this.material_top.apply();
	    this.scene.gl.texParameteri(this.scene.gl.TEXTURE_2D, this.scene.gl.TEXTURE_MAG_FILTER, this.scene.gl.NEAREST);
	    this.quad.display();
	    this.scene.popMatrix();
	};

    


}