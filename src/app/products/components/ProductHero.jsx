'use client'

import { motion } from 'framer-motion';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import * as THREE from 'three';
import { useResponsiveAnimation } from '@/components/animation/AnimationLoader';

export default function ProductHero() {
  const canvasRef = useRef(null);
  const mousePosition = useRef({ x: 0, y: 0 });
  const particleSystemsRef = useRef([]);
  const animationFrameRef = useRef();
  const shouldAnimate = useResponsiveAnimation();

  const textVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  useEffect(() => {
    if (!shouldAnimate || !canvasRef.current) return;

    let mounted = true;

    requestAnimationFrame(() => {
      if (!mounted || !canvasRef.current) return;

      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
      
      try {
        const renderer = new THREE.WebGLRenderer({ 
          canvas: canvasRef.current,
          alpha: true,
          antialias: true,
          powerPreference: 'high-performance'
        });
        
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

        // Create particle systems
        const colors = ['#4F46E5', '#10B981', '#6366F1'];
        const particleCounts = [5000, 3000, 2000];
        
        colors.forEach((color, index) => {
          const geometry = new THREE.BufferGeometry();
          const positions = new Float32Array(particleCounts[index] * 3);
          const colors = new Float32Array(particleCounts[index] * 3);

          for (let i = 0; i < particleCounts[index] * 3; i++) {
            positions[i] = (Math.random() - 0.5) * 10;
            colors[i] = Math.random();
          }

          geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
          geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

          const material = new THREE.PointsMaterial({
            size: 0.02,
            vertexColors: true,
            transparent: true,
            opacity: 0.8,
            blending: THREE.AdditiveBlending
          });

          const particles = new THREE.Points(geometry, material);
          particleSystemsRef.current.push({ geometry, material, particles });
          scene.add(particles);
        });

        camera.position.z = 5;

        const onMouseMove = (event) => {
          mousePosition.current = {
            x: (event.clientX / window.innerWidth) * 2 - 1,
            y: -(event.clientY / window.innerHeight) * 2 + 1
          };

          particleSystemsRef.current.forEach(system => {
            gsap.to(system.particles.rotation, {
              x: mousePosition.current.y * 0.5,
              y: mousePosition.current.x * 0.5,
              duration: 2,
              ease: 'power2.out'
            });
          });
        };

        const animate = () => {
          animationFrameRef.current = requestAnimationFrame(animate);
          particleSystemsRef.current.forEach((system, index) => {
            system.particles.rotation.z += 0.001 * (index + 1);
          });
          renderer.render(scene, camera);
        };

        const handleResize = () => {
          if (!canvasRef.current) return;
          camera.aspect = window.innerWidth / window.innerHeight;
          camera.updateProjectionMatrix();
          renderer.setSize(window.innerWidth, window.innerHeight);
        };

        window.addEventListener('mousemove', onMouseMove);
        window.addEventListener('resize', handleResize);
        animate();

        return () => {
          mounted = false;
          window.removeEventListener('mousemove', onMouseMove);
          window.removeEventListener('resize', handleResize);
          
          if (animationFrameRef.current) {
            cancelAnimationFrame(animationFrameRef.current);
          }

          particleSystemsRef.current.forEach(system => {
            if (system.geometry) system.geometry.dispose();
            if (system.material) system.material.dispose();
            if (system.particles) scene.remove(system.particles);
          });
          
          particleSystemsRef.current = [];
          scene.clear();
          
          if (renderer) {
            renderer.dispose();
            renderer.forceContextLoss();
            renderer.domElement = null;
          }
        };
      } catch (error) {
        console.error('WebGL initialization failed:', error);
        return;
      }
    });
  }, [shouldAnimate]);

  if (!shouldAnimate) {
    return (
      <section className="relative overflow-hidden bg-gradient-to-br from-white to-blue-50 py-24">
        <div className="absolute inset-0 bg-grid-gray-900/[0.02] bg-[size:20px_20px]" />
        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div 
            className="mx-auto max-w-2xl text-center"
            initial="initial"
            animate="animate"
            variants={textVariants}
          >
            <motion.h1 
              className="text-4xl font-heading font-bold tracking-tight text-dark sm:text-5xl"
              variants={textVariants}
            >
              Digital Products for Modern Businesses
            </motion.h1>
            <motion.p 
              className="mt-6 text-lg leading-8 text-dark/80"
              variants={textVariants}
            >
              From PHP scripts to UI templates, find the perfect solution for your next project. 
              All our products come with lifetime updates and dedicated support.
            </motion.p>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-white to-blue-50 py-24">
      <canvas ref={canvasRef} className="absolute inset-0" />
      <div className="absolute inset-0 bg-grid-gray-900/[0.02] bg-[size:20px_20px]" />
      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div 
          className="mx-auto max-w-2xl text-center"
          initial="initial"
          animate="animate"
          variants={textVariants}
        >
          <motion.h1 
            className="text-4xl font-heading font-bold tracking-tight text-dark sm:text-5xl"
            variants={textVariants}
          >
            Digital Products for Modern Businesses
          </motion.h1>
          <motion.p 
            className="mt-6 text-lg leading-8 text-dark/80"
            variants={textVariants}
          >
            From PHP scripts to UI templates, find the perfect solution for your next project. 
            All our products come with lifetime updates and dedicated support.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
} 