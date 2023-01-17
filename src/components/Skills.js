import React from 'react'
import Icon from './Icon'
import html from '../Icons/Folder/html.png'
import css from '../Icons/Folder/css.png'
import js from '../Icons/Folder/js.png'
import boot from '../Icons/Folder/boot.png'
import solid from '../Icons/Folder/solid.png'
import next from '../Icons/Folder/nextjs.png'
import reactjs from '../Icons/Folder/reactjs.png'
import ml from '../Icons/Folder/ml.png'
import python from '../Icons/Folder/python.png'
import blener from '../Icons/Folder/blener.png'
import django from '../Icons/Folder/django.png'
import unity from '../Icons/Folder/unity.png'

function Skills({skillsModal, setSkillsModal}) {
  return (
    <div onClick={ () => { setSkillsModal(!skillsModal)}} className='folder-main absolute flex flex-col items-center content-center h-screen justify-center w-full top-0'>
            <div onClick={e => {e.stopPropagation();}} className='windows-main overflow-auto md:w-5/6 max-h-[600px]  folder-top w-2/4 flex flex-col items-center py-12'>
                <h1 className="text-white text-4xl text-center">Skills</h1>
                <div className='grid w-5/6 grid-cols-2 sm:grid-cols-1 pt-5'>
                    <Icon img={html} type='3' name='HTML'/>
                    <Icon img={css} type='3' name='CSS'/>
                    <Icon img={js} type='3' name='Javascript' />    
                    <Icon img={boot} type='3' name='Bootstrap' />
                    <Icon img={solid} type='3' name='Solidity' />
                    <Icon img={reactjs} type='3' name='React.js' />
                    <Icon img={next} type='3' name='Next.js'/>
                    <Icon img={django} type='3' name='Django' />
                    <Icon img={python} type='3' name='Python' />
                    <Icon img={ml} type='3' name='Machine Learning' />
                    <Icon img={blener} type='3' name='Blender' />
                    <Icon img={unity} type='3' name='Unity3D' />
                </div>
            </div>
            
        </div>
  )
}

export default Skills