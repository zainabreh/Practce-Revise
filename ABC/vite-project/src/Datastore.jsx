import React, { useEffect, useState, createContext } from "react";
// import Clear from "../assets/clear.gif";
// import clouds from "../assets/cloudy.gif";
// import Thunderstorm from "../assets/Rainy.gif";
// import Snow from "../assets/Snow.gif";
// import snowy from "../assets/snowy.png";
// import sunny from "../assets/sunny.png";
// import cloudy from "../assets/cloudy.png";
// import rainy from "../assets/rainy.png";
// import storm from "../assets/storm.png";

export const DataProvider = createContext();

const Datastore = ({ children }) => {
  const [hourlyData, setHourlyData] = useState([]);
  const [weeklyData, setWeeklyData] = useState([]);

  const [today, setToday] = useState(new Date());
  const [city, setCity] = useState("Islamabad");
  const [background, setBackground] = useState("");
  const [icon, setIcon] = useState("");
  const [location, setLocation] = useState("");
  const [values, setValues] = useState({
    temperature: "",
    humidity: "",
    speed: "",
    weather: "",
  });

  const API_KEY = "44049957cd39c54716054a34be36db63";

  // const weatherCondition = (bg) => {
  //   switch (bg) {
  //     case "clear":
  //       setBackground(Clear);
  //       setIcon(sunny);
  //       break;
  //     case "clouds":
  //       setBackground(clouds);
  //       setIcon(cloudy);
  //       break;
  //     case "rain":
  //     case "drizzle":
  //       setBackground(Thunderstorm);
  //       setIcon(rainy);
  //       break;
  //     case "snow":
  //       setBackground(Snow);
  //       setIcon(snowy);
  //       break;
  //     case "thunderstorm":
  //       setBackground(Thunderstorm);
  //       setIcon(storm);
  //       break;
  //     default:
  //       setBackground(Clear);
  //       setIcon(sunny);
  //   }
  // };

  const details = (temp, humidity, speed, weathercondition) => {
    setValues({
      temperature: temp,
      humidity: humidity,
      speed: speed,
      weather: weathercondition,
    });
  };

  const Time = () => {
    useEffect(() => {
      const timer = setInterval(() => {
        setToday(new Date());
      }, 60 * 1000);

      return () => clearInterval(timer);
    }, []);

    const day = today.toLocaleDateString("en", { weekday: "long" });
    const date = `${day}, ${today.getDate()}, ${today.toLocaleDateString("en", {
      month: "long",
    })}\n\n`;
    const time = today.toLocaleDateString("en", {
      hour: "numeric",
      hour12: true,
      minute: "numeric",
    });

    return {
      date,
      time,
    };
  };

  useEffect(() => {
    fetch(
      `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}`
    )
      .then((res) => {
        if (!res.ok) {
          throw new Error("Try Another city or Enter specific city...");
        }
        return res.json();
      })
      .then((data) => {
        const bg = data.list[0].weather[0].main.toLowerCase();
        weatherCondition(bg);

        const country = data.city.country;
        const city = data.city.name;
        const locate = `${city} - ${country}`;
        setLocation(locate);

        const temp = data.list[0].main.temp;
        const humidity = data.list[0].main.humidity;
        const speed = data.list[0].wind.speed;
        const weathercondition = data.list[0].weather[0].main;
        details(temp, humidity, speed, weathercondition);

        const hourData = data.list.slice(0, 7).map((e) => {
          const timeString = e.dt_txt.split(" ")[1];
          const time = new Date(`2000-01-01T${timeString}Z`);
          const formattedTime = time.toLocaleString("en-US", {
            hour: "numeric",
            minute: "numeric",
            hour12: true,
          });
          return {
            time: formattedTime,
            icon: e.weather[0].icon,
            temp: e.main.temp,
          };
        });
        setHourlyData(hourData);

        const weekData = data.list.slice(0, 7).map((e) => {
          const timeString = e.dt_txt.split(" ")[0];
          const time = new Date(timeString);
          const formattedDay = time.toLocaleDateString("en-US", {
            weekday: "long",
          });
          return {
            day: formattedDay,
            icon: e.weather[0].icon,
          };
        });
        setWeeklyData(weekData);
      })
      .catch((error) => {
        alert("Try Another city or Enter specific city...", error);
      });
  }, [city]);

  return (
    <DataProvider.Provider
      value={{ city, location, values, Time, hourlyData, weeklyData }}
    >
      {children}
    </DataProvider.Provider>
  );
};

export default Datastore;