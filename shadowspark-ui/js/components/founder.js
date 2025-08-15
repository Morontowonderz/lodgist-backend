export function renderFounder() {
  const section = document.getElementById('founder');
  section.innerHTML = `
    <h2 id="founder-heading">Founder's Corner</h2>
    <img src="https://via.placeholder.com/200" alt="Portrait of ShadowSpark founder" />
    <p>25yo African founder building from Lagos</p>
    <blockquote>"We repair where it hurts most"</blockquote>
    <div class="video-wrapper">
      <iframe src="https://www.youtube.com/embed/dQw4w9WgXcQ" title="Makoko slum tech repair documentary" frameborder="0" allowfullscreen></iframe>
    </div>
  `;
}
