import { useState, useRef, useEffect } from "react";
import { Layer2 } from './Components/Layer2';
import { Layer3 } from './Components/Layer3';
import { Hero } from './Components/Hero';
import Intro from './Components/Intro';
import gsap from 'gsap';

import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment } from "@react-three/drei";
import Footer from "./Components/Footer";

function QA({ setShowQA }) {
  return (
<section className="min-h-screen w-full flex flex-col items-center justify-center text-center px-6 py-20 bg-black text-white relative z-50">
      {/* Back Button */}
      <button
        onClick={() => setShowQA(false)}
        className="absolute top-8 left-8 px-5 py-2  text-amber-300 rounded-lg hover:opacity-80 transition"
      >
        Back
      </button>

      {/* Question */}
      <h1
        style={{ fontSize: "clamp(2rem, 5vw, 4.5rem)" }}
        className="font-bold leading-tight"
      >
        Why Choose Urban?
      </h1>

      {/* Answer */}
      <p
        style={{ fontSize: "clamp(1rem, 2vw, 1.5rem)" }}
        className="max-w-3xl mt-6 text-gray-300"
      >
        We deliver premium experiences designed around comfort, reliability,
        and presence. Every interaction is intentional.
      </p>

      {/* 3D Model */}
      <div className="w-full flex justify-center mt-16">
        <div
          style={{
            width: "clamp(300px, 70vw, 1100px)",
            height: "clamp(300px, 70vh, 900px)",
          }}
        >
          <Canvas camera={{ position: [0, 0, 6], fov: 45 }}>
            <ambientLight intensity={1.5} />
            <directionalLight position={[5, 10, 5]} intensity={2} />
            <OrbitControls enableZoom={false} />
            <Environment preset="studio" />

            <mesh scale={2}>
              <boxGeometry />
              <meshStandardMaterial color="orange" />
            </mesh>
          </Canvas>
        </div>
      </div>
    </section>
  );
}



const Nav = ({ setShowQA }) => {
  const circleRef = useRef(null);
  const contentRef = useRef(null);
  const buttonRef = useRef(null);
  const isOpen = useRef(false);

  const toggleMenu = () => {
    const rect = buttonRef.current.getBoundingClientRect();
    const x = rect.left + rect.width / 2;
    const y = rect.top + rect.height / 2;

    if (!isOpen.current) {
      // OPEN
      gsap.to(circleRef.current, {
        clipPath: `circle(150% at ${x}px ${y}px)`,
        duration: 0.8,
        ease: "power3.inOut",
        pointerEvents: "auto",
      });

      gsap.to(contentRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.6,
        delay: 0.4,
        ease: "power3.out",
      });

      isOpen.current = true;
    } else {
      // CLOSE
      gsap.to(circleRef.current, {
        clipPath: `circle(0px at ${x}px ${y}px)`,
        duration: 0.8,
        ease: "power3.inOut",
        pointerEvents: "none",
      });

      gsap.to(contentRef.current, {
        opacity: 0,
        y: 20,
        duration: 0.3,
      });

      isOpen.current = false;
    }
  };

  return (
    <>
      {/* Expanding Circle Overlay */}
      <div
        ref={circleRef}
        className="fixed inset-0 z-40 pointer-events-none overflow-hidden"
        style={{
          clipPath: "circle(0px at 95% 5%)",
        }}
      >
        {/* 🔥 Background Video */}
        <video
          src="/bat.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover blur-xl scale-110"
        />

        <div className="absolute inset-0 bg-black/40" />

        {/* Menu Content */}
        <div
          ref={contentRef}
          className="relative h-full w-full flex flex-col items-center justify-center text-white text-4xl space-y-8 opacity-0 translate-y-5"
        >
          <div
            onClick={() => {
              setShowQA(true);
              toggleMenu();
            }}
            style = {{color:'black',fontFamily:'array'}} className="cursor-pointer hover:opacity-70 transition"
          >
            Q&A
          </div>

          <div style = {{color:'black',fontFamily:'array'}} className="cursor-pointer hover:opacity-70 transition">
            Book
          </div>

          <div style = {{color:'black',fontFamily:'array'}} className="cursor-pointer hover:opacity-70 transition">
            Questions
          </div>
        </div>
      </div>

      {/* Navbar */}
      <nav className="nav-logo relative z-50">
        <div className="nav-logo__container">
          <div className='cop'>
            <a href="#home" className="nav-logo__link">
              <img src='./dust.png' className="nav-logo__icon" />
              <span
                style={{ fontFamily: 'Array', color: 'black' }}
                className="nav-logo__text"
              >
                <span style={{ color: 'black' }}>U</span>
                rban
                <span style={{ color: 'black' }}>L</span>
                imo
              </span>
            </a>
          </div>

          {/* Hamburger Button */}
          <button
            ref={buttonRef}
            onClick={toggleMenu}
            className="ret fixed top-4 right-6 z-50 flex flex-col justify-center items-center w-10 h-10 space-y-1.5"
          >
            <span className="block w-8 h-0.5 bg-amber-700"></span>
            <span className="block w-8 h-0.5 bg-gray-600"></span>
            <span className="block w-8 h-0.5 bg-gray-800"></span>
          </button>
        </div>
      </nav>
    </>
  );
};

export default function App() {
  const [loading, setLoading] = useState(true);
  const [showQA, setShowQA] = useState(false); // ✅ Added

  const loaderRef = useRef(null);
  const circleRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    const radius = 95;
    const circumference = 2 * Math.PI * radius;

    circleRef.current.style.strokeDasharray = circumference;
    circleRef.current.style.strokeDashoffset = circumference;

    const tl = gsap.timeline({
      onComplete: () => setLoading(false),
    });

    tl.to(circleRef.current, {
      strokeDashoffset: 0,
      duration: 3.2,
      ease: "power3.inOut",
    });

    tl.fromTo(
      loaderRef.current,
      { scale: 1 },
      { scale: 1.03, duration: 3.2, ease: "power3.inOut" },
      0
    );

    tl.to(loaderRef.current, {
      opacity: 0,
      duration: 1,
      ease: "power2.out",
    });
  }, []);

  useEffect(() => {
    if (!loading && contentRef.current) {
      gsap.fromTo(
        contentRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 1.4, ease: "power2.out" }
      );
    }
  }, [loading]);

return (
  <>
    {loading && (
      <div
        ref={loaderRef}
        className="fixed inset-0 bg-amber-950 z-50 flex items-center justify-center"
      >
        <div className="relative flex items-center justify-center">
          <svg width="240" height="240">
            <circle
              cx="120"
              cy="120"
              r="95"
              stroke="#1a1a1a"
              strokeWidth="1"
              fill="transparent"
            />
            <circle
              ref={circleRef}
              cx="120"
              cy="120"
              r="95"
              stroke="white"
              strokeWidth="1"
              fill="transparent"
              strokeLinecap="round"
              transform="rotate(-90 120 120)"
            />
          </svg>

          <div className="absolute text-white text-sm tracking-[0.4em] font-light">
            URBANLIMO
          </div>
        </div>
      </div>
    )}

    <div ref={contentRef} className="opacity-0">
      {showQA ? (
        /* QA PAGE */
        <>
          <Nav setShowQA={setShowQA} />
          <QA setShowQA={setShowQA} />
        </>
      ) : (
        /* NORMAL SITE */
        <main>
          <Intro />
          <Hero />
          <Nav setShowQA={setShowQA} />
          <Layer2 />
          <Layer3 />
          <Footer/>
        </main>
      )}
    </div>
  </>
);
}
