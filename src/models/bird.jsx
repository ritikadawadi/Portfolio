import React, { useRef, useEffect } from 'react';
import { useGLTF, useAnimations, useFBO } from '@react-three/drei';
import {AxesHelper} from 'three';

import birdScene from '../assets/3d/bird.glb';
import { useFrame } from '@react-three/fiber';

const Bird = () => {
  const { scene, animations } = useGLTF(birdScene);
  const birdRef = useRef();
  const { actions } = useAnimations(animations, birdRef);

  const timeRef = useRef(0);

  useEffect(() => {
    console.log(actions); // Log available animations
    if (actions && actions['fly1_bird']) {
      actions['fly1_bird'].play();
    } else {
      console.warn('Animation "fly1_bird" not found');
    }
    
  }, [actions]);


  useFrame((_, delta) => {
    timeRef.current += delta; // Increment time
    const initialY = 1;

    // Adjust the bird's position based on sine wave
    const amplitude = 1.5; // Height of the sine wave
    const frequency = 0.8; // Speed of the sine wave
    const xSpeed = 0.4; // Speed of horizontal movement

    birdRef.current.position.x -= xSpeed * delta; // Move forward (negative X direction)
    birdRef.current.position.y = initialY + amplitude * Math.sin(frequency * timeRef.current); // Add initial Y offset wave motion

    // Optional: Reset position to keep the bird within bounds
    if (birdRef.current.position.x < -7) {
      birdRef.current.position.x = 6; // Reset to the right side of the screen
    }
  });


  return (
    <primitive
      object={scene.children[0]} 
      position={[-3, 0, 0]}
      scale={[0.25, 0.28, 0.27]}
      rotation ={[Math.PI/2, -Math.PI,1.9]}
      ref={birdRef}
    />
  );
};

export default Bird;
