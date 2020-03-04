/**
 * MyTangram
 * @constructor
 * @param scene - Reference to MyScene object
 */

class MyTangram extends CGFobject {
	constructor(scene) {
		super(scene);

	this.diamond = new MyDiamond(scene);
	this.triangle = new MyTriangle(scene);
	this.paralellogram = new MyParalellogram(scene);

	};


    display(){
        this.scene.pushMatrix();
        //this.translate(2,2,0);
        //this.scene.setDiffuse(0,1,0,0);
        this.scene.multMatrix( [1.0, 0.0, 0.0, 0.0,
                           0.0, 1.0, 0.0, 0.0,
                           0.0, 0.0, 1.0, 0.0,
                           -1.7, 2.5, 0.0, 1.0]);
        this.scene.scale(0.8,0.8,0);
        this.scene.diamond.display();
        this.scene.popMatrix();
        
        this.scene.pushMatrix();
        this.scene.translate(-1,1,0);
        this.scene.triangle.display();
        this.scene.popMatrix();
        
        this.scene.pushMatrix();
        this.scene.translate(-1.7,1.7,0);
        this.scene.scale(0.8,-0.8,0);
        this.scene.paralellogram.display();
        this.scene.popMatrix();
        
        this.scene.pushMatrix();
        this.scene.translate(0.5,1.1,0);
        this.scene.scale(-0.6,-0.6,0);
        this.scene.triangle.display();
        this.scene.popMatrix();
        
        this.scene.pushMatrix();
        this.scene.translate(-0.6,0,0);
        this.scene.rotate(Math.PI/4, 0,0,1);
        this.scene.triangle.display();
        this.scene.popMatrix();
        
        this.scene.pushMatrix();
        this.scene.scale(0.7,0.7,0);
        this.scene.translate(1.15,-1.4,0);
        this.scene.rotate(-3*Math.PI/4,0,0,1);
        this.scene.triangle.display();
        this.scene.popMatrix();
        
        this.scene.pushMatrix();
        this.scene.translate(2.1,-0.97,0);
        this.scene.scale(0.6,0.6,0);
        this.scene.rotate(Math.PI/4,0,0,1);
        this.scene.triangle.display();
        this.scene.popMatrix();
    }
	
}

