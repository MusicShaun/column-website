
class MobileNav extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `

  <div class="mobileNav" id="nav-menu">
    <a href="http://127.0.0.1:5500/static/index.html" class="mobileNav__1">
      <div class="mobileNav__text mobileNav__text-1">
        <div>index</div>
      </div>
    </a>
    <a href="http://127.0.0.1:5500/static/pagetwo.html" class="mobileNav__2">
      <div class="mobileNav__text mobileNav__text-2">
        <div>page 2</div>
      </div>
    </a>
    <a href="http://127.0.0.1:5500/static/pagethree.html" class="mobileNav__3">
      <div class="mobileNav__text mobileNav__text-3">
        <div>page 3</div>
      </div>
    </a>
    <a href="http://127.0.0.1:5500/static/pagefour.html" class="mobileNav__4">
      <div class="mobileNav__text mobileNav__text-4">
        <div>page 4</div>
      </div>
    </a>
  </div>
    `
  }  
}

customElements.define('nav-component', MobileNav);

