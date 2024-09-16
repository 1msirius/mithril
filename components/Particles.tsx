"use client"

import { useEffect, useRef } from 'react';
import * as THREE from 'three';

const Particles = () => {
  const mountRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const mount = mountRef.current; // Assign the current ref to a variable
    // Only proceed if mount is available
    if (mount) {
      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(
        75,
        window.innerWidth / window.innerHeight,
        0.1,
        1000
      );
      camera.position.z = 5;

      const renderer = new THREE.WebGLRenderer();
      renderer.setSize(window.innerWidth, window.innerHeight);
      mount.appendChild(renderer.domElement);

      const particleCount = 1000;
      const particlesGeometry = new THREE.BufferGeometry();
      const positions = new Float32Array(particleCount * 3);

      for (let i = 0; i < particleCount * 3; i++) {
        positions[i] = (Math.random() - 0.5) * 10;
      }

      particlesGeometry.setAttribute(
        'position',
        new THREE.BufferAttribute(positions, 3)
      );

      const particleMaterial = new THREE.PointsMaterial({
        color: 0x888888,
        size: 0.05,
      });

      const particleSystem = new THREE.Points(
        particlesGeometry,
        particleMaterial
      );
      scene.add(particleSystem);

      const animate = () => {
        requestAnimationFrame(animate);
        particleSystem.rotation.y += 0.001;
        renderer.render(scene, camera);
      };

      animate();

      // Cleanup function using the variable instead of ref directly
      return () => {
        if (mount) mount.removeChild(renderer.domElement);
      };
    }
  }, []);

  return <div ref={mountRef}></div>;
};

export default Particles;
