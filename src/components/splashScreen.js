import gsap from 'gsap'
import { useLayoutEffect } from 'react';
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

const SplashScreen = () => {
    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            gsap.to('.logoPart1', {
                height: '264px',
                duration: 0.24,
                delay: 1.92,
                ease: 'power2.out',
            })
            gsap.to('.logoPart1', {
                height: '0',
                duration: 0.24,
                delay: 3.8,
                ease: 'power2.out',
            })
            gsap.to('.logoPart4', {
                height: '0',
                duration: 0.24,
                delay: 3.6,
                ease: 'power2.out',
            })
            gsap.to('.logoPart4', {
                height: '240px',
                duration:  0.24,
                delay: 2.20,
                ease: 'power2.out',
            })
            gsap.to('.logoPart2', {
                height: '160px',
                duration:  0.24,
                delay: 2.40,
                ease: 'power2.out',
            })
            gsap.to('.logoPart2', {
                height: '0',
                duration: 0.24,
                delay: 3,
                ease: 'power2.out',
            })
            gsap.to('.logoPart3', {
                height: '129px',
                duration:  0.24,
                delay: 2.60,
                ease: 'power2.out',
            })
            gsap.to('.logoPart3', {
                height: '0',
                duration: 0.24,
                delay: 3.2,
                ease: 'power2.out',
            })
            gsap.to('.logo-container', {
                height: '264px',
                aspectratio: 2/0,
                duration: 0.24,
                delay: 2.85,
                ease: 'power2.out',
            })
            gsap.to('.cover', {
                opacity: '100%',
                delay: 6,
                duration: 0.5,
                ease: 'power2.out',
            })
            gsap.to('.splashScreen', {
                display: 'none',
                delay: 7,
            })
        })

        return () => ctx.revert();
    }, [])

    return (
        <div className='splashScreen'>
            <h1 id='title-splash'> S.I.P.D. </h1>
            <img className='logo-container'></img>
            <img className='logoPart1'></img>
            <img className='logoPart2'></img>
            <img className='logoPart3'></img>
            <img className='logoPart4'></img>
            <div className='cover'></div>
        </div>
    )
}

export default SplashScreen
