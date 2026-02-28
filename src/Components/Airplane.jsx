import React from 'react'
import { useGLTF, useTexture } from '@react-three/drei'

export function Airplane(props) {
  const { nodes, materials } = useGLTF('/Models/airplane.glb')
  {/* const texture = useTexture('/Models/my-texture.png')  // <- inside component */}

  return (
    <group {...props} dispose={null}>
      <group scale={0.01}>
        <group rotation={[-Math.PI / 2, 0, 0]} scale={250}>
          <group position={[-0.788, -0.004, -0.002]}>
            <mesh geometry={nodes.Cube001_metal_0.geometry} material={materials.metal} />
            <mesh geometry={nodes.Cube001_dark_0.geometry} material={materials.dark} />
          </group>
          <group position={[-0.046, -0.052, 0.001]}>
            <mesh geometry={nodes.Cube002_metal_0.geometry} material={materials.metal} />
            <mesh geometry={nodes.Cube002_dark_0.geometry} material={materials.dark} />
          </group>
          <group position={[-0.046, 0.052, 0.001]}>
            <mesh geometry={nodes.Cube003_metal_0.geometry} material={materials.metal} />
            <mesh geometry={nodes.Cube003_dark_0.geometry} material={materials.dark} />
          </group>
          <mesh geometry={nodes.Cube_blue_0.geometry} material={materials.blue} />
          <mesh geometry={nodes.Cube_white_0.geometry} material={materials.white} />
          <mesh geometry={nodes.Cube_dark_0.geometry} material={materials.dark} />

          {/* Apply your texture here */}
          <mesh geometry={nodes.Cube_metal_0.geometry}>
            <meshBasicMaterial  />
          </mesh>

          <mesh geometry={nodes.Cube_window_0.geometry} material={materials.window} />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/Models/airplane.glb')
