import React, { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import anime from 'animejs';
import * as THREE from 'three';

const NdisTheoryContent = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [0.5, 1]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [0.95, 1]);

  useEffect(() => {
    if (inView) {
      anime({
        targets: '.animate-on-scroll',
        opacity: [0, 1],
        translateY: [20, 0],
        easing: 'easeOutExpo',
        duration: 1000,
        delay: anime.stagger(200),
      });
    }
  }, [inView]);

  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.getElementById('three-background').appendChild(renderer.domElement);

    const geometry = new THREE.TorusKnotGeometry(10, 3, 100, 16);
    const material = new THREE.MeshBasicMaterial({ color: 0x0A4A2F, wireframe: true });
    const torusKnot = new THREE.Mesh(geometry, material);
    scene.add(torusKnot);

    camera.position.z = 30;

    const animate = () => {
      requestAnimationFrame(animate);
      torusKnot.rotation.x += 0.01;
      torusKnot.rotation.y += 0.01;
      renderer.render(scene, camera);
    };
    animate();

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      const threeBackground = document.getElementById("three-background");
      if (threeBackground) {
        threeBackground.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <motion.div
      ref={containerRef}
      style={{ opacity, scale }}
      className="min-h-screen p-4 sm:p-6 md:p-8 lg:p-12 bg-gradient-to-br from-primary to-secondary text-customGreenDark overflow-hidden"
    >
      <div id="three-background" className="fixed top-0 left-0 w-full h-full -z-10 opacity-20"></div>
      <motion.div
        ref={ref}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="max-w-6xl mx-auto"
      >
        <section className="mb-8 sm:mb-12 animate-on-scroll">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-customGreenDark mb-4 leading-tight">KEW GARDEN HOMES NOW ACCREDITED NDIS SDA BUILDER</h1>
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-accent leading-relaxed">NDIS-Approved Construction Services for Disability Accommodation - Registered Builders</h2>
        </section>
        
        <section className="mb-8 sm:mb-12 animate-on-scroll">
          <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-customGreenDark">What is the NDIS?</h3>
          <p className="text-base sm:text-lg leading-relaxed mb-4 text-customGreenDark">
            The National Disability Insurance Scheme (NDIS) is a government-funded program introduced in 2016 to support individuals with permanent and significant disabilities. With an annual funding of over $22 billion, it aims to benefit around 500,000 Australians facing extreme functional impairment or very high support needs within the next five years.
          </p>
          <p className="text-base sm:text-lg leading-relaxed text-customGreenDark">
            The NDIS not only provides financial resources but also connects people with disabilities to essential local services such as doctors, sports clubs, support groups, libraries, and schools. By fostering independence and promoting inclusion, the NDIS seeks to enhance the quality of life for individuals with disabilities. This comprehensive initiative signifies a commitment to improving accessibility and support for the 14% of Australians living with significant disabilities.
          </p>
        </section>
        
        <section className="mb-8 sm:mb-12 animate-on-scroll">
          <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-customGreenDark">Melbourne's Trusted Local NDIS Builders and Building Contractors, Crafting Accessible Homes for Life</h3>
          <p className="text-base sm:text-lg leading-relaxed mb-4 text-customGreenDark">
            <span className="font-bold">VB Homes</span> is more than just a building company in Melbourne; we're passionate NDIS builders, crafting accessible homes that empower individuals with disabilities to live independently and confidently. As NDIS-approved and registered building contractors, we understand the unique needs and requirements of each individual, going beyond standard construction to create truly accessible living spaces. We champion universal design principles, ensuring our homes seamlessly accommodate everyone, regardless of ability. Through open communication and collaboration, we design personalized solutions that enhance independence and dignity.
          </p>
          <p className="text-base sm:text-lg leading-relaxed text-customGreenDark">
            Sarah, a wheelchair user, regained the joy of self-care thanks to our designer who tailored the High physical support design that suited Sarah with individual needs.. Witness the transformative power of accessible living in our portfolio, spanning areas such as Airport West, Caroline Springs, Kensington, Flemington, Footscray, Keilor, Melton, Point Cook, Sunshine, Sydenham, Werribee, Williamstown, Yarraville, Mickleham, Tarneit, Craigieburn, Wollert, Geelong, and Epping.
          </p>
        </section>
        
        <section className="mb-8 sm:mb-12 animate-on-scroll">
          <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-customGreenDark">Accessible Specialist Disability Accommodation (SDA) at VB Homes</h3>
          <p className="text-base sm:text-lg leading-relaxed mb-4 text-customGreenDark">
            Looking for a safe, comfortable, and independent living space designed specifically for your disability needs? Look no further than VB Homes, your trusted provider for high-quality Specialist Disability Accommodation (SDA).
          </p>
          <p className="text-base sm:text-lg leading-relaxed text-customGreenDark">
            VB Homes understands the unique challenges faced by individuals with disabilities when it comes to finding suitable housing. That's why we specialize in building custom-designed SDA that cater to your specific needs and preferences. Whether you're in Mickleham, Tarneit, Craigieburn, Epping, Rockbank, Melton, Thornhill Park, Victoria, or any other location, VB Homes are here for you.
          </p>
        </section>
        
        <section className="mb-8 sm:mb-12 animate-on-scroll">
          <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-customGreenDark">Here's what sets VB Homes apart</h3>
          <ul className="list-disc list-inside space-y-2">
            <li className="text-customGreenDark">Wide range of SDA options: We offer a variety of SDA design categories, including Improved Liveability, Fully Accessibility, High Physical Support, and Robust, to ensure you find the perfect fit for your level of support needs.</li>
            <li className="text-customGreenDark">Custom-designed solutions: Our team of experienced professionals works closely with you to understand your individual requirements and design an Specialist Disability accommodation builder that maximizes your independence and comfort.</li>
            <li className="text-customGreenDark">Specialized access features: We incorporate essential access features such as wider doorways, grab rails, accessible showers, and ramps to ensure your home is fully accessible and functional.</li>
            <li className="text-customGreenDark">Building modifications and access solutions: We offer a comprehensive range of building modifications and access solutions to adapt existing homes to meet your specific needs.</li>
          </ul>
        </section>
        
        <section className="mb-8 sm:mb-12 animate-on-scroll">
          <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-customGreenDark">Benefits of choosing VB Homes for your SDA</h3>
          <ul className="list-disc list-inside space-y-2">
            <li className="text-customGreenDark">Increased independence and autonomy: Live comfortably and independently in a home designed specifically for your needs.</li>
            <li className="text-customGreenDark">Improved safety and well-being: Enjoy a safe and secure environment that minimizes risks and promotes well-being.</li>
            <li className="text-customGreenDark">Peace of mind: Our experienced team handles all aspects of the design, NDIS construction, and ongoing maintenance, giving you peace of mind.</li>
            <li className="text-customGreenDark">Compliance with NDIS standards: All our SDA designs adhere to the latest NDIS building contractors' standards and regulations.</li>
            <li className="text-customGreenDark">Empowerment through accessible living: VB Homes prioritizes creating living spaces that foster a sense of control and independence through thoughtful design and accessibility features.</li>
          </ul>
        </section>
        
        <section className="mb-8 sm:mb-12 animate-on-scroll">
          <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-customGreenDark">Benefits of Choosing VB Home</h3>
          <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white bg-opacity-80 p-4 sm:p-6 rounded-lg shadow-lg"
            >
              <h4 className="text-lg sm:text-xl font-semibold mb-2 text-primary">Expertise and experience:</h4>
              <ul className="list-disc list-inside space-y-2 text-gray-800 text-sm sm:text-base">
                <li>Registered NDIS builders with a deep understanding of accessibility guidelines and funding processes.</li>
                <li>Skilled and experienced team specializing in custom builds, modifications, access ramps, and assistive technology integration.</li>
                <li>Proven track record of delivering high-quality, accessible homes tailored to individual needs.</li>
              </ul>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white bg-opacity-80 p-4 sm:p-6 rounded-lg shadow-lg"
            >
              <h4 className="text-lg sm:text-xl font-semibold mb-2 text-primary">Focus on you:</h4>
              <ul className="list-disc list-inside space-y-2 text-gray-800 text-sm sm:text-base">
                <li>A collaborative approach, working closely with you to design solutions that meet your specific needs, preferences, and budget.</li>
                <li>A compassionate and supportive team that understands the challenges you face and is there to guide you every step of the way.</li>
                <li>Commitment to open communication and ensuring a smooth and transparent experience.</li>
              </ul>
            </motion.div>
          </div>
        </section>
      </motion.div>
    </motion.div>
  );
};

export default NdisTheoryContent;