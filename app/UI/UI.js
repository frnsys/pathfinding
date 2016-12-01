import _ from 'underscore';
import * as THREE from 'three';
import PropsUI from './Props';

class UI {
  constructor(world) {
    this.world = world;
    this.scene = world.scene;
    this.mouse = new THREE.Vector2();
    this.raycaster = new THREE.Raycaster();
    this.selected = null;
    this.floor = null;
    this.propsUI = null;

    this.scene.renderer.domElement.addEventListener('mousedown', this.onMouseDown.bind(this), false);
    this.scene.renderer.domElement.addEventListener('touchstart', this.onTouchStart.bind(this), false);
    this.scene.renderer.domElement.addEventListener('mousemove', this.onMouseMove.bind(this), false);
    document.addEventListener('keydown', this.onKeyDown.bind(this), false);
  }

  updateMouse(ev) {
    // adjust browser mouse position for three.js scene
    this.mouse.x = (ev.clientX/this.scene.renderer.domElement.clientWidth) * 2 - 1;
    this.mouse.y = -(ev.clientY/this.scene.renderer.domElement.clientHeight) * 2 + 1;
  }

  onTouchStart(ev) {
    ev.preventDefault();
    ev.clientX = ev.touches[0].clientX;
    ev.clientY = ev.touches[0].clientY;
    this.onMouseDown(ev);
  }

  onMouseDown(ev) {
    ev.preventDefault();
    this.updateMouse(ev);
    this.raycaster.setFromCamera(this.mouse, this.scene.camera);

    var intersects = this.raycaster.intersectObjects(this.scene.selectables);
    if (intersects.length > 0) {
      var obj = intersects[0].object,
          pos = intersects[0].point;
      this.onSelect(obj, pos, ev);
    }
  }

  objectGridPositions(obj) {
    // convert an object's world position
    // to a grid position, accounting for offset
    var box = obj.obj.bbox,
        offset = {
          x: Math.floor((box.width-this.world.cellSize)/2),
          y: Math.floor((box.depth-this.world.cellSize)/2)
        },
        pos = this.floor.posToCoord(obj.position.x + offset.x, obj.position.y + offset.y);
    return _.chain(_.range(box.width/this.world.cellSize)).map(i => {
      return _.map(_.range(box.depth/this.world.cellSize), j => {
        return {
          x: pos.x - i,
          y: pos.y - j
        };
      });
    }).flatten().value();
  }

  onSelect(obj, pos, ev) {
    if (ev.buttons === 1) {
      // select floor
      if (obj.kind === 'floor' && !this.selected) {
        this.floor = obj.obj;

        // highlight selected floor
        _.each(this.world.surfaces, s => {
          s.mesh.material.opacity = 0.1;
        });
        this.floor.mesh.material.opacity = 0.6;

      // place object
      } else if (this.selected) {
        this.scene.selectables.push(this.selected);
        _.each(
          this.objectGridPositions(this.selected),
          pos => {
            this.floor.setObstacle(pos.x, pos.y)
          });
        this.selected = null;

      // pick up object
      } else if (obj.kind === 'obstacle') {
        this.selected = obj;
        _.each(
          this.objectGridPositions(obj),
          pos => this.floor.removeObstacle(pos.x, pos.y));
        if (this.propsUI) {
          this.propsUI.destroy();
        }
        this.propsUI = new PropsUI(obj.obj.props);
      }
    } else if (ev.buttons === 2) {
      switch (obj.kind) {
        // remove object
        case 'obstacle':
          _.each(
            this.objectGridPositions(obj),
            pos => this.world.floor.removeObstacle(pos.x, pos.y));
          this.world.floor.mesh.remove(obj);
          break;
      }
    }
  }

  onMouseMove(ev) {
    if (this.selected && this.floor) {
      this.updateMouse(ev);
      this.raycaster.setFromCamera(this.mouse, this.scene.camera);

      var intersects = this.raycaster.intersectObject(this.floor.mesh);
      if (intersects.length > 0) {
        var pos = intersects[0].point;
        pos = this.floor.mesh.worldToLocal(pos);
        pos = this.floor.posToCoord(pos.x, pos.y);
        pos = this.floor.coordToPos(pos.x, pos.y);
        var box = this.selected.obj.bbox,
            offset = {
              x: (box.width - this.world.cellSize)/2,
              y: (box.depth - this.world.cellSize)/2
            };
        this.selected.position.set(
          pos.x - offset.x,
          pos.y - offset.y,
          box.height/2)
      }
    }
  }

  onKeyDown(ev) {
    switch (ev.keyCode) {
      case 82: // r
        if (this.selected) {
          this.selected.rotation.z += Math.PI/2;
        }
        break;
    }
  }
}

export default UI;