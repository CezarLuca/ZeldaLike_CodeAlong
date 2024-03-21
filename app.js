import {
    Scene,
    PerspectiveCamera,
    WebGLRenderer,
    BoxGeometry,
    Mesh,
    MeshPhongMaterial,
    PointLight,
} from "three";
import Camera from "./engine/camera";
import Lighting from "./engine/lighting";
import Graphics from "./engine/graphics";
import loadAssets from "./tool/loader";
import World from "./entity/world";
import Player from "./entity/player";
import physic from "./engine/physic";

const meshes = await loadAssets("./glb/world0.glb");

const scene = new Scene();

const camera = new Camera();

const world = new World(meshes.visuals, meshes.colliders, physic);
// const player = new Player(meshes.players[0], physic);
const players = meshes.players.map((m) => new Player(m, physic));
const lighting = new Lighting();

scene.add(lighting);
scene.add(world);
// scene.add(player);
scene.add(...players);
console.log("lighting:", lighting);
console.log("world:", world);
console.log("players:", players);

const graphics = new Graphics(scene, camera);
// camera.setControls(graphics.domElement);
graphics.onUpdate((dt) => {
    // console.log("Updating camera and physics");
    // camera.update();
    camera.update(players[0]);
    lighting.update(players[0]);
    physic.step();
    for (const player of players) {
        // console.log("Updating player:", player);
        player.update();
    }
});
