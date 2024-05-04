import './App.css'
import TotalCard from './components/TotalCard'

function App() {

  const TOTALDATA = [
    {
      id: 1,
      accountName: '@nathanf',
      socialPlatform: 'facebook',
      followNum: 1987,
      changeToday: 12,
      iconUrl: '/icon-facebook.svg'
    },
    {
      id: 2,
      accountName: '@nathanf',
      socialPlatform: 'twitter',
      followNum: 1044,
      changeToday: 99,
      iconUrl: '/icon-twitter.svg'
    },
    {
      id: 3,
      accountName: '@realnathanf',
      socialPlatform: 'instagram',
      followNum: 11000,
      changeToday: 1099,
      iconUrl: '/icon-instagram.svg'
    },
    {
      id: 4,
      accountName: 'Nathan F.',
      socialPlatform: 'youtube',
      followNum: 8239,
      changeToday: -144,
      iconUrl: '/icon-youtube.svg'
    }
  ]
  const DAILYDATA = [
    {
      id: 1,
      category: 'Page Views',
      socialIcon: '/icon-facebook.svg',
      value: 87,
      variation: 3 
    },
    {
      id: 2,
      category: 'Likes',
      socialIcon: '/icon-facebook.svg',
      value: 52,
      variation: -2 
    },
    {
      id: 3,
      category: 'Likes',
      socialIcon: '/icon-instagram.svg',
      value: 5462,
      variation: 2257 
    },
    {
      id: 4,
      category: 'Profile Views',
      socialIcon: '/icon-instagram.svg',
      value: 52000,
      variation: 1375 
    },
    {
      id: 5,
      category: 'Retweets',
      socialIcon: '/icon-twitter.svg',
      value: 117,
      variation: 303 
    },
    {
      id: 6,
      category: 'Likes',
      socialIcon: '/icon-twitter.svg',
      value: 507,
      variation: 553 
    },
    {
      id: 7,
      category: 'Likes',
      socialIcon: '/icon-youtube.svg',
      value: 107,
      variation: -19 
    },
    {
      id: 8,
      category: 'Total Views',
      socialIcon: '/icon-youtube.svg',
      value: 1407,
      variation: -12 
    },
  ]

  return (
    <div className="w-[100lvw] min-h-[100lvh]">
      <div className="my-8 mx-6 flex flex-col font-Inter">
        <div className="flex flex-col text-left">
          <div className="pb-4 border-b border-black">
            <h1 className="text-xl font-semibold">Social Media Dashboard</h1>
            <p>Total Followers: 23,004</p>
          </div>
          <div className='flex flex-row justify-between my-4'>
            <p>Dark Mode</p>
            <label className="toggle-switch">
                <input type="checkbox"/>
                <div className="toggle-switch-background">
                  <div className="toggle-switch-handle"></div>
                </div>
              </label>
          </div>
        </div>
        <div className='grid grid-cols-1'>
          {TOTALDATA.map(el => (
            <TotalCard
              iconUrl={el.iconUrl}
              accountName={el.accountName}
              followNum={el.followNum}
              changeToday={el.changeToday}
              key={el.id}
            />
          ))}
        </div>
        <div>
          <h2 className='mb-2'>Overview Today</h2>
          <div className='grid grid-cols-1 gap-4'>
            {DAILYDATA.map(val => (
            <div className='w-full flex flex-col items-center justify-center px-6 py-4 rounded-md bg-[#f0f3fa]' key={val.id}>
              <div className='w-full flex flex-row items-center justify-between mb-8'>
                <h2>{val.category}</h2>
                <div>
                  <img src={val.socialIcon} alt="" />
                </div>
              </div>
              <div className='w-full flex flex-row items-baseline justify-between text-center'>
                <p className='text-4xl font-semibold'>{val.value}</p>
                <div className='flex flex-row gap-1 items-center'>
                  <div className='w-[12px] h-[10px]'>
                    {val.variation > 0 ? (
                      <img className='w-full h-full' src="/icon-up.svg" alt="" />
                    ) : (
                      <img className='w-full h-full' src="/icon-down.svg" alt="" />
                    ) }
                  </div>
                  <p>{val.variation}%</p>
                </div>
              </div>
              
            </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
