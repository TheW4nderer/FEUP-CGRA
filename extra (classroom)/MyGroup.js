class MyGroup extends CGFobject {
	constructor(scene) {
		super(scene);

    this.chair = new MyChair(scene);
    this.table = new MyTable(scene);
    this.cube = new MyUnitCubeQuad(scene);
	};

	display() {
	    this.scene.pushMatrix();
	    this.table.display();
	    this.scene.popMatrix();

	    this.scene.pushMatrix();
	    this.scene.translate(1.2,0,2);
	    this.chair.display();
	    this.scene.popMatrix();

	    this.scene.pushMatrix();
	    this.scene.translate(-1.2,0,2);
	    this.chair.display();
	    this.scene.popMatrix();

	    this.scene.pushMatrix();
	    this.scene.translate(-1.2,0,-2);
	    this.scene.rotate(Math.PI, 0,1,0);
	    this.chair.display();
	    this.scene.popMatrix();

	    this.scene.pushMatrix();
	    this.scene.translate(1.2,0,-2);
	    this.scene.rotate(Math.PI, 0,1,0);
	    this.chair.display();
	    this.scene.popMatrix();


	};
}