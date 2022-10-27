import React from "react";

function Formulario () {
    return (
      <div id="Contacto'>
        <h4 className='mt-5'>Contacto</h4>
        <form className='row g-3 my-4'>
          <div className='col-md-12'>
            <label for="inputEmail4" className='form-label'>
              Nombre y Apellido
            </label>
            <input type="email" className='form-control" id="inputEmail4'></input>
          </div>
          <div className='col-md-6'>
            <label for="inputEmail4" className='form-label'>
              Email
            </label>
            <input type="email" className='form-control" id="inputEmail4'></input>
          </div>
          <div className='col-6'>
            <label for="inputNumber" className='form-label'>
              telefono
            </label>
            <input
              type="number"
              className='form-control"
              id="inputNumber"
              placeholder="+54 9 11.."
            ></input>
          </div>
          <div className='col-md-6'>
            <label for="exampleFormControlTextarea1" className='form-label'>Mi consulta es...</label>
            <textarea
              className='form-control"
              id="exampleFormControlTextarea1"
              rows="3"
            ></textarea>
          </div>
          <div className='col-md-6'>
            <label for="inputState" className='form-label'>
              Servicio
            </label>
            <select id="inputState" className='form-select'>
              <option selected>Elija...</option>
              <option>Constitucion de SAS</option>
              <option>Constitucion de SA</option>
              <option>Constitucion de SRL</option>
              <option>Servicio de domicilio legal y fiscal</option>
              <option>Gestoria en IGJ</option>
            </select>
          </div>
          <div className='col-12'>
            <button type="submit" className='btn btn-primary'>
              Enviar
            </button>
          </div>
        </form>
      </div>
    );
}

export default Formulario;
