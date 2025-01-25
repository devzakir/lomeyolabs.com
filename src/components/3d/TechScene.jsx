'use client'

import { useEffect, useRef } from 'react'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import gsap from 'gsap'

const TechScene = () => {
  const mountRef = useRef(null)
  const controlsRef = useRef(null)
  const sceneRef = useRef(null)
  const mousePosition = useRef({ x: 0, y: 0 })

  useEffect(() => {
    const currentMountRef = mountRef.current

    if (!currentMountRef) return

    // Scene setup
    const scene = new THREE.Scene()
    sceneRef.current = scene
    scene.background = new THREE.Color(0xffffff)

    // Camera setup
    const camera = new THREE.PerspectiveCamera(
      45,
      currentMountRef.clientWidth / currentMountRef.clientHeight,
      0.1,
      1000
    )
    camera.position.set(0, 0, 5)

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({ antialias: true })
    renderer.setSize(currentMountRef.clientWidth, currentMountRef.clientHeight)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    renderer.shadowMap.enabled = true
    currentMountRef.appendChild(renderer.domElement)

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5)
    scene.add(ambientLight)

    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8)
    directionalLight.position.set(5, 5, 5)
    directionalLight.castShadow = true
    scene.add(directionalLight)

    // Controls with GSAP integration
    controlsRef.current = new OrbitControls(camera, renderer.domElement)
    controlsRef.current.enableDamping = true
    controlsRef.current.dampingFactor = 0.05
    controlsRef.current.enableZoom = false
    controlsRef.current.autoRotate = true
    controlsRef.current.autoRotateSpeed = 0.5

    // Create laptop model
    const laptop = new THREE.Group()
    const screenGeometry = new THREE.BoxGeometry(2, 1.2, 0.1)
    const screenMaterial = new THREE.MeshPhysicalMaterial({
      color: 0x2563eb,
      metalness: 0.7,
      roughness: 0.2,
    })
    const screen = new THREE.Mesh(screenGeometry, screenMaterial)
    laptop.add(screen)

    // Interactive particles
    const particlesGeometry = new THREE.BufferGeometry()
    const particlesCount = 100
    const positions = new Float32Array(particlesCount * 3)
    
    for(let i = 0; i < particlesCount * 3; i++) {
      positions[i] = (Math.random() - 0.5) * 3
    }
    
    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3))
    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.02,
      color: 0x00ff00,
      transparent: true,
      opacity: 0.8,
    })
    const particles = new THREE.Points(particlesGeometry, particlesMaterial)
    laptop.add(particles)

    // Floating elements with GSAP animations
    const floatingElements = new THREE.Group()
    const shapes = [
      new THREE.TorusGeometry(0.3, 0.1, 16, 32),
      new THREE.OctahedronGeometry(0.3),
      new THREE.TetrahedronGeometry(0.3),
    ]

    shapes.forEach((geometry, i) => {
      const material = new THREE.MeshPhysicalMaterial({
        color: 0xffd700,
        metalness: 0.3,
        roughness: 0.4,
      })
      const mesh = new THREE.Mesh(geometry, material)
      mesh.position.set(
        Math.cos(i * Math.PI * 2 / 3) * 2,
        Math.sin(i * Math.PI * 2 / 3) * 2,
        0
      )
      floatingElements.add(mesh)

      // GSAP floating animation
      gsap.to(mesh.position, {
        y: `+=${0.2}`,
        duration: 2,
        yoyo: true,
        repeat: -1,
        ease: 'power1.inOut',
        delay: i * 0.2
      })
    })

    scene.add(floatingElements)
    scene.add(laptop)

    // Mouse movement handler
    const handleMouseMove = (event) => {
      mousePosition.current = {
        x: (event.clientX / window.innerWidth) * 2 - 1,
        y: -(event.clientY / window.innerHeight) * 2 + 1
      }

      gsap.to(laptop.rotation, {
        x: mousePosition.current.y * 0.1,
        y: mousePosition.current.x * 0.1,
        duration: 1,
        ease: 'power2.out'
      })
    }

    window.addEventListener('mousemove', handleMouseMove)

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate)
      particles.rotation.y += 0.002
      controlsRef.current.update()
      renderer.render(scene, camera)
    }

    animate()

    // Handle resize
    const handleResize = () => {
      camera.aspect = currentMountRef.clientWidth / currentMountRef.clientHeight
      camera.updateProjectionMatrix()
      renderer.setSize(currentMountRef.clientWidth, currentMountRef.clientHeight)
    }

    window.addEventListener('resize', handleResize)

    // Cleanup
    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('resize', handleResize)
      currentMountRef?.removeChild(renderer.domElement)
      scene.clear()
      renderer.dispose()
      particlesGeometry.dispose()
      particlesMaterial.dispose()
      shapes.forEach(geometry => geometry.dispose())
    }
  }, [])

  return (
    <div 
      ref={mountRef} 
      className="w-full h-full min-h-[400px] rounded-xl overflow-hidden"
      style={{ background: 'linear-gradient(to bottom right, #f8fafc, #e2e8f0)' }}
    />
  )
}

export default TechScene