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

        //Initialize scene objects
        this.axis = new CGFaxis(this);
        this.diamond = new MyDiamond(this);
        this.triangle = new MyTriangle(this);
        this.paralellogram = new MyParalellogram(this);
        this.tangram = new MyTangram(this);

        //Objects connected to MyInterface
        this.displayTriangle = true;
        this.displayDiamond = true;
        this.displayPG = true;
        this.displayAxis = true;
        this.scaleFactor = 1;
        //this.translationFactor = 2.0;
    }
    initLights() {
        this.lights[0].setPosition(15, 2, 5, 1);
        this.lights[0].setDiffuse(1.0, 1.0, 1.0, 1.0);
        this.lights[0].enable();
        this.lights[0].update();
    }
    initCameras() {
        this.camera = new CGFcamera(0.4, 0.1, 500, vec3.fromValues(15, 15, 15), vec3.fromValues(0, 0, 0));
    }
    setDefaultAppearance() {
        this.setAmbient(0.2, 0.4, 0.8, 1.0);
        this.setDiffuse(0.2, 0.4, 0.8, 1.0);
        this.setSpecular(0.2, 0.4, 0.8, 1.0);
        this.setShininess(10.0);
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

        var sca = [this.scaleFactor, 0.0, 0.0, 0.0,
                    0.0, this.scaleFactor, 0.0, 0.0,
                    0.0, 0.0, this.scaleFactor, 0.0,
                    0.0, 0.0, 0.0, 1.0];
        
                   
        /*this.pushMatrix();
        //this.translate(2,2,0);
        this.multMatrix( [1.0, 0.0, 0.0, 0.0,
                           0.0, 1.0, 0.0, 0.0,
                           0.0, 0.0, 1.0, 0.0,
                           -1.7, 2.5, 0.0, 1.0]);
        this.scale(0.8,0.8,0);
        this.diamond.display();
        this.popMatrix();
        this.pushMatrix();
        this.translate(-1,1,0);
        this.triangle.display();
        this.popMatrix();
        this.pushMatrix();
        this.translate(-1.7,1.7,0);
        this.scale(0.8,-0.8,0);
        this.paralellogram.display();
        this.popMatrix();
        this.pushMatrix();
        this.translate(0.5,1.1,0);
        this.scale(-0.6,-0.6,0);
        this.triangle.display();
        this.popMatrix();
        this.pushMatrix();
        this.translate(-0.6,0,0);
        this.rotate(Math.PI/4, 0,0,1);
        this.triangle.display();
        this.popMatrix();
        this.pushMatrix();
        this.scale(0.7,0.7,0);
        this.translate(1.15,-1.4,0);
        this.rotate(-3*Math.PI/4,0,0,1);
        this.triangle.display();
        this.popMatrix();
        this.pushMatrix();
        this.translate(2.1,-0.97,0);
        this.scale(0.6,0.6,0);
        this.rotate(Math.PI/4,0,0,1);
        this.triangle.display();
        this.popMatrix();
        
        //this.multMatrix(this.translation);
        //this.triangle.display();
        //this.popMatrix();*/

        this.tangram.display();



        // ---- BEGIN Primitive drawing section

        //this.triangle.display();

        // ---- END Primitive drawing section
    }
}