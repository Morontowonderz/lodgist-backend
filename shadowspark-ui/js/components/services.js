const services = [
  {
    name: 'AI Consultancy & Development',
    icon: '🤖',
    description: 'Strategic AI roadmaps, custom model training, and deployment to transform operations at scale.',
    case: '#'
  },
  {
    name: 'Web & Mobile Apps',
    icon: '📱',
    description: 'Modern responsive applications built with performance and accessibility baked in from the start.',
    case: '#'
  },
  {
    name: 'System Administration',
    icon: '🛠️',
    description: '24/7 infrastructure management ensuring uptime and stability across distributed environments.',
    case: '#'
  },
  {
    name: 'Cloud Infrastructure',
    icon: '☁️',
    description: 'Hybrid cloud solutions with automated scaling, backups, and cost optimization.',
    case: '#'
  },
  {
    name: 'Cybersecurity',
    icon: '🛡️',
    description: 'Proactive monitoring, penetration testing, and incident response for critical assets.',
    case: '#'
  },
  {
    name: 'Hardware Support',
    icon: '💻',
    description: 'Diagnostic repairs and preventative maintenance for mission-critical hardware.',
    case: '#'
  }
];

export function renderServices() {
  const section = document.getElementById('services');
  section.innerHTML = `
    <h2 id="services-heading">Services</h2>
    <div class="hex-grid" role="list">
      ${services.map((s,i)=>`
        <div class="hex" role="listitem">
          <div class="hex-content">
            <span class="icon" aria-hidden="true">${s.icon}</span>
            <h3>${s.name}</h3>
            <p>${s.description}</p>
            <a href="${s.case}" class="case-link">Case Study</a>
          </div>
        </div>`).join('')}
    </div>
    <div class="ai-mechanic">
      <h3>AI Mechanic Subscription</h3>
      <p>Predictive maintenance for your entire stack. Issues fixed before they bite.</p>
    </div>
  `;
}
