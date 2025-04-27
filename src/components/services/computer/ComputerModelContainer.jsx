import { Canvas } from '@react-three/fiber'
import React, { Suspense } from 'react'
import { ComputerModel } from './ComputerModel'
import { Environment, OrbitControls, Stage, PerspectiveCamera } from '@react-three/drei'

const ComputerModelContainer = () => (
  <Canvas>
    <Suspense fallback={null}>
      {/* Custom camera */}
      <PerspectiveCamera makeDefault position={[-1, 0, 1.8]} zoom={0.8} />
      
      <Stage 
        environment={null}
        intensity={0.5}
        shadows="contact"
      >
        <ComputerModel />
      </Stage>

      <Environment files="/dikhololo_night_1k.hdr" background={false} />
      <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={2} />
    </Suspense>
  </Canvas>
)

export default ComputerModelContainer
