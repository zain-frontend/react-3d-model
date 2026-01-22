import { Suspense, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Environment, OrbitControls, Stars, Float } from '@react-three/drei'
import Earth from '../../public/Earth'

function AnimatedEarth({ autoRotate, rotationSpeed }) {
  const earthRef = useRef()
  
  useFrame(() => {
    if (earthRef.current && autoRotate) {
      earthRef.current.rotation.y += rotationSpeed
    }
  })
  
  return (
    <Float speed={1.5} rotationIntensity={0.3} floatIntensity={0.5}>
      <Earth ref={earthRef} />
    </Float>
  )
}

function EarthCanvas({ controlsRef, autoRotate = true, rotationSpeed = 0.002 }) {
  return (
    <div className="canvas-container">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 50 }}
        dpr={[1, 2]}
      >
        <color attach="background" args={['#000510']} />
        <fog attach="fog" args={['#000510', 5, 15]} />
        
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={2} />
        <pointLight position={[-10, -10, -5]} intensity={1} color="#4a90e2" />
        
        <Suspense fallback={null}>
          <AnimatedEarth autoRotate={autoRotate} rotationSpeed={rotationSpeed} />
          <Stars radius={300} depth={60} count={20000} factor={7} saturation={0} fade speed={1} />
        </Suspense>
        
        <OrbitControls 
          ref={controlsRef}
          enableZoom={true}
          enablePan={false}
          minDistance={2}
          maxDistance={10}
          autoRotate={false}
          autoRotateSpeed={0.5}
          zoomSpeed={0.5}
        />
        
        <Environment preset="night" />
      </Canvas>
    </div>
  )
}

export default EarthCanvas
