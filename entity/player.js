import { Object3D } from "three";
import { createRigidBodyEntity } from "../tool/function";

export default class Player extends Object3D {
    collider = null;
    rigidBody = null;

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

    updatePhysic() {}

    updateVisual() {
        this.position.copy(this.rigidBody.translation());
    }
}
