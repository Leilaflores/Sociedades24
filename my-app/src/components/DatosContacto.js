import React, { Component } from "react";

export class DatosContacto extends Component {
  render() {
    return (
      <div>
        <div class="container pb-2">
          <div class="row">
            <div class="col-sm-4">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3283.9899965129107!2d-58.40672938519514!3d-34.60441446504115!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bccaed35dd7ed5%3A0x72f7ad0fb05768c4!2sAv.%20Corrientes%202763%2C%20C1046%20CABA!5e0!3m2!1spt-BR!2sar!4v1666377617193!5m2!1spt-BR!2sar"></iframe>
            </div>
            <div class="col-sm-8">
              <div>
                <div>
                  <p>Av. Corrientes 2763, Buenos Aires, Argentina</p>
                  <p>sociedades24hs@gmail.com</p>
                  <a href="https://wa.me/541166561000" class="text-reset" target="_BLANK">
                    <i class="fab fa-whatsapp-square"> Escribinos...</i>
                  </a> 
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default DatosContacto;
