import React, { useRef, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import anime from 'animejs';
import gsap from 'gsap';
import { TextureLoader } from 'three';

const NdisCard = ({ icon, title, description, color }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const cardRef = useRef();
  const sceneRef = useRef();
  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
      const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
      renderer.setSize(80, 120);
      sceneRef.current.appendChild(renderer.domElement);

      // Create a canvas to render the emoji
      const canvas = document.createElement('canvas');
      canvas.width = 256;
      canvas.height = 256;
      const ctx = canvas.getContext('2d');
      ctx.font = '200px Arial';
      ctx.fillStyle = color.replace('border-', '#');
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText(icon, 128, 128);

      // Create a texture from the canvas
      const texture = new THREE.CanvasTexture(canvas);

      // Create a plane geometry instead of a box
      const geometry = new THREE.PlaneGeometry(2, 2);
      const material = new THREE.MeshBasicMaterial({
        map: texture,
        transparent: true,
        opacity: 0.9,
      });
      const plane = new THREE.Mesh(geometry, material);
      scene.add(plane);

      const light = new THREE.PointLight(0xffffff, 1, 100);
      light.position.set(0, 0, 10);
      scene.add(light);

      camera.position.z = 3;

      const orbitControls = new OrbitControls(camera, renderer.domElement);
      orbitControls.enableZoom = false;
      orbitControls.enablePan = false;
      orbitControls.autoRotate = true;
      orbitControls.autoRotateSpeed = 5;

      const animate = () => {
        requestAnimationFrame(animate);
        orbitControls.update();
        renderer.render(scene, camera);
      };

      animate();

      gsap.to(plane.rotation, {
        y: Math.PI * 2,
        duration: 5,
        repeat: -1,
        ease: "power1.inOut",
      });

      return () => {
        // Safe cleanup
        if (sceneRef.current && sceneRef.current.contains(renderer.domElement)) {
          sceneRef.current.removeChild(renderer.domElement);
        }
        // Dispose of Three.js objects
        geometry.dispose();
        material.dispose();
        renderer.dispose();
        texture.dispose();
      };
    }
  }, [inView, color, icon]);

  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, y: 0 });
      anime({
        targets: cardRef.current,
        translateY: [20, 0],
        opacity: [0, 1],
        easing: 'easeOutExpo',
        duration: 1000,
        delay: 300,
      });
    }
  }, [inView, controls]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={controls}
      transition={{ duration: 0.5 }}
      className={`relative bg-white rounded-2xl p-6 w-full md:w-64 lg:w-72 xl:w-80 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden`}
    >
      <div ref={sceneRef} className="absolute inset-0 z-0" />
      <div ref={cardRef} className="relative z-10">
        <motion.div
          className={`text-5xl mb-4 ${color.replace('border', 'text')}`}
          animate={{ y: [0, -10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          {icon}
        </motion.div>
        <h3 className="text-xl font-semibold mb-2 text-gray-800">{title}</h3>
        <p className="text-gray-600 text-sm font-light">{description}</p>
      </div>
    </motion.div>
  );
};

const NdisCardsSection = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <div className="py-16 px-4 md:px-8 bg-gradient-to-br from-customWhite to-gray-100">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold mb-4 text-center text-customGreen"
        >
          Specialist Disability Accommodation Design Categories
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg mb-12 text-center text-gray-700 max-w-3xl mx-auto font-light"
        >
          Discover the four SDA design categories that VB Homes can deliver, each tailored to empower your independence and meet specific needs.
        </motion.p>
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 justify-items-center"
        >
          <motion.div variants={itemVariants}>
            <NdisCard
              icon="🏡"
              title="Improved Liveability"
              description="Enhanced physical accessibility and features for cognitive, intellectual, or sensory disabilities."
              color="border-ndisBlue"
            />
          </motion.div>
          <motion.div variants={itemVariants}>
            <NdisCard
              icon="♿"
              title="Fully Accessible"
              description="Designed for individuals with significant physical impairments, including wheelchair users."
              color="border-ndisPurple"
            />
          </motion.div>
          <motion.div variants={itemVariants}>
            <NdisCard
              icon="🏠"
              title="Robust"
              description="Durable housing with reduced maintenance needs, ideal for those requiring behavioral support."
              color="border-ndisOrange"
            />
          </motion.div>
          <motion.div variants={itemVariants}>
            <NdisCard
              icon="🦽"
              title="High Physical Support"
              description="Accommodation with advanced accessibility features for those needing extensive assistance."
              color="border-ndisGreen"
            />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default NdisCardsSection;