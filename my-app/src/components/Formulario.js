import React, { Component } from "react";

export class Formulario extends Component {
  render() {
    return (
      <div id="Contacto">
        <h4 class="mt-5">Contacto</h4>
        <form class="row g-3 my-4">
          <div class="col-md-12">
            <label for="inputEmail4" class="form-label">
              Nombre y Apellido
            </label>
            <input type="email" class="form-control" id="inputEmail4"></input>
          </div>
          <div class="col-md-6">
            <label for="inputEmail4" class="form-label">
              Email
            </label>
            <input type="email" class="form-control" id="inputEmail4"></input>
          </div>
          <div class="col-6">
            <label for="inputNumber" class="form-label">
              telefono
            </label>
            <input
              type="number"
              class="form-control"
              id="inputNumber"
              placeholder="+54 9 11.."
            ></input>
          </div>
          <div class="col-md-6">
            <label for="exampleFormControlTextarea1" class="form-label">Mi consulta es...</label>
            <textarea
              class="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
            ></textarea>
          </div>
          <div class="col-md-6">
            <label for="inputState" class="form-label">
              Servicio
            </label>
            <select id="inputState" class="form-select">
              <option selected>Elija...</option>
              <option>Constitucion de SAS</option>
              <option>Constitucion de SA</option>
              <option>Constitucion de SRL</option>
              <option>Servicio de domicilio legal y fiscal</option>
              <option>Gestoria en IGJ</option>
            </select>
          </div>
          <div class="col-12">
            <button type="submit" class="btn btn-primary">
              Enviar
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default Formulario;
