import React from 'react'
import copy from '../Icons/Folder/copy.png'
import cross from '../Icons/Folder/cross.png'
import down from '../Icons/Folder/down.png'
import down2 from '../Icons/Folder/down2.png'
import leftarrow from '../Icons/Folder/leftarrow.png'
import mini from '../Icons/Folder/mini.png'
import box from '../Icons/Folder/box.png'
import more from '../Icons/Folder/more.png'
import paste from '../Icons/Folder/paste.png'
import refresh from '../Icons/Folder/refresh.png'
import right from '../Icons/Folder/right.png'
import rightarrow from '../Icons/Folder/rightarrow.png'
import scissors from '../Icons/Folder/scissors.png'
import search from '../Icons/Folder/search.png'
import share from '../Icons/Folder/share.png'
import sort from '../Icons/Folder/sort.png'
import trash from '../Icons/Folder/trash.png'
import uparrow from '../Icons/Folder/uparrow.png'
import plus from '../Icons/Folder/plus.png'

import skills from '../Icons/Folder/skills.png'
import portfolio from '../Icons/Folder/portfolio.png'
import downloads from '../Icons/Folder/downloads.png'
import qualification from '../Icons/Folder/qualification.png'
import resume from '../Icons/Folder/resume.png'
import blogs from '../Icons/Folder/blogs.png'
import blog from '../Icons/Windows/Bottom/notes.png'
import Icon from './Icon'

function Blogs({ folder, setBlogsModal, blogsModal }) {
    return (
        <div onClick={ () => { setBlogsModal(!blogsModal)}} className='folder-main absolute flex flex-col items-center content-center h-screen justify-center w-full top-0'>
            <div className='windows-main windows-main overflow-auto md:w-5/6 max-h-[600px] folder-top w-2/4 flex flex-col items-center py-12 z-10' onClick={e => {e.stopPropagation();}}>
                <h1 className="text-white text-4xl">Blogs</h1>
                <div className='grid w-5/6 grid-cols-2 sm:grid-cols-1 pt-5'>
                    <Icon img={blog} type='3' onClick={() => { window.open('https://betterprogramming.pub/creating-an-nft-marketplace-solidity-2323abca6346', '_blank') }}  name='Creating an NFT Marketplace With Solidity' subtxt='With just 200 lines of code'/>
                    <Icon img={blog} type='3' onClick={() => { window.open("https://betterprogramming.pub/a-better-version-of-kickstarter-using-web3-0-solidity-8bbea829d2f0", '_blank') }}  name='A Better Version of Kickstarter Using Web3.0 — Solidity' subtxt='To prevent Kickstarter fraud, contributors can vote on monetary decisions'/>
                    <Icon img={blog} type='3' onClick={() => { window.open('"https://coinsbench.com/memory-vs-storage-copy-vs-reference-solidity-4d46b50533ba"', '_blank') }}  name='Memory vs Storage' subtxt='Persistent and temporary data storage.'/>
                    <Icon img={blog} type='3' onClick={() => { window.open('"https://coinsbench.com/a-quick-guide-to-developing-upgradable-smart-contracts-using-uups-openzeppelin-3f2b6809b8b"', '_blank') }}  name='A quick guide to developing upgradable smart contracts' subtxt='using UUPS — Openzeppelin'/>
                    <Icon img={blog} type='4' onClick={() => { window.open("https://coinsbench.com/lazy-nft-minting-eip-721-and-vouchers-88ad41654e6b", '_blank') }}  name='Lazy NFT Minting' subtxt='— EIP 721 and Voucher'/>
                
                </div>
            </div>
            
        </div>
    )
}

export default Blogs