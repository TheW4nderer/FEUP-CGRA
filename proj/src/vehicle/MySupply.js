const SupplyStates = {
    INACTIVE: 0,
    FALLING: 1,
    LANDED: 2
};



class MySupply extends CGFobject {
	constructor(scene) {
		super(scene);

    this.quad = new MyQuadDouble(scene);
    this.quad.initBuffers(scene);
    this.initMaterials(scene);
    this.state = SupplyStates.INACTIVE;
    this.dropTime = 0;
    this.time = 0;
    this.elapsedTime = 0;
	};
    

    initMaterials(scene){
    	//side
    	this.material_side = new CGFappearance(this.scene);
        this.material_side.setAmbient(0.9, 0.9, 0.9, 1);
        this.material_side.setDiffuse(0.1, 0.1, 0.1, 1);
        this.material_side.setSpecular(0.1, 0.1, 0.1, 1);
        this.material_side.setShininess(10.0);
        this.material_side.loadTexture('images/box.png');
        this.material_side.setTextureWrap('REPEAT', 'REPEAT');

        this.pos_y = 9;
        this.pos_x = 0;
        this.pos_z = 0;

    }

    update(t){
        if (this.time == 0){
            this.time = t;
        }
        this.elapsedTime = t-this.time;
        this.time = t;


        if (this.state == SupplyStates.FALLING){
            this.dropTime += this.elapsedTime;
            this.pos_y -= 9*this.elapsedTime/3000;
            if (this.pos_y <= 0.2) this.land();
        }
    }

    drop(drop_x, drop_z){
        this.state = SupplyStates.FALLING;
        this.pos_y = 9;
        this.pos_x = drop_x;
        this.pos_z = drop_z;
        this.dropTime = 0;
        this.time = 0;
        this.elapsedTime = 0;
    }

    land(){
        if (this.state == SupplyStates.FALLING){ 
            this.state = SupplyStates.LANDED;
            this.pos_y = 0.2;
            this.time = 0;
            this.dropTime = 0;
            this.elapsedTime = 0;
        }
    }

    reset(){
    	this.state = SupplyStates.INACTIVE;
    	this.pos_y = 9;
        this.pos_x = 0;
        this.pos_z = 0;
    }

    displayFalling(){
        
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
	    this.material_side.apply();
		this.scene.gl.texParameteri(this.scene.gl.TEXTURE_2D, this.scene.gl.TEXTURE_MAG_FILTER, this.scene.gl.NEAREST);
	    this.quad.display();
	    this.scene.popMatrix();

	    this.scene.pushMatrix();
	    this.scene.translate(0,0.5,0);
	    this.scene.rotate(-Math.PI/2, 1,0,0);
	    this.material_side.apply();
	    this.scene.gl.texParameteri(this.scene.gl.TEXTURE_2D, this.scene.gl.TEXTURE_MAG_FILTER, this.scene.gl.NEAREST);
	    this.quad.display();
	    this.scene.popMatrix();
    }

    displayLanded(){
       this.material_side.apply(); 

       this.scene.pushMatrix();
       this.scene.translate(this.pos_x, 0.2, this.pos_z);
       this.scene.rotate(Math.PI/2, 1, 0, 0);
       this.quad.display();
       this.scene.popMatrix();

       this.scene.pushMatrix();
       this.scene.translate(this.pos_x-1, 0.2, this.pos_z);
       this.scene.rotate(Math.PI/2, 1, 0, 0);
       this.quad.display();
       this.scene.popMatrix();

       this.scene.pushMatrix();
       this.scene.translate(this.pos_x+1, 0.2, this.pos_z);
       this.scene.rotate(Math.PI/2, 1, 0, 0);
       this.quad.display();
       this.scene.popMatrix();

       this.scene.pushMatrix();
       this.scene.translate(this.pos_x, 0.2, this.pos_z-1);
       this.scene.rotate(Math.PI/2, 1, 0, 0);
       this.quad.display();
       this.scene.popMatrix();

       this.scene.pushMatrix();
       this.scene.translate(this.pos_x, 0.2, this.pos_z+1);
       this.scene.rotate(Math.PI/2, 1, 0, 0);
       this.quad.display();
       this.scene.popMatrix();
    }

    
	display() {
	    if (this.state == SupplyStates.FALLING){
	        this.scene.pushMatrix();
	        this.scene.translate(this.pos_x, this.pos_y, this.pos_z);
	        this.displayFalling();
            this.scene.popMatrix();
	    }
	    else if (this.state == SupplyStates.LANDED){
	       this.scene.pushMatrix();
	       this.displayLanded();
	       this.scene.popMatrix();
	    }   

	};

    
}