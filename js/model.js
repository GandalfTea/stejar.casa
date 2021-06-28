import * as THREE from "../node_modules/three/build/three.module.js"
//import * as THREE from 'https://unpkg.com/three@0.129.0/build/three.js'

import { OBJLoader } from '../node_modules/three/examples/jsm/loaders/OBJLoader.js';
import { MTLLoader } from '../node_modules/three/examples/jsm/loaders/MTLLoader.js';

import { OrbitControls } from '../node_modules/three/examples/jsm/controls/OrbitControls.js';
//import { OBJLoader } from 'https://unpkg.com/three@0.129.0/examples/jsm/loaders/OBJLoader.js'



let camera, scene, renderer;

camera = new THREE.PerspectiveCamera( 70, 1.8, 0.01, 1000 );

scene = new THREE.Scene();

var normal_material = new THREE.MeshBasicMaterial( {color: 0xFFFFFF} );

// the model
const loader = new OBJLoader();
const material_loader = new MTLLoader();

material_loader.load('./meta/3dmodel/teren.mtl', function(materialCreator) {
		loader.setMaterials(materialCreator);
		loader.load('./meta/3dmodel/teren.obj',
				function(model) {
					var box = new THREE.Box3().setFromObject( model )
					var center = new THREE.Vector3();
					box.getCenter( center );
					model.position.sub( center );

					scene.add(model);
				},
				function(xhr){
					console.log((xhr.loaded / xhr.total * 100) + '% loaded');
				},
				function(error) {
					console.log('An error has occured:' + error.message);
				});
})


// Light
var ambient = new THREE.AmbientLight( 0xFFFFFF );
scene.add( ambient );

var directionalLight = new THREE.DirectionalLight( 0x444444 );
directionalLight.position.set( 1, 0, 0 ).normalize();
scene.add( directionalLight );

// Debu Cube
const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
const cube = new THREE.Mesh( geometry, material );
//scene.add( cube );


renderer = new THREE.WebGLRenderer( { canvas: document.getElementById("model"), alpha: true});
renderer.setSize(1000, 600);

const controls = new OrbitControls( camera, renderer.domElement );
camera.position.z = 60;


function animate() {		
	requestAnimationFrame(animate);

	cube.rotation.x += 0.01;
	cube.rotation.y += 0.01;

	controls.update();
	renderer.render( scene, camera );
};

animate();
