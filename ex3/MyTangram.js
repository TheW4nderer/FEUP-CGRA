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
         //Green
        this.material5 = new CGFappearance(scene);
        this.material5.setAmbient(0,1*0.5,0,1.0);
        this.material5.setDiffuse(0,1*0.7,0,1.0);
        this.material5.setSpecular(0,1,0,1.0);
        this.material5.setShininess(10.0);

        //Red
        this.material6 = new CGFappearance(scene);
        this.material6.setAmbient(1*0.5,0,0,1.0);
        this.material6.setDiffuse(1*0.7,0,0,1.0);
        this.material6.setSpecular(1,0,0,1.0);
        this.material6.setShininess(10.0);1

        //Yellow
        this.material7 = new CGFappearance(scene);
        this.material7.setAmbient(1*0.5,1*0.5,0,1.0);
        this.material7.setDiffuse(1*0.7,1*0.7,0,1.0);
        this.material7.setSpecular(1,1,0,1.0);
        this.material7.setShininess(10.0);

        //Blue
        this.material8 = new CGFappearance(scene);
        this.material8.setAmbient(0,0.749*0.5,1*0.5,1.0);
        this.material8.setDiffuse(0,0.749*0.7,1*0.7,1.0);
        this.material8.setSpecular(0,0.749,1,1.0);
        this.material8.setShininess(10.0);
        
        //Orange
        this.material9 = new CGFappearance(scene);
        this.material9.setAmbient(1*0.5,0.647*0.5,0,1.0);
        this.material9.setDiffuse(1*0.7,0.647*0.7,0,1.0);
        this.material9.setSpecular(1,0.647,0,1.0);
        this.material9.setShininess(10.0);

        //Pink
        this.material10 = new CGFappearance(scene);
        this.material10.setAmbient(1*0.5,0.714*0.5,0.757*0.5,1.0);
        this.material10.setDiffuse(1*0.7,0.714*0.7,0.757*0.7,1.0);
        this.material10.setSpecular(1,0.714,0.757,1.0);
        this.material10.setShininess(10.0);

        //Purple
        this.material11 = new CGFappearance(scene);
        this.material11.setAmbient(0.58*0.5,0,0.827*0.5,1.0);
        this.material11.setDiffuse(0.58*0.7,0,0.827*0.7,1.0);
        this.material11.setSpecular(0.58,0,0.827,1.0);
        this.material11.setShininess(10.0);


	}

    display(){
        this.scene.pushMatrix();
        this.scene.multMatrix( [1.0, 0.0, 0.0, 0.0,
                           0.0, 1.0, 0.0, 0.0,
                           0.0, 0.0, 1.0, 0.0,
                           -1.7, 2.5, 0.0, 1.0]);
        
        this.scene.scale(0.8,0.8,1);
       // this.scene.materials[3].apply();
        this.scene.customMaterial.apply();
        //this.material5.apply(); 
        this.diamond.display();
        this.scene.popMatrix();
        
        this.scene.pushMatrix();
        this.scene.translate(-1,1,0);
        this.material8.apply();
        this.triangle.display();
        this.scene.popMatrix();
        
        this.scene.pushMatrix();
        this.scene.translate(-1.7,1.7,0);
        this.scene.scale(0.8,-0.8,1);
        this.material7.apply();
        this.paralellogram.display();
        this.scene.popMatrix();
        
        this.scene.pushMatrix();
        this.scene.translate(0.5,1.1,0);
        this.scene.scale(-0.6,-0.6,1);
        this.material6.apply();
        this.triangle.display();
        this.scene.popMatrix();
        
        this.scene.pushMatrix();
        this.scene.translate(-0.585,0,0);
        this.scene.rotate(Math.PI/4, 0,0,1);
        this.material9.apply();
        this.triangle.display();
        this.scene.popMatrix();
        
        this.scene.pushMatrix();
        this.scene.scale(0.7,0.7,1);
        this.scene.translate(1.183,-1.415,0);
        this.scene.rotate(-3*Math.PI/4,0,0,1);
        this.material10.apply();
        this.triangle.display();
        this.scene.popMatrix();
        
        this.scene.pushMatrix();
        this.scene.translate(2.1,-0.99,0);
        this.scene.scale(0.6,0.6,1);
        this.scene.rotate(Math.PI/4,0,0,1);
        this.material11.apply();
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

