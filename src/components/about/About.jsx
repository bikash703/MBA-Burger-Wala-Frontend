import React from 'react';
import { Link } from 'react-router-dom';
import {RiFindReplaceFill} from 'react-icons/ri';
import me from '../../assests/founder2.jpg';

const About = () => {
  return (
    <section className='about'>
        <main>
            <h1>About Us</h1>
            <article>
                <h4>MBA Burger Wala</h4>
                <p> We are MBA Burger Wala. The place for most tasty burgers on the entire earth </p>

                <p> Explore the various type of food and burgers. Click below to see the menu </p>
                <Link to={'/'}> <RiFindReplaceFill/> </Link>
            </article>

            <div>
                <h2>Founder</h2>
                <article>
                    <div>
                        <img src={me} alt="founder" />
                        <h3>Bikash</h3>
                    </div>
                    <p> I am Bikash Majhi, The founder of MBA Burger Wala. Affiliated to god taste.  </p>
                </article>
            </div>
        </main>
    </section>
  )
}

export default About
