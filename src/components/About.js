import React from 'react'
import Icon from './Icon'

function About({ setAboutModal, aboutModal }) {
    return (
        <div onClick={() => { setAboutModal(!aboutModal) }} className='folder-main absolute flex flex-col items-center content-center h-screen justify-center w-full top-0'>
            <div onClick={e => { e.stopPropagation(); }} className=' windows-main folder-top windows-main overflow-auto md:w-5/6 max-h-[600px]  w-2/4  flex flex-col items-center gap-4 py-12'>
                <h1 className="text-white text-4xl text-center">About me</h1>
                <p className='text-cyan-600 px-5 text-center'>
                    Hello! I’m Abdul Moid Khan Mohammed, a dedicated and innovative computer science professional
                    currently pursuing my Master’s in Computer Science at Bradley University,
                    where I maintain an impressive 4.00 GPA. With a strong foundation in computer science
                    from Osmania University, I have honed my skills across a broad spectrum of technologies
                    including React.js, Tailwind.css, Node.js, and data science tools like TensorFlow and Scikit,
                    among others.I'm driven towards my goals and my main goal is to become the best
                    version of myself.
                    <br />
                    My passion for technology drives me to constantly explore new trends and
                    apply them in real-world applications. As a Graduate Research Assistant at
                    Bradley University, I've implemented web-based sentiment analysis of tweets,
                    analyzing emotions on a vast scale with a focus on efficiency and accuracy.
                    My professional experience also includes a role as a Full Stack Engineer at
                    Time Space Ventures / RTSN, where I led the development of an innovative NFT
                    marketplace, achieving a significant increase in platform transactions and artist
                    engagement. Additionally, my work at Knoct.in and Across the Globe has allowed me
                    to excel in backend development and frontend innovations, respectively, further
                    diversifying my skill set.


                    <br /> My portfolio showcases projects that emphasize both my development skills 
                    and my ability to improve user experience and system reliability. Whether it's creating
                     a social media platform, developing a product recommender system, or streamlining public
                      grievance management, my goal is always to leverage technology to create impactful solutions.
                    <br />

                </p>
            </div>

        </div>
    )
}

export default About