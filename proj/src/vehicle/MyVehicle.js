/**
* MyVehicle
* @constructor
*/
class MyVehicle extends CGFobject {
    constructor(scene, slices, stacks) {
        super(scene);
        this.slices = slices;
        this.stacks = stacks;
        this.initBuffers();

        this.cylinder = new MyCylinder(this.scene, this.slices);
        this.sphere = new MySphere(this.scene, this.slices, this.stacks);
        this.rudder1 = new MyRudder(this.scene);
        this.rudder2 = new MyRudder(this.scene);
        this.rudder3 = new MyRudder(this.scene);
        this.rudder4 = new MyRudder(this.scene);
        this.propeller = new MyPropeller(this.scene, this.slices, this.stacks);
        this.rope = new MyCylinder(this.scene,this.slices);
        
        this.pos_x = 0;
        this.pos_z = 0;
        this.orientation = 0;
        this.vel = 0;

        this.tRight = false; //checks if the vehicle is turning right
        this.tLeft = false; //checks if the vehicle is turning left
        this.autoPilot = false;
        this.time = 0;
        this.elapsed_time = 0;
        this.angle_x = 0;
        this.radius = 5;
        this.center_x = 0;
        this.center_z = 0;

        this.flag = new MyPlane(this.scene,40, true);
        this.flag_shader = new CGFshader(this.scene.gl, "shaders/flag.vert", "shaders/flag.frag");
        this.flag_texture = new CGFtexture(this.scene, "images/flag.jpg");

        this.flag_shader.setUniformsValues({uSampler: 0});
        this.flag_shader.setUniformsValues({speed: 0});
        this.flag_shader.setUniformsValues({timeFactor: 0});

        this.ben10 = new CGFappearance(this.scene);
        this.ben10.setAmbient(0.1, 0.1, 0.1, 1);
        this.ben10.setDiffuse(0.9, 0.9, 0.9, 1);
        this.ben10.setSpecular(0.1, 0.1, 0.1, 1);
        this.ben10.setShininess(10.0);
        this.ben10.loadTexture('images/verde.png');
        this.ben10.setTextureWrap('REPEAT', 'REPEAT');

        this.green = new CGFappearance(this);
        this.green.setAmbient(0, 1, 0, 1);
        this.green.setDiffuse(0.9, 0.9, 0.9, 1);
        this.green.setSpecular(0.1, 0.1, 0.1, 1);
        this.green.setShininess(10.0);

       

    }
    initBuffers() {
        this.vertices = [];
        this.indices = [];
        this.normals = [];

        var ang = 0;
        var alphaAng = 2*Math.PI/this.slices;

        for(var i = 0; i < this.slices; i++){
            // All vertices have to be declared for a given face
            // even if they are shared with others, as the normals 
            // in each face will be different

            var sa=Math.sin(ang);
            var saa=Math.sin(ang+alphaAng);
            var ca=Math.cos(ang);
            var caa=Math.cos(ang+alphaAng);

            this.vertices.push(0,2,0);
            this.vertices.push(ca, 0, -sa);
            this.vertices.push(caa, 0, -saa);

            // triangle normal computed by cross product of two edges
            var normal= [
                saa-sa,
                ca*saa-sa*caa,
                caa-ca
            ];

            // normalization
            var nsize=Math.sqrt(
                normal[0]*normal[0]+
                normal[1]*normal[1]+
                normal[2]*normal[2]
                );
            normal[0]/=nsize;
            normal[1]/=nsize;
            normal[2]/=nsize;

            // push normal once for each vertex of this triangle
            this.normals.push(...normal);
            this.normals.push(...normal);
            this.normals.push(...normal);

            this.indices.push(3*i, (3*i+1) , (3*i+2) );

            ang+=alphaAng;
        }

        this.primitiveType = this.scene.gl.TRIANGLES;
        this.initGLBuffers();
    }


    update(t){
        if (this.autoPilot){
            if (this.time == 0){
                this.time = t;
            }
            this.elapsed_time = t-this.time; 
            this.orientation += 360*this.elapsed_time/5000;
            this.time = t;
            this.pos_x = -this.radius * Math.cos(this.orientation * Math.PI/180) + this.center_x ;
            this.pos_z = this.radius * Math.sin(this.orientation * Math.PI/180) + this.center_z ;

        }
        else{
            this.pos_x += this.vel * Math.sin(this.orientation*Math.PI/180);
            this.pos_z += this.vel * Math.cos(this.orientation*Math.PI/180);  
        }
        this.propeller.setAngle(this.vel);

        if (Math.round(this.angle_x*10)/10 == -Math.round(2*Math.PI*10)/10){
            this.autoPilot = false;
            this.elapsed_time = 0;
            this.time = 0;
            this.angle_x = 0;
        }

        this.flag_shader.setUniformsValues({speed: this.speed});
        this.flag_shader.setUniformsValues({timeFactor: t / 100 % 1000 });

    }

