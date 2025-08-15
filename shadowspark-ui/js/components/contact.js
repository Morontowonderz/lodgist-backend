export function renderContact() {
  const section = document.getElementById('contact');
  section.innerHTML = `
    <h2 id="contact-heading">Contact ShadowSpark</h2>
    <div class="contact-paths">
      <button id="chatbot" class="cta-button">AI Chatbot</button>
      <p>Emergency USSD: <a href="tel:*425*0#">*425*0#</a></p>
    </div>
    <form aria-label="Contact form">
      <label for="service">Service Needed</label>
      <select id="service" name="service">
        <option>AI Consultancy & Development</option>
        <option>Web/Mobile App Development</option>
        <option>System Administration & IT Support</option>
        <option>Cloud Infrastructure Solutions</option>
        <option>Cybersecurity Services</option>
        <option>Hardware Technical Support</option>
      </select>
      <label for="message">Message</label>
      <textarea id="message" name="message" rows="4"></textarea>
      <button class="cta-button" type="submit">Send</button>
    </form>
    <figure class="hq">
      <img src="https://via.placeholder.com/600x300" alt="Map of Lagos HQ" loading="lazy" decoding="async" />
      <figcaption>Lagos HQ with maker-space</figcaption>
    </figure>
  `;

  section.querySelector('#chatbot').addEventListener('click', () => alert('Chatbot coming soon'));
}
