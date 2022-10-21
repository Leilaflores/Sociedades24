import React from "react";
import Carousel from "./Carousel";
import DomLegal from "./DomLegal";
import Formulario from "./Formulario";
import Gestion from "./Gestion";
import Sa from "./Sa";
import Sas from "./Sas";
import Srl from "./Srl";

function ContenedorBody () {
    return (
      <div>
        <Carousel />
        <div class="container">
          <div class="row">
            <div clas="col-12">
              <Sa />
            </div>
          </div>
          <div class="row">
            <div clas="col-12">
              <Sas />
            </div>
          </div>
          <div class="row">
            <div clas="col-12">
              <Srl />
            </div>
          </div>
          <div class="row">
            <div clas="col-12">
              <DomLegal />
            </div>
          </div>
          <div class="row">
            <div clas="col-12">
              <Gestion />
            </div>
          </div>
          <div class="row">
            <div clas="col-12">
              <Formulario />
            </div>
          </div>
        </div>
      </div>
    );
}

export default ContenedorBody;
