import * as THREE from '../node_modules/three/src/Three.js';
import { GLTFLoader } from '../node_modules/three/examples/jsm/loaders/GLTFLoader.js';

import Stats from '../node_modules/three/examples/jsm/libs/stats.module.js';

import { OrbitControls } from '../node_modules/three/examples/jsm/controls/OrbitControls.js';
import { RoomEnvironment } from '../node_modules/three/examples/jsm/environments/RoomEnvironment.js';

import { DRACOLoader } from '../node_modules/three/examples/jsm/loaders/DRACOLoader.js';

let mixer;

const clock = new THREE.Clock();
const container = document.getElementById('container');

// const stats = new Stats();
// container.appendChild(stats.dom);

const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setPixelRatio( window.devicePixelRatio );
renderer.setSize( window.innerWidth, window.innerHeight );
renderer.outputEncoding = THREE.sRGBEncoding;
// container.appendChild( renderer.domElement );

const pmremGenerator = new THREE.PMREMGenerator( renderer );

const scene = new THREE.Scene();
scene.background = new THREE.Color(0xbfe3dd);
scene.environment = pmremGenerator.fromScene(new RoomEnvironment(), 0.04 ).texture;

const camera = new THREE.PerspectiveCamera(40, window.innerWidth/window.innerHeight, 1, 100);
camera.position.set(5,2,8);

const controls = new OrbitControls(camera, renderer.domElement);
controls.target.set( 0, 0.5, 0);
controls.update();
controls.enablePan = false;
controls.enableDamping = true;

const dracoLoader = new DRACOLoader();
dracoLoader.setDecoderPath('js/libs/draco/gltf');

const loader = new GLTFLoader();
loader.setDRACOLoader(dracoLoader);
loader.load('./src/asset/XYZ_threeJS_AMPMan.gltf', function (gltf){
    const model = gltf.scene;
    model.position.set(2,2,0);
    model.scale.set(0.01, 0.01, 0.01);
    scene.add(model);

    mixer = new THREE.AnimationMixer(model);
    mixer.clipAction(gltf.animations[0]).play();

    animate()
    }, undefined, function(e){
    console.error(e)
})

window.onresize = function (){
camera.aspect = window.innerWidth/window.innerHeight;
camera.updateProjectionMatrix();

renderer.setSize(window.innerWidth, window.innerHeight);
}

function animate(){
    requestAnimationFrame(animate);

    const delta = clock.getDelta();

    // mixer.update(delta);

    // controls.update();

    // stats.update();

    renderer.render(scene, camera);
}

// import * as THREE from '../node_modules/three/src/Three.js';
// import { GLTFLoader } from '../node_modules/three/examples/jsm/loaders/GLTFLoader.js';
// import { bro } from './bro';

// console.log(bro('Dude'))

// //Our JS will go here
// const scene = new THREE.Scene();
// const size = {
//     width: 800,
//     height: 600
// }

// const clock = new THREE.Clock();

// const camera = new THREE.PerspectiveCamera(75, size.width/size.height, 0.1, 1000);
// camera.position.set(0,0, 100);
// camera.lookAt(0, 0, 0)

// const renderer = new THREE.WebGLRenderer();
// renderer.setSize(window.innerWidth, window.innerHeight);
// document.body.appendChild(renderer.domElement);

// let mixer

// const geometry = new THREE.BoxGeometry();
// const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 })
// const cube = new THREE.Mesh(geometry, material);
// scene.add(cube);

// const points = []
// points.push(new THREE.Vector3(-10, 0, 0));
// points.push(new THREE.Vector3(0, 10, 0));
// points.push(new THREE.Vector3(10, 0, 0));

// const geometry2 = new THREE.BufferGeometry().setFromPoints(points);
// const material2 = new THREE.MeshBasicMaterial({ color: 0x00ff00 })
// const line = new THREE.Line(geometry2, material2);
// scene.add(line)

// camera.position.z = 5

// const loader = new GLTFLoader();
// loader.load('./src/asset/XYZ_threeJS_AMPMan.gltf', function (gltf){
//     const model = gltf.scene;
//     model.position.set( 1, 1, 0 );
//     model.scale.set( 0.05, 0.02, 0.01);
//     scene.add( model );

//     mixer = new THREE.AnimationMixer(model);
//     mixer.clipAction(gltf.animations[0]).play()
    
// }, undefined, function (error){
//     console.error(error);
// })

// function animate(){
//     requestAnimationFrame(animate);
//     cube.rotation.x += 0.01;
//     cube.rotation.y += 0.01;

//     const delta = clock.getDelta();
//     // mixer.update(delta);

//     renderer.render(scene, camera);

// }

// animate()