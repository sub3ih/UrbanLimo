import { Environment, OrbitControls } from '@react-three/drei'
import React, {  useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import * as THREE from 'three';

import { TTerra } from './TTerra';


export const Layer3 = () => {





function Earthh() {
  const airplaneRef = useRef()
  const [color, setColor] = useState(new THREE.Color('red'))

  // Animate rotation and rainbow ambient light
  useFrame(({ clock }) => {
    const t = clock.getElapsedTime()
    if (airplaneRef.current) {
      airplaneRef.current.rotation.y = t * 0.3
      airplaneRef.current.rotation.x = Math.sin(t * 0.2) * 0.05
    }

    // Rainbow light
    const h = (t * 0.1) % 1
    const rainbowColor = new THREE.Color().setHSL(h, 0.8, 0.5)
    setColor(rainbowColor)
  })

  return (
    <>
      <ambientLight intensity={1.1} color={'white'} />
      <directionalLight position={[5, 10, 5]} intensity={0.1} castShadow />
      <pointLight position={[-10, 5, -10]} intensity={0.1} />
      <TTerra ref={airplaneRef} position={[0, 0, 0]} scale={4.3} />
    </> 
  )
}




return (
  <section className="relative min-h-screen flex items-center px-5 md:px-10 overflow-hidden">

    {/* TEXT SIDE */}
    <div className="relative z-10 max-w-6xl">
      <h1  style={{ fontFamily: "Array" }} className="ginger text-4xl md:text-5xl lg:text-6xl font-bold text-yellow mb-4">
       Find Your Nearest Limo
      </h1>

      <h2 style={{ fontFamily: "Array" }} className="gingerr text-[clamp(2.2rem,5.7vw,7.6rem)] font-serif leading-[.95] max-w-[20ch] ">
        Currently Operating In <span style = {{color:'pink'}}>UAE </span>And <span style = {{color:'cyan'}}>Toronto</span>
      </h2>
    </div>


    {/* MODEL SIDE */}
<div
  className="
    ultra-canvas
    absolute right-[5vw] bottom-[8vh]
    w-[70vw] sm:w-[60vw] md:w-[45vw] lg:w-[35vw] xl:w-[30vw] 2xl:w-[25vw]
    max-w-[900px] min-w-[280px]
    aspect-square
  "
>
      <Canvas
        shadows
        camera={{
          position: window.innerWidth < 768 ? [8, 2, 6] : [10, 2, 5],
          fov: window.innerWidth < 768 ? 60 : 50,
        }}
      >
        <OrbitControls enablePan={false} enableZoom={false} />
        <Environment preset="night" />
        <Earthh />
      </Canvas>
    </div>

  </section>
)

}
