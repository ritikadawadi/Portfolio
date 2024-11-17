import React, { useRef, useEffect } from 'react';
import { useGLTF, useAnimations } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';

import birdScene from '../assets/3d/butterflies.glb';

const Fly = () => {
  const { scene, animations } = useGLTF(birdScene);
  const birdRef = useRef();
  const { actions } = useAnimations(animations, birdRef);

  const timeRef = useRef(0);

  useEffect(() => {
    console.log(actions); // Log available animations
    if (actions && actions['Take 001']) {
      actions['Take 001'].play();
    } else {
      console.warn('Animation "Take 001" not found');
    }
  }, [actions]);

  useFrame((_, delta) => {
    timeRef.current += delta; // Increment time

    // Define bounds for motion near the right side
    const initialX = -4; // X-position closer to the right edge
    const initialY = 3.5; // Y-position higher on the screen
    const amplitude = 0.25; // Restrict Y-axis sine wave motion
    const xAmplitude = 0.16; // Restrict X-axis sine wave motion
    const zLimit = 0.1; // Minimal Z-axis motion

    // Constrain motion in a small region near the right side
    birdRef.current.position.x = initialX + xAmplitude * Math.cos(timeRef.current*0.4); // Small oscillation on X
    birdRef.current.position.y = initialY + amplitude * Math.cos(timeRef.current); // Oscillate on Y
    birdRef.current.position.z = zLimit * Math.sin(timeRef.current); // Slight Z-axis motion
  });

  return (
    <primitive
      object={scene.children[0]} 
      position={[5.5, 3.5, 0]} // Position: closer to the right side
      scale={[0.002, 0.002, 0.002]} // Make the butterflies smaller
      rotation={[Math.PI / 2, Math.PI, -2]} // Adjust rotation if needed
      ref={birdRef}
    />
  );
};

export default Fly;
