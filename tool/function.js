import { RigidBodyDesc, ColliderDesc } from "@dimforge/rapier3d-compat";

function createColliderGeometry(geometry, rigidBody, physic) {
    const vertices = new Float32Array(geometry.attributes.position.array);
    const indidces = new Float32Array(geometry.index.array);
    const colliderDesc = ColliderDesc.trimesh(vertices, indidces);
    return physic.createCollider(colliderDesc, rigidBody);
}

function createColliderBall(radius, rigidBody, physic) {
    const colliderDesc = ColliderDesc.ball(radius);
    return physic.createCollider(colliderDesc, rigidBody);
}

export function createRigidBodyFixed(mesh, physic) {
    const rigidBodyDesc = RigidBodyDesc.fixed();
    const rigidBody = physic.createRigidBody(rigidBodyDesc);
    const collider = createColliderGeometry(mesh.geometry, rigidBody, physic);

    // const geo = mesh.geometry;
    // const vertices = new Float32Array(geo.attributes.position.array);
    // const indidces = new Float32Array(geo.index.array);
    // const colliderDesc = ColliderDesc.trimesh(vertices, indidces);
    // physic.creteCollider(colliderDesc, rigidBody);
}

export function createRigidBodyEntity(position, physic) {
    const rigidBodyDesc = RigidBodyDesc.dynamic();
    rigidBodyDesc.setTranslation(...position);
    const rigidBody = physic.createRigidBody(rigidBodyDesc);
    // const colliderDesc = ColliderDesc.cuboid(1, 1, 1);
    // const collider = physic.createColliderBall(0.25, rigidBody);
    const collider = createColliderBall(0.25, rigidBody, physic);

    return { rigidBody, collider };
}
