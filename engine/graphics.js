import { WebGLRenderer, Clock } from "three";

export default class Graphics extends WebGLRenderer {
    scene = null;
    clock = new Clock();
    camera = null;
    cbUpdate = null;
    cbLoop = null;

    constructor(scene, camera) {
        super({ canvas: document.querySelector("canvas") });
        this.setSize(window.innerWidth, window.innerHeight);
        this.setClearColor(0x000000);
        this.scene = scene;
        this.camera = camera;
        this.cbLoop = this.loop.bind(this);
        this.shadowMap.enabled = true;
        this.loop();
        window.addEventListener("resize", this.resize.bind(this));
    }

    resize() {
        this.camera.aspect = window.innerWidth / window.innerHeight;
        this.camera.updateProjectionMatrix();
        this.setSize(window.innerWidth, window.innerHeight);
    }

    loop() {
        const dt = this.clock.getDelta();
        if (this.cbUpdate) {
            this.cbUpdate(dt);
        }
        this.render(this.scene, this.camera);
        requestAnimationFrame(this.cbLoop);
    }

    onUpdate(callback) {
        this.cbUpdate = callback;
    }
}
