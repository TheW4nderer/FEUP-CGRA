class MyCylinder extends CGFobject {
  
  constructor(scene, slices) {
    super(scene);
    this.slices = slices;

    this.initBuffers();

  }

  /**
   * @method initBuffers
   * Initializes the cylinder buffers
   * TODO: DEFINE TEXTURE COORDINATES
   */
  initBuffers() {
    this.vertices = [];
    this.indices = [];
    this.normals = [];
    this.texCoords = [];

    var ang = 0;
    var alphaAng = 2*Math.PI / this.slices;

    for (var i = 0; i <= this.slices; i++) {
      var sinAng = Math.sin(ang);
      var cosAng = Math.cos(ang);
      this.vertices.push(cosAng,0,-sinAng);
      this.vertices.push(cosAng,1,-sinAng);
      this.normals.push(cosAng,0,-sinAng);
      this.normals.push(cosAng,0,-sinAng);
      this.texCoords.push(i / this.slices, 1);
      this.texCoords.push(i / this.slices, 0);

      if (i != this.slices){
          this.indices.push(i*2,i*2+2,i*2+1);
          this.indices.push(i*2+1,i*2+2,i*2+3);
      }
      ang += alphaAng;
    }
    this.primitiveType = this.scene.gl.TRIANGLES;
    this.initGLBuffers();
  }
  display() {
    this.scene.pushMatrix();
    this.scene.defaultMaterial.apply();
    this.scene.popMatrix();
    super.display();
  }


}
