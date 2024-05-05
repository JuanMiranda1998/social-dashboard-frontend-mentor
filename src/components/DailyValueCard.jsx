import formatter from '../utils/Formatter';

const DailyValueCard = ({ category, socialIcon, value, variation}) => {

  const variationInt = variation > 0 ? variation : Math.abs(variation)

  return (
    <div
      className="w-full flex flex-col items-center justify-center pl-6 pr-8 py-6 rounded-md bg-[#f0f3fa]"
    >
      <div className="w-full flex flex-row items-center justify-between mb-4">
        <h2 className='text-[#616476] font-bold text-sm'>{category}</h2>
        <div className='w-[20px]'>
          <img className='w-full h-full' src={socialIcon} alt="" />
        </div>
      </div>
      <div className="w-full flex flex-row items-baseline justify-between text-center">
        <p className="text-4xl font-bold">{formatter(value)}</p>
        <div className="flex flex-row gap-1 items-center">
          <div className="w-[12px] h-[10px]">
            {variation > 0 ? (
              <img className="w-full h-full" src="/icon-up.svg" alt="" />
            ) : (
              <img className="w-full h-full" src="/icon-down.svg" alt="" />
            )}
          </div>
          <p className={`text-xs font-bold ${variation>0 ? 'text-[#1db489]': 'text-[#dc414c]'}`}>{variationInt}%</p>
        </div>
      </div>
    </div>
  );
}

export default DailyValueCard