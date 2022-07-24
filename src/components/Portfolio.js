import React from 'react'
import Icon from './Icon'
import chrome from '../Icons/Desktop/chrome.png'
import next from '../Icons/Folder/nextjs.png'
import django from '../Icons/Folder/django.png'
function Portfolio() {
  return (
    <div className='folder-main absolute flex flex-col items-center content-center h-screen justify-center w-full top-0'>
            <div className='folder-top w-2/4 flex flex-col items-center py-12'>
                <h1 className="text-white text-4xl text-center">Portfolio</h1>
                <div className='grid w-5/6 grid-cols-2 sm:grid-cols-1 pt-5'>
                    <Icon img={next} type='3' name='NFT Marketplace' subtxt='Solidity | Next.js | Tailwind'/>
                    <Icon img={django} type='3' name='Grievance Portal' subtxt='Python | Django'/>
                    <Icon img={next} type='3' name='Crowdcoin' subtxt='Solidity | Next.js'/>    
                    <Icon img={django} type='3' name='Sentiment Analyser' subtxt='Python | Django | nltk | vader'/>
                </div>
            </div>
            
        </div>
  )
}

export default Portfolio