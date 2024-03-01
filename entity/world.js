import { Object3D } from "three";

export default class World extends Object3D {
    constructor(visuals) {
        super();
        // this.initPhysic(colliders);
        this.initVisual(visuals);
    }

    initPhysic() {}
    // initPhysic(colliders) {
    //     this.colliders = colliders;
    // }

    initVisual(meshes) {
        for (const mesh of meshes) {
            mesh.receiveShadow = true;
            mesh.castShadow = true;
            this.add(mesh);
        }
    }
}
