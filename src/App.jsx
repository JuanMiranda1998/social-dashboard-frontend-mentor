import "./App.css";
import DailyValueCard from "./components/DailyValueCard";
import TotalCard from "./components/TotalCard";
import { useThemeSwitch } from "./components/hooks/useThemeSwitch";

function App() {
  const [mode, setMode] = useThemeSwitch();

  const TOTALDATA = [
    {
      id: 1,
      accountName: "@nathanf",
      socialPlatform: "facebook",
      followNum: 1987,
      changeToday: 12,
      iconUrl: "/icon-facebook.svg",
    },
    {
      id: 2,
      accountName: "@nathanf",
      socialPlatform: "twitter",
      followNum: 1044,
      changeToday: 99,
      iconUrl: "/icon-twitter.svg",
    },
    {
      id: 3,
      accountName: "@realnathanf",
      socialPlatform: "instagram",
      followNum: 11000,
      changeToday: 1099,
      iconUrl: "/icon-instagram.svg",
    },
    {
      id: 4,
      accountName: "Nathan F.",
      socialPlatform: "youtube",
      followNum: 8239,
      changeToday: -144,
      iconUrl: "/icon-youtube.svg",
    },
  ];
  const DAILYDATA = [
    {
      id: 1,
      category: "Page Views",
      socialIcon: "/icon-facebook.svg",
      value: 87,
      variation: 3,
    },
    {
      id: 2,
      category: "Likes",
      socialIcon: "/icon-facebook.svg",
      value: 52,
      variation: -2,
    },
    {
      id: 3,
      category: "Likes",
      socialIcon: "/icon-instagram.svg",
      value: 5462,
      variation: 2257,
    },
    {
      id: 4,
      category: "Profile Views",
      socialIcon: "/icon-instagram.svg",
      value: 52000,
      variation: 1375,
    },
    {
      id: 5,
      category: "Retweets",
      socialIcon: "/icon-twitter.svg",
      value: 117,
      variation: 303,
    },
    {
      id: 6,
      category: "Likes",
      socialIcon: "/icon-twitter.svg",
      value: 507,
      variation: 553,
    },
    {
      id: 7,
      category: "Likes",
      socialIcon: "/icon-youtube.svg",
      value: 107,
      variation: -19,
    },
    {
      id: 8,
      category: "Total Views",
      socialIcon: "/icon-youtube.svg",
      value: 1407,
      variation: -12,
    },
  ];
  return (
    <div className="w-full max-w-[100vw] min-h-[100lvh] overflow-hidden flex flex-col justify-center items-center bg-white dark:bg-[#1d2029]">
      <div className="w-[90%] max-w-[1000px] lg:max-w-full my-6 lg:mt-8 lg:mx-6 flex flex-col font-Inter">
        <div className="flex flex-col lg:flex-row lg:justify-between text-left">
          <div className="pb-4 border-b border-[#616476] dark:border-[#8b97c6] lg:border-none">
            <h1 className="text-2xl font-bold text-[#1e202a] dark:text-white">
              Social Media Dashboard
            </h1>
            <p className="text-sm font-bold text-[#616476] dark:text-[#8b97c6]">
              Total Followers: 23,004
            </p>
          </div>
          <div className="flex flex-row justify-between lg:items-center my-4">
            <p className="text-sm font-bold text-[#616476] dark:text-[#8b97c6] lg:mr-4">
              Dark Mode
            </p>
            <label className="toggle-switch">
              <input
                type="checkbox"
                onClick={() => {
                  setMode(mode === "dark" ? "light" : "dark");
                }}
              />
              <div className="toggle-switch-background">
                <div className="toggle-switch-handle"></div>
              </div>
            </label>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 md:gap-4 lg:grid-cols-4 lg:gap-8">
          {TOTALDATA.map((el) => (
            <TotalCard
              iconUrl={el.iconUrl}
              accountName={el.accountName}
              followNum={el.followNum}
              changeToday={el.changeToday}
              socialPlatform={el.socialPlatform}
              key={el.id}
            />
          ))}
        </div>
        <div>
          <h2 className="text-xl font-bold text-[#616476] dark:text-white mb-2">
            Overview - Today
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-y-6 lg:gap-x-8">
            {DAILYDATA.map((val) => (
              <DailyValueCard
                key={val.id}
                category={val.category}
                socialIcon={val.socialIcon}
                value={val.value}
                variation={val.variation}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
