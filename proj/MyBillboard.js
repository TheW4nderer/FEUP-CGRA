class MyBillboard extends CGFobject{
    constructor(scene){
        super(scene);

        this.progress_bar = new MyPlane(this.scene, 60);
        this.shader = new CGFshader(this.scene.gl, "shaders/board.vert", "shaders/board.frag");
        this.shader.setUniformsValues({nSupplies: this.scene.currentSupply});
        this.support =  new MyPlane(this.scene, 60);
        this.board = new MyPlane(this.scene, 60);


        this.defaultMaterial = new CGFappearance(this.scene);
        this.defaultMaterial.setAmbient(0.9, 0.9, 0.9, 1.0);
        this.defaultMaterial.setDiffuse(0.9, 0.9, 0.9, 1.0);
        this.defaultMaterial.setSpecular(0.1, 0.1, 0.1, 1.0);
        this.shader.setUniformsValues({nSupplies: 0})

        this.texture=new CGFappearance(this.scene);
        this.texture.setAmbient(0.9, 0.9, 0.9, 1);
        this.texture.setDiffuse(0.9, 0.9, 0.9, 1);
        this.texture.setSpecular(0.1, 0.1, 0.1, 1);
        this.texture.setShininess(10.0);
        this.texture.loadTexture('images/board.png');
        this.texture.setTextureWrap('REPEAT', 'REPEAT');

    }

    update(){
        this.shader.setUniformsValues({nSupplies: this.scene.currentSupply});
    }
    
    reset(){
        this.shader.setUniformsValues({nSupplies: 0});
    }

    display(){
        this.scene.setDefaultAppearance();

        this.scene.pushMatrix();
        this.defaultMaterial.apply();
        this.scene.translate(-0.5, 0.5, 0, 1);
        this.scene.scale(0.1, 1.5, 1);
        this.support.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.defaultMaterial.apply();
        this.scene.translate(0.5, 0.5, 0, 1);
        this.scene.scale(0.1, 1, 1);
        this.support.display();
        this.scene.popMatrix();


        this.scene.pushMatrix();
        this.scene.translate(0,1.5,0,1);
        this.scene.scale(2,1.3,1);
        this.texture.apply();
        this.board.display();
        this.scene.popMatrix();
        

        this.scene.pushMatrix();
        this.scene.setActiveShader(this.shader);
        this.scene.translate(0,1.2,0.01);
        this.scene.scale(1.5,0.5,1);
        this.progress_bar.display();
        this.scene.popMatrix();
        
        //this.progress_bar.display();

        this.scene.setActiveShader(this.scene.defaultShader);
        this.scene.setDefaultAppearance();

    }


}