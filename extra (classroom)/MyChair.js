class MyChair extends CGFobject {
	constructor(scene) {
		super(scene);

    this.cube = new MyUnitCubeQuad(scene);
	};

	display() {
	    this.scene.pushMatrix();
	    this.scene.translate(0.9,0,-0.9);
	    this.scene.scale(0.2,1.5,0.2);
	    this.scene.translate(0,0.5,0);
	    this.cube.display();
	    this.scene.popMatrix();

	    this.scene.pushMatrix();
	    this.scene.translate(-0.9,0,-0.9);
	    this.scene.scale(0.2,1.5,0.2);
	    this.scene.translate(0,0.5,0);
	    this.cube.display();
	    this.scene.popMatrix();

	    this.scene.pushMatrix();
	    this.scene.translate(0.9,0,0.9);
	    this.scene.scale(0.2,1.5,0.2);
	    this.scene.translate(0,0.5,0);
	    this.cube.display();
	    this.scene.popMatrix();

	    this.scene.pushMatrix();
	    this.scene.translate(-0.9,0,0.9);
	    this.scene.scale(0.2,1.5,0.2);
	    this.scene.translate(0,0.5,0);
	    this.cube.display();
	    this.scene.popMatrix();

	    this.scene.pushMatrix();
	    this.scene.translate(0,1.5,0);
	    this.scene.scale(2,0.1,2);
	    this.scene.translate(0,0.6,0);
	    this.cube.display();
	    this.scene.popMatrix();

	    this.scene.pushMatrix();
	    this.scene.translate(0,1.6,0.95);
	    this.scene.scale(2,2,0.1);
	    this.scene.translate(0,0.5,0);
	    this.cube.display();
	    this.scene.popMatrix();
	};
}