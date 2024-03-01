import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";

const loaderGlb = new GLTFLoader();

export default async function loadAssets(path) {
    const glb = await loaderGlb.loadAsync(path);
    const visuals = [];
    const colliders = [];

    for (const mesh of glb.scene.children) {
        const name = mesh.name.toLowerCase();
        if (name.includes("visual")) {
            // mesh.castShadow = true;
            // mesh.receiveShadow = true;
            // mesh.visible = true;
            visuals.push(mesh);
        } else if (name.includes("collider")) {
            colliders.push(mesh);
        }
    }

    return { visuals, colliders };
}
