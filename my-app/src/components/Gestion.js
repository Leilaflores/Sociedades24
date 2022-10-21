import React, { Component } from "react";

export class Gestion extends Component {
  render() {
    return (
      <div id="Gestion" class="mt-4">
        <div class="card text-center">
          <div class="card-header"><strong>Gestión de trámites en IGJ</strong></div>
          <div class="card-body">
            <p class="card-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ex
              dui, lacinia at orci eu, luctus aliquam dolor. Vestibulum volutpat
              turpis sed ante blandit, et gravida lectus bibendum. Nulla
              facilisis vel tortor et ultrices. Vivamus tempus ultricies magna,
              sed ultricies ex tristique aliquam. Vivamus sit amet nulla ac arcu
              aliquet dictum at nec tortor. Sed ut sodales mi. Mauris vehicula
              augue at elementum rutrum. Ut vel sem at leo sodales dapibus eget
              vel libero.
            </p>
            <a href="#" class="btn btn-primary">
              Go somewhere
            </a>
          </div>
          <div class="card-footer text-muted"></div>
        </div>
      </div>
    );
  }
}

export default Gestion;
