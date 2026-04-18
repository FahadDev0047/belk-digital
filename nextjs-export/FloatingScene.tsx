"use client";

import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshTransmissionMaterial, Environment } from "@react-three/drei";
import * as THREE from "three";

function GlassSphere({ position, scale = 1, speed = 1 }: { position: [number, number, number]; scale?: number; speed?: number }) {
    const meshRef = useRef<THREE.Mesh>(null!);

    useFrame((state) => {
        meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * speed * 0.3) * 0.3;
        meshRef.current.rotation.y += 0.005 * speed;
    });

    return (
        <Float speed={speed * 1.5} rotationIntensity={0.4} floatIntensity={1.5}>
            <mesh ref={meshRef} position={position} scale={scale}>
                <sphereGeometry args={[1, 64, 64]} />
                <MeshTransmissionMaterial
                    backside
                    samples={3}
                    resolution={256}
                    thickness={0.5}
                    chromaticAberration={0.3}
                    anisotropy={0.1}
                    distortion={0.2}
                    distortionScale={0.3}
                    temporalDistortion={0.1}
                    iridescence={1}
                    iridescenceIOR={1}
                    iridescenceThicknessRange={[0, 1400]}
                    color="#c4a6f0"
                    transmission={0.95}
                    roughness={0.05}
                />
            </mesh>
        </Float>
    );
}

function GlassDisc({ position, rotation, scale = 1, speed = 1 }: { position: [number, number, number]; rotation?: [number, number, number]; scale?: number; speed?: number }) {
    const meshRef = useRef<THREE.Mesh>(null!);

    useFrame((state) => {
        meshRef.current.rotation.z += 0.003 * speed;
        meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * speed * 0.2) * 0.2 + (rotation?.[0] || 0);
    });

    return (
        <Float speed={speed} rotationIntensity={0.3} floatIntensity={1}>
            <mesh ref={meshRef} position={position} rotation={rotation || [0, 0, 0]} scale={scale}>
                <cylinderGeometry args={[1.5, 1.5, 0.08, 64]} />
                <MeshTransmissionMaterial
                    backside
                    samples={3}
                    resolution={256}
                    thickness={0.3}
                    chromaticAberration={0.5}
                    anisotropy={0.3}
                    distortion={0.1}
                    distortionScale={0.2}
                    temporalDistortion={0.05}
                    color="#b794f4"
                    transmission={0.9}
                    roughness={0.1}
                />
            </mesh>
        </Float>
    );
}

function GlassRing({ position, scale = 1, speed = 1 }: { position: [number, number, number]; scale?: number; speed?: number }) {
    const meshRef = useRef<THREE.Mesh>(null!);

    useFrame((state) => {
        meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.3) * 0.5;
        meshRef.current.rotation.y += 0.008 * speed;
    });

    return (
        <Float speed={speed * 0.8} rotationIntensity={0.5} floatIntensity={2}>
            <mesh ref={meshRef} position={position} scale={scale}>
                <torusGeometry args={[1.8, 0.05, 16, 100]} />
                <meshStandardMaterial color="#d6bcfa" emissive="#9b87f5" emissiveIntensity={0.3} transparent opacity={0.7} />
            </mesh>
        </Float>
    );
}

function GlassCube({ position, scale = 1, speed = 1 }: { position: [number, number, number]; scale?: number; speed?: number }) {
    const meshRef = useRef<THREE.Mesh>(null!);

    useFrame((state) => {
        meshRef.current.rotation.x += 0.005 * speed;
        meshRef.current.rotation.y += 0.008 * speed;
    });

    return (
        <Float speed={speed} rotationIntensity={0.6} floatIntensity={1.2}>
            <mesh ref={meshRef} position={position} scale={scale}>
                <boxGeometry args={[1, 1, 1]} />
                <MeshTransmissionMaterial
                    backside
                    samples={3}
                    resolution={256}
                    thickness={0.4}
                    chromaticAberration={0.4}
                    anisotropy={0.1}
                    distortion={0.15}
                    distortionScale={0.25}
                    temporalDistortion={0.08}
                    color="#a78bfa"
                    transmission={0.92}
                    roughness={0.08}
                />
            </mesh>
        </Float>
    );
}

function Scene() {
    return (
        <>
            <ambientLight intensity={0.8} />
            <directionalLight position={[5, 5, 5]} intensity={1.2} color="#e9d5ff" />
            <pointLight position={[-3, 2, 4]} intensity={1} color="#c084fc" />
            <pointLight position={[3, -2, -2]} intensity={0.6} color="#a78bfa" />

            {/* Main large sphere */}
            <GlassSphere position={[2, 0.5, 0]} scale={1.8} speed={0.6} />

            {/* Discs */}
            <GlassDisc position={[0.5, 1.5, -1]} rotation={[0.8, 0.3, 0.2]} scale={0.9} speed={0.8} />
            <GlassDisc position={[3, -0.5, 1]} rotation={[-0.5, 0.6, -0.3]} scale={0.7} speed={1.1} />
            <GlassDisc position={[-1, -1, 0.5]} rotation={[0.3, -0.2, 0.5]} scale={0.6} speed={0.9} />

            {/* Rings */}
            <GlassRing position={[1.5, 0, -0.5]} scale={1.2} speed={0.7} />
            <GlassRing position={[3.5, 1.5, -1]} scale={0.8} speed={1} />

            {/* Cube */}
            <GlassCube position={[-0.5, 2, -0.5]} scale={0.5} speed={1.2} />
            <GlassCube position={[4, -1.5, 0]} scale={0.4} speed={0.9} />

            <Environment preset="studio" />
        </>
    );
}

const FloatingScene = () => {
    return (
        <div className="absolute inset-0 z-0">
            <Canvas
                camera={{ position: [0, 0, 8], fov: 45 }}
                gl={{ antialias: true, alpha: true }}
                style={{ background: "transparent" }}
            >
                <Scene />
            </Canvas>
        </div>
    );
};

export default FloatingScene;
