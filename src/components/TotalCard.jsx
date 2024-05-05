import React from 'react'
import formatter from '../utils/Formatter'

const TotalCard = ({ iconUrl, accountName, followNum, changeToday }) => {
  return (
    <div className='w-full flex flex-col items-center justify-center pt-10 pb-6 my-6 rounded-md bg-[#f0f3fa]'>
      <div className='flex flex-row items-center gap-2 mb-4'>
        <div className='w-[20px] h-[20px]'>
          <img src={iconUrl} alt="" />
        </div>
        <h2 className='text-sm font-semibold text-[#616476]'>{accountName}</h2>
      </div>
      <div className='flex flex-col gap-1 justify-center text-center mb-3'>
        <p className='text-6xl font-semibold'>{formatter(followNum)}</p>
        <p className='text-sm uppercase tracking-[0.3rem] text-[#63687e]'>Followers</p>
      </div>
      <div className='flex flex-row gap-1 items-center'>
        <div className='w-[16px] h-[12px]'>
          {changeToday > 0 ? (
            <img className='w-full h-full' src="/icon-up.svg" alt="" />
          ) : (
            <img className='w-full h-full' src="/icon-down.svg" alt="" />
          ) }
        </div>
        <p>{changeToday} Today</p>
      </div>
    </div>
  )
}

export default TotalCard