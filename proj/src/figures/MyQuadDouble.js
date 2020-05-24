class MyQuadDouble extends CGFobject {
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
		    1, 0 ,3,
		    3, 0, 1,
            1, 2, 0,
            0, 2, 1       
		];

		this.texCoords = [
			0, 1,
			1, 0,
			1, 1,
			0, 0
		]


		this.primitiveType = this.scene.gl.TRIANGLES;
		this.initGLBuffers();
	}

	updateTexCoords(coords) {
		this.texCoords =  [...coords];;
		this.updateTexCoordsGLBuffers();
	}
}