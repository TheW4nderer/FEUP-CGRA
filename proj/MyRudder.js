class MyRudder extends CGFobject {
	constructor(scene) {
		super(scene);
		this.initBuffers();
	}
	initBuffers(){
	    this.quad = new MyQuadDouble(this.scene);
	    this.triangle = new MyTriangle(this.scene);
	}
	display(){
	    this.scene.setDefaultAppearance();
	    this.scene.pushMatrix();
	    this.quad.display();
	    this.scene.popMatrix();

	    this.scene.pushMatrix();
	    this.scene.translate(-1,0,0)
	    this.scene.scale(0.5,0.5,0.5);
	    this.scene.rotate(Math.PI/2, 0,0,1);
	    this.triangle.display();
	    this.scene.popMatrix();
	}
}