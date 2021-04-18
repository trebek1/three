// four elements for basic scene
// scene, object, camera, render

// SCENE GLOBAL VARS
// sizes
const sizes = { width: 800, height: 600 };
// canvas
const canvas = document.querySelector("canvas.webgl");

// 1. Scene
const scene = new THREE.Scene();

// 2. Object - Red Cube
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 });

// mesh = geometry + material
const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);

// 3. Camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);
camera.position.z = 3;
camera.position.y = 1;
// camera needs field of view (fov) - degrees, aspect ratio
scene.add(camera);

// 4. Renderer
const renderer = new THREE.WebGLRenderer({
  canvas,
});
renderer.setSize(sizes.width, sizes.height);
renderer.render(scene, camera);

// inside the cube you can't see the cube
// position x y and z with z being toward us
