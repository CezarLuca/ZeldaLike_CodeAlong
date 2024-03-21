import { AmbientLight, PointLight, Object3D, Vector2 } from "three";

export default class Lighting extends Object3D {
    constructor() {
        super();
        const ambientLight = new AmbientLight(0xffffff, 1);
        const pointLight = new PointLight(0xffffff, 10);
        pointLight.position.set(1, 2, 0);
        pointLight.castShadow = true;
        pointLight.shadow.bias = -0.0001;
        pointLight.shadow.mapSize = new Vector2(2048, 2048);
        // pointLight.shadow.camera.far = 7;

        this.add(ambientLight, pointLight);
    }

    update(player) {
        this.position.copy(player.position);
    }
}
