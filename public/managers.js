let usuarios = "";

function mostrarUsuarios() {
  fetch("/usuarios")
    .then((res) => res.json())
    .then(function (datos) {
      if (datos.respuesta.length > 0) {
        usuarios = "";
        for (let i = 0; i < datos.respuesta.length; i++) {
          usuarios += `<div class="card">
          <img src="${datos.respuesta[i].foto}" alt="Foto de ${datos.respuesta[i].nombre}">
          <div class="container">
            <h4><strong>${datos.respuesta[i].nombre} ${datos.respuesta[i].apellido}</strong></h4>
            <p><b>Puesto:</b> ${datos.respuesta[i].puesto}</p>
            <p><b>Departamento:</b> ${datos.respuesta[i].departamento}</p>
            <p><b>Delegación:</b> ${datos.respuesta[i].delegacion}</p>
            <p><b>Username:</b> ${datos.respuesta[i].username}</p>
            <p><b>Dirección:</b> ${datos.respuesta[i].direccion}</p>
            <p><b>Email:</b> <a href="mailto:${datos.respuesta[i].email}">${datos.respuesta[i].email}</a></p>
            <button onclick="editarUsuario()">Editar</button><button onclick="borrarUsuario()">Borrar</button>
          </div>
          </div>`;
        }
        document.getElementById("resultadosBusqueda").innerHTML = `${usuarios}`;
      } else {
        document.getElementById(
          "feedbackbuscarBoton"
        ).innerHTML = `<h4 class="error">Ha habido un error</h4>`;
      }
    });
}

function buscarUsuario() {
  let buscar = { username: document.getElementById("username").value };
  fetch("/managers/username", {
    method: "POST",
    headers: {
      "Content-Type": "Application/Json",
    },
    body: JSON.stringify(buscar),
  })
    .then((res) => res.json())
    .then(function (datos) {
      if (datos.respuesta[0].username === document.getElementById("username").value) {
        usuarios = "";
        document.getElementById(
          "feedbackbuscarUsuario"
        ).innerHTML = ""
        for (let i = 0; i < datos.respuesta.length; i++) {
          usuarios += `<div class="card">
          <img src="${datos.respuesta[i].foto}" alt="Foto de ${datos.respuesta[i].nombre}">
          <div class="container">
            <h4><strong>${datos.respuesta[i].nombre} ${datos.respuesta[i].apellido}</strong></h4>
            <p><b>Puesto:</b> ${datos.respuesta[i].puesto}</p>
            <p><b>Departamento:</b> ${datos.respuesta[i].departamento}</p>
            <p><b>Delegación:</b> ${datos.respuesta[i].delegacion}</p>
            <p><b>Username:</b> ${datos.respuesta[i].username}</p>
            <p><b>Dirección:</b> ${datos.respuesta[i].direccion}</p>
            <p><b>Email:</b> <a href="mailto:${datos.respuesta[i].email}">${datos.respuesta[i].email}</a></p>
            <button onclick="editarUsuario()">Editar</button><button onclick="borrarUsuario()">Borrar</button>
          </div>
          </div>`;
        }
        document.getElementById("resultadosBusqueda").innerHTML = `${usuarios}`;
      } else {
        document.getElementById(
          "feedbackbuscarUsuario"
        ).innerHTML = `<h4 class="error">Usuario no encontrado</h4>`;
      }
    });
}

function buscarDepartamento() {
  let buscar = { departamento: document.getElementById("departamento").value };
  console.log(buscar)
  fetch("/managers/departamento", {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({patata: "patata"}),
  })
    .then((res) => res.json())
    .then(function (datos) {
      let departamento = document.getElementById("departamento").value
      if (datos.respuesta.departamento.includes(departamento)) {
        usuarios = "";
        document.getElementById("feedbackbuscarDepartamento").innerHTML = ""
        for (let i = 0; i < datos.respuesta.length; i++) {
          usuarios += `<div class="card">
          <img src="${datos.respuesta[i].foto}" alt="Foto de ${datos.respuesta[i].nombre}">
          <div class="container">
            <h4><strong>${datos.respuesta[i].nombre} ${datos.respuesta[i].apellido}</strong></h4>
            <p><b>Puesto:</b> ${datos.respuesta[i].puesto}</p>
            <p><b><em>Departamento:</b> ${datos.respuesta[i].departamento}</em></p>
            <p><b>Delegación:</b> ${datos.respuesta[i].delegacion}</p>
            <p><b>Username:</b> ${datos.respuesta[i].username}</p>
            <p><b>Dirección:</b> ${datos.respuesta[i].direccion}</p>
            <p><b>Email:</b> <a href="mailto:${datos.respuesta[i].email}">${datos.respuesta[i].email}</a></p>
            <button onclick="editarUsuario()">Editar</button><button onclick="borrarUsuario()">Borrar</button>
          </div>
          </div>`;
        }
        document.getElementById("resultadosBusqueda").innerHTML = `${usuarios}`;
      } else {
        document.getElementById(
          "feedbackbuscarDepartamento"
        ).innerHTML = `<h4 class="error">Departamento no encontrado</h4>`;
      }
    });
}

function buscarDelegacion() {
  let buscar = { delegacion: document.getElementById("delegacion").value };
  fetch("/managers/delegacion", {
    method: "POST",
    headers: {
      "Content-Type": "Application/Json",
    },
    body: JSON.stringify(buscar),
  })
    .then((res) => res.json())
    .then(function (datos) {
      if (datos.respuesta[0].delegacion === document.getElementById("delegacion").value) {
        usuarios = "";
        document.getElementById("feedbackbuscarDelegacion").innerHTML = ""
        for (let i = 0; i < datos.respuesta.length; i++) {
          usuarios += `<div class="card">
          <img src="${datos.respuesta[i].foto}" alt="Foto de ${datos.respuesta[i].nombre}">
          <div class="container">
            <h4><strong>${datos.respuesta[i].nombre} ${datos.respuesta[i].apellido}</strong></h4>
            <p><b>Puesto:</b> ${datos.respuesta[i].puesto}</p>
            <p><b>Departamento:</b> ${datos.respuesta[i].departamento}</p>
            <p><b>Delegación:</b> ${datos.respuesta[i].delegacion}</p>
            <p><b>Username:</b> ${datos.respuesta[i].username}</p>
            <p><b>Dirección:</b> ${datos.respuesta[i].direccion}</p>
            <p><b>Email:</b> <a href="mailto:${datos.respuesta[i].email}">${datos.respuesta[i].email}</a></p>
            <button onclick="editarUsuario()">Editar</button><button onclick="borrarUsuario()">Borrar</button>
          </div>
          </div>`;
        }
        document.getElementById("resultadosBusqueda").innerHTML = `${usuarios}`;
      } else {
        document.getElementById(
          "feedbackbuscarDelegacion"
        ).innerHTML = `<h4 class="error">Delegación no encontrada</h4>`;
      }
    });
}

//Terminar
function borrarUsuario() {
  fetch("/managers/borrar", {
    method: "DELETE",
    headers: {
      "Content-Type": "Application/Json",
    },
    body: JSON.stringify(),
  })
    .then((res) => res.json())
    .then(function (datos) {
      if (datos.respuesta.deletedCount > 0) {
        document.getElementById(
          "borrar"
        ).innerHTML = `<h4>Usuario eliminado correctamente</h4>`;
      } else {
        document.getElementById(
          "borrar"
        ).innerHTML = `<h4>Error, no se ha eliminado el usuario</h4>`;
      }
    });
}
