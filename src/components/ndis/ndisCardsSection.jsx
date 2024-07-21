import React, { useRef, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import anime from 'animejs';
import gsap from 'gsap';

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
      
      // Make the 3D card responsive
      const updateSize = () => {
        const width = sceneRef.current.clientWidth;
        const height = sceneRef.current.clientHeight;
        renderer.setSize(width, height);
        camera.aspect = width / height;
        camera.updateProjectionMatrix();
      };

      updateSize();
      window.addEventListener('resize', updateSize);

      sceneRef.current.appendChild(renderer.domElement);

      const geometry = new THREE.BoxGeometry(2.8, 4, 0.1);
      const material = new THREE.MeshPhongMaterial({
        color: color.replace('border-', '0x'),
        transparent: true,
        opacity: 0.7,
        specular: 0x050505,
        shininess: 100,
      });
      const cube = new THREE.Mesh(geometry, material);
      scene.add(cube);

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

      gsap.to(cube.rotation, {
        y: Math.PI * 2,
        duration: 5,
        repeat: -1,
        ease: "power1.inOut",
      });

      return () => {
        sceneRef.current.removeChild(renderer.domElement);
        window.removeEventListener('resize', updateSize);
      };
    }
  }, [inView, color]);

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
      className={`relative bg-white rounded-2xl p-4 sm:p-6 w-full h-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden`}
    >
      <div ref={sceneRef} className="absolute inset-0 z-0" style={{ height: '200px' }} />
      <div ref={cardRef} className="relative z-10 mt-[200px]">
        <motion.div
          className={`text-4xl sm:text-5xl mb-2 sm:mb-4 ${color.replace('border', 'text')}`}
          animate={{ y: [0, -10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          {icon}
        </motion.div>
        <h3 className="text-lg sm:text-xl font-semibold mb-1 sm:mb-2 text-gray-800">{title}</h3>
        <p className="text-gray-600 text-xs sm:text-sm font-light">{description}</p>
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
    <div className="py-8 sm:py-12 md:py-16 px-4 md:px-8 bg-gradient-to-br from-customWhite to-gray-100">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 sm:mb-4 text-center text-customGreen"
        >
          Specialist Disability Accommodation Design Categories
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-base sm:text-lg mb-6 sm:mb-8 md:mb-12 text-center text-gray-700 max-w-3xl mx-auto font-light"
        >
          Discover the four SDA design categories that VB Homes can deliver, each tailored to empower your independence and meet specific needs.
        </motion.p>
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8 justify-items-center"
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