import { SengineFromUrls, type SEngine } from 'sengine';

declare global {
  interface Window {
    sengine?: SEngine;
  }
}

let isActive = localStorage.getItem('joellof.com/enable_sounds') === 'true'
if (isActive) {
  start()
}

// add event listener for local storage updated
window.addEventListener('storage', function(event) {
  if (event.storageArea === localStorage) {
    if (!isActive && event.key === 'joellof.com/enable_sounds') {
      if (event.newValue === 'true') {
        start()
      } else {
        stop()
      }
    }
  }
});

async function start() {
  isActive = true
  const engine = await SengineFromUrls(
    `http://localhost:3000/joellof`,
    `https://jadujoel.github.io/ssounds/`,
  );
  window.sengine = engine
  const elements = document.querySelectorAll('a');
  for (const element of elements) {
    element.addEventListener('mouseenter', listener)
  }
}

function listener() {
  window.sengine?.trigger(window.sengine, 'a_enter')
}

function stop() {
  window.sengine?.context.close()
  window.sengine?.manager.dispose()
  delete window.sengine
  isActive = false
}
