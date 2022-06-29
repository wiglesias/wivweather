<div>
  <slot />
</div>

<style>
  :global(body) {
    background: #fdfdfd;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    display: grid;
    place-content: center;
    min-height: 100vh;
  }
  div {
    aspect-ratio: 9 / 16;
    width: 400px;
    max-width: 100%;
    display: block;
    box-shadow: 0 0 100px rgba(0, 0, 0, 0.1);
    border-radius: 8px;
  }
</style>