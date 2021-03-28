export function getWeatherForecast(token) {
  return fetch('https://localhost:5001/api/WeatherForecast', {
    headers: new Headers({
      'Authorization': 'bearer ' + token,
      // 'Content-Type': 'application/json'
    }),
  }).then(result => result.json());
}
