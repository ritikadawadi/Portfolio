import React from 'react';
import { Html, useProgress } from '@react-three/drei';

const Loader = () => {
  const { progress } = useProgress();

  return (
    <Html center>
      <div className="flex flex-col justify-center items-center">
        <div className="w-20 h-20 border-2 border-opacity-20
            border-purple-500 border-t-purple-500 rounded-full animate-spin"></div>
      </div>
    </Html>
  );
};

export default Loader;
