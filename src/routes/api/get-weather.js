const FETCH_OPTIONS = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '848f873f97msh9cfe21671b3d68fp161d03jsn87afb4cd275d',
    'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
  }
};

export async function get(event) {
  const { searchParams } = event.url;
  const query = searchParams.get('q') ?? 'Tortosa';

  const response = await fetch(
    `https://weatherapi-com.p.rapidapi.com/current.json?q=${query}`,
    FETCH_OPTIONS
  )

  const data = await response.json();

  const {location, current} = data;
  const {country, localtime, name} = location;
  const {
    condition,
    humidity,
    feelslike_c,
    is_day,
    temp_c,
    wind_kph, wind_dir
  } = current;
  const {text, icon} = condition;

  const body = {
    conditionIcon: icon,
    conditionText: text,
    country,
    localtime,
    locationName: name,
    humidity,
    isDay: is_day,
    feelsLike: feelslike_c,
    temperature: temp_c,
    windSpeed: wind_kph,
    windDir: wind_dir
  }

  return {
    status: 200,
    body
  };
}
