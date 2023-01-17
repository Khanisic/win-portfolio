import React from 'react'
import Icon from './Icon'

function About({setAboutModal,aboutModal}) {
    return (
        <div onClick={ () => { setAboutModal(!aboutModal)}} className='folder-main absolute flex flex-col items-center content-center h-screen justify-center w-full top-0'>
            <div onClick={e => {e.stopPropagation();}} className=' windows-main folder-top windows-main overflow-auto md:w-5/6 max-h-[600px]  w-2/4  flex flex-col items-center gap-4 py-12'>
                <h1 className="text-white text-4xl text-center">About me</h1>
                <p className='text-cyan-600 px-5 text-center'>Hello, <br/>
                    I am a CS graduate, a self-taught developer who excels in Frontend technologies like Next.js, 
                    React.js and its relevant libraries. 
                    I seek to take on domineering and demanding challenges in life so I can push past the barriers and 
                    experience the phenomenal. I'm driven towards my goals and my main goal is to become the best 
                    version of myself.
                    <br/>
                    A proficient Web2.0 developer, looking to break into the ranks 
                    of Web3.0. With 2 years of experience be it freelance or building industry-level applications, I
                    want to gain more experience in this field that I so much love.
                    I love to develop apps and see my code turn into a fragment of reality built upon my imagination 
                    and skills. The thing I like most about Blockchain is 
                     <br/> Don't trust,  but verify <br/>
                     During my spare time,I play football and basketball in addition to this, I also like to write blogs on 
                     certain topics of interest. 
                     I believe that web3.0 is the best thing to accelerate my career and reach new heights.
                </p>
            </div>

        </div>
    )
}

export default About