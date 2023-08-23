import React, { useEffect } from 'react'
import ScrollReveal from 'scrollreveal';

const Linkedin_url = "https://www.linkedin.com/in/keval-patel-1284b7228/"
const Github_url = "https://github.com/kevalsutariya710";
const twitter_url = "https://twitter.com/KevalSutariya71";
const insta_url = "https://www.instagram.com/_keval_710/?igshid=ZDdkNTZiNTM%3D";

export default function HeaderSocials() {

    let effect = () => {
        ScrollReveal({
            reset: false,
            distance: '20px',
            duration: 2000,
            delay: 500
        });
        ScrollReveal().reveal('.home__socials i', { delay: 1000, origin: 'top', interval: 250 });
    }

    useEffect(() => {
        effect();
    }, [])



    return (
        <div className="home__socials">
            <a href={Linkedin_url} className="home__social-links color1" target="_blank">
                <i className="fa-brands fa-linkedin"></i>
            </a>

            <a href={Github_url} className="home__social-links color2" target="_blank">
                <i className="fa-brands fa-github"></i>
            </a>

            <a href={twitter_url} className="home__social-links color3" target="_blank">
                <i className="fa fa-twitter"></i>
            </a>
            <a href={insta_url} className="home__social-links color4" target="_blank">
                <i className="fa fa-instagram"></i>
            </a>

        </div>
    )
}
