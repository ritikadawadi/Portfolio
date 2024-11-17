import {useState,useEffect, Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import Loader from '../components/Loader'
import Island from '../models/island'
import Sky from '../models/sky'
import Bird from '../models/bird'
import Plane from '../models/plane'
import Fly from '../models/fly'
import HomeInfo from '../components/homeinfo'


const Home = () => {
  const [currentStage, setCurrentStage] = useState(1);
  const [isRotating, setIsRotating] = useState(false);
  

  const adjustIslandForScreenSize = () => 
  {
    let screenScale = null;
    let screenPosition=[0,-6.5,-43];
    let rotation = [0.1,4.7,0];

    if (window.innerWidth<768)
    {
      screenScale=[0.9, 0.9, 0.9];
    }
    else
    {
      screenScale=[0.99, 0.99, 0.99];
    }
    return [screenScale, screenPosition, rotation];
  }

  const adjustplaneForScreenSize = () => 
  {
    let screenScale,screenPosition;
    
    if (window.innerWidth<768)
    {
      screenScale=[1.5, 1.5, 1.5];
      screenPosition=[0,-1,0]
    }
    else
    {
      screenScale=[3,3,3];
      screenPosition=[0,-4,-4]
    }
    return [screenScale, screenPosition];
  }



  const [islandScale, islandPosition, islandRotation] = adjustIslandForScreenSize();
  const [planeScale, planePosition] = adjustplaneForScreenSize();



  return (
   <section className='w-full h-screen relative'>

      <div className='absolute top-28 left-0 right-0 z-10 flex items-center justify-center'>
        {currentStage && <HomeInfo currentStage={currentStage} />}
      </div>
   
    <Canvas className={`w-full h-screen bg-transparent $isRotating ? 'cursor-grabbing: cursor-grab`}
      camera={{near:0.1, far:1000}}>

       <Suspense fallback={<Loader/>}>
       <directionalLight position={[1,1,1]} intensity={3.2}/>
        <ambientLight intensity={0.2}/>
        <hemisphereLight skyColor="#b1e1ff" intensity={0.5}/>
       </Suspense>

      <Fly/>
      <Bird/>
       <Sky 
       isRotating={isRotating}/>

       <Island 
       position = {islandPosition}
       scale ={islandScale}
       rotation = {islandRotation}
       isRotating= {isRotating}
       setIsRotating={setIsRotating}
       setCurrentStage= {setCurrentStage}
       />

       <Plane
       isRotating = {isRotating}
       position= {planePosition}
       scale= {planeScale}
       rotation={[0,20,0]}/>

    </Canvas>

   </section>
  )
}

export default Home
