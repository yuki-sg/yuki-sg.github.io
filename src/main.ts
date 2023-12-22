import './style.css'
// import typescriptLogo from './typescript.svg'
// import viteLogo from '/vite.svg'
import githubLogo from './github-mark.svg'
import linkedLogo from './LI-In-Bug.png'
import { setupCounter } from './counter.ts'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <a href="https://github.com/yuki-sg" target="_blank">
      <img src="${githubLogo}" class="logo" alt="GitHub logo" />
    </a>
    <a href="https://www.linkedin.com/in/yuki-sugawara-7821651ba/" target="_blank">
      <img src="${linkedLogo}" class="logo vanilla" alt="Linkedin logo" />
    </a>
    <h1>yuki sugar</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      こんにちは。
    </p>
  </div>
`

setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)
