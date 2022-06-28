class MobileNav extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `

  <div class="mobileNav" id="nav-menu">
    <a class="mobileNav__1">
      <div class="mobileNav__text mobileNav__text-1">
        <div>Cuz</div>
      </div>
    </a>
    <a class="mobileNav__2">
      <div class="mobileNav__text mobileNav__text-2">
        <div>bruzzy</div>
      </div>
    </a>
    <a class="mobileNav__3">
      <div class="mobileNav__text mobileNav__text-3">
        <div>muzz</div>
      </div>
    </a>
    <a class="mobileNav__4">
      <div class="mobileNav__text mobileNav__text-4">
        <div>fuzz</div>
      </div>
    </a>
  </div>
    `
  }  
}

customElements.define('nav-component', MobileNav);