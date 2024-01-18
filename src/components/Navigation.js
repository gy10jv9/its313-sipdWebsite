import React from 'react'
import gsap from 'gsap'
import { useLayoutEffect, useRef } from 'react';

const Navigation = () => {
    var section = 'home'
    var isnavexpanded = false

    const OnHover = ({ currentTarget }) => {
        /*const tl = gsap.timeline()
        .to('.option', { 
            width: 'fit-content',
            padding: '10px 20px 10px 20px',
            duration: 0.4,
            ease: 'power2.out'
        })
        .to('.option.bracket', { 
            width: 0,
            padding: 0,
            margin: 0,
            duration: 0.4,
            ease: 'step(1)'
        }, '-=0.4')
        .to('.nav', { 
            borderRadius: '8px',
            padding: '2px',
            duration: 0.4,
            ease: 'power2.out'
        }, '-=0.4')*/
        
        if (isnavexpanded == true) {
            gsap.to(currentTarget, { 
                boxShadow: '0px 4px 8px -1px rgba(0,0,0,0.25) inset',
                duration: 0.2,
                ease: 'power2.out'
            });
        } else {
            isnavexpanded = true
        }
    };
    const OnRevert = ({ currentTarget }) => {
        gsap.to(currentTarget, { 
            boxShadow: 'none',
            duration: 0.2,
            ease: 'power2.out'
        })
    };
    /*const navcolapsetl1 = gsap.timeline()
    navcolapsetl1
        .to('.about', {
            width: 0,
            padding: 0,
            duration: 1,
            ease: 'power2.out',
        }, '+=1')
        .to('.events', {
            width: 0,
            padding: 0,
            duration: 1,
            ease: 'power2.out',
        }, '-=1')
        .to('.bracket.left', {
            width: 'fit-content',
            paddingLeft: '30px',
            duration: 1,
            ease: 'power2.out',
        }, '-=1')
        .to('.bracket.right', {
            width: 'fit-content',
            paddingRight: '30px',
            duration: 1,
            ease: 'power2.out',
        }, '-=1')
        .to('.nav', { 
            borderRadius: '25px',
            padding: '2px 0 2px 0',
            duration: 0.4,
            ease: 'power2.out'
        }, '-=2')*/

    /*const Expandnav_animation = () => {
        console.log("🚀 ~ Navigation ~ Expandnav:", Expandnav)
        let expandnav = gsap.timeline()
        console.log("🚀 ~ Navigation ~ expandnav:", expandnav)
        expandnav
            .to('.option', { 
                width: 'fit-content',
                padding: '10px 20px 10px 20px',
                duration: 0.4,
                ease: 'power2.out'
            })
            .to('.option.bracket', { 
                width: 0,
                padding: 0,
                margin: 0,
                duration: 0.4,
                ease: 'power2.out'
            }, '-=0.4')
            .to('.nav', { 
                borderRadius: '8px',
                padding: '2px',
                duration: 0.4,
                ease: 'power2.out'
            }, '-=0.4')
        console.log("🚀 ~ Navigation ~ expandnav:", expandnav)
    }*/
    /*const Expandnav = () => {
        console.log("🚀 ~ Expandnav ~ Expandnav:", Expandnav)
        isnavexpanded = true
    }*/
    const Animatenav = (state) => {
        
        
        if (state == 'colapse') {
            if (section == 'home') {
                colapse.play()
                    }
        } else if (state == 'expand') {
            let expandnav = gsap.timeline()

        expandnav
            .to('.option', { 
                width: 'fit-content',
                padding: '10px 20px 10px 20px',
                duration: 0.4,
                ease: 'power2.out'
            })
            .to('.option.bracket', { 
                width: 0,
                padding: 0,
                margin: 0,
                duration: 0.4,
                ease: 'power2.out'
            }, '-=0.4')
            .to('.nav', { 
                borderRadius: '8px',
                padding: '2px',
                duration: 0.4,
                ease: 'power2.out'
            }, '-=0.4')
        }
    }
    const Colapsenav = () => {

            colapse.play()

        isnavexpanded = false
    }
    const Expandnav = () => {
        colapse.reverse()
        isnavexpanded = true
        console.log('expand')
    }
    const colapse = gsap.timeline()

    const ToOfficers = () =>{
        const section2 = document.querySelector('#officers-section')
        section2.scrollIntoView({ behavior: 'smooth' })
    }
    const ToHome = () =>{
        const section2 = document.querySelector('.banner')
        section2.scrollIntoView({ behavior: 'smooth' })
    }
    const ToAbout = () => {
        const yCoordinate = window.innerHeight * 8
        window.scrollTo({ top: yCoordinate, behavior: 'smooth' })
    }
    const ToEvents = () =>{
        const yCoordinate = window.innerHeight * 22
        window.scrollTo({ top: yCoordinate, behavior: 'smooth' })
    }
    const closeHint = () =>{
        const section2 = document.querySelector('.hint')
        section2.scrollIntoView({ behavior: 'smooth' })
    }

    const hitntl = gsap.timeline()
    const hidehinttl = gsap.timeline()

    const Hidehint = () => {
        gsap.to('#hint-container' ,{
            display: 'none',
        })
    }

    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
        if (section == 'home') {
            colapse
                .to('.nav .about', {
                    width: 0,
                    padding: 0,
                    duration: 0.5,
                    ease: 'power2.out',
                })
                .to('.nav .officers', {
                    width: 0,
                    padding: 0,
                    duration: 0.5,
                    ease: 'power2.out',
                }, '-=0.5')
                .to('.events', {
                    width: 0,
                    padding: 0,
                    duration: 0.5,
                    ease: 'power2.out',
                }, '-=0.5')
                .to('.bracket.left', {
                    width: 'fit-content',
                    paddingLeft: '30px',
                    duration: 0.5,
                    ease: 'power2.out',
                }, '-=0.5')
                .to('.bracket.right', {
                    width: 'fit-content',
                    paddingRight: '30px',
                    duration: 0.5,
                    ease: 'power2.out',
                }, '-=0.5')
                .to('.nav', { 
                    borderRadius: '25px',
                    padding: '2px 0 2px 0',
                    duration: 0.5,
                    ease: 'power2.out'
                }, '-=0.5')
            colapse.play()
        }
            isnavexpanded = false

            
        })
        return () => ctx.revert();
    })

    return (
        <div>
            <div id='hint-container'>
                <div className='hint' onClick={closeHint}> 
                    Scroll down to proceed...
                    <div className='hide-bttn' onClick={Hidehint}></div>
                </div>

            </div>
            <div className='nav-container'>
                <div className='nav' onMouseEnter={Expandnav} onMouseLeave={Colapsenav}>
                    <div className='option bracket left'> {'<'} </div>
                    <div className='option home' onClick={ToHome} onMouseEnter={OnHover} onMouseLeave={OnRevert}> home </div>
                    <div className='option about' onClick={ToAbout} onMouseEnter={OnHover} onMouseLeave={OnRevert}> about </div>
                    <div className='option officers' onClick={ToOfficers} onMouseEnter={OnHover} onMouseLeave={OnRevert}> officers </div>
                    <div className='option events' onClick={ToEvents} onMouseEnter={OnHover} onMouseLeave={OnRevert}> events </div>
                    <div className='option bracket right'> {'>'} </div>
                </div>
            </div>
        </div>
    )
    }

export default Navigation