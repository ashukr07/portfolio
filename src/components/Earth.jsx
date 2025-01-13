import { useRef, useEffect, useState } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";
import * as THREE from "three";

import { getFresnelMat } from "../assets/getFresnelMat";

const Earth = ({ scale, position }) => {
  const earthGroupRef = useRef();
  const earthMeshRef = useRef();
  const lightsMeshRef = useRef();
  const cloudsMeshRef = useRef();
  const glowMeshRef = useRef();

  const loader = new THREE.TextureLoader();

  // Textures
  const earthTexture = loader.load("/earth/textures/00_earthmap1k.jpg");
  const specularTexture = loader.load("/earth/textures/02_earthspec1k.jpg");
  const bumpTexture = loader.load("/earth/textures/01_earthbump1k.jpg");
  const lightsTexture = loader.load("/earth/textures/03_earthlights1k.jpg");
  const cloudTexture = loader.load("/earth/textures/04_earthcloudmap.jpg");
  const alphaTexture = loader.load("/earth/textures/05_earthcloudmaptrans.jpg");

  // Rotation Animation
  useFrame(() => {
    if (earthMeshRef.current) {
      earthMeshRef.current.rotation.y += 0.002;
      lightsMeshRef.current.rotation.y += 0.002;
      cloudsMeshRef.current.rotation.y += 0.0023;
      glowMeshRef.current.rotation.y += 0.002;
    }
    if (earthGroupRef.current) {
      earthGroupRef.current.rotation.z = (-23.4 * Math.PI) / 180;
    }
  });

  return (
    <group ref={earthGroupRef} scale={scale} position={position}>
      {/* Earth */}
      <mesh ref={earthMeshRef}>
        <icosahedronGeometry args={[1, 12]} />
        <meshPhongMaterial
          map={earthTexture}
          specularMap={specularTexture}
          bumpMap={bumpTexture}
          bumpScale={0.04}
        />
      </mesh>
      {/* City Lights */}
      <mesh ref={lightsMeshRef}>
        <icosahedronGeometry args={[1, 12]} />
        <meshBasicMaterial
          map={lightsTexture}
          blending={THREE.AdditiveBlending}
          transparent
        />
      </mesh>
      {/* Clouds */}
      <mesh ref={cloudsMeshRef} scale={[1.003, 1.003, 1.003]}>
        <icosahedronGeometry args={[1, 12]} />
        <meshStandardMaterial
          map={cloudTexture}
          alphaMap={alphaTexture}
          transparent
          opacity={0.8}
          blending={THREE.AdditiveBlending}
        />
      </mesh>
      {/* Fresnel Glow */}
      <mesh ref={glowMeshRef} scale={[1.01, 1.01, 1.01]}>
        <icosahedronGeometry args={[1, 12]} />
        <primitive attach="material" object={getFresnelMat()} />
      </mesh>
    </group>
  );
};

const Scene = ({ scale, position }) => {
  const { camera, gl } = useThree();

  useEffect(() => {
    camera.position.z = 5; // Adjust camera position dynamically
    gl.toneMapping = THREE.ACESFilmicToneMapping;
    gl.outputColorSpace = THREE.LinearSRGBColorSpace;
  }, [camera, gl]);

  return (
    <>
      <OrbitControls 
        enableZoom={false} 
        enablePan={true} 
        enableRotate={true} // Allow rotation
        
      />
      <ambientLight intensity={0.5} />
      <directionalLight color={0xffffff} intensity={2.0} position={[-2, 0.5, 1.5]} />
      <Earth scale={scale} position={position} />
      <Stars radius={100} depth={50} count={2000} factor={4} saturation={0} fade />
    </>
  );
};

const EarthCanvas = () => {
  const [scale, setScale] = useState([1.5, 1.5, 1.5]);
  const [position, setPosition] = useState([0, 0, 0]);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;

      // Adjust scale and position based on screen size
      if (width < 768) {
        setScale([1, 1, 1]);
        setPosition([0, 0.5, 0]); // Move the Earth upwards on mobile
      } else if (width >= 768 && width < 1200) {
        setScale([1.5, 1.5, 1.3]);
        setPosition([-3, 0.3, -1.5]);
      } else {
        setScale([2, 2, 1.5]);
        setPosition([-4, 0.3, -1.8]); // Center Earth for large screens
      }
    };

    handleResize(); // Check initially
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <Canvas
      camera={{ fov: 75, near: 0.1, far: 1000 }}
      style={{ width: "100vw", height: "100vh", position: "absolute", zIndex: -1 }}
    >
      <Scene scale={scale} position={position} />
    </Canvas>
  );
};

export default EarthCanvas;
