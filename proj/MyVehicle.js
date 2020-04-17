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
        
        this.pos_x = 0;
        this.pos_z = 0;
        this.orientation = 0;
        this.vel = 0;
        
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

    update(){
        this.pos_x += this.vel * Math.sin(this.orientation*Math.PI/180);
        this.pos_z += this.vel * Math.cos(this.orientation*Math.PI/180);
    }

    turn(val){
         if(this.vel < 0){
            this.orientation -= val;
        }
        else{
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

    }
    
    display() {
        this.scene.pushMatrix();
        this.scene.defaultMaterial.apply();
        this.scene.scale(this.scene.scaleFactor,this.scene.scaleFactor,this.scene.scaleFactor);
        this.scene.translate(this.pos_x, 0, this.pos_z);
        this.scene.rotate(this.orientation*Math.PI/180, 0, 1, 0);

        this.scene.rotate(Math.PI/2, 1, 0, 0);  //Putting the pyramid in its original position
        this.scene.translate(0,-1,0);
        super.display();

        this.scene.popMatrix();
    }
    
    updateBuffers(complexity){
        this.slices = 3 + Math.round(9 * complexity); //complexity varies 0-1, so slices varies 3-12

        // reinitialize buffers
        this.initBuffers();
        this.initNormalVizBuffers();
    }
}


