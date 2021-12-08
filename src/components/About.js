import React from 'react'
import "../index.css"

/* trying to recreate from here:
https://www.uidesigndaily.com/posts/figma-faq-section-accordion-day-1477
*/

const About = () => {
    return (
        <div className="about">
            <div className="about-sections">
                <ul>
                    <li>Who are you?</li>
                    <li>What do you do?</li>
                    <li>Why do you do it?</li>
                </ul>
            </div>
            <div className="about-text">
                <h3>About</h3>
            </div>
        </div>
    )
}

export default About
