import { Component, ElementRef, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as THREE from 'three';
import { GLTFLoader, OrbitControls, RectAreaLightHelper } from 'three-stdlib';

@Component({
  selector: 'woz-render',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './render.component.html',
  styleUrls: ['./render.component.scss'],
})
export class RenderComponent implements OnInit {
  constructor(private elRef: ElementRef) {}

  ngOnInit(): void {
    this.initThreeJS();
  }

  initThreeJS(): void {
    const container =
      this.elRef.nativeElement.querySelector('#three-container');

    // Configuración básica de Three.js
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      40,
      container.clientWidth / container.clientHeight,
      0.1,
      1000
    );
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setClearColor(0xffffff);
    renderer.shadowMap.enabled = true; // Habilitar sombras
    renderer.shadowMap.type = THREE.PCFSoftShadowMap; // Tipo de sombra
    container.appendChild(renderer.domElement);

    camera.position.set(12, 15, 15);
    // Añadir luces a la escena
/*     const light = new THREE.HemisphereLight(0xffffff, 0x444444, 0.3);
    light.position.set(0, 20, 0);
    scene.add(light);

    const dirLight = new THREE.DirectionalLight(0xffffff);
    dirLight.position.set(0, 20, 10);
    dirLight.castShadow = true; // Habilitar sombras para la luz direccional
    scene.add(dirLight);

    // Configuración de sombras
    dirLight.shadow.mapSize.width = 4096;
    dirLight.shadow.mapSize.height = 4096;
    dirLight.shadow.camera.near = 0.5;
    dirLight.shadow.camera.far = 50; */

    // Añadir luz puntual (SpotLight)
/*     const spotLight = new THREE.SpotLight(0xFF0000, 1, 10, 12, 1, 2); */
    /* spotLight.position.setX(3)
    spotLight.position.setY(3)
    spotLight.position.setZ(3) */
/*     spotLight.position.set(-1,4,-1)
    spotLight.shadow.mapSize.width = 600;
    spotLight.shadow.mapSize.height = 600;
    spotLight.shadow.camera.near = 0;
    spotLight.shadow.camera.far = 2;
    scene.add(spotLight); */
/*
    const rectLightHelper = new THREE.HemisphereLightHelper(light, 23, 'blue');
    spotLight.add(rectLightHelper); */

/*     const width = 10;
    const height = 10;
    const intensity = 1;

    const rectLightLeft = new THREE.RectAreaLight(
      0xFFBB7B,
      intensity,
      width,
      height
    );
    rectLightLeft.position.set(-6, 6.5, 12);
    rectLightLeft.lookAt(0, 0, 0);
    scene.add(rectLightLeft);

    const rectLightRigth = new THREE.RectAreaLight(
      0x87A0FF,
      intensity,
      width,
      height
    );
    rectLightRigth.position.set(6, 3.5, -12);
    rectLightRigth.lookAt(0, 0, 0);
    scene.add(rectLightRigth); */

    THREE.ColorManagement.enabled = true;
    renderer.outputColorSpace = THREE.SRGBColorSpace;

    // Plano de suelo para recibir sombras
    const planeGeometry = new THREE.PlaneGeometry(2000, 2000);
    const planeMaterial = new THREE.ShadowMaterial({ color: 'black', opacity: 0.2 });
    const plane = new THREE.Mesh(planeGeometry, planeMaterial);
    plane.rotation.x = -Math.PI / 2;
    plane.position.y = -1;
    plane.receiveShadow = true;
    scene.add(plane);

    // Añadir controles de órbita
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true; // Habilitar amortiguación (suaviza los movimientos)
    controls.dampingFactor = 0.25;
    controls.screenSpacePanning = false;
    controls.minDistance = 1;
    controls.maxDistance = 500;

    // Cargar el modelo glTF
    const loader = new GLTFLoader();
    loader.load(
      'assets/test2.glb',
      (gltf) => {
        gltf.scene.traverse((child) => {
          if ((child as THREE.Mesh).isMesh) {
            const mesh = child as THREE.Mesh;
            mesh.castShadow = true;
            mesh.receiveShadow = true;
          }
        });
        scene.add(gltf.scene);
      },
      undefined,
      (error) => {
        console.error(error);
      }
    );

    // Función de animación
    const animate = () => {
      requestAnimationFrame(animate);
      controls.update(); // Actualizar los controles en cada frame
      renderer.render(scene, camera);
    };
    animate();

    // Ajustar el tamaño del renderizador cuando cambia el tamaño de la ventana
    window.addEventListener('resize', () => {
      camera.aspect = container.clientWidth / container.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(container.clientWidth, container.clientHeight);
    });
  }
}
