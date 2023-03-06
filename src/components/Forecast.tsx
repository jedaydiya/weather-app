import React from "react";
import { forecastType } from "../types";
import { Sun, SunHorizon } from "@phosphor-icons/react";
import {
  getHumidityValue,
  getSunTime,
  getWindDirection,
  getPop,
  getVisibilityValue,
} from "../helpers";
import Tile from "./Tile";
import {
  Wind,
  ThermometerSimple,
  DropHalfBottom,
  Eye,
  CloudRain,
  Gauge,
} from "@phosphor-icons/react";

type Props = {
  data: forecastType;
};

const Degree = ({ temp }: { temp: number }): JSX.Element => {
  return (
    <span>
      {temp}
      <sup>0</sup>
    </span>
  );
};
const Forecast = ({ data }: Props) => {
  const today = data.list[0];
  return (
    <>
      <div className="w-full md:max-w-[500px] py-4 md:py-4 md:px-10 lg:px-24 h-full lg:h-auto bg-white bg-opacity-20 backdrop-blur-ls rounded drop-shadow-lg">
        <div className="mx-auto w-[300px]">
          <section className="text-center">
            <h2 className="text-2xl font-black">
              {data.name}
              <span className="font-thin"> {data.country}</span>
            </h2>

            <h1 className="text-4xl font-extrabold">
              <Degree temp={Math.round(today.main.temp)} />
            </h1>
            <p className="text-sm">
              {today.weather[0].main} {""}
              <span>({today.weather[0].description})</span>
            </p>
            <p className="text-sm">
              H: <Degree temp={Math.ceil(today.main.temp_max)} />
              L: {""}
              <Degree temp={Math.floor(today.main.temp_min)} />
            </p>
          </section>

          <section className="flex pb-2 mt-4 mb-5 overflow-x-scroll">
            {data.list.map((item, i) => (
              <div
                className="inline-block text-center w-[100px] flex-shrink-0"
                key={i}
              >
                <p className="text-sm">
                  {i === 0 ? "Now" : new Date(item.dt * 1000).getHours()}
                </p>
                <img
                  alt={`weather-icon-${item.weather[0].description}`}
                  src={`http://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`}
                />
                <p className="text-sm font-bold">
                  <Degree temp={Math.round(item.main.temp)} />
                </p>
              </div>
            ))}
          </section>

          <section className="flex flex-wrap justify-between text-zinc-700">
            <div className="w-[140px] text-xs font-bold flex flex-col items-center bg-white/20 backdrop-blur-ls rounded drop-shadow-lg py-4 mb-5">
              <Sun size={32} weight="bold" />{" "}
              <span className="mt-2">{getSunTime(data.sunrise)}</span>
            </div>
            <div className="w-[150px] text-xs font-bold flex flex-col items-center bg-white/20 backdrop-blur-ls rounded drop-shadow-lg py-4 mb-5">
              <SunHorizon size={32} weight="bold" />
              <span className="mt-2">{getSunTime(data.sunset)}</span>
            </div>

            <Tile
              icon={<Wind size={32} weight="bold" />}
              title="Wind"
              info={`${Math.round(today.wind.speed)} km/h`}
              description={`${getWindDirection(
                Math.round(today.wind.deg)
              )}, gusts ${today.wind.gust.toFixed(1)} km/h`}
            />

            <Tile
              icon={<ThermometerSimple size={32} weight="bold" />}
              title="Feels like"
              info={<Degree temp={Math.round(today.main.feels_like)} />}
              description={`Feels ${
                Math.round(today.main.feels_like) < Math.round(today.main.temp)
                  ? "colder"
                  : "warmer"
              }
              `}
            />

            <Tile
              icon={<DropHalfBottom size={32} weight="bold" />}
              title="Humidity"
              info={`${today.main.humidity} %`}
              description={getHumidityValue(today.main.humidity)}
            />

            <Tile
              icon={<CloudRain size={32} weight="bold" />}
              title="Precipitation"
              info={`${Math.round(today.pop * 1000)}%`}
              description={`${getPop(today.pop)}, clouds at ${
                today.clouds.all
              } %`}
            />

            <Tile
              icon={<Gauge size={32} weight="bold" />}
              title="Pressure"
              info={`${today.main.pressure} hPa`}
              description={`${
                Math.round(today.main.pressure) < 1013 ? "Lower" : "Higher"
              } then standard`}
            />
            <Tile
              icon={<Eye size={32} weight="bold" />}
              title="Visibility"
              info={`${(today.visibility / 1000).toFixed()}km`}
              description={`${getVisibilityValue(today.visibility)}`}
            />
          </section>
        </div>
      </div>
    </>
  );
};

export default Forecast;
