function createPanel(title, content, id) {
  return `<div class="panel" id="${id}"><h3>${title}</h3><pre>${content}</pre></div>`;
}

export function renderDashboard() {
  const section = document.getElementById('dashboard');
  section.innerHTML = `
    <h2 id="dashboard-heading">System Admin Dashboard</h2>
    <div class="dashboard-grid">
      ${createPanel('Server Health', 'All servers operational', 'server-health')}
      ${createPanel('Threat Detection', 'No threats detected', 'threat-feed')}
      ${createPanel('Network Performance', 'Latency: 20ms\nThroughput: 1Gbps', 'network-metrics')}
    </div>
    <button class="panic-button" aria-label="Emergency support">Panic Button</button>
  `;

  section.querySelector('.panic-button').addEventListener('click', () => alert('ShadowSpark support has been notified!'));

  // Mock live updates
  setInterval(()=> {
    document.getElementById('server-health').querySelector('pre').textContent = 'CPU: ' + Math.round(Math.random()*50+50) + '%\nMemory: ' + Math.round(Math.random()*50+50) + '%';
    document.getElementById('threat-feed').querySelector('pre').textContent = 'Last scan: ' + new Date().toLocaleTimeString();
    document.getElementById('network-metrics').querySelector('pre').textContent = 'Latency: ' + Math.round(Math.random()*10+15) + 'ms\nThroughput: 1Gbps';
  }, 5000);
}
