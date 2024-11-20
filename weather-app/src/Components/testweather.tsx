import React, { useEffect, useState } from "react";
const Weather: React.FC = () => {
    // interface IWeatherItem {
    //   name: string;
    //   region: string;
    //   temperature: string;
    // }
  interface IResponse {
    data: IResponseData;
    message: string;
    success: string;
  }
  interface IResponseData {
    name: string;
    region: string;
    temperature: string;
    condition: IWeatherCondition;
  }
  interface IWeatherCondition {
    text: string;
    icon: string;
  }
  const [weather, setWeather] = useState<IResponseData|null>(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response: IResponse = await fetch("https://weather-l6tl.onrender.com/api/getCurrentWeather/26.263863/73.008957").then(
          (res) => res.json()
        );
        const weatherData = response.data;
        console.log('weatherData', weatherData);
        
        setWeather(weatherData);
      } catch (error) {
        console.log("error", error);
      }
    };
    fetchData();
  }, []);
  console.log('weather', weather);
  
  return (
    <div className="w-full mx-auto px-4 py-4">
      <h3 className="flex items-center justify-center text-2xl font-bold text-gray-600 dark:text-white">
        Products List
      </h3>
      <div className="flex items-center justify-center bg-gray-100">
        <ul>
        {/* {weather.map((item, index) => (
         <li key={index}>
            <h1>{item.title}</h1>
        </li>
        ))} */}
        <h1>{weather?.name}</h1>
        <h1>{weather?.region}</h1>
        <h1>{weather?.temperature}</h1>
      </ul>
        {/* <table className="min-w-full bg-white border border-gray-300">
          <thead>
            <tr className="bg-gray-200">
              <th>SNo</th>
              <th>Title</th>
              <th>Category</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {weather.map((item, index) => (
              <tr key={index}>
                <td className="py-2 px-4 border">{index}</td>
                <td className="py-2 px-4 border">{item.title}</td>
                <td className="py-2 px-4 border">{item.category}</td>
                <td className="py-2 px-4 border">{item.price}</td>
              </tr>
            ))}
          </tbody>
        </table> */}
      </div>
    </div>
  );
};

export default Weather;
