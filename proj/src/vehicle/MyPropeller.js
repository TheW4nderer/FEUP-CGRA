class MyPropeller extends CGFobject {
	constructor(scene, slices, stacks) {
		super(scene);
		this.initBuffers();
		this.sphere = new MySphere(scene, slices, stacks);
		this.sphere.initBuffers();
		this.angle = 0;

		this.material = new CGFappearance(this.scene);
        this.material.setAmbient(0, 0, 0, 1);
        this.material.setDiffuse(0.1, 0.1, 0.1, 1);
        this.material.setSpecular(0.1, 0.1, 0.1, 1);
        this.material.setShininess(10.0);
	}

	setAngle(angle){
	    this.angle += angle;
	}
    
    display(){
        this.material.apply();

        //Central Sphere

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