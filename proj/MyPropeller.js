class MyPropeller extends CGFobject {
	constructor(scene, slices, stacks) {
		super(scene);
		this.initBuffers();
		this.sphere = new MySphere(scene, slices, stacks);
		this.sphere.initBuffers();
		this.angle = 0;
	}

	setAngle(angle){
	    this.angle += angle;
	}
    
    display(){
        this.scene.defaultMaterial.apply();

        //Centrak Sphere
        // TODO

        //this.scene.pushMatrix();

        this.scene.pushMatrix();
        this.scene.translate(0.1,-0.5,-0.45);
        this.scene.rotate(this.angle, 0,0,1);
        this.scene.scale(0.025,0.1,0.025);
        this.sphere.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(0.1 ,-0.5,-0.45);
        this.scene.rotate(this.angle + Math.PI/2, 0,0,1);
        this.scene.scale(0.025,0.1,0.025);
        this.sphere.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(-0.1,-0.5,-0.45);
        this.scene.rotate(this.angle, 0,0,1);
        this.scene.scale(0.025,0.1,0.025);
        this.sphere.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(-0.1 ,-0.5,-0.45);
        this.scene.rotate(this.angle + Math.PI/2, 0,0,1);
        this.scene.scale(0.025,0.1,0.025);
        this.sphere.display();
        this.scene.popMatrix();

    }
}