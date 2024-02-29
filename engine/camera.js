import { PerspectiveCamera } from "three";
import { OrbitControls } from "three-stdlib";

export default class Camera extends PerspectiveCamera {
    constructor() {
        super(70, innerWidth / innerHeight);
        this.position.set(0, 5.5, 9);
        this.lookAt(0, 0, 1.8);
    }

    setControls(domElement) {
        this.controls = new OrbitControls(this, domElement);
    }

    update() {
        this.controls.update();
    }
}
