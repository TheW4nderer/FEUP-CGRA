/**
 * MyTangram
 * @constructor
 * @param scene - Reference to MyScene object
 */

class MyTangram extends CGFobject {
	constructor(scene) {
		super(scene);
		
    this.initMaterials(scene);
	this.diamond = new MyDiamond(scene);
	this.triangle = new MyTriangle(scene);
	this.paralellogram = new MyParalellogram(scene);

   
	};
    
    enableNormalViz() {
		this.diamond.enableNormalViz();
		this.triangle.enableNormalViz();
		this.paralellogram.enableNormalViz();
	};
	    
	initMaterials(scene){
     
        //diamond texture
        this.material12 = new CGFappearance(this.scene);
        this.material12.setAmbient(0.1, 0.1, 0.1, 1);
        this.material12.setDiffuse(0.9, 0.9, 0.9, 1);
        this.material12.setSpecular(0.1, 0.1, 0.1, 1);
        this.material12.setShininess(10.0);
        this.material12.loadTexture('images/tangram.png');
        this.material12.setTextureWrap('REPEAT', 'REPEAT');

        
	}

    display(){

        this.scene.pushMatrix();
        this.scene.multMatrix( [1.0, 0.0, 0.0, 0.0,
                           0.0, 1.0, 0.0, 0.0,
                           0.0, 0.0, 1.0, 0.0,
                           -1.7, 2.5, 0.0, 1.0]);
        
        this.scene.scale(0.8,0.8,1);
        this.diamond.updateTexCoords([ 0, 0.5,
	        0.25, 0.75,
	        0.5, 0.5,
            0.25, 0.25 ]);
        this.material12.apply();
        this.diamond.display();
        this.scene.popMatrix();
        
        this.scene.pushMatrix();
        this.scene.translate(-1,1,0);
        this.triangle.updateTexCoords([
            0, 0,
            0, 0.5,
            0.25, 0.25
        ]);
        this.material12.apply();
        this.triangle.display();
        this.scene.popMatrix();
        
        this.scene.pushMatrix();
        this.scene.translate(-1.7,1.7,0);
        this.scene.scale(0.8,-0.8,1);
        this.paralellogram.display();
        this.scene.popMatrix();
        
        this.scene.pushMatrix();
        this.scene.translate(0.5,1.1,0);
        this.scene.scale(-0.6,-0.6,1);
        this.triangle.updateTexCoords([
            0.5, 0.5,
            1, 1,
            1, 0
        ]);
        this.triangle.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(-0.585,0,0);
        this.scene.rotate(Math.PI/4, 0,0,1);
        this.triangle.updateTexCoords([
            0, 0.5,
            0, 1,
            0.5, 1
        ]);
        this.triangle.display();
        this.scene.popMatrix();
        
        this.scene.pushMatrix();
        this.scene.scale(0.7,0.7,1);
        this.scene.translate(1.183,-1.415,0);
        this.scene.rotate(-3*Math.PI/4,0,0,1);
        this.triangle.updateTexCoords([
            0.25, 0.75,
            0.75, 0.75,
            0.5, 0.5
        ]);
        this.triangle.display();
        this.scene.popMatrix();
        
        this.scene.pushMatrix();
        this.scene.translate(2.1,-0.99,0);
        this.scene.scale(0.6,0.6,1);
        this.scene.rotate(Math.PI/4,0,0,1);
        this.triangle.updateTexCoords([
            0, 0,
            0.5, 0.5,
            1, 0
        ]);
        this.triangle.display();
        this.scene.popMatrix();
    };
	
	updateBuffers(complexity){};

	disableNormalViz() {
		this.diamond.disableNormalViz();
		this.paralellogram.disableNormalViz();
		this.triangle.disableNormalViz();
	}
}

