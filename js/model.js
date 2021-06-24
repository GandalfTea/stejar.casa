import * as THREE from "../node_modules/three/build/three.module.js"
//import * as THREE from 'https://unpkg.com/three@0.129.0/build/three.js'

import { OBJLoader } from '../node_modules/three/examples/jsm/loaders/OBJLoader.js';
//import { OBJLoader } from 'https://unpkg.com/three@0.129.0/examples/jsm/loaders/OBJLoader.js'




let camera, scene, renderer;
let geometry, material, mesh;

init();

function init() {

		    camera = new THREE.PerspectiveCamera( 70, 1, 0.01, 10 );
		    camera.position.z = 1;

		    scene = new THREE.Scene();

			const loader = new OBJLoader();
			loader.load('./meta/3dmodel/teren.obj',
						function(object) {
							scene.add(object);
						},
						function(xhr){
							console.log((xhr.loaded / xhr.total * 100) + '% loaded');
						},
						function(error) {
							console.log('An error has occured');
						});

			const color = 0xFFFFFF;
			const intensity = 1;
			const light = new THREE.AmbientLight(color, intensity);
			scene.add(light);


		    renderer = new THREE.WebGLRenderer( { canvas: document.getElementById("model")});
		    renderer.setSize(700, 700);
		    renderer.setAnimationLoop( animation );

}

function animation( time ) {

		    //mesh.rotation.x = time / 2000;
		    //mesh.rotation.y = time / 1000;

		    renderer.render( scene, camera );

}
