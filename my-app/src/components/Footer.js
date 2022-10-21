import React from "react";

function Footer() {
  return (
    <div>
      <footer id="footer" class="position-static bottom-0 w-100">
        <div class="container d-flex flex-column justify-content-between align-items-center p-2 flex-sm-row">
          <div class="iconos d-flex gap-2">
            <a href="https://twitter.com/" target="_BLANK">
              <i class="fab fa-twitter-square"></i>
            </a>
            <a href="https://www.instagram.com/" target="_BLANK">
              <i class="fab fa-instagram"></i>
            </a>
            <a href="https://www.facebook.com/" target="_BLANK">
              <i class="fab fa-facebook-square"></i>
            </a>
            <a href="https://wa.me/541166561000" target="_BLANK">
              <i class="fab fa-whatsapp-square"></i>
            </a>
          </div>
          <div class="email">
            <h5>sociedades24hs@gmail.com</h5>
          </div>
          <div class="copyright">
            <h5>© copyright</h5>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
