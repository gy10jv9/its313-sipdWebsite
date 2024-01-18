import gsap from 'gsap'
import { useLayoutEffect} from 'react';
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const Footer = () => {
    return (
        <div id='footer-container'>
            <div id='footer'>
                <div className='footer left'>
                    <div className='logo'></div>
                    <p style={{textTransform: 'uppercase'}}> Society of Programmers and Innovators 2023 </p>
                    <p style={{marginTop: '10px', textAlign: 'center'}}> Galo corner Gatuslao Streets, Bacolod City, 6100 Philippines </p>
                </div>
                <div className='footer middle'>
                    <p style={{textAlign: 'justify'}}> We are the Society of Programmers and Developers, a club for anyone who loves coding and creating from La Consolacion College Bacolod. Whether you are a beginner or a pro, you are welcome to contact us and share your passion, skills and ideas. We participated in workshops, hackathons, competitions and social events throughout the year. You can find us on Facebook, Twitter and Instagram. Happy coding! </p>
                </div>
                <div className='footer right'>
                    <h1> Send us a message </h1>
                    <input type="email" id="email" name="email" required placeholder='youremail@sample.com' style={{width:'75%'}}/>
                    <textarea id="message" name="message" rows="4" cols="50" required placeholder='enter your messege here...'></textarea>
                    <div className='bottom'>
                        <input type="submit" value="Submit"/>
                        <div id='social-icons'> 
                            <div className='img' style={{background: `url(${process.env.PUBLIC_URL}/images/icons8-facebook-100.png) center center/cover`}}></div>
                            <div className='img' style={{background: `url(${process.env.PUBLIC_URL}/images/icons8-instagram-100.png) center center/cover`}}/>
                            <div className='img' style={{background: `url(${process.env.PUBLIC_URL}/images/icons8-twitterx.png) center center/cover`, width: '36px'}}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
