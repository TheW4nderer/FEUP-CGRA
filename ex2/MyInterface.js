/**
* MyInterface
* @constructor
*/
class MyInterface extends CGFinterface {
    constructor() {
        super();
    }

    init(application) {
        // call CGFinterface init
        super.init(application);
        // init GUI. For more information on the methods, check:
        // http://workshop.chromeexperiments.com/examples/gui
        this.gui = new dat.GUI();
        
        var obj = this;

        //Checkbox element in GUI
        this.gui.add(this.scene, 'displayAxis').name('Display Axis');

        //Slider element in GUI
        this.gui.add(this.scene, 'scaleFactor', 0.1, 5).name('Scale Factor');

        //this.gui.add(this.scene, 'displayTriangle').name('Draw Triangle');

        //this.gui.add(this.scene, 'displayDiamond').name('Draw Diamond');

        //this.gui.add(this.scene, 'displayPG').name('Draw PG');

        return true;
    }
}