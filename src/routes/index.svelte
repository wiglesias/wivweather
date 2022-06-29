<script>
  import { getWeatherFrom } from '../services/weather.js';
  import WeatherFooter from '../components/weather-footer.svelte';

  const weatherPromise = getWeatherFrom();
</script>

{#await weatherPromise then weather}
  <section>
    <h1>{weather.locationName}</h1>
    <h2>{weather.temperature}º</h2>
    <h3>{weather.conditionText}</h3>
    <h4>{weather.windSpeed}</h4>
  </section>
  <WeatherFooter />
{/await}

<style>
  section {
    padding: 16px;
  }

  h1 {
    font-weight: 300;
    color: #333;
    text-transform: uppercase;
    padding: 32px 0 0 0;
  }

  h2 {
    font-weight: 300;
    font-size: 120px;
    color: #333;
    text-transform: uppercase;
    padding: 0;
  }

  h3 {
    font-weight: 400;
    transform: rotate(-90deg);
    position: absolute;
    top: 150px;
    right: 74px;
  }
</style>
