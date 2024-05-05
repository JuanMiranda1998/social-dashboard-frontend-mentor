import formatter from '../utils/Formatter'
import colors from '../colors'

const TotalCard = ({ iconUrl, accountName, followNum, changeToday, socialPlatform }) => {

  const values = Object.entries(colors);
  const topColor = values.find(key => key[0] === socialPlatform)[1];

  const changeValueInt = changeToday > 0 ? changeToday : Math.abs(changeToday)

  return (
    <div className='w-full my-6 rounded-md' style={{background: topColor}}>
      <div className='flex flex-col items-center justify-center pt-8 pb-6 px-1 mt-[6px] bg-[#f0f3fa]'>
        <div className='flex flex-row items-center gap-2 mb-4'>
          <div className='w-[20px] h-[20px]'>
            <img src={iconUrl} alt="" />
          </div>
          <h2 className='text-sm font-bold text-[#616476]'>{accountName}</h2>
        </div>
        <div className='flex flex-col gap-1 justify-center text-center mb-3'>
          <p className='text-6xl font-bold'>{formatter(followNum)}</p>
          <p className='text-sm uppercase tracking-[0.3rem] text-[#63687e]'>Followers</p>
        </div>
        <div className='flex flex-row gap-1 items-center mt-2'>
          <div className='w-[16px] h-[12px]'>
            {changeToday > 0 ? (
              <img className='w-full h-full' src="/icon-up.svg" alt="" />
            ) : (
              <img className='w-full h-full' src="/icon-down.svg" alt="" />
            ) }
          </div>
          <p className={`font-bold text-sm ${changeToday>0 ? 'text-[#1db489]': 'text-[#dc414c]'}`}>{changeValueInt} Today</p>
        </div>
      </div>
    </div>
  )
}

export default TotalCard