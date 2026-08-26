'use client'

import { Canvas, useFrame } from '@react-three/fiber'
import { Float, OrbitControls, Text } from '@react-three/drei'
import { useRef } from 'react'
import type { Mesh } from 'three'

function PinkWheel() {
  const wheel = useRef<Mesh>(null)
  useFrame((_, delta) => { if (wheel.current) wheel.current.rotation.z += delta * 0.9 })
  return <mesh ref={wheel} rotation={[0, 0, 0.25]}>
    <torusGeometry args={[1.35, 0.14, 16, 48]} />
    <meshStandardMaterial color="#ec4899" emissive="#831843" emissiveIntensity={0.7} metalness={0.5} roughness={0.25} />
  </mesh>
}

export default function IntroScene({ onEnter }: { onEnter: () => void }) {
  return <section className="intro-scene" aria-label="Introduction">
    <div className="intro-copy"><p className="eyebrow"><span className="status-dot" /> Portfolio / 2026</p><h1>Mani Sai<br /><em>Sudheer.</em></h1><p>Computer Science Engineering student building practical systems at the intersection of software, embedded hardware, and human impact.</p><button className="primary-button" onClick={onEnter}>Enter portfolio <span aria-hidden="true">↗</span></button></div>
    <div className="intro-canvas"><Canvas camera={{ position: [0, 0, 5], fov: 38 }} dpr={[1, 1.5]}><ambientLight intensity={1.5} /><pointLight position={[3, 3, 4]} intensity={20} color="#f9a8d4" /><Float speed={1.4} rotationIntensity={0.35} floatIntensity={0.5}><PinkWheel /><Text position={[0, -0.1, 0]} fontSize={0.34} color="#f8fafc" anchorX="center" anchorY="middle">MSS</Text></Float><OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.4} /></Canvas></div>
    <span className="intro-skip">Scroll to explore ↓</span>
  </section>
}