    setAutopilot(){
        if (this.autoPilot){ 
            this.autoPilot = false;
        }
        else {
            this.autoPilot = true;
            this.elapsed_time = 0;
            this.time = 0;
            this.angle_x = 0;
            this.center_x = this.pos_x + this.radius*Math.sin((this.orientation+90)*Math.PI/180);
            this.center_z = this.pos_z + this.radius*Math.cos((this.orientation+90)*Math.PI/180);
        }    
    }


    turn(val){
         if(this.vel < 0){
            this.orientation -= val;
        }
        else {
            this.orientation += val;
        }

    }

    accelerate(val){
       this.vel += val;
    }

    reset(){
        this.vel = 0; 
        this.pos_x = 0;
        this.pos_z = 0;
        this.orientation = 0;
        this.autoPilot = false;
        this.time = 0;
        this.elapsed_time = 0;

    }
    
    display() {
        this.scene.defaultMaterial.apply();
        this.scene.pushMatrix();
   
 

        this.scene.translate(this.pos_x, 10, this.pos_z);
        this.scene.scale(this.scene.scaleFactor,this.scene.scaleFactor,this.scene.scaleFactor);
        this.scene.rotate(this.orientation*Math.PI/180, 0, 1, 0);

        //Blimp balloon
        this.scene.pushMatrix();
        this.scene.scale(0.5,0.5,1);
        this.ben10.apply();
        this.sphere.display();
        this.scene.popMatrix();
    
       
        
        //Gondola
        this.scene.pushMatrix();
        this.scene.translate(0,-0.5,-0.3);
        this.scene.scale(0.1,0.1,0.6);
        this.scene.rotate(Math.PI/2,1,0,0);        
        this.cylinder.display();
        this.scene.popMatrix();

        this.scene.defaultMaterial.apply();
        this.scene.setDefaultAppearance();
        
        //rudder1
        this.scene.pushMatrix();
        this.scene.translate(0,0.35,-1);
        this.scene.rotate(Math.PI/2, 0,1,0);
        this.scene.scale(0.3, 0.3, 0.3);
        if (this.tRight){
            this.scene.rotate(Math.PI/6, 0,1,0);
        }
        else if (this.tLeft || this.autoPilot){
            this.scene.translate(0,0,0.2);
            this.scene.rotate(-Math.PI/6, 0,1,0);
        }
        this.rudder1.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(0,-0.51,0.3);
        this.scene.scale(0.09,0.09,0.09);
        this.sphere.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(0,-0.51,-0.3);
        this.scene.scale(0.09,0.09,0.09);
        this.sphere.display();
        this.scene.popMatrix();

        //rudder2
        this.scene.pushMatrix();
        this.scene.translate(0,-0.35,-1);
        this.scene.rotate(Math.PI/2, 0,1,0);
        this.scene.scale(0.3, -0.3, 0.3);
        if (this.tRight){
            this.scene.rotate(Math.PI/6, 0,1,0);
        }
        else if (this.tLeft || this.autoPilot){
            this.scene.translate(0,0,0.2);
            this.scene.rotate(-Math.PI/6, 0,1,0);
        }
        this.rudder2.display();
        this.scene.popMatrix();

        //rudder3 (horizontal)
        this.scene.pushMatrix();
        this.scene.translate(0.25,0,-1.2);
        this.scene.rotate(Math.PI/2, 0,1,0);
        this.scene.rotate(-Math.PI/2, 1,0,0);
        this.scene.scale(0.25, -0.25, 0.25);
        this.rudder3.display();
        this.scene.popMatrix();


        //rudder4 (horizontal)
        this.scene.pushMatrix();
        this.scene.translate(-0.25,0,-1.2);
        this.scene.rotate(-Math.PI/2, 0,1,0);
        this.scene.rotate(Math.PI/2, 1,0,0);
        this.scene.scale(-0.25, 0.25, -0.25);
        this.rudder4.display();
        this.scene.popMatrix();

        //Engines
        this.scene.pushMatrix();
        this.scene.translate(0.1,-0.5,-0.25);
        this.scene.scale(0.08, 0.08, 0.2);
        this.sphere.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(-0.1,-0.5,-0.25);
        this.scene.scale(0.08, 0.08, 0.2);
        this.sphere.display();
        this.scene.popMatrix();

        //Propeller
        
        this.propeller.display();

        //Rope
        this.scene.pushMatrix();
        this.scene.scale(0.005,0.005,0.75);
        this.scene.translate(0,0,-2);
        this.scene.rotate(Math.PI/2,1,0,0);
        this.rope.display();

        this.scene.popMatrix();


        //Flag
        this.scene.pushMatrix();
        this.scene.scale(1.4,0.7,1);
        this.scene.translate(0,0,-2);
        this.scene.rotate(Math.PI/2,0,1,0);

        this.scene.setActiveShader(this.flag_shader);

        this.flag_texture.bind(0);
        
        this.flag.display();

        this.scene.popMatrix();
        
        this.scene.setActiveShader(this.scene.defaultShader);

        this.scene.popMatrix();
    }
    
    updateBuffers(complexity){
        this.slices = 3 + Math.round(9 * complexity); //complexity varies 0-1, so slices varies 3-12

        // reinitialize buffers
        this.initBuffers();
        this.initNormalVizBuffers();
    }
}


