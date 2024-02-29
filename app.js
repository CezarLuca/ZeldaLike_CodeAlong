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

const scene = new Scene();

// const camera = new PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const camera = new Camera();

const geomertry = new BoxGeometry(1, 1, 1);
const material = new MeshPhongMaterial();
const mesh = new Mesh(geomertry, material);

// const light = new PointLight();
// light.position.set(1, 0, 4);

const lighting = new Lighting();

scene.add(mesh);
scene.add(lighting);

const graphics = new Graphics(scene, camera);
graphics.onUpdate((dt) => {});

// const canvas = document.querySelector("canvas");
// const graphic = new WebGLRenderer({ canvas });
// graphic.setSize(window.innerWidth, window.innerHeight);
// graphic.render(scene, camera);
// graphic.setClearColor(0x000000);

// window.addEventListener("resize", () => {
//     camera.aspect = window.innerWidth / window.innerHeight;
//     camera.updateProjectionMatrix();
//     graphic.setSize(window.innerWidth, window.innerHeight);
// });

// Example of how to update the camera's projection matrix:

// function updateProjectionMatrix() {
//     const aspect = this.width / this.height;
//     const fovRad = this.fov * (Math.PI / 180); // convert fov degrees to radians
//     const top = Math.tan(fovRad / 2) * this.near;
//     const right = top * aspect;

//     this.projectionMatrix = new Matrix4().makeFrustum(
//         -right, // left
//         right, // right
//         -top, // bottom
//         top, // top
//         this.near,
//         this.far
//     );
// }
