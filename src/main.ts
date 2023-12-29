import './style.css'
// import typescriptLogo from './typescript.svg'
// import viteLogo from '/vite.svg'
import githubLogo from './github-mark.svg'
import linkedLogo from './LI-In-Bug.png'
import wantedlyLogo from './Wantedly_Mark_LightBG.svg'
import threadsLogo from './threads-logo-black.svg'
import { setupCounter } from './counter.ts'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <a href="https://github.com/yuki-sg" target="_blank">
      <img src="${githubLogo}" class="logo" alt="GitHub logo" />
    </a>
    <a href="https://www.wantedly.com/id/be__emo" target="_blank">
      <img src="${wantedlyLogo}" class="logo" alt="Wantedly" />
    </a>
    <a href="https://www.linkedin.com/in/yuki-sugawara-7821651ba/" target="_blank">
      <img src="${linkedLogo}" class="logo vanilla" alt="Linkedin logo" />
    </a>
    <a href="https://www.threads.net/@yk_sgwr" target="_blank">
      <img src="${threadsLogo}" class="logo vanilla" alt="Threads logo" />
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
