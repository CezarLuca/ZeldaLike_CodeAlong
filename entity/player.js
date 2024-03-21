import { Object3D } from "three";
import { createRigidBodyEntity } from "../tool/function";
import Gamepad from "../control/gamepad";
import Keyboard from "../control/keyboard";

const SPEED = 3;

export default class Player extends Object3D {
    collider = null;
    rigidBody = null;
    ctrl = new Gamepad();
    keyboard = new Keyboard();

    constructor(mesh, physic) {
        super();
        this.position.copy(mesh.position);
        this.initPhysic(physic);
        this.initVisual(mesh);
    }

    initPhysic(physic) {
        const { rigidBody, collider } = createRigidBodyEntity(
            this.position,
            physic
        );
        this.rigidBody = rigidBody;
        this.collider = collider;
    }
    initVisual(mesh) {
        mesh.position.set(0, 0, 0);
        mesh.castShadow = true;
        this.add(mesh);
    }

    update() {
        this.updatePhysic();
        this.updateVisual();
    }

    updatePhysic() {
        const x =
            (this.ctrl.x + this.keyboard.right - this.keyboard.left) * SPEED;
        const z = (this.ctrl.z + this.keyboard.down - this.keyboard.up) * SPEED;
        const y = this.rigidBody.linvel().y; // useless line, constrain by Rapier physics
        // const force = [x, 0, z];
        // this.rigidBody.applyForce(force);
        this.rigidBody.setLinvel({ x, y, z }, true);
    }

    updateVisual() {
        this.position.copy(this.rigidBody.translation());
    }
}
