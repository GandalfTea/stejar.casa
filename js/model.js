import * as THREE from "../node_modules/three/build/three.module.js"

import { OBJLoader } from '../node_modules/three/examples/jsm/loaders/OBJLoader.js';


let camera, scene, renderer;
let geometry, material, mesh;

init();

function init() {

		    camera = new THREE.PerspectiveCamera( 70, 1, 0.01, 10 );
		    camera.position.z = 1;

		    scene = new THREE.Scene();

		    geometry = new THREE.BoxGeometry( 0.2, 0.2, 0.2 );
		    material = new THREE.MeshNormalMaterial();

			const loader = new THREE.OBJLoader();
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

		    //mesh = new THREE.Mesh( geometry, material );
		    //scene.add( mesh );

		    renderer = new THREE.WebGLRenderer( { canvas: document.getElementById("model")});
		    renderer.setSize(700, 700);
		    renderer.setAnimationLoop( animation );

}

function animation( time ) {

		    //mesh.rotation.x = time / 2000;
		    //mesh.rotation.y = time / 1000;

		    renderer.render( scene, camera );

}
