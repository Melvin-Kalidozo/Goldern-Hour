"use client";

import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { pointsInner, pointsOuter } from "./utils";

const ParticleRing = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    // Scene, Camera, Renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    const renderer = new THREE.WebGLRenderer();

    renderer.setSize(window.innerWidth, window.innerHeight);
    mountRef.current.appendChild(renderer.domElement);

    // Lights
    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(10, 10, 10);
    scene.add(directionalLight);

    const pointLight = new THREE.PointLight(0xffffff, 1);
    pointLight.position.set(-10, -10, -10);
    scene.add(pointLight);

    // Particles
    const group = new THREE.Group();

    const createPoints = (points) => {
      points.forEach((point) => {
        const geometry = new THREE.SphereGeometry(0.1, 10, 10);
        const material = new THREE.MeshStandardMaterial({
          emissive: new THREE.Color(point.color),
          emissiveIntensity: 0.5,
          roughness: 0.5,
          color: point.color,
        });
        const sphere = new THREE.Mesh(geometry, material);
        sphere.position.set(...point.position);
        group.add(sphere);
      });
    };

    createPoints(pointsInner);
    createPoints(pointsOuter);

    scene.add(group);

    camera.position.set(10, -7.5, -5);

    // Animation Loop
    const animate = () => {
      requestAnimationFrame(animate);
      group.rotation.z += 0.005;
      renderer.render(scene, camera);
    };

    animate();

    // Cleanup
    return () => {
      while (mountRef.current.firstChild) {
        mountRef.current.removeChild(mountRef.current.firstChild);
      }
    };
  }, []);

  return (
    <div className="relative">
      <div ref={mountRef} className="dark:bg-slate-900"></div>
      <h1 className="absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] text-slate-200 font-medium text-2xl md:text-5xl pointer-events-none">
        Drag & Zoom
      </h1>
    </div>
  );
};

export default ParticleRing;
