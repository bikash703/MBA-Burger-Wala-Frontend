import React from 'react';
import { RiErrorWarningFill } from 'react-icons/ri';
import {Link} from 'react-router-dom';

const Error = () => {
  return (
    <section className='error'>
    <main>
        <article>
            <div>
                <RiErrorWarningFill/>
                <p> Page Not Found </p>
            </div>
            <article>
                <p>Go to home page click below button</p>
                <Link to={'/'}>Go to home </Link>
            </article>
        </article>
    </main>
    </section>
  )
}

export default Error
