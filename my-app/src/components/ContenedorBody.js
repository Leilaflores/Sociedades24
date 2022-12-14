import React from "react";
import Carousel from "./Carousel";
import DomLegal from "./DomLegal";
import DatosContacto from "./DatosContacto";
import Gestion from "./Gestion";
import Sa from "./Sa";
import Sas from "./Sas";
import Srl from "./Srl";

function ContenedorBody () {
    return (
      <div className='body'>
        <Carousel />
        <div className='container'>
          <div className='row'>
            <div className='col-12'>
              <Sa />
            </div>
          </div>
          <div className='row'>
            <div className='col-12'>
              <Sas />
            </div>
          </div>
          <div className='row'>
            <div className='col-12'>
              <Srl />
            </div>
          </div>
          <div className='row'>
            <div className='col-12'>
              <DomLegal />
            </div>
          </div>
          <div className='row'>
            <div className='col-12'>
              <Gestion />
            </div>
          </div>
          <div className='row'>
            <div className='col-12'>
              <DatosContacto />
            </div>
          </div>
        </div>
      </div>
    );
}

export default ContenedorBody;
