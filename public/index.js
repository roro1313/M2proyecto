


function registrarCliente() {
    fetch("/clientes/registro", {
      method: "POST",
      headers: {
        "Content-Type": "Application/Json",
      },
      body: JSON.stringify({
        nombre: document.getElementById("nombre").value,
        apellido: document.getElementById("apellido").value,
        dni: document.getElementById("dni").value,
      }),
    })
      .then((res) => res.json())
      .then(function (datos) {
        if (datos.mensaje.length === 0) {
          imprimir(`${datos.mensaje}`);
        } else {
          imprimir(
            `Se ha creado ${datos.contenido.insertedCount} registro correctamente`
          );
        }
      });

}

function habitaciones() {
    fetch("/habitaciones")
      .then((res) => res.json())
      .then(function (datos) {
        if (!datos.error) {
          let habitaciones
          for (let i = 0; i < datos.respuesta.length; i++) {
          habitaciones += `<div><p>Habitación ${datos.respuesta[i].numero}, estado: ${datos.respuesta[i].estado}</p></div>`  
          }
          document.getElementById("habitaciones").innerHTML = `${habitaciones}`
        } else {
          imprimir("Ha habido un error");
        }
      });
  }
  

  function imprimir(info) {
    document.getElementById("feedback").innerHTML = `<h4>${info}</h4>`;
  }
  