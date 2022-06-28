<script>
  import { getWeatherFrom } from '../services/weather.js';
  const weatherPromise = getWeatherFrom();
</script>

{#await weatherPromise then weather}
  <h1>{weather.conditionText}</h1>
{/await}

<style>
  h1 {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }
</style>
