'use client'

import { Canvas, useFrame } from '@react-three/fiber'
import { Float, OrbitControls, Text } from '@react-three/drei'
import { useRef, useState } from 'react'
import type { Mesh } from 'three'

function ComputingCore() {
  const core = useRef<Mesh>(null)
  const orbit = useRef<Mesh>(null)
  const nodes = Array.from({ length: 8 }, (_, index) => { const angle = (index / 8) * Math.PI * 2; return [Math.cos(angle) * 1.85, Math.sin(angle) * 1.05, Math.sin(angle * 2) * 0.22] as [number, number, number] })
  useFrame((state, delta) => { if (core.current) { core.current.rotation.y += delta * 0.28; core.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.45) * 0.12 }; if (orbit.current) orbit.current.rotation.z -= delta * 0.22 })
  return <group>
    <mesh ref={core}>
      <boxGeometry args={[1.55, 1.05, 0.42]} />
      <meshStandardMaterial color="#1e293b" emissive="#0c4a6e" emissiveIntensity={0.45} metalness={0.92} roughness={0.2} wireframe />
    </mesh>
    <mesh position={[0, 0, 0.23]}>
      <planeGeometry args={[1.1, 0.62]} />
      <meshBasicMaterial color="#38bdf8" transparent opacity={0.2} />
    </mesh>
    <mesh ref={orbit} rotation={[Math.PI / 2.4, 0.2, 0]}>
      <torusGeometry args={[1.55, 0.018, 8, 64]} />
      <meshStandardMaterial color="#7dd3fc" emissive="#0ea5e9" emissiveIntensity={1.1} metalness={0.9} roughness={0.16} />
    </mesh>
    {nodes.map(([x, y, z], index) => <mesh key={index} position={[x, y, z]}><sphereGeometry args={[index % 2 ? 0.055 : 0.09, 12, 12]} /><meshStandardMaterial color="#f8fafc" emissive="#38bdf8" emissiveIntensity={1.35} /></mesh>)}
    <mesh position={[0, -0.68, 0]} rotation={[0.1, 0, 0]}><boxGeometry args={[1.9, 0.04, 0.8]} /><meshStandardMaterial color="#475569" metalness={0.85} roughness={0.25} /></mesh>
  </group>
}

export default function IntroScene({ onEnter }: { onEnter: () => void }) {
  const [leaving, setLeaving] = useState(false)
  const enterPortfolio = () => { setLeaving(true); window.setTimeout(onEnter, 650) }
  return <section className={`intro-scene${leaving ? ' intro-leaving' : ''}`} aria-label="Introduction">
    <div className="intro-copy"><p className="eyebrow"><span className="status-dot" /> Portfolio / 2026</p><h1>Mani Sai<br /><em>Sudheer.</em></h1><p>Computer Science Engineering student building practical systems at the intersection of software, embedded hardware, and human impact.</p><button className="primary-button" onClick={enterPortfolio}>Enter portfolio <span aria-hidden="true">↗</span></button></div>
    <div className="intro-visual"><div className="intro-photo-wrap"><img className="intro-photo" src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/professional%20pic-j0dnazyYUit8OzwMNiQT61Oicn8KvN.jpeg" alt="Mani Sai Sudheer in a professional suit" /><span>Profile / 01</span></div><div className="intro-canvas"><Canvas camera={{ position: [0, 0, 5], fov: 38 }} dpr={[1, 1.5]}><ambientLight intensity={1.5} /><pointLight position={[3, 3, 4]} intensity={18} color="#38bdf8" /><pointLight position={[-3, -2, 2]} intensity={10} color="#cbd5e1" /><Float speed={1.1} rotationIntensity={0.18} floatIntensity={0.35}><ComputingCore /><Text position={[0, -0.1, 0]} fontSize={0.34} color="#f8fafc" anchorX="center" anchorY="middle">MSS</Text></Float><OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.4} /></Canvas></div></div>
    <span className="intro-skip">Scroll to explore ↓</span>
  </section>
}
