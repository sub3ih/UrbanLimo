import React, { useEffect, useRef, useState } from 'react'

import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Environment, OrbitControls } from '@react-three/drei'
import { Canvas, useFrame } from '@react-three/fiber'
import * as THREE from 'three'
import { Tbag } from './Tbag'
import { COfa } from './COfa'

{/* import tomato from './title.png'*/}

export const Hero = () => {
const videos = ["/Brad.webm", "/chick.webm", "/flint.webm"];

const textRef = useRef(null);

useEffect(() => {
  // Title animation



  // Paragraph animation
  gsap.fromTo(
    textRef.current,
    { y: 60, z: -200, opacity: 0 },
    {
      y: 0,
      z: 0,
      opacity: 1,
      duration: 3,
      ease: "power3.out",
      scrollTrigger: {
        trigger: textRef.current,
        start: "top 85%",
        toggleActions: "play reverse play reverse",
      },
    }
  );
}, []);

 const titleRef = useRef(null);

 useEffect(() => {
    if (!titleRef.current) return;

    const messages = ["BOOK", "RIDE", "SAFELY"];
    let index = 0;
    const el = titleRef.current;

    // Set initial text
    el.textContent = messages[index];

    const animateText = () => {
      // Fade out + move up
      gsap.to(el, {
        opacity: 0,
        y: -40,
        duration: 1,
        ease: "power2.inOut",
        onComplete: () => {
          // Swap text
          index = (index + 1) % messages.length;
          el.textContent = messages[index];

          // Fade in + move from below
          gsap.fromTo(
            el,
            { opacity: 0, y: 40 },
            {
              opacity: 1,
              y: 0,
              duration: 1,
              ease: "power2.inOut",
              onComplete: () => {
                // Pause 1 second, then repeat
                gsap.delayedCall(3, animateText);
              },
            }
          );
        },
      });
    };

    animateText();
  }, []);



const videoRef = useRef(null);

useEffect(() => {
  const video = videoRef.current;
  if (!video) return;

  let currentIndex = 0;

  // Set initial video
  video.src = videos[currentIndex];
  video.play();

  const handleEnded = () => {
    // Fade out
    gsap.to(video, {
      duration: 0.2,
      opacity: 0,
      onComplete: () => {
        // Small delay
        gsap.delayedCall(0.5, () => {
          // Manually change index (NO setState)
          currentIndex = (currentIndex + 1) % videos.length;

          // Update video source directly
          video.src = videos[currentIndex];
          video.load();
          video.play();

          // Fade back in
          gsap.to(video, {
            duration: 0.3,
            opacity: 1,
          });
        });
      },
    });
  };

  video.addEventListener("ended", handleEnded);

  return () => {
    video.removeEventListener("ended", handleEnded);
  };
}, []);








  const frostedRefff = useRef(null);

  useEffect(() => {
    if (!frostedRefff.current) return;

    gsap.fromTo(
      frostedRefff.current,
      {
        backgroundColor: "rgba(239, 68, 68, 0.02)", // start amber-50/20
        backdropFilter: "blur(0.2px)",
      },
      {
        backgroundColor: "rgba(168, 85, 247, 0.01", // end greenish blur color
        backdropFilter: "blur(0.3px)",
        scrollTrigger: {
          trigger: frostedRefff.current,
start: "top 65%",  // start when top of element hits 75% down the viewport
end: "top 99%", // end when bottom of element hits 25% down

          scrub: true,
        },
      }
    );
  }, []);














  const frostedReff = useRef(null);

  useEffect(() => {
    if (!frostedReff.current) return;

    gsap.fromTo(
      frostedReff.current,
      {
        backgroundColor: "rgba(239, 68, 68, 0.02)", // start amber-50/20
        backdropFilter: "blur(1px)",
      },
      {
        backgroundColor: "rgba(168, 85, 247, 0.01", // end greenish blur color
        backdropFilter: "blur(5px)",
        scrollTrigger: {
          trigger: frostedReff.current,
start: "top 35%",  // start when top of element hits 75% down the viewport
end: "top 99%", // end when bottom of element hits 25% down

          scrub: true,
        },
      }
    );
  }, []);


  const frostedRef = useRef(null);

  useEffect(() => {
    if (!frostedRef.current) return;

    gsap.fromTo(
      frostedRef.current,
      {
        backgroundColor: "rgba(239, 68, 68, 0.02)", // start amber-50/20
        backdropFilter: "blur(1px)",
      },
      {
        backgroundColor: "rgba(168, 85, 247, 0.01", // end greenish blur color
        backdropFilter: "blur(5px)",
        scrollTrigger: {
          trigger: frostedRef.current,
start: "top 35%",  // start when top of element hits 75% down the viewport
end: "top 99%", // end when bottom of element hits 25% down

          scrub: true,
        },
      }
    );
  }, []);






  const leftRef = useRef()
  const rightRef = useRef()
function Polar() {
  const groupRef = useRef()
  const [color, setColor] = useState(new THREE.Color('red'))

  // Rainbow ambient light (no rotation here)
  useFrame(({ clock }) => {
    const t = clock.getElapsedTime()
    const h = (t * 0.1) % 1
    setColor(new THREE.Color().setHSL(h, 0.8, 0.5))
  })

  useEffect(() => {
    if (!groupRef.current) return

    // ✅ SET INITIAL ROTATION (EDIT THESE VALUES)
    groupRef.current.rotation.set(
      0.25,              // x — tilt forward/back
      Math.PI / 3,       // y — turn left/right
      0                  // z — roll
    )

    // ✅ SCROLL-CONTROLLED ROTATION
    gsap.fromTo(
      groupRef.current.rotation,
      {
x: 0.4,                // slight tilt
    y: Math.PI / 4,        // angled view
    z: 0,
      },
      {
x: -0.6,               // small downward tilt
    y: -Math.PI /-2,       // rotate to other side
    z: 0,
    ease: "none",
    scrollTrigger: {
      trigger: "#c-right-leaf",
      start: "top bottom",
      end: "bottom top",
      scrub: 1,
        },
      }
    )
  }, [])

  return (
    <group ref={groupRef}>
      <ambientLight intensity={11.1} color={'pink'} />
      <directionalLight position={[5, 10, 5]} intensity={1.1} castShadow />
      <pointLight position={[-10, 5, -10]} intensity={5.1} />
      <COfa position={[0, 0, 0]} scale={1.5} />
      <Environment preset="sunset" />
    </group>
  )
}



function Tbaga() {
  const groupRef = useRef()
  const [color, setColor] = useState(new THREE.Color('red'))

  // Rainbow ambient light (no rotation here)
  useFrame(({ clock }) => {
    const t = clock.getElapsedTime()
    const h = (t * 0.1) % 1
    setColor(new THREE.Color().setHSL(h, 0.8, 0.5))
  })

  useEffect(() => {
    if (!groupRef.current) return

    // ✅ SET INITIAL ROTATION (EDIT THESE VALUES)
    groupRef.current.rotation.set(
      0.25,              // x — tilt forward/back
      Math.PI / 3,       // y — turn left/right
      0                  // z — roll
    )

    // ✅ SCROLL-CONTROLLED ROTATION
    gsap.fromTo(
      groupRef.current.rotation,
      {
x: 0.4,                // slight tilt
    y: Math.PI / 4,        // angled view
    z: 0,
      },
      {
        
x: -0.6,               // small downward tilt
    y: -Math.PI / 4,       // rotate to other side
    z: 0,
    ease: "none",
    scrollTrigger: {
      trigger: "#c-right-leaf",
      start: "top bottom",
      end: "bottom top",
      scrub: 1,
        },
      }
    )
  }, [])

  return (
    <group ref={groupRef}>
      <ambientLight intensity={0.1} color={color} />
      <directionalLight position={[5, 10, 5]} intensity={11.1} castShadow />
      <pointLight position={[-10, 5, -10]} intensity={1.1} />
      <Tbag position={[0, 0, 0]} scale={0.03} />
      <Environment preset="sunset" />
    </group>
  )
}





  gsap.registerPlugin(ScrollTrigger)





const sectionRef = useRef(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    gsap.fromTo(
      sectionRef.current,
      { backgroundColor: "darkorange" },     // start color
      {
        backgroundColor: "#111111", 
        
           // end color
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,                 // smooth animation tied to scroll
        },
      }
    );
  }, []);




  return (
<section      ref = {sectionRef}
 className="relative w-full  text-white py-1 overflow-hidden pt-60 ">
    <div className="mb-16 md:px-0 px-5">





      <section id="hero" className="noisy text-center space-y-6">


<p
  ref={textRef}
  style = {{ fontFamily: "array", color:'black'}}className=" foreign text-[18px] md:text-[22px] font-serif leading-tight text-center max-w-lg mx-auto relative "
>
  <span  style={{ 
    fontWeight: 'bold',      // bold
    fontStyle: 'italic',     // italic
    color: 'pink',        // gold/yellow
  }}>
    Luxury
  </span> rides that feel personal and effortless. <br />
  Every trip designed around comfort and peace of mind. <br /><br />

  A fleet that’s ready when you are, <br />
  arriving on time,  <span style={{ 
    fontWeight: 'bold',      // bold
    fontStyle: 'italic',     // italic
    color: 'white',        // gold/yellow
  }}>every time.</span> 
</p>
      <h2 ref={titleRef} style={{color:'white' ,fontFamily:'Panchang',    fontStyle: 'italic',     // italic
}} className="title text-[2.5rem] md:text-[4rem] ">
        Urban Bro
      </h2>


        <div>
          <div className="flex items-center justify-center h-screen">
                    <div className="-mt-150 -ml-120" >

            <video
              ref={videoRef}
              muted
              className="mid absolute w-[500px] h-[300px] object-cover"
            />
            </div>
          </div>
        </div>

        <div className="relative -top-300">
          <div className="canvas-wrapper" id="c-left-leaf">
            <Canvas shadows camera={{ position: [10, 2, 5], fov: 50 }}>
              <OrbitControls enablePan={false} enableZoom />
              <Environment preset="studio" />
              <group ref={leftRef}>
                <Polar />
              </group>
            </Canvas>
          </div>

          <div className="kanvas-wrapper" id="c-right-leaf">
            <Canvas shadows camera={{ position: [10, 2, 15], fov: 50 }}>
              <OrbitControls enablePan={false} enableZoom />
              <Environment preset="sunset" />
              <group scale={[3, 3, 3]} ref={rightRef}>
                <Tbaga />
              </group>
            </Canvas>
          </div>
        </div>





<div className = 'respond'>

      <div className="-mt-80">
          <button className="rainbow-btn mt-6">
            Book
          </button>

          <p  className="fh mt-4 text-gray-300 text-lg">
            From 500 Drivers / Under 9 Months
          </p>
        </div>
        
        </div>








      </section>
<div className = 'respond1'>
      <div className="sub-content mt-10 max-w-xl mx-auto text-center">
        <p className="md-text text-gray-400">
          Every service we provide is a reflection of quality, comfort, and professionalism. 
          Your ride with Urban Limo is designed to exceed expectations.
        </p>
      </div>
</div>
    </div>
</section>

  )
}
