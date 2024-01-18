import React from 'react'
import gsap from 'gsap'
import { useLayoutEffect, useRef } from 'react';
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

const Events = () => {
    const EndSnap = (element, multiplier) => { // end snap multiplier: bottom + multiplier
        const endPosition = window.scrollY + document.querySelector(element).getBoundingClientRect().top + window.innerHeight * (multiplier);
        return endPosition;
    };

    const generatePoints = () => { // for glitch clip path
        const number = Math.floor(Math.random() * 60);
        const points = [];
        let x = 0;
        let y = 0;
      
        for (let i = 0; i < number; i++) {
          // Alternate between x and y
          if (i % 2) {
            x = Math.floor(Math.random() * 100);
          } else {
            y = Math.floor(Math.random() * 100);
          }
      
          points.push(`${x}% ${y}%`);
        }
        
        return(`polygon(${points.join(",")})`)
    };

    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            const glitch = gsap.timeline({repeat: -1})
            glitch
                .to('.mainglitch', {
                    clipPath: generatePoints(),
                    duration: 0.1,
                    ease: "steps(1)"
                }, '+=1')
                .to('.primaryglitch', {
                    opacity: 100,
                    clipPath: generatePoints(),
                    duration: 0.1,
                    ease: "steps(1)"
                }, '-=0.2')
                .to('.secondaryglitch', {
                    opacity: 100,
                    clipPath: generatePoints(),
                    duration: 0.1,
                    ease: "steps(1)"
                }, '-=0.3')
                .to('.mainglitch', {
                    clipPath: 'none',
                    duration: 0.1,
                    ease: "steps(1)"
                },)
                .to('.primaryglitch', {
                    opacity: 0,
                    duration: 0.1,
                    ease: "steps(1)"
                }, '-=0.2')
                .to('.secondaryglitch', {
                    opacity: 0,
                    duration: 0.1,
                    ease: "steps(1)"
                }, '-=0.3')
                .to('.mainglitch', {
                    clipPath: generatePoints(),
                    duration: 0.1,
                    ease: "steps(1)"
                }, '+=3')
                .to('.primaryglitch', {
                    opacity: 100,
                    clipPath: generatePoints(),
                    duration: 0.1,
                    ease: "steps(1)"
                }, '-=0.2')
                .to('.secondaryglitch', {
                    opacity: 100,
                    clipPath: generatePoints(),
                    duration: 0.1,
                    ease: "steps(1)"
                }, '-=0.3')
                .to('.mainglitch', {
                    clipPath: 'none',
                    duration: 0.1,
                    ease: "steps(1)"
                },)
                .to('.primaryglitch', {
                    opacity: 0,
                    duration: 0.1,
                    ease: "steps(1)"
                }, '-=0.2')
                .to('.secondaryglitch', {
                    opacity: 0,
                    duration: 0.1,
                    ease: "steps(1)"
                }, '-=0.3')
                .to('.mainglitch', {
                    clipPath: generatePoints(),
                    duration: 0.1,
                    ease: "steps(1)"
                }, '+=0.1')
                .to('.primaryglitch', {
                    opacity: 100,
                    clipPath: generatePoints(),
                    duration: 0.1,
                    ease: "steps(1)"
                }, '-=0.2')
                .to('.secondaryglitch', {
                    opacity: 100,
                    clipPath: generatePoints(),
                    duration: 0.1,
                    ease: "steps(1)"
                }, '-=0.3')
                .to('.mainglitch', {
                    clipPath: generatePoints(),
                    duration: 0.1,
                    ease: "steps(1)"
                }, '+=0.1')
                .to('.primaryglitch', {
                    opacity: 100,
                    clipPath: generatePoints(),
                    duration: 0.1,
                    ease: "steps(1)"
                }, '-=0.2')
                .to('.secondaryglitch', {
                    opacity: 100,
                    clipPath: generatePoints(),
                    duration: 0.1,
                    ease: "steps(1)"
                }, '-=0.3')

            glitch.play()

            const Eventstl = gsap.timeline()
            Eventstl
                .from('.img-container.one', {
                    x: -1000,
                    y: -1000,
                    rotate: -100,
                    duration: 1,
                    ease: 'power2.out',
                })
                .from('.description-container.one', {
                    opacity: 0,
                    duration: 1,
                    ease: 'power2.out',
                }, '-=0.2')
                .to('.description-container.one', {
                    opacity: 0,
                    duration: 1,
                    ease: 'power2.out',
                }, '+=1')
                .from('.img-container.two', {
                    x: 1000,
                    y: 1000,
                    rotate: 180,
                    duration: 1,
                    ease: 'power2.out',
                },)
                .from('.description-container.two', {
                    opacity: 0,
                    duration: 1,
                    ease: 'power2.out',
                }, '-=0.8')

            ScrollTrigger.defaults({
                start: 'top top',
                toggleActions: 'restart pause reverse pause',
                snap: true,
                pinSpacing: false,
                scrub: 1,
            })
            ScrollTrigger.create({ // pin only
                trigger: '.events-container',
                end: EndSnap('.events-container', 10),
                animation: Eventstl,
                pin: '.events-container',
                snap: false,
                pinSpacing: true,
            })
        })
        return () => ctx.revert();
    }, [])

    return (
        <div className='events-container'>
            <div className='left'>
                <div className='img-container one' style={{transform: `translateX(8vw) rotate(4deg)`}}>
                    <img style={{background: `url(${process.env.PUBLIC_URL}/images/moonshot.jpg) center center/cover`}}></img>
                </div>
                <div className='img-container two' style={{transform: `translateX(8vw) rotate(-2deg)`}}>
                    <img style={{background: `url(${process.env.PUBLIC_URL}/images/cybersec.jpg) center center/cover`}}></img>
                </div>
            </div>
            <div className='right'>
                <div className='description-container one'>
                    <div className='glitch'>
                        <div className='h1 primaryglitch'>  DTI Moonshot TNK 2023 </div>
                        <div className='h1 secondaryglitch'>  DTI Moonshot TNK 2023 </div>
                        <h1 className='h1 mainglitch' style={{color: 'white'}}> DTI Moonshot TNK 2023 </h1>
                    </div>
                    <p> The pitching competition, which is centered on this year’s theme Moonshot TNK Sustains MSMEs through Trabaho, Negosyo at Konsyumer Innovative Solutions, aims to support local startups and help them advance their technological and creative solutions for the improvement of Western Visayas in the four challenged sectors – health, poverty, education, and the environment. </p>
                </div>
                <div className='description-container two'>
                    <div className='glitch'>
                        <div className='h1 primaryglitch'>  DICT HackforGov2 </div>
                        <div className='h1 secondaryglitch'>  DICT HackforGov2 </div>
                        <h1 className='h1 mainglitch' style={{color: 'white'}}> DICT HackforGov2 </h1>
                    </div>
                    <p className='last'> HackForGov is a capture-the-flag competition with the goal to immerse students in the realities of the cyberspace. Capture the flag competition a computer security exercise in which “flags” are secretly hidden in purposefully-vulnerable programs or websites.

                    The HackForGov aims to increase the pace of developing cyber-proficient students and engage them to take a path in cybersecurity to increase the pool of cyber-proficient individuals; develop problem-solving skills required to identify and mitigate cybersecurity attacks by providing real-world examples thru the analysis of challenges; and identify qualified students as Philippine representatives for international capture-the-flag competitions. </p>
                </div>
            </div>

        </div>
    )
}

export default Events