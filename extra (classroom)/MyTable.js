class MyTable extends CGFobject {
	constructor(scene) {
		super(scene);

    this.cube = new MyUnitCubeQuad(scene);
	};

	display() {
	    this.scene.pushMatrix();
	    this.scene.translate(-2.5,1.5,-1.5);
	    this.scene.scale(0.2,3,0.2);
        this.cube.display();
        this.scene.popMatrix();
        
        this.scene.pushMatrix();
	    this.scene.translate(-2.5,1.5,1.5);
	    this.scene.scale(0.2,3,0.2);
        this.cube.display();
        this.scene.popMatrix();
        
        this.scene.pushMatrix();
	    this.scene.translate(2.5,1.5,-1.5);
	    this.scene.scale(0.2,3,0.2);
        this.cube.display();
        this.scene.popMatrix();
       
        this.scene.pushMatrix();
	    this.scene.translate(2.5,1.5,1.5);
	    this.scene.scale(0.2,3,0.2);
        this.cube.display();
        this.scene.popMatrix();
       
        this.scene.pushMatrix();
	    this.scene.translate(0,3,0);
	    this.scene.scale(6,0.1,4);
        this.cube.display();
        this.scene.popMatrix();

	};
}