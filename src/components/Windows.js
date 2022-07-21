import React from 'react'
import Icon from './Icon'
import arsenal from '../Icons/Windows/arsenal.png'
import calendar from '../Icons/Windows/calendar.png'
import edge from '../Icons/Windows/edge.png'
import excel from '../Icons/Windows/excel.png'
import office from '../Icons/Windows/office.png'
import ppt from '../Icons/Windows/ppt.png'
import xbox from '../Icons/Windows/xbox.png'
import word from '../Icons/Windows/word.png'
import store from '../Icons/Windows/store.png'
import prime from '../Icons/Windows/prime.png'
import settings from '../Icons/Windows/settings.png'
import mail from '../Icons/Windows/mail.png'

function Windows() {
    return (
        <div className='windows-main absolute flex flex-col bottom-16 items-center content-center justify-center w-full'>
            <div className='windows-inner-top'>
                <p>Pinned</p>
                <div className='windows-inner-icons'>
                    <div className='windows-inner-icons-left'>
                        <Icon type={1} name="Arsenal" />
                        <Icon type={1} name="Arsenal" />
                        <Icon type={1} name="Arsenal" />
                        <Icon type={1} name="Arsenal" />
                        <Icon type={1} name="Arsenal" />
                        <Icon type={1} name="Arsenal" />
                    </div>
                    <div className='windows-inner-icons-right'>
                        <Icon type={1} name="Arsenal" />
                        <Icon type={1} name="Arsenal" />
                        <Icon type={1} name="Arsenal" />
                        <Icon type={1} name="Arsenal" />
                        <Icon type={1} name="Arsenal" />
                        <Icon type={1} name="Arsenal" />
                    </div>
                </div>
                <p>Recommended</p>
                <div className='windows-recommened'>
                    <Icon />
                    <Icon />
                    <Icon />
                    <Icon />
                    <Icon />
                    <Icon />
                    <Icon />
                    <Icon />
                    <Icon />
                </div>
            </div>
            <div className='windows-inner-bottom'>
                <p>Designed and developed by Abdul Moid Khan Mohammed</p>
            </div>
        </div>
    )
}

export default Windows