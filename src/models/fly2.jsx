import React, { useRef, useEffect } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

import flyScene from "../assets/3d/butterflies.glb";

const Flyy = () => {
  const { scene, animations } = useGLTF(flyScene); // Load the GLTF model
  const birdRef = useRef(); // Ref for the butterfly object
  const { actions } = useAnimations(animations, birdRef); // Access animations

  const timeRef = useRef(0); // Reference for time

  // Ensure the model is fully loaded before rendering
  if (!scene || !animations) {
    console.warn("GLTF model or animations are not yet loaded.");
    return null;
  }

  useEffect(() => {
    if (actions && actions["Take 001"]) {
      actions["Take 001"].play(); // Play animation if available
    } else {
      console.warn('Animation "Take 001" not found');
    }
  }, [actions]);

  useFrame((_, delta) => {
    timeRef.current += delta; // Increment time

    const speed = 0.63;
    const amplitudeX = 10;
    const amplitudeY = 3;

    if (birdRef.current) {
      birdRef.current.position.x = amplitudeX * Math.sin(timeRef.current * speed); // Horizontal motion
      birdRef.current.position.y = amplitudeY * Math.cos(timeRef.current * speed); // Vertical motion
    }
  });

  return (
    <primitive
      object={scene.children[0]} // Render the first child of the scene
      scale={[0.007, 0.007, 0.008]} // Adjust scale
      rotation={[Math.PI / 2, Math.PI, -2]} // Adjust rotation
      ref={birdRef}
    />
  );
};

export default Flyy;
