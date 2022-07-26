import React from 'react'

function Icon({ img, name, onClick, type, subtxt }) {


  if (type === '2') {
    return (
      <>
        <div onClick={onClick} className='flex items-center gap-2 cursor-pointer icon flex-wrap'>
          <img className='w-1/4' src={img} alt=""></img>
          <div className='pr-4'>
            <p className='text-white'>{name}</p>
            <p className='text-white text-xs'>{subtxt}</p>
          </div>
        </div>
      </>
    )
  }

  if (type === '3') {
    return (
      <>
        <div  onClick={onClick} className='flex items-center gap-2 cursor-pointer icon' >
          <img className='w-14' src={img} alt=""></img>
          <div className='pr-4'>
            <p className='text-white'>{name}</p>
            <p className='text-white text-xs'>{subtxt}</p>
          </div>
        </div>
      </>
    )
  }

  if (type === '1') {
    return (
      <>
        <div onClick={onClick} className='icon flex flex-col justify-center items-center z-10' >
          <img className='py-3 px-6' src={img} alt=""></img>
          <p className='text-white text-xs'>{name}</p>
        </div>
      </>
    )
  }


  return (
    <div  className='' onClick={onClick}>
      <img className='icon' src={img} alt=""></img>
    </div>

  )
}

export default Icon