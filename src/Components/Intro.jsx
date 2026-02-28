import React, { useEffect, useRef } from 'react'

import { SplitText } from 'gsap/all'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import { useMediaQuery } from 'react-responsive'

gsap.registerPlugin(ScrollTrigger)

export const Intro = () => {
useEffect(() => {
  const isMobile = window.innerWidth <= 767;

  const startValue = isMobile ? 'top 50%' : '+=10vh';
  const endValue = isMobile ? '+=200vh' : '+=350vh';

  gsap.fromTo(
    '.intro-text-wrapper',
    {
      opacity: 1,       // BEFORE: fully visible
      y: 0,             // BEFORE: original position
      color: 'white',     // BEFORE: red text
    },
    {
      opacity: 0,       // AFTER: fade out
      y: -50,           // AFTER: move up
      color: 'red',    // AFTER: change text color
      ease: 'none',
      scrollTrigger: {
        trigger: '.intro-text-wrapper',
        start: startValue,
        end: endValue,
        pinSpacing: false,
        pin: true,
        scrub: true,
        // markers: true
      }
    }
  );
}, []);

















useGSAP(() => {
  const video = videoRef.current
  const textContainer = document.querySelector('.text-container')

  video.onloadedmetadata = () => {
    const startValue = isMobile ? 'top 50%' : 'top top'
    const endValue = isMobile ? '80% top' : 'bottom+=40% top'

    // Text animation timeline
    gsap.timeline({
      scrollTrigger: {
        trigger: video,
        start: startValue,
        end: endValue,
        scrub: true,
      },
    })
    .to(textContainer, { opacity: 1, y: 0, duration: 0.1 }) // ensure visible at start
    .to(textContainer, { opacity: 0, duration: 0.3, ease: 'power1.out' }, video.duration / video.duration * 1) // fade out at end
  }
})















  
  const videoRef = useRef()
  const videoTimelineRef = useRef()

  const isMobile = useMediaQuery({ maxWidth: 767 })

useGSAP(() => {
  const heroSplit = new SplitText('.title', { type: 'chars, words' })
  const paragraphSplit = new SplitText('.subtitle', { type: 'lines' })
  heroSplit.chars.forEach((char) => char.classList.add('text-gradient'))

  gsap.from(heroSplit.chars, {
    yPercent: 100,
    duration: 1.8,
    ease: 'expo.out',
    stagger: 0.06,
  })

  gsap.from(paragraphSplit.lines, {
    opacity: 0,
    yPercent: 100,
    duration: 1.8,
    ease: 'expo.out',
    stagger: 0.06,
    delay: 1,
  })

  gsap.timeline({
    scrollTrigger: {
      trigger: '#hero',
      start: 'top top',
      end: 'bottom top',
      scrub: true,
    },
  })
    .to('.right-leaf', { y: 200 }, 0)
    .to('.left-leaf', { y: -200 }, 0)

  const video = videoRef.current

  // ✅ KEEP onloadedmetadata — NO addEventListener
videoRef.current.onloadedmetadata = () => {
  const video = videoRef.current
  video.currentTime = 0.05

  const startValue = isMobile ? 'top 50%' : 'top top';
const endValue = isMobile ? '80% top' : 'bottom+=40% top';

const tl = gsap.timeline({
  scrollTrigger: {
    trigger: videoRef.current,
    start: startValue,
    end: endValue,
    pin: true,
    scrub: true,
  },
});

tl.to(videoRef.current, {
  currentTime: videoRef.current.duration,
  ease: 'none',
  opacity:0.8,
}, 0)
.to(videoRef.current, {
  y: 3, // 👈 adjust this (50–120 is nice range)
  opacity:1,
  ease: 'powers.inOut',
}, 0);

}

}, [])


  return (
    <div >
          <div className="intro-text-wrapper max-w-2xl px-26 pt-18 h-screen relative z-10">

<section className="dagag flex items-start pt-32 h-screen px-12 relative z-10">

      <div className="max-w-2xl">
        
        {/* Logo */}
        <div className="mb-10">

        </div>

              <div className="absolute top-22 left-10 w-full h-0.5 bg-black"/>


        {/* Main Heading */}
<h1 style = {{fontFamily:'Panchang',}}
  className="
    font-light uppercase
    leading-[1.05]
    tracking-[0.08em] md:tracking-[0.12em]
    text-[clamp(1.2rem,2.7vw,3.7rem)]
    max-w-[20ch]
  "
>
  INTERNATIONAL TOP LUXURY TRANSPORTATION
</h1>

<p style = {{fontFamily:'Bespoke stencil'}}
  className="
    mt-4 md:mt-6 lg:mt-8
    text-[clamp(0.9rem,1.2vw,1.25rem)]
    tracking-[0.15em]
    text-gray-300
    max-w-[35ch]
  "
>
  Luxury Beyond The Journey
</p>

<button style = {{fontFamily:'Bespoke stencil'}}
  className="
    mt-6 md:mt-8 lg:mt-10
    px-6 md:px-8 lg:px-10
    py-2.5 md:py-3 lg:py-4
    text-[clamp(0.75rem,0.9vw,0.95rem)]
    uppercase
    tracking-[0.25em]
    border border-black
    transition-all duration-300
    hover:bg-white hover:text-black
  "
>
  Book Now
</button>

      </div>

    </section>

</div>




<div>
  <section id="hero" className=" relative noisy min-h-screen">
    {/* ALL TEXT CONTENT HERE */}
  </section>

  <div className="video absolute inset-0 pointer-events-none">
    <video
      src="/thomas.mp4"
      muted
      playsInline
      preload="auto"
      ref={videoRef}
      className="w-full h-full object-cover opacity-70"
    />
  </div>
</div>










    </div>
  )
}

export default Intro