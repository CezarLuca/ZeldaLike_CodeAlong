import { AmbientLight, PointLight, Object3D } from "three";

export default class Lighting extends Object3D {
    constructor() {
        super();
        const ambientLight = new AmbientLight(0xffffff, 0.5);
        const pointLight = new PointLight(0xffffff, 0.5);
        pointLight.position.set(1, 0, 4);
        this.add(ambientLight, pointLight);
    }
}
