import React from 'react'
import List from './List'

function Hero() {
    return (
        <>

            <div id="Hero">
                <div>
                <h2>Urvish Patel</h2>
                <h4>Front End Engineer</h4>
                <p>I build accessible, pixel-perfect digital<br/> experiences for the web.</p>
                </div>

                <div className="index">
                    <List />
                </div>

                <div id="logos">
                    <a href="https://github.com/patelurvish0706" target='_blank'><i className="bi bi-github me-3 fs-4" title='Github'></i></a>                    
                    <a href="https://www.linkedin.com/in/urvishpatel0706/" target='_blank'><i className="bi bi-linkedin me-3 fs-4" title='LinkedIn'></i></a>
                    <a href="https://www.salesforce.com/trailblazer/patelurvish0706" target='_blank'><i className="bi bi-cloud-fill me-3 fs-4" title='Trailhead'></i></a>
                    <a href="https://www.instagram.com/urvish_0706/" target='_blank'><i className="bi bi-instagram me-3 fs-4" title='Instagram'></i></a>
                    
                </div>
            </div>
        </>
    )
}

export default Hero
