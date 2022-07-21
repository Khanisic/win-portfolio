import React from 'react'
import Icon from './Icon'
import chrome from '../Icons/chrome.png'
import folder from '../Icons/folderTaskbar.png'
import notes from '../Icons/notes.png'
import search from '../Icons/search.png'
import windows from '../Icons/windows.png'

function Taskbar({contactModal, setContactModal, windowsModal, setWindowsModal}) {
    console.log(windowsModal)
    return (
        <div  className='taskbar-outer'>
            <div onClick={()=>{setWindowsModal(false); setContactModal(!contactModal)}} className='taskbar-contact'><p>Contact</p></div>
            <div className='taskbar-icons'>
                <Icon onClick={()=>{setWindowsModal(!windowsModal); setContactModal(false)}} img={windows} name='windows'/>
                <Icon img={search} name='search'/>
                <Icon img={folder} name='folder'/>
                <Icon img={notes} name='notes'/>
                <Icon img={chrome} name='chrome'/>
            </div>
            <div className='taskbar-time'>
                <p>11:48</p>
                <p>21/07/2022</p>
            </div>
        </div>
        
    )
}

export default Taskbar