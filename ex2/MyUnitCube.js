/**
 * MyUnitCube
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyUnitCube extends CGFobject {
	constructor(scene) {
		super(scene);
		this.initBuffers();
	}
	initBuffers() {
		this.vertices = [
			0.5, 0.5, 0.5,	  //0
			-0.5, 0.5, 0.5,   //1
			-0.5, -0.5, 0.5,  //2
            0.5, -0.5, 0.5,	  //3
            0.5, 0.5, -0.5,   //4
            -0.5, 0.5, -0.5,  //5
            -0.5, -0.5, -0.5, //6
            0.5, -0.5, -0.5   //7
		];

		//Counter-clockwise reference of vertices
		this.indices = [
			0, 1, 2, //Face positiva XY
            2, 3, 0, 
            5, 4, 7, //Face negativa XY
            7, 6, 5, 
            0, 3, 7, //Face positiva YZ
            7, 4, 0,
            5, 6, 2, //Face negativa YZ
            2, 1, 5,
            1, 0, 4, //Face positiva XZ
            4, 5, 1,
            3, 2, 6, //Face negativa XZ
            6, 7, 3
            

		];
		this.primitiveType = this.scene.gl.TRIANGLES;
		this.initGLBuffers();
	}
}