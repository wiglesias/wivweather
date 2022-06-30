export async function getWeatherFrom (query = 'Tortosa') {
  return fetch(
    `/api/get-weather?q=${query}`).then(res => res.json());
}
