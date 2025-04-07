function showTime() {
	document.getElementById('currentTime').innerHTML = new Date().toUTCString();
}
showTime();
setInterval(function () {
	showTime();
}, 1000);

function copiarTexto() {
  const texto = document.getElementById("textoParaCopiar").innerText;

  navigator.clipboard.writeText(texto)
    .then(() => {
      alert("Texto copiado!");
    })
    .catch(err => {
      console.error("Erro ao copiar: ", err);
    });
}
