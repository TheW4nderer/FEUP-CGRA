/**
* MyScene
* @constructor
*/
class MyScene extends CGFscene {
    constructor() {
        super();
    }
    init(application) {
        super.init(application);
        this.initCameras();
        this.initLights();

        //Background color
        this.gl.clearColor(0.0, 0.0, 0.0, 1.0);

        this.gl.clearDepth(100.0);
        this.gl.enable(this.gl.DEPTH_TEST);
        this.gl.enable(this.gl.CULL_FACE);
        this.gl.depthFunc(this.gl.LEQUAL);

        this.setUpdatePeriod(50);
        
        this.enableTextures(true);

        //Initialize scene objects
        this.axis = new CGFaxis(this);
        this.incompleteSphere = new MySphere(this, 16, 8);
        this.cylinder = new MyCylinder(this,16);
        this.vehicle = new MyVehicle(this, 18, 16);
        this.rudder = new MyRudder(this);
        this.billboard = new MyBillboard(this);
        this.supplyList = [];
        for (var i = 0; i < 5; i++) this.supplyList[i] = new MySupply(this);
        this.currentSupply = 0;

        this.cubeMap = new MyCubeMap(this);
        this.terrain = new MyTerrain(this);

        //Objects connected to MyInterface
        this.displayAxis = true;
        this.displayEarth = false;
        this.displayCubeMap = true;
        this.displayTerrain = true;
        this.currentTexture = 0;
        this.currentObject = 2;
        this.speedFactor = 1;
        this.scaleFactor = 1;
        this.LkeyUp = true;
        this.objects = [this.incompleteSphere, this.cylinder, this.vehicle];
        this.objectList = {
            'Sphere': 0,
            'Cylinder': 1,
            'Vehicle': 2
        };

        this.textures = [
        new CGFtexture(this, "images/earth.jpg"),
        new CGFtexture(this, "images/cubemap.png"),
        new CGFtexture(this, "images/forest.png"),
        ];

        this.textureList = {
            'Cubemap': 0,
            'Forest': 1
        };
        

        this.earthMaterial = new CGFappearance(this);
        this.earthMaterial.setAmbient(0.1, 0.1, 0.1, 1);
        this.earthMaterial.setDiffuse(0.9, 0.9, 0.9, 1);
        this.earthMaterial.setSpecular(0.1, 0.1, 0.1, 1);
        this.earthMaterial.setShininess(10.0);
        this.earthMaterial.loadTexture('images/earth.jpg');
        this.earthMaterial.setTextureWrap('REPEAT', 'REPEAT');

        this.defaultMaterial = new CGFappearance(this);
        this.defaultMaterial.setAmbient(0.2, 0.4, 0.8, 1.0);
        this.defaultMaterial.setDiffuse(0.2, 0.4, 0.8, 1.0);
        this.defaultMaterial.setSpecular(0.2, 0.4, 0.8, 1.0);
        this.defaultMaterial.setShininess(10.0);
    }
    initLights() {
        this.setGlobalAmbientLight(0.5,0.5,0.5,1.0);
        
        this.lights[0].setPosition(15, 2, 5, 1);
        this.lights[0].setDiffuse(1.0, 1.0, 1.0, 1.0);
        this.lights[0].enable();
        this.lights[0].update();
    }
    initCameras() {
        this.camera = new CGFcamera(0.4, 0.1, 500, vec3.fromValues(35, 35, 35), vec3.fromValues(0, 0, 0));
    }
    setDefaultAppearance() {
        this.setAmbient(0.2, 0.9, 0.2, 1.0);
        this.setDiffuse(0.2, 0.4, 0.8, 1.0);
        this.setSpecular(0.2, 0.4, 0.8, 1.0);
        this.setShininess(10.0);
    }


    updateAppliedTexture() {
        
    }

    updateObjectComplexity(){
        //this.objects[this.currentObject];
    }    


