import { renderHero } from './components/hero.js';
import { renderServices } from './components/services.js';
import { renderDashboard } from './components/dashboard.js';
import { renderPortfolio } from './components/portfolio.js';
import { renderFounder } from './components/founder.js';
import { renderContact } from './components/contact.js';

document.addEventListener('DOMContentLoaded', () => {
  renderHero();
  renderServices();
  renderDashboard();
  renderPortfolio();
  renderFounder();
  renderContact();
});
