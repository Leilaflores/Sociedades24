import React from "react";
import "./estilos.css";

function Footer() {
  return (
    <div>
      <footer id="footer" className='Verde position-static bottom-0 w-100'>
        <div className='container d-flex flex-column justify-content-between align-items-center p-2 flex-sm-row'>
          <div className='iconos d-flex gap-2'>
            <a href="https://twitter.com/" target="_BLANK">
              <i className='fab fa-twitter text-light'></i>
            </a>
            <a href="https://www.instagram.com/" target="_BLANK">
              <i className='fab fa-instagram text-light'></i>
            </a>
            <a href="https://www.facebook.com/" target="_BLANK">
              <i className='fab fa-facebook text-light'></i>
            </a>
            <a href="https://wa.me/541166561000" target="_BLANK">
              <i className='fab fa-whatsapp text-light'></i>
            </a>
          </div>
          <div className='email'>
            <h5 className='text-light'>
            <a href="mailto:sociedades24hs@gmail.com" className='email text-reset text-decoration-none ' target="_BLANK">
                    <i> sociedades24hs@gmail.com</i>
                  </a>
            </h5>
          </div>
          <div className='copyright'>
            <h5 className='text-light'>© copyright</h5>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
