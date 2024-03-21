import { Object3D } from "three";
// import { ColliderDesc, RigidBodyDesc } from "@dimforge/rapier3d-compat";
import { createRigidBodyFixed } from "../tool/function";

export default class World extends Object3D {
    constructor(visuals, colliders, physic) {
        super();
        this.initPhysic(colliders, physic);
        this.initVisual(visuals);
    }

    initPhysic(meshes, physic) {
        // initPhysic(colliders) {
        //     this.colliders = colliders;
        // }

        for (const mesh of meshes) {
            createRigidBodyFixed(mesh, physic);
            // const rigidBodyDesc = RigidBodyDesc.fixed();
            // const rigidBody = physic.createRigidBody(rigidBodyDesc);
            // const geo = mesh.geometry;
            // const vertices = new Float32Array(geo.attributes.position.array);
            // const indidces = new Float32Array(geo.index.array);
            // const colliderDesc = ColliderDesc.trimesh(vertices, indidces);
            // physic.creteCollider(colliderDesc, rigidBody);
        }
    }

    initVisual(meshes) {
        for (const mesh of meshes) {
            mesh.receiveShadow = true;
            mesh.castShadow = true;
            this.add(mesh);
        }
    }
}
