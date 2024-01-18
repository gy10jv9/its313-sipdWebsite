import gsap from 'gsap'
import { useLayoutEffect, useRef } from 'react';
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

const Banner = () => {
    useLayoutEffect(() => {
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

        let ctx = gsap.context(() => {
            let splashtl1 = gsap.timeline() // first animation of the splash screen
            splashtl1
                .from('.logoPart1', {
                    height: 0,
                    duration: 1,
                    ease: 'power2.out',
                }, "+=1")
                .from('.logoPart4', {
                    height: 0,
                    duration: 1,
                    ease: 'power2.out',
                }, '-=0.2')
                .from('.logoPart2', {
                    height: 0,
                    duration: 1,
                    ease: 'power2.out',
                }, '-=0.2')
                .from('.logoPart3', {
                    height: 0,
                    duration: 1,
                    ease: 'power2.out',
                }, '-=0.2')
                .from('.logo-container', {
                    height: 0,
                    duration: 1,
                    ease: 'power2.out',
                })
                .to('.logoPart2', {
                    height: 0,
                    duration: 1,
                }, '+=1')
                .to('.logoPart3', {
                    height: 0,
                    duration: 1,
                }, '-=0.2')
                .to('.logoPart4', {
                    height: 0,
                    duration: 1,
                }, '-=0.2')
                .to('.logoPart1', {
                    height: 0,
                    duration: 1,
                }, '-=0.2')
            
            const Bannertl = gsap.timeline()
            Bannertl
                .from('.mainbanner', {
                    opacity: 0,
                    duration: 0.5,
                    ease: 'power2.out',
                })
                .from('.banner .about', {
                    y: '100vh',
                    duration: 1,
                    ease: 'power2.out',
                })
                .to('.banner .about', {
                    y: '-100vh',
                    duration: 1,
                    ease: 'power2.out',
                }, '+=1')
                .from('.banner .purpose', {
                    y: '100vh',
                    duration: 1,
                    ease: 'power2.out',
                })
                .to('.mainbanner', {
                    opacity: 0,
                    duration: 0.5,
                    ease: 'power2.out',
                }, '+=2')

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

            ScrollTrigger.defaults({
                start: 'top top',
                toggleActions: 'restart pause reverse pause',
                snap: true,
                pinSpacing: false,
                scrub: 1,
            })
            ScrollTrigger.create({ // pin only
                trigger: '.intro1cntnr',
                width:  '100vw',
                end: EndSnap('.intro1cntnr', 8),
                pin: '.intro1cntnr',
                snap: false,
            })
            ScrollTrigger.create({ // animation
                trigger: '.intro2cntnr',
                width:  '100vw',
                end: EndSnap('.intro2cntnr', 4),
                animation: splashtl1,
                pin: '.intro2cntnr',
            })
            ScrollTrigger.create({ // pin only
                trigger: '.intro2cntnr-buffer',
                end: EndSnap('.intro2cntnr-buffer', 3),
                pin: '.intro2cntnr',
            })
            ScrollTrigger.create({ // pin only
                trigger: '.mainbanner',
                end: EndSnap('.mainbanner', 6),
                pin: '.mainbanner',
                animation: Bannertl,
                markers: false,
                snap: false,
            })
        })
        return () => ctx.revert();
    }, [])

	return (
		<div className='banner'>
			<section className="intro1cntnr" style={{maxWidth: '100vw', width: '100vw'}}>
                <h1 id='title-splash'> S.I.P.D. </h1>
            </section>
			<section className="intro2cntnr" style={{maxWidth: '100vw', width: '100vw'}}>
                <img className='logo-container'></img>
                <img className='logoPart1'></img>
                <img className='logoPart2'></img>
                <img className='logoPart3'></img>
                <img className='logoPart4'></img>

            </section>
            <section className='anihelper vh100' style={{height: '300vh'}}></section>
            <section className='intro2cntnr-buffer' style={{height: '100vh'}}></section>
            <section className='buffer' style={{height: '100vh'}}></section>
            <section className='mainbanner' style={{maxWidth: '100vw', width: '100vw'}}>
                <div className='glitch'>
                    <h1 className=' primaryglitch'> Society of Innovators, Programmers, and Designers </h1>
                    <h1 className=' secondaryglitch'> Society of Innovators, Programmers, and Designers </h1>
                    <h1 className=' mainglitch'> Society of Innovators, Programmers, and Designers </h1>
                </div>
                <p className='about' style={{maxWidth: '50%', width: '50%'}}>
                    <span style={{fontFamily: 'Louis George Cafe Bold', fontSize: '5vh'}}> About Us </span>
                    <br></br>
                    The Society of Innovators, Programmers, and Designers (SIPD) is a student-run organization dedicated to fostering creativity and technical expertise among the next generation of innovators and problem solvers.
                    <br></br><br></br>
                    <span style={{fontFamily: 'Louis George Cafe Bold', fontSize: '5vh'}}> Our Mission </span>
                    <br></br>
                    Our mission is to empower students with the skills, resources, and mentorship they need to excel in the fields of innovation, programming, and design. We aim to cultivate a community of like-minded individuals who are passionate about technology, creativity, and making a positive impact on the world.
                </p>
                <p className='purpose' style={{maxWidth: '50%', width: '50%'}}>
                    <span style={{fontFamily: 'Louis George Cafe Bold', fontSize: '5vh'}}> Purpose </span>
                    <br></br>
                    To foster a creative community among IT students, promoting innovation, programming skills, and design proficiency for successful careers in the IT industry. 
                    <br></br><br></br>
                    To provide a platform for students to explore emerging technologies, develop practical applications, enhance their problem-solving abilities, and attend relevant workshops to further improve their respective IT skills.
                    <br></br><br></br>
                    To create events that showcase and encourage students to be competitive with their skills, providing opportunities for them to demonstrate their talents and abilities to a broader audience.
                    </p>
            </section>
            <section className='anihelper vh100 formainbanner' style={{height: '600vh'}}></section>
		</div>
	)
}

export default Banner
