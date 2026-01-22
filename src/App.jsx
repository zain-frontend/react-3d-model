import { useState, Suspense } from 'react'
import './App.css'
import { Canvas } from '@react-three/fiber'
import { Environment, OrbitControls } from '@react-three/drei'
import Earth from '../public/Earth'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Canvas>
        <ambientLight intensity={1.5} />
        <Suspense fallback={null}>
          <Earth />
          <OrbitControls />
        </Suspense>
        <Environment preset="sunset" />
      </Canvas>
    </>
  )
}

export default App
