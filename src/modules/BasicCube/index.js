import BasicCubeGeometry from './BasicCubeGeometry';
import BasicCubeMaterial from './BasicCubeMaterial';

/**
 * Cube class
 */
class BasicCube extends THREE.Mesh {

  /**
   * Constructor function
   */
  constructor () {
    super(new BasicCubeGeometry(), new BasicCubeMaterial({ wireframe: true }));
  }

  /**
   * Update function
   * @param {number} time Time
   */
  update (time) {
    this.material.update(time);
  }
};

export default BasicCube;