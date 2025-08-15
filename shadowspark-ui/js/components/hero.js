export function renderHero() {
  const hero = document.getElementById('hero');
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const opacityAnim = prefersReduced ? '' : '<animate attributeName="opacity" values="1;0.7;1" dur="3s" repeatCount="indefinite" />';
  const radiusAnim = prefersReduced ? '' : '<animate attributeName="r" values="5;8;5" dur="2s" repeatCount="indefinite" />';

  hero.innerHTML = `
    <svg class="spark" viewBox="0 0 100 100" role="img" aria-labelledby="logoTitle logoDesc">
      <title id="logoTitle">ShadowSpark logo</title>
      <desc id="logoDesc">Eight point spark gradient with starlight center</desc>
      <defs>
        <linearGradient id="sparkGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#FF6A3D" />
          <stop offset="100%" stop-color="#00E6A8" />
        </linearGradient>
      </defs>
      <polygon points="50,5 60,35 95,35 65,55 75,90 50,70 25,90 35,55 5,35 40,35" fill="url(#sparkGradient)">${opacityAnim}</polygon>
      <circle cx="50" cy="50" r="5" fill="#F8FAFC">${radiusAnim}</circle>
    </svg>
    <h1>African-Born AI, Healing the World's Broken Systems</h1>
    <ul class="values">
      <li>AI innovation</li>
      <li>System administration mastery</li>
      <li>Global scalability</li>
    </ul>
    <button class="cta-button" aria-label="Schedule a free tech audit">Schedule Free Tech Audit</button>
  `;
}
