import React from 'react'
import gsap from 'gsap'
import { useLayoutEffect, useRef } from 'react';
import membersdata from '../json/members.json'
import Cards from './Cards';

const Members = () => {
    const EndSnap = (element, multiplier) => { // end snap multiplier: bottom + multiplier
        const endPosition = window.scrollY + document.querySelector(element).getBoundingClientRect().top + window.innerHeight * (multiplier)
        return endPosition
    };

    const generatePoints = () => { // for glitch clip path
        const number = Math.floor(Math.random() * 60)
        const points = []
        let x = 0
        let y = 0
      
        for (let i = 0; i < number; i++) {
          // Alternate between x and y
          if (i % 2) {
            x = Math.floor(Math.random() * 100)
          } else {
            y = Math.floor(Math.random() * 100)
          }
      
          points.push(`${x}% ${y}%`);
        }
        
        return(`polygon(${points.join(",")})`)
    }

    const members = Object.values(membersdata.members)

    const changebg = (event) => {
            event.stopPropagation(); // Prevent event propagation
            gsap.to(event.currentTarget, {
                clipPath: generatePoints(),
                duration: 0.1,
                ease: 'step(1)'
            })
            gsap.to('.officers-container', {
                clipPath: generatePoints(),
                duration: 0.1,
                ease: 'step(1)'
            })
            gsap.to(event.currentTarget, {
                clipPath: generatePoints(),
                duration: 0.1,
                ease: 'step(1)'
            })
            gsap.to('.officers-container', {
                clipPath: generatePoints(),
                duration: 0.1,
                ease: 'step(1)'
            })
            gsap.to(event.currentTarget, {
                display: 'none',
                duration: 0.1,
                ease: 'step(1)'
            })
            gsap.to('.officers-container', {
                clipPath: 'none',
                duration: 0.1,
                ease: 'step(1)'
            })
    };

    const changebg2 = (event) => {
        event.stopPropagation(); // Prevent event propagation
        gsap.to('.officers-picture', {
            clipPath: 'none',
            display: 'flex',
            duration: 0.1,
            ease: 'step(1)'
        })
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
            
            const members = Object.values(membersdata.members)
            console.log(members[0]["name"])
        })
        return () => ctx.revert()
    })

    return (
        <div id='officers-section'>
            <div className='glitch'>
                <div className='officers-title primaryglitch'> S.I.P.D. OFFICERS </div>
                <div className='officers-title secondaryglitch'> S.I.P.D. OFFICERS </div>
                <h3 className='officers-title mainglitch' style={{color: 'white'}}> S.I.P.D. OFFICERS </h3>
            </div>
            <div id='officers-grid'>
                {members.map((members) => (
                    <div className='officers-container' onMouseLeave={changebg2} style={{backgroundImage: `url(${process.env.PUBLIC_URL}/images/${members["background2"]})`}}>
                        <div className='officers-picture' onMouseEnter={changebg} style={{backgroundImage: `url(${process.env.PUBLIC_URL}/images/${members["background1"]})`}}></div>
                        <p className='officers-name' style={{ pointerEvents: 'none' }}> {members["name"]} </p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Members
