
# Weather App

I built this web application to practice new technologies I learned in the past few months. This project was built alongside a youtube tutorial showing how to use OpenWeatherAPi in React.



## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`VITE_APP_API_KEY`



## Run Locally

Clone the project

```bash
  git clone https://github.com/jedaydiya/weather-app.git
```

Go to the project directory

```bash
  cd weather-app
``` 

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run dev
```


## Tech Stack

* React
* Vite
* TypeScript
* TailwindCSS




## API Reference

#### Get weather details

```http
  GET /https://api.openweathermap.org/geo/1.0/direct?q=${value.trim()}&limit=5&appid=${ApiKey}
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `APIKey` | `string` | **Required**. Your API key  |

#### Get Geocoding api

```http
  GET /https://api.openweathermap.org/data/2.5/forecast?lat=${city.lat}&lon=${city.lon}&units=metric&appid=${ApiKey}
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `APIKey` | `string` | **Required**. Your API key  |




## Deployment

To go to live project click the link

```bash
  https://jedaydiya-weather-app.vercel.app
```


