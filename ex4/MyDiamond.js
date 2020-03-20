/**
 * MyDiamond
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyDiamond extends CGFobject {
	constructor(scene) {
		super(scene);
		this.initBuffers();
	}
	initBuffers() {
		this.vertices = [
			-1, 0, 0,	//0
			0, 1, 0,	//1
			1, 0, 0,	//2
			0, -1, 0	//3
		];

		//Counter-clockwise reference of vertices
		this.indices = [
			0, 1, 2,
			2, 1, 0,
			2, 3, 0,
			0, 3, 2
		];
        
	    this.normals = [
	        0, 0, 1,
	        0, 0, 1,
	        0, 0, 1,
	        0, 0, 1,
	    ];

	    this.textCoords = [
	        0, 0.5,
	        0.25, 0.75,
	        0.5, 0.5,
            0.25, 0.25      
	    ];


		//The defined indices (and corresponding vertices)
		//will be read in groups of three to draw triangles
		this.primitiveType = this.scene.gl.TRIANGLES;

		this.initGLBuffers();
	}

	updateTexCoords(coords) {
		this.texCoords = [...coords];
		this.updateTexCoordsGLBuffers();
	}
}

