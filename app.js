import {
    Scene,
    PerspectiveCamera,
    WebGLRenderer,
    BoxGeometry,
    Mesh,
    MeshBasicMaterial,
    PointLight,
} from "three";

const scene = new Scene();

// const camera = new PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const camera = new PerspectiveCamera(70, innerWidth / innerHeight);
camera.position.set(0, 0, 4);
camera.lookAt(0, 0, 0);

const geomertry = new BoxGeometry(1, 1, 1);
const material = new MeshBasicMaterial();
const mesh = new Mesh(geomertry, material);

const light = new PointLight();
light.position.set(1, 0, 4);

scene.add(mesh);
scene.add(light);

const canvas = document.querySelector("canvas");
const graphic = new WebGLRenderer({ canvas });
graphic.render(scene, camera);
