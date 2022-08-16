
class Footer extends HTMLElement {
  constructor() {
    super();
  }

connectedCallback() {
  this.innerHTML = ` 
<footer>
  <div class="footer-container">
    <div class="footer__box">
      <div class="footer__left-1 footer__left">Want our help?<br> We got you</div>
      <div class="footer__left-2 footer__center"><span>Contact</span>pages and some</div>
      <div class="footer__left-3 footer__bot"><span>Other thing</span>pages and resources</div>
    </div>
      
    <div class="footer__box">
      <div class="footer__center-1 footer__left">
      <a>
        <div>Reach out mail</div>
        <svg></svg>
      </a>
      </div>

      <div class="footer__center-2 footer__center" id="socialTags">
    
        <a><svg class="linkedin"></svg></a>
        <a><svg class="instagram"></svg></a>
        <a><svg class="twitter"></svg></a>
        <a><svg class="facebook"></svg></a>
      </div>
    </div>

    <div class="footer__box ">
      <img class="footer__bottom-1 footer__left"></img>
      <div class="footer__bottom-2 footer__center">all rights reserved 
        <span>Glossary</span>
      </div>
    </div>
  </div>
</footer>
    `
  }
}
customElements.define('footer-component', Footer);