import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import {
  Decal,
  Float,
  OrbitControls,
  Preload,
  useTexture,
} from '@react-three/drei';
import Loader from '../Loader';

const Ball = (props) => {
  const [decal] = useTexture([props.imgUrl]);

  return (
    <Float speed={3} rotationIntensity={1.5} floatIntensity={3}>
      <ambientLight intensity={0.3} />
      <directionalLight intensity={1} position={[2, 2, 2]} />
      <pointLight intensity={0.5} position={[-2, 2, -2]} />
      <mesh castShadow receiveShadow scale={2.75}>
        {/* Using a planeGeometry for a flat square */}
        <planeGeometry args={[3, 3]} /> 
        <meshStandardMaterial
          color="#45EFFF" // Changed color to orange
          roughness={0.3} // Adjusted roughness
          metalness={0.2} // Added metallic effect
          flatShading
        />
        <Decal
          position={[0, 0, 0.1]} // Adjust decal position for flat surface
          rotation={[0, 0, 0]} // No rotation needed on a flat surface
          flatShading
          map={decal}
        />
      </mesh>
    </Float>
  );
};

const BallCanvas = ({ icon }) => {
  return (
    <Canvas
      frameloop="always"
      gl={{ preserveDrawingBuffer: true, antialias: true }}
      // Changed background color to white
    >
      <Suspense fallback={<Loader />}>
        <OrbitControls enableZoom={false} position0={0} />
        <Ball imgUrl={icon} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default BallCanvas;
