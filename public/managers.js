let usuarios = "";

function mostrarUsuarios() {
  fetch("/managers")
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
  fetch("/managers/username", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ username: document.getElementById("username").value }),
  })
    .then((res) => res.json())
    .then(function (datos) {
      if (datos.respuesta.length > 0) {
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
            <p><b><em>Username:</b> ${datos.respuesta[i].username}</em></p>
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
  fetch("/managers/departamento", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({departamento: document.getElementById("departamento").value}),
  })
    .then((res) => res.json())
    .then(function (datos) {
      if (datos.respuesta.length > 0) {
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
  fetch("/managers/delegacion", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ delegacion: document.getElementById("delegacion").value }),
  })
    .then((res) => res.json())
    .then(function (datos) {
      if (datos.respuesta.length > 0) {
        usuarios = "";
        document.getElementById("feedbackbuscarDelegacion").innerHTML = ""
        for (let i = 0; i < datos.respuesta.length; i++) {
          usuarios += `<div class="card">
          <img src="${datos.respuesta[i].foto}" alt="Foto de ${datos.respuesta[i].nombre}">
          <div class="container">
            <h4><strong>${datos.respuesta[i].nombre} ${datos.respuesta[i].apellido}</strong></h4>
            <p><b>Puesto:</b> ${datos.respuesta[i].puesto}</p>
            <p><b>Departamento:</b> ${datos.respuesta[i].departamento}</p>
            <p><b><em>Delegación:</b> ${datos.respuesta[i].delegacion}</em></p>
            <p><b>Username:</b> ${datos.respuesta[i].username}</p>
            <p><b>Dirección:</b> ${datos.respuesta[i].direccion}</p>
            <p><b>Email:</b> <a href="mailto:${datos.respuesta[i].email}">${datos.respuesta[i].email}</a></p>
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

function crearUsuario() {
  fetch("/managers/crear", {
    method: "POST",
    headers: {
      "Content-Type": "Application/Json",
    },
    body: JSON.stringify({
      nombre: document.getElementById("nombreN").value,
      apellido: document.getElementById("apellidoN").value,
      delegacion: document.getElementById("delegacionN").value,
      direccion: document.getElementById("direccionN").value,
      puesto: document.getElementById("puestoN").value,
      email: document.getElementById("emailN").value,
      departamento: document.getElementById("departamentoN").value,
      foto: document.getElementById("fotoN").value,
      username: document.getElementById("usernameN").value,
      password: document.getElementById("passwordN").value,
    }),
  })
    .then((res) => res.json())
    .then(function (datos) {
      if (!datos.error) {
        document.getElementById(
          "feedbackNuevo"
        ).innerHTML = `${datos.mensaje}`;
        document.getElementById("nombreN").value = ""
        document.getElementById("apellidoN").value = ""
        document.getElementById("delegacionN").value = ""
        document.getElementById("direccionN").value = ""
        document.getElementById("puestoN").value = ""
        document.getElementById("emailN").value = ""
        document.getElementById("departamentoN").value = ""
        document.getElementById("fotoN").value = ""
        document.getElementById("usernameN").value = ""
        document.getElementById("passwordN").value = ""
      } else {
        document.getElementById(
          "feedbackNuevo"
        ).innerHTML = `<h4>Error, el usuario ya existe en la base de datos</h4>`;
      }
    });
}

function editarUsuario() {
  fetch("/managers/editar", {
    method: "PUT",
    headers: {
      "Content-Type": "Application/Json",
    },
    body: JSON.stringify({
      nombre: document.getElementById("nombreE").value,
      apellido: document.getElementById("apellidoE").value,
      delegacion: document.getElementById("delegacionE").value,
      direccion: document.getElementById("direccionE").value,
      puesto: document.getElementById("puestoE").value,
      email: document.getElementById("emailE").value,
      departamento: document.getElementById("departamentoE").value,
      username: document.getElementById("usernameE").value,
    }),
  })
    .then((res) => res.json())
    .then(function (datos) {
      console.log(datos)
      if (!datos.error) {
        document.getElementById(
          "feedbackEditar"
        ).innerHTML = `${datos.mensaje}`;
        document.getElementById("nombreE").value = ""
        document.getElementById("apellidoE").value = ""
        document.getElementById("delegacionE").value = ""
        document.getElementById("direccionE").value = ""
        document.getElementById("puestoE").value = ""
        document.getElementById("emailE").value = ""
        document.getElementById("departamentoE").value = ""
        document.getElementById("fotoE").value = ""
      } else {
        document.getElementById(
          "feedbackEditar"
        ).innerHTML = `<h4>No se ha podido editar el usuario seleccionado</h4>`;
      }
    });
}


function borrarUsuario() {
  fetch("/managers/borrar", {
    method: "DELETE",
    headers: {
      "Content-Type": "Application/Json",
    },
    body: JSON.stringify({
      username: document.getElementById("usernameB").value,
    }),
  })
    .then((res) => res.json())
    .then(function (datos) {
      if (!datos.error) {
        document.getElementById(
          "feedbackBorrar"
        ).innerHTML = `${datos.mensaje}`;
        document.getElementById("usernameB").value = ""
      } else {
        document.getElementById(
          "feedbackBorrar"
        ).innerHTML = `${datos.mensaje}`;
      }
    });
}