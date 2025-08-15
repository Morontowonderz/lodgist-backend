const projects = [
  {category:'Web Dev', title:'E-commerce Revamp', problem:'Slow legacy storefront', solution:'React PWA rebuild', results:'+45% conversions'},
  {category:'AI', title:'Predictive Agriculture', problem:'Uncertain yields', solution:'Satellite ML forecast', results:'+60% accuracy'},
  {category:'Security', title:'Bank Threat Hunt', problem:'Phishing breaches', solution:'SOC automation', results:'-80% incidents'},
  {category:'Hardware', title:'Factory Sensors', problem:'Unexpected downtime', solution:'Edge diagnostics', results:'-30% failures'}
];

export function renderPortfolio() {
  const section = document.getElementById('portfolio');
  section.innerHTML = `
    <h2 id="portfolio-heading">Project Portfolio</h2>
    <div class="filters" role="group" aria-label="Portfolio filters">
      ${['All','Web Dev','AI','Security','Hardware'].map(f=>`<button class="filter-button" data-filter="${f}">${f}</button>`).join('')}
    </div>
    <div class="portfolio-grid" role="list"></div>
  `;

  const grid = section.querySelector('.portfolio-grid');
  const buttons = section.querySelectorAll('.filter-button');

  function populate(filter) {
    grid.innerHTML = projects.filter(p=> filter==='All'||p.category===filter).map(p=>`
      <div class="card" role="listitem">
        <h3>${p.title}</h3>
        <p><strong>Problem:</strong> ${p.problem}</p>
        <p><strong>ShadowSpark Solution:</strong> ${p.solution}</p>
        <p><strong>Results:</strong> ${p.results}</p>
      </div>`).join('');
  }

  buttons.forEach(btn=>btn.addEventListener('click',()=>{
    populate(btn.dataset.filter);
  }));

  populate('All');
}
