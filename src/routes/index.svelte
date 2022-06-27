<script>
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '848f873f97msh9cfe21671b3d68fp161d03jsn87afb4cd275d',
      'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
    }
  };

  const weather = fetch('https://weatherapi-com.p.rapidapi.com/current.json?q=Tortosa', options)
    .then(response => response.json())
    .then((response) => {
      console.log(response);
      const {location, current} = response;
      const {country, localtime, name} = location;
      const {
        condition,
        humidity,
        feelslike_c,
        is_day,
        temp_c,
        wind_kph, wind_dir
      } = current;
      const {code, text} = condition;

      return {
        conditionCode: code,
        conditionText: text,
        country,
        localtime,
        name,
        humidity,
        isDay: is_day,
        feelsLike: feelslike_c,
        temperature: temp_c,
        windSpeed: wind_kph,
        windDir: wind_dir
      }
    })
</script>

{#await weather then}
  {console.log(weather)}
{/await}

<h1>Welcome to SvelteKit</h1>

<style>
  h1 {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }
</style>
