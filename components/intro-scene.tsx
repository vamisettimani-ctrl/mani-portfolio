'use client'

import { Canvas, useFrame } from '@react-three/fiber'
import { Float, OrbitControls, Text } from '@react-three/drei'
import { useRef, useState } from 'react'
import { IcosahedronGeometry } from 'three'
import type { Mesh } from 'three'

function ComputingCore() {
  const nodes = Array.from({ length: 12 }, (_, index) => { const angle = (index / 12) * Math.PI * 2; return [Math.cos(angle) * 2.05, Math.sin(angle) * 2.05, (index % 3 - 1) * 0.18] as [number, number, number] })
  const core = useRef<Mesh>(null)
  const ring = useRef<Mesh>(null)
  useFrame((_, delta) => { if (core.current) { core.current.rotation.x += delta * 0.24; core.current.rotation.y += delta * 0.42 }; if (ring.current) ring.current.rotation.z -= delta * 0.32 })
  return <group>
    <mesh ref={core}>
      <icosahedronGeometry args={[1.18, 1]} />
      <meshStandardMaterial color="#38bdf8" emissive="#075985" emissiveIntensity={0.8} metalness={0.85} roughness={0.18} wireframe />
    </mesh>
    <mesh ref={ring} rotation={[Math.PI / 2.4, 0.2, 0]}>
      <torusGeometry args={[1.7, 0.025, 8, 64]} />
      <meshStandardMaterial color="#7dd3fc" emissive="#0ea5e9" emissiveIntensity={1.2} metalness={0.9} roughness={0.15} />
    </mesh>
    <mesh rotation={[0.3, Math.PI / 2, 0]}>
      <torusGeometry args={[1.45, 0.018, 8, 64]} />
      <meshStandardMaterial color="#cbd5e1" emissive="#334155" emissiveIntensity={0.7} metalness={0.9} roughness={0.2} />
    </mesh>
    {nodes.map(([x, y, z], index) => <mesh key={index} position={[x, y, z]}><sphereGeometry args={[index % 3 === 0 ? 0.09 : 0.045, 12, 12]} /><meshStandardMaterial color="#f8fafc" emissive="#38bdf8" emissiveIntensity={1.5} /></mesh>)}
    <lineSegments rotation={[0, 0, Math.PI / 12]}><edgesGeometry args={[new IcosahedronGeometry(2.05, 1)]} /><lineBasicMaterial color="#1e40af" transparent opacity={0.45} /></lineSegments>
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
