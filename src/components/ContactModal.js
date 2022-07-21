import React from 'react'
import phone from '../Icons//Contact/phone.png'
import discord from '../Icons//Contact/discord.png'
import envelope from '../Icons//Contact/envelope.png'
import linkedin from '../Icons//Contact/linkedin.png'
import location from '../Icons//Contact/location.png'
import medium from '../Icons//Contact/medium.png'
import plane from '../Icons/Contact/plane.png'

function ContactModal() {
    return (
        <div className='contact-modal flex flex-col p-4 rounded-lg ml-4 bottom-14 absolute sm:relative sm:ml-0 sm:bottom-0 sm:rounded-none'>
            <div className='contact-time my-5'>
                <p className='contact-time-text text-white text-4xl'>21 : 35</p>
                <p className='text-white text-xl'>Let's get in touch</p>
            </div>

            <div className='contact-links px-5 py-4 gap-5 my-4'>
                <div className='contact-links-left flex flex-col gap-3'>

                    <div className='contact-link-box flex items-end  gap-3 justify-left'>
                        <div className='contact-link-box-left'>
                            <img className='pr-3 py-3' src={phone} alt='' />
                        </div>
                        <div className='contact-link-box-right flex flex-col  gap-1'>
                            <p className='text-white text-md' >Phone</p>
                            <p className='text-gray-500 text-sm'>+91 6309535275</p>
                        </div>
                    </div>


                    <div className='contact-link-box flex flex-row items-end gap-1 justify-left'>
                        <div className='contact-link-box-left'>
                            <img className='pr-3 py-3' src={discord} alt='' />
                        </div>
                        <div className='contact-link-box-right flex flex-col gap-1'>
                            <p className='text-white text-md'>Discord</p>
                            <p className='text-gray-500 text-sm'>Khanisic#0859</p>
                        </div>
                    </div>

                    <div className='contact-link-box flex items-end  gap-2 justify-left'>
                        <div className='contact-link-box-left'>
                            <img className='pr-3 py-3' src={envelope} alt='' />
                        </div>
                        <div className='contact-link-box-right flex flex-col  gap-1'>
                            <p className='text-white text-md'>Mail</p>
                            <p className='text-gray-500 text-sm'>skhan852000@gmail.com</p>
                        </div>
                    </div>




                </div>
                <div className='contact-links-right flex flex-col gap-3'>
                    <div className='contact-link-box flex items-end  gap-2 justify-between'>
                        <div className='contact-link-box-left'>
                            <img className='pr-3 py-3' src={medium} alt='' />
                        </div>
                        <div className='contact-link-box-right flex flex-col  gap-1 '>
                            <p className='text-white text-md'>Medium</p>
                            <p className='text-gray-500 text-sm'>@skhan852000</p>
                        </div>
                    </div>
                    <div className='contact-link-box flex items-end  gap-2 justify-between'>
                        <div className='contact-link-box-left'>
                            <img className='pr-3 py-3' src={location} alt='' />
                        </div>
                        <div className='contact-link-box-right flex flex-col  gap-1' >
                            <p className='text-white text-md'>Location</p>
                            <p className='text-gray-500 text-sm'>Hyderabad, India</p>
                        </div>
                    </div>
                    <div className='contact-link-box flex items-end  gap-2 justify-between'>
                        <div className='contact-link-box-left'>
                            <img className='pr-3 py-3' src={linkedin} alt='' />
                        </div>
                        <div className='contact-link-box-right flex flex-col  gap-1'>
                            <p className='text-white text-md'>LinkedIN</p>
                            <p className='text-gray-500 text-sm'>/abdulmoidkhan</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className='contact-form flex flex-col gap-4 '>
                <div className='input-field w-100 flex flex-col rounded-md'>
                    <label className='text-white text-xs pt-1 pl-2'>Name</label>
                    <input className='pt-1 pl-2 pb-2'></input>
                </div>
                <div className='input-field w-100 flex flex-col rounded-md pl-2'>
                    <label className='text-white text-xs pt-1 pl-2'>Email</label>
                    <input className='pt-1 pl-2 pb-2'></input>
                </div>
                <div className='input-field w-100 flex flex-col rounded-md pl-2'>
                    <label className='text-white text-xs pt-1 pl-2'>Message</label>
                    <textarea className='pt-1 pl-2 pb-2'> </textarea>
                </div>
            </div>

            <div class="contact-message-button flex justify-center mt-4">
                <div class="contact-message-button-inner flex p-3 gap-3 rounded-md">
                    <p className='text-white text-md'>Send Message</p>
                    <img src={plane} alt='' />
                </div>

            </div>

        </div>
    )
}

export default ContactModal