    checkKeys(){
        var text="Keys pressed: ";
        var keysPressed=false;
        
        if (!this.vehicle.autoPilot){
            
            if(this.gui.isKeyPressed("KeyW")){
                text+=" W ";
                this.vehicle.accelerate(0.3*this.speedFactor);
                keysPressed=true;
            }
            if(this.gui.isKeyPressed("KeyS")){
                text+=" S ";
                this.vehicle.accelerate(-0.3*this.speedFactor);
                keysPressed=true;
            }
            if(this.gui.isKeyPressed("KeyA")){
                text+=" A ";
                this.vehicle.turn(-5);
                keysPressed=true;
                this.vehicle.tRight = true;
                this.vehicle.tLeft = false;
            }
            if(this.gui.isKeyPressed("KeyD")){
                text+=" D ";
                this.vehicle.turn(5);
                keysPressed=true;
                this.vehicle.tRight = false;
                this.vehicle.tLeft = true;
            }
            if (this.gui.isKeyPressed("KeyP")){
                text += " P ";
                this.vehicle.setAutopilot();
                keysPressed = true;
            }

            if (this.gui.isKeyPressed("KeyL") && this.LkeyUp){
                text += " L ";
                if (this.currentSupply < 5) {
                    this.supplyList[this.currentSupply].drop(this.vehicle.pos_x, this.vehicle.pos_z);
                    console.log(this.currentSupply);
                    this.currentSupply++;
                    //this.currentSupply %= 5;
                    keysPressed = true;
                    this.LkeyUp = false;
                }
                
            }

            if (!this.gui.isKeyPressed("KeyL")) this.LkeyUp = true;

            if (!keysPressed){
                this.vehicle.tRight = false;
                this.vehicle.tLeft = false;
            }
        }

        if (this.gui.isKeyPressed("KeyR")) {
                text+=" R ";
                this.vehicle.reset();
                this.currentSupply = 0;
                for (var i = 0; i < 5; i++) this.supplyList[i].reset();
                keysPressed = true;
         }

         if(keysPressed){
                console.log(text);
         }

    }
    // called periodically (as per setUpdatePeriod() in init())
    update(t){
        this.checkKeys();
        this.vehicle.update(t);
        this.billboard.update();
        for (var i = 0; i < 5; i++) this.supplyList[i].update(t);
    }


    display() {
        // ---- BEGIN Background, camera and axis setup
        
        // Clear image and depth buffer everytime we update the scene
        this.gl.viewport(0, 0, this.gl.canvas.width, this.gl.canvas.height);
        this.gl.clear(this.gl.COLOR_BUFFER_BIT | this.gl.DEPTH_BUFFER_BIT);
        
        // Initialize Model-View matrix as identity (no transformation
        this.updateProjectionMatrix();
        this.loadIdentity();
        
        // Apply transformations corresponding to the camera position relative to the origin
        this.applyViewMatrix();
        
        // Draw axis
        if (this.displayAxis)
            this.axis.display();

        this.setDefaultAppearance();
        
        this.pushMatrix();
        
        this.objects[this.currentObject].display();

        this.pushMatrix();
        this.translate(-8,3,0);
        this.rotate(Math.PI/2, 0,1,0);
        this.billboard.display();
        this.popMatrix();

        if (this.displayCubeMap)
            this.cubeMap.display();

        if (this.displayTerrain)
            this.terrain.display();

        for (var i = 0; i < 5; i++){
            this.supplyList[i].display();
        }     
        if (this.currentSupply < 5) this.supplyList[this.currentSupply].display();
        this.popMatrix();

        // ---- BEGIN Primitive drawing section

        //This sphere does not have defined texture coordinates
        //this.globeMaterial.apply();
        //this.incompleteSphere.display();
        //this.scene.updateTexture();
        //this.cubeMap.updateTexture();
        //this.cubeMap.display();
        //this.cylinder.display();
        // ---- END Primitive drawing section
    }
}