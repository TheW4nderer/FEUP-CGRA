/**
 * MyUnitCube
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyQuad extends CGFobject {
	constructor(scene) {
		super(scene);
		this.initBuffers();
	}
	initBuffers() {
		this.vertices = [
			-0.5, -0.5, 0,
			0.5, 0.5, 0,
			0.5, -0.5, 0,
            -0.5, 0.5, 0
		];

		//Counter-clockwise reference of vertices
		this.indices = [
			0, 1, 2, //Face positiva XY
            2, 1, 0,
            0, 3, 1, 
            1, 3, 0
       
		];
		this.primitiveType = this.scene.gl.TRIANGLES;
		this.initGLBuffers();
	}
}