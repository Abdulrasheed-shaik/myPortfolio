import { Canvas } from '@react-three/fiber'
import React, { Suspense } from 'react'
import { Environment, OrbitControls, Stage, PerspectiveCamera } from '@react-three/drei'
import { DesktopModel } from './DesktopModel'

const DesktopContainer = () => (
  <Canvas>
    <Suspense fallback={null}>
      <PerspectiveCamera makeDefault position={[-1, 0, 1.8]} zoom={0.8} />
      
      <Stage 
        environment={null}
        intensity={1}
        shadows="contact"
      >
        <DesktopModel />
      </Stage>

      <Environment files="/dikhololo_night_1k.hdr" background={false} />
      <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={2} />
    </Suspense>
  </Canvas>
)

export default DesktopContainer
