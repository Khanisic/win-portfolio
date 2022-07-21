import React from 'react'

function Icon({ img, name, onClick, type, subtext }) {


  if (type === 2) {
    return (
      <>
        <div className='' onClick={onClick}>
          <img className='icon' src={img} alt=""></img>
          <div className=''>
            <p>{name}</p>
            <p>{subtext}</p>
          </div>
        </div>
      </>
    )
  }

  if (type === 1) {
    return (
      <>
        <div className='' onClick={onClick}>
          <img className='icon' src={img} alt=""></img>
          <p className=''>{name}</p>
        </div>
      </>
    )
  }


  return (
    <div className='' onClick={onClick}>
      <img className='icon' src={img} alt=""></img>
    </div>

  )
}

export default Icon