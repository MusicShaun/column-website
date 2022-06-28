
class Header extends HTMLElement {
  constructor() {
    super();
  }

connectedCallback() {
  this.innerHTML = `
  <nav>
    <div class="left">
      <svg class="left-logo"></svg>
      <div class="left-title">Title</div>
      <div class="left-dscrp">Some such bull shit</div>
    </div>

    <button class="contact__button">
      <div>Contact </div>
      <svg class="contactSVG" ></svg>
    </button>

    <button class="nav-menu-icon">===</button>
  </nav>

  `
  }
}

customElements.define('header-component', Header);