import React from "react";

function  DatosContacto () {
    return (
      <div id="Contacto" className='text-center'>
        <div className='container mt-5 pb-12'>
          <div className='row justify-content-center'>
            <div className='col-12'>
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3283.9899965129107!2d-58.40672938519514!3d-34.60441446504115!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bccaed35dd7ed5%3A0x72f7ad0fb05768c4!2sAv.%20Corrientes%202763%2C%20C1046%20CABA!5e0!3m2!1spt-BR!2sar!4v1666377617193!5m2!1spt-BR!2sar"></iframe>
            </div>
            <div className='col-12 mb-5'>
              <div>
                <div>
                  <p className='p-0 m-2'>Av. Corrientes 2763, Buenos Aires, Argentina</p>
                  <div className='m-2 d-block'>
                  <a href="mailto:sociedades24hs@gmail.com" className='email text-reset text-decoration-none:true' target="_BLANK">
                    <i> sociedades24hs@gmail.com</i>
                  </a> 
                  </div>
                  <div>
                  <a href="https://wa.me/541166561000" target="_BLANK">
                    <i className='fab fa-whatsapp text-black'></i>+54 9 11 6656-1000
                  </a>
                  </div>
                  <div>
                  <a href="tel:+5491166561000" target="_BLANK">
                    <i className="fa-solid fa-mobile-screen-button text-black "></i>+54 9 11 6656-1000
                  </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

export default DatosContacto;
