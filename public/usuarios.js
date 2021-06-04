let usuarioLogin = "";

function login() {
  fetch("/usuarios/login", {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username: document.getElementById("username").value,
      password: document.getElementById("password").value,
    }),
  })
    .then((res) => res.json())
    .then(function (datos) {
      if (datos.sesion) {
        usuarioLogin = "";
        document.getElementById("datosUsuario").innerHTML = "";
        usuarioLogin += `<div>${datos.mensaje}</div>
        <div class="card">
          <img src="${datos.respuesta[0].foto}" alt="Foto de ${datos.respuesta[0].nombre}">
          <div class="container">
            <h4><strong>${datos.respuesta[0].nombre} ${datos.respuesta[0].apellido}</strong></h4>
            <p><b>Puesto:</b> ${datos.respuesta[0].puesto}</p>
            <p><b>Departamento:</b> ${datos.respuesta[0].departamento}</p>
            <p><b>Delegación:</b> ${datos.respuesta[0].delegacion}</p>
            <p><b><em>Username:</b> ${datos.respuesta[0].username}</em></p>
            <p><b>Dirección:</b> ${datos.respuesta[0].direccion}</p>
            <p><b>Email:</b> <a href="mailto:${datos.respuesta[0].email}">${datos.respuesta[0].email}</a></p>
          </div>
          </div>`;
        document.getElementById("datosUsuario").innerHTML = `${usuarioLogin}`;
      } else {
        document.getElementById(
          "datosUsuario"
        ).innerHTML = `<h4 class="error">${datos.mensaje}</h4>`;
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
      console.log(datos);
      if (!datos.error) {
        document.getElementById(
          "feedbackEditar"
        ).innerHTML = `${datos.mensaje}`;
      } else {
        document.getElementById(
          "feedbackEditar"
        ).innerHTML = `<h4>No se ha podido editar el usuario seleccionado</h4>`;
      }
    });
}
