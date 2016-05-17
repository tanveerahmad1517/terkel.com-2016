import THREE from 'three';
require('imports?THREE=>{}!exports?THREE.CSS3DRenderer!./libs/renderers/CSS3DRenderer');
// import CSS3DRenderer from './libs/renderers/CSS3DRenderer2';

// require('./libs/renderers/CSS3DRenderer')(THREE);

// THREE.CSS3DRenderer = require();
// require('imports?THREE=three!exports?THREE.OrbitControls!../../node_modules\/three\/examples\/js\/controls\/OrbitControls');
// import CSS3DRenderer from './libs/renderers/CSS3DRenderer';
// require('./libs/renderers/CSS3DRenderer');

export default class CSS3D {

  constructor (camera, options = {}) {
    let defaultOptions = {
      'width': options.width || window.innerWidth,
      'height': options.height || window.innerHeight,
      'container': options.container || document.body,
      'active': options.active || true
    };

    // options
    this.options = defaultOptions;
    this.camera = camera; // this should be the same instance as the webgl
    this.scene = null;
    this.renderer = null;
    this.container = defaultOptions.container;
    this.active = defaultOptions.active;
    this.objects = []; // This is the Dom objects
  }

  init () {
    this.scene = new THREE.Scene();

    // Add objects
    for (let object of this.objects) {
      this.scene.add(object.getMesh());
    }

    // console.log(THREE.CSS3DRenderer);

    console.log(this.options);
    console.log(this.options.width);

    this.renderer = new THREE.CSS3DRenderer();
    this.renderer.setSize(this.options.width, this.options.height);
    this.renderer.domElement.style.position = 'absolute';
    this.renderer.domElement.style.top = 0;

    this.container.appendChild(this.renderer.domElement);

    this.animate();
  }

  animate () {
    // If active - render loop here
    this.render();
  }

  addObject (object) {}

  addObjectToScene (object) {}

  render () {
    this.renderer.render(this.scene, this.camera);
  }

  getRenderer () {
    return this.renderer;
  }

  getObjects () {
    return this.objects;
  }

  getScene () {
    return this.scene;
  }

  onWindowResize (width, height) {
    this.options.width = width;
    this.options.height = height;
  }
};